# Tasks: Reason and design artifact & world state abstraction in Context Crystal DAG and registry

> [!NOTE]
> **Auto-Generated View:** This file is projected from `crystal.json` (the single source of truth). Do not edit manually; use `ccrystal` CLI commands to update state.

**Status:** ConcludedSuccess

## Acceptance Criteria / Tasks

- [x] Document Artifact & World-State Ontology track in conductor/next-steps.md and update product manifesto and example hygiene `[task-1]`
- [x] Scaffold Conductor Track 16 (artifact_world_state_ontology_20260909) using conductor-new-track skill `[task-2]`
- [x] Update spec/v1/context-crystal.json and Models.scala with ArtifactSubstrate (Virtual, Physical), ArtifactRole (Target, Instrument, Precondition), PhysicalLocation, and optional uri `[task-3]`
- [x] Enrich DAGNode with directional artifact links (inputArtifactIds, outputArtifactIds, preconditionArtifactIds) `[task-4]`
- [x] Implement Cave Artifact Registry (.ccrystals/artifacts.json & crystal://artifacts) and CLI artifact commands `[task-5]`
- [x] Integrate artifacts into selective context hydration beam projection `[task-6]`
