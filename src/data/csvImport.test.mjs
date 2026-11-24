import assert from 'node:assert/strict';
import test from 'node:test';
import { readCsvTable, previewCsv } from './csvImport.js';

test('maps RFC 4180 columns, normalizes times and reports rejected record numbers', () => {
  const table = readCsvTable(
    [
      'longitude,latitude,ID,timestamp,private',
      '15,0,a,2024-02-29T23:10:00+01:00,"quoted, field"',
      '179,90,"b,b",2024-02-29T00:00Z,hidden',
      '15,0,a,2024-02-29T00:00Z,duplicate',
      '183,12,c,2024-02-29T00:00Z,wrong',
      '0,12,c,2025-02-29T00:00Z,wrong',
      ',12,c,2024-02-29T00:00Z,missing',
      '0,12,c,2024-02-29T00:00Z',
      '0,12,c,2024-02-29T00:00,local',
    ].join('\r\n'),
  );
  const result = previewCsv(table, table.mapping);
  assert.equal(result.ready, true);
  assert.deepEqual(result.invalidRows, [4, 5, 6, 7, 8, 9]);
  assert.equal(result.rejected, 6);
  assert.equal(result.features.length, 2);
  assert.deepEqual(result.features[0].properties, {
    name: 'a',
    timestamp: '2024-02-29T22:10:00.000Z',
  });
  assert.equal(result.features[1].id, 'b,b');
  assert.deepEqual(result.features[1].geometry.coordinates, [179, 90]);
  assert.equal(JSON.stringify(result).includes('hidden'), false);
});

test('allows manual coordinate-only mapping, refuses ambiguous headers and bounds preview output', () => {
  assert.throws(() => readCsvTable('lat, LAT,lon\n0,0,0'));
  assert.throws(() => readCsvTable('lat,,lon'));
  assert.throws(() => readCsvTable('lat,lon\n' + '0,0\n'.repeat(20001)));
  const table = readCsvTable('east,north\n0,0\n' + 'bad,0\n'.repeat(12));
  assert.equal(previewCsv(table, table.mapping).ready, false);
  assert.equal(previewCsv(table, { lat: 'north', lon: 'north' }).ready, false);
  const parsed = previewCsv(table, { lat: 'north', lon: 'east' });
  assert.equal(parsed.features.length, 1);
  assert.deepEqual(parsed.features[0].properties, {});
  assert.equal(parsed.rejected, 12);
  assert.equal(parsed.invalidRows.length, 8);
});
