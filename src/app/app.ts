import type { Country, InternetMetrics } from '@domain/types';
import { validateCountry } from '@domain/contracts';
import { DEFAULT_PROJECTION } from '@geospatial/contracts';
import { DEFAULT_GLOBE_CONFIG } from '@rendering/contracts';
import { renderGlobe } from '@rendering/globe';
import { loadCountryBoundaries, NATURAL_EARTH_PROVENANCE } from '@data/natural-earth';
import { validateProvenance } from '@data/contracts';

export class App {
  async init(): Promise<void> {
    console.log('Digital Atlas initialized');
    console.log('Projection:', DEFAULT_PROJECTION.type);
    console.log('Globe config loaded');

    const container = document.getElementById('globe-container');
    if (!container) {
      console.warn('Globe container not found');
      return;
    }

    const provenanceValid = validateProvenance(NATURAL_EARTH_PROVENANCE);
    if (!provenanceValid) {
      console.warn('Natural Earth provenance validation failed');
      return;
    }

    try {
      const geojson = await loadCountryBoundaries();
      renderGlobe(container, geojson, DEFAULT_GLOBE_CONFIG);
    } catch (err) {
      console.error('Failed to load country boundaries:', err);
    }
  }

  getProjectedCountry(country: Country): Country {
    const validation = validateCountry(country);
    if (!validation.valid) {
      throw new Error(`Invalid country: ${JSON.stringify(validation.errors)}`);
    }
    return country;
  }

  getInternetMetrics(country: Country, metrics: InternetMetrics): InternetMetrics {
    if (metrics.countryIsoAlpha2 !== country.isoAlpha2) {
      throw new Error('Country ISO does not match metrics');
    }
    return metrics;
  }

  getProjection() {
    return DEFAULT_PROJECTION;
  }

  getGlobeConfig() {
    return DEFAULT_GLOBE_CONFIG;
  }
}
