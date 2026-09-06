# Implementation Plan: Track - Crystal Cleavage & Fragment Slicing

## Phase 1: Semantic Anchors on DAGNode & Schema Update
- [ ] Task: Write Tests - Add tests in `ModelCodecSuite` verifying serialization and deserialization of `DAGNode` with `anchor: Option[String]` (both `Some(...)` and `None`)
- [ ] Task: Write Tests - Add tests in `ModelCodecSuite` ensuring legacy JSON payloads missing `anchor` decode cleanly with `None`
- [ ] Task: Implement - Add `anchor: Option[String] = None` to `DAGNode` in `Models.scala`
- [ ] Task: Implement - Update `Codecs.scala` to handle `anchor` field encoding and decoding
- [ ] Task: Implement - Update `spec/v1/context-crystal.json` schema to include optional `anchor` on `DAGNode`
- [ ] Task: Phase Verification & Checkpoint

## Phase 2: Pure Functional Slicing Engine (`CrystalSlicer`)
- [ ] Task: Write Tests - Create `CrystalSlicerSuite` in `core` testing:
  - Node resolution by `id` and by `anchor`
  - Linear range slicing (`from`, `to`, `head`, `tail`)
  - Sub-DAG normalization (setting root to slice entry, filtering invalid parent references)
  - Sub-crystal fork construction with `CrystalOrigin`
- [ ] Task: Implement - Create `ccrystal.core.dag.CrystalSlicer` implementing pure slicing and fork generation
- [ ] Task: Phase Verification & Checkpoint

## Phase 3: CLI Slicing Command (`ccrystal slice`) & Formats
- [ ] Task: Write Tests - Add CLI decline parser tests for `slice` command options (`--from`, `--to`, `--head`, `--tail`, `--format`, `--fork-to`, `--prune`)
- [ ] Task: Implement - Add `slice` command to CLI with `--format <prompt|human|json>` renderers
- [ ] Task: Implement - Wire `--fork-to <name>` to persist new child crystal via `CrystalStore` with provenance lineage
- [ ] Task: Phase Verification & Checkpoint

## Phase 4: Full Cross-Platform & Native Verification
- [ ] Task: Run full test suite across `coreJVM`, `coreNative`, `coreJS`, `cliJVM`, `cliNative`
- [ ] Task: Format and lint pass (`scalafmtCheckAll`, `scalafix`)
- [ ] Task: Phase Verification & Final Review Checkpoint
