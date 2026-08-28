package ccrystal.core.store

import ccrystal.core.model.*
import ccrystal.core.codec.given
import io.circe.parser.decode
import io.circe.syntax.*
import java.nio.file.{Files, Path, Paths}
import java.nio.charset.StandardCharsets
import scala.jdk.CollectionConverters.*

class FsCrystalStore(val rootPath: Path) extends CrystalStore:

  def this(rootStr: String) = this(Paths.get(rootStr))

  override def exists(id: String): Boolean =
    Files.exists(crystalDir(id).resolve("crystal.json"))

  override def save(crystal: ContextCrystal): Either[String, Unit] =
    try
      val dir = crystalDir(crystal.id)
      Files.createDirectories(dir)
      Files.createDirectories(dir.resolve("artifacts"))

      // 1. Write crystal.json
      val jsonContent = crystal.asJson.spaces2
      Files.write(dir.resolve("crystal.json"), jsonContent.getBytes(StandardCharsets.UTF_8))

      // 2. Write tasks.md
      val tasksContent = generateTasksMarkdown(crystal)
      Files.write(dir.resolve("tasks.md"), tasksContent.getBytes(StandardCharsets.UTF_8))

      // 3. Write lessons-learned.md
      val lessonsContent = generateLessonsMarkdown(crystal)
      Files.write(dir.resolve("lessons-learned.md"), lessonsContent.getBytes(StandardCharsets.UTF_8))

      // 4. Write transient.json
      val transientContent = crystal.transientLeases.asJson.spaces2
      Files.write(dir.resolve("transient.json"), transientContent.getBytes(StandardCharsets.UTF_8))

      Right(())
    catch
      case ex: Throwable => Left(s"Failed to save crystal ${crystal.id}: ${ex.getMessage}")

  override def load(id: String): Either[String, ContextCrystal] =
    try
      val file = crystalDir(id).resolve("crystal.json")
      if !Files.exists(file) then
        Left(s"Crystal '$id' not found at $file")
      else
        val content = new String(Files.readAllBytes(file), StandardCharsets.UTF_8)
        decode[ContextCrystal](content).left.map(err => s"JSON parse error for '$id': ${err.getMessage}")
    catch
      case ex: Throwable => Left(s"Failed to load crystal '$id': ${ex.getMessage}")

  override def list(): Either[String, List[ContextCrystal]] =
    try
      if !Files.exists(rootPath) then
        Right(Nil)
      else
        val dirs = Files.list(rootPath).iterator().asScala
          .filter(Files.isDirectory(_))
          .toList

        val crystals = dirs.flatMap { dir =>
          val jsonFile = dir.resolve("crystal.json")
          if Files.exists(jsonFile) then
            val content = new String(Files.readAllBytes(jsonFile), StandardCharsets.UTF_8)
            decode[ContextCrystal](content).toOption
          else
            None
        }
        Right(crystals)
    catch
      case ex: Throwable => Left(s"Failed to list crystals in $rootPath: ${ex.getMessage}")

  private def crystalDir(id: String): Path =
    rootPath.resolve(id)

  private def generateTasksMarkdown(crystal: ContextCrystal): String =
    val sb = new java.lang.StringBuilder()
    sb.append(s"# Tasks: ${crystal.goal.title}\n\n")
    sb.append(s"**Status:** ${crystal.goal.status}\n\n")
    sb.append("## Acceptance Criteria / Tasks\n\n")
    if crystal.goal.acceptanceCriteria.isEmpty then
      sb.append("- No tasks specified\n")
    else
      crystal.goal.acceptanceCriteria.foreach { ac =>
        val check = if ac.completed then "x" else " "
        sb.append(s"- [$check] ${ac.description} `[${ac.id}]`\n")
      }
    sb.toString

  private def generateLessonsMarkdown(crystal: ContextCrystal): String =
    val sb = new java.lang.StringBuilder()
    sb.append(s"# Lessons Learned: ${crystal.goal.title}\n\n")
    if crystal.lessonsLearned.isEmpty then
      sb.append("No lessons recorded yet.\n")
    else
      crystal.lessonsLearned.foreach { l =>
        sb.append(s"### Lesson `[${l.id}]` - Status: ${l.status}\n")
        sb.append(s"- **Observed Friction:** ${l.observedFriction}\n")
        l.rootCause.foreach(rc => sb.append(s"- **Root Cause:** $rc\n"))
        l.recommendedAction.foreach(ra => sb.append(s"- **Recommended Action:** $ra\n"))
        if l.actionAuditTrail.nonEmpty then
          sb.append("- **Audit Trail:**\n")
          l.actionAuditTrail.foreach(at => sb.append(s"  - `${at.timestamp}` (${at.actorId}): ${at.action}\n"))
        sb.append("\n")
      }
    sb.toString
