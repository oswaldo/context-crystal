# Specification: macOS Onboarding & Portability Improvements

## 1. Overview & Problem Statement

Context Crystal's source code and operational guidelines were originally developed with Linux/POSIX baselines. During the first live onboarding and validation session on a real macOS Apple Silicon machine (`arm64`, macOS Sequoia), the Scala Native toolchain and JVM test suites proved exceptionally robust (passing all 202 tests in 7 seconds and linking Mach-O native binaries in 8.4 seconds).

However, real-world onboarding revealed two friction points for collaborators:

1. **BSD `cp` vs GNU `cp` Portability Invariant:**
   - In `README.md` and `AGENTS.md`, the recommended installation command was:
     `cp --remove-destination ./cli/native/target/scala-3.9.0/ccrystal-cli ~/.local/bin/ccrystal`
   - On macOS's default BSD `cp`, `--remove-destination` is unsupported, failing with `cp: illegal option -- -`.
   - The established cross-platform convention (already adopted in `install.sh`) is:
     `rm -f ~/.local/bin/ccrystal && cp ./cli/native/target/scala-3.9.0/ccrystal-cli ~/.local/bin/ccrystal`
     which achieves the same atomic inode unlinking without depending on GNU-specific coreutils flags.
2. **Unified Bleeding-Edge Toolchain Bootstrapping:**
   - Collaborators setting up new macOS machines previously had fragmented guidance between Homebrew and SDKMAN.
   - Homebrew's `openjdk` is *keg-only* on macOS, requiring manual PATH/symlink interventions.
   - Coursier (`cs`) natively resolves and bootstraps the unified bleeding-edge stack (`cs setup --jvm 26 -y`) in user space, bundling **Zulu JDK 26**, **`sbt`**, **`scalafmt`**, and **`scala-cli`** with zero system pollution and automated PATH management.

---

## 2. Functional Requirements

### 2.1 Documentation & Guide Updates
- **README.md:**
  - Update "Collaborator Quickstart & Hardware Baseline" to provide the single, idiomatic bleeding-edge command:
    `cs setup --jvm 26 -y`
  - Note verified compatibility with both **JDK 21 LTS** and **bleeding-edge OpenJDK 26** on macOS Apple Silicon.
  - Update "Building from Source" installation snippet to use portable `rm -f ... && cp ...`.
- **AGENTS.md:**
  - Update Section 4 (Build, Test, and Link Commands) and Section 5 (Coding & Architectural Invariants) to replace `cp --remove-destination` with the portable `rm -f ... && cp ...` pattern.
  - Clarify the "Atomic Binary Inode Replacement" invariant for cross-platform BSD/GNU compatibility.

### 2.2 Verification & Hygiene Invariants
- Zero test regressions on JVM and Native platforms.
- Strict compliance with markdownlint rules (`npx markdownlint-cli`).
- Strict compliance with Scalafmt (`sbt scalafmtCheckAll`).
- Traceable Conventional Commits and clean PR branch preparation.
