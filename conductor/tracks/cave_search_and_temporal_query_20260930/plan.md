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

## Phase 2: CLI Command: `ccrystal search`

- [~] Task: Implement Decline parser for `ccrystal search` in `cli`
  - [ ] Write failing parser tests in `cli/shared/src/test/scala/ccrystal/cli/CommandLineParserSuite.scala`
  - [ ] Implement `CliCommand.Search` and Decline command definition with `--query`, `--since`, `--until`, `--today`, `--yesterday`, `--status`, `--has-active-leases`, `--touching-path`, `--has-open-tasks`, `--has-lessons`, `--author`, `--aging`, `--include-archived`, `--json`
  - [ ] Verify parser tests pass cleanly
- [ ] Task: Implement `ccrystal search` execution and formatting in `Runner`
  - [ ] Write failing runner unit tests in `cli/shared/src/test/scala/ccrystal/cli/RunnerSuite.scala`
  - [ ] Implement search execution in `Runner.run`, supporting formatted table output with match reasons and `--json` structured array
  - [ ] Verify runner tests pass cleanly
- [ ] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Consolidated MCP Tool: `crystal_search` (Replacing `crystal_list`)

- [ ] Task: Implement `crystal_search` tool in `DefaultMcpHandler` and replace `crystal_list`
  - [ ] Write failing unit tests in `cli/shared/src/test/scala/ccrystal/cli/mcp/DefaultMcpHandlerSuite.scala` verifying empty call returns full listing and filtered calls execute search
  - [ ] Expose `crystal_search` in MCP `tools/list`, remove `crystal_list`, and wire execution to search runner
  - [ ] Verify unit tests pass cleanly
- [ ] Task: Update MCP end-to-end integration tests in `McpEndToEndSessionSuite.scala`
  - [ ] Update existing session tests to use `crystal_search` instead of `crystal_list`
  - [ ] Add integration test exercising filtered searches via MCP
  - [ ] Verify all MCP integration tests pass cleanly
- [ ] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)

## Phase 4: Agent Skill, MCP Schemas, Documentation & Release Verification

- [ ] Task: Export MCP tool schema for `crystal_search` and remove `crystal_list.json`
  - [ ] Write `crystal_search.json` schema to `.gemini/antigravity-cli/mcp/context-crystal/`
  - [ ] Remove obsolete `crystal_list.json`
- [ ] Task: Update Agent Skill, Guidelines & MCP documentation
  - [ ] Update `.agents/skills/context-crystal/SKILL.md` and `docs/mcp/instructions.md`
  - [ ] Update `AGENTS.md` and `README.md` references to `crystal_search` and `ccrystal search`
  - [ ] Run Markdown formatting and linter checks (`npx markdownlint-cli ...`)
- [ ] Task: Full multi-platform test suite & optimized native release build
  - [ ] Run `sbt test` across core and cli modules
  - [ ] Run `sbt "scalafmtCheckAll; scalafixAll --check"`
  - [ ] Build and install optimized release binary (`ccrystal`) with Thin LTO to `~/.local/bin/ccrystal`
- [ ] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md)
