# ADR 001: Geospatial Rendering Approach

## Context
Digital Atlas requires a globe as the primary interface with country boundaries, projections, and spatial interaction. No mapping library was present in the repository before this decision.

## Decision
Use D3.js (d3 + d3-geo-projection) as the geospatial rendering library.

## Alternatives Considered
- **Three.js**: More complex for geographic projections; requires WebGL setup and shader management. Overkill for initial foundation.
- **Mapbox GL**: Heavy client-side dependency with commercial licensing for certain use cases. Not appropriate for the smallest foundation.
- **Custom canvas rendering**: No existing geographic projection utilities; would require implementing projection math from scratch.
- **Leaflet**: 2D-focused; no built-in globe/orthographic projection support.

## Consequences
- D3 provides `d3-geo` for geographic projections and `d3-geo-projection` for extended projection types including orthographic (globe).
- D3 is a well-established library with stable APIs and broad community support.
- D3 has a modest bundle size footprint when imported selectively.
- Future migration to Three.js for 3D globe rendering remains possible without changing the domain contracts.

## Status
Accepted. Implemented in project foundation.

## Verification
- D3 dependency added to package.json
- Domain contracts do not depend on D3-specific APIs
- Geospatial contracts remain library-agnostic at the type level
