import { parseArgs } from 'node:util';
import { readFile, writeFile } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';
import { createUsgsEarthquakeSource } from '../src/layers/earthquakes/source.js';
import { normalizeEarthquakeSnapshot } from '../src/layers/earthquakes/records.js';
import {
  openQuakeJournal,
  recordQuakes,
  replayQuakes,
  quakeJournalStats,
} from '../server/environment/quakeJournal.js';
import { quakeRegion } from '../src/data/quakeAlerts.js';
import {
  quakeReport,
  renderQuakeReport,
} from '../server/environment/quakeReport.js';

const usage = `Earthquake journal
  record --db FILE --bbox=WEST,SOUTH,EAST,NORTH [--min-mag 4] [--retention-days 7] [--watch]
  status --db FILE
  replay --db FILE [--at ISO_TIME]
  report --db FILE [--at ISO_TIME] [--from ISO_TIME] [--to ISO_TIME] [--format md|html|pdf|geojson] [--out NEW_FILE]

Record polls the keyless USGS daily feed once. Use --watch to poll once a minute until Ctrl+C.
For a single offline capture use --input FILE with a USGS-format GeoJSON fixture.
Reuse the same database to resume. The initial successful poll sets the alert baseline.
UTC timestamps must include a timezone. Report reads the local archive.`;

function instant(value) {
  if (value === undefined) return undefined;
  const ms = Date.parse(value);
  if (!/(Z|[+-]\d\d:\d\d)$/i.test(value) || !Number.isFinite(ms))
    throw new Error('Supply an ISO timestamp with an explicit timezone.');
  return ms;
}

async function record(journal, opts) {
  const retention = Number(opts['retention-days'] ?? 7);
  if (!Number.isSafeInteger(retention) || retention < 1)
    throw new Error('--retention-days must be a positive integer.');
  if (opts.input && opts.watch)
    throw new Error('--input selects a single offline capture.');
  const source = createUsgsEarthquakeSource();
  const stop = new AbortController();
  const halt = () => stop.abort();
  process.once('SIGINT', halt);
  process.once('SIGTERM', halt);
  try {
    do {
      let rows;
      if (opts.input) {
        rows = normalizeEarthquakeSnapshot(
          JSON.parse(await readFile(opts.input, 'utf8')),
        );
        if (!rows) throw new Error('Invalid USGS GeoJSON snapshot.');
      } else {
        try {
          rows = await source.getSnapshot({
            signal: AbortSignal.any([stop.signal, AbortSignal.timeout(30_000)]),
          });
        } catch (error) {
          if (stop.signal.aborted) return;
          recordQuakes(journal, null, Date.now(), retention);
          if (!opts.watch) throw error;
          console.error(
            'USGS poll unavailable. Recorded a gap and will retry.',
          );
        }
      }
      if (rows) {
        const at = Date.now();
        const alerts = recordQuakes(journal, rows, at, retention);
        console.log(
          JSON.stringify({
            observedAt: new Date(at).toISOString(),
            source: 'USGS',
            newMatches: alerts.map((e) => ({
              id: e.usgsId,
              magnitude: e.mag,
              eventTime: new Date(e.time).toISOString(),
              place: e.place,
              lat: e.lat,
              lon: e.lon,
            })),
          }),
        );
      }
      if (opts.watch) await delay(60_000, undefined, { signal: stop.signal });
    } while (opts.watch && !stop.signal.aborted);
  } catch (error) {
    if (!stop.signal.aborted) throw error;
  } finally {
    process.off('SIGINT', halt);
    process.off('SIGTERM', halt);
  }
}

async function pdfBytes(html) {
  const { default: puppeteer } = await import('puppeteer');
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(false);
    await page.setOfflineMode(true);
    await page.setContent(html);
    return await page.pdf({ preferCSSPageSize: true, printBackground: true });
  } finally {
    await browser.close();
  }
}

async function main() {
  const { positionals, values: o } = parseArgs({
    allowPositionals: true,
    options: {
      db: { type: 'string' },
      bbox: { type: 'string' },
      'min-mag': { type: 'string' },
      'retention-days': { type: 'string' },
      watch: { type: 'boolean' },
      input: { type: 'string' },
      at: { type: 'string' },
      from: { type: 'string' },
      to: { type: 'string' },
      format: { type: 'string' },
      out: { type: 'string' },
      help: { type: 'boolean', short: 'h' },
    },
  });
  if (o.help || !positionals.length) {
    console.log(usage);
    return;
  }
  const [command] = positionals;
  const allowed = {
    record: ['db', 'bbox', 'min-mag', 'retention-days', 'watch', 'input'],
    status: ['db'],
    replay: ['db', 'at'],
    report: ['db', 'at', 'from', 'to', 'format', 'out'],
  };
  if (positionals.length !== 1 || !Object.hasOwn(allowed, command) || !o.db)
    throw new Error(usage);
  for (const key of Object.keys(o))
    if (!allowed[command].includes(key))
      throw new Error(`--${key} is unavailable for ${command}.`);
  if (o['min-mag'] !== undefined && o.bbox === undefined)
    throw new Error('Specify the rule together with --bbox.');
  const bbox = o.bbox
    ?.split(',')
    .map((s) => (s.trim() === '' ? NaN : Number(s)));
  const region = bbox && quakeRegion(bbox, Number(o['min-mag'] ?? 2.5));
  if (command === 'record' && !region) {
    // An explicit region is required to create a new database.
    const existing = openQuakeJournal(o.db, { readOnly: true });
    existing.db.close();
  }
  const journal = openQuakeJournal(o.db, {
    region,
    readOnly: command !== 'record',
  });
  try {
    if (command === 'record') return await record(journal, o);
    if (command === 'status') {
      console.log(JSON.stringify(quakeJournalStats(journal), null, 2));
      return;
    }
    const snapshot = replayQuakes(journal, instant(o.at));
    if (command === 'replay') {
      console.log(JSON.stringify(snapshot, null, 2));
      return;
    }
    const format = o.format ?? 'md';
    if (format === 'pdf' && !o.out)
      throw new Error('PDF output needs --out FILE.pdf.');
    const report = quakeReport(snapshot, {
      from: instant(o.from),
      to: instant(o.to),
    });
    const text = renderQuakeReport(report, format === 'pdf' ? 'html' : format);
    const data = format === 'pdf' ? await pdfBytes(text) : text;
    if (o.out) await writeFile(o.out, data, { flag: 'wx' });
    else process.stdout.write(data);
  } finally {
    journal.db.close();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
