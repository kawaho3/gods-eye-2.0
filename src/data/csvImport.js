import { parseCsvRows } from '../library/formats.js';
import { MAX_IMPORT_ENTITIES, importFeatureName } from './geoImportShared.js';

const ALIASES = {
  lat: ['latitude', 'lat', 'y'],
  lon: ['longitude', 'lon', 'lng', 'long', 'x'],
  time: ['timestamp', 'datetime', 'time'],
  id: ['id', 'identifier', 'uuid'],
};

export function readCsvTable(text) {
  const [columns = [], ...rows] = parseCsvRows(text);
  const headers = columns.map((name) => name.trim());
  const names = headers.map((name) => name.toLowerCase());
  if (
    !headers.length ||
    headers.some((name) => !name) ||
    new Set(names).size !== names.length ||
    rows.length > MAX_IMPORT_ENTITIES
  )
    throw new Error('Invalid CSV headers or row limit exceeded.');
  const mapping = {};
  for (const [field, aliases] of Object.entries(ALIASES)) {
    const match = aliases.find((alias) => names.includes(alias));
    mapping[field] = match ? headers[names.indexOf(match)] : '';
  }
  return { headers, rows, mapping };
}

function coordinate(value, limit) {
  if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(value)) return null;
  const number = Number(value);
  return Number.isFinite(number) && Math.abs(number) <= limit ? number : null;
}

function timestamp(value) {
  const iso =
    /^(\d{4}-\d\d-\d\d)T\d\d:\d\d(?::\d\d(?:\.\d{1,3})?)?(?:Z|[+-]\d\d:\d\d)$/i;
  const date = iso.exec(value)?.[1];
  if (!date) return null;
  const midnight = Date.parse(date + 'T00:00:00Z');
  const ms = Date.parse(value);
  if (
    !Number.isFinite(midnight) ||
    new Date(midnight).toISOString().slice(0, 10) !== date ||
    !Number.isFinite(ms)
  )
    return null;
  return new Date(ms).toISOString();
}

/** Copy only explicitly mapped columns into the local drawing. */
export function previewCsv(table, mapping) {
  const { headers, rows } = table;
  const selected = [mapping.lat, mapping.lon, mapping.time, mapping.id].filter(
    Boolean,
  );
  const ready =
    Boolean(mapping.lat && mapping.lon) &&
    selected.every((key) => headers.includes(key)) &&
    new Set(selected).size === selected.length;
  const features = [];
  const invalidRows = [];
  let rejected = 0;
  if (ready) {
    const index = Object.fromEntries(
      Object.keys(ALIASES).map((field) => [
        field,
        headers.indexOf(mapping[field]),
      ]),
    );
    const ids = new Set();
    for (const [position, row] of rows.entries()) {
      const value = (field) => (row[index[field]] ?? '').trim();
      const lat = coordinate(value('lat'), 90);
      const lon = coordinate(value('lon'), 180);
      const id = value('id');
      const time = mapping.time ? timestamp(value('time')) : null;
      if (
        row.length !== headers.length ||
        lat === null ||
        lon === null ||
        (mapping.time && !time) ||
        (mapping.id && (!id || ids.has(id)))
      ) {
        rejected++;
        if (invalidRows.length < 8) invalidRows.push(position + 2);
        continue;
      }
      if (mapping.id) ids.add(id);
      const properties = {};
      if (mapping.id) properties.name = importFeatureName(id);
      if (time) properties.timestamp = time;
      features.push({
        type: 'Feature',
        ...(mapping.id ? { id } : {}),
        properties,
        geometry: { type: 'Point', coordinates: [lon, lat] },
      });
    }
  }
  return { ready, rejected, invalidRows, features };
}
