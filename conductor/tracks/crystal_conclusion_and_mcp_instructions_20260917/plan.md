# Implementation Plan: Crystal Lifecycle Conclusion & Agent MCP Ergonomics

## Phase 1: Core CLI & Batch Goal Conclusion [checkpoint: 7daa10b]

- [x] Task: Extend `CliCommand` with `GoalTransition` and implement `CommandParser` for `conclude`, `abandon`, and `goal status` [6197035]
  - [x] Write failing unit tests in `cli/shared/src/test/scala/ccrystal/cli/CommandParserSuite.scala`
  - [x] Add `CliCommand.GoalTransition(crystalId: String, status: GoalStatus, summary: Option[String] = None)`
  - [x] Add command parsers for `conclude`, `abandon`, and `goal status` in `CommandParser.scala`
  - [x] Verify tests pass cleanly
- [x] Task: Implement `Runner` execution logic and automatic resolution DAG node creation [6197035]
  - [x] Write failing unit tests in `cli/shared/src/test/scala/ccrystal/cli/RunnerSuite.scala`
  - [x] Implement `GoalTransition` handler in `Runner.scala` updating `goal.status` and appending a `NodeKind.Resolution` node if summary is provided
  - [x] Verify tests pass cleanly
- [x] Task: Support `conclude` and `abandon` in `BatchExecutor` [6197035]
  - [x] Write failing unit tests in `cli/shared/src/test/scala/ccrystal/cli/BatchExecutorSuite.scala`
  - [x] Ensure `BatchExecutor` parses and executes compound recipes including `conclude` and `abandon`
  - [x] Verify tests pass cleanly
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md)

## Phase 2: Native MCP Server `crystal_goal_transition` Tool [checkpoint: f6e2ac9]

- [x] Task: Implement `crystal_goal_transition` tool in `DefaultMcpHandler` [f6e2ac9]
  - [x] Write failing unit tests in `cli/shared/src/test/scala/ccrystal/cli/mcp/DefaultMcpHandlerSuite.scala`
  - [x] Expose `crystal_goal_transition` in `tools/list` with schema (`crystal_id`, `status`, optional `summary`)
  - [x] Implement execution in `tools/call` routing through `Runner.run(CliCommand.GoalTransition(...))`
  - [x] Verify unit tests pass cleanly
- [x] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Multi-Runtime Ergonomics & MCP Wire-Level Instructions [checkpoint: 5b2dcaa]

- [x] Task: Author canonical `resources/mcp/instructions.md` and deploy to Antigravity MCP directory [209da0c]
  - [x] Create `resources/mcp/instructions.md` with CLI paths, lifecycle transition workflows, and batch best practices
  - [x] Deploy `instructions.md` and `crystal_goal_transition.json` to `/home/oswaldo/.gemini/antigravity-cli/mcp/context-crystal/`
- [x] Task: Update Agent Skill (`SKILL.md`) and AI Documentation [209da0c]
  - [x] Update `.agents/skills/context-crystal/SKILL.md` to document `conclude`, `abandon`, and `crystal_goal_transition`
  - [x] Update `docs/for_ais.md` and `conductor/product.md` with goal transition lifecycle guidance
- [x] Task: Implement wire-level MCP protocol instructions in `InitializeResult` (official MCP 2024-11-05 spec) [5b2dcaa]
  - [x] Write failing unit tests in `core/shared/src/test/scala/ccrystal/core/mcp/McpCodecSuite.scala`
  - [x] Add `instructions: Option[String] = None` to `InitializeResult` in `McpModels.scala` and update `McpCodecs.scala`
  - [x] Populate wire-level `instructions` in `DefaultMcpHandler.scala` and verify in `DefaultMcpHandlerSuite.scala`
- [x] Task: Curate production-grade multi-runtime templates in `docs/runtimes/` [5b2dcaa]
  - [x] Create `docs/runtimes/CLAUDE.md` (Claude Code), `cursor.mdc` (Cursor), `windsurf.md` (Windsurf), `copilot.md` (GitHub Copilot), and `AGENTS.md` (open agents)
  - [x] Create `docs/runtimes/README.md` documenting project structure best practices across agent runtimes
- [x] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)

## Phase 4: Full Cross-Platform Verification, Formatting & Release Installation [checkpoint: ]

- [x] Task: Full test suite verification across JVM and Native targets
  - [x] Run `sbt test` across core and cli modules
  - [x] Run formatting and linter checks (`scalafmtCheckAll`, `markdownlint`)
- [x] Task: Compile and install release native binary with Thin LTO into `~/.local/bin/ccrystal`
  - [x] Execute release build and copy with atomic replacement (`cp --remove-destination`)
- [x] Task: Clean up `suggestion.md` from repository root
- [x] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md)
