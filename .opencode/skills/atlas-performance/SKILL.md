# Atlas Performance Skill

Use this skill when analyzing or optimizing Digital Atlas performance.

## Priority Areas

Inspect:
- initial page load
- globe rendering
- country interaction
- search
- API payloads
- database queries
- data loading
- mobile performance
- memory usage
- bundle size

## Method

Before optimizing:
1. inspect the implementation
2. identify the likely bottleneck
3. establish a baseline when possible
4. make the smallest useful change
5. verify the result

## Globe Performance

Pay particular attention to:
- geometry size
- level of detail
- geometry simplification
- unnecessary re-renders
- rendering frequency
- client memory
- mobile GPU usage

## API and Database

Consider:
- payload size
- query efficiency
- indexes
- pagination
- caching
- unnecessary requests

## Rules

Prefer simple optimizations.

Avoid:
- premature optimization
- unnecessary caching layers
- unnecessary dependencies
- complex abstractions without evidence

Never claim a performance improvement without verification.
