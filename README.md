# Context Crystal

> **An open, standardized context lifecycle and interchange format for human and machine collaboration.**

Context Crystal decouples *context*, *goals*, *transient resources*, and *entities* from ephemeral chat sessions, IDE windows, and agent runtimes. Inspired by OpenTimelineIO (OTIO) and grounded in the principles of cybernetics, it structures AI-assisted collaborative work as an immutable, auditable state lattice (DAG).

---

## Philosophy & Foundations

We model collaborators not as theatrical roleplaying personas, but as self-governing **Entities** (human steersmen or machine agents) executing verifiable state transitions toward explicit goal criteria.

- 👨‍💻 **For Developers:** Read [docs/for_devs.md](docs/for_devs.md) to understand why shedding anthropomorphic overhead lowers cognitive load and enhances efficiency.
- 🤖 **For AI Entities:** Read [docs/for_ais.md](docs/for_ais.md) to learn how structured context lattices prevent attention degradation and prompt drift.
- 📖 **Architecture & Core Tenets:** See [conductor/product.md](conductor/product.md) for full system specifications and industry context.

---

## Key Capabilities

1. **Topological State DAG:** Context is structured as an immutable directed acyclic graph capturing prompts, reasoning, tool executions, and checkpoints.
2. **First-Class Transient Resource Leases:** Tracks temporary resources (such as `git_worktree`, test configs, and mock services) with automated cleanup gates before task conclusion.
3. **Continuous Improvement & Lessons Learned:** Built-in ledger tracking friction, root causes, and verified action audit trails.
4. **Cave Entity Registry & Provenance:** Line-level authorship tracking with deterministic agent ID collision resolution in `.ccrystals/entities.json`.
5. **Context Forking & Spinoffs:** Unrelated discoveries cleanly fork into new crystals anchored to their `origin`.
6. **Zero-LLM Native Housekeeping:** Blazing fast Scala Native CLI for instant querying, auditing, and status checking without incurring token latency.

---

## Repository Layout

Context Crystal is built as a high-performance cross-compiled Scala 3 monorepo:

```text
├── spec/          # Vendor-neutral JSON Schema v1 specification & compliance suite
├── core/          # Pure functional models, DAG engine, codecs, and FsCrystalStore SPI (JVM, Native, JS)
├── cli/           # Decline-based command-line interface (Scala Native & JVM)
├── docs/          # Philosophical, architectural, and operational guides
│   ├── for_devs.md
│   └── for_ais.md
├── skills/        # Native agent skills & MCP adapters (Antigravity, Claude Code, Cursor)
└── conductor/     # Conductor Spec-Driven Development (SDD) registry and tracks
```

---

## Quick Start & Build Commands

### Prerequisites
- [sbt](https://www.scala-sbt.org/) (1.10+)
- JDK 21+
- Clang / LLVM (for Scala Native build)

### Running Tests
```bash
# Run cross-platform test suite (Native, JVM, JS)
sbt test

# Fast iteration on JVM
sbt "coreJVM/test; cliJVM/test"
```

### Compiling Native CLI Binary
```bash
sbt "cliNative/nativeLink"
# Binary output: ./cli/native/target/scala-3.3.4/ccrystal-cli
```

### Installing into Local PATH
```bash
mkdir -p ~/.local/bin
cp ./cli/native/target/scala-3.3.4/ccrystal-cli ~/.local/bin/ccrystal
chmod +x ~/.local/bin/ccrystal
```

### Basic CLI Usage
```bash
# Initialize a new crystal
ccrystal init --id cc-fix-001 --title "Fix Parser NPE" --intent "Resolve email parsing error"

# Add a task checklist item
ccrystal task add --crystal cc-fix-001 --id t1 --desc "Reproduce with unit test"

# Inspect / Cast crystal into markdown view
ccrystal cast --crystal cc-fix-001
```

---

## Contributing & Development Workflow

All development in this repository strictly adheres to the **Conductor Spec-Driven Development (SDD)** workflow and **Git Worktree isolation**.

Please read [AGENTS.md](AGENTS.md) before starting any development or opening contributions.
