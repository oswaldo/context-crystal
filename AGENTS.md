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
5. **Cave Hygiene & Retrospective Gate:** At the end of every track:
   - Perform cave hygiene triage (`ccrystal list` or MCP `triage_cave`). Prompt the operator to confirm purging completed/concluded crystals to prevent cave bloat.
   - Run the Operational Learning Gate: Explicitly ask whether any friction, tool patterns, or build learnings should be codified into `AGENTS.md` or `skills/context-crystal/SKILL.md`.
6. **Clean Merge & Worktree Teardown:** Fast-forward merge into `main`, update the local release installation (following the optimized release build instructions in [README.md](README.md#prerequisites--installation)), and remove the worktree.

---

## 4. Build, Test, and Link Commands

All builds and tests are managed with `sbt`. Always check [README.md](README.md#prerequisites--installation) for primary environment prerequisites, installation instructions, and optimized release compilation flags to avoid redundant deviations:

```bash
# Run entire test suite across all platforms (Native, JVM, JS)
sbt test

# Fast iteration on JVM only (avoids native LLVM linking time)
sbt "coreJVM/test; cliJVM/test"

# Compile and link the native CLI binary (Development mode, ~10s)
sbt "cliNative/nativeLink"
# Binary output: ./cli/native/target/scala-3.9.0/ccrystal-cli

# Compile and link optimized release binary with Thin LTO (Release mode, peak performance)
sbt 'set cli.native / nativeConfig ~= { _.withMode(scala.scalanative.build.Mode.releaseFast).withLTO(scala.scalanative.build.LTO.thin) }; cliNative/nativeLink'

# Install native binary into local user PATH (~/.local/bin)
mkdir -p ~/.local/bin && cp --remove-destination ./cli/native/target/scala-3.9.0/ccrystal-cli ~/.local/bin/ccrystal && chmod +x ~/.local/bin/ccrystal && strip ~/.local/bin/ccrystal

# Run formatting and scalafix fix round before committing (Scala)
sbt "scalafmtAll; scalafixAll"

# Verify formatting and linter compliance (Scala)
sbt "scalafmtCheckAll"

# Run formatting and fix round for Markdown documentation
npx markdownlint-cli --fix "README.md" "docs/*.md" "skills/**/SKILL.md"

# Verify Markdown formatting and linter compliance
npx markdownlint-cli "README.md" "docs/*.md" "skills/**/SKILL.md"

# Verify shell scripts (ShellCheck)
npx shellcheck skills/**/*.sh
```

---

## 5. Coding & Architectural Invariants

- **Zero-Reflection / Pure Functional:** Use immutable case classes, enums, ADTs, and pure functions.
- **Zero-Warning Policy:** Leave no warning message behind unless absolutely unavoidable. Address all compiler warnings, deprecations, unused imports/symbols, and linter warnings prior to committing.
- **Mandatory Pre-Commit Linting Round:** Always execute relevant linters before committing:
  - For Scala changes: `sbt "scalafmtAll; scalafixAll"` followed by `sbt "scalafmtCheckAll"`
  - For Markdown changes: `npx markdownlint-cli --fix ...` followed by `npx markdownlint-cli ...`
  - For Shell script changes: `npx shellcheck skills/**/*.sh`
  Always verify clean git diffs and test passes before any commit.
- **Strict Codecs:** Ensure JSON serialization round-trips adhere strictly to `spec/v1/context-crystal.json`.
- **Transient Cleanup:** Clean or promote all transient resource leases before marking tasks complete.
- **Commit Signing:** All commits must be cryptographically signed (e.g., using SSH or GPG keys).
- **MUnit Strict Equality Clues:** Under `-language:strictEquality`, avoid bare `assert(cond)` which can trigger ambiguous overload errors in MUnit; prefer `assertEquals(actual, expected)` or provide explicit clue strings: `assert(cond, "clue")`.
- **Atomic Binary Inode Replacement:** Always use `cp --remove-destination` (or `install`) when updating installed native binaries in `~/.local/bin/ccrystal`. Ensure the binary was compiled using the optimized release configuration documented in [README.md](README.md#prerequisites--installation) (`Mode.releaseFast` with Thin LTO). This unlinks the inode and prevents `Text file busy` errors if a background process (like the active MCP server engine) is currently executing the binary.
- **MCP Tool First / Batch Preference:** Autonomous agents interacting with Context Crystal should prioritize native MCP tools (`crystal_batch`, `crystal_init`, etc.) over invoking CLI commands via subshells. For multi-step context transitions, compose a single `crystal_batch` recipe to execute atomically with minimal turn roundtrips.
- **Proactive Crystal Anchoring & Dogfooding:** When beginning any non-trivial or multi-step track or task, the entity MUST first check for existing crystals (`ccrystal list` or MCP `list_resources` / `ccrystal://*`). If a matching crystal exists, attach to it and hydrate state (`ccrystal hydrate <id>` or MCP `read_resource`); otherwise, initialize a dedicated crystal (`crystal_init` or `ccrystal init`). If developing in an isolated worktree, register a transient resource lease (`git_worktree`). Never conduct multi-step development in the repository without active Context Crystal tracking.
- **Conventional Commits:** Follow standard conventions:
  - `feat(core): ...`, `feat(cli): ...`, `feat(spec): ...`
  - `test(core): ...`, `test(cli): ...`
  - `chore(conductor): ...`, `docs(conductor): ...`
- **Synthetic Example & Fixture Hygiene:** To prevent confusion, unintentional PII leaks, or perceived association with real-world organizations, always use standard, reserved neutral conventions in documentation, fixtures, and tests:
  - Domains & URIs: RFC 2606 reserved domains (`example.com`, `example.org`, `example.net`).
  - Organizations: Standard fictitious names (`Acme Corp`, `Example Industries`).
  - Personas / Individual Names: Standard neutral cultural placeholders (e.g., *Max Mustermann* / *Erika Mustermann* in German contexts; *Fulano de Tal* / *Beltrano da Silva* in Brazilian contexts; *John Doe* / *Jane Roe* in Anglo contexts; *Jean Dupont* / *Marie Durand* in French contexts).
  - Addresses & Coordinates: Standard fictitious civic references (e.g., *Musterstraße 1, Berlin*; *Rua das Flores 123, São Paulo*). Never use real corporate, private, or identifiable residential addresses.
