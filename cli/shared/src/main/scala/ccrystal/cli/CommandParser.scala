package ccrystal.cli

import cats.data.Validated
import cats.implicits.*
import com.monovore.decline.*
import ccrystal.core.model.*

object CommandParser:

  private def normalize(s: String): String =
    s.trim
      .replaceAll("([a-z0-9])([A-Z])", "$1_$2")
      .toLowerCase
      .replace('-', '_')

  private given nodeKindArgument: Argument[NodeKind] = Argument.from("node-kind") { s =>
    normalize(s) match
      case "human_prompt"    => Validated.valid(NodeKind.HumanPrompt)
      case "agent_reasoning" => Validated.valid(NodeKind.AgentReasoning)
      case "tool_execution"  => Validated.valid(NodeKind.ToolExecution)
      case "checkpoint"      => Validated.valid(NodeKind.Checkpoint)
      case "branch"          => Validated.valid(NodeKind.Branch)
      case "resolution"      => Validated.valid(NodeKind.Resolution)
      case _ =>
        Validated.invalidNel(
          s"Invalid node kind: '$s' (valid: human_prompt, agent_reasoning, tool_execution, checkpoint, branch, resolution)",
        )
  }

  private given resourceTypeArgument: Argument[TransientResourceType] =
    Argument.from("resource-type") { s =>
      normalize(s) match
        case "git_worktree" => Validated.valid(TransientResourceType.GitWorktree)
        case "env_override" => Validated.valid(TransientResourceType.EnvOverride)
        case "debug_config" => Validated.valid(TransientResourceType.DebugConfig)
        case "dummy_asset"  => Validated.valid(TransientResourceType.DummyAsset)
        case "mock_service" => Validated.valid(TransientResourceType.MockService)
        case _ =>
          Validated.invalidNel(
            s"Invalid resource type: '$s' (valid: git_worktree, env_override, debug_config, dummy_asset, mock_service)",
          )
    }

  private given disposalPolicyArgument: Argument[DisposalPolicy] =
    Argument.from("disposal-policy") { s =>
      normalize(s) match
        case "revert_on_conclusion" => Validated.valid(DisposalPolicy.RevertOnConclusion)
        case "delete_after_test"    => Validated.valid(DisposalPolicy.DeleteAfterTest)
        case "replace_in_final_cut" => Validated.valid(DisposalPolicy.ReplaceInFinalCut)
        case "manual"               => Validated.valid(DisposalPolicy.Manual)
        case _ =>
          Validated.invalidNel(
            s"Invalid disposal policy: '$s' (valid: revert_on_conclusion, delete_after_test, replace_in_final_cut, manual)",
          )
    }

  private given entityKindArgument: Argument[EntityKind] = Argument.from("entity-kind") { s =>
    normalize(s) match
      case "human"  => Validated.valid(EntityKind.Human)
      case "agent"  => Validated.valid(EntityKind.Agent)
      case "model"  => Validated.valid(EntityKind.Model)
      case "system" => Validated.valid(EntityKind.System)
      case "tool"   => Validated.valid(EntityKind.Tool)
      case _ =>
        Validated.invalidNel(
          s"Invalid entity kind: '$s' (valid: human, agent, model, system, tool)",
        )
  }

  private given captureFidelityArgument: Argument[CaptureFidelity] =
    Argument.from("capture-fidelity") { s =>
      normalize(s) match
        case "inferred"    => Validated.valid(CaptureFidelity.Inferred)
        case "intercepted" => Validated.valid(CaptureFidelity.Intercepted)
        case _ =>
          Validated.invalidNel(
            s"Invalid capture fidelity: '$s' (valid: inferred, intercepted)",
          )
    }

  private given sliceFormatArgument: Argument[SliceFormat] = Argument.from("format") { s =>
    normalize(s) match
      case "prompt" => Validated.valid(SliceFormat.Prompt)
      case "human"  => Validated.valid(SliceFormat.Human)
      case "json"   => Validated.valid(SliceFormat.Json)
      case _ =>
        Validated.invalidNel(
          s"Invalid slice format: '$s' (valid: prompt, human, json)",
        )
  }

  private given artifactSubstrateArgument: Argument[ArtifactSubstrate] =
    Argument.from("substrate") { s =>
      normalize(s) match
        case "virtual"  => Validated.valid(ArtifactSubstrate.Virtual)
        case "physical" => Validated.valid(ArtifactSubstrate.Physical)
        case _ =>
          Validated.invalidNel(
            s"Invalid artifact substrate: '$s' (valid: virtual, physical)",
          )
    }

  private given artifactRoleArgument: Argument[ArtifactRole] =
    Argument.from("role") { s =>
      normalize(s) match
        case "target"       => Validated.valid(ArtifactRole.Target)
        case "instrument"   => Validated.valid(ArtifactRole.Instrument)
        case "precondition" => Validated.valid(ArtifactRole.Precondition)
        case _ =>
          Validated.invalidNel(
            s"Invalid artifact role: '$s' (valid: target, instrument, precondition)",
          )
    }

  private given goalStatusArgument: Argument[GoalStatus] =
    Argument.from("goal-status") { s =>
      normalize(s) match
        case "in_progress"                       => Validated.valid(GoalStatus.InProgress)
        case "concluded" | "concluded_success"   => Validated.valid(GoalStatus.ConcludedSuccess)
        case "abandoned" | "concluded_abandoned" => Validated.valid(GoalStatus.ConcludedAbandoned)
        case _ =>
          Validated.invalidNel(
            s"Invalid goal status: '$s' (valid: in_progress, concluded_success, concluded_abandoned)",
          )
    }

  private given agingStateArgument: Argument[AgingState] =
    Argument.from("aging-state") { s =>
      normalize(s) match
        case "active" => Validated.valid(AgingState.Active)
        case "solid"  => Validated.valid(AgingState.Solid)
        case "stale"  => Validated.valid(AgingState.Stale)
        case _ =>
          Validated.invalidNel(
            s"Invalid aging state: '$s' (valid: active, solid, stale)",
          )
    }

  private given agingCategoryArgument: Argument[ccrystal.core.model.search.AgingCategory] =
    Argument.from("aging-category") { s =>
      normalize(s) match
        case "active" => Validated.valid(ccrystal.core.model.search.AgingCategory.Active)
        case "solid"  => Validated.valid(ccrystal.core.model.search.AgingCategory.Solid)
        case "stale"  => Validated.valid(ccrystal.core.model.search.AgingCategory.Stale)
        case _ =>
          Validated.invalidNel(
            s"Invalid aging category: '$s' (valid: active, solid, stale)",
          )
    }

  private given searchSortArgument: Argument[ccrystal.core.model.search.SearchSort] =
    Argument.from("search-sort") { s =>
      normalize(s) match
        case "recent" => Validated.valid(ccrystal.core.model.search.SearchSort.Recent)
        case "oldest" => Validated.valid(ccrystal.core.model.search.SearchSort.Oldest)
        case "name"   => Validated.valid(ccrystal.core.model.search.SearchSort.Name)
        case _ =>
          Validated.invalidNel(
            s"Invalid sort order: '$s' (valid: recent, oldest, name)",
          )
    }

  // --- Subcommands ---

  private val initOpts = (
    Opts.argument[String]("name"),
    Opts.option[String]("goal", "Goal title", "g"),
    Opts.option[String]("intent", "Detailed goal intent", "i").orNone,
    Opts
      .option[String](
        "author",
        "Author entity handle/alias (e.g. 'john' or 'maintainer'; avoid full legal names in public repos)",
        "u",
      )
      .orNone,
    Opts
      .option[EntityKind]("author-kind", "Author entity kind (human, agent, model, system, tool)")
      .orNone,
    Opts.option[String]("created-at", "ISO-8601 creation timestamp").orNone,
    Opts.options[String]("task", "Initial acceptance criterion / task", "t").orEmpty,
  ).mapN(CliCommand.Init.apply)

  private val searchOpts = (
    Opts
      .option[String](
        "query",
        "Free-text search query across crystal metadata, DAG, lessons, and artifacts",
        "q",
      )
      .orNone,
    Opts
      .option[String](
        "since",
        "Filter crystals updated on or after timestamp (ISO-8601 or relative like 1d, 7d)",
      )
      .orNone,
    Opts
      .option[String](
        "until",
        "Filter crystals updated on or before timestamp (ISO-8601 or relative)",
      )
      .orNone,
    Opts.flag("today", "Filter crystals active today").orFalse,
    Opts.flag("yesterday", "Filter crystals active yesterday").orFalse,
    Opts
      .option[GoalStatus](
        "status",
        "Filter by goal status (in_progress, concluded_success, concluded_abandoned)",
      )
      .orNone,
    Opts
      .flag("has-active-leases", "Only show crystals with active transient resource leases")
      .orFalse,
    Opts
      .option[String]("touching-path", "Match leases or artifacts referencing the specified path")
      .orNone,
    Opts.flag("has-open-tasks", "Only show crystals with incomplete acceptance criteria").orFalse,
    Opts.flag("has-lessons", "Only show crystals with recorded lessons").orFalse,
    Opts.option[String]("author", "Filter by author entity ID").orNone,
    Opts
      .option[ccrystal.core.model.search.AgingCategory](
        "aging",
        "Filter by aging state (active, solid, stale)",
      )
      .orNone,
    Opts
      .option[ccrystal.core.model.search.SearchSort](
        "sort",
        "Sort order: recent (default), oldest, name",
      )
      .orNone,
    Opts
      .option[Int](
        "limit",
        "Maximum number of results to return per page (default: 20; 0 to uncap)",
      )
      .orNone,
    Opts.option[Int]("offset", "Result offset for pagination (default: 0)").orNone,
    Opts.flag("all", "Show all results without pagination cap").orFalse,
    (
      Opts
        .flag("include-archived", "Include crystals in cold storage (.ccrystals/archive/)")
        .orFalse,
      Opts.flag("archived", "Include crystals in cold storage (.ccrystals/archive/)").orFalse,
    ).mapN(_ || _),
    Opts.flag("json", "Output JSON array of search matches instead of formatted table").orFalse,
  ).mapN {
    (
        query,
        since,
        until,
        today,
        yesterday,
        status,
        hasActiveLeases,
        touchingPath,
        hasOpenTasks,
        hasLessons,
        author,
        aging,
        sort,
        limit,
        offset,
        all,
        includeArchived,
        json,
    ) =>
      val effectiveSince =
        if today && since.isEmpty then Some("today")
        else if yesterday && since.isEmpty then Some("yesterday")
        else since
      val effectiveUntil =
        if yesterday && until.isEmpty then Some("today")
        else until

      val isUncapped = all || limit.contains(0)

      val filter = ccrystal.core.model.search.CrystalFilter(
        query = query,
        since = effectiveSince,
        until = effectiveUntil,
        status = status,
        hasActiveLeases = if hasActiveLeases then Some(true) else None,
        touchingPath = touchingPath,
        hasOpenTasks = if hasOpenTasks then Some(true) else None,
        hasLessons = if hasLessons then Some(true) else None,
        author = author,
        aging = aging,
        includeArchived = includeArchived,
        sort = sort,
        limit = if isUncapped then None else limit.filter(_ > 0),
        offset = offset,
        uncapped = isUncapped,
      )
      CliCommand.Search(filter, json)
  }

  private val taskAddOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("desc", "Task description", "d"),
  ).mapN(CliCommand.TaskAdd.apply)

  private val taskDoneOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("id", "Task identifier", "t"),
  ).mapN(CliCommand.TaskDone.apply)

  private val taskListOpts = Opts.argument[String]("crystal-id").map(CliCommand.TaskList.apply)

  private val concludeOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("summary", "Optional resolution summary", "s").orNone,
  ).mapN((id, summary) => CliCommand.GoalTransition(id, GoalStatus.ConcludedSuccess, summary))

  private val abandonOpts = (
    Opts.argument[String]("crystal-id"),
    Opts
      .option[String]("reason", "Optional abandonment reason", "r")
      .orElse(Opts.option[String]("summary", "Optional abandonment reason", "s"))
      .orNone,
  ).mapN((id, reason) => CliCommand.GoalTransition(id, GoalStatus.ConcludedAbandoned, reason))

  private val goalStatusOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[GoalStatus](
      "status",
      "Goal status (in_progress, concluded_success, concluded_abandoned)",
    ),
    Opts.option[String]("summary", "Optional status transition summary", "s").orNone,
  ).mapN((id, status, summary) => CliCommand.GoalTransition(id, status, summary))

  private val nodeAddOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[NodeKind](
      "kind",
      "Node kind (human_prompt, agent_reasoning, tool_execution, checkpoint, branch, resolution)",
      "k",
    ),
    Opts.option[String]("summary", "Content summary", "s"),
    Opts.options[String]("parent", "Parent node IDs", "p").orEmpty,
    Opts.option[String]("author", "Author/Actor entity ID", "u").orNone,
    Opts
      .option[CaptureFidelity]("fidelity", "Capture fidelity guarantee (inferred, intercepted)")
      .withDefault(CaptureFidelity.Inferred),
    Opts.option[String]("anchor", "Semantic anchor label for node", "a").orNone,
    Opts.option[String]("timestamp", "ISO-8601 timestamp for the event").orNone,
    Opts.options[String]("input-artifact", "Input artifact IDs").orEmpty,
    Opts.options[String]("output-artifact", "Output artifact IDs").orEmpty,
    Opts.options[String]("precondition-artifact", "Precondition artifact IDs").orEmpty,
  ).mapN(CliCommand.NodeAdd.apply)

  private val artifactListOpts = (
    Opts.flag("cave", "List cave-wide artifacts in Cave Registry").orFalse,
    Opts.option[String]("crystal", "Filter or list artifacts in specified crystal", "c").orNone,
    Opts.flag("json", "Output as JSON").orFalse,
  ).mapN(CliCommand.ArtifactList.apply)

  private val artifactRegisterOpts = (
    Opts.option[String]("id", "Artifact identifier"),
    Opts.option[String]("name", "Artifact human-readable name", "n").orNone,
    Opts
      .option[ArtifactSubstrate]("substrate", "Artifact substrate (virtual, physical)")
      .withDefault(ArtifactSubstrate.Virtual),
    Opts
      .option[ArtifactRole]("role", "Artifact role (target, instrument, precondition)")
      .withDefault(ArtifactRole.Target),
    Opts.option[String]("uri", "URI or location pointer", "u").orNone,
    Opts.option[String]("media-type", "Media / MIME type").orNone,
    Opts.option[String]("desc", "Artifact description", "d").orNone,
    Opts.option[String]("location-name", "Physical location name").orNone,
    Opts.option[String]("civic-address", "Physical civic address").orNone,
    Opts.option[String]("geo-uri", "Physical geo URI coordinates").orNone,
    Opts.option[String]("bench-coords", "Physical bench coordinates").orNone,
    Opts.flag("cave", "Register artifact in cave registry").orFalse,
    Opts.option[String]("crystal", "Crystal to register artifact in", "c").orNone,
  ).mapN(CliCommand.ArtifactRegister.apply)

  private val artifactInspectOpts = (
    Opts.argument[String]("artifact-id"),
    Opts.option[String]("crystal", "Crystal scope for artifact", "c").orNone,
    Opts.flag("json", "Output as JSON").orFalse,
  ).mapN(CliCommand.ArtifactInspect.apply)

  private val sliceOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("from", "Start slicing from anchor or node ID").orNone,
    Opts.option[String]("to", "End slicing at anchor or node ID").orNone,
    Opts.option[Int]("head", "Take first N nodes of slice").orNone,
    Opts.option[Int]("tail", "Take last N nodes of slice").orNone,
    Opts
      .option[SliceFormat]("format", "Output format (prompt, human, json)")
      .withDefault(SliceFormat.Prompt),
    Opts.option[String]("fork-to", "Materialize slice into a new crystal with lineage").orNone,
    Opts.flag("prune", "Tag/prune cleavage point in parent crystal when forking").orFalse,
  ).mapN(CliCommand.Slice.apply)

  private val entityListOpts = Opts.unit.map(_ => CliCommand.EntityList)

  private val entityRegisterOpts = (
    Opts.option[String](
      "name",
      "Entity handle or name (e.g. 'john'; clean alphanumeric handle, avoid PII or accents)",
      "n",
    ),
    Opts.option[EntityKind](
      "kind",
      "Entity kind (human, agent, model, system, tool)",
      "k",
    ),
  ).mapN(CliCommand.EntityRegister.apply)

  private val entityConventionsOpts = Opts.unit.map(_ => CliCommand.EntityConventions)

  private val entityDeregisterOpts = (
    Opts.argument[String]("entity-id"),
    Opts.flag("force", "Skip interactive confirmation prompt", "f").orFalse,
  ).mapN(CliCommand.EntityDeregister.apply)

  private val deleteOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.flag("force", "Skip interactive confirmation prompt", "f").orFalse,
  ).mapN(CliCommand.Delete.apply)

  private val lessonAddOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("friction", "Observed friction", "f"),
    Opts.option[String]("root-cause", "Root cause", "r").orNone,
    Opts.option[String]("action", "Recommended action", "a").orNone,
  ).mapN(CliCommand.LessonAdd.apply)

  private val lessonActionOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("id", "Lesson identifier", "i"),
    Opts.option[String]("action", "Action text", "a"),
    Opts.option[String]("actor", "Actor identifier", "u"),
  ).mapN(CliCommand.LessonAction.apply)

  private val lessonListOpts = Opts.argument[String]("crystal-id").map(CliCommand.LessonList.apply)

  private val leaseOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[TransientResourceType](
      "type",
      "Resource type (git_worktree, env_override, debug_config, dummy_asset, mock_service)",
      "t",
    ),
    Opts.option[String]("path", "Path of resource", "p").orNone,
    Opts.option[String]("desc", "Description", "d"),
    Opts.option[DisposalPolicy](
      "policy",
      "Disposal policy (revert_on_conclusion, delete_after_test, replace_in_final_cut, manual)",
    ),
    Opts.option[String]("acquired-at", "ISO-8601 acquisition timestamp").orNone,
  ).mapN(CliCommand.TransientLeaseCmd.apply)

  private val leaseCleanOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("id", "Lease identifier to clean", "l"),
  ).mapN(CliCommand.TransientClean.apply)

  private val leaseListOpts =
    Opts.argument[String]("crystal-id").map(CliCommand.TransientList.apply)

  private val castOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("from", "Start of transition slice (anchor or node ID/prefix)").orNone,
    Opts.option[String]("to", "End of transition slice (anchor or node ID/prefix)").orNone,
    Opts.option[Int]("tail", "Number of recent transitions to include in slice").orNone,
    Opts.option[Int]("depth", "Max DAG depth to cast (alias for tail)", "d").withDefault(10),
    Opts.flag("summary-only", "Emit only high-level summary").orFalse,
  ).mapN { (id, from, to, tail, depth, summaryOnly) =>
    CliCommand.Cast(id, from = from, to = to, tail = tail, depth = depth, summaryOnly = summaryOnly)
  }

  private val hydrateOpts = castOpts

  private val refreshOpts = (
    Opts.argument[String]("crystal-id").orNone,
    Opts.flag("all", "Refresh derived views for all crystals in .ccrystals/").orFalse,
  ).mapN(CliCommand.Refresh.apply)

  private val mcpOpts = Opts
    .option[String]("transport", "MCP transport protocol (default: stdio)", "t")
    .withDefault("stdio")
    .map(CliCommand.Mcp.apply)

  private val forAiOpt = Opts
    .flag(
      "for-ai",
      "Emit operational protocol guidelines, PII safety rules, and entity conventions for AI agents",
    )
    .as(CliCommand.ForAi)

  private val taskCmd = Opts.subcommand("task", "Manage tasks")(
    Opts
      .subcommand("add", "Add task")(taskAddOpts)
      .orElse(Opts.subcommand("done", "Complete task")(taskDoneOpts))
      .orElse(Opts.subcommand("list", "List tasks")(taskListOpts)),
  )

  private val goalCmd = Opts.subcommand("goal", "Manage crystal goal lifecycle")(
    Opts.subcommand("status", "Transition crystal goal status")(goalStatusOpts),
  )

  private val nodeCmd = Opts.subcommand("node", "Manage DAG nodes")(
    Opts.subcommand("add", "Add DAG transition node")(nodeAddOpts),
  )

  private val entityCmd = Opts.subcommand("entity", "Manage cave entity registry")(
    Opts
      .subcommand("list", "List all registered entities in cave")(entityListOpts)
      .orElse(Opts.subcommand("register", "Register a new entity in cave")(entityRegisterOpts))
      .orElse(
        Opts.subcommand("deregister", "Deregister an entity with cascading deletion")(
          entityDeregisterOpts,
        ),
      )
      .orElse(
        Opts
          .subcommand("conventions", "Display canonical entity naming schemes and PII conventions")(
            entityConventionsOpts,
          ),
      ),
  )

  private val lessonCmd = Opts.subcommand("lesson", "Manage lessons learned")(
    Opts
      .subcommand("add", "Log a lesson learned")(lessonAddOpts)
      .orElse(Opts.subcommand("action", "Action a lesson learned")(lessonActionOpts))
      .orElse(Opts.subcommand("list", "List lessons learned")(lessonListOpts)),
  )

  private val transientCmd = Opts.subcommand("transient", "Manage transient leases")(
    Opts
      .subcommand("lease", "Acquire a transient lease")(leaseOpts)
      .orElse(Opts.subcommand("clean", "Clean a transient lease")(leaseCleanOpts))
      .orElse(Opts.subcommand("list", "List transient leases")(leaseListOpts)),
  )

  private val artifactCmd = Opts.subcommand("artifact", "Manage virtual and physical artifacts")(
    Opts
      .subcommand("list", "List artifacts in cave or crystal")(artifactListOpts)
      .orElse(
        Opts.subcommand("register", "Register a virtual or physical artifact")(artifactRegisterOpts),
      )
      .orElse(Opts.subcommand("inspect", "Inspect artifact details")(artifactInspectOpts)),
  )

  private val archiveOpts = Opts.argument[String]("crystal-id").map(CliCommand.Archive.apply)

  private val unarchiveOpts = Opts.argument[String]("crystal-id").map(CliCommand.Unarchive.apply)

  private val meltOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("from", "Start node ID or anchor to melt"),
    Opts.option[String]("to", "End node ID or anchor to melt"),
    Opts
      .option[String]("summary", "Optional custom summary override for melted checkpoint node", "s")
      .orNone,
    Opts.option[String]("anchor", "Optional anchor label for melted checkpoint node", "a").orNone,
  ).mapN(CliCommand.Melt.apply)

  private val triageOpts = (
    Opts
      .flag("solid", "Filter to solid crystals")
      .as(Some(AgingState.Solid))
      .orElse(Opts.flag("stale", "Filter to stale crystals").as(Some(AgingState.Stale)))
      .orElse(Opts.flag("active", "Filter to active crystals").as(Some(AgingState.Active)))
      .orElse(
        Opts.option[AgingState]("aging", "Filter by aging state (active, solid, stale)").orNone,
      ),
    Opts.flag("no-archived", "Exclude archived crystals from triage").orFalse.map(!_),
    Opts.flag("json", "Output triage report as JSON").orFalse,
  ).mapN((aging, inclArchived, json) => CliCommand.Triage(aging, inclArchived, json))

  private val agentDoctorOpts = (
    Opts.flag("json", "Output diagnostic report as JSON").orFalse,
    Opts.flag("verbose", "Show detailed path resolutions and permissions").orFalse,
  ).mapN(CliCommand.AgentDoctorCmd.apply)

  private val agentInstallOpts = (
    Opts
      .option[String](
        "target",
        "Target agent harness (antigravity, claude-code, claude-desktop, cursor, windsurf, zed)",
        "t",
      )
      .orNone,
    Opts.flag("dry-run", "Preview configuration changes without writing to disk").orFalse,
    Opts.flag("force", "Overwrite existing context-crystal configuration").orFalse,
  ).mapN(CliCommand.AgentInstallCmd.apply)

  private val agentCmd =
    Opts.subcommand("agent", "Manage AI agent runtime harnesses and onboarding")(
      Opts
        .subcommand("doctor", "Diagnose environment and agent harness configurations")(
          agentDoctorOpts,
        )
        .orElse(
          Opts.subcommand("install", "Install and configure Context Crystal in agent harnesses")(
            agentInstallOpts,
          ),
        ),
    )

  private val subcommands: List[Opts[CliCommand]] = List(
    forAiOpt,
    Opts.subcommand("init", "Initialize a new crystal")(initOpts),
    Opts.subcommand(
      "search",
      "Search and query crystals across the cave with temporal and metadata filters",
    )(searchOpts),
    taskCmd,
    Opts.subcommand("conclude", "Conclude a crystal with optional resolution summary")(
      concludeOpts,
    ),
    Opts.subcommand("abandon", "Abandon a crystal with optional reason")(abandonOpts),
    goalCmd,
    nodeCmd,
    entityCmd,
    lessonCmd,
    transientCmd,
    artifactCmd,
    Opts.subcommand("cast", "Cast a context beam for LLMs")(castOpts),
    Opts.subcommand("hydrate", "Hydrate context for LLMs (alias for cast)")(hydrateOpts),
    Opts.subcommand(
      "refresh",
      "Re-project derived views (tasks.md, lessons-learned.md) from crystal.json",
    )(refreshOpts),
    Opts.subcommand("slice", "Extract crystal fragments or slice sub-DAGs")(sliceOpts),
    Opts.subcommand("delete", "Permanently delete a crystal and cascade orphaned entities")(
      deleteOpts,
    ),
    Opts.subcommand("archive", "Archive a crystal to cold storage (.ccrystals/archive/)")(
      archiveOpts,
    ),
    Opts.subcommand("unarchive", "Restore an archived crystal to active cave")(unarchiveOpts),
    Opts.subcommand(
      "melt",
      "Melt and squash intermediate sub-DAG nodes into a single checkpoint node",
    )(meltOpts),
    Opts.subcommand("triage", "Triage workspace crystals for lifecycle hygiene and aging")(
      triageOpts,
    ),
    agentCmd,
    Opts.subcommand("mcp", "Start the Model Context Protocol (MCP) server")(mcpOpts),
  )

  private val mainCommand = Command("ccrystal", "Context Crystal CLI")(
    subcommands.reduceLeft(_.orElse(_)),
  )

  def parse(args: List[String]): Either[String, CliCommand] =
    mainCommand.parse(args).leftMap(_.toString)

  def parseWithHelp(args: List[String]): Either[Help, CliCommand] =
    mainCommand.parse(args)
