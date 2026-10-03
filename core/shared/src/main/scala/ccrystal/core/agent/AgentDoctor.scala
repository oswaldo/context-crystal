package ccrystal.core.agent

import io.circe.*
import io.circe.generic.semiauto.*
import io.circe.parser.*
import io.circe.syntax.*

trait FileSystemInspector:
  def fileExists(path: String): Boolean
  def directoryExists(path: String): Boolean
  def isWritable(path: String): Boolean
  def isExecutable(path: String): Boolean
  def readFile(path: String): Option[String]
  def findInPath(binaryName: String): Option[String]
  def isSymlink(path: String): Boolean = false

enum HarnessStatus derives CanEqual:
  case Configured
  case MissingConfig
  case NotInstalled
  case Corrupted

object HarnessStatus:
  given Encoder[HarnessStatus] = Encoder.encodeString.contramap(_.toString)
  given Decoder[HarnessStatus] = Decoder.decodeString.emap {
    case "Configured"    => Right(HarnessStatus.Configured)
    case "MissingConfig" => Right(HarnessStatus.MissingConfig)
    case "NotInstalled"  => Right(HarnessStatus.NotInstalled)
    case "Corrupted"     => Right(HarnessStatus.Corrupted)
    case other           => Left(s"Unknown HarnessStatus: $other")
  }

enum SkillStatus derives CanEqual:
  case Equipped
  case Missing
  case NotSupported

object SkillStatus:
  given Encoder[SkillStatus] = Encoder.encodeString.contramap(_.toString)
  given Decoder[SkillStatus] = Decoder.decodeString.emap {
    case "Equipped"     => Right(SkillStatus.Equipped)
    case "Missing"      => Right(SkillStatus.Missing)
    case "NotSupported" => Right(SkillStatus.NotSupported)
    case other          => Left(s"Unknown SkillStatus: $other")
  }

case class BinaryStatus(
    inPath: Boolean,
    resolvedPath: Option[String],
    executable: Boolean,
) derives CanEqual

object BinaryStatus:
  given Encoder[BinaryStatus] = deriveEncoder
  given Decoder[BinaryStatus] = deriveDecoder

case class StoreStatus(
    storePath: String,
    exists: Boolean,
    writable: Boolean,
) derives CanEqual

object StoreStatus:
  given Encoder[StoreStatus] = deriveEncoder
  given Decoder[StoreStatus] = deriveDecoder

case class HarnessDiagnosis(
    harness: AgentHarness,
    configPath: String,
    status: HarnessStatus,
    details: Option[String],
    skillStatus: SkillStatus = SkillStatus.NotSupported,
    skillPath: Option[String] = None,
) derives CanEqual:
  def mcpStatus: HarnessStatus = status

object HarnessDiagnosis:
  given Encoder[AgentHarness] = Encoder.encodeString.contramap(_.id)
  given Decoder[AgentHarness] = Decoder.decodeString.emap { id =>
    AgentHarness.fromString(id).toRight(s"Unknown AgentHarness id: $id")
  }

  given Encoder[HarnessDiagnosis] = deriveEncoder
  given Decoder[HarnessDiagnosis] = deriveDecoder

case class DoctorReport(
    binary: BinaryStatus,
    store: StoreStatus,
    harnesses: List[HarnessDiagnosis],
) derives CanEqual:
  def allHealthy: Boolean =
    binary.inPath && binary.executable && store.writable

object DoctorReport:
  given Encoder[DoctorReport] = deriveEncoder
  given Decoder[DoctorReport] = deriveDecoder

class AgentDoctor(
    inspector: FileSystemInspector,
    resolver: HarnessPathResolver,
):

  def diagnose(storePath: String): DoctorReport =
    val binLookup = inspector.findInPath("ccrystal")
    val isExec    = binLookup.exists(inspector.isExecutable)
    val binStatus = BinaryStatus(
      inPath = binLookup.isDefined,
      resolvedPath = binLookup,
      executable = isExec,
    )

    val storeExists   = inspector.directoryExists(storePath) || inspector.fileExists(storePath)
    val storeWritable = if storeExists then inspector.isWritable(storePath) else false
    val storeStatus   = StoreStatus(storePath, storeExists, storeWritable)

    val diagnoses = AgentHarness.all.map(diagnoseHarness)

    DoctorReport(binStatus, storeStatus, diagnoses)

  private def diagnoseHarness(harness: AgentHarness): HarnessDiagnosis =
    val path       = resolver.configPath(harness)
    val maybeSkill = resolver.skillPath(harness)
    val (skillStatus, skillPath) = maybeSkill match
      case Some(sp) =>
        if inspector.fileExists(sp) then (SkillStatus.Equipped, Some(sp))
        else (SkillStatus.Missing, Some(sp))
      case None =>
        (SkillStatus.NotSupported, None)

    val baseDiag = harness match
      case AgentHarness.GoogleAntigravity =>
        if inspector.directoryExists(path) then
          HarnessDiagnosis(harness, path, HarnessStatus.Configured, None)
        else
          val parent = parentDir(path)
          if inspector.directoryExists(parent) then
            HarnessDiagnosis(
              harness,
              path,
              HarnessStatus.MissingConfig,
              Some("MCP tool directory absent"),
            )
          else HarnessDiagnosis(harness, path, HarnessStatus.NotInstalled, None)

      case AgentHarness.Zed =>
        inspectJsonConfig(harness, path, "context_servers")

      case _ =>
        inspectJsonConfig(harness, path, "mcpServers")

    baseDiag.copy(skillStatus = skillStatus, skillPath = skillPath)

  private def inspectJsonConfig(
      harness: AgentHarness,
      path: String,
      serverSectionKey: String,
  ): HarnessDiagnosis =
    if inspector.fileExists(path) then
      inspector.readFile(path) match
        case None =>
          HarnessDiagnosis(harness, path, HarnessStatus.Corrupted, Some("Unable to read file"))
        case Some(content) =>
          parse(HarnessConfigPatcher.stripJsonComments(content)) match
            case Left(err) =>
              HarnessDiagnosis(harness, path, HarnessStatus.Corrupted, Some(err.message))
            case Right(json) =>
              val hasCc = json.hcursor
                .downField(serverSectionKey)
                .downField("context-crystal")
                .succeeded
              if hasCc then HarnessDiagnosis(harness, path, HarnessStatus.Configured, None)
              else
                HarnessDiagnosis(
                  harness,
                  path,
                  HarnessStatus.MissingConfig,
                  Some(s"Key '$serverSectionKey.context-crystal' missing"),
                )
    else
      val parent = parentDir(path)
      if inspector.directoryExists(parent) then
        HarnessDiagnosis(
          harness,
          path,
          HarnessStatus.MissingConfig,
          Some("Config file does not exist"),
        )
      else HarnessDiagnosis(harness, path, HarnessStatus.NotInstalled, None)

  private def parentDir(path: String): String =
    val lastSlash = path.lastIndexOf('/')
    if lastSlash > 0 then path.substring(0, lastSlash)
    else "."
