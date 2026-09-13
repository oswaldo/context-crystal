# Implementation Plan: Artifact & World-State Ontology (Virtual & Physical Substrates)

## Phase 1: Core Models, Codecs & JSON Schema (Red-Green TDD) [checkpoint: 3765d06]
- [x] Task: Write failing unit tests in `ModelCodecSuite` for `ArtifactSubstrate`, `ArtifactRole`, `PhysicalLocation`, `Artifact`, directional `DAGNode` links, and backward-compatible crystal deserialization [3765d06]
- [x] Task: Implement ADTs and Enums in `ccrystal.core.model.Models.scala` with `derives CanEqual` [3765d06]
- [x] Task: Implement Circe Encoders and Decoders in `ccrystal.core.codec.Codecs.scala` [3765d06]
- [x] Task: Update `spec/v1/context-crystal.json` schema definitions for artifact models and DAG node linkages [3765d06]
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [3765d06]

## Phase 2: Cave Artifact Registry & Storage Layer (Red-Green TDD) [checkpoint: 80f88ab]
- [x] Task: Write failing unit tests in `FsCrystalStoreSuite` for reading, writing, and listing artifacts in Cave Registry (`.ccrystals/artifacts.json`) [80f88ab]
- [x] Task: Implement `CaveArtifactRegistry` storage handling in `FsCrystalStore` (or `ArtifactStore`) supporting both cave-wide and crystal-scoped artifacts [80f88ab]
- [x] Task: Verify cross-platform store compatibility across JVM, Native, and JS targets [80f88ab]
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [80f88ab]

## Phase 3: Context Hydration Beam Projection (Red-Green TDD) [checkpoint: 15e5e18]
- [x] Task: Write failing unit tests in `ContextHydratorSuite` for projecting active Targets, available Instruments, and Preconditions into context beams [15e5e18]
- [x] Task: Update `ContextHydrator` to render the `## Artifacts & World State` section in markdown casts [15e5e18]
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [15e5e18]

## Phase 4: CLI Interface & Native MCP Server Integration (Red-Green TDD) [checkpoint: f77836d]
- [x] Task: Write failing tests in `CommandParserSuite` and `RunnerSuite` for `ccrystal artifact` (`list`, `register`, `inspect`) and `ccrystal node add` artifact options [f77836d]
- [x] Task: Implement CLI commands and argument parsing in `CliCommand.scala`, `CommandParser.scala`, and `Runner.scala` [f77836d]
- [x] Task: Implement MCP resources (`ccrystal://artifacts`, `ccrystal://{id}/artifacts`) and MCP tool `crystal_artifact` in `DefaultMcpHandler.scala` with test coverage [f77836d]
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [f77836d]

## Phase 5: End-to-End Verification, Release Build & Track Wrap-up
- [x] Task: Run full test suite across all platforms (`sbt test`)
- [x] Task: Run formatting and linters (`scalafmtAll`, `scalafixAll`, `markdownlint`)
- [x] Task: Compile and install optimized release binary (`~/.local/bin/ccrystal`) using Thin LTO
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md)
