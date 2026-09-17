# Context Crystal Guidelines for GitHub Copilot (`.github/copilot-instructions.md`)

Add the following instructions to `.github/copilot-instructions.md` in your repository:

```markdown
# Context Crystal Operational Guidelines

This repository utilizes Context Crystal (`ccrystal`) for causal lineage, architectural decision provenance, and task tracking.

- **Check Current Goals:**
  Before proposing major changes, inspect open crystals:
  `ccrystal list --status in_progress`
- **Track Decisions:**
  When resolving architectural decisions, record the rationale in the crystal DAG:
  `ccrystal node add <crystal-id> -k checkpoint -s "<Rationale>" --fidelity inferred`
- **Mark Completion:**
  When tasks are implemented and verified, mark task done and conclude the goal:
  `ccrystal batch "task done <id> -t <task-id>; conclude <id> -s '<Summary>'"`
- **Strict Invariant:**
  Never introduce unprompted deletions or personal email/name leaks into `.ccrystals/`.
```
