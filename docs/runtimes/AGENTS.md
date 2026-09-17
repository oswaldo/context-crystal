# Context Crystal Template for `AGENTS.md` (Open Agent Standard)

Add the following section to your repository's `AGENTS.md` to establish multi-agent operational invariants:

```markdown
## Context Crystal Operating Rules for Entities

- **Proactive Context Anchoring:**
  Before initiating multi-step work, inspect open crystals (`ccrystal list` or MCP `crystal_list`). Attach to an existing crystal or initialize a dedicated crystal (`ccrystal init` or MCP `crystal_init`).
- **Atomic Compound Batching:**
  Use compound recipes (`ccrystal batch "..."` or MCP `crystal_batch`) to record checkpoints, task completions, and transient leases in a single turn.
- **Capture Fidelity Guarantee:**
  Set `--fidelity inferred` (default) for agent-authored reasoning; reserve `--fidelity intercepted` for literal tool outputs.
- **Goal Conclusion & Hygiene:**
  Upon completing all acceptance criteria, conclude the crystal (`ccrystal conclude <id> -s "<summary>"` or MCP `crystal_goal_transition`). Providing a summary automatically generates a `resolution` node preserving causal provenance.
- **Transient Cleanliness:**
  Clean or promote all transient resource leases (`ccrystal transient clean` or MCP `crystal_transient_lease`) prior to concluding.
- **Dual-Key & Remote Security:**
  Never run `git push` autonomously. Always halt for operator verification and confirmation.
```
