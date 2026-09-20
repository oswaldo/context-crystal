package ccrystal.cli.agent

import ccrystal.core.agent.*

object AgentInstallerRenderer:

  def renderText(summary: InstallSummary): String =
    val sb = new java.lang.StringBuilder()

    val modeStr =
      if summary.dryRun then "Dry-Run Simulation (No disk changes made)" else "Live Execution"

    sb.append("============================================================\n")
    sb.append("                 Context Crystal: Agent Install             \n")
    sb.append("============================================================\n")
    sb.append(s"Mode: $modeStr\n\n")

    sb.append("[Actions]\n")
    summary.receipts.foreach { receipt =>
      val namePadded = receipt.harness.displayName.padTo(20, ' ')
      receipt.action match
        case InstallActionKind.Installed =>
          sb.append(s"  - $namePadded [INSTALLED] ${receipt.configPath}\n")
        case InstallActionKind.Updated =>
          sb.append(s"  - $namePadded [UPDATED] ${receipt.configPath}\n")
          receipt.backupPath.foreach { bak =>
            sb.append(s"       Backup created: $bak\n")
          }
          receipt.rollbackInstruction.foreach { inst =>
            sb.append(s"       $inst\n")
          }
        case InstallActionKind.Unchanged =>
          sb.append(s"  - $namePadded [UNCHANGED] ${receipt.configPath}\n")
        case InstallActionKind.SkippedNotInstalled =>
          sb.append(s"  - $namePadded [SKIPPED] Harness not installed\n")
        case InstallActionKind.Failed(reason) =>
          sb.append(s"  - $namePadded [FAILED] $reason (${receipt.configPath})\n")
    }

    val installedCount = summary.receipts.count(_.action == InstallActionKind.Installed)
    val updatedCount   = summary.receipts.count(_.action == InstallActionKind.Updated)
    val unchangedCount = summary.receipts.count(_.action == InstallActionKind.Unchanged)
    val skippedCount   = summary.receipts.count(_.action == InstallActionKind.SkippedNotInstalled)
    val failedCount = summary.receipts.count { r =>
      r.action match
        case InstallActionKind.Failed(_) => true
        case _                           => false
    }

    sb.append("\n")
    val summaryParts = List(
      if installedCount > 0 then Some(s"$installedCount installed") else None,
      if updatedCount > 0 then Some(s"$updatedCount updated") else None,
      if unchangedCount > 0 then Some(s"$unchangedCount unchanged") else None,
      if skippedCount > 0 then Some(s"$skippedCount skipped") else None,
      if failedCount > 0 then Some(s"$failedCount failed") else None,
    ).flatten

    val summaryLine =
      if summaryParts.isEmpty then "No harnesses evaluated." else summaryParts.mkString(", ") + "."
    sb.append(s"Summary: $summaryLine\n")

    sb.toString
