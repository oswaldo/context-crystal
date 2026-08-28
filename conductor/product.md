# Product Definition: Context Crystal

## 1. Vision & Core Philosophy

**Context Crystal** is an open, standardized interchange schema and context lifecycle ecosystem designed to decouple *context*, *entities*, and *tools* from the ephemeral boundaries of chat sessions and agent runtimes.

Drawing inspiration from the philosophy of **OpenTimelineIO (OTIO)** in media production—which created a vendor-agnostic, immutable data interchange format for edit timelines across disparate software—Context Crystal provides a unified, structured schema for AI-assisted collaborative work.

### The Crystal Metaphor
As work progresses in AI-assisted environments, information coalesces like atoms and molecules organizing into a crystalline lattice. A Context Crystal can range from a simple linear facet to an intricate dendritic snowflake structure:
- **Lattice Nucleus (Core Intent):** The foundational goal and acceptance criteria driving the context.
- **Bonds & Facets (State Transitions & Lineage):** Verifiable transitions, tool executions, decisions, and artifacts that form the structural matrix.
- **Structural Branches (Dendrites):** Branching explorations and sub-tasks that may reference or spawn nested/external contexts while remaining anchored to the central crystal.

---

## 2. Core Tenets

1. **Context Over Session:** Context and goals exist independently of any individual chat session, IDE window, or tool lifecycle.
2. **Decoupled Entities & Masks:** Base models (foundational intelligence backend), runtime harnesses, and operational personas/masks (e.g., specific system prompts, active skills, role specializations) are cleanly separated from the context payload.
3. **Goal-Oriented Progression to Conclusion:** Context is structured not merely as conversational history, but as a verifiable progression driving a defined goal (e.g., investigating a bug to a fix, or taking ideation to a reviewed specification) to a terminal, conclusive state.
4. **Immutable Lineage & Provenance:** Every transformation, tool interaction, human intervention, and AI contribution is captured in an auditable, verifiable record.
5. **Tool & Model Agnostic:** Works across heterogeneous toolchains, allowing different editors, agents, and pipelines to inspect, append, and advance the same crystal.
6. **Methodology & Framework Agnostic:** Operates identically whether a project uses formal specification/planning frameworks (e.g., Conductor, OpenSpec, SpecKit, ADRs), traditional trackers, or no formal planning system at all.
7. **Ephemeral State & Transient Resource Leases:** First-class tracking of temporary artifacts (git worktrees, test configs, dummy assets meant for replacement/removal), ensuring zero orphaned debris or mystery side-effects.
8. **Built-in Continuous Improvement & Lessons Learned:** Native tracking of tasks, operational friction, and lessons learned within each crystal, with deterministic auditing for closing feedback loops.
9. **Pluggable & Hierarchical Storage:** Native zero-config filesystem storage with nested sub-context hierarchies, alongside a clean storage API for local databases and remote client-server backends.
10. **Deterministic, Zero-LLM Housekeeping:** High-speed Scala Native tooling for querying, auditing lessons learned, cleaning transient leases, and managing lifecycles without incurring LLM latency or token costs.
11. **Zero-Learning-Curve Agent Interoperability:** Native agent skills and integrations enable AI tools (Antigravity, Claude Code, Cursor, etc.) to read and advance crystals out of the box.

---

## 3. System Architecture & Module Layout

Context Crystal is organized as a unified monorepo supporting specification, core data structures, agent extensions, and multi-tier tooling:

- `spec/`: The vendor-neutral JSON Schema specification, JSON-LD context definitions, and compliance test suite that any compliant tool/ecosystem participant must adhere to.
- `core/`: High-performance reference implementation of the data structures, DAG operations, transient lease registry, and pluggable storage repository SPI written in the latest **Scala 3**, cross-compiled targeting **Scala Native**, **Scala JVM**, and **Scala.js**.
- `cli/`: Lightweight command-line interface for 1-shot interactions, deterministic audits (transient cleanup, lessons learned, unaddressed insights, archiving), validation, export, diffing, and context manipulation.
- `tui/`: Rich terminal user interface for interactive inspection, branching exploration, and local context navigation.
- `web/`: Enterprise-grade, sovereign, and auditable web UI supporting access control, real-time visual exploration of context lattices, sharing, and compliance auditing.
- `skills/`: Packaged agent skills, prompts, and MCP adapters enabling environments like **Antigravity**, **Claude Code**, and **Cursor** to manipulate, attach, and advance Context Crystals with zero friction.

---

## 4. Storage & Lifecycle Model

### A. Folder Anatomy (`.ccrystals/<crystal-name>/`)
When using the default filesystem backend, each named crystal is represented as a self-contained directory:
- `crystal.json`: The machine-readable state transition DAG, envelope metadata, entity masks, and lineage graph.
- `artifacts/`: Directory containing artifacts generated during the lifecycle (diffs, diagrams, specs, logs).
- `tasks.md` *(Default zero-config fallback)*: Lightweight checklist tracking sub-goals when no external framework (like Conductor or OpenSpec) is active.
- `lessons-learned.md`: Structured log of friction, unexpected behaviors, AI prompt improvements, or process bottlenecks identified during work.
- `transient.json` / `transient.md`: Active registry of temporary facts, scaffolding resources, temporary git worktrees, debug environment overrides, or placeholder assets marked for reversal or replacement upon conclusion.
- `ccrystals/` *(Optional sub-contexts)*: Nested directories for dendritic sub-crystals.

### B. Transient Resource Leases & Cleanup Gates
- **Explicit Lifecycle Bounds:** Temporary resources (e.g., git worktrees, debug flags, dummy media files) are registered with explicit disposal criteria (`revert_on_conclusion`, `delete_after_test`, `replace_in_final_cut`).
- **Zero Orphaned Scaffolding:** Fast CLI checks prevent premature crystal closure if transient resources remain un-reverted or un-cleaned.

### C. Lessons Learned & Closed-Loop Auditing
- **Actionable Post-Mortem:** At crystal conclusion, operational lessons can be reviewed and marked as "acted upon" (e.g., converted into a rule update, prompt adjustment, or skill improvement).
- **Deterministic Auditing:** Fast, non-LLM Scala Native scripts can scan all crystals to report unhandled lessons learned, track action trails, or enforce cleanup policies before archiving.

### D. Pluggable Backends & Long-Term Roadmap
- **Pluggable Storage SPI:** Decoupled persistence supporting Filesystem, SQLite/embedded KV, and remote Web server backends.
- **Federation & Multi-Tenancy:** Cross-repository crystal linking, distributed sync, and sovereign multi-tenant workspaces.

---

## 5. Core Primitives & Schema Entities

1. **Crystal Envelope / Header:**
   - Manifest metadata, schema version, unique identifier, timestamp, and signature validation.
2. **Goal & Outcome State:**
   - Problem statement, acceptance criteria, active milestones, and conclusive resolution status (`in_progress`, `concluded_success`, `abandoned`).
3. **Entity & Persona Separation:**
   - **Entity:** Foundational intelligence / model backend or human contributor.
   - **Mask / Persona:** Active prompt configuration, role specialization, and available capabilities at a given state transition.
   - **Harness:** Surrounding environment, constraints, and platform configuration.
4. **State Transition DAG (Lattice Model):**
   - Directed Acyclic Graph of context states, branching explorations, consolidated decisions, and milestones.
5. **Transient Resource Leases:**
   - Registered temporary state, worktrees, placeholder assets, and environment overrides with expected lifecycle actions.
6. **Lineage & Provenance Track:**
   - Cryptographically verifiable or deterministic event log detailing tool invocations, edits, human feedback, and AI generations.
7. **Artifacts & Attachments:**
   - Strongly typed references to code snippets, diffs, external URLs, logs, schemas, or media.
8. **Continuous Improvement Ledger:**
   - Structured records of lessons learned, resolution status, and action audit trails.

---

## 6. Boundaries & Explicit Non-Goals

To maintain high focus and interoperability, Context Crystal explicitly excludes:
- **Planning & Methodology Enforcement:** Does not mandate or enforce specific planning schemas (e.g., Conductor, OpenSpec, SpecKit); it serves as the underlying context and state interchange format for all of them.
- **Long-Term Memory Search & Storage:** Vector databases, embedding indexes, semantic search engines, and knowledge vaults are considered external consumer/producer tools.
- **Agent Runtime & Orchestration:** Model switching loops, autonomous execution loops, and scheduler daemons are the responsibility of the host engine/harness.
- **Direct LLM Execution:** The core specification and schema do not make direct LLM API calls or enforce prompt templating formats.
