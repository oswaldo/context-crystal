# Specification: Distribution, Packaging & Native CLI Installer

## 1. Overview & Motivation

Context Crystal currently requires building from source via `sbt "cliNative/nativeLink"`. To make Context Crystal instantly usable by developers and autonomous agent operators across machines without requiring a full Scala/sbt/LLVM toolchain, we need a production-grade distribution and installation pipeline.

Furthermore, Context Crystal stands fundamentally on craftsmanship: this project is not unguided, synthetic "AI slop" produced by runaway swarms. It is proudly human-in-the-loop — conceived, architected, audited, and reviewed with care, love, and rigor in partnership with computational intelligence, unlocking the true collaborative promise of human and machine cognition.

This track establishes:

1. A hardened multi-platform POSIX bootstrap installer (`curl -fsSL ... | sh`).
2. Automated GitHub and Codeberg release workflows packaging optimized Thin LTO binaries into standardized `.tar.gz` archives with cryptographic checksums (`SHA256SUMS`).
3. An official Homebrew Tap formula (`brew install oswaldo/context-crystal/ccrystal`).
4. Comprehensive platform tiering (Linux x86_64, Linux aarch64, macOS Apple Silicon aarch64, macOS Intel x86_64) with clear platform guidelines and Windows disclaimer/roadmap.
5. Explicit human-in-the-loop craftsmanship declaration in documentation and manifestos.

---

## 2. Functional Requirements

### 2.1 Universal Bootstrap Installer (`install.sh`)

- **Transport & Execution:** Invoked via `curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh`.
- **Target Location:** Defaults to `~/.local/bin/ccrystal`, adhering to XDG standards without requiring `sudo`/root privileges. Supports custom target directory via `--to <dir>` or `CCRYSTAL_INSTALL_DIR=<dir>`.
- **Version Resolution:** Supports explicit version via `--version <v>` or `CCRYSTAL_VERSION=<v>`, defaulting to latest release query via GitHub Releases API.
- **Archive Extraction & Inode Safety:** Downloads `.tar.gz` archive, validates against `SHA256SUMS`, unpacks to a temporary directory, and performs atomic inode replacement (`rm -f <target> && cp <temp> <target> && chmod +x <target>`) to prevent `Text file busy` errors if an active background MCP server is running.
- **PATH Verification:** Inspects `$PATH` non-destructively; if `~/.local/bin` is absent, prints clear shell setup snippets (`export PATH="$HOME/.local/bin:$PATH"` for bash/zsh/fish) without quietly mutating user rc files.
- **Self-Verification:** Executes newly placed binary with `--version` and `--help` to confirm dynamic linker dependencies (e.g. `libssl`, `libidn2`) resolve correctly on the host system.

### 2.2 Release Packaging & Multi-Platform CI (`.github/workflows/release.yml`)

- **Trigger:** Automated trigger on Git tags matching `v*.*.*` and manual `workflow_dispatch`.
- **Target Matrix:**
  - `linux-x86_64` (Ubuntu / Debian / Arch / Fedora compatible)
  - `linux-aarch64` (ARM64 Linux, Raspberry Pi 4/5, Graviton)
  - `macos-aarch64` (Apple Silicon M1/M2/M3/M4)
  - `macos-x86_64` (Intel Mac)
- **Compilation Flags:** ReleaseFast mode with Thin LTO (`scala.scalanative.build.Mode.releaseFast` and `scala.scalanative.build.LTO.thin`), binary stripped (`strip`).
- **Archive Structure:** Standardized `.tar.gz` archive named `ccrystal-v{version}-{platform}.tar.gz` containing:
  - `ccrystal` (executable)
  - `LICENSE`
  - `README.md`
- **Integrity Manifest:** Automated generation of `SHA256SUMS` covering all released tarballs.
- **Public Hosting Deployment:** Publishes release assets and manifests directly to GitHub Releases.

### 2.3 Homebrew Tap Distribution

- **Formula Definition:** Create `Formula/ccrystal.rb` supporting both macOS (Apple Silicon + Intel) and Linux.
- **Installation Command:** `brew install oswaldo/context-crystal/ccrystal` (or `brew tap oswaldo/context-crystal && brew install ccrystal`).
- **Bottle / Archive Strategy:** Downloads pre-compiled tarballs matching host OS/arch and validates SHA256 hashes.

### 2.4 Cross-Platform Strategy & Windows Policy

- **Tier 1 (Fully Supported & Automated):** Linux x86_64, Linux aarch64, macOS aarch64, macOS x86_64.
- **Windows (WSL / Future Roadmap):** Clear documentation indicating Context Crystal POSIX primitives and Scala Native dependencies are verified on WSL (Windows Subsystem for Linux). Native Windows (PowerShell installer, Scoop/Winget, MSVC toolchain) is scoped for a dedicated post-1.0 track.

---

## 3. Non-Functional Requirements & Security

- **Strict Cryptographic Integrity:** All downloads in `install.sh` and Homebrew formulas must verify SHA256 hashes.
- **Zero-Mutation Safety:** The installer script must never modify shell profile files (`~/.bashrc`, `~/.zshrc`) automatically; it must print copy-paste instructions if PATH adjustments are required.
- **POSIX Shell Compliance:** `install.sh` must be strictly POSIX `/bin/sh` compliant, passing `shellcheck` with zero warnings.
- **Atomic File Swaps:** Always unlink destination before copying to avoid breaking active MCP server processes running in the background.
- **Forge Privacy & Public Surface:** Codeberg is preserved exclusively as a private developer upstream and experimental staging forge; public installation scripts, packaging formulas, and documentation must exclusively target GitHub Releases.

---

## 4. Acceptance Criteria

- [ ] `install.sh` supports `--version`, `--to`, `--help`, checks SHA256 checksums, and passes `shellcheck`.
- [ ] `.github/workflows/release.yml` compiles Thin LTO release binaries for Linux (`x86_64`, `aarch64`) and macOS (`aarch64`, `x86_64`), strips them, generates `SHA256SUMS`, and packages `.tar.gz` archives.
- [ ] Automated GitHub Release publication attaches all platform tarballs and `SHA256SUMS`.
- [ ] Homebrew formula `Formula/ccrystal.rb` is tested and verified.
- [ ] `README.md` and documentation portal installation guides are updated to promote the 1-line curl installer and brew tap.
- [ ] Craftsmanship and human-in-the-loop manifesto articulated in `README.md` and `conductor/product.md`.
- [ ] Platform support matrix and Windows disclaimer are documented clearly.

---

## 5. Out of Scope for 1.0

- Native Windows standalone binary / PowerShell installer (use WSL for Windows).
- Linux distribution-specific package manager repos (`.deb` PPA, `.rpm` Copr, Snap, Flatpak, Nix Flake). These will be scheduled in subsequent distribution tracks.
