package ccrystal.core.extension.comms

import ccrystal.core.model.EntityRegistry
import ccrystal.core.model.extension.comms.CommsMessage
import ccrystal.core.codec.extension.comms.given
import io.circe.parser.decode
import io.circe.syntax.*

class CommsEngine(
    val commsStateDir: os.Path,
    val entityRegistryProvider: () => Option[EntityRegistry] = () => None,
):

  val inboxDir: os.Path     = commsStateDir / "inbox"
  val outboxDir: os.Path    = commsStateDir / "outbox"
  val auditLogFile: os.Path = commsStateDir / "messages.jsonl"

  private def atomicWrite(target: os.Path, content: String): Unit =
    val parent = target / os.up
    if !os.exists(parent) then os.makeDir.all(parent)
    val tempFile =
      parent / s".${target.last}.tmp-${System.currentTimeMillis()}-${System.nanoTime()}"
    try
      os.write.over(tempFile, content, createFolders = true)
      try os.move(tempFile, target, replaceExisting = true, atomicMove = true)
      catch case _: Throwable => os.move(tempFile, target, replaceExisting = true)
    catch
      case ex: Throwable =>
        try os.remove(tempFile)
        catch case _: Throwable => ()
        throw ex

  def expandRecipients(targets: List[String]): Set[String] =
    val registryOpt = entityRegistryProvider()
    val groups      = registryOpt.map(_.groups).getOrElse(Map.empty)
    val allEntities = registryOpt.map(_.entities.keySet).getOrElse(Set.empty)

    targets.flatMap { target =>
      if target == "@all" || target == "@channel" then
        if allEntities.nonEmpty then allEntities else Set(target)
      else if target.startsWith("grp_") || groups.contains(target) then
        groups.get(target).map(_.memberIds.toSet).getOrElse(Set(target))
      else Set(target)
    }.toSet

  def sendMessage(msg: CommsMessage): Either[String, Unit] =
    try
      val expanded = expandRecipients(msg.recipientIds)

      // 1. Deliver to inbox/<recipient>/<id>.json for each resolved recipient
      expanded.foreach { recipientId =>
        val recipientInbox = inboxDir / recipientId / s"${msg.id}.json"
        atomicWrite(recipientInbox, msg.asJson.spaces2)
      }

      // 2. Stage in outbox/<senderId>/<id>.json
      val senderOutbox = outboxDir / msg.senderId / s"${msg.id}.json"
      atomicWrite(senderOutbox, msg.asJson.spaces2)

      // 3. Append to messages.jsonl
      if !os.exists(commsStateDir) then os.makeDir.all(commsStateDir)
      os.write.append(auditLogFile, msg.asJson.noSpaces + "\n", createFolders = true)

      Right(())
    catch case ex: Throwable => Left(s"Failed to send comms message: ${ex.getMessage}")

  def listInbox(recipientId: String): Either[String, List[CommsMessage]] =
    try
      val userInbox = inboxDir / recipientId
      if !os.exists(userInbox) || !os.isDir(userInbox) then Right(Nil)
      else
        val msgs = os
          .list(userInbox)
          .filter(p => os.isFile(p) && p.ext == "json")
          .flatMap(p => decode[CommsMessage](os.read(p)).toOption)
          .toList
          .sortBy(_.timestamp)
        Right(msgs)
    catch case ex: Throwable => Left(s"Failed to list inbox: ${ex.getMessage}")

  def listOutbox(senderId: String): Either[String, List[CommsMessage]] =
    try
      val userOutbox = outboxDir / senderId
      if !os.exists(userOutbox) || !os.isDir(userOutbox) then Right(Nil)
      else
        val msgs = os
          .list(userOutbox)
          .filter(p => os.isFile(p) && p.ext == "json")
          .flatMap(p => decode[CommsMessage](os.read(p)).toOption)
          .toList
          .sortBy(_.timestamp)
        Right(msgs)
    catch case ex: Throwable => Left(s"Failed to list outbox: ${ex.getMessage}")

  def listAuditLog(limit: Option[Int] = None): Either[String, List[CommsMessage]] =
    try
      if !os.exists(auditLogFile) || !os.isFile(auditLogFile) then Right(Nil)
      else
        val lines = os.read.lines(auditLogFile).filter(_.trim.nonEmpty)
        val msgs  = lines.flatMap(line => decode[CommsMessage](line).toOption).toList
        val limited = limit match
          case Some(n) if n > 0 => msgs.takeRight(n)
          case _                => msgs
        Right(limited)
    catch case ex: Throwable => Left(s"Failed to read audit log: ${ex.getMessage}")
