# Lessons Learned: Interactive Showcase Demo Tab: Context Preservation vs. Agent Amnesia

> [!NOTE]
> **Auto-Generated View:** This file is projected from `crystal.json` (the single source of truth). Do not edit manually; use `ccrystal` CLI commands to update state.

### Lesson `[lesson-1]` - Status: Actioned
- **Observed Friction:** Agent entered compulsive file read loop after context compaction
- **Root Cause:** Session amnesia and lack of immediate re-anchoring to crystal DAG causes agents to re-read files redundantly
- **Recommended Action:** Pair session amnesia with redundant read loops across project narrative, manifesto, and demo simulation
- **Audit Trail:**
  - `2026-10-08T18:58:43.759Z` (usr_antigravity): Codified compaction read loops vs. zero-token DAG hydration into TabDemo.scala and docs/for_devs.md

