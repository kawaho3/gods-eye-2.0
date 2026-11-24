/** Inclusive bounds in degrees. A west edge east of the east edge crosses the date line. */
export function pointInBounds(area, point) {
  if (!Number.isFinite(point?.lat) || !Number.isFinite(point?.lon))
    return false;
  if (point.lat < area.south || point.lat > area.north) return false;
  const inLongitude =
    area.west <= area.east
      ? point.lon >= area.west && point.lon <= area.east
      : point.lon >= area.west || point.lon <= area.east;
  return inLongitude;
}
