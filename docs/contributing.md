# Contributing to Context Crystal

Welcome! Context Crystal is designed for both human developers and autonomous AI entities collaborating within a safe, reproducible, and verifiable environment.

---

## 1. Toolchain & Prerequisites

We rely on standard Scala ecosystem tooling:

1. **Install Coursier (`cs`):**
   Follow the standard setup at [get-coursier.io](https://get-coursier.io/):

   ```bash
   # Bootstraps Java (JDK 21 LTS or bleeding-edge JDK 26), sbt, and core Scala CLI tools
   cs setup --jvm 26 -y
   ```

2. **Install Clang / LLVM (Required for Scala Native):**
   - **Ubuntu / Debian:** `sudo apt install clang build-essential`
   - **Fedora / RHEL:** `sudo dnf install clang gcc-c++`
   - **Arch Linux:** `sudo pacman -S clang base-devel`
   - **macOS:** Included with Xcode CommandLineTools (`xcode-select --install`). Verified on macOS Sequoia (15) and macOS 26 Apple Silicon (`arm64`).

3. **Verify Installation:**
   Launch `sbt` and run the JVM test suite:

   ```bash
   sbt "coreJVM/test; cliJVM/test"
   ```

---

## 2. Cryptographic Separation (Dual-Key Security Policy)

To permit autonomous AI tools (such as Google Conductor or Antigravity) to write, test, and commit code locally without risking unauthorized remote pushes, this project adheres to a **Dual-Key Model**:

### A. Local Offline Signing Key (`id_ed25519_signing`)

- **Role:** Dedicated strictly to cryptographically signing Git commits and tags (`commit.gpgsign = true`).
- **Protection:** Kept unencrypted locally so local agents can iterate, branch, and commit seamlessly.
- **Setup:**

  ```bash
  ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_signing -C "your_email@example.com" -N ""
  git config user.signingkey ~/.ssh/id_ed25519_signing.pub
  git config gpg.format ssh
  git config commit.gpgsign true
  ```

  Upload `~/.ssh/id_ed25519_signing.pub` to GitHub / Codeberg as a **Signing Key** to receive verified badges.

### B. Remote Push Key (`id_ed25519`)

- **Role:** Dedicated strictly to network authentication (`git push`).
- **Protection:** Passphrase-protected and excluded from persistent agent key caching via `IdentityAgent none`.
- **Enforcement in `~/.ssh/config`:**

  ```ssh-config
  Host github.com
      User git
      IdentityFile ~/.ssh/id_ed25519
      IdentitiesOnly yes
      IdentityAgent none
  ```

- **Rule:** AI agents must **never** execute `git push` autonomously. Remote transport pushes must be initiated manually by the human developer.

### C. Branch Protection & Peer-Reviewed Pull Requests

Direct pushes and merges to `main` are strictly blocked across upstream forges (Codeberg and GitHub):

- **PR-Only Delivery:** All changes must be pushed as branch commits (`track/<track-name>` or feature branches) and submitted via Pull Requests.
- **Mandatory Requirements for Merge:**
  1. An approved review by a second pair of human eyes (`required_approving_review_count = 1`).
  2. A fully green CI run across Linux, macOS, and lint matrices.
  3. Linear history (rebase or fast-forward merge; no merge commits).
  4. Cryptographically signed commits (`commit.gpgsign = true`).

---

## 3. Inner Dev Loop & Pre-Push Verification

All daily coding and testing stays 100% inside standard `sbt`:

- **Fast JVM iteration:**

  ```bash
  sbt "coreJVM/test; cliJVM/test"
  ```

- **Full cross-target test suite:**

  ```bash
  sbt test
  ```

- **Pre-Commit / Pre-Push Linting Round:**
  To guarantee that what you review and sign matches exactly what runs in CI, always format and lint before committing:

  ```bash
  sbt "scalafmtAll; scalafixAll"
  sbt "scalafmtCheckAll"
  ```

  *(CI will fail pull requests if unlinted or unformatted changes are detected).*

---

## 4. Documentation Portal & Web Showcase (`gh-pages`)

The documentation showcase and interactive portal are decoupled from `main` and maintained on the `gh-pages` branch (typically checked out as a sibling worktree at `../context-crystal-gh-pages`).

### Local Preview

1. **Prerequisites:** [Scala CLI](https://scala-cli.virtuslab.org/) (`cs install scala-cli` or via standard Coursier setup).
2. **Build static bundle (Scala.js):**

   ```bash
   cd ../context-crystal-gh-pages
   scala-cli --power package site --js-mode release -o main.js --force
   ```

3. **Run local preview server:**

   ```bash
   scala-cli run preview
   ```

   Then open `http://localhost:8080` in your browser (or use `python3 -m http.server 8080`).

### Publishing Changes

1. Verify diff and commit changes within the `../context-crystal-gh-pages` worktree.
2. Push to the GitHub remote (`github`) using your transport key:

   ```bash
   git -C ../context-crystal-gh-pages push github gh-pages
   ```

3. The live portal is served at **`https://oswaldo.github.io/context-crystal/`**.

---

## 5. Release Checklist & Distribution Packaging Hygiene

When cutting a new release (e.g., tagging `vX.Y.Z` or triggering `.github/workflows/release.yml`):

1. **Verify Release Manifests:** Confirm that all multi-platform `.tar.gz` archives and `SHA256SUMS` have been built and uploaded to GitHub Releases.
2. **Verify Maven Central Publication (Sonatype Central):** Confirm that the `publish-maven-central` workflow job completed and that `io.github.oswaldo:ccrystal-cli_3` and `io.github.oswaldo:ccrystal-core_3` are staged/published to Maven Central via `sbt ci-release`.
3. **Synchronize Homebrew Formula (`Formula/ccrystal.rb`):**
   - Update `version` to match the exact release tag.
   - Update each platform stanza (`on_macos`, `on_linux`) with the cryptographic checksums from `SHA256SUMS`.
   - Ensure the formula specifies the correct license (`MIT`).
4. **Synchronize Homebrew Tap:**
   - Ensure the public tap repository (`github.com/oswaldo/homebrew-context-crystal`) is up to date with `Formula/ccrystal.rb`.
   - Push the updated formula to the tap repository.
5. **Synchronize Coursier Channel (`apps.json`):**
   - Update version tags in `apps.json` to point to the new release tag `vX.Y.Z`.
   - Validate with `cs install --channel file://$(pwd)/apps.json ccrystal`.
6. **Synchronize Web Portal (`context-crystal-gh-pages`):**
   - Update quickstart version references in `site/TabQuickstart.scala` and `llms.txt`.
   - Recompile the static bundle: `scala-cli --power package site --js-mode release -o main.js --force`.
   - Commit and push to `gh-pages`.
7. **Collaborative Release Notes & Human Approval Gate:**
   - Draft comprehensive release notes highlighting architectural progress, user-facing capabilities, and upgrade steps.
   - Present to the human steersman/operator for explicit review and cryptographic push sign-off.
8. **Clean-Room Smoke Verification:**
   - Execute an isolated verification of official installation methods on target platforms prior to public announcement:

   ```bash
   # 1. Universal POSIX bootstrap
   curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh
   ~/.local/bin/ccrystal --help

   # 2. Homebrew
   brew install oswaldo/context-crystal/ccrystal
   ccrystal --help

   # 3. Coursier (cs install)
   cs install --channel gh:oswaldo/context-crystal:main ccrystal
   ccrystal --help

   # 4. Coursier Launch (Maven Central JVM artifact)
   cs launch --contrib ccrystal -- --help
   ```
