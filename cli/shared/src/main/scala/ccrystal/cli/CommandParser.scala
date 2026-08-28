package ccrystal.cli

import cats.data.Validated
import cats.implicits.*
import com.monovore.decline.*
import ccrystal.core.model.*

object CommandParser:

  private val nameArg = Argument[String]

  private val nodeKindArgument: Argument[NodeKind] = Argument.from("node-kind") {
    case "human_prompt"    => Validated.valid(NodeKind.HumanPrompt)
    case "agent_reasoning" => Validated.valid(NodeKind.AgentReasoning)
    case "tool_execution"  => Validated.valid(NodeKind.ToolExecution)
    case "checkpoint"      => Validated.valid(NodeKind.Checkpoint)
    case "branch"          => Validated.valid(NodeKind.Branch)
    case "resolution"      => Validated.valid(NodeKind.Resolution)
    case other             => Validated.invalidNel(s"Invalid node kind: $other")
  }

  private val resourceTypeArgument: Argument[TransientResourceType] = Argument.from("resource-type") {
    case "git_worktree" => Validated.valid(TransientResourceType.GitWorktree)
    case "env_override" => Validated.valid(TransientResourceType.EnvOverride)
    case "debug_config" => Validated.valid(TransientResourceType.DebugConfig)
    case "dummy_asset"  => Validated.valid(TransientResourceType.DummyAsset)
    case "mock_service" => Validated.valid(TransientResourceType.MockService)
    case other          => Validated.invalidNel(s"Invalid resource type: $other")
  }

  private val disposalPolicyArgument: Argument[DisposalPolicy] = Argument.from("disposal-policy") {
    case "revert_on_conclusion" => Validated.valid(DisposalPolicy.RevertOnConclusion)
    case "delete_after_test"    => Validated.valid(DisposalPolicy.DeleteAfterTest)
    case "replace_in_final_cut" => Validated.valid(DisposalPolicy.ReplaceInFinalCut)
    case "manual"               => Validated.valid(DisposalPolicy.Manual)
    case other                  => Validated.invalidNel(s"Invalid disposal policy: $other")
  }

  // --- Subcommands ---

  private val initOpts = (
    Opts.argument[String]("name"),
    Opts.option[String]("goal", "Goal title", "g"),
    Opts.option[String]("intent", "Detailed goal intent", "i").orNone
  ).mapN(CliCommand.Init.apply)

  private val listOpts = (
    Opts.option[String]("status", "Filter by goal status").orNone.map(_.flatMap {
      case "in_progress" => Some(GoalStatus.InProgress)
      case "concluded"   => Some(GoalStatus.ConcludedSuccess)
      case _             => None
    }),
    Opts.flag("json", "Output as JSON").orFalse
  ).mapN(CliCommand.ListCrystals.apply)

  private val taskAddOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("desc", "Task description", "d")
  ).mapN(CliCommand.TaskAdd.apply)

  private val taskDoneOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("id", "Task identifier", "t")
  ).mapN(CliCommand.TaskDone.apply)

  private val taskListOpts = Opts.argument[String]("crystal-id").map(CliCommand.TaskList.apply)

  private val nodeAddOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[NodeKind]("kind", "Node kind", "k")(nodeKindArgument),
    Opts.option[String]("summary", "Content summary", "s"),
    Opts.options[String]("parent", "Parent node IDs", "p").orEmpty
  ).mapN(CliCommand.NodeAdd.apply)

  private val lessonAddOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[String]("friction", "Observed friction", "f"),
    Opts.option[String]("root-cause", "Root cause", "r").orNone,
    Opts.option[String]("action", "Recommended action", "a").orNone
  ).mapN(CliCommand.LessonAdd.apply)

  private val leaseOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[TransientResourceType]("type", "Resource type", "t")(resourceTypeArgument),
    Opts.option[String]("path", "Path of resource", "p").orNone,
    Opts.option[String]("desc", "Description", "d"),
    Opts.option[DisposalPolicy]("policy", "Disposal policy")(disposalPolicyArgument)
  ).mapN(CliCommand.TransientLeaseCmd.apply)

  private val castOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[Int]("depth", "Max DAG depth to cast", "d").withDefault(10),
    Opts.flag("summary-only", "Emit only high-level summary").orFalse
  ).mapN(CliCommand.Cast.apply)

  private val hydrateOpts = (
    Opts.argument[String]("crystal-id"),
    Opts.option[Int]("depth", "Max DAG depth to cast", "d").withDefault(10),
    Opts.flag("summary-only", "Emit only high-level summary").orFalse
  ).mapN(CliCommand.Cast.apply)

  private val mainCommand = Command("ccrystal", "Context Crystal CLI")(
    Opts.subcommand("init", "Initialize a new crystal")(initOpts)
      .orElse(Opts.subcommand("list", "List crystals")(listOpts))
      .orElse(Opts.subcommand("task", "Manage tasks")(
        Opts.subcommand("add", "Add task")(taskAddOpts)
          .orElse(Opts.subcommand("done", "Complete task")(taskDoneOpts))
          .orElse(Opts.subcommand("list", "List tasks")(taskListOpts))
      ))
      .orElse(Opts.subcommand("node", "Manage DAG nodes")(
        Opts.subcommand("add", "Add DAG transition node")(nodeAddOpts)
      ))
      .orElse(Opts.subcommand("lesson", "Manage lessons learned")(
        Opts.subcommand("add", "Log a lesson learned")(lessonAddOpts)
      ))
      .orElse(Opts.subcommand("transient", "Manage transient leases")(
        Opts.subcommand("lease", "Acquire a transient lease")(leaseOpts)
      ))
      .orElse(Opts.subcommand("cast", "Cast a context beam for LLMs")(castOpts))
      .orElse(Opts.subcommand("hydrate", "Hydrate context for LLMs (alias for cast)")(hydrateOpts))
  )

  def parse(args: List[String]): Either[String, CliCommand] =
    mainCommand.parse(args).leftMap(_.toString)
