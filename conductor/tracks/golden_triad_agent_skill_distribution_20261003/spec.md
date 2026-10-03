# Specification: Golden Triad Onboarding: Agent Skill Auto-Distribution & Doctor Evolution

## 1. Overview & Vision

Context Crystal decouples context, entities, and tools from individual chat sessions and agent runtimes. Track 17 established automated onboarding for MCP server registration across supported harnesses. However, having access to MCP tools alone is only one-third of the "Golden Triad":

1. **The Runtime Binary (`ccrystal`):** The engine and deterministic CLI.
2. **The MCP Server Engine (`ccrystal mcp`):** The real-time interactive JSON-RPC communication bridge providing tool calls and prompt resources.
3. **The Agent Skill (`SKILL.md`):** The cognitive reflexes, operational invariants, anti-amnesia re-anchoring protocols, and task lifecycle ceremonies that guide agent behavior with zero human friction.

Without the skill equipped, agents frequently hallucinate CLI invocations, fail to re-hydrate context beams after context window compaction, omit transient lease cleanup, or neglect cave hygiene.

This track evolves `ccrystal agent doctor` and `ccrystal agent install` to complete the Golden Triad:

- **Skill Diagnostic in `ccrystal agent doctor`:** Evaluates whether each detected harness has the Context Crystal skill equipped alongside MCP configuration.
- **Skill Auto-Distribution in `ccrystal agent install`:** Safely deploys the canonical skill file into target harness skill directories (e.g. `~/.gemini/antigravity-cli/skills/context-crystal/SKILL.md`, `~/.claude/skills/context-crystal/SKILL.md`, and workspace-local `.agents/skills/context-crystal/SKILL.md`), copying by default or optionally symlinking.
- **Embedded Canonical Template:** Embeds the canonical `SKILL.md` template directly within the compiled binary with transparent fallback to local workspace files, ensuring zero-dependency, single-binary distribution.

---

## 2. Target Harness & Skill Coordinate Matrix

| Harness | MCP Config Target | Global Skill Target Directory / File | Workspace-Local Skill Target |
| :--- | :--- | :--- | :--- |
| **Google Antigravity** | `~/.gemini/antigravity-cli/mcp/context-crystal/` | `~/.gemini/antigravity-cli/skills/context-crystal/SKILL.md` | `.agents/skills/context-crystal/SKILL.md` |
| **Claude Code** | `~/.claude.json` | `~/.claude/skills/context-crystal/SKILL.md` | `.agents/skills/context-crystal/SKILL.md` |
| **Claude Desktop** | `claude_desktop_config.json` | `~/.claude/skills/context-crystal/SKILL.md` | `.agents/skills/context-crystal/SKILL.md` |
| **Cursor** | `~/.cursor/mcp.json` | `~/.cursor/rules/context-crystal.mdc` or `~/.cursorrules` | `.cursor/rules/context-crystal.mdc` or `.cursorrules` |
| **Windsurf** | `~/.codeium/windsurf/mcp_config.json` | `~/.codeium/windsurf/memories/` or standard skills | `.windsurfrules` or `.agents/skills/context-crystal/SKILL.md` |
| **Zed** | `settings.json` | N/A (MCP only / workspace prompt) | `.agents/skills/context-crystal/SKILL.md` |

---

## 3. Functional Requirements

### 3.1 Domain Model Evolution (`AgentHarness` & `AgentDoctor`)

- Extend `HarnessPathResolver` with:
  - `skillPath(harness: AgentHarness): Option[String]`: Resolves standard global skill installation paths for harnesses that support dedicated skill directories.
  - `workspaceSkillPath: String`: Resolves canonical `.agents/skills/context-crystal/SKILL.md`.
- Extend `HarnessDiagnosis`:
  - `mcpStatus: HarnessStatus` (renamed from or aliased to status)
  - `skillStatus: SkillStatus`:
    - `Equipped`: Valid `SKILL.md` file present in global harness or workspace-local path.
    - `Missing`: Harness is installed or configured with MCP, but skill is not equipped.
    - `NotSupported`: Harness does not have an autonomous file-based skill directory (e.g. Zed).
  - `skillPath: Option[String]`: Evaluated path of the skill file.
- Backward compatibility: Retain `status` as an alias or composite health indicator on `HarnessDiagnosis` so existing codecs and callers don't break.

### 3.2 Canonical Skill Template Bundling

- Bundle the authoritative `SKILL.md` into `ccrystal` as a compile-time resource or string constant (`CanonicalSkill.content`), ensuring standalone distribution works without needing git repository clones.
- When installing or verifying, if a local `.agents/skills/context-crystal/SKILL.md` exists and is newer or custom, allow optional override, but default to the canonical embedded standard.

### 3.3 Diagnostic Evolution (`ccrystal agent doctor`)

- In text rendering:
  - Render an enhanced Matrix table showing both MCP and Skill readiness for each harness.
  - Display diagnostic tips when an agent has MCP tools configured without the skill:
    > "Tip: Google Antigravity has MCP tools registered but lacks the agent skill. Run 'ccrystal agent install' to equip cognitive reflexes."
- In JSON rendering:
  - Serialize `skillStatus` and `skillPath` within each diagnosis node.

### 3.4 Automated Distribution Engine (`ccrystal agent install`)

- Update `AgentInstaller.install`:
  - New parameter: `installSkill: Boolean = true` (Decline flag `--no-skill` to disable, or default true).
  - New parameter: `symlinkSkill: Boolean = false` (Decline flag `--symlink-skill` to create symlinks instead of copies).
  - New parameter: `installWorkspaceSkill: Boolean = false` (Decline flag `--workspace-skill` to install into `.agents/skills/context-crystal/` in current working directory).
- Execution semantics:
  - Ensure skill directory exists (via `operator.createDirectories`).
  - Deploy `SKILL.md`:
    - If `symlinkSkill` is true, invoke `operator.createSymlink(source, destination)`.
    - Otherwise, atomically copy or write canonical skill content via `operator.atomicWrite(destination, content)`.
  - Record skill installation receipt (`SkillInstallReceipt` or combined receipt).
  - Safe backup creation (`.ccrystal.bak`) if an existing `SKILL.md` is updated.

### 3.5 Decline CLI Interface

- `ccrystal agent install`:
  - `--no-skill`: Skip skill installation and only configure MCP server.
  - `--symlink-skill`: Symlink instead of copying canonical `SKILL.md`.
  - `--workspace-skill`: Install skill into local `.agents/skills/context-crystal/SKILL.md` in addition to global harness directories.
- `ccrystal agent doctor`:
  - Automatically checks and displays both MCP and Skill statuses.

---

## 4. Non-Functional Requirements & Invariants

- **Zero Reflection & Pure Functional:** Immutable case classes, enums, pure functional file operators.
- **Strict Equality & Zero Warnings:** Full `-language:strictEquality` compliance, zero linter warnings.
- **Atomic Operations & OCC:** Atomic writes for skills, zero torn writes, robust rollback instructions.
- **Cross-Platform Compatibility:** Linux, macOS, and Windows path resolution handling.

---

## 5. Out of Scope

- Dynamic skill execution outside supported harnesses.
- Harness-specific binary package managers (e.g. `npm install -g`, `brew`).
