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
1. **"Crystallize this context":** Snapshot live sessions into `.ccrystals/<name>/` with agent entity identity.
2. **"Resume work on last task":** Query and cast the latest crystal back into the prompt.
3. **"What crystal is closer to completion?":** Prioritize and inspect open crystals.
4. **Dogfooding:** Use Context Crystal within this repository to plan and execute subsequent tracks.

---

## 3. Backlog / Future Chores
- **Scala Version Upgrade & Dep Check Chore:** Check compatibility with Scala 3 LTS (3.3.5+/3.3.8) and latest release (3.8.4), adding `sbt-updates` plugin.
