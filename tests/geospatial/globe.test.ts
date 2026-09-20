import { describe, it, expect } from 'vitest';
import { validateProvenance } from '@data/contracts';
import { NATURAL_EARTH_PROVENANCE } from '@data/natural-earth';

describe('globe MVP - data and provenance', () => {
  it('validates Natural Earth provenance', () => {
    expect(validateProvenance(NATURAL_EARTH_PROVENANCE)).toBe(true);
  });

  it('has complete provenance fields', () => {
    expect(NATURAL_EARTH_PROVENANCE.provider).toBe('Natural Earth');
    expect(NATURAL_EARTH_PROVENANCE.sourceUrl).toBeTruthy();
    expect(NATURAL_EARTH_PROVENANCE.license).toBe('CC0-1.0');
    expect(NATURAL_EARTH_PROVENANCE.retrievalDate).toBeTruthy();
    expect(NATURAL_EARTH_PROVENANCE.dataYear).toBeGreaterThan(0);
    expect(NATURAL_EARTH_PROVENANCE.methodology).toBeTruthy();
    expect(NATURAL_EARTH_PROVENANCE.limitations).toBeTruthy();
  });
});
