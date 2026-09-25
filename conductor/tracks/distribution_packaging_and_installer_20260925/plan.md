# Implementation Plan: Distribution, Packaging & Native CLI Installer

## Phase 1: Bootstrap Installer Hardening (`install.sh`) [checkpoint: 0a188be]

- [x] Task: Automated test harness for `install.sh` (51903e7)
  - [x] Write integration test script (`test/install_test.sh`) asserting POSIX syntax, argument parsing (`--to`, `--version`, `--help`), SHA256 checksum validation, and atomic inode replacement
- [x] Task: Refactor & harden `install.sh` (0095d4e)
  - [x] Support downloading and unpacking compressed `.tar.gz` release archives
  - [x] Implement cryptographic checksum verification against `SHA256SUMS`
  - [x] Add robust GitHub Releases API query with fallback for tag/version resolution
  - [x] Support `--to <dir>` / `CCRYSTAL_INSTALL_DIR` custom target directory override and non-destructive PATH guidance
- [x] Task: Lint and verify installer script (0095d4e)
  - [x] Run `npx shellcheck install.sh test/install_test.sh` with zero warnings
  - [x] Execute local test harness verifying all positive and failure branches
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md) (0a188be)

---

## Phase 2: Multi-Platform Release CI Workflow (`.github/workflows/release.yml`) [checkpoint: 63f6202]

- [x] Task: Define GitHub Actions release workflow matrix (3bccd22)
  - [x] Configure matrix runners for `linux-x86_64`, `linux-aarch64` (via buildx/QEMU), `macos-aarch64` (macOS 14), and `macos-x86_64` (macOS 15)
  - [x] Configure sbt Thin LTO compilation (`Mode.releaseFast`, `LTO.thin`, binary stripping)
- [x] Task: Archive packaging & integrity manifest generation (3bccd22)
  - [x] Bundle binaries with `LICENSE` and `README.md` into `ccrystal-v{version}-{platform}.tar.gz`
  - [x] Generate consolidated `SHA256SUMS` manifest across all matrix builds
- [x] Task: Publication & release workflow verification (3bccd22)
  - [x] Configure automated GitHub Release creation with release notes, tarballs, and checksums
  - [x] Author local dry-run packaging script to verify archive structure and checksum calculation
- [x] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md) (63f6202)

---

## Phase 3: Homebrew Tap Distribution (`Formula/ccrystal.rb`) [checkpoint: 9a8e4d2]

- [x] Task: Create Homebrew formula definition (7f649df)
  - [x] Author `Formula/ccrystal.rb` supporting multi-platform binary bottle stanzas (macOS aarch64, macOS x86_64, Linux aarch64, Linux x86_64)
  - [x] Add post-install PATH and self-test verification stanzas (`ccrystal --help`)
- [x] Task: Formula validation & audit (7f649df)
  - [x] Validate Ruby syntax and Homebrew formula lint rules
- [x] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md) (9a8e4d2)

---

## Phase 4: Documentation, Craftsmanship Manifesto & Platform Matrix

- [x] Task: Author the "Human in the Loop / Craftsmanship & AI Partnership" declaration (7b027c0)
  - [x] Add a dedicated section in `README.md` and `conductor/product.md` articulating that Context Crystal is not unguided "AI slop", but proudly human-in-the-loop — engineered, audited, and stewarded with care and love in deliberate partnership with computational intelligence
- [x] Task: Update installation and platform matrix documentation (7b027c0)
  - [x] Update `README.md` and documentation portal with 1-line curl installer, Homebrew tap instructions, and `--to` options
  - [x] Document platform tier support (Linux & macOS fully supported; Windows disclaimer recommending WSL until native MSVC runner validation)
- [x] Task: Markdown linting & formatting compliance (7b027c0)
  - [x] Run `npx markdownlint-cli --fix "README.md" "docs/*.md"` and verify clean diffs
- [ ] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md)
