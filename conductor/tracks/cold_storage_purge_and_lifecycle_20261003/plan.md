# Implementation Plan: Cold Storage Prune, Deletion Symmetry & Lifecycle Completeness

## Phase 1: Storage Layer Deletion Symmetry & Artifact Cleanup

- [x] Task: Write failing unit tests for deletion symmetry and artifact cleanup in `FsCrystalStoreSuite`
  - [x] Test deleting an archived crystal located in `.ccrystals/archive/<id>`
  - [x] Test cascade-deregistration of entities exclusively authored by an archived crystal
  - [x] Test cleanup of artifact records in `.ccrystals/artifacts.json` owned by deleted crystal
  - [x] Test `previewCrystalDeletion` reporting `[Cold Storage Archive]` status
- [x] Task: Implement deletion symmetry in `core/jvm-native/src/main/scala/ccrystal/core/store/FsCrystalStore.scala`
  - [x] Update `deleteCrystal` to check both active `.ccrystals/<id>` and cold storage `.ccrystals/archive/<id>`
  - [x] Update entity reference scan across both active and archived crystals during cascade check
  - [x] Update `previewCrystalDeletion` to inspect active and archived locations
  - [x] Synchronize `.ccrystals/artifacts.json` removal upon crystal deletion
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md)

## Phase 2: Prune Models, Codecs & Pure Functional PruneEngine

- [x] Task: Define prune domain models & Circe codecs
  - [x] Implement `PruneCandidate`, `PruneImpactPreview`, `PruneResult` in `core/shared/src/main/scala/ccrystal/core/model/prune/PruneModels.scala`
  - [x] Implement Circe codecs in `core/shared/src/main/scala/ccrystal/core/codec/Codecs.scala`
  - [x] Write unit tests for codecs in `core/shared/src/test/scala/ccrystal/core/ModelCodecSuite.scala`
- [x] Task: Implement pure functional `PruneEngine` in `core/shared/src/main/scala/ccrystal/core/prune/PruneEngine.scala`
  - [x] Duration parser for `<number>d`, `<number>w`, `<number>m`
  - [x] Candidate evaluation: age calculation, disk size calculation, node/task/lesson counts
  - [x] Symmetrical entity cascade and artifact cleanup evaluation
  - [x] Wire `previewPrune` and `pruneArchived` into `CrystalStore` trait and `FsCrystalStore`
  - [x] Write unit tests in `core/shared/src/test/scala/ccrystal/core/prune/PruneEngineSuite.scala`
- [x] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

## Phase 3: CLI Commands (`ccrystal prune` & Enhanced `ccrystal delete`)

- [x] Task: Implement Decline parser for `ccrystal prune` in `cli/shared/src/main/scala/ccrystal/cli/CommandParser.scala`
  - [x] Add `CliCommand.Prune(crystalId: Option[String], olderThan: Option[String], all: Boolean, dryRun: Boolean, force: Boolean)`
  - [x] Write parser unit tests in `cli/shared/src/test/scala/ccrystal/cli/CommandParserSuite.scala`
- [x] Task: Implement CLI runner and renderer for `prune` and enhanced `delete` in `cli/shared/src/main/scala/ccrystal/cli/Runner.scala`
  - [x] Add interactive confirmation and preview table for `ccrystal prune`
  - [x] Enforce batch safety invariant (require `--force` in headless mode)
  - [x] Update `delete` output to distinguish active vs archived targets
  - [x] Write CLI integration test in `cli/shared/src/test/scala/ccrystal/cli/RunnerPruneSuite.scala`
- [x] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)

## Phase 4: Native MCP Server Tool (`crystal_prune`) & Triage Integration

- [ ] Task: Expose `crystal_prune` (with `crystal_delete` alias) in `DefaultMcpHandler.scala`
  - [ ] Register `crystal_prune` in `tools/list`
  - [ ] Handle `crystal_delete` as backward-compatible alias to same logic
  - [ ] Write MCP unit tests in `cli/shared/src/test/scala/ccrystal/cli/mcp/DefaultMcpHandlerSuite.scala`
  - [ ] Add end-to-end integration test in `cli/shared/src/test/scala/ccrystal/cli/mcp/McpEndToEndSessionSuite.scala`
- [ ] Task: Integrate retention recommendations in `TriageEngine` and `ccrystal triage`
  - [ ] Scan cold storage archive for crystals exceeding retention threshold (default: 90 days)
  - [ ] Emit recommendation suggesting `ccrystal prune --older-than 90d`
  - [ ] Write triage tests in `cli/shared/src/test/scala/ccrystal/cli/TriageEngineSuite.scala`
- [ ] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md)

## Phase 5: Documentation, Multi-Platform Verification & Integration

- [ ] Task: Export MCP tool schema for `crystal_prune`
  - [ ] Write `crystal_prune.json` in `docs/mcp/schemas/`
- [ ] Task: Update documentation and agent skills
  - [ ] Update `README.md`, `.agents/skills/context-crystal/SKILL.md`, and `docs/mcp/instructions.md`
  - [ ] Run Markdown linting (`npx markdownlint-cli ...`)
- [ ] Task: Multi-platform test suite & formatting
  - [ ] Run `sbt test` across Native, JVM, and JS targets
  - [ ] Run `sbt "scalafmtCheckAll; scalafixAll --check"`
- [ ] Task: Phase 5 Verification & Checkpoint (Refer to workflow.md)
