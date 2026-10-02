# Implementation Plan: Cave Statistics, Storage Metrics & Token Savings

## Phase 1: Core Domain Models, Codecs & Stats Engine

- [x] Task: Define domain models in `core/shared/src/main/scala/ccrystal/core/model/stats/StatsModels.scala`
  - [x] Implement `TemporalExtents`, `StructuralTotals`, `StorageFootprint`, `TokenSavingsEstimate`, `CaveHealthBreakdown`, `CrystalDiskUsage`, `CaveStats`
  - [x] Implement Circe codecs in `core/shared/src/main/scala/ccrystal/core/codec/Codecs.scala`
  - [x] Write unit tests for codecs in `core/shared/src/test/scala/ccrystal/core/ModelCodecSuite.scala`
- [x] Task: Implement `CaveStatsEngine` in `core/shared/src/main/scala/ccrystal/core/stats/CaveStatsEngine.scala`
  - [x] Compute temporal extents (oldest/newest crystal and span days using `CivilDate`)
  - [x] Aggregate structural totals (crystals, DAG transitions, tasks, leases, lessons, artifacts, entities)
  - [x] Compute disk footprint globally and per crystal (active, archived, total, and average)
  - [x] Compute token savings comparing full DAG history vs hydrated/living state
  - [x] Aggregate health status and aging breakdown
  - [x] Support filter-scoped computation reusing `SearchEngine` / `CrystalFilter`
  - [x] Wire `CrystalStore.stats(filter: Option[CrystalFilter])` method
  - [x] Write unit tests in `core/shared/src/test/scala/ccrystal/core/stats/CaveStatsEngineSuite.scala`
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md)

## Phase 2: CLI Command `ccrystal stats` & Dashboard Formatting

- [x] Task: Implement Decline parser for `ccrystal stats` in `cli/shared/src/main/scala/ccrystal/cli/CommandParser.scala`
  - [x] Add `CliCommand.Stats(filter: Option[CrystalFilter], detailed: Boolean, jsonOutput: Boolean)`
  - [x] Reuse search filter flags (`-q`, `--since`, `--until`, `--today`, `--yesterday`, `--status`, `--has-active-leases`, `--touching-path`, `--has-open-tasks`, `--has-lessons`, `--author`, `--aging`, `--archived`)
  - [x] Add `--detailed` and `--json` flags
  - [x] Write unit tests in `cli/shared/src/test/scala/ccrystal/cli/CommandParserSuite.scala`
- [x] Task: Implement execution and dashboard renderer in `cli/shared/src/main/scala/ccrystal/cli/Runner.scala`
  - [x] Format human-readable dashboard table with sections: Scope Header, Temporal Genesis, Structural Inventory, Disk Footprint, Token Savings, Health Distribution, and Detailed Per-Crystal Breakdown
  - [x] Format JSON output when `--json` flag is provided
  - [x] Write integration test in `cli/shared/src/test/scala/ccrystal/cli/RunnerStatsSuite.scala`
- [x] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Native MCP Server Tool `crystal_stats`

- [x] Task: Expose `crystal_stats` in `DefaultMcpHandler.scala`
  - [x] Register `crystal_stats` in `tools/list` with search filter arguments, `detailed`, and `json_output`
  - [x] Wire execution to `CliCommand.Stats`
  - [x] Write unit tests in `cli/shared/src/test/scala/ccrystal/cli/mcp/DefaultMcpHandlerSuite.scala`
  - [x] Add end-to-end integration test in `cli/shared/src/test/scala/ccrystal/cli/mcp/McpEndToEndSessionSuite.scala`
- [x] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)

## Phase 4: Documentation, MCP Schemas & Release Verification

- [x] Task: Export MCP tool schema for `crystal_stats`
  - [x] Write `crystal_stats.json` in `docs/mcp/schemas/`
- [x] Task: Update Agent Skill & Documentation
  - [x] Update `.agents/skills/context-crystal/SKILL.md` and `docs/mcp/instructions.md`
  - [x] Update `README.md` with `ccrystal stats` and `crystal_stats`
  - [x] Run Markdown linting (`npx markdownlint-cli ...`)
- [x] Task: Multi-platform test suite & optimized native release build
  - [x] Run `sbt test` across Native, JVM, and JS targets
  - [x] Run `sbt "scalafmtCheckAll; scalafixAll --check"`
  - [x] Compile and install release binary with Thin LTO (`~/.local/bin/ccrystal`)
- [x] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md)
