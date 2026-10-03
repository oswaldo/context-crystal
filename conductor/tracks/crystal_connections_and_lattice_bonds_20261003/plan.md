# Implementation Plan: Cross-Crystal Connections, Lattice Bonds & Defensive Hydration Paging

## Phase 1: Spec v1.1 Schema, Domain Models & Pure Cycle Detection Engine

- [ ] Task: Update JSON Schema `spec/v1/context-crystal.json`
  - [ ] Replace rigid `schemaVersion` enum with SemVer pattern `^1\.[0-9]+\.[0-9]+$`
  - [ ] Add `bonds` array property with `$defs/LatticeBond`
- [ ] Task: Implement Domain Models in `core/shared/src/main/scala/ccrystal/core/model/`
  - [ ] Create `BondRelation` enum (`RelatesTo`, `DependsOn`, `Blocks`, `Supersedes`, `References`) with forgiving string normalization
  - [ ] Create `LatticeBond` case class (`targetCrystalId`, `relation`, `description`, `createdAt`)
  - [ ] Create `CrystalBondsSummary` case class (`crystalId`, `outbound`, `inbound`)
  - [ ] Add `bonds: List[LatticeBond] = Nil` field to `ContextCrystal`
- [ ] Task: Implement Circe Codecs in `core/shared/src/main/scala/ccrystal/core/codec/Codecs.scala`
  - [ ] Codec for `BondRelation` and `LatticeBond`
  - [ ] Backward-compatible decoder on `ContextCrystal` defaulting missing `bonds` to `Nil`
  - [ ] Unit tests in `core/shared/src/test/scala/ccrystal/core/ModelCodecSuite.scala`
- [ ] Task: Implement Pure Functional `LatticeCycleDetector`
  - [ ] Write `LatticeCycleDetector.scala` in `core/shared/src/main/scala/ccrystal/core/lattice/`
  - [ ] Implement reachability search `detectCycle(sourceId, targetId, existingBonds)`
  - [ ] Return human-readable cycle path trace if a cycle is detected
  - [ ] Unit tests in `core/shared/src/test/scala/ccrystal/core/lattice/LatticeCycleDetectorSuite.scala`
- [ ] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md)

## Phase 2: Storage Layer Operations & Referential Integrity

- [ ] Task: Define SPI methods on `CrystalStore.scala`
  - [ ] `connect(sourceId, targetId, relation, description)`
  - [ ] `disconnect(sourceId, targetId, relation)`
  - [ ] `bonds(crystalId)`
- [ ] Task: Implement storage operations in `FsCrystalStore.scala`
  - [ ] Validate source and target existence
  - [ ] Run `LatticeCycleDetector` check before saving
  - [ ] Atomically update source crystal with OCC rebase
  - [ ] Implement inbound bond discovery across cave
  - [ ] Add bonded inbound target warnings in `previewCrystalDeletion` and `previewPrune`
- [ ] Task: Write storage integration tests in `core/jvm-native/src/test/scala/ccrystal/core/store/FsCrystalStoreLatticeSuite.scala`
- [ ] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Defensive Hydration & Lattice Quick-Peeking

- [ ] Task: Update `ContextHydrator.scala` in `core/shared/src/main/scala/ccrystal/core/dag/`
  - [ ] Project connected crystals into `## Connected Lattice Bonds:`
  - [ ] Limit depth strictly to 1 (quick-peek only direct targets)
  - [ ] Enforce concise summary format (goal title, status, open task count)
  - [ ] Omit completed tasks from connected quick-peeking
- [ ] Task: Unit tests in `core/shared/src/test/scala/ccrystal/core/dag/ContextHydratorSuite.scala`
- [ ] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)

## Phase 4: CLI Subcommands (`connect`, `disconnect`, `connections`)

- [ ] Task: Implement Decline options in `cli/shared/src/main/scala/ccrystal/cli/CommandParser.scala`
  - [ ] Parse `connect`, `disconnect`, `connections`
  - [ ] Unit tests in `cli/shared/src/test/scala/ccrystal/cli/CommandParserSuite.scala`
- [ ] Task: Implement Runner logic in `cli/shared/src/main/scala/ccrystal/cli/Runner.scala`
  - [ ] Execute `connect` and format confirmation
  - [ ] Execute `disconnect` and format confirmation
  - [ ] Render formatted connection tree/table for `connections`
  - [ ] Add JSON output support for `connections --json`
- [ ] Task: Integration tests in `cli/shared/src/test/scala/ccrystal/cli/RunnerLatticeSuite.scala`
- [ ] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md)

## Phase 5: Native MCP Server Tool (`crystal_connect`) & Documentation

- [ ] Task: Implement `crystal_connect` tool in `cli/shared/src/main/scala/ccrystal/cli/mcp/DefaultMcpHandler.scala`
  - [ ] Register `crystal_connect` in `tools/list`
  - [ ] Handle actions `connect`, `disconnect`, `list` in `tools/call`
  - [ ] Export MCP schema `docs/mcp/schemas/crystal_connect.json`
- [ ] Task: MCP Unit and E2E Tests
  - [ ] `DefaultMcpHandlerSuite.scala`
  - [ ] `McpEndToEndSessionSuite.scala`
- [ ] Task: Update documentation and agent skills
  - [ ] Update `README.md`, `.agents/skills/context-crystal/SKILL.md`, and `docs/mcp/instructions.md`
  - [ ] Run Markdown linting (`npx markdownlint-cli ...`)
- [ ] Task: Full multi-platform test suite & formatting
  - [ ] Run `sbt test` across Native, JVM, and JS
  - [ ] Run `sbt "scalafmtCheckAll; scalafixAll --check"`
- [ ] Task: Phase 5 Verification & Checkpoint (Refer to workflow.md)
