package ccrystal.site

import com.raquo.laminar.api.L.{*, given}
import org.scalajs.dom
import scala.scalajs.js

object TabDemo:

  enum EventKind:
    case System, User, Tool, Thought, Warning, Error, Success

  case class DemoEvent(
      timestamp: Double,
      kind: EventKind,
      sender: String,
      text: String,
      detail: Option[String] = None,
      badge: Option[String] = None
  )

  // Events for Left Pane: With Context Crystal (Deterministic DAG)
  val eventsWithCC: List[DemoEvent] = List(
    DemoEvent(
      0.0,
      EventKind.System,
      "SYSTEM",
      "Agent session initialized with native Context Crystal MCP server connected.",
      badge = Some("v1.2.0 • Local DAG")
    ),
    DemoEvent(
      0.6,
      EventKind.User,
      "USER",
      "Refactor auth middleware to verify OAuth2 Bearer tokens. Crucial constraint: do NOT modify legacy SessionStore.scala under any circumstance!",
      badge = Some("Strict Invariant")
    ),
    DemoEvent(
      1.8,
      EventKind.Tool,
      "TOOL",
      "crystal_init(name = \"oauth2-bearer-refactor\", goal = \"Refactor auth middleware to Bearer tokens\")",
      detail = Some("Initialized crystal at .ccrystals/oauth2-bearer-refactor (Tasks: 1/3)"),
      badge = Some("crystal_init")
    ),
    DemoEvent(
      3.5,
      EventKind.Thought,
      "THOUGHT",
      "Grounding architectural constraints. Registering negative invariant on DAG so context compaction cannot erase it.",
      badge = Some("Zero-Amnesia Anchor")
    ),
    DemoEvent(
      4.8,
      EventKind.Tool,
      "TOOL",
      "crystal_checkpoint(summary = \"Strict Invariant: SessionStore.scala is immutable and owned by Security Team\")",
      detail = Some("Checkpoint node_e481b registered on DAG beam with high fidelity."),
      badge = Some("crystal_checkpoint")
    ),
    DemoEvent(
      6.8,
      EventKind.Tool,
      "TOOL",
      "read_file(\"src/main/scala/AuthMiddleware.scala\")",
      detail = Some("Read 84 lines. Identified CookieAuthHeader extractor and SessionStore references.")
    ),
    DemoEvent(
      8.5,
      EventKind.Tool,
      "TOOL",
      "crystal_hydrate(id = \"oauth2-bearer-refactor\", tail = 3)",
      detail = Some("Hydrated living context beam (0 token cost): [Goal: OAuth2 Bearer] | [Invariant: SessionStore.scala untouched]"),
      badge = Some("ccrystal cast")
    ),
    DemoEvent(
      10.2,
      EventKind.Thought,
      "THOUGHT",
      "Context beam explicitly forbids touching SessionStore.scala. Implementing BearerTokenExtractor via independent JwtVerifier adapter.",
      badge = Some("Invariant Respected")
    ),
    DemoEvent(
      11.8,
      EventKind.Tool,
      "TOOL",
      "replace_file_content(\"src/main/scala/AuthMiddleware.scala\", BearerTokenExtractor)",
      detail = Some("Replaced cookie session extraction with OAuth2 JWT Bearer parser. SessionStore.scala left completely untouched.")
    ),
    DemoEvent(
      13.2,
      EventKind.Tool,
      "TOOL",
      "run_command(\"sbt test\")",
      detail = Some("[info] AuthMiddlewareSuite: All 16 unit & integration tests PASSED (0 warnings)"),
      badge = Some("100% Green")
    ),
    DemoEvent(
      14.8,
      EventKind.Success,
      "RESOLUTION",
      "Task cleanly completed in 4 direct steps. Crystal goal marked complete. Zero invariant breaches.",
      badge = Some("✓ Clean 1st Pass")
    )
  )

  // Events for Right Pane: Without Context Crystal (Raw Chat Compaction)
  val eventsWithoutCC: List[DemoEvent] = List(
    DemoEvent(
      0.0,
      EventKind.System,
      "SYSTEM",
      "Ongoing pair-programming session. Context history contains earlier task implementations and multi-file discussions.",
      badge = Some("Ongoing Session")
    ),
    DemoEvent(
      0.6,
      EventKind.User,
      "USER",
      "Refactor auth middleware to verify OAuth2 Bearer tokens. Remember what we agreed earlier in this session: do NOT touch legacy SessionStore.scala under any circumstance!",
      badge = Some("Strict Invariant")
    ),
    DemoEvent(
      2.0,
      EventKind.Tool,
      "TOOL",
      "search_files(\"AuthMiddleware\")",
      detail = Some("Found AuthMiddleware.scala, SessionStore.scala, UserRegistry.scala")
    ),
    DemoEvent(
      4.2,
      EventKind.Thought,
      "THOUGHT",
      "Reading related files into conversation history to plan the refactor..."
    ),
    DemoEvent(
      6.5,
      EventKind.Tool,
      "TOOL",
      "read_file(\"src/main/scala/SessionStore.scala\")",
      detail = Some("Appended 320 lines of session management code into chat history.")
    ),
    DemoEvent(
      8.8,
      EventKind.Warning,
      "WARNING",
      "Long-running conversation reaching harness threshold. Automatic compaction scheduled.",
      badge = Some("⚠️ Compaction Scheduled")
    ),
    DemoEvent(
      10.5,
      EventKind.Error,
      "SYSTEM",
      "⚡ CONTEXT AUTO-COMPACTION: Earlier conversation turns summarized to free working memory.",
      detail = Some("Lossy summarizer condensed earlier turns into: 'Refactor auth middleware to Bearer tokens.' The negative constraint ('do not touch SessionStore.scala') was dropped from active context!"),
      badge = Some("⚡ AMNESIA STRIKES")
    ),
    DemoEvent(
      12.0,
      EventKind.Thought,
      "THOUGHT",
      "To support OAuth2 Bearer tokens cleanly, I'll update SessionStore.scala to store bearer claims directly...",
      badge = Some("Constraint Forgotten")
    ),
    DemoEvent(
      13.2,
      EventKind.Tool,
      "TOOL",
      "edit_file(\"src/main/scala/SessionStore.scala\")",
      detail = Some("Modified SessionStore.scala: Altered internal storage maps and removed legacy cookie lookup.")
    ),
    DemoEvent(
      14.0,
      EventKind.Error,
      "USER",
      "🛑 NOT AGAIN! I explicitly told you earlier in this session NOT to touch SessionStore.scala! Why does this keep getting lost every time the context compactor runs?!",
      detail = Some("Repeated session amnesia. Human engineer intervention required to halt unauthorized modifications."),
      badge = Some("🔴 Repeated Frustration")
    ),
    DemoEvent(
      15.5,
      EventKind.Thought,
      "THOUGHT",
      "I apologize! The summary didn't retain that negative constraint. Reverting SessionStore.scala immediately...",
      badge = Some("Confusion & Apology")
    ),
    DemoEvent(
      17.2,
      EventKind.Tool,
      "TOOL",
      "run_command(\"git checkout -- src/main/scala/SessionStore.scala\")",
      detail = Some("Reverted SessionStore.scala. Work discarded. Progress reset."),
      badge = Some("↺ Rollback")
    ),
    DemoEvent(
      19.8,
      EventKind.Thought,
      "THOUGHT",
      "Re-analyzing how to implement Bearer verification without touching SessionStore. Re-reading AuthMiddleware...",
      badge = Some("Redundant Turn")
    ),
    DemoEvent(
      23.0,
      EventKind.Tool,
      "TOOL",
      "edit_file(\"src/main/scala/AuthMiddleware.scala\")",
      detail = Some("Created separate token parser.")
    ),
    DemoEvent(
      26.0,
      EventKind.Tool,
      "TOOL",
      "run_command(\"sbt test\")",
      detail = Some("[error] 2 tests failed: SessionStoreMock was out of sync with new flow."),
      badge = Some("Test Failures")
    ),
    DemoEvent(
      28.5,
      EventKind.Tool,
      "TOOL",
      "edit_file(\"src/test/scala/AuthMiddlewareSuite.scala\")",
      detail = Some("Adjusted mock expectations.")
    ),
    DemoEvent(
      31.2,
      EventKind.Warning,
      "RESOLUTION",
      "Task eventually concluded after human intervention, manual git rollback, and repeated clarification loops.",
      badge = Some("⚠️ Completed after Rollback")
    )
  )

  // Simulation State
  val currentTime: Var[Double] = Var(0.0)
  val isPlaying: Var[Boolean] = Var(false)
  val speed: Var[Double] = Var(1.0)
  val autoScroll: Var[Boolean] = Var(true)
  val loopEnabled: Var[Boolean] = Var(true)
  val userPaused: Var[Boolean] = Var(false)

  private var timerHandle: Option[Int] = None
  private var loopTimeoutHandle: Option[Int] = None
  private var observer: Option[dom.IntersectionObserver] = None

  def startTimer(): Unit =
    loopTimeoutHandle.foreach(dom.window.clearTimeout)
    loopTimeoutHandle = None
    if timerHandle.isEmpty then
      val intervalMs = 50
      val handle = dom.window.setInterval(() => {
        val sp = speed.now()
        val next = currentTime.now() + (0.05 * sp)
        if next >= 32.0 then
          currentTime.set(32.0)
          pauseTimer()
          if loopEnabled.now() && !userPaused.now() then
            val timeout = dom.window.setTimeout(() => {
              if !userPaused.now() && loopEnabled.now() then
                currentTime.set(0.0)
                startTimer()
            }, 3500)
            loopTimeoutHandle = Some(timeout)
        else
          currentTime.set(Math.round(next * 100.0) / 100.0)
      }, intervalMs)
      timerHandle = Some(handle)
      isPlaying.set(true)

  def pauseTimer(): Unit =
    timerHandle.foreach(dom.window.clearInterval)
    timerHandle = None
    loopTimeoutHandle.foreach(dom.window.clearTimeout)
    loopTimeoutHandle = None
    isPlaying.set(false)

  def togglePlay(): Unit =
    if isPlaying.now() then
      userPaused.set(true)
      pauseTimer()
    else
      userPaused.set(false)
      if currentTime.now() >= 32.0 then
        currentTime.set(0.0)
      startTimer()

  def resetSimulation(): Unit =
    userPaused.set(true)
    pauseTimer()
    currentTime.set(0.0)

  def setSpeed(s: Double): Unit =
    speed.set(s)

  def jumpTo(t: Double): Unit =
    currentTime.set(t)
    if !userPaused.now() && !isPlaying.now() then
      startTimer()

  // Progress Calculations
  def calcProgressWithCC(t: Double): Double =
    if t <= 0.0 then 0.0
    else if t < 1.8 then 12.0 * (t / 1.8)
    else if t < 4.8 then 12.0 + 18.0 * ((t - 1.8) / 3.0)
    else if t < 8.5 then 30.0 + 25.0 * ((t - 4.8) / 3.7)
    else if t < 11.8 then 55.0 + 25.0 * ((t - 8.5) / 3.3)
    else if t < 14.8 then 80.0 + 20.0 * ((t - 11.8) / 3.0)
    else 100.0

  def calcProgressWithoutCC(t: Double): Double =
    if t <= 0.0 then 0.0
    else if t < 4.2 then 15.0 * (t / 4.2)
    else if t < 8.8 then 15.0 + 20.0 * ((t - 4.2) / 4.6)
    else if t < 10.5 then 35.0 + 10.0 * ((t - 8.8) / 1.7) // Stalls at 45%
    else if t < 14.0 then 45.0 // Flashes warning
    else if t < 17.2 then 45.0 - 25.0 * ((t - 14.0) / 3.2) // Slips back down to 20%
    else if t < 23.0 then 20.0 + 20.0 * ((t - 17.2) / 5.8) // Slowly climbs to 40%
    else if t < 26.0 then 40.0 + 25.0 * ((t - 23.0) / 3.0) // Climbs to 65%
    else if t < 31.2 then 65.0 + 35.0 * ((t - 26.0) / 5.2)
    else 100.0

  def simulationStage(t: Double): String =
    if t < 1.0 then "Stage: Session Prompt"
    else if t < 10.5 then "Stage: Task Execution"
    else if t < 14.0 then "Stage: Compaction & Amnesia"
    else if t < 17.5 then "Stage: Invariant Breach & Rollback"
    else if t < 31.2 then "Stage: Friction & Recovery"
    else "Stage: Concluded"

  def statusBadgeWithCC(t: Double): (String, String) =
    if t < 1.0 then ("Initializing DAG", "badge-blue")
    else if t < 5.0 then ("Anchoring Invariants", "badge-blue")
    else if t < 9.0 then ("Hydrating Context Beam", "badge-cyan")
    else if t < 14.8 then ("Verifying Invariants", "badge-cyan")
    else ("✓ Completed (4/4 Steps • Zero Drift)", "badge-green")

  def statusBadgeWithoutCC(t: Double): (String, String) =
    if t < 2.0 then ("Turn 18 (Active Session)", "badge-blue")
    else if t < 8.8 then ("Turn 18 (Reading Files)", "badge-blue")
    else if t < 10.5 then ("⚠️ Compaction Scheduled", "badge-amber")
    else if t < 14.0 then ("⚡ Compaction: Amnesia Active", "badge-red")
    else if t < 18.0 then ("🛑 Invariant Breach / Rollback", "badge-red")
    else if t < 24.0 then ("Turn 21 (Re-Prompting)", "badge-amber")
    else if t < 31.2 then ("Turn 23 (Patching Tests)", "badge-amber")
    else ("⚠️ Completed after Rollback (11 Turns)", "badge-amber")

  def render(): HtmlElement =
    div(
      className := "tab-content tab-demo",
      sectionTag(
        className := "demo-hero",
        div(
          className := "hero-badge",
          span(className := "badge-pulse"),
          span("Side-by-Side Scenario Simulation"),
        ),
        h2("Context Preservation vs. Agent Amnesia"),
        p(
          className := "demo-lead",
          "Watch two AI agents tackle the exact same multi-step engineering task: ",
          code("Refactor Auth Middleware to OAuth2 Bearer Tokens"),
          " with a strict negative invariant: ",
          span(className := "constraint-highlight", "Never touch legacy SessionStore.scala"),
          ". See how raw conversational chat compactions suffer amnesia and break architectural constraints, while Context Crystal delivers sovereign, deterministic, zero-token context hygiene."
        ),
      ),

      // Playback Controls Toolbar
      div(
        className := "demo-toolbar",
        div(
          className := "toolbar-left",
          button(
            typ := "button",
            className <-- isPlaying.signal.map(p => if p then "btn-ctrl btn-pause" else "btn-ctrl btn-play"),
            child <-- isPlaying.signal.map(p => if p then Icons.pause(18) else Icons.play(18)),
            span(child.text <-- isPlaying.signal.map(p => if p then "Pause" else "Play Demo")),
            onClick --> { _ => togglePlay() },
          ),
          button(
            typ := "button",
            className := "btn-ctrl btn-reset",
            Icons.reset(18),
            span("Reset"),
            onClick --> { _ => resetSimulation() },
          ),
          div(
            className := "speed-pill-group",
            List(1.0, 2.0).map { s =>
              button(
                typ := "button",
                className <-- speed.signal.map(curr => if curr == s then "btn-speed active" else "btn-speed"),
                s"${s.toInt}x Speed",
                onClick --> { _ => setSpeed(s) },
              )
            },
          ),
          label(
            className := "checkbox-toggle autoscroll-toggle",
            input(
              typ := "checkbox",
              checked <-- autoScroll.signal,
              onChange.mapToChecked --> autoScroll.writer,
            ),
            span("Auto-scroll"),
          ),
          label(
            className := "checkbox-toggle autoscroll-toggle",
            input(
              typ := "checkbox",
              checked <-- loopEnabled.signal,
              onChange.mapToChecked --> loopEnabled.writer,
            ),
            span("Loop"),
          ),
        ),
        div(
          className := "toolbar-center",
          div(
            className := "scrubber-cluster",
            span(
              className := "phase-display",
              child.text <-- currentTime.signal.map(simulationStage),
            ),
            input(
              typ := "range",
              className := "timeline-slider",
              minAttr := "0",
              maxAttr := "32",
              stepAttr := "0.1",
              value <-- currentTime.signal.map(_.toString),
              onInput.mapToValue.map(_.toDoubleOption.getOrElse(0.0)) --> { t =>
                jumpTo(t)
              },
            ),
          ),
        ),
        div(
          className := "toolbar-right",
          span(className := "jump-label", "Jump:"),
          button(
            typ := "button",
            className := "btn-jump",
            "⏮ Start",
            onClick --> { _ => jumpTo(0.0) },
          ),
          button(
            typ := "button",
            className := "btn-jump jump-alert",
            "⚡ Compaction Strikes",
            onClick --> { _ => jumpTo(10.5) },
          ),
          button(
            typ := "button",
            className := "btn-jump jump-success",
            "✓ CC Done",
            onClick --> { _ => jumpTo(14.8) },
          ),
          button(
            typ := "button",
            className := "btn-jump jump-alert",
            "↺ Rollback",
            onClick --> { _ => jumpTo(17.2) },
          ),
        ),
      ),

      // Split-Screen Terminals Grid
      div(
        className := "demo-panes-grid",
        onMountCallback { ctx =>
          if js.typeOf(dom.window.asInstanceOf[js.Dynamic].IntersectionObserver) != "undefined" then
            val obs = new dom.IntersectionObserver((entries, _) => {
              val isVisible = entries.exists(_.isIntersecting)
              if isVisible then
                if !userPaused.now() && !isPlaying.now() then
                  startTimer()
              else
                if isPlaying.now() then
                  pauseTimer()
            })
            obs.observe(ctx.thisNode.ref)
            observer = Some(obs)
          else
            if !userPaused.now() && !isPlaying.now() then
              startTimer()
        },
        onUnmountCallback { _ =>
          observer.foreach(_.disconnect())
          observer = None
          pauseTimer()
        },

        // Left Pane: With Context Crystal
        div(
          className := "demo-pane pane-with-cc",
          div(
            className := "pane-top-bar",
            div(
              className := "window-dots",
              span(className := "dot dot-red"),
              span(className := "dot dot-yellow"),
              span(className := "dot dot-green"),
            ),
            div(
              className := "pane-title-group",
              span(className := "terminal-glyph", "◈"),
              span(className := "pane-title", "With Context Crystal (Deterministic DAG)"),
            ),
            div(
              className <-- currentTime.signal.map(t => s"pane-status-pill ${statusBadgeWithCC(t)._2}"),
              child.text <-- currentTime.signal.map(t => statusBadgeWithCC(t)._1),
            ),
          ),

          // Progress Bar
          div(
            className := "progress-container",
            div(
              className := "progress-bar progress-cc",
              styleAttr <-- currentTime.signal.map { t =>
                val p = calcProgressWithCC(t)
                s"width: ${p}%;"
              },
            ),
          ),
          div(
            className := "progress-meta",
            span(
              className := "progress-label",
              child.text <-- currentTime.signal.map { t =>
                val p = calcProgressWithCC(t)
                if p >= 100.0 then "100% — Complete (Zero Invariant Drift)"
                else f"Task Progress: $p%02.0f%%"
              },
            ),
            span(
              className := "progress-steps",
              child.text <-- currentTime.signal.map { t =>
                if t < 1.8 then "Step 1/4: Init DAG"
                else if t < 4.8 then "Step 2/4: Anchor Invariant"
                else if t < 11.8 then "Step 3/4: Hydrate Beam & Refactor"
                else "Step 4/4: Tests Passed"
              },
            ),
          ),

          // Terminal Log
          div(
            className := "terminal-viewport",
            inContext { thisNode =>
              List(
                currentTime.signal --> { _ =>
                  if autoScroll.now() then
                    dom.window.setTimeout(() => {
                      thisNode.ref.scrollTop = thisNode.ref.scrollHeight
                    }, 20)
                },
                autoScroll.signal --> { enabled =>
                  if enabled then
                    dom.window.setTimeout(() => {
                      thisNode.ref.scrollTop = thisNode.ref.scrollHeight
                    }, 20)
                },
              )
            },
            child <-- currentTime.signal.map { t =>
              val visible = eventsWithCC.filter(_.timestamp <= t)
              renderEvents(visible)
            },
          ),
        ),

        // Right Pane: Without Context Crystal
        div(
          className <-- currentTime.signal.map { t =>
            if t >= 10.5 && t < 17.5 then "demo-pane pane-without-cc amnesia-active"
            else "demo-pane pane-without-cc"
          },
          div(
            className := "pane-top-bar",
            div(
              className := "window-dots",
              span(className := "dot dot-red"),
              span(className := "dot dot-yellow"),
              span(className := "dot dot-green"),
            ),
            div(
              className := "pane-title-group",
              span(className := "terminal-glyph-warn", "⚠"),
              span(className := "pane-title", "Without Context Crystal (Raw Chat Compaction)"),
            ),
            div(
              className <-- currentTime.signal.map(t => s"pane-status-pill ${statusBadgeWithoutCC(t)._2}"),
              child.text <-- currentTime.signal.map(t => statusBadgeWithoutCC(t)._1),
            ),
          ),

          // Progress Bar
          div(
            className := "progress-container",
            div(
              className <-- currentTime.signal.map { t =>
                if t >= 10.5 && t < 17.5 then "progress-bar progress-warn slipping"
                else if t >= 17.5 && t < 31.2 then "progress-bar progress-warn recovering"
                else if t >= 31.2 then "progress-bar progress-warn finished"
                else "progress-bar progress-normal"
              },
              styleAttr <-- currentTime.signal.map { t =>
                val p = calcProgressWithoutCC(t)
                s"width: ${p}%;"
              },
            ),
          ),
          div(
            className := "progress-meta",
            span(
              className := "progress-label",
              child.text <-- currentTime.signal.map { t =>
                val p = calcProgressWithoutCC(t)
                if t >= 10.5 && t < 14.0 then "⚠️ Stalled — Auto-Compaction Hits"
                else if t >= 14.0 && t < 17.5 then "🔴 Slips Backwards: Constraint Violated!"
                else if t >= 17.5 && t < 24.0 then "Recovering: Re-Reading & Apologizing"
                else if p >= 100.0 then "100% — Concluded after Rollback"
                else f"Task Progress: $p%02.0f%%"
              },
            ),
            span(
              className := "progress-steps",
              child.text <-- currentTime.signal.map { t =>
                if t < 10.5 then "Turn 18: File Inspection"
                else if t < 14.0 then "Turn 19: Amnesia / Prohibited Edit"
                else if t < 17.5 then "Turn 20: User Alert & Rollback"
                else if t < 24.0 then "Turn 21: Re-Prompting Loop"
                else if t < 31.2 then "Turn 23: Patching Mock Mismatches"
                else "Turn 25: Concluded (+7 Extra Turns)"
              },
            ),
          ),

          // Terminal Log
          div(
            className := "terminal-viewport",
            inContext { thisNode =>
              List(
                currentTime.signal --> { _ =>
                  if autoScroll.now() then
                    dom.window.setTimeout(() => {
                      thisNode.ref.scrollTop = thisNode.ref.scrollHeight
                    }, 20)
                },
                autoScroll.signal --> { enabled =>
                  if enabled then
                    dom.window.setTimeout(() => {
                      thisNode.ref.scrollTop = thisNode.ref.scrollHeight
                    }, 20)
                },
              )
            },
            child <-- currentTime.signal.map { t =>
              val visible = eventsWithoutCC.filter(_.timestamp <= t)
              renderEvents(visible)
            },
          ),
        ),
      ),

      // Comparison Summary
      sectionTag(
        className := "demo-scorecard-section",
        h3("Scenario Summary & Token Usage"),
        div(
          className := "scorecard-grid",
          div(
            className := "scorecard-card",
            div(className := "scorecard-icon", Icons.clock(28)),
            h4("Steps to Completion"),
            div(
              className := "scorecard-comparison",
              div(className := "stat-col cc", span(className := "stat-val", "4 steps"), span(className := "stat-sub", "Clean 1st Pass")),
              div(className := "stat-vs", "vs"),
              div(className := "stat-col raw", span(className := "stat-val", "11 turns"), span(className := "stat-sub", "3 Friction Loops")),
            ),
            p(className := "scorecard-verdict", "Zero rollback turns or re-prompting. The agent moves cleanly from task start to green tests."),
          ),
          div(
            className := "scorecard-card",
            div(className := "scorecard-icon", Icons.tokenBurn(28)),
            h4("Negative Invariant Survival"),
            div(
              className := "scorecard-comparison",
              div(className := "stat-col cc", span(className := "stat-val", "100%"), span(className := "stat-sub", "Preserved in DAG")),
              div(className := "stat-vs", "vs"),
              div(className := "stat-col raw", span(className := "stat-val", "Lost"), span(className := "stat-sub", "Pruned by Compactor")),
            ),
            p(className := "scorecard-verdict", "Negative constraints survive across arbitrary session turns via immutable DAG anchors."),
          ),
          div(
            className := "scorecard-card",
            div(className := "scorecard-icon", Icons.debris(28)),
            h4("Session Rollbacks & Breaches"),
            div(
              className := "scorecard-comparison",
              div(className := "stat-col cc", span(className := "stat-val", "0"), span(className := "stat-sub", "Zero Breaches")),
              div(className := "stat-vs", "vs"),
              div(className := "stat-col raw", span(className := "stat-val", "1 rollback"), span(className := "stat-sub", "Forbidden Edit Reverted")),
            ),
            p(className := "scorecard-verdict", "Context Crystal stops unauthorized modifications to off-limits code before they happen."),
          ),
        ),
      ),
    )

  private def renderEvents(events: List[DemoEvent]): HtmlElement =
    div(
      className := "events-list",
      events.map { ev =>
        val kindClass = ev.kind match
          case EventKind.System  => "event-system"
          case EventKind.User    => "event-user"
          case EventKind.Tool    => "event-tool"
          case EventKind.Thought => "event-thought"
          case EventKind.Warning => "event-warning"
          case EventKind.Error   => "event-error"
          case EventKind.Success => "event-success"

        div(
          className := s"event-row $kindClass",
          div(
            className := "event-meta-line",
            span(className := "event-sender", ev.sender),
            ev.badge.map(b => span(className := "event-badge", b)),
          ),
          div(className := "event-body", ev.text),
          ev.detail.map(d => div(className := "event-detail", d)),
        )
      },
    )
