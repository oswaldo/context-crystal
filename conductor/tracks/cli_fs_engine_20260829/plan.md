# Implementation Plan: CLI Filesystem Engine & Batch Execution

**Track ID:** `cli_fs_engine_20260829`  
**Spec:** `spec.md`  

---

## Phase 1: Filesystem Store (`FsCrystalStore`) (TDD)
Implement the filesystem storage backend for `.ccrystals/`.

- [ ] Task: (TDD Red) Write MUnit tests for `FsCrystalStore` directory creation, loading, and atomic saving
- [ ] Task: (TDD Green) Implement `ccrystal.core.store.FsCrystalStore` with human-readable files (`crystal.json`, `tasks.md`, `transient.json`, `lessons-learned.md`)
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

---

## Phase 2: CLI Subcommands & Decline Parser (TDD)
Implement the command parser and execution dispatcher.

- [ ] Task: Configure `cli` subproject in `build.sbt` with `decline` for Scala Native
- [ ] Task: (TDD Red) Write unit tests for command parsing (`init`, `list`, `task`, `node`, `lesson`, `transient`, `cast`/`hydrate`)
- [ ] Task: (TDD Green) Implement `ccrystal.cli.CommandParser` and `ccrystal.cli.Runner`
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

---

## Phase 3: Batch Execution Engine & Context Casting (TDD)
Implement multi-command batching and token-efficient context casting.

- [ ] Task: (TDD Red) Write tests for chained semicolon execution and script batch parsing
- [ ] Task: (TDD Green) Implement `ccrystal.cli.BatchExecutor` supporting chained strings and stdin scripts
- [ ] Task: (TDD Green) Implement `ccrystal.core.cast.ContextCaster` generating token-optimized markdown prompts for LLM consumption
- [ ] Task: Build native binary (`sbt cliNative/nativeLink`) and verify end-to-end execution
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)
