# Implementation Plan: Track - Crystal Cleavage & Fragment Slicing

## Phase 1: Semantic Anchors on DAGNode & Schema Update [checkpoint: a4c8b28]
- [x] Task: Write Tests - Add tests in `ModelCodecSuite` verifying serialization and deserialization of `DAGNode` with `anchor: Option[String]` (both `Some(...)` and `None`) [a4c8b28]
- [x] Task: Write Tests - Add tests in `ModelCodecSuite` ensuring legacy JSON payloads missing `anchor` decode cleanly with `None` [a4c8b28]
- [x] Task: Implement - Add `anchor: Option[String] = None` to `DAGNode` in `Models.scala` [a4c8b28]
- [x] Task: Implement - Update `Codecs.scala` to handle `anchor` field encoding and decoding [a4c8b28]
- [x] Task: Implement - Update `spec/v1/context-crystal.json` schema to include optional `anchor` on `DAGNode` [a4c8b28]
- [x] Task: Phase Verification & Checkpoint [a4c8b28]

## Phase 2: Pure Functional Slicing Engine (`CrystalSlicer`) [checkpoint: a5e4426]
- [x] Task: Write Tests - Create `CrystalSlicerSuite` in `core` testing node resolution, range slicing, DAG normalization, and lineage fork construction [a5e4426]
- [x] Task: Implement - Create `ccrystal.core.dag.CrystalSlicer` implementing pure slicing and fork generation [a5e4426]
- [x] Task: Phase Verification & Checkpoint [a5e4426]

## Phase 3: CLI Slicing Command (`ccrystal slice`) & Formats [checkpoint: e67b3a0]
- [x] Task: Write Tests - Add CLI decline parser tests for `slice` command options (`--from`, `--to`, `--head`, `--tail`, `--format`, `--fork-to`, `--prune`) [e67b3a0]
- [x] Task: Implement - Add `slice` command to CLI with `--format <prompt|human|json>` renderers [e67b3a0]
- [x] Task: Implement - Wire `--fork-to <name>` to persist new child crystal via `CrystalStore` with provenance lineage [e67b3a0]
- [x] Task: Phase Verification & Checkpoint [e67b3a0]

## Phase 4: Full Cross-Platform & Native Verification
- [ ] Task: Run full test suite across `coreJVM`, `coreNative`, `coreJS`, `cliJVM`, `cliNative`
- [ ] Task: Format and lint pass (`scalafmtCheckAll`, `scalafix`)
- [ ] Task: Phase Verification & Final Review Checkpoint
