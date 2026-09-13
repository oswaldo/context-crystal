# Implementation Plan: Native MCP Server Ergonomics & Advanced Tooling

## Phase 1: Core & CLI Foundation (Atomic Tasks in Init & Crystal List Ergonomics)

- [x] Task: Add optional `tasks: List[String]` to `CliCommand.Init` and generate acceptance criteria in `Runner` [c596fb4]
  - [x] Write failing unit test in `cli/shared/src/test/scala/ccrystal/cli/RunnerSuite.scala`
  - [x] Update `CliCommand.Init` definition and `Runner.run` to instantiate `AcceptanceCriterion` elements
  - [x] Verify test passes cleanly
- [ ] Task: Implement `crystal_list` and extended `crystal_init` tools in `DefaultMcpHandler`
  - [ ] Write failing unit test in `cli/shared/src/test/scala/ccrystal/cli/mcp/DefaultMcpHandlerSuite.scala`
  - [ ] Expose `crystal_list` in `tools/list` and wire execution to `CliCommand.ListCrystals`
  - [ ] Update `crystal_init` in `tools/list` with optional `tasks` array and wire execution to `CliCommand.Init`
  - [ ] Verify test passes cleanly
- [ ] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md)

## Phase 2: Beam Shaping & Cave Triage MCP Tools

- [ ] Task: Implement `crystal_hydrate` MCP tool with beam shaping parameters
  - [ ] Write failing unit test in `DefaultMcpHandlerSuite.scala` testing `tail`, `from`, `to`, and `summary_only` arguments
  - [ ] Expose `crystal_hydrate` in `tools/list` and wire execution to `CliCommand.Cast`
  - [ ] Verify test passes cleanly
- [ ] Task: Implement `crystal_triage` MCP tool with structured classification
  - [ ] Write failing unit test in `DefaultMcpHandlerSuite.scala` verifying categorization (`CandidateForCleanup`, `Active`, `RequiresReview`)
  - [ ] Expose `crystal_triage` in `tools/list` and wire execution to triage analysis
  - [ ] Verify test passes cleanly
- [ ] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

## Phase 3: End-to-End Integration, Skill & Tool Schema Alignment

- [ ] Task: Update end-to-end integration tests in `McpEndToEndSessionSuite.scala`
  - [ ] Write comprehensive session test exercising `crystal_init` (with tasks), `crystal_list`, `crystal_hydrate`, and `crystal_triage`
  - [ ] Verify all tests pass cleanly
- [ ] Task: Export updated JSON tool schemas and update `SKILL.md`
  - [ ] Export schema files to `/home/oswaldo/.gemini/antigravity-cli/mcp/context-crystal/`
  - [ ] Update `.agents/skills/context-crystal/SKILL.md` and documentation
- [ ] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)

## Phase 4: Release Binary Compilation, Dogfooding & Verification

- [ ] Task: Full test suite verification across JVM and Native targets
  - [ ] Run `sbt test` across core and cli modules
  - [ ] Run `sbt "scalafmtCheckAll"`
- [ ] Task: Build optimized release native binary with Thin LTO into `~/.local/bin/ccrystal`
  - [ ] Execute release build and copy with atomic replacement
- [ ] Task: Dogfood the new tools via active Context Crystal tracking for this session
- [ ] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md)
