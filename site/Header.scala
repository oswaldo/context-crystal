package ccrystal.site

import com.raquo.laminar.api.L.{*, given}

object Header:
  def render(): HtmlElement =
    headerTag(
      className := "portal-header",
      div(
        className := "container header-inner",
        div(
          className := "brand-cluster",
          div(
            className := "brand-logo",
            span(className := "crystal-glyph", "◈"),
            div(
              className := "brand-text-col",
              span(className := "brand-title", "Context Crystal"),
              span(className := "brand-badge", "v0.1.0-alpha • Zero-Token Context DAG"),
            ),
          ),
        ),
        navTag(
          className := "header-nav",
          Tab.values.map { tab =>
            button(
              typ := "button",
              className <-- State.activeTab.signal.map { active =>
                if active == tab then "nav-pill active" else "nav-pill"
              },
              span(className := "nav-pill-icon", tab.icon),
              span(className := "nav-pill-text", tab.label),
              onClick.mapTo(tab) --> State.activeTab.writer,
            )
          }.toList,
        ),
        div(
          className := "header-actions",
          a(
            className := "btn-github",
            href := "https://github.com/oswaldo/context-crystal",
            target := "_blank",
            rel := "noopener noreferrer",
            span(className := "github-icon", "★"),
            span("GitHub"),
          ),
        ),
      ),
    )
