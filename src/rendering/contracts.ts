import type { ProjectionContract } from '@geospatial/types';

export interface RenderingContext {
  readonly width: number;
  readonly height: number;
  readonly projection: ProjectionContract;
  readonly pixelRatio: number;
}

export interface RenderState {
  readonly hoveredCountry?: string;
  readonly selectedCountry?: string;
  readonly zoomLevel: number;
  readonly isLoading: boolean;
}

export interface GlobeRenderConfig {
  readonly projection: ProjectionContract;
  readonly animateTransitions: boolean;
  readonly enableHoverHighlight: boolean;
  readonly enableSelection: boolean;
  readonly boundaryStrokeWidth: number;
  readonly fillColor: string;
  readonly strokeColor: string;
}

export const DEFAULT_GLOBE_CONFIG: GlobeRenderConfig = {
  projection: { type: 'orthographic', crs: 'EPSG:4326', scale: 250, clipAngle: 90 },
  animateTransitions: true,
  enableHoverHighlight: true,
  enableSelection: true,
  boundaryStrokeWidth: 0.5,
  fillColor: '#e8e8e8',
  strokeColor: '#333333',
};
