# Track Implementation Plan: Cave Entities and Authorship Tracking (`cave_entities_authorship_20260830`)

## Phase 1: Core Domain Models & Codecs (TDD) [checkpoint: 6fc7527]
- [x] Task: Write failing unit tests in `core` for `AuthorshipMode`, `EntityRegistry`, `EntityKind`, and extensible `metadata` fields in `ModelCodecSuite.scala` (d481c60)
- [x] Task: Implement `AuthorshipMode`, `EntityRegistry`, updated `Entity`, and `metadata` support in `Models.scala` and `Codecs.scala` (800344d)
- [x] Task: Verify cross-platform codec tests pass on JVM, Native, and JS (`sbt test`) (800344d)
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) (6fc7527)

## Phase 2: Storage Layer & Collision Resolution (TDD)
- [x] Task: Write failing unit tests in `FsCrystalStoreSuite.scala` for `.ccrystals/entities.json` lifecycle and collision resolution (2c4ed5c)
- [~] Task: Implement entity registry read/write and incremental suffix collision resolution in `FsCrystalStore.scala` (both JVM and Native)
- [ ] Task: Verify storage suite passes on JVM and Native targets
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 3: CLI Commands & Authorship Integration (TDD)
- [ ] Task: Write failing CLI command tests for `--author`, `--author-kind`, `ccrystal entity list`, and `ccrystal entity register`
- [ ] Task: Update `CliCommand.scala`, `CommandParser.scala`, and `BatchExecutor.scala` to support entity management and author attribution
- [ ] Task: Build Native binary (`sbt cliNative/nativeLink`) and verify end-to-end entity registration and authorship tracking
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)
