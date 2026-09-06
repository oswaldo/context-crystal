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
2. **Neutral Entity Architecture & Decoupled Personas:** Grounded in cybernetics (Norbert Wiener, Ross Ashby), participants are modeled as self-governing **Entities** (human or machine) operating on explicit feedback loops rather than theatrical roleplay or simulated org charts. Persona masks remain strictly decoupled. (See [docs/for_devs.md](../docs/for_devs.md) and [docs/for_ais.md](../docs/for_ais.md)).
3. **Goal-Oriented Progression to Conclusion:** Context is structured not merely as conversational history, but as a verifiable progression driving a defined goal to a terminal, conclusive state.
4. **Immutable Lineage & Provenance (Capture Fidelity Tiers):** Every transformation, tool interaction, human intervention, and AI contribution is captured in an auditable, verifiable record with explicit fidelity guarantees—distinguishing between *inferred* data (agent synthesis/reasoning) and *intercepted* data (deterministic, verbatim 1:1 factual capture). For filesystem stores, Git serves as the primary tamper-evident provenance substrate.
5. **Context Forking & Spinoffs:** Unrelated discoveries (e.g. adjacent bugs found during feature work) can spawn new crystals with an explicit `origin` link (`parentCrystalId`, `parentNodeId`, `reason`) maintaining full provenance.
6. **Tool & Model Agnostic:** Works across heterogeneous toolchains, allowing different editors, agents, and pipelines to inspect, append, and advance the same crystal.
7. **Methodology & Framework Agnostic:** Operates identically whether a project uses formal specification/planning frameworks (e.g., Conductor, OpenSpec, SpecKit, ADRs), traditional trackers, or no formal planning system at all.
8. **Ephemeral State & Transient Resource Leases:** First-class tracking of temporary artifacts (git worktrees, test configs, dummy assets meant for replacement/removal), ensuring zero orphaned debris or mystery side-effects.
9. **Built-in Continuous Improvement & Lessons Learned:** Native tracking of tasks, operational friction, and lessons learned within each crystal, with deterministic auditing for closing feedback loops.
10. **Deterministic, Zero-LLM Housekeeping:** High-speed Scala Native tooling for querying, auditing lessons learned, classifying crystal states (Active, Solid, Stale), cleaning transient leases, and managing lifecycles without incurring LLM latency or token costs.
11. **Zero-Learning-Curve Agent Interoperability:** Native agent skills and conversational utterances ("crystallize session", "cast crystal") enable AI tools to read and advance crystals out of the box.

---

## 3. System Architecture & Module Layout

Context Crystal is organized as a unified monorepo supporting specification, core data structures, agent extensions, and multi-tier tooling:

- `spec/`: The vendor-neutral JSON Schema specification, JSON-LD context definitions, and compliance test suite that any compliant tool/ecosystem participant must adhere to.
- `core/`: High-performance reference implementation of the data structures, DAG operations, transient lease registry, and pluggable storage repository SPI written in **Scala 3**, cross-compiled targeting **Scala Native**, **Scala JVM**, and **Scala.js**.
- `cli/`: Lightweight command-line interface for 1-shot interactions, deterministic audits (transient cleanup, lessons learned, unaddressed insights, archiving), validation, export, diffing, and context manipulation.
- `tui/`: Rich terminal user interface for interactive inspection, branching exploration, and local context navigation.
- `web/` & `viz/`: Enterprise-grade web UI and experimental **3D Context Lattice Visualizer** supporting customizable visual environments (celestial clouds, subterranean cave lattices, or archival library views) for spatial navigation of complex context graphs.
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

### B. Crystal Comms (Lock-Free Multi-Entity Mailbox Protocol)
To coordinate parallel entities without file collisions or distributed lock contention, crystals support a filesystem mailbox convention:
- `.ccrystals/_comms/<entity-id>/inbox/`: Directory where sending entities drop JSON-formatted signal envelopes.
- Entities announce their reachable coordinates (`inbox`, `rpc`, `url`) in their `Entity.endpoints` registry.
- Processing protocol: Receiving entity reads messages from its inbox, executes tasks, and atomically moves them to `processed/` or archives them with a timestamped receipt.

### C. Crystal Aging & Lifecycle States (Active, Solid, Stale)
- **Active:** Crystals actively receiving DAG transitions or open transient leases.
- **Solid:** Concluded or stable crystals untouched for a configurable retention threshold (e.g. 30 days) with all leases cleaned and lessons addressed.
- **Stale / Melting / GC:** Stale crystals with open friction or obsolete dendrites can be "melted" (summarized into compact milestone nodes) or garbage-collected into `.ccrystals/archive/`.

### D. Transient Resource Leases & Cleanup Gates
- **Explicit Lifecycle Bounds:** Temporary resources (e.g., git worktrees, debug flags, dummy media files) are registered with explicit disposal criteria (`revert_on_conclusion`, `delete_after_test`, `replace_in_final_cut`).
- **Zero Orphaned Scaffolding:** Fast CLI checks prevent premature crystal closure if transient resources remain un-reverted or un-cleaned.

### E. Lessons Learned & Closed-Loop Auditing
- **Actionable Post-Mortem:** At crystal conclusion, operational lessons can be reviewed and marked as "acted upon" (e.g., converted into a rule update, prompt adjustment, or skill improvement).
- **Deterministic Auditing:** Fast, non-LLM Scala Native scripts can scan all crystals to report unhandled lessons learned, track action trails, or enforce cleanup policies before archiving.

---

## 5. Industry Context & References

The architectural philosophy of Context Crystal aligns with emerging industry standards and principles in software engineering and AI systems:
- **Agent Context Development Lifecycle (ACDL):** Treating context as a versioned, testable, first-class software lifecycle artifact rather than ephemeral chat strings ([The New Stack: Agent Context Development Lifecycle](https://thenewstack.io/agent-context-development-lifecycle/)).
- **Pragmatic, Transparent AI Engineering:** Focusing AI tools on surgical, auditable problem solving rather than personality simulation ([Linus Torvalds on Pragmatic AI Bug Investigation](https://www.xda-developers.com/linus-used-ai-bug-llm-critics-face-choice/)).
- **Strict Provenance & Attribution:** Maintaining tamper-evident records of human vs machine contributions to ensure supply chain and open-source compliance ([Debian Linux LLM Policy & Attribution](https://www.helpnetsecurity.com/2026/08/31/debian-linux-llm-policy/)).

---

## 6. Boundaries & Explicit Non-Goals

To maintain high focus and interoperability, Context Crystal explicitly excludes:
- **Planning & Methodology Enforcement:** Does not mandate or enforce specific planning schemas (e.g., Conductor, OpenSpec, SpecKit); it serves as the underlying context and state interchange format for all of them.
- **Long-Term Memory Search & Storage:** Vector databases, embedding indexes, semantic search engines, and knowledge vaults are considered external consumer/producer tools.
- **Agent Runtime & Orchestration:** Model switching loops, autonomous execution loops, and scheduler daemons are the responsibility of the host engine/harness.
- **Direct LLM Execution:** The core specification and schema do not make direct LLM API calls or enforce prompt templating formats.
