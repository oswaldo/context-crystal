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
- We prefer to keep a linear history. Once a track passes review, rebase your branch on `main`. Because direct pushes to `main` are blocked by branch protection across upstream forges (Codeberg and GitHub), push the track branch to remote (`git push origin track/<track-name>`) and open a Pull Request.
- Every PR requires an approving review from a second pair of human eyes and green CI. Once merged on the forge via fast-forward/rebase, pull the updated `main` into the primary clone (`git pull --ff-only`).
- Clean up the worktree only after the PR is merged and local `main` is updated:

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
5. **Cave Hygiene, Documentation & Retrospective Gate:** At the end of every track:
   - Perform cave hygiene triage (`ccrystal triage` or MCP `crystal_triage`). Recommend melting active child crystals and moving concluded crystals to cold storage (`ccrystal archive` or MCP `crystal_archive`) rather than destructive deletion to prevent cave bloat while preserving lineage.
   - Run the Clean Archival & In-Flight Dependency Audit: Before moving an active crystal to cold storage, explicitly audit whether the session spawned external asynchronous commitments (upstream pull requests awaiting review/merge, third-party directory listings awaiting crawl/activation, verification tokens) or unregistered workspace resources (temporary git worktrees, clones, mock services). If external commitments remain in-flight, do NOT archive prematurely: keep the crystal in active status, register explicit monitoring tasks (`task-N`), and register transient resource leases (`git_worktree`) to defend in-progress workspace resources against premature teardown and eliminate session amnesia.
   - Run the Documentation & Portal Synchronization Gate: Assess whether any changes impact `README.md`, `skills/context-crystal/SKILL.md`, `docs/mcp/instructions.md`, or the sibling documentation portal (`../context-crystal-gh-pages`). Verify that any changes affecting MCP server transports, CLI options, or release packaging conventions are synchronized with root registry manifests (`smithery.yaml`, `glama.json`), package manager formulas (`Formula/ccrystal.rb`), and application descriptors (`apps.json`, `docs/distribution/coursier-ccrystal.json`). When updating the documentation portal, verify version badges in `Header.scala`, tool counts in `TabMcp.scala`, `/llms.txt`, and enforce cache busting on compiled assets (`main.js?v=<version>`). Universal collaborator guidance and reproducible patterns should be committed, while personal machine configurations, local directory layouts, or private credentials must strictly remain uncommitted.
   - Run the Operational Learning Gate: Explicitly ask whether any friction, tool patterns, or build learnings should be codified into `AGENTS.md` or `skills/context-crystal/SKILL.md`.

6. **PR Review, Push Gate & Worktree Teardown:** Direct pushes and local merges to `main` are blocked on both Codeberg and GitHub. Push the track branch to the remote forge with your transport key (`git push origin track/<track-name>`), open a Pull Request, and obtain an approving review from a second collaborator after a green CI matrix run. Once merged on the forge via fast-forward/rebase, fast-forward local `main` (`git pull --ff-only`), update the local release installation (following the optimized release build instructions in [README.md](README.md#prerequisites--installation)), and tear down the track worktree.

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

# Install native binary into local user PATH (~/.local/bin, portable across macOS BSD and Linux GNU)
mkdir -p ~/.local/bin && rm -f ~/.local/bin/ccrystal && cp ./cli/native/target/scala-3.9.0/ccrystal-cli ~/.local/bin/ccrystal && chmod +x ~/.local/bin/ccrystal && strip ~/.local/bin/ccrystal

# Run formatting and scalafix fix round before committing (Scala)
sbt "scalafmtAll; scalafixAll"

# Verify formatting and linter compliance (Scala)
sbt "scalafmtCheckAll"

# Run formatting and fix round for Markdown documentation
npx markdownlint-cli --fix "README.md" "AGENTS.md" "docs/*.md" "skills/**/SKILL.md"

# Verify Markdown formatting and linter compliance
npx markdownlint-cli "README.md" "AGENTS.md" "docs/*.md" "skills/**/SKILL.md"

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
- **Dual-Credential Strategy & Push Gate (Cryptographic Role Separation):** We recommend a two-key separation of duties architecture distinguishing local provenance from remote publication:
  - **Commit Signing Key (`user.signingkey`):** Dedicated to cryptographically verifying authorship and integrity of commits (via SSH or GPG signing). AI entities are permitted to create signed commits locally within active worktrees, enabling fast iteration.
  - **Push / Transport Key (SSH Remote Authentication):** Dedicated exclusively to remote repository transport authentication (`git push`). Kept strictly locked (e.g., passphrase-protected or gated behind a hardware security key like FIDO2/YubiKey) and held by the human developer/operator.
  - **Strict Operator Push Confirmation:** Even if an automated workflow, script, Conductor plan, or skill prescribes pushing to remote at any point, entities must **never** execute `git push` autonomously. Instead, the entity MUST pause and confirm with the operator:
    1. Confirm the operator is satisfied with the progress.
    2. Confirm the operator has reviewed the diff and changes.
    3. Confirm relevant local tests and verification steps have passed.
    4. Instruct the operator to perform the push themselves using their locked transport key.
  - **Worktree Teardown Gating:** Worktrees must not be removed prematurely; prune or remove the track worktree only after the user confirms or after the pushed state is verified on the remote.
  - **Safety Rationale:** Defense-in-depth ("move fast, but safely") ensuring that even under rogue or hallucinated agent execution, remote repositories are never mutated without total developer awareness, verification, and deliberate manual confirmation.
- **Protected Main & Peer-Reviewed PR Invariant:** Direct pushes and local merges to `main` are strictly blocked across upstream forges (Codeberg and GitHub). All contributions must originate from isolated track worktrees, be pushed as feature/track branches (`track/<track-name>`), and merge into `main` exclusively through Pull Requests that satisfy:
  - At least one approved review by a second pair of human eyes (e.g., peer review between collaborators).
  - 100% green CI run across all platform test matrices (Linux, macOS) and linters.
  - Linear history (rebase or fast-forward merge; zero merge commits).
  - Cryptographically signed commits (`user.signingkey`).
- **MUnit Strict Equality Clues:** Under `-language:strictEquality`, avoid bare `assert(cond)` which can trigger ambiguous overload errors in MUnit; prefer `assertEquals(actual, expected)` or provide explicit clue strings: `assert(cond, "clue")`.
- **Atomic Binary Inode Replacement:** Always use `rm -f ~/.local/bin/ccrystal && cp ...` (or `install`) when updating installed native binaries in `~/.local/bin/ccrystal`. Avoid GNU-only flags like `cp --remove-destination` which fail on macOS BSD coreutils. Pre-unlinking the destination inode prevents `Text file busy` errors if a background process (like the active MCP server engine) is currently executing the binary. Ensure the binary was compiled using the optimized release configuration documented in [README.md](README.md#prerequisites--installation) (`Mode.releaseFast` with Thin LTO).
- **MCP Tool First / Batch Preference:** Autonomous agents interacting with Context Crystal should prioritize native MCP tools (`crystal_batch`, `crystal_init`, etc.) over invoking CLI commands via subshells. For multi-step context transitions, compose a single `crystal_batch` recipe to execute atomically with minimal turn roundtrips. When determining CLI options or discovering newly introduced subcommands/flags that may not yet be represented in an MCP client's static schema, `ccrystal --help` and `ccrystal <subcommand> --help` serve as the guaranteed zero-drift source of truth (statically compiled from Decline ADTs).
- **Proactive Crystal Anchoring & Dogfooding:** When beginning any non-trivial or multi-step track or task, the entity MUST first check for existing crystals (`ccrystal list` or MCP `list_resources` / `ccrystal://*`). If a matching crystal exists, attach to it and hydrate state (`ccrystal hydrate <id>` or MCP `read_resource`); otherwise, initialize a dedicated crystal (`crystal_init` or `ccrystal init`). If developing in an isolated worktree, register a transient resource lease (`git_worktree`). Never conduct multi-step development in the repository without active Context Crystal tracking.
- **Compaction Re-Anchoring Invariant (Anti-Amnesia):** When a context window compaction occurs, a session restarts, or an entity resumes from a truncated transcript/summary, the entity MUST NEVER rely solely on the conversational summary. Immediately re-synchronize with ground truth by listing cave crystals (`ccrystal list` or MCP `crystal_list`). If an active crystal is in-flight, hydrate its living context beam (`ccrystal hydrate <id>` or MCP `crystal_hydrate`) to restore active tasks, transient resource leases, and causal state into working memory.
- **Scope Drift & Topic Transition Heuristic (The Three-Tier Rule):** When user requests or session discourse shift focus away from an active crystal's goal nucleus, evaluate the shift against three architectural tiers:
  1. *Sub-inquiry or Architectural Branch:* If the work is an offshoot or exploratory spike of the active goal, cleave and fork a sub-DAG slice or child dendrite (`ccrystal slice <id> --fork-to <child-id>` or MCP `crystal_slice_fork`).
  2. *Distinct Non-Trivial Goal:* If the prior goal is concluded or superseded and the new focus is a substantial multi-step task, cleanly conclude the prior crystal (`ccrystal conclude` or MCP `crystal_goal_transition`), resolve all transient leases, and initialize a new dedicated crystal (`crystal_init` or `ccrystal init`).
  3. *Ephemeral / Informational Q&A:* If the request is a brief factual inquiry, architectural explanation, or single-turn lookup (e.g., "what does OCC stand for?"), answer directly and statelessly without mutating crystals or creating workspace cave bloat.
- **Conventional Commits:** Follow standard conventions:
  - `feat(core): ...`, `feat(cli): ...`, `feat(spec): ...`
  - `test(core): ...`, `test(cli): ...`
  - `chore(conductor): ...`, `docs(conductor): ...`
- **Synthetic Example & Fixture Hygiene:** To prevent confusion, unintentional PII leaks, or perceived association with real-world organizations, always use standard, reserved neutral conventions in documentation, fixtures, and tests:
  - Domains & URIs: RFC 2606 reserved domains (`example.com`, `example.org`, `example.net`).
  - Organizations: Standard fictitious names (`Acme Corp`, `Example Industries`).
  - Personas / Individual Names: Standard neutral cultural placeholders (e.g., *Max Mustermann* / *Erika Mustermann* in German contexts; *Fulano de Tal* / *Beltrano da Silva* in Brazilian contexts; *John Doe* / *Jane Roe* in Anglo contexts; *Jean Dupont* / *Marie Durand* in French contexts).
  - Addresses & Coordinates: Standard fictitious civic references (e.g., *Musterstraße 1, Berlin*; *Rua das Flores 123, São Paulo*). Never use real corporate, private, or identifiable residential addresses.
- **Forward & Backward Compatibility Invariant:** When designing or developing new features, schema updates, CLI subcommands, or codecs, always strive for bidirectional compatibility. Ensure existing crystals, legacy schemas, and older CLI invocations continue to parse and execute predictably, while new fields, subcommands, or formats degrade gracefully without breaking older tools or downstream agents.
- **Cold Storage Over Deletion:** Concluded or completed crystals with architectural or historical significance should be archived to cold storage (`ccrystal archive <id>` or MCP `crystal_archive`) rather than permanently deleted. Reserve destructive deletion (`ccrystal delete <id>` or MCP `crystal_delete`) for ephemeral test runs, scratch crystals, or corrupted state.
- **Self-Describing CLI Enums & Pragmatic Help Invariant:** All CLI enum arguments (e.g., node kinds, resource types, disposal policies, capture fidelities, goal statuses, artifact roles/substrates) must implement forgiving normalization (supporting `kebab-case`, `snake_case`, and `PascalCase` interchangeably) and be self-describing. When an enum option is displayed in `--help`, its valid choices must be explicitly enumerated in the description string (e.g., `(human_prompt, agent_reasoning, tool_execution, checkpoint, branch, resolution)`). When argument parsing fails due to an invalid value, the error message emitted must explicitly state the invalid value and list all permissible alternatives (`s"Invalid <name>: '$s' (valid: ${options.mkString(", ")})"`). This eliminates hallucination loops and trial-and-error guesswork for both human operators and autonomous agents.
- **Secret Sanitization Invariant (Pointers Over Values):** Never record raw secrets, credentials, API keys, passwords, or private cryptographic tokens into `.ccrystals/` DAG nodes, envelopes, or artifacts. When capturing tool executions or terminal output, redact sensitive headers (e.g., `Authorization: Bearer <token>`) and credentials. Crystals may point to secrets (e.g., `env:KEY_NAME` or secret manager references) and deliberate on security architecture, but must remain strictly zero-secret artifacts. Entities must NEVER execute commands that dump, echo, print, or grep environment variables (`env`, `printenv`, `export`), process tables, or credential store files that could expose raw secrets, API tokens, passwords, or keys into terminal output or conversation logs. When external tools (such as `gh`, `aws`, or `curl`) report authentication failures or missing credentials, entities must never attempt to discover, dump, or extract tokens from the shell environment; instead, pause and instruct the human operator to authenticate or provide the necessary configuration directly. We strongly recommend configuring automated secret scanners (such as Betterleaks or Gitleaks) on context repositories to intercept accidental leaks before publication.
- **Forge Privacy & Public Surface Invariant:** Public installation scripts (`install.sh`), package manager formulas (Homebrew Tap), and documentation must exclusively target official GitHub Releases. Codeberg is preserved exclusively as a private upstream developer forge and experimental staging ground; Codeberg URLs, remotes, or unannounced staging branches must never be exposed or referenced in public distribution artifacts.
- **Clean POSIX Signal Trap Invariant (SC2329 Avoidance):** When implementing cleanup routines in POSIX shell scripts (`install.sh`, test harnesses), prefer inline command execution (`trap 'rm -rf "$TEMP_DIR"' EXIT INT TERM`) over standalone callback functions that trigger static analysis false positives (`SC2329: function never invoked`). Never disable linter rules via `# shellcheck disable` when a clean, portable syntax pattern exists.
- **Proud Human-in-the-Loop Craftsmanship (Not AI Slop):** Context Crystal strictly rejects unsupervised, runaway agent swarms and synthetic slop. All architectures, state transitions, and codebase modifications are engineered, reviewed, and audited with human care, love, and rigor in deliberate partnership with computational intelligence. Autonomous entities must proactively facilitate human verification at phase checkpoints and push gates rather than attempting unsupervisioned completion.
- **Collaborative Release Notes & Prior Human Approval Gate:** Before creating or pushing any release tag (`v*.*.*`), the entity MUST draft comprehensive release notes in an artifact or markdown document, present them to the human steersman / operator, and receive explicit approval. Release notes must focus strictly on what the end user (human developer or AI entity using the software) would be genuinely interested in: user-facing capabilities, API additions, installation methods, and tangible bug fixes, rather than raw commit dumps. Repo-internal meta-improvements (such as internal governance rules, guidelines codified into `AGENTS.md`, agent prompt adjustments, or developer-internal workflows) are not external deliverables recognized by the user and must be strictly excluded from public release notes.
- **Thematic Release Naming & Reflection (Mineralogy, Crystallography, Optics & Mining):** When preparing any release milestone, the entity and developer take time to reflect on the core technical essence and architectural character of the release, selecting an evocative codename drawn from mineralogy, crystallography, optical physics, or mining geology (e.g., *Birefringence*, *Pleochroism*, *Twinning*, *Striation*, *Luminescence*, *Habit*, *Inclusion*, *Drusy*, *Adularescence*, *Euhedral*). The selected codename titles the release notes, connecting the software's structural evolution with the timeless physical elegance and precision of crystal systems.
- **Platform Linker Invariants (macOS vs. Linux LTO):** Due to an upstream assertion crash in Apple Clang's linker (`ld-prime`) on Thin LTO alias atoms, release compilation on macOS targets (`macos-aarch64`, `macos-x86_64`) must use `LTO.none` with `Mode.releaseFast` (providing full `-O3` LLVM optimization without linker crashes). Linux targets must continue using `LTO.thin` for maximum dead-code elimination.
- **Pre-Push Quality & Anti-Failure Verification (Zero Push-Fail Cycles):** Never push to remote or tag a release without first running the exact full verification sequence enforced by CI:

  ```bash
  sbt "scalafmtCheckAll; scalafixAll --check"
  npx markdownlint-cli "README.md" "AGENTS.md" "docs/*.md" "skills/**/SKILL.md"
  npx shellcheck install.sh && find skills -name "*.sh" -exec npx shellcheck {} +
  ```

  Every push should be an assured green build.
- **Release Verification & Multi-Channel Distribution Invariant:** All automated or manual release workflows that cut new release tags must synchronize all public distribution channels and documentation before publication or announcement:
  - **Release Manifests & Assets:** Official `.tar.gz` bundles and cryptographic `SHA256SUMS` manifest must be generated and published on GitHub Releases.
  - **Maven Central Artifact Publication (Sonatype Central):** The JVM targets (`io.github.oswaldo:ccrystal-cli_3` and `io.github.oswaldo:ccrystal-core_3`) must be signed and published to Maven Central via `sbt ci-release` during release workflow execution, ensuring upstream distributions (e.g. `coursier/apps` and `cs launch`) resolve cleanly.
  - **Homebrew Formula & Tap:** The official formula (`Formula/ccrystal.rb`) must be updated with the exact release version, MIT license, and cryptographic checksums; downstream distribution tap `oswaldo/homebrew-context-crystal` must be synchronized.
  - **Coursier Application Channel:** The in-repo Coursier channel descriptor (`apps.json`) must be updated with the matching release tag version.
  - **Documentation & Web Showcase Portal:** Update installation quickstart snippets in `README.md`, `llms.txt`, `Header.scala` brand badges, and `TabMcp.scala` tool counts in `../context-crystal-gh-pages`. Enforce cache busting on compiled assets in `index.html` (`main.js?v=<version>`), recompile `main.js`, and commit to `gh-pages`.
  - **Collaborative Release Notes & Human Gate:** Entities must draft comprehensive release notes highlighting user-facing capabilities, API additions, installation methods, and tangible bug fixes (omitting internal repo governance and agent prompt engineering), present them to the human operator, and obtain explicit sign-off before tagging or pushing.
  - **Clean-Room Smoke Verification:** Multi-platform installation pathways (`install.sh` POSIX bootstrap, `brew install`, `cs install`, and `cs launch --contrib ccrystal`) must undergo an isolated smoke test verifying installation, binary execution, and basic DAG state lifecycle prior to public announcement.
- **Ecosystem Manifest & Distribution Synchronization Invariant:** All modifications to MCP server entry points, CLI options, packaging formats, or release distribution targets must keep root manifests and distribution descriptors strictly synchronized:
  - **MCP Registries:** When changing MCP server transports, CLI options, or environment variables (`CCRYSTAL_STORE`), update root `smithery.yaml` and `glama.json`.
  - **Packaging & Descriptors:** When changing release asset formats, target triples, or archive compression schemes, synchronize root `apps.json`, `Formula/ccrystal.rb`, and `docs/distribution/coursier-ccrystal.json`.
  - **Portal & Search Indexing:** When modifying public documentation routes or schemas, verify synchronization across `README.md`, `llms.txt`, `../context-crystal-gh-pages`, and `docs/distribution/llmstxt-submission.md`.
- **Zero-Telemetry Terminology Invariant:** Context Crystal is 100% local, offline, deterministic, and sovereign. In CLI commands, flags, documentation, and release communications, never use the word "telemetry" to describe local workspace inspection, token accounting, or storage metrics. Avoid surveillance and phone-home stigmas; prefer *metrics*, *statistics*, *accounting*, *observability*, or *inspection*.
