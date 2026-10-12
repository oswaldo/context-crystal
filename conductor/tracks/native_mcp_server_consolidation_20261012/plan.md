# Implementation Plan: Native MCP Server Consolidation, TDQS Optimization & Agent Ergonomics

## Phase 1: First-Class Lesson Management (`crystal_lesson`)

- [ ] Task: Define `crystal_lesson` schema and parameters in `DefaultMcpHandler.scala`
  - [ ] Add `crystal_lesson` tool declaration with actions (`record`, `resolve`, `list`)
  - [ ] Support recording lessons with category, context, summary, and resolution
- [ ] Task: Implement backend handler logic for lesson actions in `DefaultMcpHandler`
  - [ ] Wire `record` action to crystal store lessons ledger
  - [ ] Wire `resolve` action to mark lessons resolved
  - [ ] Wire `list` action to render structured lessons Markdown table
- [ ] Task: Unit tests for `crystal_lesson` tool
  - [ ] Write MUnit tests in `DefaultMcpHandlerSuite` verifying `record`, `resolve`, and `list`
- [ ] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md)

---

## Phase 2: Self-Hydrating Lifecycle Responses

- [ ] Task: Implement self-hydrating task responses in `crystal_task_transition`
  - [ ] Append rendered Markdown tasks list (`- [x] ...`, `- [ ] ...`) and progress counter
  - [ ] Include active goal title and intent in transition response
- [ ] Task: Implement context progress snapshot in `crystal_checkpoint`
  - [ ] Append current DAG head and task progress snapshot in checkpoint response
- [ ] Task: Unit tests for self-hydrating responses
  - [ ] Write MUnit tests asserting rendered task list in `crystal_task_transition` response
- [ ] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

---

## Phase 3: Eager Harness Configuration & TDQS Hardening

- [ ] Task: Update `AgentInstaller` for Eager tool promotion and instructions generation
  - [ ] Promote high-frequency tools (`crystal_checkpoint`, `crystal_task_transition`, `crystal_hydrate`, `crystal_lesson`) to eager declarations
  - [ ] Generate compact `instructions.md` reference cheatsheets
- [ ] Task: End-to-end verification and cross-platform tests
  - [ ] Run full test suites across Native and JVM targets (`sbt test`)
  - [ ] Update Context Crystal task in `release-v1-3-0-extensions-media-and-mcp-optimization`
- [ ] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)
