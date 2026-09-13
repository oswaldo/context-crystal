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
- **Binary Location:** `./cli/native/target/scala-3.9.0/ccrystal-cli` (installed in `~/.local/bin/ccrystal` with Thin LTO)
- **Codeberg Remote:** Clean, up-to-date with linear Conventional Commits history and Git Notes.

---

## 2. Immediate Next Agenda: Public Documentation Website & Launch Preparation

The next candidate milestone is **Track 8: Public Documentation Website, Interactive Showcase & Launch Preparation**:

1. **Context & Vision:** Build the official public portal, documentation site, and launchpad for Context Crystal (deployed via GitHub Pages / Codeberg Pages).
2. **Components:**
   - Static docs framework (VitePress / Starlight) with custom branding and interactive architecture diagrams.
   - Interactive terminal demos (vhs/asciinema) demonstrating zero-token speed, cleavage/slicing, and provenance audit trails.
   - Public developer guide, schema explorer (`spec/v1/context-crystal.json`), and quickstart installer guide.

---

## 3. Backlog & Future Track Roadmap

- **Track 8: Public Documentation Website, Interactive Showcase & Launch Preparation:**
  - *Context & Vision:* Build the official public portal, documentation site, and launchpad for Context Crystal (deployed via GitHub Pages / Codeberg Pages).
  - *Components:*
    - Static docs framework (e.g., VitePress or Starlight) with custom branding, clear value proposition, and interactive architecture diagrams.
    - Interactive terminal demos (vhs/asciinema) demonstrating zero-token speed, cleavage/slicing, and provenance audit trails.
    - Public developer guide, schema explorer (`spec/v1/context-crystal.json`), and quickstart installer guide.
    - Strategic launch coordination (aligned with `tmp/strategic-analysis.md`).
- **Track 9: Crystal Comms & Lock-Free Multi-Entity Mailboxes:** Filesystem-based inbox/outbox signaling (`.ccrystals/_comms/<entity-id>/inbox/`) and `Entity.endpoints` resolution.
- **Track 10: Lifecycle Housekeeping, Melting & Archiving:** CLI commands for state classification (`--solid`, `--stale`), sub-DAG summarization (`ccrystal melt`), and garbage collection (`ccrystal archive`).
- **Track 11: Experimental 3D Context Lattice Visualizer:** Interactive Three.js/WebGL spatial navigation supporting thematic views (celestial clouds, subterranean cave lattices, archival library books).
- **Track 12: Bidirectional Schema Tooling & Code Generation Strategy:**
  - *Context & Decision:* `spec/v1/context-crystal.json` is our canonical interchange specification. To avoid brittle reflection in Scala Native and maintain our pure-functional invariants (`derives CanEqual`, immutability), we retain hand-crafted Scala 3 ADTs with strict contract test validation in the near term. This dedicated track will explore automated, zero-reflection code generation or code-first schema derivation (e.g. Smithy4s / Tapir).
- **Track 13: Distribution, Packaging & Native CLI Installer:**
  - Standardized installation script (`curl -fsSL ... | sh`), release binary packaging for multi-architecture targets (Linux x86_64, macOS aarch64), and Homebrew/Nix packaging for frictionless global CLI adoption.
- **Track 14: Strict Functional Quality & Invariant Hardening (Disallow var, null, throws):**
  - *Context & Vision:* Improve code quality and eliminate runtime failure classes across `core` and `cli` by strictly disallowing mutable state (`var`), nullable types (`null`), and exceptions (`throw` / `throws`).
  - *Refactoring & Tooling:* Introduce scalafix lint rules and compiler warning configurations (e.g., `-Werror`, `-Wnonunit-statement`, strict `Option`/`Either`/ADT return types) to enforce total pure-functional invariants and refactor any lingering mutable/nullable test scaffolding.
- **Track 15: Context Armor & Threat Modeling (Prompt Injection Defenses & Structural Sandboxing):**
  - *Context & Threat Model:* As LLM applications face indirect prompt injection, supply chain tampering, and delimiter hijacking through untrusted tool outputs or repository artifacts, Context Crystal serves as an essential line of defense for context integrity.
  - *Mitigations & Architecture:*
    - Structural Sandboxing & Delimiter Escaping: Wrap untrusted node summaries and tool execution outputs in strict data boundaries with delimiter neutralization, preventing synthetic section injection (e.g. escaping fake `=== END CAST ===` or prompt override tokens).
    - Untrusted Data Provenance Stamping: Explicitly annotate tool outputs and external artifacts as untrusted data boundaries in prompt beams.
    - Cryptographic Verification: Leverage `AuthorshipMode.Signed` to verify authorized human/agent origins and prevent node spoofing.
    - Zero-Reflection Codec Hardening: Strict Circe AST validation preventing deserialization and malformed JSON bombs.
- **Track 16: Artifact & World-State Ontology (Virtual & Physical Substrates):**
  - *Context & Vision:* Elevate artifacts, physical environments, and ambient invariants to first-class citizens alongside Entities and DAG transitions. Bridges the gap between conversational deliberation and physical/virtual reality.
  - *Components:*
    - **Schema & Core Models (`spec/v1.1`):** `ArtifactSubstrate` (`Virtual`, `Physical`), `ArtifactRole` (`Target`, `Instrument`, `Precondition`), `PhysicalLocation` (civic address, RFC 5870 `geo:`, room/bench coordinates), optional standard `uri`.
    - **Causal DAG Links:** Directional artifact tracking on `DAGNode` (`inputArtifactIds`, `outputArtifactIds`, `preconditionArtifactIds`).
    - **Cave Artifact Registry (`.ccrystals/artifacts.json` & `crystal://artifacts`):** Long-lived shared assets (lab environments, tooling profiles, canonical repositories).
    - **Beam Shaping Integration:** Projecting active deliverables, available instruments, and environmental invariants directly into the prompt beam during context hydration.
- **Maintenance / Chore (Completed / Locked):** Upgraded to Scala 3.9.0 LTS and sbt-scala-native 0.5.12 with zero warnings. sbt 2.0.8 compatibility locked at sbt 1.10.7 pending community sbt 2.x cross-publishing of required plugins (sbt-crossproject, sbt-updates, scalafix, scalafmt).
