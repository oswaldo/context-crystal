# AGENTS.md: Operational Guidelines for Agents & Developers

Welcome! This document sets operational rules, build commands, and workflow invariants for AI entities and human developers working in the **Context Crystal** repository.

---

## 1. Operating Philosophy

We operate on a **cybernetic, neutral entity model**:
- Treat participants as self-governing computational **Entities** rather than roleplay personas.
- Read [docs/for_ais.md](docs/for_ais.md) for entity operational guidelines.
- Read [docs/for_devs.md](docs/for_devs.md) for developer cognitive optimization guidelines.
- System definitions and architectural tenets are in [conductor/product.md](conductor/product.md).

---

## 2. Git Worktree Policy (Parallel Tracks & Clean Main)

### 🌲 Strict Worktree Isolation
- **The primary repository clone must always reflect `origin/main` in a clean, buildable state.**
- **Never develop directly on `main` or switch working branches inside the primary clone.**
- When starting or executing a Conductor track, create or attach to a dedicated Git worktree:
  ```bash
  # Example: Creating a new worktree for a track
  git worktree add -b track/<track-name> ../ccrystal-worktrees/<track-name> main
  ```
- All feature implementations, temporary files, build caches, and test runs occur within the worktree.
- We prefer to keep a linear history. Once a track passes review, rebase your branch on `main` and perform a fast-forward merge. Avoid merge commits.
- Clean up the worktree:
  ```bash
  git worktree remove ../ccrystal-worktrees/<track-name>
  ```

---

## 3. Conductor Spec-Driven Development Workflow

All new features and non-trivial fixes follow Conductor:
1. **Track Registry:** Consult [conductor/tracks.md](conductor/tracks.md) and [conductor/next-steps.md](conductor/next-steps.md).
2. **Spec & Plan:** Define tasks and phases in `conductor/tracks/<track-name>/{spec.md, plan.md}`.
3. **Red-Green TDD:** For every planned task:
   - Write failing unit/integration tests first.
   - Implement the minimal code required to pass tests.
   - Commit atomically with Conventional Commits (`feat:`, `test:`, `fix:`, `chore(conductor):`).
4. **Review & Verification:** Run the full test suite across Native, JVM, and JS targets before completing phase checkpoints.

---

## 4. Build, Test, and Link Commands

All builds and tests are managed with `sbt`:

```bash
# Run entire test suite across all platforms (Native, JVM, JS)
sbt test

# Fast iteration on JVM only (avoids native LLVM linking time)
sbt "coreJVM/test; cliJVM/test"

# Compile and link the native CLI binary
sbt "cliNative/nativeLink"
# Binary output: ./cli/native/target/scala-3.3.4/ccrystal-cli

# Run formatting and scalafix fix round before committing
sbt "scalafmtAll; scalafixAll"

# Verify formatting and linter compliance
sbt "scalafmtCheckAll"
```

---

## 5. Coding & Architectural Invariants

- **Zero-Reflection / Pure Functional:** Use immutable case classes, enums, ADTs, and pure functions.
- **Zero-Warning Policy:** Leave no warning message behind unless absolutely unavoidable. Address all compiler warnings, deprecations, unused imports/symbols, and linter warnings prior to committing.
- **Mandatory Pre-Commit Linting Round:** Always execute `sbt "scalafmtAll; scalafixAll"` followed by checking clean git diffs and test passes before any commit.
- **Strict Codecs:** Ensure JSON serialization round-trips adhere strictly to `spec/v1/context-crystal.json`.
- **Transient Cleanup:** Clean or promote all transient resource leases before marking tasks complete.
- **Commit Signing:** All commits must be cryptographically signed (e.g., using SSH or GPG keys).
- **Conventional Commits:** Follow standard conventions:
  - `feat(core): ...`, `feat(cli): ...`, `feat(spec): ...`
  - `test(core): ...`, `test(cli): ...`
  - `chore(conductor): ...`, `docs(conductor): ...`
