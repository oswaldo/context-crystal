# Implementation Plan: Agent Skill, Self-Bootstrapping & Interaction Loop

## Phase 1: CLI Decoupled Storage Engine & Event Timestamps (`CCRYSTAL_STORE`, `--store`, `--timestamp`) [checkpoint: 55a0a16]
- [x] Task: 1.1 Write failing unit/integration tests for store path resolution and event timestamps (55a0a16)
  - [x] Write tests asserting precedence: `--store <path>` > `CCRYSTAL_STORE` > `.ccrystal-store` > `.ccrystals/`
  - [x] Write tests asserting `--timestamp` on `node add`, `--created-at` on `init`, and `--acquired-at` on `transient lease`
  - [x] Assert correct resolution across JVM and Native test targets
- [x] Task: 1.2 Implement store path resolution and event timestamp options (55a0a16)
  - [x] Add `--store` global CLI option and hierarchical resolution in `cli/shared/src/main/scala/ccrystal/cli/Main.scala`
  - [x] Add `--timestamp`, `--created-at`, and `--acquired-at` options in `CommandParser.scala` and `Runner.scala`
  - [x] Verify all unit tests pass green
- [x] Task: 1.3 Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 2: Canonical Agent Skill (`skills/context-crystal/SKILL.md`) [checkpoint: 0331a5d]
- [x] Task: 2.1 Author core skill specification & autonomous self-bootstrapping workflow (0331a5d)
  - [x] Define YAML frontmatter (`name: context-crystal`), description, and operational invariants
  - [x] Write autonomous binary bootstrap recipe (`which ccrystal` check + automatic install to `~/.local/bin`)
  - [x] Encode storage location discovery (`CCRYSTAL_STORE`, external repo vs local `.ccrystals/`)
- [x] Task: 2.2 Define dual-mode operational heuristics (Symbiotic vs Autonomous Spine) (0331a5d)
  - [x] Specify detection heuristics for `conductor/`, `openspec/`, `speckit/`, etc.
  - [x] Detail milestone batching cadences for Symbiotic Mode (zero micro-step chatter)
  - [x] Detail pre-yield micro-batch flushes for Autonomous Spine Mode (crash & compaction resilience)
- [x] Task: 2.3 Codify conversational utterances & `ccrystal batch` recipes (0331a5d)
  - [x] Map natural language utterances (`crystallize`, `cast`, `slice`, `fork`, `lesson`, `transient`)
  - [x] Define standardized single-roundtrip `ccrystal batch` multi-command execution recipes
- [x] Task: 2.4 Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Host Adapters & Platform Tooling
- [ ] Task: 3.1 Antigravity Skill Adapter
  - [ ] Create `skills/context-crystal/adapters/antigravity/` guide and modal (`ask_question`) integration rules
  - [ ] Scaffold local installation link (`.agents/skills/context-crystal/SKILL.md`)
- [ ] Task: 3.2 Claude Code Adapter
  - [ ] Create `skills/context-crystal/adapters/claude/` with `.claude/commands/crystallize.md` and `CLAUDE.md` snippets
- [ ] Task: 3.3 Cursor & Windsurf Rules Adapter
  - [ ] Create `skills/context-crystal/adapters/cursor/` with `.cursor/rules/context-crystal.mdc` rules snippet
- [ ] Task: 3.4 Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 4: Automated Verification, Documentation & In-Repo Dogfooding
- [ ] Task: 4.1 Automated Skill Verification Test Suite
  - [ ] Create `skills/context-crystal/tests/verify_skill_commands.sh`
  - [ ] Validate end-to-end execution of all documented batch commands in both in-tree and out-of-tree (`CCRYSTAL_STORE`) modes
- [ ] Task: 4.2 Update Project Documentation & Architecture Guides
  - [ ] Update `conductor/product.md` with Decoupled Context Repos and Agent-as-Operator principles
  - [ ] Update `conductor/next-steps.md` with Track 6 completion summary
- [ ] Task: 4.3 In-Repo Dogfooding
  - [ ] Initialize a Context Crystal tracking subsequent project milestones using the newly crafted skill
- [ ] Task: 4.4 Phase Verification & Checkpoint (Refer to workflow.md)
