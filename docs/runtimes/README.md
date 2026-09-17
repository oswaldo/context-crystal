# Multi-Runtime Project Structure & Agent Guidelines

Context Crystal is an entity-neutral, runtime-agnostic context persistence and causal DAG engine. This directory provides production-ready configuration snippets and rule templates for incorporating Context Crystal into repositories across major AI agent runtimes and IDE environments.

---

## Supported Agent Runtimes

| Runtime / Host | Target Location in Project | Template File |
| :--- | :--- | :--- |
| **Official MCP Clients** | Wire-level via `InitializeResult.instructions` | *(Automatic over MCP stdio protocol)* |
| **Anthropic Claude Code** | `CLAUDE.md` | [`CLAUDE.md`](./CLAUDE.md) |
| **Cursor IDE** | `.cursor/rules/context-crystal.mdc` or `.cursorrules` | [`cursor.mdc`](./cursor.mdc) |
| **Codeium Windsurf** | `.windsurfrules` | [`windsurf.md`](./windsurf.md) |
| **GitHub Copilot** | `.github/copilot-instructions.md` | [`copilot.md`](./copilot.md) |
| **Google Antigravity** | `~/.gemini/antigravity-cli/mcp/context-crystal/instructions.md` | [`../mcp/instructions.md`](../mcp/instructions.md) |
| **Open Agent Standard** | `AGENTS.md` | [`AGENTS.md`](./AGENTS.md) |

---

## Core Operational Invariants for All Runtimes

Regardless of the host agent runtime, every AI entity interacting with a Context Crystal repository should follow these fundamental invariants:

1. **Inception Before Mutation:** Before editing code or creating files, check for existing crystals (`ccrystal list` or MCP `crystal_list`). If a matching crystal exists, hydrate context (`ccrystal hydrate <id>` or MCP `crystal_hydrate`); if not, initialize one (`ccrystal init <id> -g "<goal>"` or MCP `crystal_init`).
2. **Atomic Compound Recipes:** In multi-turn transitions, use compound semicolon-separated commands in `ccrystal batch` or MCP `crystal_batch` to execute checkpoints, task status updates, and leases in a single turn roundtrip.
3. **Goal Lifecycle Conclusion:** When all tasks and criteria are complete, always conclude the crystal (`ccrystal conclude <id> -s "<summary>"` or MCP `crystal_goal_transition`) to transition goal status to `concluded_success` and append a provenance resolution DAG node.
4. **Transient Cleanup:** Clean or promote all transient resource leases (`ccrystal transient clean` or MCP `crystal_transient_lease`) before marking tasks complete.
5. **PII Safety & Synthetic Hygiene:** Never persist real names, personal emails, or private credentials into `.ccrystals/`. Always use synthetic placeholders (RFC 2606 `example.com`, `usr_lead`, `agt_antigravity`).
6. **Dual-Key Gating:** Never execute `git push` autonomously. Always pause for human operator review and manual push confirmation.
