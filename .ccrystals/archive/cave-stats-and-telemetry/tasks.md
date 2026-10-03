# Tasks: Cave Statistics, Quantitative Telemetry & Token Savings

> [!NOTE]
> **Auto-Generated View:** This file is projected from `crystal.json` (the single source of truth). Do not edit manually; use `ccrystal` CLI commands to update state.

**Status:** ConcludedSuccess

## Acceptance Criteria / Tasks

- [x] Define CaveStats and TokenSavings domain models and codecs in core `[task-1]`
- [x] Implement CaveStatsEngine in core measuring temporal extents, structural elements, and disk metrics `[task-2]`
- [x] Implement token estimation and savings algorithm (comparing raw transcript re-ingestion vs selective hydration and melting) `[task-3]`
- [x] Implement Decline parser for ccrystal stats in cli (--json, --include-archived, --detailed) `[task-4]`
- [x] Implement ccrystal stats execution and dashboard rendering in Runner `[task-5]`
- [x] Expose crystal_stats in DefaultMcpHandler tools/list and wire execution `[task-6]`
- [x] Write unit and end-to-end integration tests across core and cli modules `[task-7]`
- [x] Export MCP schema crystal_stats.json and update Agent Skill and documentation `[task-8]`
- [x] Run full multi-platform verification and compile optimized native release binary `[task-9]`
