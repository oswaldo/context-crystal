# Implementation Plan: Golden Triad Onboarding: Agent Skill Auto-Distribution & Doctor Evolution

## Phase 1: Skill Domain Models, Canonical Template & Doctor Evolution [checkpoint: bb73b8e]

- [x] Task: Canonical Skill Template & Path Resolver Evolution (TDD) (29cd083)
  - [x] Write unit tests for `CanonicalSkill` content bundling and `HarnessPathResolver` resolving global/workspace skill paths.
  - [x] Implement `CanonicalSkill` embedded object and update `HarnessPathResolver` with `skillPath` and `workspaceSkillPath`.
- [x] Task: Agent Doctor Skill Diagnostics (TDD) (6bd8c5a)
  - [x] Write unit tests in `AgentDoctorSuite` checking `SkillStatus` (`Equipped`, `Missing`, `NotSupported`).
  - [x] Implement skill inspection logic in `AgentDoctor` and update `DoctorReport` / `HarnessDiagnosis`.
- [x] Task: Agent Doctor CLI & Text/JSON Rendering (TDD) (8802da0)
  - [x] Write unit tests for `AgentDoctorRenderer` verifying matrix columns (MCP and Skill status) and actionable tips.
  - [x] Update `AgentDoctorRenderer` and verify CLI `agent doctor` output.
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md) (bb73b8e)

## Phase 2: Automated Skill Distribution Engine (`AgentInstaller`) [checkpoint: e103255]

- [x] Task: Skill Distribution Engine in `AgentInstaller` (TDD) (888a97b)
  - [x] Write unit tests in `AgentInstallerSuite` for skill deployment: copy by default, atomic writes, backup generation on update, dry-run simulation, and symlink option.
  - [x] Extend `FileSystemOperator` and `DefaultFileSystemOperator` with symlink support (`createSymlink`).
  - [x] Implement skill auto-distribution in `AgentInstaller` returning structured receipts.
- [x] Task: CLI Wiring for `agent install` Options (TDD) (e103255)
  - [x] Write unit tests in `AgentCommandSuite` for `--no-skill`, `--symlink-skill`, and `--workspace-skill` flags.
  - [x] Update `CommandParser`, `CliCommand.AgentInstallCmd`, and `AgentInstallerRenderer` with skill receipts.
- [x] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md) (e103255)

## Phase 3: Multi-Platform Testing, Documentation & Showcase [checkpoint: 7ed7cf1]

- [x] Task: Cross-Platform Verification Suite (7ed7cf1)
  - [x] Run full test suite across JVM, Native, and JS targets (`sbt test`).
  - [x] Run Scala and Markdown linters (`scalafmtCheckAll`, `scalafixAll --check`, `markdownlint`).
- [x] Task: Documentation & Showcase Portal Synchronization (3b0c837, 7ed7cf1)
  - [x] Update `README.md` and `skills/context-crystal/SKILL.md` explaining the Golden Triad.
  - [x] Update documentation portal in `../context-crystal-gh-pages` if relevant.
- [x] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md) (7ed7cf1)
