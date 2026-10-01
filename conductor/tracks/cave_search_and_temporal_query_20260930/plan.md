# Implementation Plan: Cave Query, Search & Temporal Navigation

## Phase 1: Core Search & Temporal Query Engine [checkpoint: e8915ad]

- [x] Task: Define `CrystalFilter`, `AgingCategory`, and temporal parsing in `core` [5a1ba35]
  - [x] Write failing unit tests in `core/shared/src/test/scala/ccrystal/core/model/CrystalFilterSuite.scala`
  - [x] Implement `CrystalFilter`, `AgingCategory`, and temporal parser supporting ISO-8601, `today`, `yesterday`, and relative offsets (`1d`, `7d`)
  - [x] Verify unit tests pass cleanly
- [x] Task: Implement Search & Query Engine in `core` [5a1ba35]
  - [x] Write failing unit tests in `core/shared/src/test/scala/ccrystal/core/store/CrystalSearchEngineSuite.scala`
  - [x] Implement multi-attribute matching (text search across title, intent, DAG nodes, lessons, artifacts; leases; tasks; author; aging; archived)
  - [x] Verify engine tests pass cleanly
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md) [e8915ad]

## Phase 2: CLI Command: `ccrystal search` [checkpoint: 71a6eb3]

- [x] Task: Implement Decline parser for `ccrystal search` in `cli` [71a6eb3]
  - [x] Write failing parser tests in `cli/shared/src/test/scala/ccrystal/cli/CommandLineParserSuite.scala`
  - [x] Implement `CliCommand.Search` and Decline command definition with `--query`, `--since`, `--until`, `--today`, `--yesterday`, `--status`, `--has-active-leases`, `--touching-path`, `--has-open-tasks`, `--has-lessons`, `--author`, `--aging`, `--include-archived`, `--json`
  - [x] Verify parser tests pass cleanly
- [x] Task: Implement `ccrystal search` execution and formatting in `Runner` [71a6eb3]
  - [x] Write failing runner unit tests in `cli/shared/src/test/scala/ccrystal/cli/RunnerSuite.scala`
  - [x] Implement search execution in `Runner.run`, supporting formatted table output with match reasons and `--json` structured array
  - [x] Verify runner tests pass cleanly
- [x] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md) [71a6eb3]

## Phase 3: Consolidated MCP Tool: `crystal_search` (Replacing `crystal_list`)

- [x] Task: Implement `crystal_search` tool in `DefaultMcpHandler` and replace `crystal_list` [1103d9b]
  - [x] Write failing unit tests in `cli/shared/src/test/scala/ccrystal/cli/mcp/DefaultMcpHandlerSuite.scala` verifying empty call returns full listing and filtered calls execute search
  - [x] Expose `crystal_search` in MCP `tools/list`, remove `crystal_list`, and wire execution to search runner
  - [x] Verify unit tests pass cleanly
- [x] Task: Update MCP end-to-end integration tests in `McpEndToEndSessionSuite.scala` [1103d9b]
  - [x] Update existing session tests to use `crystal_search` instead of `crystal_list`
  - [x] Add integration test exercising filtered searches via MCP
  - [x] Verify all MCP integration tests pass cleanly
- [x] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md) [1103d9b]

## Phase 4: Agent Skill, MCP Schemas, Documentation & Release Verification

- [x] Task: Export MCP tool schema for `crystal_search` and remove `crystal_list.json` [b14b1a9]
  - [x] Write `crystal_search.json` schema to `.gemini/antigravity-cli/mcp/context-crystal/`
  - [x] Remove obsolete `crystal_list.json`
- [x] Task: Update Agent Skill, Guidelines & MCP documentation [b14b1a9]
  - [x] Update `.agents/skills/context-crystal/SKILL.md` and `docs/mcp/instructions.md`
  - [x] Update `AGENTS.md` and `README.md` references to `crystal_search` and `ccrystal search`
  - [x] Run Markdown formatting and linter checks (`npx markdownlint-cli ...`)
- [x] Task: Full multi-platform test suite & optimized native release build [b14b1a9]
  - [x] Run `sbt test` across core and cli modules
  - [x] Run `sbt "scalafmtCheckAll; scalafixAll --check"`
  - [x] Build and install optimized release binary (`ccrystal`) with Thin LTO to `~/.local/bin/ccrystal`
- [x] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md) [b14b1a9]
