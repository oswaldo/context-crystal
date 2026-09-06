# Context Crystal: Claude Code Adapter

Integrate Context Crystal into Anthropic's Claude Code CLI.

## Quick Setup
1. **System Prompt / Project Instructions:**
   Append the contents of [`CLAUDE.md`](./CLAUDE.md) to your repository's root `CLAUDE.md`.
2. **Slash Command:**
   Copy [`crystallize.md`](./crystallize.md) into `.claude/commands/crystallize.md`:
   ```bash
   mkdir -p .claude/commands
   cp skills/context-crystal/adapters/claude/crystallize.md .claude/commands/crystallize.md
   ```
3. Run `/crystallize` in any Claude Code session to snapshot progress atomically.
