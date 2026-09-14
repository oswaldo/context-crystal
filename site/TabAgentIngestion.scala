package ccrystal.site

import com.raquo.laminar.api.L.{*, given}

object TabAgentIngestion:
  def render(): HtmlElement =
    div(
      className := "tab-content tab-agent-ingestion",
      sectionTag(
        className := "agent-intro",
        div(
          className := "mcp-badge",
          span("Machine-Readable Standard • Autonomous Ingestion • Zero Human Learning Curve"),
        ),
        h2("Autonomous AI Agent Ingestion (`llms.txt`)"),
        p("Context Crystal adheres to the emergent `/llms.txt` standard. Autonomous coding agents (Claude, ChatGPT, Perplexity, Devin, Cursor, Windsurf) can ingest our canonical operational rules, CLI flags, and MCP schemas directly."),
      ),

      // llms.txt Direct Links
      sectionTag(
        className := "qs-card",
        div(
          className := "qs-card-header",
          span(className := "qs-step-number", "1"),
          div(
            h3("Machine-Readable Endpoints"),
            p("Standardized plain-text documentation endpoints hosted at the root of this portal:"),
          ),
        ),
        div(
          className := "cards-grid two-col",
          div(
            className := "feature-card endpoint-card",
            div(className := "endpoint-header", span(className := "file-tag", "CONCISE"), code("/llms.txt")),
            p("Optimized for LLM context limits. Contains the core operational philosophy, essential CLI commands, MCP tool mappings, and behavioral invariants."),
            div(
              className := "endpoint-actions",
              a(href := "llms.txt", target := "_blank", className := "btn-mini active", "View llms.txt ↗"),
            ),
          ),
          div(
            className := "feature-card endpoint-card",
            div(className := "endpoint-header", span(className := "file-tag", "FULL CORPUS"), code("/llms-full.txt")),
            p("Complete reference corpus. Includes the full JSON Schema v1 specification, comprehensive CLI subcommands, and multi-entity authorship protocol rules."),
            div(
              className := "endpoint-actions",
              a(href := "llms-full.txt", target := "_blank", className := "btn-mini active", "View llms-full.txt ↗"),
            ),
          ),
        ),
      ),

      // System Prompt Injection Snippet
      sectionTag(
        className := "qs-card",
        div(
          className := "qs-card-header",
          span(className := "qs-step-number", "2"),
          div(
            h3("Direct Agent System Prompt / Custom Instructions"),
            p("Paste this directive into your agent harness, Cursor Rules, or custom instructions to instantly activate Context Crystal:"),
          ),
        ),
        div(
          className := "code-snippet-box",
          pre(
            code(
              """# Context Crystal Operational Directive for AI Entities
You have access to Context Crystal (`ccrystal` CLI and native MCP server).
- State Persistence: Never rely on chat window history. Inspect crystals at turn inception (`ccrystal list` or `crystal_list`).
- Context Beam Hydration: Hydrate living context before major edits (`ccrystal hydrate <id> --tail 5`).
- Zero Agent Debris: Always register transient leases for temporary worktrees (`ccrystal transient lease`) and ensure they are cleaned or promoted before goal conclusion.
- Atomic Transitions: Batch context updates atomically using `ccrystal batch` or `crystal_batch`."""
            ),
          ),
          button(
            typ := "button",
            className := "snippet-copy-btn",
            child.text <-- State.copiedSnippet.signal.map {
              case Some("agent-directive") => "✓ Copied"
              case _ => "Copy Directive"
            },
            onClick --> { _ =>
              State.copyToClipboard(
                "agent-directive",
                """# Context Crystal Operational Directive for AI Entities
You have access to Context Crystal (`ccrystal` CLI and native MCP server).
- State Persistence: Never rely on chat window history. Inspect crystals at turn inception (`ccrystal list` or `crystal_list`).
- Context Beam Hydration: Hydrate living context before major edits (`ccrystal hydrate <id> --tail 5`).
- Zero Agent Debris: Always register transient leases for temporary worktrees (`ccrystal transient lease`) and ensure they are cleaned or promoted before goal conclusion.
- Atomic Transitions: Batch context updates atomically using `ccrystal batch` or `crystal_batch`.""",
              )
            },
          ),
        ),
      ),
    )
