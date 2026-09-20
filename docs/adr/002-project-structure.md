# ADR 002: Project Structure and Module Boundaries

## Context
Digital Atlas needs a maintainable source structure with clear module boundaries that align with the agent ownership model (architect, data, geo, ux, fullstack, qa, performance).

## Decision
Organize the project into five domain modules:
- `src/domain` - Core types: Country, InternetMetrics, DataProvenance, ValidationResult
- `src/geospatial` - Projection, coordinate, geometry, boundary contracts
- `src/data` - Dataset records, provenance validation, data contracts
- `src/rendering` - Globe render configuration, rendering context
- `src/app` - Application orchestration and integration

## Alternatives Considered
- **Feature-based grouping**: Could group by feature (country-profile, search, comparison) but would blur domain boundaries.
- **Layer-based grouping**: Could group by layer (models, views, controllers) but would separate related domain logic.
- **Monolithic src/**: Simpler initially but does not scale and violates the smallest viable contract principle.

## Consequences
- Each module has a clear ownership boundary aligned with specialist agents.
- Path aliases (`@domain/*`, `@geospatial/*`, etc.) provide clean imports.
- Domain contracts are independent of rendering implementation.
- New features can be added to existing modules without restructuring.

## Status
Accepted. Implemented in project foundation.

## Verification
- Directory structure created
- TypeScript path aliases configured in tsconfig.json
- No circular dependencies between modules
