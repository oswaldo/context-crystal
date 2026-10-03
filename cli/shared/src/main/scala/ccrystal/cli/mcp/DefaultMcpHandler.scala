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
        val instructions =
          """Context Crystal Operational Guidelines for AI Entities:
            |1. Tool Priority: Prioritize native MCP tools (crystal_batch, crystal_init, crystal_goal_transition, crystal_hydrate) over running CLI commands via subshells.
            |2. Atomic Batching: Use crystal_batch for compound transitions (e.g. 'node add -s "..." <id>; task done -t task-1 <id>') to minimize turn roundtrips.
            |3. Goal Lifecycle: Once all tasks are complete, always transition goal status using crystal_goal_transition (status: 'concluded_success' or 'concluded_abandoned') with a summary to record provenance in a resolution DAG node.
            |4. Invariants: Always use fidelity 'inferred' for agent reasoning. Never delete crystals without explicit operator confirmation. Clean or promote all transient resource leases before concluding work.""".stripMargin

        val result = InitializeResult(
          protocolVersion = "2024-11-05",
          capabilities = ServerCapabilities(
            tools = Some(Json.obj()),
            resources = Some(Json.obj()),
            prompts = Some(Json.obj()),
          ),
          serverInfo = ServerInfo(name = "context-crystal", version = "1.0.0"),
          instructions = Some(instructions),
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
            name = "crystal_search",
            description =
              "Search and list crystals in the cave with multi-dimensional filtering (query text, temporal bounds, leases, tasks, lessons, status, aging, archived, sorting, and pagination). When called without filters, lists active crystals (most recently active first).",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "query" -> Json.obj(
                  "type" -> "string".asJson,
                  "description" -> "Free-text search query across crystal ID, title, intent, DAG nodes, lessons, and artifacts".asJson,
                ),
                "since" -> Json.obj(
                  "type" -> "string".asJson,
                  "description" -> "Filter crystals active on or after ISO-8601 date/datetime or relative expression (today, yesterday, 1d, 7d)".asJson,
                ),
                "until" -> Json.obj(
                  "type" -> "string".asJson,
                  "description" -> "Filter crystals active on or before ISO-8601 date/datetime or relative expression".asJson,
                ),
                "status" -> Json.obj(
                  "type" -> "string".asJson,
                  "enum" -> List("in_progress", "concluded_success", "concluded_abandoned").asJson,
                  "description" -> "Filter by goal status".asJson,
                ),
                "has_active_leases" -> Json.obj(
                  "type"        -> "boolean".asJson,
                  "description" -> "Filter crystals holding active transient resource leases".asJson,
                ),
                "touching_path" -> Json.obj(
                  "type" -> "string".asJson,
                  "description" -> "Match leases or artifacts referencing the specified filesystem path or URI".asJson,
                ),
                "has_open_tasks" -> Json.obj(
                  "type"        -> "boolean".asJson,
                  "description" -> "Filter crystals with incomplete acceptance criteria".asJson,
                ),
                "has_lessons" -> Json.obj(
                  "type"        -> "boolean".asJson,
                  "description" -> "Filter crystals with recorded lessons learned".asJson,
                ),
                "author" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Filter by author entity ID".asJson,
                ),
                "aging" -> Json.obj(
                  "type"        -> "string".asJson,
                  "enum"        -> List("active", "solid", "stale").asJson,
                  "description" -> "Filter by aging category (active, solid, stale)".asJson,
                ),
                "sort" -> Json.obj(
                  "type"        -> "string".asJson,
                  "enum"        -> List("recent", "oldest", "name").asJson,
                  "description" -> "Sort order: recent (default), oldest, name".asJson,
                ),
                "limit" -> Json.obj(
                  "type" -> "integer".asJson,
                  "description" -> "Maximum number of results to return per page (default: 20; 0 to uncap)".asJson,
                ),
                "offset" -> Json.obj(
                  "type"        -> "integer".asJson,
                  "description" -> "Result offset for pagination (default: 0)".asJson,
                ),
                "include_archived" -> Json.obj(
                  "type"        -> "boolean".asJson,
                  "description" -> "Include crystals in cold storage (default: false)".asJson,
                ),
                "json_output" -> Json.obj(
                  "type" -> "boolean".asJson,
                  "description" -> "Output structured JSON array instead of text table (default: false)".asJson,
                ),
              ),
            ),
          ),
          Tool(
            name = "crystal_stats",
            description =
              "Compute and inspect workspace cave statistics, temporal genesis, structural totals, physical disk footprints, and quantitative prompt token savings across global cave or filtered search criteria.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "query" -> Json.obj(
                  "type" -> "string".asJson,
                  "description" -> "Optional free-text search query to scope statistics calculation".asJson,
                ),
                "since" -> Json.obj(
                  "type" -> "string".asJson,
                  "description" -> "Filter crystals active on or after ISO-8601 date/datetime or relative expression (today, yesterday, 1d, 7d)".asJson,
                ),
                "until" -> Json.obj(
                  "type" -> "string".asJson,
                  "description" -> "Filter crystals active on or before ISO-8601 date/datetime or relative expression".asJson,
                ),
                "status" -> Json.obj(
                  "type" -> "string".asJson,
                  "enum" -> List("in_progress", "concluded_success", "concluded_abandoned").asJson,
                  "description" -> "Filter by goal status".asJson,
                ),
                "has_active_leases" -> Json.obj(
                  "type"        -> "boolean".asJson,
                  "description" -> "Filter crystals holding active transient resource leases".asJson,
                ),
                "touching_path" -> Json.obj(
                  "type" -> "string".asJson,
                  "description" -> "Match leases or artifacts referencing the specified filesystem path or URI".asJson,
                ),
                "has_open_tasks" -> Json.obj(
                  "type"        -> "boolean".asJson,
                  "description" -> "Filter crystals with incomplete acceptance criteria".asJson,
                ),
                "has_lessons" -> Json.obj(
                  "type"        -> "boolean".asJson,
                  "description" -> "Filter crystals with recorded lessons learned".asJson,
                ),
                "author" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Filter by author entity ID".asJson,
                ),
                "aging" -> Json.obj(
                  "type"        -> "string".asJson,
                  "enum"        -> List("active", "solid", "stale").asJson,
                  "description" -> "Filter by aging category (active, solid, stale)".asJson,
                ),
                "include_archived" -> Json.obj(
                  "type"        -> "boolean".asJson,
                  "description" -> "Include crystals in cold storage (default: false)".asJson,
                ),
                "detailed" -> Json.obj(
                  "type" -> "boolean".asJson,
                  "description" -> "Show detailed per-crystal storage breakdown and ranking (default: false)".asJson,
                ),
                "json_output" -> Json.obj(
                  "type" -> "boolean".asJson,
                  "description" -> "Output structured JSON instead of human-readable dashboard table (default: false)".asJson,
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
            name = "crystal_goal_transition",
            description =
              "Transition a crystal's top-level goal status (conclude successfully, abandon, or reopen) with optional resolution summary or reason.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "crystal_id" -> Json
                  .obj("type" -> "string".asJson, "description" -> "Crystal identifier".asJson),
                "status" -> Json.obj(
                  "type" -> "string".asJson,
                  "enum" -> List("in_progress", "concluded_success", "concluded_abandoned").asJson,
                  "description" -> "Target goal status (in_progress, concluded_success, concluded_abandoned)".asJson,
                ),
                "summary" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Optional resolution summary or abandonment reason".asJson,
                ),
              ),
              "required" -> List("crystal_id", "status").asJson,
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
            name = "crystal_prune",
            description =
              "Permanently prune a crystal or cold storage archives by retention policy (with entity and artifact cascade).",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "crystal_id" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Crystal identifier to delete (active or archived)".asJson,
                ),
                "older_than" -> Json.obj(
                  "type" -> "string".asJson,
                  "description" -> "Batch prune archived crystals inactive for duration (e.g. '30d', '2w', '3m')".asJson,
                ),
                "all" -> Json.obj(
                  "type" -> "boolean".asJson,
                  "description" -> "Batch prune all archived crystals in cold storage (default: false)".asJson,
                ),
                "archive_only" -> Json.obj(
                  "type" -> "boolean".asJson,
                  "description" -> "Restrict deletion strictly to cold storage (default: true for batch prune)".asJson,
                ),
                "dry_run" -> Json.obj(
                  "type" -> "boolean".asJson,
                  "description" -> "Preview candidates and cascade impact without deleting (default: false for batch prune)".asJson,
                ),
                "force" -> Json.obj(
                  "type" -> "boolean".asJson,
                  "description" -> "Force deletion/pruning without confirmation prompt (default: true for single crystal delete, false for batch prune)".asJson,
                ),
              ),
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
          Tool(
            name = "crystal_triage",
            description =
              "Triage workspace cave crystals for lifecycle hygiene and aging, categorizing them into keep (active), candidates for cleanup (concluded/abandoned with 0 open leases), and requires review.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "aging" -> Json.obj(
                  "type"        -> "string".asJson,
                  "enum"        -> List("active", "solid", "stale").asJson,
                  "description" -> "Optional filter by aging classification state".asJson,
                ),
                "include_archived" -> Json.obj(
                  "type" -> "boolean".asJson,
                  "description" -> "Include archived crystals from cold storage (default: true)".asJson,
                ),
                "json_output" -> Json.obj(
                  "type" -> "boolean".asJson,
                  "description" -> "Output structured JSON array instead of markdown report (default: false)".asJson,
                ),
              ),
            ),
          ),
          Tool(
            name = "crystal_archive",
            description =
              "Archive a concluded or inactive crystal to cold storage (.ccrystals/archive/) to reduce cave bloat while preserving all state and artifacts.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "crystal_id" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Identifier of the crystal to archive".asJson,
                ),
              ),
              "required" -> List("crystal_id").asJson,
            ),
          ),
          Tool(
            name = "crystal_unarchive",
            description =
              "Restore an archived crystal from cold storage (.ccrystals/archive/) back to the active cave.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "crystal_id" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Identifier of the crystal to restore".asJson,
                ),
              ),
              "required" -> List("crystal_id").asJson,
            ),
          ),
          Tool(
            name = "crystal_melt",
            description =
              "Melt and squash intermediate sub-DAG transitions into a single consolidated checkpoint node with aggregated artifact links (Zero-LLM deterministic squashing by default).",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "crystal_id" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Identifier of the target crystal".asJson,
                ),
                "from" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Starting node ID or anchor to melt".asJson,
                ),
                "to" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Ending node ID or anchor to melt".asJson,
                ),
                "summary" -> Json.obj(
                  "type" -> "string".asJson,
                  "description" -> "Optional manual summary override for the consolidated node".asJson,
                ),
                "anchor" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Optional anchor label for the consolidated node".asJson,
                ),
              ),
              "required" -> List("crystal_id", "from", "to").asJson,
            ),
          ),
          Tool(
            name = "crystal_connect",
            description =
              "Connect, disconnect, or inspect directed lattice bonds between crystals in the cave, enforcing an acyclic graph invariant and supporting cross-crystal context hydration.",
            inputSchema = Json.obj(
              "type" -> "object".asJson,
              "properties" -> Json.obj(
                "action" -> Json.obj(
                  "type" -> "string".asJson,
                  "enum" -> List("connect", "disconnect", "list").asJson,
                  "description" -> "Action: connect (establish bond), disconnect (sever bond), or list (inspect inbound and outbound bonds; default: connect)".asJson,
                ),
                "crystal_id" -> Json.obj(
                  "type" -> "string".asJson,
                  "description" -> "Crystal ID to inspect when action is 'list' (or alias for source_crystal_id)".asJson,
                ),
                "source_crystal_id" -> Json.obj(
                  "type"        -> "string".asJson,
                  "description" -> "Source crystal ID initiating the bond".asJson,
                ),
                "target_crystal_id" -> Json.obj(
                  "type" -> "string".asJson,
                  "description" -> "Target crystal ID being connected to (required for connect)".asJson,
                ),
                "relation" -> Json.obj(
                  "type" -> "string".asJson,
                  "enum" -> List(
                    "relates_to",
                    "depends_on",
                    "blocks",
                    "supersedes",
                    "references",
                  ).asJson,
                  "description" -> "Bond relation type (relates_to, depends_on, blocks, supersedes, references; required for connect)".asJson,
                ),
                "description" -> Json.obj(
                  "type" -> "string".asJson,
                  "description" -> "Optional human or agent rationale explaining the cross-crystal bond".asJson,
                ),
                "json_output" -> Json.obj(
                  "type" -> "boolean".asJson,
                  "description" -> "When action is 'list', return structured JSON instead of formatted text (default: false)".asJson,
                ),
              ),
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

      case "crystal_search" =>
        val queryOpt = cursor.get[String]("query").toOption
        val sinceOpt = cursor.get[String]("since").toOption
        val untilOpt = cursor.get[String]("until").toOption
        val statusOpt = cursor.get[String]("status").toOption.flatMap {
          case "in_progress"                     => Some(GoalStatus.InProgress)
          case "concluded" | "concluded_success" => Some(GoalStatus.ConcludedSuccess)
          case "concluded_abandoned"             => Some(GoalStatus.ConcludedAbandoned)
          case _                                 => None
        }
        val hasActiveLeasesOpt = cursor.get[Boolean]("has_active_leases").toOption
        val touchingPathOpt    = cursor.get[String]("touching_path").toOption
        val hasOpenTasksOpt    = cursor.get[Boolean]("has_open_tasks").toOption
        val hasLessonsOpt      = cursor.get[Boolean]("has_lessons").toOption
        val authorOpt          = cursor.get[String]("author").toOption
        val agingOpt =
          cursor
            .get[String]("aging")
            .toOption
            .flatMap(ccrystal.core.model.search.AgingCategory.parse)
        val sortOpt =
          cursor.get[String]("sort").toOption.flatMap(ccrystal.core.model.search.SearchSort.parse)
        val limitOpt        = cursor.get[Int]("limit").toOption
        val offsetOpt       = cursor.get[Int]("offset").toOption
        val isUncapped      = limitOpt.contains(0)
        val includeArchived = cursor.get[Boolean]("include_archived").toOption.getOrElse(false)
        val jsonOutput      = cursor.get[Boolean]("json_output").toOption.getOrElse(false)

        val filter = ccrystal.core.model.search.CrystalFilter(
          query = queryOpt,
          since = sinceOpt,
          until = untilOpt,
          status = statusOpt,
          hasActiveLeases = hasActiveLeasesOpt,
          touchingPath = touchingPathOpt,
          hasOpenTasks = hasOpenTasksOpt,
          hasLessons = hasLessonsOpt,
          author = authorOpt,
          aging = agingOpt,
          includeArchived = includeArchived,
          sort = sortOpt,
          limit = if isUncapped then None else limitOpt.filter(_ > 0),
          offset = offsetOpt,
          uncapped = isUncapped,
        )
        val cmd = CliCommand.Search(filter = filter, jsonOutput = jsonOutput)
        runCommandToResult(cmd)

      case "crystal_stats" =>
        val queryOpt = cursor.get[String]("query").toOption
        val sinceOpt = cursor.get[String]("since").toOption
        val untilOpt = cursor.get[String]("until").toOption
        val statusOpt = cursor.get[String]("status").toOption.flatMap {
          case "in_progress"                     => Some(GoalStatus.InProgress)
          case "concluded" | "concluded_success" => Some(GoalStatus.ConcludedSuccess)
          case "concluded_abandoned"             => Some(GoalStatus.ConcludedAbandoned)
          case _                                 => None
        }
        val hasActiveLeasesOpt = cursor.get[Boolean]("has_active_leases").toOption
        val touchingPathOpt    = cursor.get[String]("touching_path").toOption
        val hasOpenTasksOpt    = cursor.get[Boolean]("has_open_tasks").toOption
        val hasLessonsOpt      = cursor.get[Boolean]("has_lessons").toOption
        val authorOpt          = cursor.get[String]("author").toOption
        val agingOpt =
          cursor
            .get[String]("aging")
            .toOption
            .flatMap(ccrystal.core.model.search.AgingCategory.parse)
        val includeArchived = cursor.get[Boolean]("include_archived").toOption.getOrElse(false)
        val detailed        = cursor.get[Boolean]("detailed").toOption.getOrElse(false)
        val jsonOutput      = cursor.get[Boolean]("json_output").toOption.getOrElse(false)

        val hasFilterCriteria = queryOpt.isDefined ||
          sinceOpt.isDefined ||
          untilOpt.isDefined ||
          statusOpt.isDefined ||
          hasActiveLeasesOpt.isDefined ||
          touchingPathOpt.isDefined ||
          hasOpenTasksOpt.isDefined ||
          hasLessonsOpt.isDefined ||
          authorOpt.isDefined ||
          agingOpt.isDefined ||
          includeArchived

        val filterOpt =
          if hasFilterCriteria then
            Some(
              ccrystal.core.model.search.CrystalFilter(
                query = queryOpt,
                since = sinceOpt,
                until = untilOpt,
                status = statusOpt,
                hasActiveLeases = hasActiveLeasesOpt,
                touchingPath = touchingPathOpt,
                hasOpenTasks = hasOpenTasksOpt,
                hasLessons = hasLessonsOpt,
                author = authorOpt,
                aging = agingOpt,
                includeArchived = includeArchived,
              ),
            )
          else None

        val cmd = CliCommand.Stats(filter = filterOpt, detailed = detailed, jsonOutput = jsonOutput)
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

      case "crystal_goal_transition" =>
        val crystalIdOpt = cursor.get[String]("crystal_id").toOption
        val statusStrOpt = cursor.get[String]("status").toOption
        val summaryOpt   = cursor.get[String]("summary").toOption
        (crystalIdOpt, statusStrOpt) match
          case (Some(cId), Some(statusStr)) =>
            val goalStatusOpt = statusStr match
              case "in_progress"                       => Some(GoalStatus.InProgress)
              case "concluded" | "concluded_success"   => Some(GoalStatus.ConcludedSuccess)
              case "abandoned" | "concluded_abandoned" => Some(GoalStatus.ConcludedAbandoned)
              case _                                   => None
            goalStatusOpt match
              case Some(status) =>
                runCommandToResult(
                  CliCommand.GoalTransition(crystalId = cId, status = status, summary = summaryOpt),
                )
              case None =>
                CallToolResult(
                  List(
                    ToolContent(
                      text =
                        s"Invalid goal status: $statusStr (must be 'in_progress', 'concluded_success', or 'concluded_abandoned')",
                    ),
                  ),
                  isError = true,
                )
          case _ =>
            CallToolResult(
              List(ToolContent(text = "Missing required arguments 'crystal_id' and 'status'")),
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

      case "crystal_prune" =>
        val crystalIdOpt = cursor.get[String]("crystal_id").toOption
        val olderThanOpt = cursor.get[String]("older_than").toOption
        val allOpt       = cursor.get[Boolean]("all").toOption.getOrElse(false)
        val dryRunOpt    = cursor.get[Boolean]("dry_run").toOption
        val forceOpt     = cursor.get[Boolean]("force").toOption

        if crystalIdOpt.isEmpty && olderThanOpt.isEmpty && !allOpt then
          CallToolResult(
            List(
              ToolContent(
                text =
                  "Missing required argument: specify 'crystal_id' to prune a crystal, or 'older_than' / 'all' to prune archived crystals",
              ),
            ),
            isError = true,
          )
        else
          val isBatch = olderThanOpt.isDefined || allOpt
          val force   = forceOpt.getOrElse(!isBatch)
          val dryRun  = dryRunOpt.getOrElse(if isBatch then !force else false)
          val cmd = CliCommand.Prune(
            crystalId = crystalIdOpt,
            olderThan = olderThanOpt,
            all = allOpt,
            dryRun = dryRun,
            force = force,
          )
          runCommandToResult(cmd)

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

      case "crystal_triage" =>
        val jsonOutput      = cursor.get[Boolean]("json_output").toOption.getOrElse(false)
        val includeArchived = cursor.get[Boolean]("include_archived").toOption.getOrElse(true)
        val agingOpt = cursor.get[String]("aging").toOption.flatMap {
          case "active" => Some(AgingState.Active)
          case "solid"  => Some(AgingState.Solid)
          case "stale"  => Some(AgingState.Stale)
          case _        => None
        }
        val cmd = CliCommand.Triage(
          filterAging = agingOpt,
          includeArchived = includeArchived,
          jsonOutput = jsonOutput,
        )
        runCommandToResult(cmd)

      case "crystal_archive" =>
        cursor.get[String]("crystal_id").toOption match
          case Some(id) =>
            val cmd = CliCommand.Archive(id)
            runCommandToResult(cmd)
          case None =>
            CallToolResult(
              List(ToolContent(text = "Missing required 'crystal_id' for crystal_archive")),
              isError = true,
            )

      case "crystal_unarchive" =>
        cursor.get[String]("crystal_id").toOption match
          case Some(id) =>
            val cmd = CliCommand.Unarchive(id)
            runCommandToResult(cmd)
          case None =>
            CallToolResult(
              List(ToolContent(text = "Missing required 'crystal_id' for crystal_unarchive")),
              isError = true,
            )

      case "crystal_melt" =>
        val crystalIdOpt = cursor.get[String]("crystal_id").toOption
        val fromOpt      = cursor.get[String]("from").toOption
        val toOpt        = cursor.get[String]("to").toOption
        val summaryOpt   = cursor.get[String]("summary").toOption
        val anchorOpt    = cursor.get[String]("anchor").toOption

        (crystalIdOpt, fromOpt, toOpt) match
          case (Some(cId), Some(from), Some(to)) =>
            val cmd = CliCommand.Melt(cId, from, to, summaryOpt, anchorOpt)
            runCommandToResult(cmd)
          case _ =>
            CallToolResult(
              List(
                ToolContent(
                  text = "Missing required 'crystal_id', 'from', or 'to' for crystal_melt",
                ),
              ),
              isError = true,
            )

      case "crystal_connect" =>
        val action = cursor.get[String]("action").getOrElse("connect").trim.toLowerCase
        action match
          case "connect" =>
            val sourceIdOpt = cursor
              .get[String]("source_crystal_id")
              .toOption
              .orElse(cursor.get[String]("crystal_id").toOption)
            val targetIdOpt = cursor.get[String]("target_crystal_id").toOption
            val relationOpt = cursor
              .get[String]("relation")
              .toOption
              .flatMap(ccrystal.core.model.lattice.BondRelation.parse)
            val descOpt = cursor.get[String]("description").toOption

            (sourceIdOpt, targetIdOpt, relationOpt) match
              case (Some(sourceId), Some(targetId), Some(relation)) =>
                runCommandToResult(CliCommand.Connect(sourceId, targetId, relation, descOpt))
              case (None, _, _) =>
                CallToolResult(
                  List(
                    ToolContent(text = "Missing required 'source_crystal_id' (or 'crystal_id')"),
                  ),
                  isError = true,
                )
              case (_, None, _) =>
                CallToolResult(
                  List(
                    ToolContent(text = "Missing required 'target_crystal_id' for action 'connect'"),
                  ),
                  isError = true,
                )
              case (_, _, None) =>
                val rawRel = cursor.get[String]("relation").getOrElse("")
                CallToolResult(
                  List(
                    ToolContent(
                      text =
                        s"Invalid or missing 'relation': '$rawRel' (valid: relates_to, depends_on, blocks, supersedes, references)",
                    ),
                  ),
                  isError = true,
                )

          case "disconnect" =>
            val sourceIdOpt = cursor
              .get[String]("source_crystal_id")
              .toOption
              .orElse(cursor.get[String]("crystal_id").toOption)
            val targetIdOpt = cursor.get[String]("target_crystal_id").toOption
            val relationOpt = cursor
              .get[String]("relation")
              .toOption
              .flatMap(ccrystal.core.model.lattice.BondRelation.parse)

            (sourceIdOpt, targetIdOpt) match
              case (Some(sourceId), Some(targetId)) =>
                runCommandToResult(CliCommand.Disconnect(sourceId, targetId, relationOpt))
              case (None, _) =>
                CallToolResult(
                  List(
                    ToolContent(text = "Missing required 'source_crystal_id' (or 'crystal_id')"),
                  ),
                  isError = true,
                )
              case (_, None) =>
                CallToolResult(
                  List(
                    ToolContent(
                      text = "Missing required 'target_crystal_id' for action 'disconnect'",
                    ),
                  ),
                  isError = true,
                )

          case "list" | "connections" =>
            val crystalIdOpt = cursor
              .get[String]("crystal_id")
              .toOption
              .orElse(cursor.get[String]("source_crystal_id").toOption)
            val jsonOutput = cursor.get[Boolean]("json_output").getOrElse(false)

            crystalIdOpt match
              case Some(crystalId) =>
                runCommandToResult(CliCommand.Connections(crystalId, jsonOutput = jsonOutput))
              case None =>
                CallToolResult(
                  List(ToolContent(text = "Missing required 'crystal_id' for action 'list'")),
                  isError = true,
                )

          case other =>
            CallToolResult(
              List(
                ToolContent(
                  text =
                    s"Unknown action '$other' for crystal_connect (valid: connect, disconnect, list)",
                ),
              ),
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
          Resource(
            uri = s"ccrystal://${c.id}/bonds",
            name = s"Lattice bonds for ${c.id}",
            description = Some("Lattice bonds and inbound/outbound topology JSON"),
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
            else if uri.startsWith("ccrystal://") && uri.endsWith("/bonds") then
              val crystalId = uri.stripPrefix("ccrystal://").stripSuffix("/bonds")
              store.bonds(crystalId).map { summary =>
                ReadResourceResult(
                  List(
                    ResourceContents(
                      uri = uri,
                      mimeType = Some("application/json"),
                      text = summary.asJson.spaces2,
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
                    "3. DO NOT prune any crystal without explicit user confirmation. When the user approves pruning, use `crystal_prune` (or `ccrystal prune <id> --force`).\n",
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
