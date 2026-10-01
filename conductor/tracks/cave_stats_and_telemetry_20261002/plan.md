# Implementation Plan: Cave Statistics, Quantitative Telemetry & Token Savings

## Phase 1: Core Domain Models, Codecs & Stats Engine

- [ ] Task: Define domain models in `core/shared/src/main/scala/ccrystal/core/model/stats/StatsModels.scala`
  - [ ] Implement `TemporalExtents`, `StructuralTotals`, `StorageFootprint`, `TokenSavingsEstimate`, `CaveHealthBreakdown`, `CrystalDiskUsage`, `CaveStats`
  - [ ] Implement Circe codecs in `core/shared/src/main/scala/ccrystal/core/codec/Codecs.scala`
  - [ ] Write unit tests for codecs in `core/shared/src/test/scala/ccrystal/core/ModelCodecSuite.scala`
- [ ] Task: Implement `CaveStatsEngine` in `core/shared/src/main/scala/ccrystal/core/stats/CaveStatsEngine.scala`
  - [ ] Compute temporal extents (oldest/newest crystal and span days using `CivilDate`)
  - [ ] Aggregate structural totals (crystals, DAG transitions, tasks, leases, lessons, artifacts, entities)
  - [ ] Compute disk footprint globally and per crystal (active, archived, total, and average)
  - [ ] Compute token savings comparing full DAG history vs hydrated/living state
  - [ ] Aggregate health status and aging breakdown
  - [ ] Support filter-scoped computation reusing `SearchEngine` / `CrystalFilter`
  - [ ] Wire `CrystalStore.stats(filter: Option[CrystalFilter])` method
  - [ ] Write unit tests in `core/shared/src/test/scala/ccrystal/core/stats/CaveStatsEngineSuite.scala`
- [ ] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md)

## Phase 2: CLI Command `ccrystal stats` & Dashboard Formatting

- [ ] Task: Implement Decline parser for `ccrystal stats` in `cli/shared/src/main/scala/ccrystal/cli/CommandParser.scala`
  - [ ] Add `CliCommand.Stats(filter: Option[CrystalFilter], detailed: Boolean, jsonOutput: Boolean)`
  - [ ] Reuse search filter flags (`-q`, `--since`, `--until`, `--today`, `--yesterday`, `--status`, `--has-active-leases`, `--touching-path`, `--has-open-tasks`, `--has-lessons`, `--author`, `--aging`, `--archived`)
  - [ ] Add `--detailed` and `--json` flags
  - [ ] Write unit tests in `cli/shared/src/test/scala/ccrystal/cli/CommandParserSuite.scala`
- [ ] Task: Implement execution and dashboard renderer in `cli/shared/src/main/scala/ccrystal/cli/Runner.scala`
  - [ ] Format human-readable dashboard table with sections: Scope Header, Temporal Genesis, Structural Inventory, Disk Footprint, Token Savings, Health Distribution, and Detailed Per-Crystal Breakdown
  - [ ] Format JSON output when `--json` flag is provided
  - [ ] Write integration test in `cli/shared/src/test/scala/ccrystal/cli/RunnerStatsSuite.scala`
- [ ] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Native MCP Server Tool `crystal_stats`

- [ ] Task: Expose `crystal_stats` in `DefaultMcpHandler.scala`
  - [ ] Register `crystal_stats` in `tools/list` with search filter arguments, `detailed`, and `json_output`
  - [ ] Wire execution to `CliCommand.Stats`
  - [ ] Write unit tests in `cli/shared/src/test/scala/ccrystal/cli/mcp/DefaultMcpHandlerSuite.scala`
  - [ ] Add end-to-end integration test in `cli/shared/src/test/scala/ccrystal/cli/mcp/McpEndToEndSessionSuite.scala`
- [ ] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)

## Phase 4: Documentation, MCP Schemas & Release Verification

- [ ] Task: Export MCP tool schema for `crystal_stats`
  - [ ] Write `crystal_stats.json` in `.gemini/antigravity-cli/mcp/context-crystal/`
- [ ] Task: Update Agent Skill & Documentation
  - [ ] Update `.agents/skills/context-crystal/SKILL.md` and `docs/mcp/instructions.md`
  - [ ] Update `README.md` with `ccrystal stats` and `crystal_stats`
  - [ ] Run Markdown linting (`npx markdownlint-cli ...`)
- [ ] Task: Multi-platform test suite & optimized native release build
  - [ ] Run `sbt test` across Native, JVM, and JS targets
  - [ ] Run `sbt "scalafmtCheckAll; scalafixAll --check"`
  - [ ] Compile and install release binary with Thin LTO (`~/.local/bin/ccrystal`)
- [ ] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md)
