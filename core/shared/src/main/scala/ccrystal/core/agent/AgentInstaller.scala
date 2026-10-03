package ccrystal.core.agent

import ccrystal.core.store.ContentFingerprint

trait FileSystemOperator extends FileSystemInspector:
  def createDirectories(path: String): Either[String, Unit]
  def writeFile(path: String, content: String): Either[String, Unit]
  def copyFile(source: String, destination: String): Either[String, Unit]
  def atomicWrite(path: String, content: String): Either[String, Unit]
  def createSymlink(source: String, destination: String): Either[String, Unit]

enum InstallActionKind derives CanEqual:
  case Installed
  case Updated
  case Unchanged
  case SkippedNotInstalled
  case Failed(reason: String)

case class SkillInstallReceipt(
    targetPath: String,
    action: InstallActionKind,
    isSymlink: Boolean = false,
    backupPath: Option[String] = None,
) derives CanEqual

case class HarnessInstallReceipt(
    harness: AgentHarness,
    configPath: String,
    action: InstallActionKind,
    backupPath: Option[String],
    rollbackInstruction: Option[String],
    skillReceipt: Option[SkillInstallReceipt] = None,
) derives CanEqual

case class InstallSummary(
    receipts: List[HarnessInstallReceipt],
    dryRun: Boolean,
    workspaceSkillReceipt: Option[SkillInstallReceipt] = None,
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
      installSkill: Boolean = true,
      symlinkSkill: Boolean = false,
      installWorkspaceSkill: Boolean = false,
  ): InstallSummary =
    val targets = target match
      case Some(t) => doctorReport.harnesses.filter(_.harness == t)
      case None    => doctorReport.harnesses

    val receipts = targets.map { diag =>
      val mcpReceipt = installSingle(diag, dryRun, force)
      mcpReceipt.action match
        case InstallActionKind.Failed(_) =>
          mcpReceipt
        case _ =>
          val skillReceipt =
            if !installSkill then None
            else installHarnessSkill(diag, dryRun, force, symlinkSkill)
          mcpReceipt.copy(skillReceipt = skillReceipt)
    }

    val workspaceReceipt =
      if installWorkspaceSkill then
        Some(
          deploySkill(resolver.workspaceSkillPath, dryRun, symlink = false, sourceForSymlink = None),
        )
      else None

    InstallSummary(receipts, dryRun, workspaceReceipt)

  private def installHarnessSkill(
      diag: HarnessDiagnosis,
      dryRun: Boolean,
      force: Boolean,
      symlinkSkill: Boolean,
  ): Option[SkillInstallReceipt] =
    val harness = diag.harness
    resolver.skillPath(harness).map { destPath =>
      if diag.status == HarnessStatus.NotInstalled && !force then
        SkillInstallReceipt(
          destPath,
          InstallActionKind.SkippedNotInstalled,
          isSymlink = symlinkSkill,
          backupPath = None,
        )
      else
        val source =
          if symlinkSkill then
            val wsPath = resolver.workspaceSkillPath
            if !dryRun && !operator.fileExists(wsPath) then
              val _ = operator.createDirectories(parentDir(wsPath))
              val _ = operator.atomicWrite(wsPath, CanonicalSkill.content)
            Some(wsPath)
          else None
        deploySkill(destPath, dryRun, symlink = symlinkSkill, sourceForSymlink = source)
    }

  private def deploySkill(
      destPath: String,
      dryRun: Boolean,
      symlink: Boolean,
      sourceForSymlink: Option[String],
  ): SkillInstallReceipt =
    if symlink then
      val sourcePath = sourceForSymlink.getOrElse(resolver.workspaceSkillPath)
      if operator
          .isSymlink(destPath) && operator.readFile(destPath).contains(CanonicalSkill.content)
      then SkillInstallReceipt(destPath, InstallActionKind.Unchanged, isSymlink = true)
      else if operator.fileExists(destPath) then
        val bak = HarnessConfigPatcher.backupPath(destPath)
        if dryRun then
          SkillInstallReceipt(
            destPath,
            InstallActionKind.Updated,
            isSymlink = true,
            backupPath = Some(bak),
          )
        else
          val res = for
            _ <- operator.copyFile(destPath, bak)
            _ <- operator.createSymlink(sourcePath, destPath)
          yield ()
          res match
            case Left(err) =>
              SkillInstallReceipt(destPath, InstallActionKind.Failed(err), isSymlink = true)
            case Right(_) =>
              SkillInstallReceipt(
                destPath,
                InstallActionKind.Updated,
                isSymlink = true,
                backupPath = Some(bak),
              )
      else if dryRun then
        SkillInstallReceipt(destPath, InstallActionKind.Installed, isSymlink = true)
      else
        val res = for
          _ <- operator.createDirectories(parentDir(destPath))
          _ <- operator.createSymlink(sourcePath, destPath)
        yield ()
        res match
          case Left(err) =>
            SkillInstallReceipt(destPath, InstallActionKind.Failed(err), isSymlink = true)
          case Right(_) =>
            SkillInstallReceipt(destPath, InstallActionKind.Installed, isSymlink = true)
    else
      operator.readFile(destPath) match
        case Some(content) if content == CanonicalSkill.content =>
          SkillInstallReceipt(destPath, InstallActionKind.Unchanged, isSymlink = false)
        case Some(_) =>
          val bak = HarnessConfigPatcher.backupPath(destPath)
          if dryRun then
            SkillInstallReceipt(
              destPath,
              InstallActionKind.Updated,
              isSymlink = false,
              backupPath = Some(bak),
            )
          else
            val res = for
              _ <- operator.copyFile(destPath, bak)
              _ <- operator.atomicWrite(destPath, CanonicalSkill.content)
            yield ()
            res match
              case Left(err) =>
                SkillInstallReceipt(destPath, InstallActionKind.Failed(err), isSymlink = false)
              case Right(_) =>
                SkillInstallReceipt(
                  destPath,
                  InstallActionKind.Updated,
                  isSymlink = false,
                  backupPath = Some(bak),
                )
        case None =>
          if dryRun then
            SkillInstallReceipt(destPath, InstallActionKind.Installed, isSymlink = false)
          else
            val res = for
              _ <- operator.createDirectories(parentDir(destPath))
              _ <- operator.atomicWrite(destPath, CanonicalSkill.content)
            yield ()
            res match
              case Left(err) =>
                SkillInstallReceipt(destPath, InstallActionKind.Failed(err), isSymlink = false)
              case Right(_) =>
                SkillInstallReceipt(destPath, InstallActionKind.Installed, isSymlink = false)

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
          val maybeExisting      = operator.readFile(path)
          val fileExisted        = maybeExisting.isDefined
          val existing           = maybeExisting.getOrElse("")
          val initialFingerprint = ContentFingerprint.compute(existing)

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
                  val currentExists = operator.fileExists(path)
                  val driftDetected =
                    if fileExisted then
                      !currentExists || {
                        val currentContent = operator.readFile(path).getOrElse("")
                        ContentFingerprint.compute(currentContent) != initialFingerprint
                      }
                    else currentExists

                  if driftDetected then
                    HarnessInstallReceipt(
                      harness,
                      path,
                      InstallActionKind.Failed(
                        s"Concurrent modification detected on $path; operation aborted to prevent overwriting external changes",
                      ),
                      None,
                      None,
                    )
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
