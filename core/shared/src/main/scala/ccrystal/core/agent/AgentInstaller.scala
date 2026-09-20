package ccrystal.core.agent

trait FileSystemOperator extends FileSystemInspector:
  def createDirectories(path: String): Either[String, Unit]
  def writeFile(path: String, content: String): Either[String, Unit]
  def copyFile(source: String, destination: String): Either[String, Unit]
  def atomicWrite(path: String, content: String): Either[String, Unit]

enum InstallActionKind derives CanEqual:
  case Installed
  case Updated
  case Unchanged
  case SkippedNotInstalled
  case Failed(reason: String)

case class HarnessInstallReceipt(
    harness: AgentHarness,
    configPath: String,
    action: InstallActionKind,
    backupPath: Option[String],
    rollbackInstruction: Option[String],
) derives CanEqual

case class InstallSummary(
    receipts: List[HarnessInstallReceipt],
    dryRun: Boolean,
) derives CanEqual:
  def modifiedCount: Int = receipts.count(r =>
    r.action match
      case InstallActionKind.Installed => true
      case InstallActionKind.Updated   => true
      case _                           => false,
  )

class AgentInstaller(
    operator: FileSystemOperator,
    resolver: HarnessPathResolver,
):

  def install(
      doctorReport: DoctorReport,
      target: Option[AgentHarness],
      dryRun: Boolean,
      force: Boolean,
  ): InstallSummary =
    val targets = target match
      case Some(t) => doctorReport.harnesses.filter(_.harness == t)
      case None    => doctorReport.harnesses

    val receipts = targets.map { diag =>
      installSingle(diag, dryRun, force)
    }

    InstallSummary(receipts, dryRun)

  private def installSingle(
      diag: HarnessDiagnosis,
      dryRun: Boolean,
      force: Boolean,
  ): HarnessInstallReceipt =
    val harness = diag.harness
    val path    = diag.configPath

    if diag.status == HarnessStatus.NotInstalled && !force then
      HarnessInstallReceipt(harness, path, InstallActionKind.SkippedNotInstalled, None, None)
    else
      harness match
        case AgentHarness.GoogleAntigravity =>
          if dryRun then
            HarnessInstallReceipt(harness, path, InstallActionKind.Installed, None, None)
          else
            operator.createDirectories(path) match
              case Left(err) =>
                HarnessInstallReceipt(harness, path, InstallActionKind.Failed(err), None, None)
              case Right(_) =>
                HarnessInstallReceipt(harness, path, InstallActionKind.Installed, None, None)

        case _ =>
          val existing    = operator.readFile(path).getOrElse("")
          val fileExisted = operator.fileExists(path)

          HarnessConfigPatcher.patchJson(existing, harness, force) match
            case Left(err) =>
              val reason = err match
                case PatchError.MalformedJson(msg)       => s"Malformed JSON: $msg"
                case PatchError.InvalidRoot(msg)         => s"Invalid root: $msg"
                case PatchError.UnsupportedHarness(harn) => s"Unsupported harness: ${harn.id}"
              HarnessInstallReceipt(harness, path, InstallActionKind.Failed(reason), None, None)

            case Right(patch) =>
              if !patch.modified then
                HarnessInstallReceipt(harness, path, InstallActionKind.Unchanged, None, None)
              else
                val bakPath =
                  if fileExisted && patch.backupSuggested then
                    Some(HarnessConfigPatcher.backupPath(path))
                  else None
                val rollback = bakPath.map(b => HarnessConfigPatcher.rollbackInstruction(path, b))
                val actionKind =
                  if fileExisted then InstallActionKind.Updated else InstallActionKind.Installed

                if dryRun then HarnessInstallReceipt(harness, path, actionKind, bakPath, rollback)
                else
                  val parent = parentDir(path)
                  val res = for
                    _ <- operator.createDirectories(parent)
                    _ <- bakPath match
                      case Some(b) => operator.copyFile(path, b)
                      case None    => Right(())
                    _ <- operator.atomicWrite(path, patch.patchedContent)
                  yield ()

                  res match
                    case Left(err) =>
                      HarnessInstallReceipt(
                        harness,
                        path,
                        InstallActionKind.Failed(err),
                        None,
                        None,
                      )
                    case Right(_) =>
                      HarnessInstallReceipt(harness, path, actionKind, bakPath, rollback)

  private def parentDir(path: String): String =
    val lastSlash = path.lastIndexOf('/')
    if lastSlash > 0 then path.substring(0, lastSlash)
    else "."
