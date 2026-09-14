package ccrystal.site

import com.raquo.laminar.api.L.{*, given}
import org.scalajs.dom

object Main:
  def main(args: Array[String]): Unit =
    lazy val appContainer = dom.document.querySelector("#app")
    renderOnDomContentLoaded(appContainer, appElement)

  def appElement: HtmlElement =
    div(
      className := "portal-root",
      Header.render(),
      mainTag(
        className := "portal-main container",
        child <-- State.activeTab.signal.map {
          case Tab.Manifesto      => TabManifesto.render()
          case Tab.Explorer       => TabExplorer.render()
          case Tab.Quickstart     => TabQuickstart.render()
          case Tab.Mcp            => TabMcp.render()
          case Tab.AgentIngestion => TabAgentIngestion.render()
        },
      ),
      Footer.render(),
    )
