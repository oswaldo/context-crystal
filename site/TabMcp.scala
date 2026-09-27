package ccrystal.site

import com.raquo.laminar.api.L.{*, given}

object TabMcp:
  def render(): HtmlElement =
    div(
      className := "tab-content tab-mcp",
      sectionTag(
        className := "mcp-intro",
        div(
          className := "mcp-badge",
          span("Model Context Protocol • Stdio Transport • JSON-RPC 2.0"),
        ),
        h2("Native Model Context Protocol (MCP) Server Engine"),
        p("Context Crystal features an integrated, high-performance stdio MCP server running directly from the native binary (`ccrystal mcp`). No Node.js daemon, Python wrapper, or external orchestrator required."),
      ),

      // Client Configuration Cards
      sectionTag(
        className := "qs-card",
        div(
          className := "qs-card-header",
          span(className := "qs-step-number", "1"),
          div(
            h3("Frictionless IDE & Agent Harness Setup"),
            p("Connect Context Crystal to your preferred AI coding environment:"),
          ),
        ),
        div(
          className := "cards-grid two-col",
          // Automated Agent Installer
          div(
            className := "feature-card client-config-card",
            div(className := "client-header", strong("Automated Onboarding (Recommended)")),
            p(className := "config-path", "Claude Desktop • Cursor • Windsurf • Zed • Google Antigravity • Claude Code"),
            p("Context Crystal automatically discovers installed IDEs and agent runtimes, updates their configurations, and creates defensive `.ccrystal.bak` rollback snapshots:"),
            div(
              className := "code-snippet-box",
              pre(code("ccrystal agent install --all")),
              button(
                typ := "button",
                className := "snippet-copy-btn",
                child.text <-- State.copiedSnippet.signal.map {
                  case Some("agent-install") => "✓ Copied"
                  case _ => "Copy"
                },
                onClick --> { _ =>
                  State.copyToClipboard("agent-install", "ccrystal agent install --all")
                },
              ),
            ),
            p(className := "config-path", "Run diagnostic anytime to inspect health: `ccrystal agent doctor`"),
          ),
          // Unified Manual Declaration
          div(
            className := "feature-card client-config-card",
            div(
              className := "client-header",
              Icons.claude(18),
              Icons.cursor(18),
              Icons.zed(18),
              strong("Manual Configuration"),
            ),
            p(className := "config-path", "Claude Desktop, Cursor, Windsurf, Zed, and Custom Harnesses"),
            pre(
              code(
                """{
  "mcpServers": {
    "context-crystal": {
      "command": "ccrystal",
      "args": ["mcp"]
    }
  }
}"""
              ),
            ),
            p(className := "config-path", "Config files: Claude (~/.config/Claude/claude_desktop_config.json) • Cursor (.cursor/mcp.json) • Windsurf (~/.codeium/windsurf/mcp_config.json) • Zed (context_servers in settings.json)"),
          ),
        ),
      ),

      // 15 Native MCP Tools Table
      sectionTag(
        className := "qs-card",
        div(
          className := "qs-card-header",
          span(className := "qs-step-number", "2"),
          div(
            h3("The 15 Native MCP Tools"),
            p("First-class protocol capabilities designed specifically for autonomous AI pairs:"),
          ),
        ),
        div(
          className := "table-wrapper",
          table(
            className := "mcp-tools-table",
            thead(
              tr(
                th("Tool Name"),
                th("Parameters"),
                th("Description & Behavioral Invariant"),
              ),
            ),
            tbody(
              tr(
                td(code("crystal_init")),
                td(code("id, goal_title, intent, tasks?")),
                td("Atomically instantiates a new crystal with predefined acceptance criteria."),
              ),
              tr(
                td(code("crystal_list")),
                td(code("status?, json_output?")),
                td("Queries crystals in the workspace cave with optional InProgress/Concluded filter."),
              ),
              tr(
                td(code("crystal_hydrate")),
                td(code("crystal_id, tail?, from?, to?, depth?, summary_only?")),
                td("Casts context beam into prompt with precise selective shaping flags."),
              ),
              tr(
                td(code("crystal_triage")),
                td(code("filter?, json_output?")),
                td("Deterministic cave hygiene: classifies crystals into solid, stale, or active aging buckets."),
              ),
              tr(
                td(code("crystal_artifact")),
                td(code("action, id?, name?, substrate?, role?, uri?, cave?")),
                td("Registers, lists, or inspects virtual and physical artifacts across cave or crystal."),
              ),
              tr(
                td(code("crystal_checkpoint")),
                td(code("crystal_id, summary, fidelity?")),
                td("Appends an immutable checkpoint transition node to the active DAG."),
              ),
              tr(
                td(code("crystal_task_transition")),
                td(code("crystal_id, task_id, status")),
                td("Transitions an acceptance criterion to completed, in_progress, or blocked."),
              ),
              tr(
                td(code("crystal_goal_transition")),
                td(code("crystal_id, status, reason?")),
                td("Concludes or transitions crystal lifecycle goal (in_progress, concluded_success, concluded_abandoned)."),
              ),
              tr(
                td(code("crystal_transient_lease")),
                td(code("crystal_id, resource_type, path?, desc, policy")),
                td("Registers an ephemeral resource lease (git_worktree, mock) with cleanup policy."),
              ),
              tr(
                td(code("crystal_slice_fork")),
                td(code("source_id, fork_to, from?, to?, prune?")),
                td("Cleaves sub-DAG at a semantic anchor and forks into a dedicated child crystal."),
              ),
              tr(
                td(code("crystal_melt")),
                td(code("crystal_id, from, to, summary?")),
                td("Deterministically squashes linear sub-DAG segment into single checkpoint without LLM drift."),
              ),
              tr(
                td(code("crystal_archive")),
                td(code("crystal_id")),
                td("Moves concluded crystal into cold storage (.ccrystals/archive/) while preserving history."),
              ),
              tr(
                td(code("crystal_unarchive")),
                td(code("crystal_id")),
                td("Restores archived crystal from cold storage back to active workspace cave."),
              ),
              tr(
                td(code("crystal_delete")),
                td(code("crystal_id, force?")),
                td("Destructive lifecycle removal with cascade orphaned entity preview."),
              ),
              tr(
                td(code("crystal_batch")),
                td(code("commands")),
                td("Executes multiple semicolon-delimited CLI commands atomically in a single turn."),
              ),
            ),
          ),
        ),
      ),
    )
