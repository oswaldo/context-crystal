# Lessons Learned: Release v1.3.0: Modular Spec Extensions, CEP-0002 Media Provenance, and Native MCP Ergonomics

> [!NOTE]
> **Auto-Generated View:** This file is projected from `crystal.json` (the single source of truth). Do not edit manually; use `ccrystal` CLI commands to update state.

### Lesson `[lesson-1]` - Status: Open
- **Observed Friction:** Pure declarative extensions force agents to parse raw probe stdout and compose large JSON payloads, burning context tokens. Monorepo subfolders also risk cave blindness if execution starts outside workspace root.
- **Root Cause:** Absence of native media probe commands in declarative package, and store resolution currently checks workingDir rather than walking up to repo root.
- **Recommended Action:** Implement upward parent cave traversal and declared subcaves in Track 33, and deliver dedicated Scala Native core-extensions/media submodule in v1.3.1 (Track 34) for single-turn probe and registration.

