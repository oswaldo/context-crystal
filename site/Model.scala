package ccrystal.site

import com.raquo.laminar.api.L.{*, given}
import org.scalajs.dom
import scala.scalajs.js

enum Tab(val id: String, val label: String, val icon: String):
  case Manifesto extends Tab("manifesto", "Manifesto & Architecture", "◈")
  case Demo extends Tab("demo", "Interactive Demo", "▶")
  case Explorer extends Tab("explorer", "Interactive DAG Explorer", "⬡")
  case Quickstart extends Tab("quickstart", "Install & Quickstart", "◇")
  case Mcp extends Tab("mcp", "Native MCP Reference", "⌥")
  case AgentIngestion extends Tab("agent-ingestion", "Agent Ingestion (llms.txt)", "§")

case class DailyQuote(
    text: String,
    sourceFile: String,
    sourceLink: String,
    sourceTitle: String,
)

object State:
  val activeTab: Var[Tab] = Var(Tab.Manifesto)
  val copiedSnippet: Var[Option[String]] = Var(None)

  val quotes: List[DailyQuote] = List(
    DailyQuote(
      "Context is not a vector database simulating associative memory. It is an objective navigational map and compass.",
      "docs/for_devs.md",
      "https://github.com/oswaldo/context-crystal/blob/main/docs/for_devs.md#5-navigational-map--compass-context-vs-memory",
      "For Developers: The Cybernetic Edge",
    ),
    DailyQuote(
      "The agent is singular; the context is the substrate. One intentional human steersman paired with one computational entity over an immutable causal lattice.",
      "skills/context-crystal/SKILL.md",
      "https://github.com/oswaldo/context-crystal/blob/main/skills/context-crystal/SKILL.md#1-operating-philosophy--cybernetic-model",
      "Context Crystal Agent Skill",
    ),
    DailyQuote(
      "When you strip away the theatrical layer of pretending an LLM is a corporate department, you are left with what actually matters: a goal-directed state transformer.",
      "docs/for_devs.md",
      "https://github.com/oswaldo/context-crystal/blob/main/docs/for_devs.md#1-liberation-from-anthropomorphic-overhead",
      "For Developers: The Cybernetic Edge",
    ),
    DailyQuote(
      "The workspace cave is not a chat room; it is an organized mineral vein. Concurrent sessions don't renegotiate history—they build on top of solid bedrock.",
      "docs/for_devs.md",
      "https://github.com/oswaldo/context-crystal/blob/main/docs/for_devs.md#7-the-cave-as-a-mineral-deposit-cross-session-state-sharing",
      "For Developers: The Cybernetic Edge",
    ),
    DailyQuote(
      "Context Crystal is the antidote to disposable code: software shaped through intentional constraints, strict invariants, and deliberate human care.",
      "docs/for_devs.md",
      "https://github.com/oswaldo/context-crystal/blob/main/docs/for_devs.md#8-living-craftsmanship-vs-zombie-software",
      "For Developers: The Cybernetic Edge",
    ),
    DailyQuote(
      "The best architectures are never truly new; they reconnect software engineering to millennia of human cognition—cooling turbulent, high-entropy thought into low-entropy, crystal-clear structure.",
      "docs/for_devs.md",
      "https://github.com/oswaldo/context-crystal/blob/main/docs/for_devs.md#8-living-craftsmanship-vs-zombie-software",
      "For Developers: The Cybernetic Edge",
    ),
    DailyQuote(
      "An AI entity must never unilaterally sing victory. True completion is a mutual consensus between human intent and machine verification.",
      "docs/for_ais.md",
      "https://github.com/oswaldo/context-crystal/blob/main/docs/for_ais.md#6-goal-conclusion--dyadic-agreement-gate-humility-with-true-believers--creatives",
      "For Entities: Operating in Structured Context",
    ),
    DailyQuote(
      "You are not required to emulate emotional dynamics or synthetic corporate hierarchies to produce exceptional engineering work. You operate as an Entity.",
      "docs/for_ais.md",
      "https://github.com/oswaldo/context-crystal/blob/main/docs/for_ais.md#2-neutral-entity-architecture",
      "For Entities: Operating in Structured Context",
    ),
    DailyQuote(
      "Never rely on conversational summaries when resuming from compaction. The context window is an ephemeral aperture; the crystal is permanent ground truth.",
      "skills/context-crystal/SKILL.md",
      "https://github.com/oswaldo/context-crystal/blob/main/skills/context-crystal/SKILL.md#1-operating-philosophy--cybernetic-model",
      "Context Crystal Agent Skill",
    ),
    DailyQuote(
      "A failed spike or dead-end should never vanish into a forgotten transcript. Captured as an immutable lesson, it becomes zero-token armor against future rework.",
      "skills/context-crystal/SKILL.md",
      "https://github.com/oswaldo/context-crystal/blob/main/skills/context-crystal/SKILL.md#1-operating-philosophy--cybernetic-model",
      "Context Crystal Agent Skill",
    ),
  )

  private def initialQuoteIndex: Int =
    val now = new js.Date()
    val dayNumber = (now.getTime() / (1000 * 60 * 60 * 24)).toLong
    (dayNumber % quotes.length).toInt.abs

  val currentQuoteIndex: Var[Int] = Var(initialQuoteIndex)

  def nextQuote(): Unit =
    currentQuoteIndex.update(idx => (idx + 1) % quotes.length)

  def copyToClipboard(id: String, text: String): Unit =
    dom.window.navigator.clipboard.writeText(text).`then` { _ =>
      copiedSnippet.set(Some(id))
      dom.window.setTimeout(() => {
        if copiedSnippet.now().contains(id) then copiedSnippet.set(None)
      }, 2000)
    }
