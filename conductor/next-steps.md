# Next Session Handoff: Context Crystal

> [!IMPORTANT]
> **Conductor Workflow Active:** This repository strictly follows the **Conductor** Spec-Driven Development (SDD) workflow (`conductor/workflow.md`, `conductor/tracks.md`). Always verify and use Conductor skills (`conductor-status`, `conductor-new-track`, `conductor-implement`, `conductor-review`) when starting sessions.

## 1. Project Status Overview

- **Track 1 (`core_foundation_20260828`):** Complete `[x]` (JSON Schema v1, sbt cross-project build, models, codecs, DAG, auditor).
- **Track 2 (`cli_fs_engine_20260829`):** Complete `[x]` (Native CLI, decline parser, FsCrystalStore, batch execution, `cast` / `hydrate`, and `refresh`).
- **Track 3 (`cave_entities_authorship_20260830`):** Complete `[x]` (Cave entity registry `.ccrystals/entities.json`, `AuthorshipMode`, deterministic agent collision suffix resolution, compact block attribution, extensible `metadata` maps, CLI entity commands).
- **Track 4 (`capture_fidelity_20260906`):** Complete `[x]` (Data provenance, `CaptureFidelity` enum on `DAGNode`, CLI `--fidelity`).
- **Track 5 (`crystal_cleavage_and_slicing_20260906`):** Complete `[x]` (Semantic anchors on `DAGNode`, `ccrystal slice`, fragment extraction, fork to child crystal).
- **Track 6 (`agent_skill_interaction_loop_20260906`):** Complete `[x]` (Canonical agent skill, autonomous bootstrap, decoupled store `CCRYSTAL_STORE`, explicit event timestamps, adapters for Antigravity, Claude Code, and Cursor).
- **Track 7 (`destructive_lifecycle_cleanup_20260906`):** Complete `[x]` (Destructive operations, `ccrystal delete`, `ccrystal entity deregister`, cascade cleanup, deletion impact preview, interactive y/N confirmation, --force bypass, batch safety, and PII protection guidelines).
- **Track 8 (`native_mcp_server_engine_20260906`):** Complete `[x]` (Native stdio JSON-RPC 2.0 MCP server `ccrystal mcp`, decoupled `McpHandler` & `McpTransport`, tools, dynamic state/DAG resources, prompts `hydrate_context` & `triage_cave`, client configs for Claude/Cursor/Zed, and local registration).
- **Track 9 (`selective_context_hydration_20260907`):** Complete `[x]` (Selective context hydration, beam shaping with `--from`, `--to`, `--tail`, sub-DAG slice reconstitution, and prompt rendering).
- **Track 10 (`cli_ai_guidance_and_pii_conventions_20260908`):** Complete `[x]` (CLI AI guidance flag `--for-ai`, PII protection invariants, canonical entity naming schemes).
- **Track 11 (`collaborator_readiness_20260912`):** Complete `[x]` (Toolchain, hardware baselines, dual-key cryptographic security, Linux x86_64, macOS Apple Silicon, strict equality clues, and CI matrix).
- **Track 16 (`artifact_world_state_ontology_20260913`):** Complete `[x]` (Artifact & world-state ontology, virtual & physical substrates, roles, locations, directional DAG links, Cave Artifact Registry, CLI commands, native MCP server integration, and beam projection).
- **Track 17 (`universal_agent_onboarding_20260920`):** Complete `[x]` (Universal Agent Runtime Matrix: `ccrystal agent doctor` non-destructive diagnostic evaluator and `ccrystal agent install` defensive auto-configuration engine supporting Google Antigravity, Claude Code, Claude Desktop, Cursor, Windsurf, and Zed with automatic `.ccrystal.bak` creation and rollback instructions, JSONC comment support, and native Thin LTO release binary).
- **Track 18 (`store_hardening_and_concurrency_20260920`):** Complete `[x]` (Storage Isolation, Atomic Swaps & Optimistic Concurrency Control: zero-torn-read inode engine via temporary file staging and POSIX atomic renames, pure 128-bit `ContentFingerprint` CAS rebase retry loop on `CrystalStore.update(id)(f)`, defensive drift detection in `AgentInstaller`, and ephemeral `.lock` mutex serialization with PID tracking and 5s staleness auto-expiration).
- **Track 20 (`cave_search_and_temporal_query_20260930`):** Complete `[x]` (Cave Query, Search & Temporal Navigation: multi-dimensional `SearchEngine` across metadata, DAG nodes, lessons, artifacts, zero-dependency portable `CivilDate` Gregorian calendar epoch math, Decline CLI `ccrystal search` with defensive pagination and sorting, consolidated MCP `crystal_search` replacing `crystal_list`, and full multi-platform test suites).
- **Track 21 (`cave_stats_and_telemetry_20261002`):** Complete `[x]` (Cave Statistics, Storage Metrics & Token Savings: quantitative lifecycle metrics, genesis/recent extents, disk usage across active and cold storage, per-crystal footprint ranking, reference prompt token savings estimation, Decline CLI `ccrystal stats`, native MCP `crystal_stats` tool, and multi-platform verification of operational health metrics).
- **Track 22 (`cold_storage_purge_and_lifecycle_20261003`):** Complete `[x]` (Unified `ccrystal prune`, MCP `crystal_prune`, deletion symmetry, companion artifact unlinking, and cold storage retention triage).
- **Track 23 (`crystal_connections_and_lattice_bonds_20261003`):** Complete `[x]` (Cross-crystal connections, typed lattice bonds, cycle detector, bounded hydration context beams, `ccrystal connect/disconnect`, `ccrystal://{id}/bonds`).
- **Track 26 (`golden_triad_agent_skill_distribution_20261003`):** Complete `[x]` (Golden Triad onboarding, `ccrystal agent doctor` readiness matrix, embedded `CanonicalSkill`, `ccrystal agent install` skill auto-distribution, drift diagnostics `SkillStatus.Outdated`, symlink and workspace support).
- **Track 27 (`standardized_modern_platform_runtimes_20261003`):** Complete `[x]` (Standardized `java.time` / `scala-java-time` and `os-lib 0.11.8` across Native, JVM, and JS targets).
- **Milestone v1.2.0 (Twinning):** Released / in deployment matrix.
- **Codeberg Remote Sync:** Note to sync `origin` (`ssh://git@codeberg.org/oswaldo/context-crystal.git`) once the forge recovers from temporary degradation (`git push origin main && git push origin v1.2.0`).
- **Binary Location:** `./cli/native/target/scala-3.9.0/ccrystal-cli` (installed in `~/.local/bin/ccrystal` with Thin LTO)

---

## 2. Next Track: Modular Spec Extensions Architecture & Crystal Comms (`spec_extensions_and_crystal_comms`)

- **Objective:** Keep the core Context Crystal spec minimal and sovereign by establishing a formal modular extension architecture (companion manifests and namespaced storage `.ccrystals/<id>/extensions/`). Implement **Crystal Comms** (lock-free filesystem inboxes/outboxes and multi-agent coordination with human steersman oversight) as the premier reference extension module.
- **Priority:** High impact; unlocks multi-agent swarms and asynchronous peer coordination on top of the context lattice.

---

## 3. Backlog & Future Track Roadmap

- **Track 24: Modular Spec Extensions Architecture & Crystal Comms (`spec_extensions_and_crystal_comms`):**
  - **Objective:** Companion manifests and namespaced storage `.ccrystals/<id>/extensions/`. Lock-free filesystem inboxes/outboxes and multi-agent coordination.
- **Track 25: Native MCP Server Consolidation, TDQS Optimization & Tool Quality:**
  - **Objective:** Refactor the MCP server tool surface into an ergonomic, consolidated facade (e.g. 6-8 cohesive tools: `crystal_manage`, `crystal_hydrate`, `crystal_transition`, `crystal_artifact`, `crystal_lesson`, `crystal_lifecycle`) to eliminate prompt context bloat and agent routing indecision.
  - **Naming & Completeness:** Enforce strict, uniform `verb_noun` naming conventions, add dedicated first-class lesson management tools (`crystal_lesson` to record, list, and resolve open lessons), and provide full artifact lifecycle support (updating metadata and unregistering artifacts) to achieve a verified Grade A (4.5+/5.0) on Glama TDQS.
- **Track 28: Crystal Archive Import/Export Bundles (`crystal_archive_import_export_bundles`):**
  - **Objective:** Create a portable, compressed bundling feature (`.crystal.zip` or `<name>-<iso-timestamp>.crystal.zip`) that packages complete crystal state (JSON schema files, DAG nodes, artifacts, lessons learned, and metadata) from an individual crystal or a filtered search query.
  - **Lattice Subgraph Traversal:** Support depth-bounded connection following (`--follow-connections --depth <N>`) to bundle entire interconnected subgraphs without breaking cross-crystal referential integrity.
  - **Import & Relocation:** Provide `ccrystal import <bundle.zip>` and companion MCP tools with conflict detection and namespace remapping.
- **Track 29: Session Lifecycle & Context Compaction Events (`session_lifecycle_and_compaction_events`):**
  - **Objective:** Capture harness meta-events (such as context window compactions, session pauses, and transcript truncations) as first-class operational provenance without breaking existing v1 schema compatibility.
  - **Immediate Idiom (Zero Spec Drift):** Encoded as a `checkpoint` node kind with `actorId: sys_context_window` (or system handle) and extensible `metadata: {"event_type": "context_compaction", "compaction_count": "<N>"}`.
  - **Future Formalization:** Evaluate extending `DAGNodeKind` enum with an explicit `session_boundary` or `context_event` kind, accompanied by CLI flag `ccrystal checkpoint --event context_compaction` or MCP helper for anti-amnesia provenance and audit trails.
- **Track 30: Interactive Showcase Demo Tab: Context Preservation vs. Agent Amnesia (`interactive_showcase_demo_tab`):**
  - **Objective:** Build an engaging, interactive "Demo" tab in the public documentation portal (`context-crystal-gh-pages`) demonstrating the real-world value proposition of Context Crystal in a humorous and vivid side-by-side comparison.
  - **Split-Screen Layout & Agent Look-and-Feel:**
    - Two synchronized agent terminal/chat panes mimicking realistic IDE agent runs tackling an identical multi-step coding task.
    - **Top Progress Bars:** Dynamic progress indicators tracking state across time.
  - **Left Pane (With Context Crystal):**
    - Smooth, structured progress bar moving from solid blue to solid green over ~15 seconds.
    - Agent hydrates context beams (`ccrystal cast`), marks task progress, references architectural invariants, and reaches clean completion with zero drift.
  - **Right Pane (Without Context Crystal / Raw Chat History):**
    - Progress bar moves forward initially, but around ~10-15s, context window compaction hits.
    - Amnesia strikes: The agent repeats an already-answered question or modifies a file it was specifically instructed not to touch.
    - Frustrated user short prompt appears ("I told you 2 messages ago not to touch X!").
    - Progress bar stalls, fades to warning red, and moves backwards.
    - Repeated clarification loops and friction before a clumsy arrival at the solution in ~30s.
  - **Play / Pause / Reset Controls:** Allows visitors to replay the comparison at normal or 2x speed.
- **Track 14: Strict Functional Quality & Invariant Hardening (Disallow var, null, throws):**
  - Compiler warning configurations (`-Werror`, `-Wnonunit-statement`), scalafix lint rules, and elimination of mutable state / null / throw across `core` and `cli`.
- **Track 15: Context Armor, Secret Guards & Threat Modeling (Betterleaks Integration & Injection Defenses):**
  - **Secret Sanitization & Betterleaks Guard:** Prevent sensitive credentials, API keys, passwords, and tokens from leaking into immutable crystal DAGs and companion stores.
  - **Zero-Dependency In-Flight Redaction:** Automatic scrubbing and redaction of common authorization headers (`Bearer <token>`), AWS keys, PEM certificates.
  - **Prompt Injection Defense & Structural Sandboxing:** Structural sandboxing, delimiter escaping for untrusted summaries and tool outputs.
- **Track 11: Experimental Context Lattice Visualizer & Interface Accessibility:**
  - Universal accessibility (WCAG 2.1 AA/AAA, screen-reader friendly Orca/VoiceOver).
- **Post-MLP Portal Search & Extended Docs Engine:** Pagefind WASM / Typelevel Laika search for documentation.
- **Track 20: Local Developer Ergonomics, Zero-Friction Git Hooks & Pre-Push Quality Guards:** Automated git hooks for pre-commit and pre-push.
- **Track 21: CLI Version Flag & BuildInfo Integration (`ccrystal --version / -v`).**
