# Next Session Handoff: Context Crystal

> [!IMPORTANT]
> **Conductor Workflow Active:** This repository strictly follows the **Conductor** Spec-Driven Development (SDD) workflow (`conductor/workflow.md`, `conductor/tracks.md`). Always verify and use Conductor skills (`conductor-status`, `conductor-new-track`, `conductor-implement`, `conductor-review`) when starting sessions.

## 1. Project Status Overview
- **Track 1 (`core_foundation_20260828`):** Complete `[x]` (JSON Schema v1, sbt cross-project build, models, codecs, DAG, auditor).
- **Track 2 (`cli_fs_engine_20260829`):** Complete `[x]` (Native CLI, decline parser, FsCrystalStore, batch execution, `cast` / `hydrate`, and `refresh`).
- **Track 3 (`cave_entities_authorship_20260830`):** Complete `[x]` (Cave entity registry `.ccrystals/entities.json`, `AuthorshipMode`, deterministic agent collision suffix resolution, compact block attribution, extensible `metadata` maps, CLI entity commands).
- **Binary Location:** `./cli/native/target/scala-3.3.4/ccrystal-cli`
- **Codeberg Remote:** Ready to push with conventional commits and Git Notes.

---

## 2. Immediate Next Agenda: Track 4 (Agent Skill & Interaction Loop)
The next milestone is to build the **Agent Skill** (`skills/context-crystal/SKILL.md` + Antigravity/Claude/Cursor adapters) to unlock:
1. **Verbs & Utterances:**
   - `"Crystallize this context"` / `"crystalise session"`: Snapshot live session into `.ccrystals/<name>/` with agent entity identity.
   - `"Resume work on last task"` / `"cast crystal"`: Query and cast the latest crystal back into prompt.
   - `"What crystal is closer to completion?"`: Prioritize and inspect open crystals.
2. **Deterministic Context Forking:** Support spinning off unrelated issues into new crystals linked to `origin`.
3. **Dogfooding:** Use Context Crystal within this repository to plan and execute subsequent tracks.

---

## 3. Backlog & Future Track Roadmap
- **Track 5: Crystal Comms & Lock-Free Multi-Entity Mailboxes:** Filesystem-based inbox/outbox signaling (`.ccrystals/_comms/<entity-id>/inbox/`) and `Entity.endpoints` resolution.
- **Track 6: Lifecycle Housekeeping, Melting & Archiving:** CLI commands for state classification (`--solid`, `--stale`), sub-DAG summarization (`ccrystal melt`), and garbage collection (`ccrystal archive`).
- **Track 7: Experimental 3D Context Lattice Visualizer:** Interactive Three.js/WebGL spatial navigation supporting thematic views (celestial clouds, subterranean cave lattices, archival library books).
- **Track 8: Bidirectional Schema Tooling & Code Generation Strategy:**
  - *Context & Decision:* `spec/v1/context-crystal.json` is our canonical interchange specification. To avoid brittle reflection in Scala Native and maintain our pure-functional invariants (`derives CanEqual`, immutability), we retain hand-crafted Scala 3 ADTs with strict contract test validation in the near term. This dedicated track will explore automated, zero-reflection code generation or code-first schema derivation (e.g. Smithy4s / Tapir).
- **Maintenance / Chore:** Scala 3 LTS dependency upgrade and sbt plugin verification.
