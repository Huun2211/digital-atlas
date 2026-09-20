# Atlas ADR Skill

Use this skill when a decision has meaningful long-term architectural consequences.

## Create an ADR when

A decision affects:

- system architecture
- database structure
- API contracts
- module boundaries
- major dependencies
- geospatial strategy
- data pipeline architecture
- deployment architecture
- security boundaries
- performance architecture

## Do not create an ADR for

- variable names
- small refactors
- routine bug fixes
- ordinary component implementation
- formatting
- trivial configuration

## ADR Structure

Each ADR should contain:

# ADR-NNN: Title

## Status

Proposed | Accepted | Superseded | Deprecated

## Context

Explain the problem and constraints.

## Decision

State the chosen approach.

## Alternatives Considered

List meaningful alternatives and why they were not selected.

## Consequences

Describe:

- benefits
- costs
- risks
- operational implications
- migration implications

## Verification

Explain how the decision can be validated.

## Rules

Never hide a significant architectural decision inside implementation code.

Never create an ADR merely to justify a trivial change.

Keep ADRs factual and concise.
