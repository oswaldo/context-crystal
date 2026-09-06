# Specification: Agent Skill, Self-Bootstrapping & Interaction Loop

## 1. Overview
Track 6 introduces the canonical Context Crystal Agent Skill (`skills/context-crystal/SKILL.md`), host adapters (Antigravity, Claude Code, Cursor/Windsurf), and decoupled store support (`CCRYSTAL_STORE` & `--store`). It equips AI coding agents with zero-learning-curve self-bootstrapping, natural language conversational vocabulary, and adaptive execution modes that respect token budgets, host workflows, and repository cleanliness.

## 2. Functional Requirements

### 2.1 CLI Engine: Decoupled Store Support (`CCRYSTAL_STORE` & `--store`)
- **Global Store Flag & Environment Resolution:**
  - Enhance CLI parser and `Main.scala` to resolve the root store path in priority order:
    1. CLI option: `--store <path>`
    2. Environment variable: `CCRYSTAL_STORE`
    3. Workspace pointer file: `.ccrystal-store` (containing target path)
    4. Default local fallback: `.ccrystals/`
- **Clean Repo Preservation:**
  - Allows crystals to be stored in an out-of-tree companion git repo (e.g. `../project-crystals/` or `~/.ccrystals/stores/<repo-hash>`), keeping the code repository 100% pristine and free of tool clutter or sensitive context.
- **Historical & Batched Event Timestamps:**
  - Support explicit ISO-8601 timestamps on CLI commands:
    - `node add --timestamp <iso8601>`: Records true historical execution time in DAG transitions.
    - `init --created-at <iso8601>`: Records true session inception time.
    - `transient lease --acquired-at <iso8601>`: Records true lease acquisition timestamp.
  - Defaults to `Instant.now().toString` if omitted, enabling batch replay from external process tools (OpenSpec, Conductor, Git logs) without timestamp flattening.

### 2.2 Canonical Skill (`skills/context-crystal/SKILL.md`)
- **Metadata & Frontmatter:** Conforms to universal skill specifications (`name: context-crystal`, `description`, YAML metadata).
- **Agent Self-Bootstrapping (Zero-Learning-Curve for Humans):**
  - The agent checks if `ccrystal` is on `PATH`.
  - If missing, the agent autonomously executes the single-line installation recipe (e.g., fetching pre-built native binary or compiling via sbt to `~/.local/bin/ccrystal`) without requiring human intervention.
- **Storage Location Sensing:**
  - Checks if out-of-tree storage is active via `CCRYSTAL_STORE`, `.ccrystal-store`, or user preference, operating seamlessly regardless of physical location.
- **Conversational Utterance Triggers (Agent as Operator):**
  - *"Crystallize this session"* / *"save checkpoint"* -> Flush current delta to store.
  - *"Cast crystal <id>"* / *"hydrate context"* -> Inject recent DAG nodes, active tasks, open leases, and unresolved lessons into agent prompt.
  - *"Slice session from <anchor|id>"* / *"fork to <child>"* -> Cleave context and fork into new crystal with unbroken parent lineage.
  - *"List active crystals"* / *"What crystal is closer to completion?"* -> Inspect goal status and task completion ratios.
  - *"Log friction / lesson learned"* -> Record friction, root causes, and corrective actions.
- **Environment Detection & Dual-Mode Operation:**
  - **Sensing Heuristic:** Inspects project root for `conductor/`, `.conductor/`, `openspec/`, `speckit/`, `docs/adr/`, or environment override `CCRYSTAL_MODE=symbiotic|spine`.
  - **Symbiotic Mode (Low Token Overhead):**
    - Active when structured SDD tools are present.
    - Avoids micro-step chatter; syncs via `ccrystal batch` strictly at:
      1. Session init / hydration (`ccrystal hydrate <id>`)
      2. Plan phase verification checkpoints and git commit boundaries
      3. Divergence points / adjacent bug discoveries (`ccrystal slice --fork-to <child-id> --prune`)
      4. Hand-off and conclusion (`ccrystal transient clean`, `ccrystal lesson add`)
  - **Autonomous Spine Mode (High Crash/Compaction Resilience):**
    - Active when no external planning tool is found.
    - Context Crystal serves as the primary task list (`tasks.md`) and state container.
    - Emits opportunistic micro-batch updates prior to yielding turns to the user (e.g. before interactive modals or completion prompts) so that aborted or compacted sessions resume effortlessly.

### 2.3 CLI Command Mapping & Batching Patterns
- Encodes optimized single-roundtrip recipes using `ccrystal batch "<cmd1>; <cmd2>; ..."`:
  - **Milestone Checkpoint:** `ccrystal batch "node add <id> -k checkpoint -s '<summary>' -u '<entity>' --fidelity inferred; task done <id> -t <task-id>"`
  - **Branch / Cleavage:** `ccrystal slice <id> --from <anchor> --fork-to <child-id> --prune`
  - **Transient Cleanup & Lesson Gate:** `ccrystal batch "transient clean <id> -l <lease-id>; lesson add <id> -f '<friction>' -r '<root-cause>' -a '<action>'"`

### 2.4 Host Adapters (`skills/context-crystal/adapters/`)
- **Antigravity:** Skill registration guide, configuration, and native modal (`ask_question`) integration guidelines.
- **Claude Code:** Project configuration snippet (`CLAUDE.md` and `.claude/commands/crystallize.md`).
- **Cursor / Windsurf:** `.cursorrules` / `.cursor/rules/context-crystal.mdc` integration snippet.

### 2.5 Verification & Dogfooding
- Automated verification test suite (`skills/context-crystal/tests/verify_skill_commands.sh` or Scala unit tests) validating `CCRYSTAL_STORE`, `--store`, and all CLI command chains specified in the skill.
- Initializing a crystal in this repository (optionally testing out-of-tree) to track subsequent activities.

## 3. Non-Functional Requirements
- **Token Economy:** Core instructions fit within compact prompt context (< 450 lines).
- **Provenance Integrity:** All agent-synthesized transitions explicitly enforce `fidelity = Inferred`.
- **Zero-Reflection & Native Performance:** CLI store resolution executes with sub-millisecond overhead in Scala Native.

## 4. Out of Scope
- Direct LLM runtime daemons / OS-level intercepted eBPF kernel taps (scheduled for future runtime hooks).
- Web / 3D visualization lattice rendering (scheduled for Track 8 & Track 11).
