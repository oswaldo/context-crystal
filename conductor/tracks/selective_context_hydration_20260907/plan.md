# Implementation Plan: Selective Context Hydration & Beam Shaping

## Phase 1: Core Hydration Engine & Slice Selector Extensions (Red-Green TDD) [checkpoint: 8552255]
- [x] Task: Write failing unit tests for ContextHydrator and enhanced slice selector resolution (Red) [06b6805]
- [x] Task: Implement ContextHydrator and HydrationParams in ccrystal.core with living state preservation and shaped transition formatting (Green) [ad48e3f]
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [8552255]

## Phase 2: CLI Integration & Command Parsing (Red-Green TDD)
- [x] Task: Write failing unit tests for CommandParser supporting --from, --to, --tail, --depth, --summary-only on cast and hydrate (Red) [fa10126]
- [~] Task: Implement CLI command parsing and wire CliCommand.Cast through Runner using ContextHydrator (Green)
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 3: MCP Prompt & Resource Beam Shaping (Red-Green TDD)
- [ ] Task: Write failing unit tests for DefaultMcpHandler supporting selective hydrate_context prompt arguments and crystal://{id}/hydrate resource queries (Red)
- [ ] Task: Implement selective prompt parameters and crystal://{id}/hydrate URI query parsing in DefaultMcpHandler (Green)
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 4: End-to-End Integration, Native Compilation & Documentation
- [ ] Task: Write integration tests for end-to-end CLI cast/hydrate beam shaping and MCP JSON-RPC hydration calls
- [ ] Task: Update README.md, skills/context-crystal/SKILL.md, and docs with selective hydration syntax and examples
- [ ] Task: Compile native CLI binary (cliNative/nativeLink), install to ~/.local/bin/ccrystal, and run full test suites
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)
