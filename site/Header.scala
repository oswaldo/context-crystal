package ccrystal.site

import com.raquo.laminar.api.L.{*, given}

object Header:
  val mobileMenuOpen: Var[Boolean] = Var(false)

  def render(): HtmlElement =
    headerTag(
      className := "portal-header",
      div(
        className := "container header-inner",
        div(
          className := "brand-cluster",
          div(
            className := "brand-logo",
            onClick --> { _ =>
              State.activeTab.set(Tab.Manifesto)
              mobileMenuOpen.set(false)
            },
            span(className := "crystal-glyph", "◈"),
            div(
              className := "brand-text-col",
              span(className := "brand-title", "Context Crystal"),
              span(className := "brand-badge", "v1.2.0 • Zero-Token Context DAG"),
            ),
          ),
        ),

        // Desktop Navigation
        navTag(
          className := "header-nav desktop-nav",
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

        // Desktop GitHub Link
        div(
          className := "header-actions desktop-actions",
          a(
            className := "btn-github",
            href := "https://github.com/oswaldo/context-crystal",
            target := "_blank",
            rel := "noopener noreferrer",
            Icons.github(16),
            span("GitHub"),
          ),
        ),

        // Mobile Actions (GitHub + Hamburger Menu)
        div(
          className := "header-mobile-actions",
          a(
            className := "btn-icon-mobile",
            href := "https://github.com/oswaldo/context-crystal",
            target := "_blank",
            rel := "noopener noreferrer",
            Icons.github(18),
          ),
          button(
            typ := "button",
            className := "btn-hamburger",
            child <-- mobileMenuOpen.signal.map(open => if open then Icons.close(22) else Icons.menu(22)),
            onClick --> { _ => mobileMenuOpen.update(!_) },
          ),
        ),
      ),

      // Mobile Glass Dropdown Drawer
      div(
        className <-- mobileMenuOpen.signal.map(open => if open then "mobile-drawer open" else "mobile-drawer"),
        div(
          className := "container mobile-drawer-inner",
          Tab.values.map { tab =>
            button(
              typ := "button",
              className <-- State.activeTab.signal.map { active =>
                if active == tab then "mobile-nav-item active" else "mobile-nav-item"
              },
              span(className := "mobile-nav-icon", tab.icon),
              span(className := "mobile-nav-label", tab.label),
              onClick --> { _ =>
                State.activeTab.set(tab)
                mobileMenuOpen.set(false)
              },
            )
          }.toList,
        ),
      ),
    )
