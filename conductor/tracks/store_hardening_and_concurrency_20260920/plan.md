# Implementation Plan: Storage Isolation, Atomic Swaps & Optimistic Concurrency Control (OCC)

## Phase 1: Atomic File Swaps & Zero-Torn-Read Inode Engine (TDD) [checkpoint: 658f8ae]

- [x] Task: Atomic Inode Replacement Unit Tests (TDD) (658f8ae)
  - [x] Write unit tests asserting that `FsCrystalStore.save` uses temporary file staging and atomic replacement (`REPLACE_EXISTING`).
  - [x] Write tests verifying that concurrent reads during write loops observe only complete, valid JSON files.
- [x] Task: Implement Atomic File Replacement in `FsCrystalStore` (658f8ae)
  - [x] Introduce internal atomic file writing helper in `FsCrystalStore` for `crystal.json`, `tasks.md`, `lessons-learned.md`, and `transient.json`.
  - [x] Ensure non-destructive cleanup of temporary files upon write failures.
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md) (658f8ae)

## Phase 2: Storage-Isolated Transactional API & OCC Rebase (TDD) [checkpoint: 4b60903]

- [x] Task: `CrystalStore.update` Unit Tests with Simulated Race Conditions (TDD) (4b60903)
  - [x] Write unit tests simulating concurrent modification conflicts during `update`.
  - [x] Verify automatic rebase retry succeeds when parallel mutations occur on the same crystal.
- [x] Task: Implement `update` on `CrystalStore` & `FsCrystalStore` (4b60903)
  - [x] Add `def update(id: String)(f: ContextCrystal => Either[String, ContextCrystal]): Either[String, ContextCrystal]` to `CrystalStore`.
  - [x] Implement SHA-256 content fingerprinting (CAS) and bounded retry loop in `FsCrystalStore`.
- [x] Task: Refactor High-Level Callers to `store.update` (4b60903)
  - [x] Refactor CLI runners (`node add`, `task done`, `goal complete`, `transient lease`, `artifact link`, etc.) to use `store.update`.
  - [x] Refactor MCP handlers (`DefaultMcpHandler`) to route mutations through `store.update`.
- [x] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md) (4b60903)

## Phase 3: AgentInstaller CAS Protection & Ephemeral Mutex Serialization (TDD) [checkpoint: 4e9f981]

- [x] Task: AgentInstaller External Drift Unit Tests (TDD) (4e9f981)
  - [x] Write unit tests asserting `AgentInstaller` detects file drift between inspection and write.
  - [x] Verify that external edits abort installation and preserve untouched `.ccrystal.bak`.
- [x] Task: Implement Pre-Read Fingerprinting & CAS in `AgentInstaller` (4e9f981)
  - [x] Add pure ContentFingerprint validation in `AgentInstaller` before atomic write.
- [x] Task: Ephemeral Mutex Lockfile in `FsCrystalStore` (4e9f981)
  - [x] Implement short-lived `.lock` mutex file with PID + timestamp and 5-second staleness auto-expiration.
- [x] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md) (4e9f981)

## Phase 4: Concurrency Stress Verification, Documentation & Release Build [checkpoint: 984e079]

- [x] Task: Cross-Platform Concurrency Stress Suite (984e079)
  - [x] Run automated multi-thread and multi-process concurrent stress tests across JVM and Native targets.
- [x] Task: Documentation, Optimized Release Binary & Host Dogfooding (984e079)
  - [x] Update `README.md`, `conductor/next-steps.md`, and architecture documentation.
  - [x] Compile release binary with Thin LTO and verify live.
- [x] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md) (984e079)
