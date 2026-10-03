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

      receipt.skillReceipt.foreach { s =>
        val symlinkTag = if s.isSymlink then " (symlink)" else ""
        s.action match
          case InstallActionKind.Installed =>
            sb.append(s"       Skill:   [INSTALLED]$symlinkTag ${s.targetPath}\n")
          case InstallActionKind.Updated =>
            sb.append(s"       Skill:   [UPDATED]$symlinkTag ${s.targetPath}\n")
            s.backupPath.foreach { bak =>
              sb.append(s"         Backup created: $bak\n")
            }
          case InstallActionKind.Unchanged =>
            sb.append(s"       Skill:   [UNCHANGED]$symlinkTag ${s.targetPath}\n")
          case InstallActionKind.SkippedNotInstalled =>
            sb.append("       Skill:   [SKIPPED] Harness not installed or skill not supported\n")
          case InstallActionKind.Failed(reason) =>
            sb.append(s"       Skill:   [FAILED] $reason (${s.targetPath})\n")
      }
    }

    summary.workspaceSkillReceipt.foreach { ws =>
      val wsPadded = "Workspace Skill".padTo(20, ' ')
      ws.action match
        case InstallActionKind.Installed =>
          sb.append(s"  - $wsPadded [INSTALLED] ${ws.targetPath}\n")
        case InstallActionKind.Updated =>
          sb.append(s"  - $wsPadded [UPDATED] ${ws.targetPath}\n")
          ws.backupPath.foreach { bak =>
            sb.append(s"       Backup created: $bak\n")
          }
        case InstallActionKind.Unchanged =>
          sb.append(s"  - $wsPadded [UNCHANGED] ${ws.targetPath}\n")
        case InstallActionKind.SkippedNotInstalled =>
          sb.append(s"  - $wsPadded [SKIPPED]\n")
        case InstallActionKind.Failed(reason) =>
          sb.append(s"  - $wsPadded [FAILED] $reason (${ws.targetPath})\n")
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
