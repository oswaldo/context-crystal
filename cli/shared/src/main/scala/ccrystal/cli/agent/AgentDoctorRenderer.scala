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
    sb.append(
      s"  ${"Harness".padTo(20, ' ')} ${"MCP Server".padTo(18, ' ')} ${"Agent Skill".padTo(16, ' ')} Config Path\n",
    )
    sb.append(s"  ${"-" * 20} ${"-" * 18} ${"-" * 16} ${"-" * 20}\n")
    report.harnesses.foreach { diag =>
      val mcpBadge = diag.status match
        case HarnessStatus.Configured    => "[OK] Configured"
        case HarnessStatus.MissingConfig => "[MISSING]"
        case HarnessStatus.NotInstalled  => "[NOT INSTALLED]"
        case HarnessStatus.Corrupted     => "[CORRUPTED]"

      val skillBadge = diag.skillStatus match
        case SkillStatus.Equipped     => "[OK] Equipped"
        case SkillStatus.Outdated     => "[OUTDATED]"
        case SkillStatus.Missing      => "[MISSING]"
        case SkillStatus.NotSupported => "[N/A]"

      val namePadded  = diag.harness.displayName.padTo(20, ' ')
      val mcpPadded   = mcpBadge.padTo(18, ' ')
      val skillPadded = skillBadge.padTo(16, ' ')
      sb.append(s"  $namePadded $mcpPadded $skillPadded (${diag.configPath})\n")

      diag.details.foreach { d =>
        if verbose || diag.status != HarnessStatus.Configured then sb.append(s"     - Note: $d\n")
      }
      diag.skillPath.foreach { sp =>
        if verbose && diag.skillStatus != SkillStatus.NotSupported then
          sb.append(s"     - Skill Target: $sp\n")
      }
    }

    val configuredCount = report.harnesses.count(_.status == HarnessStatus.Configured)
    val missingCount    = report.harnesses.count(_.status == HarnessStatus.MissingConfig)
    val notInstCount    = report.harnesses.count(_.status == HarnessStatus.NotInstalled)
    val corruptedCount  = report.harnesses.count(_.status == HarnessStatus.Corrupted)
    val skillsMissing = report.harnesses.count(d =>
      d.status == HarnessStatus.Configured && d.skillStatus == SkillStatus.Missing,
    )
    val skillsOutdated = report.harnesses.count(d =>
      d.status == HarnessStatus.Configured && d.skillStatus == SkillStatus.Outdated,
    )

    sb.append("\n")
    sb.append(
      s"Summary: $configuredCount configured, $missingCount missing configuration, $notInstCount not installed",
    )
    if corruptedCount > 0 then sb.append(s", $corruptedCount corrupted")
    sb.append(".\n")

    if skillsOutdated > 0 then
      sb.append(
        "Tip: Detected harnesses have outdated skill files. Run 'ccrystal agent install' to synchronize skills with the current version.\n",
      )
    else if skillsMissing > 0 then
      sb.append(
        "Tip: Detected harnesses have MCP tools configured but lack the agent skill. Run 'ccrystal agent install' to equip cognitive reflexes.\n",
      )
    else if missingCount > 0 then
      sb.append("Tip: Run 'ccrystal agent install' to safely auto-configure detected harnesses.\n")

    sb.append(
      "Tip: Run 'ccrystal agent install' to safely auto-configure detected harnesses and deploy skills.\n",
    )

    sb.toString
