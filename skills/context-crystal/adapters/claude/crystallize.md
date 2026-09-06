# /crystallize Slash Command for Claude Code

Place this file in `.claude/commands/crystallize.md` to unlock `/crystallize` in Claude Code.

```markdown
---
description: Snapshot current progress, completed tasks, and DAG transitions into Context Crystal
---

Inspect recent git diffs, passing tests, and conversation history. Translate progress into an atomic Context Crystal batch:

1. Identify active crystal in .ccrystals/ or $CCRYSTAL_STORE.
2. Formulate an atomic batch command:
   ccrystal batch "node add <id> -k checkpoint -s '<Concise summary of completed work>' --fidelity inferred; task done <id> -t <task-id>"
3. If transient resources or test configs were created, register them:
   ccrystal transient lease <id> -t <type> -p '<path>' -d '<desc>' --policy revert_on_conclusion
4. Print a concise summary of the persisted crystal state.
```
