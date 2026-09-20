import { describe, it, expect } from 'vitest';
import { validateCoordinate, validateBoundingBox, createProjection } from '@geospatial/contracts';
import type { Coordinate, BoundingBox } from '@geospatial/types';

describe('geospatial contracts', () => {
  it('validates a correct coordinate', () => {
    const coord: Coordinate = { longitude: 139.6917, latitude: 35.6895 };
    const result = validateCoordinate(coord);
    expect(result.valid).toBe(true);
  });

  it('rejects coordinate with invalid longitude', () => {
    const coord: Coordinate = { longitude: 200, latitude: 0 };
    const result = validateCoordinate(coord);
    expect(result.valid).toBe(false);
  });

  it('validates a correct bounding box', () => {
    const box: BoundingBox = { minLongitude: -180, minLatitude: -90, maxLongitude: 180, maxLatitude: 90 };
    const result = validateBoundingBox(box);
    expect(result.valid).toBe(true);
  });

  it('creates a projection from a contract', () => {
    const proj = createProjection({ type: 'equirectangular', crs: 'EPSG:4326' });
    expect(proj.type).toBe('equirectangular');
    expect(proj.crs).toBe('EPSG:4326');
  });
});
