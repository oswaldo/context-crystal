package ccrystal.site

import com.raquo.laminar.api.L.{*, given}
import org.scalajs.dom

enum Tab(val id: String, val label: String, val icon: String):
  case Manifesto extends Tab("manifesto", "Manifesto & Architecture", "◈")
  case Explorer extends Tab("explorer", "Interactive DAG Explorer", "⬡")
  case Quickstart extends Tab("quickstart", "Install & Quickstart", "◇")
  case Mcp extends Tab("mcp", "Native MCP Reference", "⌥")
  case AgentIngestion extends Tab("agent-ingestion", "Agent Ingestion (llms.txt)", "§")

object State:
  val activeTab: Var[Tab] = Var(Tab.Manifesto)
  val copiedSnippet: Var[Option[String]] = Var(None)

  def copyToClipboard(id: String, text: String): Unit =
    dom.window.navigator.clipboard.writeText(text).`then` { _ =>
      copiedSnippet.set(Some(id))
      dom.window.setTimeout(() => {
        if copiedSnippet.now().contains(id) then copiedSnippet.set(None)
      }, 2000)
    }
