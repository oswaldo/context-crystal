# Context Crystal: Cursor & Windsurf Adapter

Integrate Context Crystal into Cursor IDE and Windsurf.

## Quick Setup
- **For Cursor (MDC Format):**
  Copy `context-crystal.mdc` into `.cursor/rules/context-crystal.mdc`:
  ```bash
  mkdir -p .cursor/rules
  cp skills/context-crystal/adapters/cursor/context-crystal.mdc .cursor/rules/context-crystal.mdc
  ```
- **For Legacy `.cursorrules` / Windsurf:**
  Append `skills/context-crystal/adapters/cursor/.cursorrules` to your root `.cursorrules`.
