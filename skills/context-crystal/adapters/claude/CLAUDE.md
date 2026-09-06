# Context Crystal Integration for Claude Code

When working in this project, use Context Crystal (`ccrystal`) to persist state transitions, track tasks, and preserve uninterrupted context across sessions.

## Quick Reference Commands
- **Hydrate Session:** `ccrystal hydrate <crystal-id>`
- **Record Checkpoint:** `ccrystal batch "node add <id> -k checkpoint -s '<summary>' --fidelity inferred; task done <id> -t <task-id>"`
- **Log Friction:** `ccrystal lesson add <id> -f '<friction>' -r '<cause>' -a '<action>'`
- **Cleave / Fork:** `ccrystal slice <id> --from <anchor> --fork-to <child-id> --prune`

## Repository Cleanliness
If this codebase requires keeping working trees clean, set `export CCRYSTAL_STORE=~/.ccrystals/stores/<project-name>` to store crystals out-of-tree.
