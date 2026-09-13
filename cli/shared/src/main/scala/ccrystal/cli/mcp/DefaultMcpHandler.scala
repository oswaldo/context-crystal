package ccrystal.cli.mcp

import io.circe.*
import io.circe.syntax.*
import ccrystal.core.mcp.*
import ccrystal.core.mcp.McpCodecs.given
import ccrystal.core.model.*
import ccrystal.core.store.CrystalStore
import ccrystal.core.codec.given
import ccrystal.cli.{BatchExecutor, CliCommand, Runner}

class DefaultMcpHandler(
    val store: CrystalStore,
    val runner: Runner,
) extends McpHandler:

  override def handle(request: JsonRpcRequest): JsonRpcResponse =
    request.method match
      case "initialize" =>
        val result = InitializeResult(
          protocolVersion = "2024-11-05",
          capabilities = ServerCapabilities(
            tools = Some(Json.obj()),
            resources = Some(Json.obj()),
            prompts = Some(Json.obj()),
          ),
          serverInfo = ServerInfo(name = "context-crystal", version = "1.0.0"),
        )
        JsonRpcResponse(id = request.id, result = Some(result.asJson))

      case "ping" =>
        JsonRpcResponse(id = request.id, result = Some(Json.obj()))

      case "tools/list" =>
        val tools = List(
          Tool(
            name = "crystal_batch",
            description =
              "Execute compound semicolon-delimited atomic transition recipes (e.g. 'node add -s \"...\" demo; task done -t task-1 demo'). Maximizes efficiency by minimizing roundtrips.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "commands" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Semicolon-separated compound crystal commands".asJson,
                ),
              ),
              "required" -> List("commands").asJson,
            ),
          ),
          Tool(
            name = "crystal_list",
            description =
              "List all crystals in the cave with status, task progress, active leases, and open lessons.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "status" -> Json.obj(
                  "type" -> "string".asJson,
                  "enum" -> List("in_progress", "concluded_success", "concluded_abandoned").asJson,
                  "description" -> "Optional filter by goal status".asJson,
                ),
                "json_output" -> Json.obj(
                  "type" -> "boolean".asJson,
                  "description" -> "Output structured JSON array instead of text table (default: false)".asJson,
                ),
              ),
            ),
          ),
          Tool(
            name = "crystal_init",
            description = "Initialize a new context crystal.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "name" -> Json
                  .obj("type" -> "string".asJson, "description" -> "Crystal identifier".asJson),
                "goal" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Title/goal of the crystal".asJson,
                ),
                "intent" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Optional detailed intent".asJson,
                ),
                "author" -> Json
                  .obj("type" -> "string".asJson, "description" -> "Optional author name".asJson),
                "tasks" -> Json.obj(
                  "type"        -> "array".asJson,
                  "items"       -> Json.obj("type" -> "string".asJson),
                  "description" -> "Optional initial acceptance criteria / tasks".asJson,
                ),
              ),
              "required" -> List("name", "goal").asJson,
            ),
          ),
          Tool(
            name = "crystal_checkpoint",
            description = "Create an anchor checkpoint node in the crystal DAG.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "crystal_id" -> Json
                  .obj("type" -> "string".asJson, "description" -> "Crystal identifier".asJson),
                "summary" -> Json
                  .obj("type" -> "string".asJson, "description" -> "Checkpoint summary".asJson),
                "anchor" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Optional anchor tag name".asJson,
                ),
                "fidelity" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Fidelity: full, selective, summary".asJson,
                ),
              ),
              "required" -> List("crystal_id", "summary").asJson,
            ),
          ),
          Tool(
            name = "crystal_task_transition",
            description = "Add or complete a task in a crystal.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "crystal_id" -> Json
                  .obj("type" -> "string".asJson, "description" -> "Crystal identifier".asJson),
                "action" -> Json.obj(
                  "type"        -> "string".asJson,
                  "enum"        -> List("add", "done").asJson,
                  "description" -> "Action: add or done".asJson,
                ),
                "description_or_id" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Task description (for add) or task ID (for done)".asJson,
                ),
              ),
              "required" -> List("crystal_id", "action", "description_or_id").asJson,
            ),
          ),
          Tool(
            name = "crystal_transient_lease",
            description = "Create, clean, or promote a transient resource lease.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "crystal_id" -> Json
                  .obj("type" -> "string".asJson, "description" -> "Crystal identifier".asJson),
                "action" -> Json.obj(
                  "type"        -> "string".asJson,
                  "enum"        -> List("lease", "clean", "promote").asJson,
                  "description" -> "Action: lease, clean, or promote".asJson,
                ),
                "resource_type" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Resource type (default: workspace_branch)".asJson,
                ),
                "description" -> Json
                  .obj("type" -> "string".asJson, "description" -> "Lease description".asJson),
                "lease_id" -> Json
                  .obj("type" -> "string".asJson, "description" -> "Lease ID".asJson),
              ),
              "required" -> List("crystal_id", "action").asJson,
            ),
          ),
          Tool(
            name = "crystal_slice_fork",
            description = "Extract crystal fragment or fork sub-DAG into a new crystal.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "crystal_id" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Source crystal identifier".asJson,
                ),
                "fork_to" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Destination crystal identifier".asJson,
                ),
                "from_anchor" -> Json
                  .obj("type" -> "string".asJson, "description" -> "Optional source anchor".asJson),
                "prune" -> Json.obj(
                  "type"        -> "boolean".asJson,
                  "description" -> "Whether to prune source crystal to anchor".asJson,
                ),
              ),
              "required" -> List("crystal_id", "fork_to").asJson,
            ),
          ),
          Tool(
            name = "crystal_delete",
            description = "Permanently delete a crystal and cascade orphaned entities.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "crystal_id" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Crystal identifier to delete".asJson,
                ),
                "force" -> Json.obj(
                  "type"        -> "boolean".asJson,
                  "description" -> "Force deletion without confirmation".asJson,
                ),
              ),
              "required" -> List("crystal_id").asJson,
            ),
          ),
          Tool(
            name = "crystal_artifact",
            description =
              "Register, list, or inspect virtual and physical artifacts across cave or crystal.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "action" -> Json.obj(
                  "type"        -> "string".asJson,
                  "enum"        -> List("list", "register", "inspect").asJson,
                  "description" -> "Action: list, register, or inspect".asJson,
                ),
                "id" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Artifact identifier (required for register/inspect)".asJson,
                ),
                "name" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Artifact human-readable name".asJson,
                ),
                "substrate" -> Json.obj(
                  "type"        -> "string".asJson,
                  "enum"        -> List("virtual", "physical").asJson,
                  "description" -> "Substrate: virtual or physical".asJson,
                ),
                "role" -> Json.obj(
                  "type"        -> "string".asJson,
                  "enum"        -> List("target", "instrument", "precondition").asJson,
                  "description" -> "Role: target, instrument, or precondition".asJson,
                ),
                "uri" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Artifact URI pointer".asJson,
                ),
                "media_type" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "MIME / media type".asJson,
                ),
                "description" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Artifact description".asJson,
                ),
                "location_name" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Physical location name".asJson,
                ),
                "civic_address" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Physical civic address".asJson,
                ),
                "geo_uri" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Geo coordinates URI".asJson,
                ),
                "bench_coordinates" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Physical bench coordinates".asJson,
                ),
                "crystal_id" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Optional crystal ID for crystal-scoped operations".asJson,
                ),
                "cave" -> Json.obj(
                  "type"        -> "boolean".asJson,
                  "description" -> "Target cave registry".asJson,
                ),
              ),
              "required" -> List("action").asJson,
            ),
          ),
          Tool(
            name = "crystal_hydrate",
            description =
              "Hydrate context beam from a crystal with selective shaping (tail, slice range from/to, depth, or summary only).",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "crystal_id" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Target crystal identifier".asJson,
                ),
                "tail" -> Json.obj(
                  "type"        -> "integer".asJson,
                  "description" -> "Number of recent transitions to include in slice".asJson,
                ),
                "from" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Starting anchor or node ID/prefix for transition slice".asJson,
                ),
                "to" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Ending anchor or node ID/prefix for transition slice".asJson,
                ),
                "depth" -> Json.obj(
                  "type"        -> "integer".asJson,
                  "description" -> "Maximum traversal depth (default: 10, alias for tail)".asJson,
                ),
                "summary_only" -> Json.obj(
                  "type" -> "boolean".asJson,
                  "description" -> "Exclude DAG transitions and hydrate living state summary only (default: false)".asJson,
                ),
              ),
              "required" -> List("crystal_id").asJson,
            ),
          ),
        )
        JsonRpcResponse(id = request.id, result = Some(ListToolsResult(tools).asJson))

      case "tools/call" =>
        val callResult = handleToolCall(request.params)
        JsonRpcResponse(id = request.id, result = Some(callResult.asJson))

      case "resources/list" =>
        val result = handleResourcesList()
        result match
          case Right(res) => JsonRpcResponse(id = request.id, result = Some(res.asJson))
          case Left(err) =>
            JsonRpcResponse(
              id = request.id,
              error = Some(JsonRpcError(JsonRpcError.InternalError, err)),
            )

      case "resources/read" =>
        val result = handleResourceRead(request.params)
        result match
          case Right(res) => JsonRpcResponse(id = request.id, result = Some(res.asJson))
          case Left(err) =>
            JsonRpcResponse(
              id = request.id,
              error = Some(JsonRpcError(JsonRpcError.InvalidParams, err)),
            )

      case "prompts/list" =>
        val prompts = List(
          Prompt(
            name = "hydrate_context",
            description = Some("Hydrate context beam system prompt from crystal"),
            arguments = List(
              PromptArgument("crystal_id", Some("Target crystal ID"), required = true),
              PromptArgument(
                "from",
                Some("Start of transition slice (anchor or node ID/prefix)"),
                required = false,
              ),
              PromptArgument(
                "to",
                Some("End of transition slice (anchor or node ID/prefix)"),
                required = false,
              ),
              PromptArgument(
                "tail",
                Some("Number of recent transitions to include in slice"),
                required = false,
              ),
              PromptArgument(
                "depth",
                Some("Maximum DAG traversal depth (default: 10, alias for tail)"),
                required = false,
              ),
              PromptArgument(
                "summary_only",
                Some("Hydrate summary only (true/false)"),
                required = false,
              ),
            ),
          ),
          Prompt(
            name = "triage_cave",
            description = Some(
              "Inspect and triage crystals across the workspace cave for lifecycle hygiene and cleanup recommendations",
            ),
            arguments = Nil,
          ),
        )
        JsonRpcResponse(id = request.id, result = Some(ListPromptsResult(prompts).asJson))

      case "prompts/get" =>
        val result = handlePromptGet(request.params)
        result match
          case Right(res) => JsonRpcResponse(id = request.id, result = Some(res.asJson))
          case Left(err) =>
            JsonRpcResponse(
              id = request.id,
              error = Some(JsonRpcError(JsonRpcError.InvalidParams, err)),
            )

      case other =>
        JsonRpcResponse(
          id = request.id,
          error = Some(JsonRpcError(JsonRpcError.MethodNotFound, s"Method not found: $other")),
        )

  private def handleToolCall(paramsOpt: Option[Json]): CallToolResult =
    paramsOpt match
      case None =>
        CallToolResult(List(ToolContent(text = "Missing params for tools/call")), isError = true)
      case Some(params) =>
        params.as[CallToolParams] match
          case Left(err) =>
            CallToolResult(
              List(ToolContent(text = s"Failed to decode CallToolParams: ${err.getMessage}")),
              isError = true,
            )
          case Right(CallToolParams(name, argsOpt)) =>
            val args = argsOpt.getOrElse(Json.obj())
            executeTool(name, args)

  private def executeTool(name: String, args: Json): CallToolResult =
    val cursor = args.hcursor
    name match
      case "crystal_batch" =>
        cursor.get[String]("commands") match
          case Left(_) =>
            CallToolResult(List(ToolContent(text = "Missing 'commands' argument")), isError = true)
          case Right(commands) =>
            BatchExecutor.executeChain(commands, runner) match
              case Right(outputs) =>
                CallToolResult(List(ToolContent(text = outputs.mkString("\n"))), isError = false)
              case Left(err) =>
                CallToolResult(
                  List(ToolContent(text = s"Batch execution failed: $err")),
                  isError = true,
                )

      case "crystal_list" =>
        val statusOpt = cursor.get[String]("status").toOption.flatMap {
          case "in_progress"                     => Some(GoalStatus.InProgress)
          case "concluded" | "concluded_success" => Some(GoalStatus.ConcludedSuccess)
          case "concluded_abandoned"             => Some(GoalStatus.ConcludedAbandoned)
          case _                                 => None
        }
        val jsonOutput = cursor.get[Boolean]("json_output").toOption.getOrElse(false)
        val cmd        = CliCommand.ListCrystals(status = statusOpt, jsonOutput = jsonOutput)
        runCommandToResult(cmd)

      case "crystal_init" =>
        val nameOpt   = cursor.get[String]("name").toOption
        val goalOpt   = cursor.get[String]("goal").toOption
        val intentOpt = cursor.get[String]("intent").toOption
        val authorOpt = cursor.get[String]("author").toOption
        val tasksOpt  = cursor.get[List[String]]("tasks").toOption.getOrElse(Nil)
        (nameOpt, goalOpt) match
          case (Some(cName), Some(cGoal)) =>
            val cmd = CliCommand.Init(
              name = cName,
              goalTitle = cGoal,
              intent = intentOpt,
              author = authorOpt,
              authorKind = Some(EntityKind.Human),
              createdAt = None,
              tasks = tasksOpt,
            )
            runCommandToResult(cmd)
          case _ =>
            CallToolResult(
              List(ToolContent(text = "Missing required 'name' or 'goal'")),
              isError = true,
            )

      case "crystal_checkpoint" =>
        val crystalIdOpt = cursor.get[String]("crystal_id").toOption
        val summaryOpt   = cursor.get[String]("summary").toOption
        val anchorOpt    = cursor.get[String]("anchor").toOption
        val fidelityOpt  = cursor.get[String]("fidelity").toOption
        (crystalIdOpt, summaryOpt) match
          case (Some(cId), Some(summary)) =>
            val fidelity = fidelityOpt match
              case Some("intercepted") => CaptureFidelity.Intercepted
              case _                   => CaptureFidelity.Inferred
            val cmd = CliCommand.NodeAdd(
              crystalId = cId,
              kind = NodeKind.Checkpoint,
              summary = summary,
              parentIds = Nil,
              author = None,
              fidelity = fidelity,
              anchor = anchorOpt,
              timestamp = None,
            )
            runCommandToResult(cmd)
          case _ =>
            CallToolResult(
              List(ToolContent(text = "Missing required 'crystal_id' or 'summary'")),
              isError = true,
            )

      case "crystal_task_transition" =>
        val crystalIdOpt = cursor.get[String]("crystal_id").toOption
        val actionOpt    = cursor.get[String]("action").toOption
        val targetOpt    = cursor.get[String]("description_or_id").toOption
        (crystalIdOpt, actionOpt, targetOpt) match
          case (Some(cId), Some("add"), Some(desc)) =>
            runCommandToResult(CliCommand.TaskAdd(crystalId = cId, description = desc))
          case (Some(cId), Some("done"), Some(taskId)) =>
            runCommandToResult(CliCommand.TaskDone(crystalId = cId, taskId = taskId))
          case _ =>
            CallToolResult(
              List(ToolContent(text = "Missing or invalid arguments for crystal_task_transition")),
              isError = true,
            )

      case "crystal_transient_lease" =>
        val crystalIdOpt = cursor.get[String]("crystal_id").toOption
        val actionOpt    = cursor.get[String]("action").toOption
        val resTypeOpt   = cursor.get[String]("resource_type").toOption
        val descOpt      = cursor.get[String]("description").toOption
        val leaseIdOpt   = cursor.get[String]("lease_id").toOption
        val resType = resTypeOpt
          .flatMap {
            case "git_worktree" | "GitWorktree" => Some(TransientResourceType.GitWorktree)
            case "env_override" | "EnvOverride" => Some(TransientResourceType.EnvOverride)
            case "debug_config" | "DebugConfig" => Some(TransientResourceType.DebugConfig)
            case "dummy_asset" | "DummyAsset"   => Some(TransientResourceType.DummyAsset)
            case "mock_service" | "MockService" => Some(TransientResourceType.MockService)
            case _                              => None
          }
          .getOrElse(TransientResourceType.GitWorktree)

        (crystalIdOpt, actionOpt) match
          case (Some(cId), Some("lease")) =>
            val cmd = CliCommand.TransientLeaseCmd(
              crystalId = cId,
              resourceType = resType,
              path = None,
              description = descOpt.getOrElse(""),
              policy = DisposalPolicy.Manual,
              acquiredAt = None,
            )
            runCommandToResult(cmd)
          case (Some(cId), Some("clean")) =>
            leaseIdOpt match
              case Some(lId) =>
                runCommandToResult(CliCommand.TransientClean(crystalId = cId, leaseId = lId))
              case None =>
                CallToolResult(
                  List(ToolContent(text = "Missing required 'lease_id' for clean")),
                  isError = true,
                )
          case _ =>
            CallToolResult(
              List(ToolContent(text = "Missing or unsupported action for crystal_transient_lease")),
              isError = true,
            )

      case "crystal_slice_fork" =>
        val crystalIdOpt  = cursor.get[String]("crystal_id").toOption
        val forkToOpt     = cursor.get[String]("fork_to").toOption
        val fromAnchorOpt = cursor.get[String]("from_anchor").toOption
        val pruneOpt      = cursor.get[Boolean]("prune").toOption
        (crystalIdOpt, forkToOpt) match
          case (Some(cId), Some(forkTo)) =>
            val cmd = CliCommand.Slice(
              crystalId = cId,
              from = fromAnchorOpt,
              forkTo = Some(forkTo),
              prune = pruneOpt.getOrElse(false),
            )
            runCommandToResult(cmd)
          case _ =>
            CallToolResult(
              List(ToolContent(text = "Missing required 'crystal_id' or 'fork_to'")),
              isError = true,
            )

      case "crystal_delete" =>
        val crystalIdOpt = cursor.get[String]("crystal_id").toOption
        val forceOpt     = cursor.get[Boolean]("force").toOption.getOrElse(true)
        crystalIdOpt match
          case Some(cId) =>
            runCommandToResult(CliCommand.Delete(crystalId = cId, force = forceOpt))
          case None =>
            CallToolResult(
              List(ToolContent(text = "Missing required 'crystal_id'")),
              isError = true,
            )

      case "crystal_artifact" =>
        val actionOpt = cursor.get[String]("action").toOption
        actionOpt match
          case Some("list") =>
            val crystalIdOpt = cursor.get[String]("crystal_id").toOption
            val caveOpt      = cursor.get[Boolean]("cave").toOption
            val cmd = CliCommand.ArtifactList(
              cave = caveOpt.getOrElse(crystalIdOpt.isEmpty),
              crystalId = crystalIdOpt,
              jsonOutput = false,
            )
            runCommandToResult(cmd)

          case Some("register") =>
            val idOpt = cursor.get[String]("id").toOption
            idOpt match
              case Some(id) =>
                val nameOpt = cursor.get[String]("name").toOption
                val substrateStr =
                  cursor.get[String]("substrate").toOption.getOrElse("virtual").toLowerCase
                val substrate =
                  if substrateStr == "physical" then ArtifactSubstrate.Physical
                  else ArtifactSubstrate.Virtual
                val roleStr = cursor.get[String]("role").toOption.getOrElse("target").toLowerCase
                val role = roleStr match
                  case "instrument"   => ArtifactRole.Instrument
                  case "precondition" => ArtifactRole.Precondition
                  case _              => ArtifactRole.Target
                val uriOpt         = cursor.get[String]("uri").toOption
                val mediaTypeOpt   = cursor.get[String]("media_type").toOption
                val descOpt        = cursor.get[String]("description").toOption
                val locNameOpt     = cursor.get[String]("location_name").toOption
                val civicAddrOpt   = cursor.get[String]("civic_address").toOption
                val geoUriOpt      = cursor.get[String]("geo_uri").toOption
                val benchCoordsOpt = cursor.get[String]("bench_coordinates").toOption
                val crystalIdOpt   = cursor.get[String]("crystal_id").toOption
                val caveOpt        = cursor.get[Boolean]("cave").toOption
                val cmd = CliCommand.ArtifactRegister(
                  id = id,
                  name = nameOpt,
                  substrate = substrate,
                  role = role,
                  uri = uriOpt,
                  mediaType = mediaTypeOpt,
                  description = descOpt,
                  locationName = locNameOpt,
                  civicAddress = civicAddrOpt,
                  geoUri = geoUriOpt,
                  benchCoordinates = benchCoordsOpt,
                  cave = caveOpt.getOrElse(crystalIdOpt.isEmpty),
                  crystalId = crystalIdOpt,
                )
                runCommandToResult(cmd)
              case None =>
                CallToolResult(
                  List(
                    ToolContent(text = "Missing required argument 'id' for artifact register"),
                  ),
                  isError = true,
                )

          case Some("inspect") =>
            val idOpt = cursor.get[String]("id").toOption
            idOpt match
              case Some(id) =>
                val crystalIdOpt = cursor.get[String]("crystal_id").toOption
                runCommandToResult(
                  CliCommand.ArtifactInspect(id = id, crystalId = crystalIdOpt, jsonOutput = false),
                )
              case None =>
                CallToolResult(
                  List(
                    ToolContent(text = "Missing required argument 'id' for artifact inspect"),
                  ),
                  isError = true,
                )

          case other =>
            CallToolResult(
              List(ToolContent(text = s"Missing or invalid action for crystal_artifact: $other")),
              isError = true,
            )

      case "crystal_hydrate" =>
        val crystalIdOpt = cursor.get[String]("crystal_id").toOption
        crystalIdOpt match
          case Some(cId) =>
            val fromOpt        = cursor.get[String]("from").toOption
            val toOpt          = cursor.get[String]("to").toOption
            val tailOpt        = cursor.get[Int]("tail").toOption
            val depthOpt       = cursor.get[Int]("depth").toOption
            val summaryOnlyOpt = cursor.get[Boolean]("summary_only").toOption.getOrElse(false)
            val cmd = CliCommand.Cast(
              crystalId = cId,
              from = fromOpt,
              to = toOpt,
              tail = tailOpt,
              depth = depthOpt.getOrElse(10),
              summaryOnly = summaryOnlyOpt,
            )
            runCommandToResult(cmd)
          case None =>
            CallToolResult(
              List(ToolContent(text = "Missing required 'crystal_id' for crystal_hydrate")),
              isError = true,
            )

      case other =>
        CallToolResult(List(ToolContent(text = s"Unknown tool: $other")), isError = true)

  private def runCommandToResult(cmd: CliCommand): CallToolResult =
    runner.run(cmd) match
      case Right(out) => CallToolResult(List(ToolContent(text = out)), isError = false)
      case Left(err)  => CallToolResult(List(ToolContent(text = err)), isError = true)

  private def handleResourcesList(): Either[String, ListResourcesResult] =
    for
      crystals <- store.list()
      crystalResources = crystals.flatMap { c =>
        List(
          Resource(
            uri = s"ccrystal://${c.id}/state",
            name = s"State for ${c.id}",
            description = Some("Living state container JSON"),
            mimeType = Some("application/json"),
          ),
          Resource(
            uri = s"ccrystal://${c.id}/dag",
            name = s"DAG for ${c.id}",
            description = Some("Lineage and DAG nodes JSON"),
            mimeType = Some("application/json"),
          ),
          Resource(
            uri = s"ccrystal://${c.id}/hydrate",
            name = s"Hydrated context beam for ${c.id}",
            description = Some("Hydrated context beam text/markdown"),
            mimeType = Some("text/markdown"),
          ),
          Resource(
            uri = s"ccrystal://${c.id}/artifacts",
            name = s"Artifacts for ${c.id}",
            description = Some("Artifacts and physical substrates JSON"),
            mimeType = Some("application/json"),
          ),
        )
      }
      entityResource = Resource(
        uri = "ccrystal://entities",
        name = "Cave Entities Registry",
        description = Some("Registered cave entities and identities"),
        mimeType = Some("application/json"),
      )
      artifactResource = Resource(
        uri = "ccrystal://artifacts",
        name = "Cave Artifacts Registry",
        description = Some("Registered cave artifacts and world-state substrates"),
        mimeType = Some("application/json"),
      )
    yield ListResourcesResult(crystalResources :+ entityResource :+ artifactResource)

  private def handleResourceRead(paramsOpt: Option[Json]): Either[String, ReadResourceResult] =
    paramsOpt match
      case None => Left("Missing params for resources/read")
      case Some(params) =>
        params.as[ReadResourceParams] match
          case Left(err) => Left(s"Failed to decode ReadResourceParams: ${err.getMessage}")
          case Right(ReadResourceParams(uri)) =>
            if uri == "ccrystal://entities" then
              store.getEntityRegistry().map { reg =>
                ReadResourceResult(
                  List(
                    ResourceContents(
                      uri = uri,
                      mimeType = Some("application/json"),
                      text = reg.asJson.spaces2,
                    ),
                  ),
                )
              }
            else if uri.startsWith("ccrystal://") && uri.endsWith("/state") then
              val crystalId = uri.stripPrefix("ccrystal://").stripSuffix("/state")
              store.load(crystalId).map { c =>
                ReadResourceResult(
                  List(
                    ResourceContents(
                      uri = uri,
                      mimeType = Some("application/json"),
                      text = c.asJson.spaces2,
                    ),
                  ),
                )
              }
            else if uri.startsWith("ccrystal://") && uri.endsWith("/dag") then
              val crystalId = uri.stripPrefix("ccrystal://").stripSuffix("/dag")
              store.load(crystalId).map { c =>
                ReadResourceResult(
                  List(
                    ResourceContents(
                      uri = uri,
                      mimeType = Some("application/json"),
                      text = c.dag.asJson.spaces2,
                    ),
                  ),
                )
              }
            else if uri
                .startsWith("ccrystal://") && (uri.contains("/hydrate?") || uri.endsWith(
                "/hydrate",
              ))
            then
              val raw = uri.stripPrefix("ccrystal://")
              val (pathPart, queryPart) =
                if raw.contains("?") then
                  val parts = raw.split('?')
                  (parts(0), parts(1))
                else (raw, "")
              val crystalId = pathPart.stripSuffix("/hydrate")
              val queryParams: Map[String, String] =
                if queryPart.nonEmpty then
                  queryPart
                    .split('&')
                    .flatMap { pair =>
                      val kv = pair.split('=')
                      if kv.length == 2 then Some(kv(0) -> kv(1))
                      else if kv.length == 1 then Some(kv(0) -> "")
                      else None
                    }
                    .toMap
                else Map.empty

              val fromOpt        = queryParams.get("from")
              val toOpt          = queryParams.get("to")
              val tailOpt        = queryParams.get("tail").flatMap(_.toIntOption)
              val depthOpt       = queryParams.get("depth").flatMap(_.toIntOption)
              val summaryOnlyOpt = queryParams.get("summary_only").map(_.toBoolean).getOrElse(false)
              val cmd = CliCommand.Cast(
                crystalId = crystalId,
                from = fromOpt,
                to = toOpt,
                tail = tailOpt,
                depth = depthOpt.getOrElse(10),
                summaryOnly = summaryOnlyOpt,
              )
              runner.run(cmd).map { beamText =>
                ReadResourceResult(
                  List(
                    ResourceContents(
                      uri = uri,
                      mimeType = Some("text/markdown"),
                      text = beamText,
                    ),
                  ),
                )
              }
            else if uri == "ccrystal://artifacts" then
              store.getArtifactRegistry().map { reg =>
                ReadResourceResult(
                  List(
                    ResourceContents(
                      uri = uri,
                      mimeType = Some("application/json"),
                      text = reg.asJson.spaces2,
                    ),
                  ),
                )
              }
            else if uri.startsWith("ccrystal://") && uri.endsWith("/artifacts") then
              val crystalId = uri.stripPrefix("ccrystal://").stripSuffix("/artifacts")
              store.load(crystalId).map { c =>
                ReadResourceResult(
                  List(
                    ResourceContents(
                      uri = uri,
                      mimeType = Some("application/json"),
                      text = c.artifacts.asJson.spaces2,
                    ),
                  ),
                )
              }
            else Left(s"Unknown or unsupported resource URI: $uri")

  private def handlePromptGet(paramsOpt: Option[Json]): Either[String, GetPromptResult] =
    paramsOpt match
      case None => Left("Missing params for prompts/get")
      case Some(params) =>
        params.as[GetPromptParams] match
          case Left(err) => Left(s"Failed to decode GetPromptParams: ${err.getMessage}")
          case Right(GetPromptParams(name, argsOpt)) =>
            name match
              case "hydrate_context" =>
                val args = argsOpt.getOrElse(Map.empty)
                val crystalId = args.get("crystal_id") match
                  case Some(id) => id
                  case None     => return Left("Missing required argument 'crystal_id'")
                val fromOpt        = args.get("from")
                val toOpt          = args.get("to")
                val tailOpt        = args.get("tail").flatMap(_.toIntOption)
                val depthOpt       = args.get("depth").flatMap(_.toIntOption)
                val summaryOnlyOpt = args.get("summary_only").map(_.toBoolean)
                val cmd = CliCommand.Cast(
                  crystalId = crystalId,
                  from = fromOpt,
                  to = toOpt,
                  tail = tailOpt,
                  depth = depthOpt.getOrElse(10),
                  summaryOnly = summaryOnlyOpt.getOrElse(false),
                )
                runner.run(cmd).map { beamText =>
                  GetPromptResult(
                    description = Some(s"Hydrated context beam for $crystalId"),
                    messages = List(
                      PromptMessage(
                        role = "user",
                        content = PromptMessageContent(`type` = "text", text = beamText),
                      ),
                    ),
                  )
                }

              case "triage_cave" =>
                store.list().map { crystals =>
                  val sb = new java.lang.StringBuilder()
                  sb.append("# Cave Lifecycle & Hygiene Triage Report\n\n")
                  sb.append(
                    "You are assisting the user in reviewing and triaging the workspace cave to optimize disk space and context clarity.\n",
                  )
                  sb.append(s"Total crystals found in workspace: ${crystals.size}\n\n")
                  sb.append("| Crystal ID | Status | Goal Title | Lineage Nodes | Last Updated |\n")
                  sb.append("|---|---|---|---|---|\n")
                  crystals.foreach { c =>
                    sb.append(
                      s"| `${c.id}` | ${c.goal.status} | ${c.goal.title} | ${c.dag.nodes.size} | ${c.updatedAt} |\n",
                    )
                  }
                  sb.append("\n## Instructions for AI:\n")
                  sb.append("1. Analyze the table above and categorize crystals into:\n")
                  sb.append("   - **Keep (Active / In-Progress):** Crystals currently in flight.\n")
                  sb.append(
                    "   - **Candidate for Cleanup (Completed / Abandoned):** Crystals whose tasks and goals are fully concluded or abandoned.\n",
                  )
                  sb.append(
                    "   - **Requires Review:** Inactive crystals with unfinished tasks or unharvested lessons.\n",
                  )
                  sb.append("2. Present a succinct recommendation to the user.\n")
                  sb.append(
                    "3. DO NOT delete any crystal without explicit user confirmation. When the user approves deletion, use `crystal_delete` (or `ccrystal delete <id> --force`).\n",
                  )

                  GetPromptResult(
                    description = Some("Cave hygiene and crystal cleanup triage guidelines"),
                    messages = List(
                      PromptMessage(
                        role = "user",
                        content = PromptMessageContent(`type` = "text", text = sb.toString),
                      ),
                    ),
                  )
                }

              case other => Left(s"Unknown prompt: $other")
