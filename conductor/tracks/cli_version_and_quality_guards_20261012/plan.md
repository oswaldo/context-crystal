# Implementation Plan: CLI Version Flag & BuildInfo Integration and Pre-Push Quality Guards

## Phase 1: BuildInfo & CLI Version Flag (`--version`, `-v`)

- [x] Task: Integrate `sbt-buildinfo` plugin and configure BuildInfo generation (230838e)
  - [x] Add `sbt-buildinfo` plugin to `project/plugins.sbt`
  - [x] Configure `BuildInfoPlugin` in `build.sbt` with version, scalaVersion, git commit
- [x] Task: Implement `--version` and `-v` CLI options in Decline parser & Main runner (507f752)
  - [x] Add version flag parsing in `Main.scala` / `CommandParser.scala`
  - [x] Support `--verbose` flag for extended build metadata output
- [x] Task: Unit tests for version flag output (507f752)
  - [x] Write MUnit test verifying `--version` and `-v` parsing and output formatting
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md)

---

## Phase 2: Automated Pre-Commit and Pre-Push Quality Hooks

- [x] Task: Author repo-managed hooks in `.githooks/` (7060ae1)
  - [x] Create `.githooks/pre-commit` for fast formatting validation
  - [x] Create `.githooks/pre-push` for full `scalafmtCheckAll`, `scalafixAll --check`, and tests
  - [x] Create `scripts/setup-hooks.sh` to configure `git config core.hooksPath .githooks`
- [x] Task: Hook validation and permission audit (7060ae1)
  - [x] Verify execution permissions and run hooks in dry-run
  - [x] Document hook configuration in `docs/` and `README.md`
- [ ] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

---

## Phase 3: Cross-Platform Verification & Release Readiness

- [ ] Task: Run full platform cross-build verification
  - [ ] Execute `sbt test` across JVM, Native, and JS platforms
  - [ ] Execute `sbt "cliNative/nativeLink"` to confirm native binary links
- [ ] Task: Package and verify v1.2.1 release artifacts
  - [ ] Run dry-run package script `scripts/package-release.sh v1.2.1`
  - [ ] Update Context Crystal tasks in `release-v1-2-1-ergonomics-and-quality-guards`
- [ ] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)
