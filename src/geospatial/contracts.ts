import type { ProjectionContract, Coordinate, BoundingBox, GeometryValidity } from './types';

export const DEFAULT_PROJECTION: ProjectionContract = {
  type: 'orthographic',
  crs: 'EPSG:4326',
  center: [0, 0],
  scale: 250,
  rotate: [0, 0, 0],
  clipAngle: 90,
};

export function validateCoordinate(coord: Coordinate): GeometryValidity {
  const errors: string[] = [];
  if (coord.longitude < -180 || coord.longitude > 180) {
    errors.push(`Longitude ${coord.longitude} out of range [-180, 180]`);
  }
  if (coord.latitude < -90 || coord.latitude > 90) {
    errors.push(`Latitude ${coord.latitude} out of range [-90, 90]`);
  }
  return { valid: errors.length === 0, errors };
}

export function validateBoundingBox(box: BoundingBox): GeometryValidity {
  const errors: string[] = [];
  if (box.minLongitude >= box.maxLongitude) {
    errors.push('minLongitude must be less than maxLongitude');
  }
  if (box.minLatitude >= box.maxLatitude) {
    errors.push('minLatitude must be less than maxLatitude');
  }
  return { valid: errors.length === 0, errors };
}

export function createProjection(contract: ProjectionContract) {
  return { ...DEFAULT_PROJECTION, ...contract };
}
