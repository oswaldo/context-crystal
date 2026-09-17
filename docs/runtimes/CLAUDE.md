# Context Crystal Guidelines for Claude Code (`CLAUDE.md`)

Add the following section to your repository's `CLAUDE.md` to equip Claude Code with Context Crystal tracking:

```markdown
## Context Crystal Tracking & Lifecycle Guidelines

This repository uses Context Crystal (`ccrystal`) for persistent context tracking, causal DAGs, and session persistence.

### 1. Inception & Resumption
- When beginning a new task or session, check for existing crystals:
  `ccrystal list --status in_progress`
- If an active crystal exists for your goal, attach and hydrate state:
  `ccrystal hydrate <crystal-id> --tail 5`
- If no matching crystal exists, initialize one:
  `ccrystal init <crystal-id> -g "<Goal Title>" -t "<Task 1>" -t "<Task 2>"`

### 2. Checkpoints & Batch Transitions
- Use atomic batching before yielding your turn or asking questions:
  `ccrystal batch "node add <id> -k checkpoint -s '<summary>' --fidelity inferred; task done <id> -t <task-id>"`

### 3. Concluding Work
- When all tasks and criteria are satisfied, conclude the crystal:
  `ccrystal conclude <crystal-id> -s "<Resolution summary>"`
- If a spike or approach is abandoned:
  `ccrystal abandon <crystal-id> -r "<Abandonment reason>"`

### 4. Safety Invariants
- Transient leases: Always clean temporary leases (`ccrystal transient clean <id> -l <lease-id>`) before concluding.
- Zero unprompted deletion: Never run `ccrystal delete` without explicit operator confirmation.
- Transport Gate: Never autonomously execute `git push`. Always ask the operator to push.
```
