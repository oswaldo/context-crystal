# Context Crystal

> **An open, standardized context lifecycle and interchange format for human and machine collaboration.**

Context Crystal decouples **context**, **goals**, **transient resources**, and **entities** from ephemeral chat sessions, IDE windows, and agent runtimes. Inspired by OpenTimelineIO (OTIO) and grounded in cybernetics, it structures AI-assisted collaborative work as an immutable, auditable state lattice (DAG).

[![Specification](https://img.shields.io/badge/spec-v1.0.0-blue.svg)](spec/v1/context-crystal.json)
[![Build & Tests](https://img.shields.io/badge/tests-cross--platform%20(Native%2C%20JVM%2C%20JS)-green.svg)](#running-tests)
[![Zero Reflection](https://img.shields.io/badge/scala-3.9.0-red.svg)](core/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## Why Context Crystal?

Modern AI-assisted engineering suffers from two critical bottlenecks:

1. **The Session Boundary Problem:** Work is trapped in ephemeral chat windows. When a context window fills, a session restarts, or work hands off across developers and agents, nuance evaporates. Summaries suffer from lossy compaction, prompt drift, and hallucinated progress.
2. **Repository Pollution:** Most persistent context tools force clutter—cloning dotfiles, agent scratchpads, private entity identities, and conversational logs directly into the target code tree, degrading git history and violating open-source contribution policies.

**Context Crystal solves both:** It provides a deterministic, machine-readable state transition DAG that persists across tool sessions, while guaranteeing a **100% clean codebase** through decoupled out-of-tree storage.

---

## Zero-Learning-Curve: Agent-as-Operator

**Human developers never need to memorize `ccrystal` commands, flags, or installation scripts.**

Context Crystal is designed around the **Agent-as-Operator** paradigm:

- **Humans instruct in natural language.**
- **Agents self-bootstrap and operate the crystal.**

When an AI agent (Google Antigravity, Claude Code, Cursor, Windsurf, Copilot, etc.) encounters this repository or a project referencing Context Crystal, it reads the native agent skill, self-detects whether the binary is present, runs self-installation if missing, and manages state transitions autonomously.

### Natural Language Workflows

| Developer Utterance | What the Agent Executes Behind the Scenes |
| :--- | :--- |
| *"Let's start working on the user authentication refactor."* | Self-bootstraps `ccrystal`, calls `ccrystal init auth-refactor -g "..."`, and sets the goal lattice nucleus. |
| *"What did we accomplish on this branch yesterday?"* | Calls `ccrystal hydrate auth-refactor` to inject verified checkpoints and task statuses directly into the prompt. |
| *"While refactoring auth, I noticed our token parser fails on empty strings."* | Calls `ccrystal slice auth-refactor ... --fork-to token-parser-bug --prune` to fork an adjacent crystal without derailing the current task. |
| *"Spin up a temporary mock auth server for testing."* | Leases a transient resource via `ccrystal transient lease ... -t mock_service --policy delete_after_test`. |
| *"We're done! Wrap up and clean up."* | Verifies all transient resource leases are resolved, records lessons learned, and marks tasks complete. |

---

## 100% Clean Codebase Guarantee (Decoupled Storage)

Context Crystal adapts to your team's workflow without polluting your code:

```text
┌────────────────────────────────────────────────────────┐
│               Target Project Repository                │
│    (100% Clean: No agent dotfiles, zero tool noise)    │
└───────────────────────────┬────────────────────────────┘
                            │
              Points to context store via:
              • CLI flag:    --store <path>
              • Environment: CCRYSTAL_STORE=<path>
              • File pointer: .ccrystal-store
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│           Decoupled Context Companion Repo             │
│   (Immutable DAG, transient leases, lessons learned)   │
└────────────────────────────────────────────────────────┘
```

- **In-Tree Mode (`.ccrystals/`):** Default for internal projects where teams want context history versioned alongside source code.
- **Decoupled Out-of-Tree Mode (`CCRYSTAL_STORE`):** Set an environment variable or add a single `.ccrystal-store` pointer line. All crystals, entity logs, and transient leases are written to an isolated companion repository. Your public source repository remains pristine.

---

## Key Capabilities

1. **Topological State DAG:** Context is structured as an immutable directed acyclic graph capturing human prompts, agent reasoning, tool executions, and verifiable checkpoints.
2. **Capture Fidelity Guarantees:** Distinguishes between **Inferred** context (agent synthesis, chain-of-thought) and **Intercepted** telemetry (deterministic, verbatim tool input/output), preventing synthetic hallucinations from masquerading as verified facts.
3. **First-Class Transient Resource Leases:** Tracks temporary resources (`git_worktree`, test environment overrides, mock services, dummy assets) with automated cleanup gates before task conclusion.
4. **Context Cleavage & Slicing (`ccrystal slice`):** Prune context lattices to avoid token saturation, or slice and fork unexpected discoveries into linked child crystals with full parent lineage.
5. **Selective Context Hydration & Beam Shaping (`ccrystal cast/hydrate --from`):** Reconstitutes living state (Goal, Tasks, Leases, Lessons) while focusing the state transition beam on a specific milestone (`--from <anchor|id>`, `--to <anchor|id>`, `--tail <N>`), keeping prompts lean without permanent forking.
6. **Continuous Improvement & Lessons Learned:** Built-in ledger tracking friction, root causes, and verified action audit trails.
7. **Sub-Millisecond Atomic Batching:** Pipelined CLI execution (`ccrystal batch "..."`) combines multi-step state transitions into a single roundtrip, eliminating agent latency and token waste.
8. **Deterministic Zero-LLM Housekeeping & Melting:** Sub-DAG topological melting (`ccrystal melt`) collapses intermediate transition chains into consolidated checkpoint nodes with aggregated artifact links, preserving key decisions while drastically reducing prompt token overhead with zero LLM dependency.
9. **Cold Storage Archiving & Cave Hygiene Triage:** Classify workspace health into `Active`, `Solid`, and `Stale` states (`ccrystal triage --solid/--stale`). Move completed crystals to cold storage (`ccrystal archive`) to keep active context listings lean while preserving full history and artifacts.

---

## Pre-Packaged Agent Adapters

Context Crystal includes ready-to-use skills and instruction adapters for major agent harnesses:

- 🚀 **[Google Antigravity](.agents/skills/context-crystal/SKILL.md):** Full agent skill with symbiotic and autonomous fallback modes.
- 🟣 **[Claude Code](skills/context-crystal/adapters/claude/CLAUDE.md):** CLAUDE.md integration instructions for Anthropic's CLI.
- ⚡ **[Cursor & Windsurf](skills/context-crystal/adapters/cursor/.cursorrules):** Rule definitions for prompt hydration and automatic checkpointing.
- 🛠️ **[Generic POSIX Skill](skills/context-crystal/SKILL.md):** Universal agent specification adaptable to any tool-calling harness.

---

## Native Model Context Protocol (MCP) Server (`ccrystal mcp`)

Context Crystal includes an embedded, zero-overhead MCP server built directly into the native binary. It connects Claude Desktop, Cursor, Zed, Windsurf, and agent harnesses to your workspace crystals with zero Python or Node.js runtime dependencies.

- **Compound Atomic Tools (14 tools):**
  - **Batching & Inception:** `crystal_batch`, `crystal_init`.
  - **Transitions & Provenance:** `crystal_checkpoint`, `crystal_task_transition`, `crystal_goal_transition`.
  - **Artifacts & Leases:** `crystal_artifact`, `crystal_transient_lease`.
  - **Context Shaping & Slicing:** `crystal_hydrate`, `crystal_slice_fork`.
  - **Housekeeping & Lifecycle:** `crystal_list`, `crystal_triage`, `crystal_melt`, `crystal_archive`, `crystal_unarchive`, `crystal_delete`.
- **Dynamic Context Resources (`ccrystal://`):**
  - `ccrystal://{id}/state`: Living state container JSON (Goal status, pending tasks, active leases, open lessons).
  - `ccrystal://{id}/dag`: Normalized DAG nodes and parent lineage JSON.
  - `ccrystal://{id}/hydrate`: Synthesized Markdown context beam formatted for immediate LLM prompt injection (supports `?from=...&to=...&tail=...` query parameters).
  - `ccrystal://artifacts`: Global cave artifact registry.
  - `ccrystal://{id}/artifacts`: Crystal-scoped referenced artifacts.
  - `ccrystal://entities`: Registered cave identities and authors.
- **Prompt Beams & Triage:** Hydrate shaped context beams directly via `hydrate_context` (accepting `from`, `to`, `tail`, `depth`) and review cave lifecycle hygiene via `triage_cave`.

### Client Configuration

Add to your MCP client settings (e.g., Claude Desktop `claude_desktop_config.json`, Cursor `.cursor/mcp.json`, or Antigravity `mcp_config.json`):

```json
{
  "mcpServers": {
    "context-crystal": {
      "command": "ccrystal",
      "args": ["mcp"]
    }
  }
}
```

For detailed protocol specifications and editor templates, see **[docs/mcp/README.md](docs/mcp/README.md)**.

---

## Verified CLI Quickstart

If you want to run commands directly or script automation, the native CLI is fast and ergonomic.

### Quick Installation (Recommended)

Install the standalone native binary for Linux or macOS with a single command:

```bash
curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh
```

The script automatically detects your OS and architecture (`linux-x86_64`, `macos-aarch64`, `macos-x86_64`), installs `ccrystal` into `~/.local/bin`, and verifies binary execution.

### Building from Source (Alternative)

If you prefer building from source, ensure you have:

- **Java Development Kit (JDK):** Version 21+ (verified on JDK 21 LTS and bleeding-edge OpenJDK 26 across Linux x86_64 and macOS Apple Silicon)
- **Build Tool:** `sbt` 1.10+
- **Compiler:** Scala 3.9+
- **Native Linker:** `clang` (for Scala Native LLVM target; `sudo apt install clang` / `sudo dnf install clang` on Linux, or included with Xcode CommandLineTools on macOS)

> [!TIP]
> **Collaborator Quickstart & Hardware Baseline:**
>
> - **Idiomatic Bleeding-Edge Setup:** We recommend bootstrapping your environment with [Coursier](https://get-coursier.io/):
>
>   ```bash
>   # Single command installs bleeding-edge JDK 26, sbt, scalafmt, scala-cli, and configures PATH
>   cs setup --jvm 26 -y
>   ```
>
> - **Shell PATH:** Ensure `~/.local/bin` and Coursier's application bin directory (`~/.local/share/coursier/bin` on Linux, or `~/Library/Application Support/Coursier/bin` on macOS) are exported in your `~/.bashrc`, `~/.zshrc`, or shell profile.
> - **Memory Baseline:** Scala Native Thin LTO linking benefits from 8 GB+ RAM. A [`.jvmopts`](.jvmopts) baseline (`-Xmx4g`) is included in the repository. On lightweight machines, run `sbt "coreJVM/test; cliJVM/test"` for fast local iteration.
> - **Contributing:** See **[docs/contributing.md](docs/contributing.md)** for our dual-key cryptographic policy and local verification workflow.

```bash
# 1. Fast build (development mode, ~10s)
sbt "cliNative/nativeLink"

# 2. Optimized release build with Thin LTO (~25s, dead-code elimination, peak runtime performance)
sbt 'set cli.native / nativeConfig ~= { _.withMode(scala.scalanative.build.Mode.releaseFast).withLTO(scala.scalanative.build.LTO.thin) }; cliNative/nativeLink'

# Install into local user PATH (portable across macOS BSD and Linux GNU)
mkdir -p ~/.local/bin
rm -f ~/.local/bin/ccrystal
cp ./cli/native/target/scala-3.9.0/ccrystal-cli ~/.local/bin/ccrystal
chmod +x ~/.local/bin/ccrystal
strip ~/.local/bin/ccrystal
```

### Essential Commands

```bash
# 1. Initialize a new crystal
ccrystal init auth-refactor -g "Refactor JWT Validation" -i "Replace legacy parser with Nimbus"

# 2. Add and check off task milestones
ccrystal task add auth-refactor -d "Write failing reproduction test"
ccrystal task done auth-refactor -t t1

# 3. Append verifiable state transitions to the DAG
ccrystal node add auth-refactor -k human_prompt -s "Investigate parser NPE"
ccrystal node add auth-refactor -k tool_execution -s "sbt test" --fidelity intercepted

# 4. Track temporary scaffolding with transient resource leases
ccrystal transient lease auth-refactor -t git_worktree -p "../ccrystal-worktrees/auth" -d "Isolated worktree" --policy revert_on_conclusion

# 5. Hydrate prompt / inspect context (markdown view)
ccrystal hydrate auth-refactor

# 6. Execute atomic multi-command batch (ideal for agents)
ccrystal batch "task add auth-refactor -d 'Deploy to staging'; transient clean auth-refactor -l l1; node add auth-refactor -k checkpoint -s 'Ready for review'"

# 7. Context Cleavage: slice and fork into a child crystal
ccrystal slice auth-refactor --from node-1 --to node-3 --fork-to auth-edge-cases --prune

# 8. Selective Context Hydration & Beam Shaping
ccrystal hydrate auth-refactor --from v1-checkpoint --tail 5

# 9. Deterministic Sub-DAG Melting (Squash intermediate node chains)
ccrystal melt auth-refactor --from node-auth-refactor-init --to checkpoint-1 --summary "Finalized initial auth spec & scaffolding"

# 10. Cave Hygiene Triage & Cold Storage Archiving
ccrystal triage --solid          # Inspect concluded crystals ready for cleanup
ccrystal archive auth-refactor   # Move completed crystal to cold storage (.ccrystals/archive/)
ccrystal unarchive auth-refactor # Restore crystal to active cave
ccrystal list --archived         # List active and archived crystals

# 11. Dual-Audience Guidance & Entity Conventions
ccrystal --for-ai               # Operational invariants, PII rules, and entity schemes for AI agents
ccrystal entity conventions     # Display canonical entity prefixes (usr_, agt_, mdl_, tool_, sys_)

# 12. Universal Agent Runtime Onboarding & Diagnostics
ccrystal agent doctor                  # Check environment, PATH, and harness configurations
ccrystal agent doctor --json           # Machine-readable JSON diagnostic report
ccrystal agent install --dry-run       # Preview automated MCP registration without disk changes
ccrystal agent install                 # Safely auto-configure detected agent harnesses with .ccrystal.bak backups
ccrystal agent install --target cursor # Auto-configure specific harness (cursor, claude-code, zed, etc.)
```

---

## Repository & Monorepo Architecture

Context Crystal is built as a high-performance cross-compiled Scala 3 monorepo:

```text
├── spec/          # Vendor-neutral JSON Schema v1 specification & compliance suite
├── core/          # Pure functional models, DAG engine, codecs, and FsCrystalStore SPI
│   ├── shared/    # Cross-platform core logic (Scala 3)
│   ├── jvm-native/# Shared filesystem engine, POSIX locks & OCC rebase (JVM & Native)
│   ├── jvm/       # JVM target-specific platform primitives
│   ├── native/    # Scala Native (LLVM) target-specific platform primitives
│   └── js/        # Scala.js target
├── cli/           # Decline-based command-line interface & native MCP server
├── skills/        # Canonical agent skills and IDE/CLI adapters (Antigravity, Claude, Cursor)
├── docs/          # Cybernetic philosophy & operational guidelines (for_devs.md, for_ais.md)
└── conductor/     # Conductor Spec-Driven Development (SDD) tracks & system tenets
```

### Storage Isolation & Concurrency Control

Context Crystal is engineered for safe simultaneous collaboration across multiple human developers and autonomous AI agents:

- **Atomic Inode Replacement:** File writes stage to `.<target>.tmp-<time>-<nano>` in the target directory and perform an atomic swap via POSIX `rename(2)` (`REPLACE_EXISTING`), eliminating torn reads.
- **Optimistic Concurrency Control (OCC):** The storage-isolated `CrystalStore.update(id)(f)` API executes pure functional transformations with deterministic 128-bit `ContentFingerprint` validation and automatic bounded rebase retries.
- **Defensive Agent Installation:** `ccrystal agent install` checks pre-read fingerprints to detect external file modifications, preventing data loss or clobbering of concurrent user edits.
- **Ephemeral Mutex Serialization:** Short-lived `.lock` mutex files with PID tracking and 5-second staleness auto-expiration prevent filesystem races during multi-entity write operations.

### Running Tests

```bash
# Run full cross-platform test suite (Native, JVM, JS)
sbt test

# Fast iteration on JVM only
sbt "coreJVM/test; cliJVM/test"

# Run formatting and scalafix linter checks
sbt "scalafmtCheckAll; scalafixAll"
```

---

## Philosophy & Foundations

We model human and machine collaborators not as theatrical roleplaying personas, but as self-governing **Entities** operating on explicit feedback loops toward measurable goals:

- 👨‍💻 **[For Developers](docs/for_devs.md):** Why shedding anthropomorphic overhead lowers cognitive fatigue and accelerates flow.
- 🤖 **[For AI Entities](docs/for_ais.md):** How immutable context lattices prevent attention degradation and prompt drift.
- 📖 **[System Tenets & Specification](conductor/product.md):** Detailed architectural tenets, including capture fidelity, transient leasing, and decoupled storage.

---

## Contributing

All development strictly follows **Conductor Spec-Driven Development (SDD)** and **strict Git worktree isolation**.

Please read **[AGENTS.md](AGENTS.md)** before starting any work or submitting pull requests.
