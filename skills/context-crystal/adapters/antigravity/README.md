# Context Crystal: Antigravity Host Adapter

This adapter provides native integration guidelines and rules for Google Antigravity (AGY) and Jetski host environments.

---

## 1. Skill Discovery & Installation

Antigravity discovers skills in two canonical locations:
1. **Workspace-Local:** `.agents/skills/context-crystal/SKILL.md`
2. **User-Global:** `~/.gemini/antigravity-cli/skills/context-crystal/SKILL.md`

### Installing in a Project
To enable Context Crystal in any Antigravity workspace:
```bash
mkdir -p .agents/skills/context-crystal
# Symlink canonical skill definition:
ln -sf "$(pwd)/skills/context-crystal/SKILL.md" .agents/skills/context-crystal/SKILL.md
```

---

## 2. Native Modal Prompts (`ask_question`)

When operating in Antigravity or Jetski, agents must utilize the native GUI modal tool (`ask_question`) for structured user interactions:

### Modal Trigger Guidelines
- **Ambiguous Inception:** If multiple crystals exist in `.ccrystals/` (or `$CCRYSTAL_STORE`), prompt the user to choose which crystal to cast or resume.
- **Cleavage & Context Forking:** When an out-of-scope issue or adjacent bug is discovered, present a modal asking whether to:
  1. Fork to a child crystal (`ccrystal slice --fork-to <child> --prune`)
  2. Continue in current scope
  3. Defer investigation
- **Clean Repository Preference:** On initial initialization, if `.ccrystals/` does not exist, ask if the user prefers storing context in an out-of-tree companion repository (`CCRYSTAL_STORE`).

---

## 3. Subagent Delegation Protocol

When delegating tasks to Antigravity subagents (`invoke_subagent`):
- Pass the active crystal ID in the prompt.
- Instruct subagents to record milestone DAG nodes or transient leases using `ccrystal batch`.
- The parent agent runs `ccrystal hydrate <id>` upon subagent completion to integrate state changes.
