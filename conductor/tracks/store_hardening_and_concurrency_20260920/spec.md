# Specification: Storage Isolation, Atomic Swaps & Optimistic Concurrency Control (OCC)

## 1. Overview

In multi-entity computational environments, human developers, local IDEs, and multiple autonomous AI agents frequently inspect and mutate the filesystem concurrently. Without defensive concurrency control, concurrent file access can lead to torn reads (partial JSON inspection), lost updates (clobbered state), and corrupted user configurations.

This track hardens Context Crystal's persistence engine and configuration patchers:

1. Eliminates torn reads through atomic temporary file staging and inode replacement (`REPLACE_EXISTING`).
2. Isolates concurrency control behind a high-level transactional `CrystalStore.update(id)(f)` trait API with internal SHA-256 optimistic concurrency control (OCC) and bounded auto-retry, guaranteeing enterprise portability for future backends (such as PostgreSQL with MVCC/transactions).
3. Adds pre-read fingerprint validation to `AgentInstaller` to detect external configuration drift and abort cleanly without data loss.
4. Serializes simultaneous physical disk commits with an ephemeral, auto-expiring `.lock` mutex file.

## 2. Functional Requirements

### 2.1 Atomic Inode Replacement (`FsCrystalStore`)

- All writes to persistent files (`crystal.json`, `tasks.md`, `lessons-learned.md`, `transient.json`) must be staged to sibling temporary files (e.g. `.<filename>.tmp.<uuid>`) and atomically moved to the destination using POSIX atomic rename semantics (`StandardCopyOption.REPLACE_EXISTING`).
- Readers must never observe an empty, partially written, or torn JSON payload.

### 2.2 Storage-Isolated Transactional Update API (`CrystalStore`)

- Extend the `CrystalStore` trait with:

  ```scala
  def update(id: String)(
      f: ContextCrystal => Either[String, ContextCrystal]
  ): Either[String, ContextCrystal]
  ```

- The implementation in `FsCrystalStore` must:
  - Load the crystal and compute its SHA-256 content fingerprint.
  - Apply the pure transition function `f`.
  - Verify that the on-disk file has not drifted prior to write (Compare-And-Swap).
  - If a drift is detected, perform a bounded rebase/retry (up to 3 attempts with backoff) by reloading the newest on-disk state and re-applying `f`.
  - If the conflict cannot be resolved or retries are exhausted, return a clear domain error.
- Higher-level callers (CLI subcommands for node addition, task completion, goal transitions, entity registrations, and MCP handlers) must call `store.update` rather than bare `load` -> mutate -> `save`.

### 2.3 AgentInstaller Pre-Read Fingerprint CAS Validation

- `FileSystemInspector` and `AgentInstaller` must calculate a SHA-256 hash when initially reading a harness configuration file.
- Before executing the atomic temporary swap, `AgentInstaller` must inspect the target file's current hash.
- If the current hash does not match the loaded hash (indicating external modification by the user or an IDE during agent reasoning), `AgentInstaller` must abort with a `ConcurrentModification` receipt, preserving the external changes and leaving backup files intact.

### 2.4 Ephemeral Mutex Lockfile

- `FsCrystalStore` acquires a short-lived `.lock` file in the crystal directory during the physical disk write/rename window (< 2ms).
- Lockfiles contain the writer's PID and timestamp.
- Stale locks older than 5 seconds are automatically reclaimed to prevent deadlocks from process termination (`SIGKILL`).

### 2.5 Clean Architectural Isolation (Enterprise Portability)

- No filesystem concepts (paths, inode swapping, file locks, or hash comparisons) may leak outside of `ccrystal.core.store.FsCrystalStore` or `ccrystal.cli.agent.DefaultFileSystemOperator`.
- Higher layers must interact solely through high-level functional APIs (`load`, `save`, `update`).

## 3. Non-Functional Requirements

- **Zero External Dependencies:** Use standard library (`java.nio.file.*`) and Circe AST.
- **Cross-Platform Compatibility:** Must run identically on Linux (x86_64), macOS (Apple Silicon / Intel), and JVM.
- **Strict Functional Quality:** Fully compliant with `-language:strictEquality` and `-Werror`.
- **Zero Warnings:** Clean compilation without deprecations or unused symbols.

## 4. Acceptance Criteria

- [ ] Concurrent reads during high-frequency writes never encounter malformed or truncated JSON.
- [ ] Two simultaneous mutations to the same crystal DAG execute cleanly with automatic rebase retry.
- [ ] `ccrystal agent install` safely aborts if an external process modifies the configuration file between inspection and installation.
- [ ] Stale lockfiles are reclaimed automatically without operator intervention.
- [ ] All existing test suites pass across Native, JVM, and JS targets.
