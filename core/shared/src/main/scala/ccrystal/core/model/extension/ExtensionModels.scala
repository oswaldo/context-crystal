package ccrystal.core.model.extension

import scala.CanEqual

enum ExtensionSubstrate derives CanEqual:
  case Embedded
  case Declarative

enum ExtensionScope derives CanEqual:
  case Host
  case Cave
  case Crystal

case class ExtensionManifest(
    id: String,
    name: String,
    version: String,
    substrate: ExtensionSubstrate,
    scope: ExtensionScope,
    enabled: Boolean,
    description: Option[String] = None,
    schemaUri: Option[String] = None,
    entrypoint: Option[String] = None,
    skill: Option[String] = None,
    metadata: Map[String, String] = Map.empty,
) derives CanEqual

trait ExtensionModule:
  def id: String
  def name: String
  def defaultManifest: ExtensionManifest

object BuiltInExtensions:
  val commsSkillMarkdown: String =
    """# Context Crystal Comms (Multi-Entity Coordination)
      |
      |The `comms` extension provides atomic, lock-free filesystem mailboxes and communication channels within Context Crystal caves and crystal boundaries.
      |
      |## 1. Concepts & Architecture
      |- **Mailbox Directory Structure**: Located under `.ccrystals/<crystal-id>/extensions/comms/`:
      |  - `inboxes/<recipient>/`: Incoming messages delivered to specific entities or groups.
      |  - `outbox/<sender>/`: Audit log of sent messages by sender entity ID.
      |- **Addressing Modes**:
      |  - Individual Entities: Standard registered entities (`usr_*` for humans, `agt_*` for agents).
      |  - Entity Groups: Named groups (`grp_*`, e.g. `grp_team`, `grp_reviewers`).
      |  - Channel Broadcast: `@all` (delivers to all registered entities in cave), `@channel` (delivers to channel recipients).
      |- **Channels**: Categorical topics (default: `general` or `default`).
      |- **Causal DAG Reflection**: Passing `--record-dag` (CLI) or `"record_dag": true` (MCP) automatically appends a corresponding DAG node to the active crystal:
      |  - Human senders (`usr_*`) produce `human_prompt` nodes.
      |  - Agent senders (`agt_*`) produce `agent_reasoning` nodes.
      |  - Groups/Other senders produce `checkpoint` nodes.
      |  - Metadata records `comms_message_id`, `comms_channel`, `comms_sender`, and `comms_recipients`.
      |
      |## 2. CLI Usage
      |```bash
      |# Send message to an agent
      |ccrystal ext comms send <crystal-id> --from usr_oswaldo --to agt_alice -s "Review" -b "Please check PR"
      |
      |# Send message with causal DAG reflection
      |ccrystal ext comms send <crystal-id> --from usr_oswaldo --to agt_alice -s "Decision" -b "Architecture approved" --record-dag
      |
      |# Inspect recipient inbox
      |ccrystal ext comms list <crystal-id> --inbox agt_alice
      |
      |# Inspect sender outbox audit trail
      |ccrystal ext comms list <crystal-id> --outbox usr_oswaldo --limit 20
      |```
      |
      |## 3. MCP Usage
      |Use `crystal_extension_comms`:
      |```json
      |{
      |  "action": "send",
      |  "crystal_id": "<crystal-id>",
      |  "from": "usr_oswaldo",
      |  "to": ["agt_alice"],
      |  "subject": "Mission Update",
      |  "body": "Implementation complete",
      |  "record_dag": true
      |}
      |```
      |Or via universal dynamic dispatch `crystal_extension_call`:
      |```json
      |{
      |  "extension_id": "comms",
      |  "crystal_id": "<crystal-id>",
      |  "action": "send",
      |  "payload": {
      |    "from": "usr_oswaldo",
      |    "to": ["agt_alice"],
      |    "subject": "Mission Update",
      |    "body": "Implementation complete",
      |    "record_dag": true
      |  }
      |}
      |```
      |""".stripMargin

  val comms: ExtensionManifest = ExtensionManifest(
    id = "comms",
    name = "Crystal Comms",
    version = "1.0.0",
    substrate = ExtensionSubstrate.Embedded,
    scope = ExtensionScope.Cave,
    enabled = true,
    description = Some("Lock-free filesystem inboxes and multi-agent coordination"),
    schemaUri = None,
    entrypoint = None,
    skill = Some("embedded"),
    metadata = Map.empty,
  )

  val all: List[ExtensionManifest] = List(comms)
