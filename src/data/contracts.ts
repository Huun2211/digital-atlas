import type { DataProvenance } from '@domain/types';

export interface DatasetRecord<T> {
  readonly data: T;
  readonly provenance: DataProvenance;
}

export interface DataContract<T> {
  readonly name: string;
  readonly version: string;
  readonly schema: (record: T) => boolean;
  readonly validate: (record: T) => boolean;
}

export function createProvenance(
  provider: string,
  sourceUrl: string,
  license: string,
  retrievalDate: string,
  dataYear: number,
): DataProvenance {
  return { provider, sourceUrl, license, retrievalDate, dataYear };
}

export function createDatasetRecord<T>(data: T, provenance: DataProvenance): DatasetRecord<T> {
  return { data, provenance };
}

export function validateProvenance(provenance: DataProvenance): boolean {
  if (!provenance.provider || !provenance.sourceUrl || !provenance.license) return false;
  if (!provenance.retrievalDate || provenance.dataYear < 1900) return false;
  return true;
}
