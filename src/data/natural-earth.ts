import type { FeatureCollection } from 'geojson';
import type { DataProvenance } from '@domain/types';

export const NATURAL_EARTH_PROVENANCE: DataProvenance = {
  provider: 'Natural Earth',
  sourceUrl: 'https://www.naturalearthdata.com/',
  license: 'CC0-1.0',
  retrievalDate: '2026-09-20',
  dataYear: 2024,
  methodology: 'Vector country boundaries',
  limitations: 'Boundaries may be simplified',
};

export const NATURAL_EARTH_URL =
  'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson';

export async function loadCountryBoundaries(): Promise<FeatureCollection> {
  const response = await fetch(NATURAL_EARTH_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch Natural Earth data: ${response.status} ${response.statusText}`);
  }
  const data: FeatureCollection = await response.json();
  return data;
}
