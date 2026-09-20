import type { Country, InternetMetrics, ValidationResult } from './types';

export async function fetchCountryByIso(_isoAlpha2: string): Promise<Country | null> {
  return null;
}

export async function fetchInternetMetrics(_isoAlpha2: string): Promise<InternetMetrics | null> {
  return null;
}

export function validateCountry(country: Country): ValidationResult {
  const errors: ValidationResult['errors'] = [];
  if (!country.isoAlpha2 || country.isoAlpha2.length !== 2) {
    errors.push({ field: 'isoAlpha2', message: 'ISO alpha-2 must be 2 characters' });
  }
  if (!country.isoAlpha3 || country.isoAlpha3.length !== 3) {
    errors.push({ field: 'isoAlpha3', message: 'ISO alpha-3 must be 3 characters' });
  }
  if (country.isoNumeric <= 0 || country.isoNumeric > 999) {
    errors.push({ field: 'isoNumeric', message: 'ISO numeric must be between 1 and 999' });
  }
  return { valid: errors.length === 0, errors };
}

export function validateInternetMetrics(metrics: InternetMetrics): ValidationResult {
  const errors: ValidationResult['errors'] = [];
  if (metrics.metricYear < 1990 || metrics.metricYear > 2100) {
    errors.push({ field: 'metricYear', message: 'metricYear must be between 1990 and 2100' });
  }
  if (metrics.internetUsersPercent < 0 || metrics.internetUsersPercent > 100) {
    errors.push({ field: 'internetUsersPercent', message: 'internetUsersPercent must be between 0 and 100' });
  }
  return { valid: errors.length === 0, errors };
}
