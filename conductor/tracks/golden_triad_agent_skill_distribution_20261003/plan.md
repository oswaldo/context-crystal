# Implementation Plan: Golden Triad Onboarding: Agent Skill Auto-Distribution & Doctor Evolution

## Phase 1: Skill Domain Models, Canonical Template & Doctor Evolution

- [x] Task: Canonical Skill Template & Path Resolver Evolution (TDD) (29cd083)
  - [x] Write unit tests for `CanonicalSkill` content bundling and `HarnessPathResolver` resolving global/workspace skill paths.
  - [x] Implement `CanonicalSkill` embedded object and update `HarnessPathResolver` with `skillPath` and `workspaceSkillPath`.
- [x] Task: Agent Doctor Skill Diagnostics (TDD) (6bd8c5a)
  - [x] Write unit tests in `AgentDoctorSuite` checking `SkillStatus` (`Equipped`, `Missing`, `NotSupported`).
  - [x] Implement skill inspection logic in `AgentDoctor` and update `DoctorReport` / `HarnessDiagnosis`.
- [ ] Task: Agent Doctor CLI & Text/JSON Rendering (TDD)
  - [ ] Write unit tests for `AgentDoctorRenderer` verifying matrix columns (MCP and Skill status) and actionable tips.
  - [ ] Update `AgentDoctorRenderer` and verify CLI `agent doctor` output.
- [ ] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md)

## Phase 2: Automated Skill Distribution Engine (`AgentInstaller`)

- [ ] Task: Skill Distribution Engine in `AgentInstaller` (TDD)
  - [ ] Write unit tests in `AgentInstallerSuite` for skill deployment: copy by default, atomic writes, backup generation on update, dry-run simulation, and symlink option.
  - [ ] Extend `FileSystemOperator` and `DefaultFileSystemOperator` with symlink support (`createSymlink`).
  - [ ] Implement skill auto-distribution in `AgentInstaller` returning structured receipts.
- [ ] Task: CLI Wiring for `agent install` Options (TDD)
  - [ ] Write unit tests in `AgentCommandSuite` for `--no-skill`, `--symlink-skill`, and `--workspace-skill` flags.
  - [ ] Update `CommandParser`, `CliCommand.AgentInstallCmd`, and `AgentInstallerRenderer` with skill receipts.
- [ ] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Multi-Platform Testing, Documentation & Showcase

- [ ] Task: Cross-Platform Verification Suite
  - [ ] Run full test suite across JVM, Native, and JS targets (`sbt test`).
  - [ ] Run Scala and Markdown linters (`scalafmtCheckAll`, `scalafixAll --check`, `markdownlint`).
- [ ] Task: Documentation & Showcase Portal Synchronization
  - [ ] Update `README.md` and `skills/context-crystal/SKILL.md` explaining the Golden Triad.
  - [ ] Update documentation portal in `../context-crystal-gh-pages` if relevant.
- [ ] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)
