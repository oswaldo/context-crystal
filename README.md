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
5. **Continuous Improvement & Lessons Learned:** Built-in ledger tracking friction, root causes, and verified action audit trails.
6. **Sub-Millisecond Atomic Batching:** Pipelined CLI execution (`ccrystal batch "..."`) combines multi-step state transitions into a single roundtrip, eliminating agent latency and token waste.
7. **Deterministic Zero-LLM Housekeeping:** Compiled via **Scala Native (LLVM)** into a sub-10ms, self-contained binary that inspects, hydrates, and audits contexts with zero token cost.

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

- **Compound Atomic Tools:** Features `crystal_batch` for executing multi-operation recipes in a single roundtrip, plus `crystal_init`, `crystal_checkpoint`, `crystal_task_transition`, `crystal_transient_lease`, `crystal_slice_fork`, and `crystal_delete`.
- **Dynamic Context Resources:** Inspect living states (`crystal://{id}/state`), DAG lineages (`crystal://{id}/dag`), and identities (`crystal://entities`).
- **Prompt Beams & Triage:** Hydrate context beams directly via `hydrate_context` and review cave lifecycle hygiene via `triage_cave`.

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

If you do want to run commands directly or script automation, the native CLI is fast and ergonomic.

### Prerequisites & Installation

- **Java Development Kit (JDK):** Version 21+ (managed via SDKMAN or package manager)
- **Build Tool:** `sbt` 1.10+
- **Compiler:** Scala 3.9+
- **Native Linker:** `clang` (for Scala Native LLVM target)

```bash
# 1. Fast build (development mode, ~10s)
sbt "cliNative/nativeLink"

# 2. Optimized release build with Thin LTO (~25s, dead-code elimination, peak runtime performance)
sbt 'set cli.native / nativeConfig ~= { _.withMode(scala.scalanative.build.Mode.releaseFast).withLTO(scala.scalanative.build.LTO.thin) }; cliNative/nativeLink'

# Install into local user PATH
mkdir -p ~/.local/bin
cp --remove-destination ./cli/native/target/scala-3.9.0/ccrystal-cli ~/.local/bin/ccrystal
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
```

---

## Repository & Monorepo Architecture

Context Crystal is built as a high-performance cross-compiled Scala 3 monorepo:

```text
├── spec/          # Vendor-neutral JSON Schema v1 specification & compliance suite
├── core/          # Pure functional models, DAG engine, codecs, and FsCrystalStore SPI
│   ├── shared/    # Cross-platform core logic (Scala 3)
│   ├── jvm/       # JVM target
│   ├── native/    # Scala Native (LLVM) target
│   └── js/        # Scala.js target
├── cli/           # Decline-based command-line interface
├── skills/        # Canonical agent skills and IDE/CLI adapters (Antigravity, Claude, Cursor)
├── docs/          # Cybernetic philosophy & operational guidelines (for_devs.md, for_ais.md)
└── conductor/     # Conductor Spec-Driven Development (SDD) tracks & system tenets
```

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
