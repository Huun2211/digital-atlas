# ADR 004: Geographic Data Source (Natural Earth)

## Context
Digital Atlas requires a real geographic boundary dataset for country rendering on the globe. No geographic data was present in the repository before this decision. Data must not be fabricated and must have verifiable provenance and licensing.

## Decision
Use Natural Earth country boundaries (110m cultural vectors) loaded at runtime from the verified GitHub repository at https://github.com/nvkelso/natural-earth-vector.

## Alternatives Considered
- **Manually create GeoJSON**: Would fabricate geographic data, violating core rules. Rejected.
- **GADM (Global Administrative Areas)**: More detailed but requires registration. Not the smallest accessible source.
- **OpenStreetMap data**: Complex to extract country boundaries, requires API usage. Not minimal.
- **Bundle a large GeoJSON file**: Adds significant bundle size and versioning overhead. Not minimal.
- **Custom geographic data generator**: Would fabricate data. Rejected.

## Consequences
- Country boundary data is loaded at runtime from a verifiable, public source.
- Natural Earth data is CC0 1.0 Universal (public domain), eliminating licensing concerns.
- The application requires internet connectivity to fetch geographic data on first load.
- Data provenance is tracked via the `NATURAL_EARTH_PROVENANCE` constant.
- Future data source migration is possible without changing domain contracts.
- GeoJSON is loaded as a `FeatureCollection` and rendered through the geospatial contracts.

## Provenance
- Provider: Natural Earth
- Source URL: https://www.naturalearthdata.com/
- Repository: https://github.com/nvkelso/natural-earth-vector
- License: CC0-1.0 Universal
- Data Year: 2024
- Methodology: Vector country boundaries, 110m resolution
- Limitations: Boundaries may be simplified; may contain minor topological errors

## Status
Accepted. Implemented in project foundation.

## Verification
- `src/data/natural-earth.ts` loads GeoJSON from verified URL only
- `NATURAL_EARTH_PROVENANCE` contains all required fields (provider, source URL, license, retrieval date, data year, methodology, limitations)
- `validateProvenance()` validates the provenance metadata
- No geographic data is fabricated or bundled in source code
