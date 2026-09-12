# Specification: Collaborator Readiness & Infrastructure Preparation

## 1. Overview & Context
As Context Crystal transitions toward multi-contributor collaboration (human developers and autonomous AI entities), the repository requires deterministic developer onboarding, clear cryptographic boundaries, JVM/linker memory baselines, and cross-platform continuous integration (CI).

## 2. Requirements & Invariants
1. **Hardware & Linker Baseline:** Commit `.jvmopts` (`-Xms2g -Xmx4g -XX:+UseG1GC`) at the repository root to ensure memory stability during Scala Native Thin LTO linking and multi-target test runs.
2. **Toolchain Bootstrapping:** Standardize documentation on the official Scala ecosystem toolchain (`cs setup` from Coursier) and `clang` as the sole external native dependency.
3. **Dual-Key Security Policy:** Codify the separation of local commit signing (`id_ed25519_signing`) from manual remote transport push (`id_ed25519` with `IdentityAgent none`), ensuring AI agents can commit locally but never execute autonomous network pushes.
4. **Developer Onboarding:** Create `docs/contributing.md` detailing prerequisites, cryptographic setup, pure-Scala inner dev loop, and pre-commit linting discipline.
5. **Cross-Platform CI Matrix:** Add `.github/workflows/ci.yml` supporting pull requests and main branch builds across Linux (`ubuntu-latest`) and macOS (`macos-14`, `macos-15`), running full test suites (`sbt test`) and linter checks (`scalafmt`, `scalafix`, `markdownlint`, `shellcheck`, `git diff --exit-code`).
6. **Documentation Updates:** Update `README.md` and `AGENTS.md` to reflect the new guidelines.
