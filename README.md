# Digital Atlas

Interactive data-driven atlas for exploring the digital world.

## Project Structure

- `src/domain` - Core types (Country, InternetMetrics, DataProvenance) and validation contracts
- `src/geospatial` - Projection contracts, coordinates, geometry validation
- `src/data` - Dataset records, provenance validation, data contracts
- `src/rendering` - Globe render configuration and rendering context
- `src/app` - Application orchestration
- `docs/adr` - Architecture Decision Records
- `docs/contracts` - Architecture and data contracts
- `tests` - Unit and integration tests

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

- `npm run build` - Type-check and build
- `npm run test` - Run tests
- `npm run verify` - Type-check, lint, and test

## Architecture Decisions

See `docs/adr/` for Architecture Decision Records.

## Geospatial Rendering

D3.js with `d3-geo-projection` provides the orthographic globe projection. See ADR-001 for the rendering approach decision.
