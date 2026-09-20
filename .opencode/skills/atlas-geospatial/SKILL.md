# Atlas Geospatial Skill

Use this skill when working with the Digital Atlas globe, maps, geographic data, country boundaries, coordinates, or spatial rendering.

## Core Model

The globe is the primary interface of Digital Atlas.

Geospatial functionality must support:

- country selection
- country highlighting
- geographic navigation
- country boundaries
- future infrastructure layers
- comparison visualization

## Before Changes

Inspect:

- current rendering library
- geographic datasets
- country identifiers
- coordinate systems
- geometry format
- existing map/globe components
- API/data contracts

Do not introduce a mapping library without checking the existing stack.

## Geographic Identity

Prefer stable geographic identifiers.

Where applicable, preserve:

- ISO identifiers
- provider identifiers
- geometry version
- data year
- source provenance

Never silently redefine what constitutes a country or territory.

## Geometry

Consider:

- geometry validity
- topology
- polygon complexity
- multipolygons
- antimeridian behavior
- geometry simplification
- level of detail

Large geographic files should not be loaded unnecessarily.

## Rendering

Consider:

- initial load
- rendering frequency
- hover/selection state
- zoom behavior
- mobile interaction
- GPU/memory usage
- unnecessary re-renders

The globe should remain responsive during interaction.

## Infrastructure Readiness

Future infrastructure layers may include:

- submarine cables
- Internet exchange points
- data centers
- network routes

Design extension points without implementing unnecessary future features.

## Verification

Verify:

- country selection
- geographic identifiers
- geometry loading
- rendering behavior
- responsive behavior
- performance implications
- data provenance
