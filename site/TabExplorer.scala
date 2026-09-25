package ccrystal.site

import com.raquo.laminar.api.L.{*, given}

object TabExplorer:
  enum Scenario(val id: String, val title: String, val desc: String):
    case Inception extends Scenario("inception", "1. Track Inception", "Goal defined, acceptance criteria seeded, single init transition.")
    case ActiveSpike extends Scenario("spike", "2. Active Engineering Spike", "Task 1 completed, git_worktree transient lease active, checkpoint recorded.")
    case PhysicalArtifact extends Scenario("artifact", "3. World-State & Artifacts", "Hardware test rig artifact registered as precondition; living context grounded.")

  val selectedScenario: Var[Scenario] = Var(Scenario.ActiveSpike)
  val tailCount: Var[Int] = Var(3)
  val summaryOnly: Var[Boolean] = Var(false)

  def render(): HtmlElement =
    div(
      className := "tab-content tab-explorer",
      sectionTag(
        className := "explorer-intro",
        h2("Live Interactive DAG & Context Beam Explorer"),
        p("Experience how Context Crystal models living software intent, maintains immutable causal provenance, enforces clean transient resource leases, and shapes context beams for LLM prompts in real time:"),
      ),

      // Control Toolbar
      div(
        className := "explorer-toolbar",
        div(
          className := "toolbar-group",
          label("Select Scenario:"),
          div(
            className := "scenario-buttons",
            Scenario.values.map { sc =>
              button(
                typ := "button",
                className <-- selectedScenario.signal.map(curr => if curr == sc then "btn-scenario active" else "btn-scenario"),
                sc.title,
                onClick.mapTo(sc) --> selectedScenario.writer,
              )
            }.toList,
          ),
        ),
        div(
          className := "toolbar-group beam-controls",
          label("Context Beam Shaping:"),
          div(
            className := "beam-pill-group",
            span(className := "control-label", "--tail:"),
            List(1, 2, 3, 5).map { count =>
              button(
                typ := "button",
                className <-- tailCount.signal.map(curr => if curr == count then "btn-mini active" else "btn-mini"),
                s"$count",
                onClick.mapTo(count) --> tailCount.writer,
              )
            },
            label(
              className := "checkbox-toggle",
              input(
                typ := "checkbox",
                checked <-- summaryOnly.signal,
                onChange.mapToChecked --> summaryOnly.writer,
              ),
              span(" --summary-only"),
            ),
          ),
        ),
      ),

      // Dual Explorer Pane
      div(
        className := "explorer-panes-grid",
        // Left: Visual DAG
        div(
          className := "pane-col pane-dag",
          div(
            className := "pane-header",
            span(className := "pane-title", "◈ Living Crystal DAG State (.ccrystals/)"),
            span(className := "crystal-id-badge", "crystal: oauth2-auth-service"),
          ),
          div(
            className := "pane-body",
            child <-- selectedScenario.signal.map(renderDagState),
          ),
        ),

        // Right: Rendered Context Beam
        div(
          className := "pane-col pane-beam",
          div(
            className := "pane-header",
            span(className := "pane-title", "◈ Hydrated Context Beam (ccrystal hydrate)"),
            button(
              typ := "button",
              className := "terminal-copy-btn",
              child.text <-- State.copiedSnippet.signal.map {
                case Some("explorer-beam") => "✓ Copied"
                case _ => "Copy Beam"
              },
              onClick --> { _ =>
                val sc = selectedScenario.now()
                val tail = tailCount.now()
                val sumOnly = summaryOnly.now()
                State.copyToClipboard("explorer-beam", generatePromptBeam(sc, tail, sumOnly))
              },
            ),
          ),
          pre(
            className := "beam-output-code",
            code(
              child.text <-- selectedScenario.signal.combineWith(tailCount.signal, summaryOnly.signal).map {
                case (sc, tail, sumOnly) => generatePromptBeam(sc, tail, sumOnly)
              },
            ),
          ),
        ),
      ),
    )

  private def renderDagState(sc: Scenario): HtmlElement =
    div(
      className := "dag-state-container",
      // Goal card
      div(
        className := "state-card goal-card",
        div(className := "state-card-header", span(className := "tag-goal", "GOAL"), span(className := "status-tag in-progress", "InProgress")),
        h4("Build Resilient OAuth2 Service"),
        p(className := "intent-text", "Implement stateless JWT authentication with token revocation list and hardware test fixture."),
      ),

      // Acceptance Criteria
      div(
        className := "state-card tasks-card",
        div(className := "state-card-header", span("ACCEPTANCE CRITERIA"), span("Completion: " + (if sc == Scenario.Inception then "0/3" else "1/3"))),
        ul(
          className := "task-list",
          li(className := (if sc != Scenario.Inception then "done" else "pending"), span(if sc != Scenario.Inception then "✓ " else "◻ "), "task-1: Implement JWT token verification parser"),
          li(className := "pending", span("◻ "), "task-2: Hook token revocation cache into Redis"),
          li(className := "pending", span("◻ "), "task-3: End-to-end integration test with token rotation"),
        ),
      ),

      // Active Transient Lease
      if sc != Scenario.Inception then
        div(
          className := "state-card lease-card",
          div(className := "state-card-header", span(className := "tag-lease", "ACTIVE TRANSIENT LEASE"), span(className := "policy-badge", "revert_on_conclusion")),
          div(className := "lease-item", strong("lease-1 (git_worktree): "), span("/home/user/git/worktrees/oauth2-spike")),
          p(className := "lease-notice", "⚠ Invariant: Must be cleaned before crystal goal can be marked Concluded."),
        )
      else emptyNode,

      // Artifacts
      if sc == Scenario.PhysicalArtifact then
        div(
          className := "state-card artifact-card",
          div(className := "state-card-header", span(className := "tag-artifact", "PHYSICAL ARTIFACT"), span(className := "role-badge", "Precondition")),
          div(className := "artifact-name", "art_bench_01: Hardware Security Dongle Rig"),
          p(className := "artifact-coords", "Location: Laboratory Alpha, Bench 4B • geo:52.5200,13.4050"),
        )
      else emptyNode,

      // DAG Nodes
      div(
        className := "state-card nodes-card",
        div(className := "state-card-header", span("CAUSAL DAG NODES"), span("Capture Fidelity: inferred")),
        div(
          className := "dag-node-timeline",
          div(
            className := "dag-node-item",
            div(className := "node-bullet"),
            div(className := "node-content", strong("node-1 [Init]"), span(" Initialized crystal with goal and criteria by usr_operator")),
          ),
          if sc != Scenario.Inception then
            div(
              className := "dag-node-item",
              div(className := "node-bullet green"),
              div(className := "node-content", strong("node-2 [Checkpoint]"), span(" Task 1 complete; acquired git_worktree lease by agt_antigravity")),
            )
          else emptyNode,
          if sc == Scenario.PhysicalArtifact then
            div(
              className := "dag-node-item",
              div(className := "node-bullet purple"),
              div(className := "node-content", strong("node-3 [Action]"), span(" Linked physical artifact art_bench_01 as test precondition")),
            )
          else emptyNode,
        ),
      ),
    )

  private def generatePromptBeam(sc: Scenario, tail: Int, summaryOnly: Boolean): String =
    val sb = new StringBuilder()
    sb.append("=== CONTEXT CRYSTAL CAST: oauth2-auth-service ===\n\n")
    sb.append("## Goal: Build Resilient OAuth2 Service\n")
    sb.append("Intent: Implement stateless JWT authentication with token revocation list and hardware test fixture.\n")
    sb.append("Status: in_progress\n\n")

    sb.append("## Active Tasks:\n")
    if sc == Scenario.Inception then
      sb.append("- [ ] task-1: Implement JWT token verification parser\n")
      sb.append("- [ ] task-2: Hook token revocation cache into Redis\n")
      sb.append("- [ ] task-3: End-to-end integration test with token rotation\n\n")
    else
      sb.append("- [x] task-1: Implement JWT token verification parser\n")
      sb.append("- [ ] task-2: Hook token revocation cache into Redis\n")
      sb.append("- [ ] task-3: End-to-end integration test with token rotation\n\n")

    if sc != Scenario.Inception then
      sb.append("## Active Transient Leases (Must be cleaned before conclusion):\n")
      sb.append("- [lease-1] GitWorktree: /home/user/git/worktrees/oauth2-spike (Policy: revert_on_conclusion)\n\n")

    if sc == Scenario.PhysicalArtifact then
      sb.append("## Precondition Artifacts:\n")
      sb.append("- [art_bench_01] Hardware Security Dongle Rig (Physical, Location: Lab Alpha, Bench 4B)\n\n")

    if !summaryOnly then
      sb.append(s"## State Transitions (Tail: $tail):\n")
      val nodes = collection.mutable.ListBuffer[String]()
      nodes += "- [HumanPrompt] (usr_operator): Initialized crystal with goal and criteria"
      if sc != Scenario.Inception then
        nodes += "- [Checkpoint] [inferred] (agt_antigravity): Task 1 complete; acquired git_worktree lease"
      if sc == Scenario.PhysicalArtifact then
        nodes += "- [Action] [inferred] (agt_antigravity): Linked physical artifact art_bench_01 as test precondition"
      
      nodes.takeRight(tail).foreach(n => sb.append(s"$n\n"))
      sb.append("\n")

    sb.append("=== END CAST ===")
    sb.toString()
