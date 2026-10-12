# Implementation Plan: Native MCP Server Consolidation, TDQS Optimization & Agent Ergonomics

## Phase 1: First-Class Lesson Management (`crystal_lesson`)

- [x] Task: Define `crystal_lesson` schema and parameters in `DefaultMcpHandler.scala`
  - [x] Add `crystal_lesson` tool declaration with actions (`record`, `resolve`, `list`)
  - [x] Support recording lessons with category, context, summary, and resolution
- [x] Task: Implement backend handler logic for lesson actions in `DefaultMcpHandler`
  - [x] Wire `record` action to crystal store lessons ledger
  - [x] Wire `resolve` action to mark lessons resolved
  - [x] Wire `list` action to render structured lessons Markdown table
- [x] Task: Unit tests for `crystal_lesson` tool
  - [x] Write MUnit tests in `DefaultMcpHandlerSuite` verifying `record`, `resolve`, and `list`
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md)

---

## Phase 2: Self-Hydrating Lifecycle Responses

- [x] Task: Implement self-hydrating task responses in `crystal_task_transition`
  - [x] Append rendered Markdown tasks list (`- [x] ...`, `- [ ] ...`) and progress counter
  - [x] Include active goal title and intent in transition response
- [x] Task: Implement context progress snapshot in `crystal_checkpoint`
  - [x] Append current DAG head and task progress snapshot in checkpoint response
- [x] Task: Unit tests for self-hydrating responses
  - [x] Write MUnit tests asserting rendered task list in `crystal_task_transition` response
- [x] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

---

## Phase 3: Eager Harness Configuration & TDQS Hardening

- [x] Task: Update `AgentInstaller` for Eager tool promotion and instructions generation
  - [x] Promote high-frequency tools (`crystal_checkpoint`, `crystal_task_transition`, `crystal_hydrate`, `crystal_lesson`) to eager declarations
  - [x] Generate compact `instructions.md` reference cheatsheets
- [x] Task: End-to-end verification and cross-platform tests
  - [x] Run full test suites across Native and JVM targets (`sbt test`)
  - [x] Update Context Crystal task in `release-v1-3-0-extensions-media-and-mcp-optimization`
- [x] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)
