# Specification: Universal Agent Runtime Matrix & Automated Onboarding

## 1. Overview & Vision
Context Crystal decouples context, entities, and tools from individual chat sessions and agent runtimes. However, developers and AI entities working across heterogeneous AI harnesses (Google Antigravity, Claude Code / Desktop, Cursor, Windsurf, Zed) currently face manual friction configuring and discovering Context Crystal's native MCP server (`ccrystal mcp`).

This track establishes a universal agent runtime matrix and automated onboarding engine via two native CLI subcommands:
1. `ccrystal agent doctor`: Diagnoses and verifies the environment, binary PATH resolution, cave store permissions, and harness configurations.
2. `ccrystal agent install`: Safely, non-destructively discovers and auto-configures Context Crystal's MCP server across all detected agent harnesses on the local machine.

---

## 2. Target Harness Matrix & Platform Architecture

### Platform Targets
- **Primary Tier:** Linux (x86_64, aarch64) and macOS (Apple Silicon aarch64, Intel x86_64) via **Scala Native** optimized binaries, plus **Scala JVM** as a universal runner.
- **Windows:** Best-effort path resolution supporting JVM runtimes, avoiding Scala Native Windows toolchain quirks.

### Supported Harnesses
| Harness | Target Configuration File (Linux / macOS) | Config Format / Key |
| :--- | :--- | :--- |
| **Google Antigravity** | `~/.gemini/antigravity-cli/mcp/context-crystal/` | Directory structure / schemas |
| **Claude Code** | `~/.claude.json` or `~/.config/claude-code/mcp.json` | `mcpServers` JSON object |
| **Claude Desktop** | `~/.config/Claude/claude_desktop_config.json` (Linux), `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) | `mcpServers` JSON object |
| **Cursor** | `~/.cursor/mcp.json` (global) or workspace `.cursor/mcp.json` | `mcpServers` JSON object |
| **Windsurf** | `~/.codeium/windsurf/mcp_config.json` | `mcpServers` JSON object |
| **Zed** | `~/.config/zed/settings.json` | `context_servers` JSON object / array |

---

## 3. Functional Requirements

### 3.1 Core Harness Domain Models & Path Resolution
- Define pure functional ADT `AgentHarness`:
  - `GoogleAntigravity`
  - `ClaudeCode`
  - `ClaudeDesktop`
  - `Cursor`
  - `Windsurf`
  - `Zed`
- Platform-aware path resolvers returning standard file coordinates based on OS environment (`sys.props("os.name")`, `$HOME`, `$XDG_CONFIG_HOME`, `$LIBRARY`).
- Pure, mockable environment lookup interface to enable deterministic unit testing across all target platforms.

### 3.2 Defensive JSON Patching & Backup Engine (`HarnessConfigPatcher`)
- **Minimal Dependencies:** Zero new external dependencies. Leverage existing Circe AST (`io.circe.Json`) already cross-compiled for Scala Native, JVM, and JS.
- **Defensive Merging:** Safely parse existing configuration files. Merge `context-crystal` MCP server definition without mutating, reordering, or clobbering other existing tools.
- **Mandatory Backup Protocol:**
  - Before writing any modification to an existing configuration file, generate an atomic backup file `<original_path>.ccrystal.bak`.
  - CLI output must explicitly display the path of the created backup file alongside clear, human- and AI-readable rollback instructions (e.g. `To revert: mv <backup_path> <original_path>`).
- **Atomic File Writing:** Write updated JSON to a temporary sibling file (`.tmp`) and atomically replace the destination to prevent partial write corruption.
- Canonical server payload:
  ```json
  {
    "command": "ccrystal",
    "args": ["mcp"]
  }
  ```

### 3.3 Diagnostic Engine (`ccrystal agent doctor`)
- Non-destructive inspection of local environment:
  - **Binary in PATH:** Verify if `ccrystal` is in `$PATH` and executable.
  - **Cave Store Health:** Verify current cave store (`.ccrystals/` or `$CCRYSTAL_STORE`) is accessible and writable.
  - **Harness Detection:** Check presence and status of each supported harness:
    - `Configured`: MCP entry is present and correctly configured.
    - `MissingConfig`: Harness appears installed, but Context Crystal is not registered.
    - `NotInstalled`: Harness config directory does not exist.
    - `Corrupted`: Config exists but fails to parse as valid JSON.
- Output formats:
  - Default: Cybernetic ANSI table with clear status badges (`[OK]`, `[WARN]`, `[MISSING]`).
  - `--json`: Machine-readable structured JSON report.
  - `--verbose`: Includes evaluated file paths, permission states, and details.

### 3.4 Automated Onboarding Engine (`ccrystal agent install`)
- Safely configures Context Crystal in discovered harnesses.
- Options:
  - `--target <harness>`: Target a specific harness (`antigravity`, `claude-code`, `claude-desktop`, `cursor`, `windsurf`, `zed`), or default to all detected harnesses.
  - `--dry-run`: Preview JSON modifications without disk writes or backup creation.
  - `--force`: Overwrite existing Context Crystal entry if outdated or corrupted.
- Emits explicit confirmation log with modified files, backup files, and rollback commands.

---

## 4. Non-Functional Requirements & Invariants
- **Zero-Warning & Strict Equality:** Complies with `-language:strictEquality` and `-Werror`.
- **Pure Functional:** No runtime mutation (`var`), no nulls, explicit `Either[E, A]` error handling.
- **Extensive Safety Testing:** Edge cases (malformed JSON, empty files, read-only permissions, non-existent directories, multi-server arrays) rigorously covered in MUnit test suite.
- **Zero Drift:** Decline parser provides canonical help and command flags.

---

## 5. Out of Scope
- Downloading/installing third-party IDE binaries.
- Network telemetry or cloud registration.
