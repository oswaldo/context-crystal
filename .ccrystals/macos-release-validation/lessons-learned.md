# Lessons Learned: Validate v1.0.1 multi-channel installation on macOS and codify release verification lessons

> [!NOTE]
> **Auto-Generated View:** This file is projected from `crystal.json` (the single source of truth). Do not edit manually; use `ccrystal` CLI commands to update state.

### Lesson `[lesson-1]` - Status: Actioned
- **Observed Friction:** cs install --channel gh:oswaldo/context-crystal:main failed with 404 on https://raw.githubusercontent.com/oswaldo/context-crystal/master/main
- **Root Cause:** Coursier gh: shorthand treats a colon (:main) as a file path on the default master branch, whereas a slash (/main) specifies the branch name and defaults to apps.json
- **Recommended Action:** Replace gh:oswaldo/context-crystal:main with gh:oswaldo/context-crystal/main in README.md, docs/contributing.md, and skills/multi-channel-release/SKILL.md
- **Audit Trail:**
  - `2026-10-01T11:43:50.513Z` (usr_operator): Updated gh:oswaldo/context-crystal:main to gh:oswaldo/context-crystal/main across README.md, docs/contributing.md, and skills/multi-channel-release/SKILL.md

### Lesson `[lesson-2]` - Status: Actioned
- **Observed Friction:** Validating a release only from the Linux build machine missed the Coursier channel syntax error and requires manual cross-machine testing on macOS
- **Root Cause:** Release workflow publishes artifacts and Maven Central packages but lacks an automated post-release smoke-verification matrix testing exact documented install commands on clean Linux and macOS runners
- **Recommended Action:** Add automated post-release smoke verification in CI (ubuntu-latest and macos-latest) executing exact README installation pathways so release stability does not depend on which machine or human cuts the release
- **Audit Trail:**
  - `2026-10-01T11:43:50.518Z` (usr_operator): Added verify-release-smoke matrix job (ubuntu-latest and macos-14) in .github/workflows/release.yml and documented in multi-channel-release skill

### Lesson `[lesson-3]` - Status: Actioned
- **Observed Friction:** ccrystal --version failed with Unexpected option: --version when verifying which release binary was active across installation channels
- **Root Cause:** Top-level --version / -v flag (Track 21) is not yet wired into the Decline CLI root parser
- **Recommended Action:** Prioritize Track 21 (ccrystal --version / -v) and assert version output in install.sh, Homebrew test block, and CI smoke tests
- **Audit Trail:**
  - `2026-10-01T11:43:50.522Z` (usr_operator): Verified Track 21 (ccrystal --version / -v) is queued in conductor/next-steps.md and documented version assertion target

### Lesson `[lesson-4]` - Status: Actioned
- **Observed Friction:** Testing multiple installation methods on a user machine left a dangling symlink in ~/Library/Application Support/Coursier/bin/ccrystal and risked shadowing Homebrew in PATH
- **Root Cause:** Smoke verification snippets in skills/multi-channel-release/SKILL.md install directly into default global directories (~/.local/bin and Coursier default bin) without isolation flags
- **Recommended Action:** Update Clean-Room Smoke Verification in skills/multi-channel-release/SKILL.md to use isolated temporary directories (install.sh --to and cs install --install-dir) with automatic cleanup
- **Audit Trail:**
  - `2026-10-01T11:43:50.526Z` (usr_operator): Updated Clean-Room Smoke Verification in docs/contributing.md and skills/multi-channel-release/SKILL.md to use isolated SMOKE_DIR (--to and --install-dir) with cleanup

### Lesson `[lesson-5]` - Status: Actioned
- **Observed Friction:** ccrystal batch failed with a syntax error when a quoted node summary contained a semicolon (;), and executed earlier commands in the batch before rejecting the malformed command
- **Root Cause:** BatchExecutor.splitCommands calls chain.split(";") without quote awareness before parseCommandLine, and executeChain interleaves CommandParser.parse with runner.run instead of pre-validating all commands in the batch
- **Recommended Action:** Make BatchExecutor.splitCommands quote-aware so semicolons inside single or double quotes are preserved, and pre-parse/validate all batch commands before executing mutations
- **Audit Trail:**
  - `2026-10-01T11:43:50.531Z` (usr_operator): Updated BatchExecutor.splitCommands for quote-aware semicolon splitting and BatchExecutor.executeChain for pre-execution command validation with unit tests in BatchExecutorSuite

