package ccrystal.site

import com.raquo.laminar.api.L.{*, given}

object TabManifesto:
  def render(): HtmlElement =
    div(
      className := "tab-content tab-manifesto",
      // Hero Section
      sectionTag(
        className := "hero-section",
        div(
          className := "hero-badge",
          span(className := "badge-pulse"),
          span("Open Source • Scala Native Sub-5ms Engine • Model Context Protocol"),
        ),
        h1(
          className := "hero-title",
          "Context is not a vector database.",
          br(),
          span(className := "text-gradient", "It is a deterministic DAG."),
        ),
        p(
          className := "hero-lead",
          "Context Crystal cures session amnesia and eliminates agent debris. A local-first, zero-token lifecycle and context beam engine engineered for biological software architects and computational AI swarms.",
        ),
        div(
          className := "hero-cta-group",
          button(
            typ := "button",
            className := "btn-primary",
            span("⚡ Install in 5 Seconds"),
            onClick.mapTo(Tab.Quickstart) --> State.activeTab.writer,
          ),
          button(
            typ := "button",
            className := "btn-secondary",
            span("⬡ Explore Live Interactive DAG"),
            onClick.mapTo(Tab.Explorer) --> State.activeTab.writer,
          ),
          a(
            className := "btn-tertiary",
            href := "https://github.com/oswaldo/context-crystal",
            target := "_blank",
            span("View on GitHub ↗"),
          ),
        ),
        // Terminal snippet
        div(
          className := "hero-terminal-card",
          div(
            className := "terminal-header",
            div(className := "terminal-dots", span(className := "dot red"), span(className := "dot yellow"), span(className := "dot green")),
            span(className := "terminal-title", "bash — single-line curl install"),
            button(
              typ := "button",
              className := "terminal-copy-btn",
              child.text <-- State.copiedSnippet.signal.map {
                case Some("hero-install") => "✓ Copied"
                case _ => "Copy"
              },
              onClick --> { _ =>
                State.copyToClipboard("hero-install", "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh")
              },
            ),
          ),
          pre(
            className := "terminal-body",
            code("curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh"),
          ),
        ),
      ),

      // The 3 Failures Section
      sectionTag(
        className := "section-block",
        div(
          className := "section-header text-center",
          h2("The Three Systemic Failures of Ephemeral AI Context"),
          p("Why flat chat windows, proprietary SQLite silos, and vector embeddings break down in real engineering codebases:"),
        ),
        div(
          className := "cards-grid three-col",
          div(
            className := "feature-card",
            div(className := "card-icon", "⏳"),
            h3("Session Amnesia"),
            p("Chat windows reset. Context is trapped in ephemeral IDE windows or proprietary cloud caches. Starting a new agent turn or switching machines loses hard-won architectural decisions and progress."),
          ),
          div(
            className := "feature-card",
            div(className := "card-icon", "🌪️"),
            h3("Agent Debris Deficit"),
            p("Autonomous coding agents create temporary git worktrees, mock configurations, and scratch test harnesses that linger indefinitely as orphaned technical debt when turns end or crash."),
          ),
          div(
            className := "feature-card",
            div(className := "card-icon", "💸"),
            h3("Token Inflation & Drift"),
            p("Re-summarizing entire conversations with an LLM burns valuable context budget and introduces hallucinatory drift into ground truth. Semantic vector similarity fails to represent exact causal state sequences."),
          ),
        ),
      ),

      // The Crystal Architecture
      sectionTag(
        className := "section-block",
        div(
          className := "section-header text-center",
          h2("The Sovereign Context Crystal Architecture"),
          p("A unified, deterministic ontology connecting intent, causal history, transient resources, and world state:"),
        ),
        div(
          className := "cards-grid two-col",
          div(
            className := "feature-card architecture-card",
            div(className := "card-tag", "THE CAVE CONTAINER"),
            h3("The Workspace Cave (.ccrystals/)"),
            p("A sovereign context container residing in your workspace or companion directory (`CCRYSTAL_STORE`). Houses active crystals, the multi-entity authorship registry, and shared artifact catalogs with zero proprietary locks."),
          ),
          div(
            className := "feature-card architecture-card",
            div(className := "card-tag", "DETERMINISTIC CAUSALITY"),
            h3("Directed Acyclic Graph (DAG)"),
            p("Causal state transitions with cryptographic attribution, explicit event timestamps, capture fidelity (`inferred` vs `intercepted`), and semantic anchors enabling surgical sub-DAG cleavage and branching."),
          ),
          div(
            className := "feature-card architecture-card",
            div(className := "card-tag", "CLEANLINESS GUARANTEE"),
            h3("Transient Resource Leases"),
            p("Temporary assets (e.g. isolated git worktrees, mock databases) require explicit leases. Context Crystal guarantees leases are cleaned or promoted before goal conclusion, leaving zero agent debris."),
          ),
          div(
            className := "feature-card architecture-card",
            div(className := "card-tag", "WORLD-STATE GROUNDING"),
            h3("Virtual & Physical Artifacts"),
            p("Bridges digital deliberation with real reality. First-class tracking of target deliverables, test instruments, and physical preconditions (lab benches, geo coordinates, civic addresses)."),
          ),
        ),
      ),

      // Hard Facts Comparison
      sectionTag(
        className := "section-block comparison-section",
        div(
          className := "section-header text-center",
          h2("Verified Ground-Truth Performance"),
          p("Engineered in pure functional Scala 3 Native with zero-reflection codecs and Immix GC:"),
        ),
        div(
          className := "table-wrapper",
          table(
            className := "comparison-table",
            thead(
              tr(
                th("Metric / Capability"),
                th("Context Crystal"),
                th("Vector DBs / RAG"),
                th("Ephemeral Chat Windows"),
              ),
            ),
            tbody(
              tr(
                td(strong("Execution Overhead")),
                td(span(className := "pill green", "< 5ms Native CLI")),
                td("200ms - 2,000ms API calls"),
                td("Session restart required"),
              ),
              tr(
                td(strong("Context Token Cost")),
                td(span(className := "pill green", "0 Tokens for State Ops")),
                td("Heavy embedding token burn"),
                td("Full window re-prompting"),
              ),
              tr(
                td(strong("Data Format")),
                td(span(className := "pill cyan", "Strict JSON Schema v1 & JSON-LD")),
                td("Opaque binary vector indices"),
                td("Proprietary internal silos"),
              ),
              tr(
                td(strong("Agent Protocol")),
                td(span(className := "pill green", "Native Stdio MCP Server (11 Tools)")),
                td("Custom vendor SDKs"),
                td("None (isolated manual chat)"),
              ),
              tr(
                td(strong("Debris Elimination")),
                td(span(className := "pill green", "Mandatory Transient Leases")),
                td("Unmanaged orphaned files"),
                td("Manual developer cleanup"),
              ),
            ),
          ),
        ),
      ),
    )
