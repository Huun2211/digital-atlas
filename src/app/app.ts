import type { Country, InternetMetrics } from '@domain/types';
import { validateCountry } from '@domain/contracts';
import { DEFAULT_PROJECTION } from '@geospatial/contracts';
import { DEFAULT_GLOBE_CONFIG } from '@rendering/contracts';

export class App {
  async init(): Promise<void> {
    console.log('Digital Atlas initialized');
    console.log('Projection:', DEFAULT_PROJECTION.type);
    console.log('Globe config loaded');
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
