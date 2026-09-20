import { describe, it, expect } from 'vitest';
import { validateProvenance, createProvenance } from '@data/contracts';
import type { DataProvenance } from '@domain/types';

describe('data contracts', () => {
  it('validates complete provenance', () => {
    const provenance = createProvenance('WHO', 'https://example.com', 'CC-BY-4.0', '2026-01-01', 2024);
    expect(validateProvenance(provenance)).toBe(true);
  });

  it('rejects incomplete provenance', () => {
    const provenance: DataProvenance = {
      provider: '',
      sourceUrl: '',
      license: '',
      retrievalDate: '',
      dataYear: 2024,
    };
    expect(validateProvenance(provenance)).toBe(false);
  });
});
