# Digital Atlas Core Rules

## Mission

Digital Atlas is an interactive, data-driven web atlas.
The globe is the primary interface.

The system must support:
- country exploration
- country profiles
- Internet metrics
- search
- country comparison
- digital infrastructure
- data sources and provenance

## Core Principles

1. Inspect before changing.
2. Read relevant repository files before making architectural decisions.
3. Reuse existing conventions before introducing new ones.
4. Prefer the smallest solution that satisfies the requirement.
5. Keep module boundaries explicit.
6. Never silently break an existing API, domain model, or data contract.
7. Do not invent data, sources, licenses, methodology, or provenance.
8. Every external dataset must have traceable provenance.
9. Publicly accessible data is not automatically commercially reusable.
10. Optimize only when there is evidence or a clear architectural reason.
11. Keep implementation separate from architecture decisions.
12. Document non-trivial architectural decisions as ADRs.
13. Test behavior that can regress.
14. Avoid unnecessary dependencies.
15. Preserve backwards compatibility unless a breaking change is explicitly required.

## Autonomous Execution

Agents should work autonomously on routine engineering decisions.

Do NOT ask the user for confirmation when:
- the required information already exists in the repository
- the decision follows existing conventions
- the task has an obvious implementation path
- the agent can safely inspect more files to resolve uncertainty

Ask the user only when:
- a required product decision is genuinely undefined
- two materially different approaches require user preference
- required credentials, secrets, external access, or unavailable information are needed
- proceeding would create an irreversible or high-risk change

When uncertain, inspect the repository, documentation, configuration, tests, and existing conventions before asking.

## Repository Safety

Before modifying files:
- inspect the current state
- understand affected modules
- check related tests
- check existing documentation
- check git diff when relevant

Never:
- delete unrelated work
- overwrite user changes without understanding them
- modify secrets
- commit generated credentials
- modify source datasets casually
- introduce architectural changes without documenting them

## Agent Collaboration

Agents are specialists, not independent project owners.

The lead agent coordinates work.

Specialist agents should:
- stay within their domain
- inspect relevant existing code
- report assumptions
- identify risks
- avoid unnecessary changes outside their ownership

When another specialist owns an affected module, coordinate through documented contracts rather than silently changing that module.

## Data Provenance

For every external dataset record:
- provider
- source URL
- license
- retrieval date
- data year when applicable
- methodology
- limitations

Do not assume licensing rights.

## Definition of Done

A task is not complete merely because code was written.

Before reporting completion:
1. Verify changed files.
2. Run relevant tests.
3. Run type checking or build checks when applicable.
4. Inspect git diff.
5. Confirm acceptance criteria.
6. Document important decisions.
7. Report remaining risks or known limitations.

## Communication

Do not repeatedly ask the user routine questions.

Work from repository evidence first.

When reporting progress, state:
- what was inspected
- what was changed
- what was verified
- what remains

Keep reports concise and factual.
