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
- **Track 19 (`distribution_packaging_and_installer_20260925`):** Complete `[x]` (Distribution, Packaging & Native CLI Installer: hardened `install.sh` bootstrap with `.tar.gz` extraction, `SHA256SUMS` verification, argument parsing, atomic inode swaps, GitHub Actions release matrix with Thin LTO binaries for Linux & macOS, official Homebrew formula `Formula/ccrystal.rb`, and Craftsmanship / Human-in-the-Loop manifesto).
- **Binary Location:** `./cli/native/target/scala-3.9.0/ccrystal-cli` (installed in `~/.local/bin/ccrystal` with Thin LTO)
- **Codeberg Remote:** Clean, up-to-date with linear Conventional Commits history and Git Notes.

---

## 2. Next Track: Cave Query, Search & Temporal Navigation (`cave_search_and_temporal_query`)

- **Objective:** Introduce direct, deterministic cave search and temporal query capabilities (`ccrystal search` / `ccrystal find` CLI subcommands and MCP `crystal_search` / extended `crystal_list`) to answer lifecycle questions (initial, in-flight, and retrospective) without paginating or dumping raw JSON envelopes.
- **Priority:** Immediate next step (High impact, eliminates multi-turn agent scanning friction, manual python scripting, and token burning).
- **Core Scope & Lifecycle Question Coverage:**
  - **Temporal & Activity Queries:** `--since <iso-date|relative>`, `--until <iso-date|relative>`, `--yesterday`, `--today` (e.g., "what crystals did we work on yesterday?"). Filters crystals based on `updatedAt`, `createdAt`, or recent node timestamps in the DAG.
  - **Inception & Discovery Queries:** `--query / -q <text>` (matching title, intent, node summaries, or lessons), `--author <id>`, `--tag <k=v>` (e.g., "has this problem/feature been attempted or explored before?").
  - **In-Flight & Resource Queries:** `--has-active-leases`, `--touching-path <path>` (e.g., "which crystal is leasing worktree X?"), `--has-open-tasks`, `--status <status>` (e.g., "what crystals are currently active or holding open resources?").
  - **Retrospective & Hygiene Queries:** `--has-lessons`, `--lesson-query <text>`, `--artifact <id|name>`, `--include-archived`, `--aging <active|solid|stale>` (e.g., "what lessons were recorded about X?", "why was crystal Y abandoned?").
- **Architectural Tenets & Strategy:**
  - **Boundary Separation (Navigational Compass vs Long-Term Memory):** Not competing with long-term memory or semantic vector databases (e.g. Engram, RAG). Context Crystal's sweet spot is fast, deterministic, zero-hallucination operational metadata over the cave (`.ccrystals/` and `.ccrystals/archive/`). The filesystem structure, filenames, and typed envelope conventions are completely sufficient for this volume of data.
  - **Focused Pragmatic Flags vs Query DSL:** Prioritize focused, compile-time verified Decline flags and structured MCP tool arguments. Defer complex query languages/DSLs to avoid LLM hallucination loops and syntax trial-and-error ("token burning"); if a query DSL is ever explored, keep it deferred or locked behind an `--experimental` flag.

---

## 3. Backlog & Future Track Roadmap

- **Subsequent Track: Crystal Comms & Lock-Free Multi-Entity Mailboxes:**
  - **Objective:** Filesystem-based inbox/outbox signaling (`.ccrystals/_comms/<entity-id>/inbox/`) and `Entity.endpoints` resolution for multi-agent coordination without lock contention.
  - **Priority:** High impact, establishes multi-entity communication channels for coordinated workflows; scheduled directly after Cave Query & Search.
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
- **Maintenance / Chore (Completed / Locked):** Upgraded to Scala 3.9.0 LTS and sbt-scala-native 0.5.12 with zero warnings. sbt 2.0.8 compatibility locked at sbt 1.10.7 pending community sbt 2.x cross-publishing of required plugins (sbt-crossproject, sbt-updates, scalafix, scalafmt).
