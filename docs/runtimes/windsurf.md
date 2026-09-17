# Context Crystal Guidelines for Codeium Windsurf (`.windsurfrules`)

Place the following rules inside `.windsurfrules` at your repository root:

```markdown
# Context Crystal Workflow Rules

This project tracks goals and state transitions using Context Crystal (`ccrystal`).

- **Task Start:**
  Check `ccrystal list --status in_progress` or MCP `crystal_list`. Attach to an existing crystal or initialize one before generating code.
- **Milestones:**
  Flush progress before yielding turn using atomic batches:
  `ccrystal batch "node add <id> -k checkpoint -s '<summary>'; task done <id> -t <task-id>"`
- **Completion:**
  Always conclude the active crystal once acceptance criteria are fulfilled:
  `ccrystal conclude <id> -s "<summary>"` (or MCP `crystal_goal_transition`).
- **Hygiene & Safety:**
  - Clean or promote all transient resource leases before concluding.
  - Never execute `git push` without explicit user permission.
  - Never commit personal identifiable information (PII) to `.ccrystals/`.
```
