# Implementation Plan: Universal Agent Runtime Matrix & Automated Onboarding

## Phase 1: Agent Runtime Models, Harness Path Resolvers & Defensive Circe AST Patcher [checkpoint: 342abd4]
- [x] Task: Agent Harness ADTs & Platform Path Resolution (TDD) (69c6dd9)
  - [x] Write unit tests for `AgentHarness` ADT, config file path resolution across Linux and macOS (with JVM fallback), and MCP server configuration structures.
  - [x] Implement `AgentHarness` ADT and pure path resolution utilities in `core` / `cli`.
- [x] Task: Safe Non-Destructive JSON Patching Engine & Reversible Backup Protocol (TDD) (342abd4)
  - [x] Write unit tests for defensive merging using Circe AST (`mcpServers` / `context_servers`), preserving existing tool configurations, formatting, and handling missing/empty parent objects.
  - [x] Implement `HarnessConfigPatcher` with zero external dependencies beyond Circe, generating atomic `.ccrystal.bak` files and surfacing rollback paths in execution receipts.
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md) (342abd4)

## Phase 2: Diagnostic Engine (`ccrystal agent doctor`)
- [x] Task: Diagnostic Evaluator & Report Generation (TDD) (15ae088)
  - [x] Write unit tests for evaluating binary availability, store status, and harness configuration status.
  - [x] Implement `AgentDoctor` evaluator returning typed `DoctorReport`.
- [ ] Task: CLI Command `ccrystal agent doctor` (TDD)
  - [ ] Write unit tests for decline CLI options (`agent doctor [--json] [--verbose]`) and rendering.
  - [ ] Implement decline parser command and formatted ANSI table + JSON outputs.
- [ ] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Automated Onboarding Engine (`ccrystal agent install`)
- [ ] Task: Defensive Automated Configuration Installer (TDD)
  - [ ] Write unit tests for installer execution: atomic `.tmp` swap, creation of `.bak` backups, rollback verification, `--dry-run` previews, and target filtering.
  - [ ] Implement `AgentInstaller` engine with clear CLI logging of backup locations and rollback instructions.
- [ ] Task: CLI Command `ccrystal agent install` (TDD)
  - [ ] Write unit tests for CLI wiring of `agent install [--target <harness>] [--dry-run] [--force]`.
  - [ ] Implement decline subcommand and attach to main CLI router.
- [ ] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)

## Phase 4: Cross-Platform Verification, Safety Audits & Documentation
- [ ] Task: Cross-Platform Verification Suite
  - [ ] Run test suite across JVM and Native (`sbt "coreJVM/test; cliJVM/test; coreNative/test; cliNative/test"`).
- [ ] Task: Documentation, Release Binary & Host Dogfooding
  - [ ] Update `README.md`, `skills/context-crystal/SKILL.md`, and docs portal.
  - [ ] Compile optimized release binary with Thin LTO and verify `ccrystal agent doctor` live on host environment.
- [ ] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md)
