# Specification: CLI Version Flag & BuildInfo Integration and Pre-Push Quality Guards

## 1. Overview & Motivation

This track delivers the v1.2.1 patch milestone for Context Crystal, focusing on developer ergonomics, release transparency, and proactive quality guards:
1. Expose `ccrystal --version` and `ccrystal -v` via `sbt-buildinfo`, providing instant verification of installed binary versions and build metadata.
2. Introduce zero push-fail quality assurance via repo-managed `.githooks/` (`pre-commit` and `pre-push`) configured through `git config core.hooksPath .githooks`.
3. Verify full cross-platform compilation matrices (Native, JVM, JS).
4. Prepare multi-channel release artifacts and tag milestone `v1.2.1`.

Context Crystal is bonded to crystal `release-v1-2-1-ergonomics-and-quality-guards` in `.ccrystals/`.

---

## 2. Functional Requirements

### 2.1 BuildInfo & Version Flag Integration
- Add `sbt-buildinfo` (`0.13.1` or compatible) to `project/plugins.sbt`.
- Enable `BuildInfoPlugin` on `cli` and `core` cross-projects in `build.sbt`.
- Configure `buildInfoPackage := "ccrystal"` and generate `BuildInfo` object with fields:
  - `name`: "ccrystal"
  - `version`: project version (e.g. "1.2.1")
  - `scalaVersion`: scala 3 version
  - `sbtVersion`: sbt version
  - `gitCommit`: git commit hash (optional/fallback if git available)
- In Decline CLI command definitions (`CommandParser.scala` / `Main.scala`):
  - Support top-level `--version` and `-v` flags.
  - When invoked with `ccrystal --version` or `ccrystal -v`, output `ccrystal <version>` (e.g., `ccrystal 1.2.1`).
  - If accompanied by `--verbose`, output multi-line build details (name, version, scalaVersion, commit).
  - Exit cleanly with code 0.
- Unit testing with MUnit validating version flag output and argument parsing.

### 2.2 Repo-Managed Quality Hooks (`.githooks/`)
- Establish `.githooks/` directory in the repository root:
  - `.githooks/pre-commit`: Runs fast formatting validation or auto-checks (e.g. `sbt scalafmtCheckAll`) to prevent unformatted commits.
  - `.githooks/pre-push`: Runs full quality battery (`sbt "scalafmtCheckAll; scalafixAll --check; test"`).
- Provide a setup script `scripts/setup-hooks.sh` that configures `git config core.hooksPath .githooks` and ensures executable permissions (`chmod +x .githooks/*`).
- Support non-interactive execution with `CI=true` and bypass options (`--no-verify` where emergency overrides are necessary).

### 2.3 Cross-Build Verification
- Verify `sbt test` passes cleanly across all platforms:
  - `coreJVM/test`, `coreNative/test`, `coreJS/test`
  - `cliJVM/test`, `cliNative/test`
- Verify native CLI linking: `sbt "cliNative/nativeLink"`.

### 2.4 Release Packaging & Milestone Tagging
- Verify `scripts/package-release.sh 1.2.1`.
- Update Context Crystal crystal tasks in `.ccrystals/release-v1-2-1-ergonomics-and-quality-guards`.

---

## 3. Non-Functional Requirements & Invariants
- **Fast Startup:** `--version` / `-v` should evaluate without heavy initializations or store discovery.
- **Cross-Platform Portability:** Hooks must be POSIX-compliant `/bin/sh` or bash scripts runnable on Linux and macOS.
- **Zero Secrets Leakage:** Hooks and build info must not expose private keys, credentials, or local environment secrets.
