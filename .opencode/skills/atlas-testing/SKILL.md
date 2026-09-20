# Atlas Testing Skill

Use this skill when implementing, reviewing, or verifying tests.

## Test Pyramid

Prefer:
1. unit tests for isolated logic
2. integration tests for module/API boundaries
3. end-to-end tests for critical user flows

## Critical Digital Atlas Flows

Test:
- globe loads
- country can be selected
- country profile loads
- metrics display correctly
- search finds countries
- comparison works
- provenance is visible
- errors are handled
- responsive behavior does not break core interaction

## Data Testing

Check:
- schema validity
- missing values
- invalid identifiers
- incorrect types
- duplicate records
- invalid geographic references
- provenance completeness

## Verification

Before completion:
- run focused tests
- run relevant integration tests
- run regression tests when practical
- inspect failures rather than suppressing them

Never modify production behavior solely to make a failing test pass.
