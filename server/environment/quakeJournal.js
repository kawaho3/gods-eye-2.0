import { DatabaseSync } from 'node:sqlite';
import { matchingQuakes } from '../../src/data/quakeAlerts.js';

const DAY = 86_400_000;
const VERSION = 1;

/** One local archive owns one region and magnitude rule for its lifetime. */
export function openQuakeJournal(file, { region, readOnly = false } = {}) {
  const db = new DatabaseSync(file, { readOnly });
  try {
    db.exec('PRAGMA busy_timeout=5000');
    if (!readOnly) db.exec('BEGIN IMMEDIATE');
    const version = db.prepare('PRAGMA user_version').get().user_version;
    if (version === 0 && region && !readOnly) {
      if (
        db
          .prepare(
            "SELECT name FROM sqlite_master WHERE name NOT LIKE 'sqlite_%' LIMIT 1",
          )
          .get()
      )
        throw new Error(
          'Choose an empty file or an existing earthquake archive.',
        );
      db.exec(`
        CREATE TABLE settings (id INTEGER PRIMARY KEY CHECK(id=1), region TEXT NOT NULL);
        CREATE TABLE captures (id INTEGER PRIMARY KEY, observed INTEGER NOT NULL,
          events TEXT, CHECK(events IS NULL OR json_valid(events)));
        CREATE INDEX captures_by_time ON captures(observed DESC, id DESC);
        CREATE TABLE seen (id TEXT PRIMARY KEY, last_seen INTEGER NOT NULL);
        PRAGMA user_version=1;`);
      db.prepare('INSERT INTO settings VALUES (1, ?)').run(
        JSON.stringify(region),
      );
    } else if (version !== VERSION) {
      throw new Error(
        'Unsupported earthquake archive version. A new archive needs --bbox.',
      );
    }
    const saved = JSON.parse(
      db.prepare('SELECT region FROM settings WHERE id=1').get().region,
    );
    if (region && Object.keys(region).some((key) => region[key] !== saved[key]))
      throw new Error(
        'This archive belongs to a different region or magnitude rule. Choose another file.',
      );
    if (!readOnly) db.exec('COMMIT');
    return { db, region: saved };
  } catch (error) {
    db.close();
    throw error;
  }
}

/** Store exactly the qualifying snapshot, including an empty one. A failed poll stores a gap. */
export function recordQuakes({ db, region }, rows, observed, retentionDays) {
  if (
    !Number.isSafeInteger(observed) ||
    !Number.isSafeInteger(retentionDays) ||
    retentionDays < 1
  )
    throw new Error(
      'A capture needs a valid timestamp and a positive retention period in days.',
    );
  const events = rows === null ? null : matchingQuakes(region, rows);
  const cutoff = observed - retentionDays * DAY;
  const alerts = [];
  db.exec('BEGIN IMMEDIATE');
  try {
    const baseline = db
      .prepare('SELECT 1 FROM captures WHERE events IS NOT NULL LIMIT 1')
      .get();
    db.prepare('INSERT INTO captures(observed, events) VALUES (?,?)').run(
      observed,
      events === null ? null : JSON.stringify(events),
    );
    const add = db.prepare('INSERT OR IGNORE INTO seen VALUES (?,?)');
    const touch = db.prepare(
      'UPDATE seen SET last_seen=max(last_seen, ?) WHERE id=?',
    );
    for (const event of events ?? []) {
      // Only the provider can give an alert a revision-stable identity.
      if (event.usgsId == null || event.usgsId === '') continue;
      const id = String(event.usgsId);
      if (add.run(id, observed).changes) {
        if (baseline) alerts.push(event);
      } else touch.run(observed, id);
    }
    db.prepare('DELETE FROM captures WHERE observed < ?').run(cutoff);
    db.prepare('DELETE FROM seen WHERE last_seen < ?').run(cutoff);
    db.exec('COMMIT');
    return alerts;
  } catch (error) {
    db.exec('ROLLBACK');
    throw error;
  }
}

/** Replay the most recent poll at or before a requested observation time. */
export function replayQuakes({ db, region }, at = Number.MAX_SAFE_INTEGER) {
  const select = db.prepare(
    'SELECT observed, events FROM captures WHERE observed <= ? ORDER BY observed DESC, id DESC LIMIT 1',
  );
  const capture = select.get(at);
  if (!capture)
    return { region, state: 'unrecorded', observed: null, events: [] };
  return {
    region,
    observed: capture.observed,
    state: capture.events === null ? 'unavailable' : 'available',
    events: capture.events === null ? [] : JSON.parse(capture.events),
  };
}

export function quakeJournalStats({ db, region }) {
  const counts = db
    .prepare(
      'SELECT count(*) AS captures, count(*)-count(events) AS gaps, min(observed) AS first, max(observed) AS last FROM captures',
    )
    .get();
  const { page_count: pages } = db.prepare('PRAGMA page_count').get();
  const { page_size: pageSize } = db.prepare('PRAGMA page_size').get();
  return { region, ...counts, bytes: pages * pageSize };
}
