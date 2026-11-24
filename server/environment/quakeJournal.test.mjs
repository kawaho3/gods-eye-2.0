import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { createQuakeAlerts, quakeRegion } from '../../src/data/quakeAlerts.js';
import {
  openQuakeJournal,
  quakeJournalStats,
  recordQuakes,
  replayQuakes,
} from './quakeJournal.js';
import { quakeReport, renderQuakeReport } from './quakeReport.js';

const time = Date.parse('2026-01-02T10:00:00Z');
const region = quakeRegion([170, -20, -170, 20], 4);
const event = (usgsId, lon, mag = 5) => ({
  stableId: usgsId,
  usgsId,
  time,
  lon,
  lat: 20,
  mag,
  place: '<img> | Bay',
  depthKm: 12,
});

test('records empty, revised and unavailable snapshots and replays them after restart', (t) => {
  const dir = mkdtempSync(path.join(tmpdir(), 'gev-quakes-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const file = path.join(dir, 'quakes.db');
  const journal = openQuakeJournal(file, { region });
  const first = event('q1', -170);
  const second = event('q2', 170);
  try {
    assert.equal(replayQuakes(journal, time).state, 'unrecorded');
    assert.deepEqual(recordQuakes(journal, [], time, 7), []);
    assert.deepEqual(
      recordQuakes(
        journal,
        [first, second, event('outside', 0), event('low', -175, 3)],
        time + 1,
        7,
      ),
      [first, second],
    );
    assert.deepEqual(recordQuakes(journal, null, time + 2, 7), []);
    assert.deepEqual(
      recordQuakes(journal, [{ ...first, mag: 6 }], time + 3, 7),
      [],
    );
  } finally {
    journal.db.close();
  }
  assert.throws(
    () =>
      openQuakeJournal(file, { region: quakeRegion([-10, -10, 10, 10], 5) }),
    /different region/,
  );
  const reopened = openQuakeJournal(file, { readOnly: true });
  try {
    assert.equal(replayQuakes(reopened, time).state, 'available');
    assert.deepEqual(replayQuakes(reopened, time).events, []);
    assert.deepEqual(replayQuakes(reopened, time + 1).events, [first, second]);
    assert.equal(replayQuakes(reopened, time + 2).state, 'unavailable');
    assert.deepEqual(replayQuakes(reopened).events, [{ ...first, mag: 6 }]);
    assert.equal(quakeJournalStats(reopened).gaps, 1);
    assert.ok(quakeJournalStats(reopened).bytes > 0);
  } finally {
    reopened.db.close();
  }
});

test('retention prunes old polls, new dates on the same ID do not re-alert, and invalid rules fail', () => {
  const journal = openQuakeJournal(':memory:', { region });
  try {
    const row = event('updated', 175);
    recordQuakes(journal, [row], time, 2);
    assert.deepEqual(
      recordQuakes(journal, [{ ...row, time: time + 5 }], time + 5, 2),
      [],
    );
    recordQuakes(journal, [], time + 3 * 86_400_000, 2);
    assert.equal(replayQuakes(journal, time + 5).state, 'unrecorded');
    assert.throws(() => recordQuakes(journal, [], time, 0));
    assert.equal(quakeJournalStats(journal).captures, 1);
  } finally {
    journal.db.close();
  }
  assert.throws(() => quakeRegion([NaN, 0, 1, 5], 4));
  assert.throws(() => quakeRegion([0, 0, 0, 5], 4));
  assert.throws(() => quakeRegion([0, -4, 5, 4], 2));
});

test('refuses a foreign database and preserves its rows', (t) => {
  const dir = mkdtempSync(path.join(tmpdir(), 'gev-quake-db-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const file = path.join(dir, 'other.db');
  let db = new DatabaseSync(file);
  db.exec('CREATE TABLE sample (v); INSERT INTO sample VALUES (7)');
  db.close();
  assert.throws(() => openQuakeJournal(file, { region }), /empty file/);
  db = new DatabaseSync(file);
  try {
    assert.equal(db.prepare('SELECT v FROM sample').get().v, 7);
  } finally {
    db.close();
  }
});

test('desktop rule primes, handles date-line boundaries and suppresses revisions and id-less alerts', () => {
  const observe = createQuakeAlerts(region);
  assert.deepEqual(observe([event('baseline', 180)], time), []);
  const row = event('east', -170);
  assert.deepEqual(
    observe([row, event('outside', 0), event(null, 175)], time + 1),
    [row],
  );
  assert.deepEqual(observe([{ ...row, mag: 6 }], time + 2), []);
});

test('reports retain source and occurrence time, distinguish outages, and escape imported names', () => {
  const row = event('q123', 178);
  const report = quakeReport({
    region,
    observed: time + 15_000,
    state: 'available',
    events: [row],
  });
  const html = renderQuakeReport(report, 'html');
  assert.match(html, /&lt;img&gt;/);
  assert.doesNotMatch(html, /<img>/);
  assert.match(html, /2026-01-02T10:00:00.000Z/);
  assert.match(html, /earthquakes\/eventpage\/q123/);
  const text = renderQuakeReport(report, 'md');
  assert.match(text, /UTC/);
  assert.match(text, /can be revised/);
  const pack = JSON.parse(renderQuakeReport(report, 'geojson'));
  assert.equal(pack.version, 1);
  assert.deepEqual(pack.features[0].geometry.coordinates, [178, 20]);
  assert.equal(pack.attribution, 'U.S. Geological Survey');
  assert.equal(
    quakeReport(
      { region, observed: time, state: 'available', events: [row] },
      { from: time + 1, to: time + 2 },
    ).events.length,
    0,
  );
  const gap = quakeReport({
    region,
    observed: time,
    state: 'unavailable',
    events: [],
  });
  assert.match(gap.coverage, /unknown/);
  assert.throws(() => renderQuakeReport(gap, 'geojson'), /available snapshot/);
});
