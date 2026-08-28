# Track Specification: CLI Filesystem Engine & Batch Execution

**Track ID:** `cli_fs_engine_20260829`  
**Type:** Feature / Engine  
**Status:** In-Design  

## 1. Overview
This track delivers the **`cli/` module** built with **Scala Native** using the local filesystem backend (`.ccrystals/`). It implements the core command set required for agents and humans to initialize, mutate, query, cast/hydrate, and batch-script Context Crystals.

---

## 2. Functional Requirements

### A. Pluggable Filesystem Storage (`FsCrystalStore`)
1. Directory layout: `.ccrystals/<crystal-name>/` containing:
   - `crystal.json`: Full serialized `ContextCrystal` ADT.
   - `tasks.md`: Markdown task list representation.
   - `lessons-learned.md`: Structured friction & resolution log.
   - `transient.json`: Ephemeral resource leases.
   - `artifacts/`: Attachment storage folder.
2. Atomic writes and directory validation.

### B. Command Interface (`ccrystal`)
1. **`init <name> --goal <title> [--intent <desc>]`**: Initialize a new named crystal.
2. **`list [--status <in_progress|concluded>] [--json]`**: List crystals with task completion metrics, active leases, and open lessons.
3. **`task (add|done|list) <name> ...`**: Manage task states within a crystal.
4. **`node add <name> --kind <kind> --summary <desc>`**: Append state transitions to the crystal DAG.
5. **`lesson (add|action|list) <name> ...`**: Log and resolve operational lessons learned.
6. **`transient (lease|release|list) <name> ...`**: Register and clean temporary worktrees/configs/assets.
7. **`cast <name> [--depth <n>] [--summary-only]` (alias: `hydrate`)**: Cast a compact, token-optimized context beam for LLM consumption.

### C. Batched & Scripted Execution
1. **Chained Invocations:** Support semicolon-delimited commands in a single argument string:
   `ccrystal "init my-task --goal 'Fix bug'; task add 'Reproduce'; task done 'Reproduce'"`
2. **Streaming Batch from Stdin / Script File:** `ccrystal --batch < script.cc` for executing multi-line crystal transactions in one native process run.

---

## 3. Acceptance Criteria
- [ ] `sbt cliNative/nativeLink` produces an executable native binary.
- [ ] All single commands execute under 15ms.
- [ ] Batched command chains execute sequentially within a single process.
- [ ] Round-trip initialization, task completion, DAG append, and `cast`/`hydrate` verified with automated test suites.
