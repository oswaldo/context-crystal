package ccrystal.site

import com.raquo.laminar.api.L.{*, given}

object Footer:
  def render(): HtmlElement =
    footerTag(
      className := "portal-footer",
      div(
        className := "container footer-inner",
        div(
          className := "footer-brand-block",
          div(className := "footer-logo", span(className := "crystal-glyph", "◈"), span("Context Crystal")),
          p(
            className := "footer-manifesto-quote",
            "\"Context is not a vector database. It is a sovereign, deterministic DAG.\"",
          ),
          p(
            className := "footer-subquote",
            "Engineered for biological software architects and computational AI entities pair-programming in high-stakes codebases.",
          ),
        ),
        div(
          className := "footer-links-grid",
          div(
            className := "footer-col",
            h4("Specifications & Standards"),
            ul(
              li(a(href := "https://github.com/oswaldo/context-crystal/blob/main/spec/v1/context-crystal.json", target := "_blank", "JSON Schema v1")),
              li(a(href := "https://github.com/oswaldo/context-crystal/blob/main/spec/v1/context-crystal.json", target := "_blank", "JSON-LD Context")),
              li(a(href := "https://github.com/oswaldo/context-crystal/blob/main/skills/context-crystal/SKILL.md", target := "_blank", "Universal Agent Skill")),
            ),
          ),
          div(
            className := "footer-col",
            h4("Engine & Protocols"),
            ul(
              li(a(href := "https://github.com/oswaldo/context-crystal/blob/main/cli/shared/src/main/scala/ccrystal/cli/mcp/DefaultMcpHandler.scala", target := "_blank", "Native MCP Server Engine")),
              li(a(href := "https://github.com/oswaldo/context-crystal/blob/main/install.sh", target := "_blank", "Single-Line Installer")),
              li(a(href := "llms.txt", target := "_blank", "llms.txt (Machine Ingestion)")),
              li(a(href := "llms-full.txt", target := "_blank", "llms-full.txt (Full Corpus)")),
            ),
          ),
          div(
            className := "footer-col",
            h4("Open Source"),
            ul(
              li(a(href := "https://github.com/oswaldo/context-crystal", target := "_blank", "GitHub Repository")),
              li(a(href := "https://github.com/oswaldo/context-crystal/releases", target := "_blank", "Release Binaries")),
              li(a(href := "https://github.com/oswaldo/context-crystal/blob/main/LICENSE", target := "_blank", "MIT License")),
            ),
          ),
        ),
      ),
      div(
        className := "container footer-bottom",
        p("Copyright © 2026 Oswaldo C. Dantas Júnior & Context Crystal Contributors. Pure functional Scala 3 Native & Scala.js."),
      ),
    )
