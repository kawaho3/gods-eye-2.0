import { pointInBounds } from '../geo/pointInBounds.js';

export function quakeRegion(bbox, minMagnitude) {
  if (!Array.isArray(bbox) || bbox.length !== 4 || !bbox.every(Number.isFinite))
    throw new Error('Give a bounding box as west,south,east,north in degrees.');
  const [west, south, east, north] = bbox;
  if (
    Math.abs(west) > 180 ||
    Math.abs(east) > 180 ||
    Math.abs(south) > 90 ||
    Math.abs(north) > 90 ||
    south >= north ||
    west === east
  )
    throw new Error(
      'Choose valid latitude and longitude bounds with a nonempty area.',
    );
  if (!Number.isFinite(minMagnitude) || minMagnitude < 2.5 || minMagnitude > 10)
    throw new Error('Minimum magnitude must be between 2.5 and 10.');
  return { west, south, east, north, minMagnitude };
}

export function matchingQuakes(region, rows) {
  return rows.filter(
    (e) =>
      Number.isFinite(e.time) &&
      Number.isFinite(new Date(e.time).getTime()) &&
      e.mag >= region.minMagnitude &&
      pointInBounds(region, e),
  );
}

/** Prime on the first complete snapshot. Keep an event's identity across USGS revisions and outages. */
export function createQuakeAlerts(region) {
  const seen = new Map();
  let primed = false;
  return (rows, now = Date.now()) => {
    const matches = matchingQuakes(region, rows);
    const fresh = [];
    for (const event of matches) {
      if (event.usgsId == null || event.usgsId === '') continue;
      if (primed && !seen.has(event.usgsId)) fresh.push(event);
      seen.set(event.usgsId, now);
    }
    primed = true;
    // The upstream snapshot covers 24 hours. Keep one more day for revisions.
    for (const [id, last] of seen)
      if (last < now - 2 * 86_400_000) seen.delete(id);
    return fresh;
  };
}
