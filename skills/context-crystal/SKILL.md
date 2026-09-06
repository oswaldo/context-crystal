---
name: context-crystal
description: Universal agent skill for Context Crystal. Automates context lifecycle management, state transitions, session persistence, context cleavage, and prompt hydration with zero learning curve for users.
metadata:
  version: "1.0"
  schemaVersion: "1.0.0"
---

# Context Crystal Agent Skill

This skill equips AI coding entities (Antigravity, Claude Code, Cursor, Windsurf, Jetski) to manage, persist, and advance long-running computational contexts using the **Context Crystal** engine (`ccrystal`).

---

## 1. Operating Philosophy & Cybernetic Model

- **Context Over Session:** Context and goals exist independently of any individual chat session, IDE window, or token budget.
- **Agent as Operator (Zero Human Learning Curve):** The human operator should never need to learn CLI flags, subcommands, or manual installation routines. The agent autonomously interprets user intent, manages binary installation, and executes atomic batched updates behind the scenes.
- **Fidelity Guarantee:** In the absence of an OS-level deterministic kernel interceptor, all agent-synthesized DAG transitions MUST specify `--fidelity inferred`.
- **Atomic Multi-Command Batching:** To avoid token inflation and roundtrip latency, ALWAYS prefer executing composite transitions in a single atomic invocation using `ccrystal batch "<cmd1>; <cmd2>; ..."`.
- **Preservation of Clean Repositories:** Context Crystal fully supports out-of-tree companion context repositories (`CCRYSTAL_STORE`). Respect user repository policies to prevent polluting production code with local tracking files.

---

## 2. Self-Bootstrapping & Prerequisite Check

Before invoking any `ccrystal` commands, verify that the binary is available in the execution environment:

```bash
which ccrystal || command -v ccrystal || [ -f "$HOME/.local/bin/ccrystal" ]
```

### Autonomous Bootstrap Protocol

If `ccrystal` is not present in PATH:

1. Ensure `~/.local/bin` exists and is in `PATH`:

   ```bash
   mkdir -p "$HOME/.local/bin"
   export PATH="$HOME/.local/bin:$PATH"
   ```

2. Fetch the native release binary or install from source:
   - **Automated Installer (Recommended):**

     ```bash
     curl -fsSL https://context-crystal.org/install.sh | sh
     ```

   - **Monorepo Fallback (When in Context Crystal repository):**

     ```bash
     sbt "cliNative/nativeLink" && cp ./cli/native/target/scala-3.3.4/ccrystal-cli "$HOME/.local/bin/ccrystal" && chmod +x "$HOME/.local/bin/ccrystal"
     ```

3. Test availability:

   ```bash
   ccrystal --help
   ```

---

## 3. Storage Location Discovery (Clean vs In-Tree Repos)

Context Crystal decouples the **Code Workspace** from the **Context Store**. When determining where to persist crystals, evaluate in this order:

1. **Explicit CLI / Environment Override:**
   - If `CCRYSTAL_STORE` is set in the environment or passed via `--store <path>`, use that directory.
2. **Workspace Pointer File:**
   - Check if `.ccrystal-store` exists in the workspace root. If present, read its path pointer.
3. **Clean Repository Preference:**
   - If the workspace is a strict/public repository (or the user requests a clean working tree without `.ccrystals/`), set `CCRYSTAL_STORE` to an external companion directory, e.g.:

     ```bash
     export CCRYSTAL_STORE="$HOME/.ccrystals/stores/$(basename "$PWD")"
     ```

4. **Default In-Tree Storage:**
   - Fall back to standard in-repo `.ccrystals/` directory.

---

## 4. Environment Sensing & Dual Operational Modes

The skill automatically adapts its update cadence and token usage based on the host project's workflow infrastructure:

```text
                          ┌───────────────────────────┐
                          │ Project Environment Check │
                          └─────────────┬─────────────┘
                                        │
                 ┌──────────────────────┴──────────────────────┐
                 ▼                                             ▼
     [Process Framework Found]                     [No Process Tool Found]
(conductor/, openspec/, speckit/, adr/)            (Freeform conversational flow)
                 │                                             │
                 ▼                                             ▼
          Symbiotic Mode                            Autonomous Spine Mode
       (Low Token Overhead)                       (Compaction & Crash Proof)
• Sync only at phase boundaries            • Manages tasks directly in tasks.md
• Ingest at session start                  • Flushes batch delta before yielding turn
• Cleave on out-of-scope branch            • Checkpoints on logical milestones
```

### A. Mode 1: Symbiotic Mode (Low Token Overhead)

*Active when `conductor/`, `.conductor/`, `openspec/`, `speckit/`, or `docs/adr/` is present.*

- **Zero Micro-Step Chatter:** Do NOT invoke `ccrystal` after every single tool call or minor edit. Allow the host framework to drive minute tasks.
- **Synchronization Trigger Points:**
  1. **Session Inception:** Cast existing crystal or initialize aligned with the track goal:

     ```bash
     ccrystal hydrate <crystal-id>
     # Or initialize if first session:
     ccrystal init <crystal-id> -g "<Goal Title>" -i "<Detailed Intent>" --created-at "<ISO-8601>"
     ```

  2. **Phase / Milestone Boundaries:** When tests pass or a plan phase completes, record an atomic batch transition:

     ```bash
     ccrystal batch "node add <crystal-id> -k checkpoint -s 'Phase complete: <summary>' --fidelity inferred; task done <crystal-id> -t <task-id>"
     ```

  3. **Historical Event Batching:** When syncing multiple completed actions from git logs or OpenSpec tasks, supply explicit `--timestamp <ISO-8601>` flags to preserve true chronological fidelity rather than collapsing into a single second:

     ```bash
     ccrystal batch "node add <id> -k tool_execution -s 'Ran migration' --timestamp 2026-09-06T14:10:00Z; node add <id> -k checkpoint -s 'Tests green' --timestamp 2026-09-06T14:25:00Z"
     ```

  4. **Cleavage / Divergence:** When an adjacent bug or exploration emerges that diverges from the main track, cleave and fork cleanly:

     ```bash
     ccrystal slice <crystal-id> --from <anchor> --fork-to <child-crystal-id> --prune
     ```

  5. **Hand-Off & Conclusion:** Clean temporary leases and log actionable friction:

     ```bash
     ccrystal batch "transient clean <crystal-id> -l <lease-id>; lesson add <crystal-id> -f '<Observed friction>' -r '<Root cause>' -a '<Remediation>'"
     ```

### B. Mode 2: Autonomous Spine Mode (High Crash & Compaction Resilience)

*Active when no external planning tool is present.*

- **Context Crystal as Primary Spine:** The crystal directly maintains goals, sub-tasks (`tasks.md`), lessons learned (`lessons-learned.md`), and temporary resources (`transient.json`).
- **High Information-Density Messaging Standard:**
  - Because there is no external `spec.md` or `plan.md`, the crystal's DAG nodes and lessons must be **semantically dense** to prevent future sessions from reinvestigating settled topics.
  - Every transition summary MUST follow the **Action + Rationale + Constraint/Artifact Trio**:
    - ❌ *Low Density (Forces reinvestigation):* `"Fixed connection timeout"`
    - ✅ *High Density (Self-hydrating):* `"Resolved pool starvation in db/pool.go by configuring max idle conns to 20 and keep-alives; discarded connection pooling wrapper because it introduced deadlocks on rollbacks"`
- **Anti-Reinvestigation Gate (Discarded Alternatives & Dead Ends):**
  - Whenever an investigation reveals a dead end, library incompatibility, or rejected architectural alternative, log it immediately:
    - In node summaries or via `lesson add <id> -f '<friction>' -r '<root cause>' -a '<remediation>'`
    - This guarantees that when a future turn or new agent session runs `ccrystal hydrate`, it immediately inherits the settled rationale and never wastes tokens re-exploring discarded paths.
- **Density Guardrail (No Token Bloat):**
  - Dense does not mean verbatim code dumps. Keep summaries bounded to **1–2 crisp, high-signal sentences (20–40 words)** focusing on symbols, root causes, invariants, and decisions made.
- **Pre-Yield Micro-Batching Rule:**
  - Whenever you finish a logical batch of work, or **immediately before asking the human a question or yielding your conversational turn**, flush pending transitions in an atomic batch.
  - This ensures that if the chat window is closed, crashes, or triggers automatic context compaction, resuming via `ccrystal hydrate <crystal-id>` reconstitutes the exact state without data loss.

---

## 5. Conversational Utterance Matrix (Agent as Operator)

When the user communicates in natural language, translate their intent into the following atomic CLI commands:

| User Utterance / Intent | Meaning | Recommended CLI Recipe |
| :--- | :--- | :--- |
| *"Crystallize this session"*, *"Save checkpoint"* | Snapshot current state and progress | `ccrystal batch "node add <id> -k checkpoint -s '<summary>' --fidelity inferred"` |
| *"Resume last task"*, *"What are we working on?"*, *"Cast context"* | Hydrate prompt with goals, active tasks, recent nodes, open leases | `ccrystal hydrate <id>` (or `ccrystal cast <id> --depth 10`) |
| *"We hit a blocker / build error"*, *"Log a lesson"* | Record friction and corrective action | `ccrystal lesson add <id> -f '<friction>' -r '<cause>' -a '<action>'` |
| *"Set up a temporary branch / mock config"* | Acquire a transient resource lease | `ccrystal transient lease <id> -t git_worktree -p '<path>' -d '<desc>' --policy revert_on_conclusion` |
| *"We're done with the spike, clean it"* | Release/clean transient resource | `ccrystal transient clean <id> -l <lease-id>` |
| *"This bug is unrelated, let's track it separately"* | Cleave context and fork into child crystal | `ccrystal slice <id> --from <anchor-or-node> --fork-to <child-id> --prune` |
| *"What crystals are in progress?"*, *"Which is closer to done?"* | Inspect crystal status and completion ratios | `ccrystal list --status in_progress` |
| *"Complete task X"* | Mark acceptance criterion done | `ccrystal task done <id> -t <task-id>` |
| *"Delete crystal X"*, *"Remove scratch session"* | Permanently delete crystal and cascade orphaned entities | `ccrystal delete <id>` (or `ccrystal delete <id> -f` when automated) |
| *"Deregister entity X"*, *"Remove actor from cave"* | Deregister entity and cascade-delete associated crystals | `ccrystal entity deregister <entity-id>` (or `-f` when automated) |

---

## 6. Atomic Batch Recipes (`ccrystal batch`)

The `batch` subcommand executes multiple statements in a single sub-millisecond process execution. Commands are separated by semicolons (`;`).

### Recipe 1: Initial Inception & Task Breakdown

```bash
ccrystal batch "init my-feature -g 'OAuth2 Authentication' -i 'Implement PKCE flow'; task add my-feature -d 'Design schema'; task add my-feature -d 'Implement token exchange'; task add my-feature -d 'Verify test suite'"
```

### Recipe 2: Milestone Completion & Lease Registration

```bash
ccrystal batch "node add my-feature -k checkpoint -s 'Schema finalized' --fidelity inferred; task done my-feature -t task-1; transient lease my-feature -t debug_config -d 'OAuth test sandbox credentials' --policy revert_on_conclusion"
```

### Recipe 3: Conclusion & Transient Cleanup Gate

```bash
ccrystal batch "task done my-feature -t task-3; node add my-feature -k resolution -s 'OAuth2 flow verified with 100% test coverage' --fidelity inferred; transient clean my-feature -l lease-1; lesson add my-feature -f 'PKCE code challenge salt collision' -r 'Used weak PRNG in mock' -a 'Always use java.security.SecureRandom'"
```

### Recipe 4: Automated Scratch Cleanup & Regeneration

```bash
ccrystal batch "delete scratch-spike -f; init scratch-spike -g 'Spike 2' -i 'Fresh exploration'"
```

---

## 7. Privacy, PII Protection & Public Repository Sovereignty

- **Zero Unprompted PII Persistence:** An AI entity MUST NEVER record Personally Identifiable Information (personal names, private email addresses, phone numbers, physical addresses, personal API keys/tokens, private corporate IDs, or customer data) into a crystal (`init`, `node add`, `task add`, `lesson add`, `transient lease`) without proactively consulting the operator.
- **Context Space Awareness (Public vs. Private):** Crystals (`.ccrystals/`) are designed to be committed to version control, published to remote stores, or shared across multi-agent pipelines. If the repository or destination store is public or shared:
  - The AI entity MUST warn the user about potential permanent exposure.
  - The AI entity MUST offer the user three explicit choices before proceeding:
    1. **Anonymize / Pseudonymize:** Replace identifiers with role-based or synthetic pseudonyms (e.g., `usr_lead_developer`, `[REDACTED_EMAIL]`).
    2. **Omit / Rephrase:** Restructure the goal, task, or friction summary to describe the technical or architectural reality without containing any personal identifiers.
    3. **Explicit Authorization:** Proceed only if the user explicitly confirms that the repository is strictly private and that they hold the authority to record the data.
- **Strict Rule:** The AI entity MUST ALWAYS ask and NEVER assume when PII is involved.
