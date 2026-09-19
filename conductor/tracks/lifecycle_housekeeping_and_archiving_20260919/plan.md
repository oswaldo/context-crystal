# Implementation Plan: Lifecycle Housekeeping, Melting & Archiving

**Track ID:** `lifecycle_housekeeping_and_archiving_20260919`  
**Workflow:** Red-Green TDD, Pure-Functional Scala 3, Cross-Platform (JVM, Native, JS)

## Phase 1: Cold Storage Archiving Core SPI & FsCrystalStore [checkpoint: 4a91626]

- [x] Task: Write failing unit tests for crystal archive and unarchive in `core` (MUnit Red Phase) [6db9c4d]
  - [x] Test `archive` moving `.ccrystals/<id>.json` to `.ccrystals/archive/<id>.json`
  - [x] Test `unarchive` restoring `.ccrystals/archive/<id>.json` back to active cave
  - [x] Test `listCrystals` with and without `includeArchived`
  - [x] Test error conditions (archiving non-existent crystal, unarchiving active crystal, collisions)
- [x] Task: Implement `archive`, `unarchive`, and `includeArchived` in `CrystalStore` & `FsCrystalStore` (Green Phase) [4a91626]
  - [x] Add SPI methods on `CrystalStore` trait
  - [x] Implement filesystem directory/file relocation in `FsCrystalStore`
  - [x] Update `listCrystals` filtering and path discovery
  - [x] Run unit tests across JVM, Native, and JS to verify green state
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md) [4a91626]

## Phase 2: Sub-DAG Melting & Squashing Engine [checkpoint: b076735]

- [x] Task: Write failing unit tests for sub-DAG melting in `core` (MUnit Red Phase) [82dd5e6]
  - [x] Test linear chain squashing with zero-LLM deterministic bulleted summary
  - [x] Test custom agent summary override parameter
  - [x] Test artifact aggregation (union of `artifactIds`, `inputArtifactIds`, etc.)
  - [x] Test boundary edge reconnection (incoming parents to outgoing children)
  - [x] Test invalid range errors (non-existent nodes, disjoint paths)
- [x] Task: Implement `melt` engine and graph squashing algorithms in `core` (Green Phase) [b076735]
  - [x] Implement topological path resolver between `fromNode` and `toNode`
  - [x] Construct consolidated `DAGNode` with kind `checkpoint` and merged artifacts
  - [x] Rewire DAG nodes and update `CrystalStore`
  - [x] Run unit tests across JVM, Native, and JS to verify green state
- [x] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md) [b076735]

## Phase 3: Aging State Classification & Triage Heuristics [checkpoint: 1f5aeaf]

- [x] Task: Write failing unit tests for crystal aging classification in `core` (MUnit Red Phase) [bdadc9e]
  - [x] Test `AgingState` enum (`Active`, `Solid`, `Stale`) derivation based on timestamps, leases, and completion
  - [x] Test triage report filtering by aging state (`--solid`, `--stale`)
- [x] Task: Implement aging heuristics and filter methods in `core` (Green Phase) [1f5aeaf]
  - [x] Add `AgingState` enum with `CanEqual`
  - [x] Integrate aging computation into `CrystalTriage`
  - [x] Run tests across JVM, Native, and JS
- [x] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md) [1f5aeaf]

## Phase 4: CLI Subcommands & Decline Parser Wiring

- [~] Task: Write failing integration tests for CLI commands in `cli` (MUnit Red Phase)
  - [ ] Test `ccrystal archive <id>` and `ccrystal unarchive <id>`
  - [ ] Test `ccrystal melt <id> --from <node> --to <node> [--summary <text>]`
  - [ ] Test `ccrystal list --archived` and `ccrystal triage --solid` / `--stale`
- [ ] Task: Implement CLI commands and decline options in `cli` (Green Phase)
  - [ ] Wire subcommands in `CommandParser.scala`
  - [ ] Implement command execution logic in `Runner.scala`
  - [ ] Verify CLI tests pass cleanly
- [ ] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md)

## Phase 5: Native MCP Server Integration, Verification & Release Binary

- [ ] Task: Implement and test MCP tools (`crystal_archive`, `crystal_unarchive`, `crystal_melt`) and filter updates
  - [ ] Add MCP tool definitions and schemas in `context-crystal` server
  - [ ] Update `crystal_list` and `crystal_triage` MCP tool parameters
  - [ ] Add unit/integration tests for MCP handlers
- [ ] Task: Complete cross-platform test matrix (JVM, Native, JS), format, and lint
  - [ ] Run `sbt "scalafmtCheckAll"` and `sbt "scalafixAll"`
  - [ ] Run full test suite: `sbt test`
  - [ ] Compile and install optimized release binary with Thin LTO to `~/.local/bin/ccrystal`
- [ ] Task: Phase 5 Verification & Checkpoint (Refer to workflow.md)
