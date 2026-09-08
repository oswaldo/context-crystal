# Implementation Plan: CLI AI Guidance, PII Protection & Entity Conventions

## Phase 1: Dual-Audience Root Guidance (--for-ai / --for-assistant) & Discriminator Note (Red-Green TDD)
- [ ] Task: Write failing unit tests for --for-ai / --for-assistant flag parsing in CommandParserSuite and output formatting in RunnerSuite (Red)
- [ ] Task: Implement ccrystal --for-ai and ccrystal --for-assistant emitting token-optimized agent guidance, and add human/AI discriminator note to default root banner and --help (Green)
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 2: Entity Conventions & PII-Safe Command Help Enhancements (Red-Green TDD)
- [ ] Task: Write failing unit tests for ccrystal entity conventions subcommand and enriched option descriptions on init and entity register (Red)
- [ ] Task: Implement ccrystal entity conventions subcommand output, update --author and --name option descriptions with handle/PII guidance, and refine entity slug handling (Green)
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Integration, Skill/Doc Alignment, Native Build & Cave Hygiene
- [ ] Task: Write integration tests verifying end-to-end CLI root invocation, --for-ai output, and entity conventions
- [ ] Task: Update skills/context-crystal/SKILL.md, README.md, and documentation with dual-guidance flags and entity naming conventions table
- [ ] Task: Compile native CLI binary (cliNative/nativeLink), install to ~/.local/bin/ccrystal, and run full test suites across platforms
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)
