package ccrystal.core.agent

import io.circe.*
import io.circe.parser.*
import io.circe.syntax.*

enum PatchError derives CanEqual:
  case MalformedJson(details: String)
  case InvalidRoot(details: String)
  case UnsupportedHarness(harness: AgentHarness)

case class PatchResult(
    patchedContent: String,
    modified: Boolean,
    backupSuggested: Boolean,
) derives CanEqual

object HarnessConfigPatcher:

  val canonicalServerJson: Json = Json.obj(
    "command" -> "ccrystal".asJson,
    "args"    -> List("mcp").asJson,
  )

  private val printer: Printer = Printer.spaces2.copy(dropNullValues = false)

  def backupPath(originalPath: String): String =
    s"$originalPath.ccrystal.bak"

  def rollbackInstruction(originalPath: String, backupPath: String): String =
    s"To revert: mv '$backupPath' '$originalPath'"

  def stripJsonComments(content: String): String =
    content.linesIterator
      .map { line =>
        val trimmed = line.trim
        if trimmed.startsWith("//") then ""
        else line
      }
      .mkString("\n")

  def patchJson(
      existingContent: String,
      harness: AgentHarness,
      force: Boolean = false,
  ): Either[PatchError, PatchResult] =
    val trimmed = existingContent.trim
    if trimmed.isEmpty then
      val newJson = harness match
        case AgentHarness.Zed =>
          Json.obj(
            "context_servers" -> Json.obj(
              "context-crystal" -> canonicalServerJson,
            ),
          )
        case _ =>
          Json.obj(
            "mcpServers" -> Json.obj(
              "context-crystal" -> canonicalServerJson,
            ),
          )
      Right(PatchResult(printer.print(newJson), modified = true, backupSuggested = false))
    else
      val sanitized = stripJsonComments(trimmed)
      parse(sanitized) match
        case Left(parsingFailure) =>
          Left(PatchError.MalformedJson(parsingFailure.message))
        case Right(json) =>
          json.asObject match
            case None =>
              Left(PatchError.InvalidRoot("Root JSON value must be an object"))
            case Some(rootObj) =>
              harness match
                case AgentHarness.GoogleAntigravity =>
                  Left(PatchError.UnsupportedHarness(harness))
                case AgentHarness.Zed =>
                  patchZed(rootObj, trimmed, force)
                case _ =>
                  patchStandardMcp(rootObj, trimmed, force)

  private def patchStandardMcp(
      rootObj: JsonObject,
      originalContent: String,
      force: Boolean,
  ): Either[PatchError, PatchResult] =
    val serversObj = rootObj("mcpServers").flatMap(_.asObject).getOrElse(JsonObject.empty)
    val existingCc = serversObj("context-crystal")

    val isAlreadyMatching = existingCc.contains(canonicalServerJson)

    if !force && isAlreadyMatching then
      Right(PatchResult(originalContent, modified = false, backupSuggested = false))
    else
      val updatedServers = serversObj.add("context-crystal", canonicalServerJson)
      val updatedRoot    = rootObj.add("mcpServers", Json.fromJsonObject(updatedServers))
      Right(
        PatchResult(
          printer.print(Json.fromJsonObject(updatedRoot)),
          modified = true,
          backupSuggested = true,
        ),
      )

  private def patchZed(
      rootObj: JsonObject,
      originalContent: String,
      force: Boolean,
  ): Either[PatchError, PatchResult] =
    val serversObj = rootObj("context_servers").flatMap(_.asObject).getOrElse(JsonObject.empty)
    val existingCc = serversObj("context-crystal")

    val isAlreadyMatching = existingCc.contains(canonicalServerJson)

    if !force && isAlreadyMatching then
      Right(PatchResult(originalContent, modified = false, backupSuggested = false))
    else
      val updatedServers = serversObj.add("context-crystal", canonicalServerJson)
      val updatedRoot    = rootObj.add("context_servers", Json.fromJsonObject(updatedServers))
      Right(
        PatchResult(
          printer.print(Json.fromJsonObject(updatedRoot)),
          modified = true,
          backupSuggested = true,
        ),
      )
