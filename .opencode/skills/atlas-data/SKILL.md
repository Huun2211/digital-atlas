# Atlas Data Skill

Use this skill when working with datasets, data models, ingestion, normalization, validation, or provenance.

## Required Provenance

Every external dataset must preserve:

- provider
- source URL
- license
- retrieval date
- data year when applicable
- methodology
- limitations

If information is unavailable, explicitly record it as unknown.

Never invent provenance.

## Data Pipeline

Prefer a clear flow:

External Source
    ↓
Raw Input
    ↓
Validation
    ↓
Normalization
    ↓
Canonical Model
    ↓
Application/API

Keep external provider formats separate from internal canonical models where practical.

## Validation

Check:

- schema validity
- required fields
- nullability
- data types
- units
- duplicate records
- invalid geographic identifiers
- year consistency
- source consistency
- unexpected ranges

## Geographic Data

Coordinate with Atlas Geo when data contains:

- country boundaries
- coordinates
- geometry
- spatial identifiers
- geographic relationships

Do not change geographic definitions without documenting the decision.

## Licensing

Do not infer commercial reuse rights from public availability.

Record license information separately from source URL.

If licensing is unclear:

- mark it unknown
- flag the risk
- do not claim the dataset is commercially reusable

## Data Quality

When importing data:

1. preserve source information
2. validate
3. normalize
4. record transformation logic
5. preserve provenance
6. verify output against source expectations

Never silently discard questionable records.
