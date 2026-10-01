---
name: multi-channel-release
description: Standardized playbook and operational invariants for end-to-end multi-channel releases of Context Crystal across GitHub Releases, Maven Central (Sonatype Central Portal), Homebrew, and Coursier.
metadata:
  version: "1.0"
  schemaVersion: "1.0.0"
---

# Multi-Channel Release Skill

This skill codifies the complete operational lifecycle, architecture invariants, and automated verification procedures for releasing **Context Crystal** across all public distribution vectors:

1. **Maven Central (Sonatype Central Portal):** JVM binaries and library dependencies (`io.github.oswaldo:ccrystal-cli_3`, `ccrystal-core_3`).
2. **GitHub Releases:** Prebuilt standalone native binaries for 4 target architectures (`linux-x86_64`, `linux-aarch64`, `macos-aarch64`, `macos-x86_64`) and consolidated `SHA256SUMS`.
3. **Homebrew:** Standalone tap formula (`oswaldo/homebrew-context-crystal`).
4. **Coursier Application Channels:** In-repo descriptor (`apps.json`) and upstream catalog (`coursier/apps`).
5. **Universal OS Support:** Windows, Linux, macOS, and BSD execution via the JVM runtime.

---

## 1. Architectural Invariants & Hard-Learned Lessons

### A. Sonatype Central Portal & sbt Requirements

- **sbt 1.11+ / 1.13+ Requirement:** Publishing to the modern Sonatype Central Portal relies on the built-in `localStaging` resolver. Older versions of sbt (<= 1.10.x) lack `localStaging`, causing `sbt-ci-release` to fail with `Repository for publishing is not specified`. Always use sbt 1.13.0+.
- **`sbt-ci-release 1.12.x` Decoupling:** Modern `sbt-ci-release` relies directly on sbt's native `localStaging` and `sbt-dynver`. Do not add redundant `sbt-sonatype` or obsolete endpoint keys (`sonatypeCredentialHost`, `sonatypeRepository`) in `build.sbt`.
- **Mandatory `versionScheme`:** Always declare `ThisBuild / versionScheme := Some("early-semver")` in `build.sbt` to satisfy eviction verification.
- **Explicit `scmInfo` (Forge Privacy Invariant):** Do not rely on git remotes to infer `scmInfo`. In multi-forge setups where `origin` points to a private developer forge (Codeberg), explicitly set `ThisBuild / scmInfo` in `build.sbt` pointing to the public GitHub repository. This prevents leaking private forge URLs into published Maven POMs.
- **Asynchronous Validation Queues:** Sonatype's automated verification queue extracts `.asc` signatures, verifies keys against public keyservers (`keyserver.ubuntu.com`, `keys.openpgp.org`), checks POM schemas, and lints javadocs. This process typically takes **3 to 15 minutes**. The upload payload is small (~3.2 MB total across CLI and Core JARs); elapsed time is server-side verification queue latency.
- **Immutability Invariant:** Maven Central releases are strictly immutable. Once a version (e.g. `1.0.1`) is published, it can never be deleted or overwritten. Never burn a release version on an unverified build.

### B. Upstream `coursier/apps` PR Invariants

- **Runnable Dependencies Required:** 100% of apps in `coursier/apps` require runnable JVM coordinates under `"dependencies"`. `cs launch` strictly constructs classpaths from `"dependencies"`; declaring placeholder libraries causes `cs launch` to crash. Always declare:

  ```json
  "dependencies": [
    "io.github.oswaldo:ccrystal-cli_3:latest.release"
  ]
  ```

- **Launcher Type Idiom:** Use `"launcherType": "scala-native"` for Scala Native executables.
- **Dynamic `${version}` Interpolation:** Use `v${version}` in `prebuiltBinaries` with the `gz+` tarball extraction scheme so future releases automatically resolve without modifying the descriptor:

  ```json
  "x86_64-pc-linux": "gz+https://github.com/oswaldo/context-crystal/releases/download/v${version}/ccrystal-v${version}-linux-x86_64.tar.gz!ccrystal"
  ```

- **Explicit Main Class Fallback:** Include `"mainClass": "ccrystal.cli.Main?"` as standard defensive metadata.
- **Strict `check-pr-scope` Invariant:** Upstream `coursier/apps` enforces a strict CI check (`.github/workflows/check-pr-scope.yml`) that forbids mixing hand-written descriptors with generated listing aggregations. **NEVER commit `listings/` in PRs.** Only touch `apps-contrib/resources/ccrystal.json`.

### C. Collaborative Release Notes Protocol

- **User-Facing Deliverable Focus:** Release notes are public product communications. They must focus strictly on tangible user- and AI-facing deliverables:
  - New features and CLI capabilities
  - Bug fixes and reliability hardening
  - Installation and upgrade methods
  - Public API and library additions
- **Strict Exclusion of Meta-Rules:** Repo-internal process improvements, governance guidelines codified into `AGENTS.md`, agent prompt engineering, and developer-internal workflows are not external deliverables and must be strictly excluded from public release notes.

---

## 2. Pre-Release Verification Checklist

Execute the complete verification sequence prior to cutting any release tag:

```bash
# 1. Code formatting and linter checks
sbt "scalafmtCheckAll; scalafixAll --check"

# 2. Markdown documentation linting
npx markdownlint-cli "README.md" "AGENTS.md" "docs/*.md" "skills/**/SKILL.md"

# 3. Shell script verification
npx shellcheck install.sh && find skills -name "*.sh" -exec npx shellcheck {} +

# 4. Full cross-platform test matrix (Native, JVM, JS)
sbt test

# 5. Local dry-run packaging and POM verification
sbt "coreJVM/publishLocal; cliJVM/publishLocal"
```

---

## 3. Release Execution Sequence

### Step 1: Draft User-Facing Release Notes

Draft release notes adhering strictly to the User-Facing Deliverable Focus rule, present them to the human operator, and obtain explicit sign-off before tagging.

### Step 2: Create and Sign Git Tag

```bash
# Example: Cutting patch release v1.0.2
git tag -s v1.0.2 -m "Release v1.0.2: <User-facing summary>"

# Verify tag signature and version resolution
git tag -v v1.0.2
sbt "cliJVM/version"  # Must output exact tag version without -SNAPSHOT
```

### Step 3: Push Gate (Human-in-the-Loop)

Instruct the operator to push the tag and branch using their locked transport key:

```bash
git push github main && git push origin main
git push github v1.0.2 && git push origin v1.0.2
```

### Step 4: Monitor Release Workflow

Track GitHub Actions run for `.github/workflows/release.yml`:

1. **`build-release-matrix`**: Compiles native binaries for `linux-x86_64`, `linux-aarch64`, `macos-aarch64`, and `macos-x86_64`.
2. **`publish-release`**: Publishes GitHub Release with native `.tar.gz` bundles and `SHA256SUMS`.
3. **`publish-maven-central`**: Runs `sbt ci-release`, uploading signed JVM artifacts to Sonatype Central Portal.

---

## 4. Post-Release Synchronization

Once the GitHub Release and Maven Central publishing succeed:

### 1. Synchronize Homebrew Formula (`Formula/ccrystal.rb`)

1. Fetch fresh checksums from `https://github.com/oswaldo/context-crystal/releases/download/v<version>/SHA256SUMS`.
2. Update `version` and platform SHA256 checksums in `Formula/ccrystal.rb`.
3. Copy updated formula to downstream tap repository `oswaldo/homebrew-context-crystal` and push.

### 2. Synchronize Coursier Application Channel (`apps.json`)

Verify that root `apps.json` and upstream `apps-contrib/resources/ccrystal.json` maintain dynamic `${version}` and `"io.github.oswaldo:ccrystal-cli_3:latest.release"`.

### 3. Update Web Showcase Portal & llms.txt

1. Update version references in `../context-crystal-gh-pages/site/TabQuickstart.scala` and `llms.txt`.
2. Recompile static bundle: `scala-cli --power package site --js-mode release -o main.js --force`.
3. Commit and push to `gh-pages`.

---

## 5. Clean-Room Smoke Verification

Verify that official installation pathways succeed on target environments:

```bash
# 1. Universal POSIX bootstrap (Linux / macOS Native)
curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh
~/.local/bin/ccrystal --help

# 2. Homebrew
brew install oswaldo/context-crystal/ccrystal
ccrystal --help

# 3. Coursier Zero-Install (Universal: Windows, Linux, macOS, BSD)
cs launch io.github.oswaldo:ccrystal-cli_3:latest.release -- --help

# 4. Coursier Local Install
cs install --channel gh:oswaldo/context-crystal:main ccrystal
ccrystal --help
```
