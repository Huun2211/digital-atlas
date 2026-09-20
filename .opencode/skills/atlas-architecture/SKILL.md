# Atlas Architecture Skill

Use this skill when making or reviewing architectural decisions.

## Workflow

1. Inspect the repository structure.
2. Read relevant documentation.
3. Inspect affected modules.
4. Inspect dependency relationships.
5. Identify existing conventions.
6. Identify contracts affected.
7. Compare the smallest viable options.
8. Choose the least complex option that satisfies the requirement.
9. Document non-trivial decisions.
10. Verify that consumers remain compatible.

## Architecture Checklist

Consider:

- frontend boundaries
- backend boundaries
- database boundaries
- API boundaries
- shared types
- domain models
- data flow
- dependency direction
- error handling
- scalability
- performance
- testing
- deployment implications

## Contract Safety

Before changing a contract, identify:

- producer
- consumers
- request shape
- response shape
- validation
- versioning implications
- migration requirements

Never silently introduce breaking changes.

## Decision Quality

Prefer:

- explicit boundaries
- small interfaces
- stable domain models
- dependency inversion where useful
- minimal dependencies
- boring solutions when they are sufficient

Avoid:

- speculative abstractions
- unnecessary microservices
- premature event-driven architecture
- duplicate sources of truth
- framework-specific coupling in domain logic
