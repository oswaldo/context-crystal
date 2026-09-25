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
   - **macOS:** Included with Xcode CommandLineTools (`xcode-select --install`)

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
