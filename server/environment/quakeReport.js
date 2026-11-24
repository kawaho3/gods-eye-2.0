export const QUAKE_FEED =
  'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
const DAY = 86_400_000;
const date = (ms) => new Date(ms).toISOString();
const plain = (s) =>
  String(s ?? '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .trim();
const html = (s) =>
  plain(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
const md = (s) => html(s).replace(/[\\|\[\]()*_`#~!]/g, '\\$&');
const sourceOf = (event) =>
  typeof event.usgsId === 'string' && /^[a-z0-9_-]+$/i.test(event.usgsId)
    ? 'https://earthquake.usgs.gov/earthquakes/eventpage/' + event.usgsId
    : QUAKE_FEED;

export function quakeReport(snapshot, { from, to } = {}) {
  const end = to ?? snapshot.observed;
  const start = from ?? (end === null ? null : end - DAY);
  if (start !== null && end !== null && start > end)
    throw new Error('The start must precede the end of the report.');
  const events = snapshot.events
    .filter((e) => e.time >= start && e.time <= end)
    .toSorted(
      (a, b) =>
        b.time - a.time || String(a.stableId).localeCompare(String(b.stableId)),
    );
  const { west, south, east, north, minMagnitude } = snapshot.region;
  const scope = `West ${west}°, south ${south}°, east ${east}°, north ${north}°. Minimum magnitude ${minMagnitude}.`;
  const coverage =
    snapshot.state === 'unrecorded'
      ? 'No poll was recorded by the selected time.'
      : snapshot.state === 'unavailable'
        ? 'The source was unavailable at this poll. Event coverage is unknown.'
        : events.length === 0
          ? 'The recorded feed contained no qualifying events in this area and time range.'
          : `${events.length} qualifying event(s) in the recorded feed.`;
  const range =
    start === null || end === null
      ? 'No time range available.'
      : date(start) + ' to ' + date(end);
  return {
    scope,
    coverage,
    range,
    observed:
      snapshot.observed === null ? 'Unavailable' : date(snapshot.observed),
    state: snapshot.state,
    events,
    uncertainty:
      'The daily USGS feed can be revised. Each report uses one recorded poll and covers only events with a reported time and magnitude.',
  };
}

export function renderQuakeReport(report, format) {
  const { scope, coverage, range, observed, uncertainty, events } = report;
  if (format === 'geojson') {
    if (report.state !== 'available')
      throw new Error('A GeoJSON export requires an available snapshot.');
    return (
      JSON.stringify(
        {
          type: 'FeatureCollection',
          version: 1,
          attribution: 'U.S. Geological Survey',
          source: QUAKE_FEED,
          captured_at: observed,
          time_range: range,
          region: scope,
          features: events.map((e) => ({
            type: 'Feature',
            id: e.stableId,
            geometry: { type: 'Point', coordinates: [e.lon, e.lat] },
            properties: {
              name: `M${e.mag} · ${plain(e.place) || 'Unnamed location'}`,
              magnitude: e.mag,
              event_time: date(e.time),
              depth_km: e.depthKm,
              source: sourceOf(e),
            },
          })),
        },
        null,
        2,
      ) + '\n'
    );
  }
  const info = [
    scope,
    'Event time range (UTC): ' + range,
    'Feed retrieved (UTC): ' + observed,
    coverage,
    uncertainty,
  ];
  if (format === 'md') {
    const lines = [
      '# Earthquake observations',
      '',
      ...info.flatMap((line) => [line, '']),
      '[USGS daily earthquake feed](' + QUAKE_FEED + ')',
      '',
      '| Event time (UTC) | Magnitude | Location | Latitude, longitude | Source |',
      '| --- | ---: | --- | --- | --- |',
    ];
    for (const e of events)
      lines.push(
        `| ${date(e.time)} | ${e.mag} | ${md(e.place) || 'Unnamed location'} | ${e.lat}, ${e.lon} | [USGS](${sourceOf(e)}) |`,
      );
    return lines.join('\n') + '\n';
  }
  if (format !== 'html') throw new Error('Choose md, html, pdf or geojson.');
  const rows = events
    .map(
      (e) =>
        `<tr><td>${date(e.time)}</td><td>${e.mag}</td><td>${html(e.place) || 'Unnamed location'}<br>${e.lat}, ${e.lon}</td><td><a href="${sourceOf(e)}">USGS ${html(e.usgsId)}</a></td></tr>`,
    )
    .join('');
  return `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'"><title>Earthquake observations</title>
<style>@page{size:A4;margin:17mm}body{max-width:62rem;margin:2rem auto;padding:0 1rem;color:#182c31;font:15px/1.45 system-ui,sans-serif}h1{font:2rem Georgia,serif}table{width:100%;border-collapse:collapse}th,td{padding:.45rem;text-align:left;border-bottom:1px solid #9ab1b3;overflow-wrap:anywhere}thead{display:table-header-group}tr{break-inside:avoid}a{color:#14565b}@media print{body{margin:0;padding:0;font-size:10pt}a::after{content:' (' attr(href) ')';font-size:.75em}}</style>
<main><h1>Earthquake observations</h1>${info.map((line) => '<p>' + html(line) + '</p>').join('')}<p><a href="${QUAKE_FEED}">USGS daily earthquake feed</a></p><table><thead><tr><th>Event time (UTC)</th><th>Magnitude</th><th>Location</th><th>Source</th></tr></thead><tbody>${rows}</tbody></table></main></html>\n`;
}
