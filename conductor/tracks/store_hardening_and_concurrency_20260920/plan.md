# Implementation Plan: Storage Isolation, Atomic Swaps & Optimistic Concurrency Control (OCC)

## Phase 1: Atomic File Swaps & Zero-Torn-Read Inode Engine (TDD) [checkpoint: 658f8ae]

- [x] Task: Atomic Inode Replacement Unit Tests (TDD) (658f8ae)
  - [x] Write unit tests asserting that `FsCrystalStore.save` uses temporary file staging and atomic replacement (`REPLACE_EXISTING`).
  - [x] Write tests verifying that concurrent reads during write loops observe only complete, valid JSON files.
- [x] Task: Implement Atomic File Replacement in `FsCrystalStore` (658f8ae)
  - [x] Introduce internal atomic file writing helper in `FsCrystalStore` for `crystal.json`, `tasks.md`, `lessons-learned.md`, and `transient.json`.
  - [x] Ensure non-destructive cleanup of temporary files upon write failures.
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md) (658f8ae)

## Phase 2: Storage-Isolated Transactional API & OCC Rebase (TDD)

- [ ] Task: `CrystalStore.update` Unit Tests with Simulated Race Conditions (TDD)
  - [ ] Write unit tests simulating concurrent modification conflicts during `update`.
  - [ ] Verify automatic rebase retry succeeds when parallel mutations occur on the same crystal.
- [ ] Task: Implement `update` on `CrystalStore` & `FsCrystalStore`
  - [ ] Add `def update(id: String)(f: ContextCrystal => Either[String, ContextCrystal]): Either[String, ContextCrystal]` to `CrystalStore`.
  - [ ] Implement SHA-256 content fingerprinting (CAS) and bounded retry loop in `FsCrystalStore`.
- [ ] Task: Refactor High-Level Callers to `store.update`
  - [ ] Refactor CLI runners (`node add`, `task done`, `goal complete`, `transient lease`, `artifact link`, etc.) to use `store.update`.
  - [ ] Refactor MCP handlers (`DefaultMcpHandler`) to route mutations through `store.update`.
- [ ] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

## Phase 3: AgentInstaller CAS Protection & Ephemeral Mutex Serialization (TDD)

- [ ] Task: AgentInstaller External Drift Unit Tests (TDD)
  - [ ] Write unit tests asserting `AgentInstaller` detects file drift between inspection and write.
  - [ ] Verify that external edits abort installation and preserve untouched `.ccrystal.bak`.
- [ ] Task: Implement Pre-Read Fingerprinting & CAS in `AgentInstaller`
  - [ ] Add SHA-256 fingerprint extraction in `FileSystemInspector` and validate in `AgentInstaller` before atomic write.
- [ ] Task: Ephemeral Mutex Lockfile in `FsCrystalStore`
  - [ ] Implement short-lived `.lock` mutex file with PID + timestamp and 5-second staleness auto-expiration.
- [ ] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)

## Phase 4: Concurrency Stress Verification, Documentation & Release Build

- [ ] Task: Cross-Platform Concurrency Stress Suite
  - [ ] Run automated multi-thread and multi-process concurrent stress tests across JVM and Native targets.
- [ ] Task: Documentation, Optimized Release Binary & Host Dogfooding
  - [ ] Update `README.md`, `conductor/next-steps.md`, and architecture documentation.
  - [ ] Compile release binary with Thin LTO and verify live.
- [ ] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md)
