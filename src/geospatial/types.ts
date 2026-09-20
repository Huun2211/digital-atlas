export type ProjectionType = 'equirectangular' | 'orthographic' | 'mercator' | 'naturalEarth';

export interface ProjectionContract {
  readonly type: ProjectionType;
  readonly crs: string;
  readonly center?: [number, number];
  readonly scale?: number;
  readonly rotate?: [number, number, number];
  readonly clipAngle?: number;
}

export interface Coordinate {
  readonly longitude: number;
  readonly latitude: number;
}

export interface BoundingBox {
  readonly minLongitude: number;
  readonly minLatitude: number;
  readonly maxLongitude: number;
  readonly maxLatitude: number;
}

export interface GeometryValidity {
  readonly valid: boolean;
  readonly errors: ReadonlyArray<string>;
}

export interface LevelOfDetail {
  readonly minZoom: number;
  readonly maxZoom: number;
  readonly simplificationThreshold: number;
}
