# ADR 003: Data Model and Contract Standards

## Context
Digital Atlas must handle external datasets with traceable provenance. The core rules mandate that every external dataset must have provider, source URL, license, retrieval date, data year, methodology, and limitations.

## Decision
Define canonical data contracts using TypeScript interfaces with strict typing. Use a `DatasetRecord<T>` wrapper that pairs data with provenance metadata. Never couple application code directly to external provider formats.

## Alternatives Considered
- **Runtime validation library (Zod)**: Would add dependency and complexity. TypeScript interfaces provide sufficient compile-time safety for the initial foundation.
- **JSON Schema**: Overkill for internal contracts; adds build step overhead.
- **Runtime validation at ingestion**: Will be implemented in the data ingestion pipeline later, but contracts remain type-first for now.

## Consequences
- Strong compile-time type checking for all domain data.
- Provenance is always paired with data.
- External provider formats can be transformed into canonical models without coupling.
- Validation functions are pure and testable.

## Status
Accepted. Implemented in project foundation.

## Verification
- Domain types defined with `readonly` immutability
- Provenance validation implemented and tested
- No fabricated dataset records introduced
