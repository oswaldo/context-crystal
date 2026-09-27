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

## 2. Next Track: Crystal Comms & Lock-Free Multi-Entity Mailboxes

- **Objective:** Filesystem-based inbox/outbox signaling (`.ccrystals/_comms/<entity-id>/inbox/`) and `Entity.endpoints` resolution for multi-agent coordination without lock contention.
- **Priority:** High impact, establishes multi-entity communication channels for coordinated workflows.

---

## 4. Backlog & Future Track Roadmap

- **Track 9: Crystal Comms & Lock-Free Multi-Entity Mailboxes:**
  - Filesystem-based inbox/outbox signaling (`.ccrystals/_comms/<entity-id>/inbox/`) and `Entity.endpoints` resolution for multi-agent coordination without lock contention.
- **Track 14: Strict Functional Quality & Invariant Hardening (Disallow var, null, throws):**
  - Compiler warning configurations (`-Werror`, `-Wnonunit-statement`), scalafix lint rules, and elimination of mutable state / null / throw across `core` and `cli`.
- **Track 15: Context Armor, Secret Guards & Threat Modeling (Betterleaks Integration & Injection Defenses):**
  - **Secret Sanitization & Betterleaks Guard:** Prevent sensitive credentials, API keys, passwords, and tokens from leaking into immutable crystal DAGs and companion stores. Support an optional pre-crystallization validation hook (`ccrystal config hook.pre-transition "betterleaks --no-git ..."` or native BPE/regex scanning) with configurable enforcement policies (`--secret-policy=warn|block|redact`).
  - **Zero-Dependency In-Flight Redaction:** Automatic scrubbing and redaction of common authorization headers (e.g. `Bearer <token>`), AWS access keys, and PEM certificates from intercepted `tool_execution` summaries and checkpoints before DAG insertion.
  - **Prompt Injection Defense & Structural Sandboxing:** Structural sandboxing, delimiter escaping for untrusted node summaries and tool outputs, untrusted data provenance stamping, and cryptographic verification.
- **Track 12: Bidirectional Schema Tooling & Code Generation Strategy:**
  - Automated, zero-reflection code generation or code-first schema derivation (Smithy4s / Tapir).
- **Track 11: Experimental 3D Context Lattice Visualizer:**
  - Interactive Three.js/WebGL spatial navigation supporting thematic views (celestial clouds, subterranean cave lattices, archival library books).
- **Post-MLP Portal Search & Extended Docs Engine:**
  - Client-side search engines (Pagefind WASM or Typelevel Laika) for the public documentation portal.
- **Track 20: Local Developer Ergonomics, Zero-Friction Git Hooks & Pre-Push Quality Guards:**
  - Automated setup and configuration of repository Git hooks (`.githooks/` configured via `core.hooksPath`).
  - Fast staged-file pre-commit verification: incremental `scalafmt`, `scalafix`, `markdownlint`, and `shellcheck`.
  - Robust pre-push guard: prevents pushing to `main` or pushing release tags (`v*.*.*`) if uncommitted changes, formatting deviations, or failing tests exist locally, entirely eliminating the remote "push-and-fail" cycle.
  - Secret protection hook: intercepts accidental credentials, API tokens, or private keys before staging into git.
- **Maintenance / Chore (Completed / Locked):** Upgraded to Scala 3.9.0 LTS and sbt-scala-native 0.5.12 with zero warnings. sbt 2.0.8 compatibility locked at sbt 1.10.7 pending community sbt 2.x cross-publishing of required plugins (sbt-crossproject, sbt-updates, scalafix, scalafmt).
