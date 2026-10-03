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
- **Track 21 (`cave_stats_and_telemetry_20261002`):** Complete `[x]` (Cave Statistics, Storage Metrics & Token Savings: quantitative lifecycle metrics, genesis/recent extents, disk usage across active and cold storage, per-crystal footprint ranking, reference prompt token savings estimation, Decline CLI `ccrystal stats`, native MCP `crystal_stats` tool, and multi-platform verification).
- **Binary Location:** `./cli/native/target/scala-3.9.0/ccrystal-cli` (installed in `~/.local/bin/ccrystal` with Thin LTO)
- **Codeberg Remote:** Clean, up-to-date with linear Conventional Commits history and Git Notes.

---

## 2. Next Track: Cold Storage Purge, Deletion Symmetry & Lifecycle Completeness (`cold_storage_purge_and_lifecycle`)

- **Objective:** Seal the single-crystal lifecycle by closing the asymmetric gap between active and cold storage deletion, preventing monotonic cave bloat and enabling clean referential integrity before introducing cross-crystal bonds:
  - **Cold Storage Deletion Symmetry:** Ensure `ccrystal delete <id>` seamlessly handles crystals located in `.ccrystals/archive/` as well as active storage, cascade-deregistering orphaned entities and cleaning artifact registries consistently.
  - **Batch & Retention Purging:** Introduce `ccrystal purge <id>` with retention criteria (`--all`, `--older-than <duration>` e.g. `30d`, `90d`, and `--dry-run`), allowing human operators and automated cave hygiene to safely prune obsolete cold storage.
  - **Native MCP Tooling (`crystal_purge`):** Provide a dedicated MCP tool with dry-run/preview impact reporting for AI agents conducting cave maintenance.
  - **Triage Recommendation Integration:** Teach `ccrystal triage` / `crystal_triage` to identify stale archived crystals past retention thresholds as candidates for permanent purge.
- **Priority:** Immediate next step (High impact; seals single-crystal lifecycle before multi-crystal bonds and spec extensions to eliminate cascading rework).

---

## 3. Backlog & Future Track Roadmap

- **Subsequent Track (Track 23): Cross-Crystal Connections, Lattice Bonds & Defensive Hydration Paging (`crystal_connections_and_lattice_bonds`):**
  - **Objective:** Introduce first-class structural relationships between crystals (Spec v1.1) and defensive hydration controls to prevent context blowup:
    - **Typed Lattice Bonds:** Support typed cross-crystal links (`relates_to`, `depends_on`, `blocks`, `supersedes`, `references`) connecting distinct operational goals (e.g. linking a release crystal to an external registration/distribution crystal).
    - **Lifecycle Referential Integrity:** Gracefully handle bonded crystal archiving and purge with cascade checks or warnings (`on_purge` warnings when dependent bonds exist).
    - **CLI & MCP Ergonomics:** Introduce `ccrystal connect <source> <target> --rel <kind>`, `ccrystal disconnect`, `ccrystal connections <id>`, and companion MCP tools (`crystal_connect`, `crystal_disconnect`).
    - **Lattice Beam Projection & Quick-Peeking:** Automatically project connected crystals into `ccrystal hydrate` with status and open task summaries, enabling agents to peek across boundaries without context loss.
    - **Defensive Hydration Paging & Safe Defaults:** Convention-over-configuration limits on hydration beams (default `--tail 10`, max connection depth 1, filtering completed tasks) to protect against unhygienic cave bloat, with optional external configuration/profile overrides.
  - **Priority:** Scheduled directly after Cold Storage Purge.
- **Subsequent Track (Track 24): Modular Spec Extensions Architecture & Crystal Comms (`spec_extensions_and_crystal_comms`):**
  - **Objective:** Keep the core Context Crystal spec minimal and sovereign by establishing a formal modular extension architecture (companion manifests and namespaced storage `.ccrystals/<id>/extensions/`). Implement **Crystal Comms** (lock-free filesystem inboxes/outboxes and multi-agent coordination with human steersman oversight) as the premier reference extension module.
  - **Priority:** Scheduled after Cross-Crystal Connections.
- **Track 25: Native MCP Server Consolidation, TDQS Optimization & Tool Quality:**
  - **Objective:** Refactor the MCP server tool surface into an ergonomic, consolidated facade (e.g. 6-8 cohesive tools: `crystal_manage`, `crystal_hydrate`, `crystal_transition`, `crystal_artifact`, `crystal_lesson`, `crystal_lifecycle`) to eliminate prompt context bloat and agent routing indecision.
  - **Naming & Completeness:** Enforce strict, uniform `verb_noun` naming conventions, add dedicated first-class lesson management tools (`crystal_lesson` to record, list, and resolve open lessons), and provide full artifact lifecycle support (updating metadata and unregistering artifacts) to achieve a verified Grade A (4.5+/5.0) on Glama TDQS.
- **Track 26: Golden Triad Onboarding: Agent Skill Auto-Distribution & Doctor Evolution (`golden_triad_agent_skill_distribution`):**
  - **Objective:** Bridge the gap between raw tool access and agent reflexes by completing the "Golden Triad" (Runtime CLI + MCP Server + Agent Skill):
    - **Skill Diagnostic in `ccrystal agent doctor`:** Inspect whether `.agents/skills/context-crystal/SKILL.md` or harness-specific skill directories (`~/.gemini/antigravity-cli/skills/`, `~/.claude/skills/`, `.cursorrules`) have the Context Crystal skill equipped, providing actionable tips if an agent has MCP tools configured without cognitive reflexes.
    - **Auto-Installation in `ccrystal agent install`:** Expand `ccrystal agent install` with automatic skill distribution (`--with-skill`, enabled by default) to install and link the authoritative `SKILL.md` into target agent workspaces.
    - **Showcase & Registry Documentation:** Update `README.md` and the web documentation portal with the "Golden Triad" setup guide, educating users and autonomous agents on why equipping the skill delivers zero-prompt autonomy.
- **Track 14: Strict Functional Quality & Invariant Hardening (Disallow var, null, throws):**
  - Compiler warning configurations (`-Werror`, `-Wnonunit-statement`), scalafix lint rules, and elimination of mutable state / null / throw across `core` and `cli`.
- **Track 15: Context Armor, Secret Guards & Threat Modeling (Betterleaks Integration & Injection Defenses):**
  - **Secret Sanitization & Betterleaks Guard:** Prevent sensitive credentials, API keys, passwords, and tokens from leaking into immutable crystal DAGs and companion stores. Support an optional pre-crystallization validation hook (`ccrystal config hook.pre-transition "betterleaks --no-git ..."` or native BPE/regex scanning) with configurable enforcement policies (`--secret-policy=warn|block|redact`).
  - **Zero-Dependency In-Flight Redaction:** Automatic scrubbing and redaction of common authorization headers (e.g. `Bearer <token>`), AWS access keys, and PEM certificates from intercepted `tool_execution` summaries and checkpoints before DAG insertion.
  - **Prompt Injection Defense & Structural Sandboxing:** Structural sandboxing, delimiter escaping for untrusted node summaries and tool outputs, untrusted data provenance stamping, and cryptographic verification.
- **Track 12: Bidirectional Schema Tooling & Code Generation Strategy:**
  - Automated, zero-reflection code generation or code-first schema derivation (Smithy4s / Tapir).
- **Track 11: Experimental Context Lattice Visualizer & Interface Accessibility:**
  - **Pre-Implementation Discussion Gate:** Evaluate whether a graphical or terminal visualizer is genuinely necessary, or if the sovereign CLI + MCP + conversational agent interaction model renders visual UIs redundant (or relevant only for enterprise oversight).
  - **Universal Accessibility (Visually Impaired & Screen-Reader First):** Any visualizer or web portal must achieve strict WCAG 2.1 AA/AAA compliance. Ensure full parity for visually impaired collaborators via screen reader support (Orca / VoiceOver), semantic ARIA tree structures, keyboard-only traversal, and high-contrast modes.
  - **Conversational & Auditory Briefing Streams:** Design context beams and DAG hydrations to be inherently screen-reader and voice-friendly, enabling natural auditory briefings ("Morning Context Cast") for developers who prefer voice/audio interaction over typing.

- **Post-MLP Portal Search & Extended Docs Engine:**
  - Client-side search engines (Pagefind WASM or Typelevel Laika) for the public documentation portal.
- **Track 20: Local Developer Ergonomics, Zero-Friction Git Hooks & Pre-Push Quality Guards:**
  - Automated setup and configuration of repository Git hooks (`.githooks/` configured via `core.hooksPath`).
  - Fast staged-file pre-commit verification: incremental `scalafmt`, `scalafix`, `markdownlint`, and `shellcheck`.
  - Robust pre-push guard: prevents pushing to `main` or pushing release tags (`v*.*.*`) if uncommitted changes, formatting deviations, or failing tests exist locally, entirely eliminating the remote "push-and-fail" cycle.
  - Secret protection hook: intercepts accidental credentials, API tokens, or private keys before staging into git.
- **Track 21: CLI Version Flag & BuildInfo Integration (`ccrystal --version / -v`):**
  - Integrate compile-time build constants / `sbt-buildinfo` into `cli` module.
  - Support top-level `ccrystal -v` and `ccrystal --version` emitting semantic release version, commit SHA, build timestamp, and target platform architecture (`x86_64-pc-linux`, `aarch64-apple-darwin`, etc.).
  - Add Decline root parser support and automated CLI integration test suite.
- **Track 27: Standardized Modern Platform Runtimes (Scala Toolkit, os-lib & java.time / scala-java-time Migration):**
  - **Temporal Modernization:** Migrate in-house `CivilDate` Gregorian epoch math and temporal parsing to standard `java.time` / `io.github.cquiroz::scala-java-time` across Native, JVM, and JS targets. Eliminate custom civil date algorithms in favor of standard `Instant`, `LocalDate`, and `Duration`.
  - **Filesystem & Process Execution Modernization:** Adopt the official **Scala Toolkit** (`org.scala-lang::toolkit` / `os-lib`), replacing low-level Java `java.nio.file.*` imports and bespoke POSIX/JVM process shims (`ProcessPlatform.scala`) with idiomatic, cross-platform `os-lib` APIs (`os.Path`, `os.read`, `os.write`, `os.proc`, atomic filesystem operations) fully unified across JVM and Scala Native.
- **Maintenance / Chore (Completed / Locked):** Upgraded to Scala 3.9.0 LTS and sbt-scala-native 0.5.12 with zero warnings. sbt 2.0.8 compatibility locked at sbt 1.10.7 pending community sbt 2.x cross-publishing of required plugins (sbt-crossproject, sbt-updates, scalafix, scalafmt).

