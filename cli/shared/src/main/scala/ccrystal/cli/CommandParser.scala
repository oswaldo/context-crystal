package ccrystal.cli

import cats.data.Validated
import cats.implicits.*
import com.monovore.decline.*
import ccrystal.core.model.*

object CommandParser:

  private given nodeKindArgument: Argument[NodeKind] = Argument.from("node-kind") {
    case "human_prompt"    => Validated.valid(NodeKind.HumanPrompt)
    case "agent_reasoning" => Validated.valid(NodeKind.AgentReasoning)
    case "tool_execution"  => Validated.valid(NodeKind.ToolExecution)
    case "checkpoint"      => Validated.valid(NodeKind.Checkpoint)
    case "branch"          => Validated.valid(NodeKind.Branch)
    case "resolution"      => Validated.valid(NodeKind.Resolution)
    case other             => Validated.invalidNel(s"Invalid node kind: $other")
  }

  private given resourceTypeArgument: Argument[TransientResourceType] =
    Argument.from("resource-type") {
      case "git_worktree" => Validated.valid(TransientResourceType.GitWorktree)
      case "env_override" => Validated.valid(TransientResourceType.EnvOverride)
      case "debug_config" => Validated.valid(TransientResourceType.DebugConfig)
      case "dummy_asset"  => Validated.valid(TransientResourceType.DummyAsset)
      case "mock_service" => Validated.valid(TransientResourceType.MockService)
      case other          => Validated.invalidNel(s"Invalid resource type: $other")
    }

  private given disposalPolicyArgument: Argument[DisposalPolicy] =
    Argument.from("disposal-policy") {
      case "revert_on_conclusion" => Validated.valid(DisposalPolicy.RevertOnConclusion)
      case "delete_after_test"    => Validated.valid(DisposalPolicy.DeleteAfterTest)
      case "replace_in_final_cut" => Validated.valid(DisposalPolicy.ReplaceInFinalCut)
      case "manual"               => Validated.valid(DisposalPolicy.Manual)
      case other                  => Validated.invalidNel(s"Invalid disposal policy: $other")
    }

  private given entityKindArgument: Argument[EntityKind] = Argument.from("entity-kind") {
    case "human"  => Validated.valid(EntityKind.Human)
    case "agent"  => Validated.valid(EntityKind.Agent)
    case "model"  => Validated.valid(EntityKind.Model)
    case "system" => Validated.valid(EntityKind.System)
    case "tool"   => Validated.valid(EntityKind.Tool)
    case other    => Validated.invalidNel(s"Invalid entity kind: $other")
  }

  private given captureFidelityArgument: Argument[CaptureFidelity] =
    Argument.from("capture-fidelity") {
      case "inferred"    => Validated.valid(CaptureFidelity.Inferred)
      case "intercepted" => Validated.valid(CaptureFidelity.Intercepted)
      case other =>
        Validated.invalidNel(
          s"Invalid capture fidelity: $other (must be 'inferred' or 'intercepted')",
        )
    }

  private given sliceFormatArgument: Argument[SliceFormat] = Argument.from("format") {
    case "prompt" => Validated.valid(SliceFormat.Prompt)
    case "human"  => Validated.valid(SliceFormat.Human)
    case "json"   => Validated.valid(SliceFormat.Json)
    case other =>
      Validated.invalidNel(s"Invalid slice format: $other (must be 'prompt', 'human', or 'json')")
  }

  // --- Subcommands ---

  private val initOpts = (
    Opts.argument[String]("name"),
    Opts.option[String]("goal", "Goal title", "g"),
    Opts.option[String]("intent", "Detailed goal intent", "i").orNone,
    Opts.option[String]("author", "Author entity name", "u").orNone,
    Opts.option[EntityKind]("author-kind", "Author entity kind").orNone,
    Opts.option[String]("created-at", "ISO-8601 creation timestamp").orNone,
  ).mapN(CliCommand.Init.apply)

  private val listOpts = (
    Opts
      .option[String]("status", "Filter by goal status")
      .orNone
      .map(_.flatMap {
        case "in_progress" => Some(GoalStatus.InProgress)
        case "concluded"   => Some(GoalStatus.ConcludedSuccess)
        case _             => None
      }),
    Opts.flag("json", "Output as JSON").orFalse,
  ).mapN(CliCommand.ListCrystals.apply)

  private val taskAddOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("desc", "Task description", "d"),
  ).mapN(CliCommand.TaskAdd.apply)

  private val taskDoneOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("id", "Task identifier", "t"),
  ).mapN(CliCommand.TaskDone.apply)

  private val taskListOpts = Opts.argument[String]("crystal-id").map(CliCommand.TaskList.apply)

  private val nodeAddOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[NodeKind]("kind", "Node kind", "k"),
    Opts.option[String]("summary", "Content summary", "s"),
    Opts.options[String]("parent", "Parent node IDs", "p").orEmpty,
    Opts.option[String]("author", "Author/Actor entity ID", "u").orNone,
    Opts
      .option[CaptureFidelity]("fidelity", "Capture fidelity guarantee (inferred, intercepted)")
      .withDefault(CaptureFidelity.Inferred),
    Opts.option[String]("anchor", "Semantic anchor label for node", "a").orNone,
    Opts.option[String]("timestamp", "ISO-8601 timestamp for the event").orNone,
  ).mapN(CliCommand.NodeAdd.apply)

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
    Opts.option[String]("name", "Entity name", "n"),
    Opts.option[EntityKind]("kind", "Entity kind", "k"),
  ).mapN(CliCommand.EntityRegister.apply)

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
    Opts.option[TransientResourceType]("type", "Resource type", "t"),
    Opts.option[String]("path", "Path of resource", "p").orNone,
    Opts.option[String]("desc", "Description", "d"),
    Opts.option[DisposalPolicy]("policy", "Disposal policy"),
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
    Opts.option[Int]("depth", "Max DAG depth to cast", "d").withDefault(10),
    Opts.flag("summary-only", "Emit only high-level summary").orFalse,
  ).mapN(CliCommand.Cast.apply)

  private val hydrateOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[Int]("depth", "Max DAG depth to cast", "d").withDefault(10),
    Opts.flag("summary-only", "Emit only high-level summary").orFalse,
  ).mapN(CliCommand.Cast.apply)

  private val refreshOpts = (
    Opts.argument[String]("crystal-id").orNone,
    Opts.flag("all", "Refresh derived views for all crystals in .ccrystals/").orFalse,
  ).mapN(CliCommand.Refresh.apply)

  private val mainCommand = Command("ccrystal", "Context Crystal CLI")(
    Opts
      .subcommand("init", "Initialize a new crystal")(initOpts)
      .orElse(Opts.subcommand("list", "List crystals")(listOpts))
      .orElse(
        Opts.subcommand("task", "Manage tasks")(
          Opts
            .subcommand("add", "Add task")(taskAddOpts)
            .orElse(Opts.subcommand("done", "Complete task")(taskDoneOpts))
            .orElse(Opts.subcommand("list", "List tasks")(taskListOpts)),
        ),
      )
      .orElse(
        Opts.subcommand("node", "Manage DAG nodes")(
          Opts.subcommand("add", "Add DAG transition node")(nodeAddOpts),
        ),
      )
      .orElse(
        Opts.subcommand("entity", "Manage cave entity registry")(
          Opts
            .subcommand("list", "List all registered entities in cave")(entityListOpts)
            .orElse(
              Opts.subcommand("register", "Register a new entity in cave")(entityRegisterOpts),
            ),
        ),
      )
      .orElse(
        Opts.subcommand("lesson", "Manage lessons learned")(
          Opts
            .subcommand("add", "Log a lesson learned")(lessonAddOpts)
            .orElse(Opts.subcommand("action", "Action a lesson learned")(lessonActionOpts))
            .orElse(Opts.subcommand("list", "List lessons learned")(lessonListOpts)),
        ),
      )
      .orElse(
        Opts.subcommand("transient", "Manage transient leases")(
          Opts
            .subcommand("lease", "Acquire a transient lease")(leaseOpts)
            .orElse(Opts.subcommand("clean", "Clean a transient lease")(leaseCleanOpts))
            .orElse(Opts.subcommand("list", "List transient leases")(leaseListOpts)),
        ),
      )
      .orElse(Opts.subcommand("cast", "Cast a context beam for LLMs")(castOpts))
      .orElse(Opts.subcommand("hydrate", "Hydrate context for LLMs (alias for cast)")(hydrateOpts))
      .orElse(
        Opts.subcommand(
          "refresh",
          "Re-project derived views (tasks.md, lessons-learned.md) from crystal.json",
        )(refreshOpts),
      )
      .orElse(Opts.subcommand("slice", "Extract crystal fragments or slice sub-DAGs")(sliceOpts)),
  )

  def parse(args: List[String]): Either[String, CliCommand] =
    mainCommand.parse(args).leftMap(_.toString)

  def parseWithHelp(args: List[String]): Either[Help, CliCommand] =
    mainCommand.parse(args)
