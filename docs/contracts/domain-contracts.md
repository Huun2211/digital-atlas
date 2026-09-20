# Digital Atlas Contracts

## Geographic Data Source

- **Source**: Natural Earth (110m cultural vectors, country boundaries)
- **URL**: https://www.naturalearthdata.com/ (Repository: https://github.com/nvkelso/natural-earth-vector)
- **License**: CC0-1.0 Universal
- **Retrieved via**: `src/data/natural-earth.ts` loads GeoJSON at runtime from the verified URL
- **Provenance constant**: `NATURAL_EARTH_PROVENANCE` in `src/data/natural-earth.ts`
- **Data Year**: 2024
- **Methodology**: Vector country boundaries, 110m resolution
- **Limitations**: Boundaries may be simplified; may contain minor topological errors

## Domain Contracts

- **Country**: `isoAlpha2`, `isoAlpha3`, `isoNumeric`, `name`, `officialName`
- **InternetMetrics**: `countryIsoAlpha2`, `metricYear`, `internetUsersPercent`, `bandwidthMbps`, `source`, `retrievalDate`
- **DataProvenance**: `provider`, `sourceUrl`, `license`, `retrievalDate`, `dataYear`, `methodology`, `limitations`

All domain types use `readonly` immutability to prevent silent mutation.

## Geospatial Contracts

- **Projection**: `type` (equirectangular/orthographic/mercator/naturalEarth), `crs` (EPSG:4326), `center`, `scale`, `rotate`, `clipAngle`
- **Coordinate**: `longitude`, `latitude` with validation ranges [-180, 180] and [-90, 90]
- **BoundingBox**: `minLongitude`, `minLatitude`, `maxLongitude`, `maxLatitude`
- **GeometryValidity**: `valid`, `errors`

## Data Contracts

- **DatasetRecord<T>**: Pairs data with `DataProvenance`
- **DataContract<T>**: `name`, `version`, `schema`, `validate`
- Provenance validation requires: `provider`, `sourceUrl`, `license`, `retrievalDate`, `dataYear`

## Rendering Contracts

- **GlobeRenderConfig**: `projection`, `animateTransitions`, `enableHoverHighlight`, `enableSelection`, `boundaryStrokeWidth`, `fillColor`, `strokeColor`
- **RenderingContext**: `width`, `height`, `projection`, `pixelRatio`
- **RenderState**: `hoveredCountry`, `selectedCountry`, `zoomLevel`, `isLoading`
