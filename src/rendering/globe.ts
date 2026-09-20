import * as d3 from 'd3';
import type { FeatureCollection } from 'geojson';
import type { GlobeRenderConfig, RenderState } from '@rendering/contracts';
import { DEFAULT_GLOBE_CONFIG } from '@rendering/contracts';
import { createD3Projection } from '@geospatial/projection';

export function renderGlobe(
  container: HTMLElement,
  geojson: FeatureCollection,
  config: GlobeRenderConfig = DEFAULT_GLOBE_CONFIG,
): RenderState {
  const width = container.clientWidth || 800;
  const height = container.clientHeight || 600;

  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('class', 'atlas-globe');

  const projection = createD3Projection(config.projection);
  const path = d3.geoPath().projection(projection);
  const pathFn = (d: unknown): string | null => path(d as d3.GeoPermissibleObjects) as string | null;

  const zoom = d3.zoom<SVGSVGElement, unknown>()
    .scaleExtent([1, 8])
    .on('zoom', (event) => {
      svg.selectAll('.country-path')
        .attr('transform', event.transform);
    });

  svg.call(zoom);

  const drag = d3.drag<SVGSVGElement, unknown>()
    .on('drag', (event) => {
      const rotate = projection.rotate();
      const sensitivity = 0.5;
      projection.rotate([
        rotate[0] + event.dx * sensitivity,
        Math.max(-90, Math.min(90, rotate[1] - event.dy * sensitivity)),
        rotate[2],
      ]);
      svg.selectAll('.country-path').attr('d', pathFn);
    });

  svg.call(drag);

  svg.append('path')
    .datum({ type: 'Sphere' } as d3.GeoSphere)
    .attr('d', pathFn)
    .attr('class', 'globe-sphere')
    .attr('fill', '#e8e8e8')
    .attr('stroke', '#333333')
    .attr('stroke-width', config.boundaryStrokeWidth);

  const graticule = d3.geoGraticule();
  svg.append('path')
    .datum(graticule)
    .attr('d', pathFn)
    .attr('class', 'globe-graticule')
    .attr('fill', 'none')
    .attr('stroke', '#cccccc')
    .attr('stroke-width', 0.3);

  svg.selectAll('.country-path')
    .data(geojson.features)
    .enter()
    .append('path')
    .attr('d', pathFn)
    .attr('class', 'country-path')
    .attr('fill', config.fillColor)
    .attr('stroke', config.strokeColor)
    .attr('stroke-width', config.boundaryStrokeWidth);

  if (config.enableHoverHighlight) {
    svg.selectAll('.country-path')
      .on('mouseenter', function () {
        d3.select(this).attr('fill', '#d0d0d0');
      })
      .on('mouseleave', function () {
        d3.select(this).attr('fill', config.fillColor);
      });
  }

  const state: RenderState = {
    zoomLevel: 1,
    isLoading: false,
  };

  return state;
}

export function clearGlobe(container: HTMLElement): void {
  d3.select(container).select('svg').remove();
}
