# Implementation Plan: Destructive Lifecycle Cleanup

## Phase 1: Core Store Deletion & Cascade Resolution
- [x] Task: Write failing unit tests for CrystalStore delete and cascade resolution (Red) [2cec0a8]
- [x] Task: Implement CrystalStore.deleteCrystal and cascade entity deregistration in FsCrystalStore (Green) [779ba10]
- [~] Task: Write failing unit tests for CrystalStore deregisterEntity and cascade crystal deletion (Red)
- [ ] Task: Implement CrystalStore.deregisterEntity with cascading crystal removal in FsCrystalStore (Green)
- [ ] Task: Implement deletion impact preview computation and CCRYSTAL_DELETION_PREVIEW_LIMIT configuration
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 2: CLI Parsing, Runner & Interactive Confirmation
- [ ] Task: Write failing unit tests for CLI delete and entity deregister command parsing (Red)
- [ ] Task: Implement CliCommand.Delete and CliCommand.EntityDeregister in CommandParser (Green)
- [ ] Task: Implement interactive y/N confirmation prompt and non-interactive --force handling in Runner (Green)
- [ ] Task: Implement batch executor safety preventing unforced destructive commands in scripts (Green)
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Integration, Agent Skill & Documentation
- [ ] Task: Write end-to-end integration tests for CLI deletion and entity deregistration workflows
- [ ] Task: Update Agent Skill (.agents/skills/context-crystal/SKILL.md) with deletion recipes and conversational matrix
- [ ] Task: Compile native CLI binary and verify command line help
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)
