package ccrystal.core.agent

enum AgentHarness(val id: String, val displayName: String) derives CanEqual:
  case GoogleAntigravity extends AgentHarness("antigravity", "Google Antigravity")
  case ClaudeCode        extends AgentHarness("claude-code", "Claude Code")
  case ClaudeDesktop     extends AgentHarness("claude-desktop", "Claude Desktop")
  case Cursor            extends AgentHarness("cursor", "Cursor")
  case Windsurf          extends AgentHarness("windsurf", "Windsurf")
  case Zed               extends AgentHarness("zed", "Zed")

object AgentHarness:
  val all: List[AgentHarness] = List(
    GoogleAntigravity,
    ClaudeCode,
    ClaudeDesktop,
    Cursor,
    Windsurf,
    Zed,
  )

  def fromString(id: String): Option[AgentHarness] =
    all.find(_.id == id)

enum OsFamily derives CanEqual:
  case Linux
  case MacOS
  case Windows
  case Unknown

object OsFamily:
  def detect(osName: String): OsFamily =
    val lower = osName.toLowerCase
    if lower.contains("linux") then OsFamily.Linux
    else if lower.contains("mac") || lower.contains("darwin") then OsFamily.MacOS
    else if lower.contains("win") then OsFamily.Windows
    else OsFamily.Unknown

  def current: OsFamily =
    detect(sys.props.getOrElse("os.name", ""))

enum HarnessConfigType derives CanEqual:
  case StandardMcp
  case ZedSettings
  case DirectoryManifest

case class HarnessPathResolver(env: Map[String, String], os: OsFamily) derives CanEqual:
  private val home: String =
    env.getOrElse("HOME", env.getOrElse("USERPROFILE", "."))

  def configPath(harness: AgentHarness): String =
    harness match
      case AgentHarness.GoogleAntigravity =>
        s"$home/.gemini/antigravity-cli/mcp/context-crystal"
      case AgentHarness.ClaudeCode =>
        s"$home/.claude.json"
      case AgentHarness.ClaudeDesktop =>
        os match
          case OsFamily.MacOS =>
            s"$home/Library/Application Support/Claude/claude_desktop_config.json"
          case OsFamily.Windows =>
            val appData = env.getOrElse("APPDATA", s"$home\\AppData\\Roaming")
            s"$appData\\Claude\\claude_desktop_config.json"
          case _ =>
            s"$home/.config/Claude/claude_desktop_config.json"
      case AgentHarness.Cursor =>
        s"$home/.cursor/mcp.json"
      case AgentHarness.Windsurf =>
        s"$home/.codeium/windsurf/mcp_config.json"
      case AgentHarness.Zed =>
        os match
          case OsFamily.Windows =>
            val appData = env.getOrElse("APPDATA", s"$home\\AppData\\Roaming")
            s"$appData\\Zed\\settings.json"
          case _ =>
            s"$home/.config/zed/settings.json"

  def harnessConfigType(harness: AgentHarness): HarnessConfigType =
    harness match
      case AgentHarness.GoogleAntigravity => HarnessConfigType.DirectoryManifest
      case AgentHarness.Zed               => HarnessConfigType.ZedSettings
      case _                              => HarnessConfigType.StandardMcp

object HarnessPathResolver:
  def default: HarnessPathResolver =
    HarnessPathResolver(sys.env, OsFamily.current)
