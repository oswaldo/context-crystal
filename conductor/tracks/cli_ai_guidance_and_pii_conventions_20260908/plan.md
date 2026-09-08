# Implementation Plan: CLI AI Guidance, PII Protection & Entity Conventions

## Phase 1: Dual-Audience Root Guidance (--for-ai) & Discriminator Note (Red-Green TDD) [checkpoint: 66d3766]
- [x] Task: Write failing unit tests for --for-ai flag parsing in CommandParserSuite and output formatting in RunnerSuite (Red) [66d3766]
- [x] Task: Implement ccrystal --for-ai emitting token-optimized agent guidance, and add human/AI discriminator note to default root banner and --help (Green) [66d3766]
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [66d3766]

## Phase 2: Entity Conventions & PII-Safe Command Help Enhancements (Red-Green TDD) [checkpoint: a2b8ebb]
- [x] Task: Write failing unit tests for ccrystal entity conventions subcommand and enriched option descriptions on init and entity register (Red) [a2b8ebb]
- [x] Task: Implement ccrystal entity conventions subcommand output, update --author and --name option descriptions with handle/PII guidance, and refine entity slug handling (Green) [a2b8ebb]
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [a2b8ebb]

## Phase 3: Integration, Skill/Doc Alignment, Native Build & Cave Hygiene [checkpoint: 7e32927]
- [x] Task: Write integration tests verifying end-to-end CLI root invocation, --for-ai output, and entity conventions [ed09dbd]
- [x] Task: Update skills/context-crystal/SKILL.md, README.md, and documentation with dual-guidance flags and entity naming conventions table [31fcdb6]
- [x] Task: Compile native CLI binary (cliNative/nativeLink), install to ~/.local/bin/ccrystal, and run full test suites across platforms [7e32927]
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [7e32927]
