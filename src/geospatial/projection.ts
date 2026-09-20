import * as d3 from 'd3';
import { geoNaturalEarth2 } from 'd3-geo-projection';
import type { ProjectionContract } from '@geospatial/types';
import { DEFAULT_PROJECTION } from '@geospatial/contracts';

export function createD3Projection(contract?: ProjectionContract): d3.GeoProjection {
  const config = { ...DEFAULT_PROJECTION, ...contract };

  const projection = d3.geoOrthographic()
    .center(config.center ?? [0, 0])
    .scale(config.scale ?? 250)
    .rotate(config.rotate ?? [0, 0, 0])
    .clipAngle(config.clipAngle ?? 90);

  return projection;
}

export function createInteractiveProjection(
  projection: d3.GeoProjection,
): d3.GeoProjection {
  return projection;
}

export function getProjectionRotation(projection: d3.GeoProjection): [number, number, number] {
  return projection.rotate();
}

export function setProjectionRotation(
  projection: d3.GeoProjection,
  rotate: [number, number, number],
): void {
  projection.rotate(rotate);
}

export { geoNaturalEarth2 };
