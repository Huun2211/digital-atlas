export interface Country {
  readonly isoAlpha2: string;
  readonly isoAlpha3: string;
  readonly isoNumeric: number;
  readonly name: string;
  readonly officialName?: string;
}

export interface InternetMetrics {
  readonly countryIsoAlpha2: string;
  readonly metricYear: number;
  readonly internetUsersPercent: number;
  readonly bandwidthMbps?: number;
  readonly source: string;
  readonly retrievalDate: string;
}

export interface DataProvenance {
  readonly provider: string;
  readonly sourceUrl: string;
  readonly license: string;
  readonly retrievalDate: string;
  readonly dataYear: number;
  readonly methodology?: string;
  readonly limitations?: string;
}

export interface ValidationResult {
  readonly valid: boolean;
  readonly errors: ValidationError[];
}

export interface ValidationError {
  readonly field: string;
  readonly message: string;
}

export type CountryIdentifier = Country['isoAlpha2'] | Country['isoAlpha3'];
