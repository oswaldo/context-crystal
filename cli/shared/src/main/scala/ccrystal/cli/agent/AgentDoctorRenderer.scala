package ccrystal.cli.agent

import ccrystal.core.agent.*
import io.circe.syntax.*

object AgentDoctorRenderer:

  def renderJson(report: DoctorReport): String =
    report.asJson.spaces2

  def renderText(report: DoctorReport, verbose: Boolean): String =
    val sb = new java.lang.StringBuilder()

    sb.append("============================================================\n")
    sb.append("              Context Crystal: Agent Doctor                 \n")
    sb.append("============================================================\n\n")

    sb.append("[Environment & Store]\n")
    val binBadge = if report.binary.inPath && report.binary.executable then "[OK]" else "[MISSING]"
    val binDetail = report.binary.resolvedPath match
      case Some(path) => s"$path (executable: ${report.binary.executable})"
      case None       => "Not found in $PATH"
    sb.append(s"  Binary in PATH:   $binBadge $binDetail\n")

    val storeBadge =
      if report.store.exists && report.store.writable then "[OK]"
      else if report.store.exists then "[WARN]"
      else "[MISSING]"
    val storeDetail =
      s"${report.store.storePath} (exists: ${report.store.exists}, writable: ${report.store.writable})"
    sb.append(s"  Cave Store:       $storeBadge $storeDetail\n\n")

    sb.append("[Agent Harness Matrix]\n")
    report.harnesses.foreach { diag =>
      val badge = diag.status match
        case HarnessStatus.Configured    => "[OK]"
        case HarnessStatus.MissingConfig => "[MISSING]"
        case HarnessStatus.NotInstalled  => "[NOT INSTALLED]"
        case HarnessStatus.Corrupted     => "[CORRUPTED]"

      val statusName = diag.status match
        case HarnessStatus.Configured    => "Configured"
        case HarnessStatus.MissingConfig => "MissingConfig"
        case HarnessStatus.NotInstalled  => "NotInstalled"
        case HarnessStatus.Corrupted     => "Corrupted"

      val namePadded = diag.harness.displayName.padTo(20, ' ')
      sb.append(s"  $namePadded $badge $statusName (${diag.configPath})\n")

      diag.details.foreach { d =>
        if verbose || diag.status != HarnessStatus.Configured then sb.append(s"     - Note: $d\n")
      }
    }

    val configuredCount = report.harnesses.count(_.status == HarnessStatus.Configured)
    val missingCount    = report.harnesses.count(_.status == HarnessStatus.MissingConfig)
    val notInstCount    = report.harnesses.count(_.status == HarnessStatus.NotInstalled)
    val corruptedCount  = report.harnesses.count(_.status == HarnessStatus.Corrupted)

    sb.append("\n")
    sb.append(
      s"Summary: $configuredCount configured, $missingCount missing configuration, $notInstCount not installed",
    )
    if corruptedCount > 0 then sb.append(s", $corruptedCount corrupted")
    sb.append(".\n")

    if missingCount > 0 then
      sb.append("Tip: Run 'ccrystal agent install' to safely auto-configure detected harnesses.\n")

    sb.toString
