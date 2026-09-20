import { describe, it, expect } from 'vitest';
import { validateCountry } from '@domain/contracts';
import type { Country } from '@domain/types';

describe('domain contracts', () => {
  it('validates a correct country', () => {
    const country: Country = {
      isoAlpha2: 'JP',
      isoAlpha3: 'JPN',
      isoNumeric: 392,
      name: 'Japan',
    };
    const result = validateCountry(country);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('rejects country with wrong ISO length', () => {
    const country: Country = {
      isoAlpha2: 'J',
      isoAlpha3: 'JPN',
      isoNumeric: 392,
      name: 'Japan',
    };
    const result = validateCountry(country);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.field === 'isoAlpha2')).toBe(true);
  });
});
