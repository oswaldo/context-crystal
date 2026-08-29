# Implementation Plan: CLI Filesystem Engine & Batch Execution

**Track ID:** `cli_fs_engine_20260829`  
**Spec:** `spec.md`  

---

## Phase 1: Filesystem Store (`FsCrystalStore`) (TDD) [checkpoint: 1853c3f]
Implement the filesystem storage backend for `.ccrystals/`.

- [x] Task: (TDD Red) Write MUnit tests for `FsCrystalStore` directory creation, loading, and atomic saving [1853c3f]
- [x] Task: (TDD Green) Implement `ccrystal.core.store.FsCrystalStore` with human-readable files (`crystal.json`, `tasks.md`, `transient.json`, `lessons-learned.md`) [1853c3f]
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [1853c3f]

---

## Phase 2: CLI Subcommands & Decline Parser (TDD) [checkpoint: 8e3b11d]
Implement the command parser and execution dispatcher.

- [x] Task: Configure `cli` subproject in `build.sbt` with `decline` for Scala Native [8e3b11d]
- [x] Task: (TDD Red) Write unit tests for command parsing (`init`, `list`, `task`, `node`, `lesson`, `transient`, `cast`/`hydrate`) [8e3b11d]
- [x] Task: (TDD Green) Implement `ccrystal.cli.CommandParser` and `ccrystal.cli.Runner` [8e3b11d]
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [8e3b11d]

---

## Phase 3: Batch Execution Engine & Context Casting (TDD) [checkpoint: eab50a4]
Implement multi-command batching and token-efficient context casting.

- [x] Task: (TDD Red) Write tests for chained semicolon execution and script batch parsing [eab50a4]
- [x] Task: (TDD Green) Implement `ccrystal.cli.BatchExecutor` supporting chained strings and stdin scripts [eab50a4]
- [x] Task: (TDD Green) Implement `ccrystal.core.cast.ContextCaster` generating token-optimized markdown prompts for LLM consumption [eab50a4]
- [x] Task: Build native binary (`sbt cliNative/nativeLink`) and verify end-to-end execution [eab50a4]
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [eab50a4]
