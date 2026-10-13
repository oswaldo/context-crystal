package ccrystal.core.model.extension.comms

import scala.CanEqual

case class CommsMessage(
    id: String,
    timestamp: String,
    senderId: String,
    recipientIds: List[String],
    subject: String,
    body: String,
    channel: String = "default",
    replyToId: Option[String] = None,
    metadata: Map[String, String] = Map.empty,
) derives CanEqual:
  def isBroadcast: Boolean =
    recipientIds.contains("@all")

object CommsMessage:
  def single(
      id: String,
      timestamp: String,
      senderId: String,
      recipientId: String,
      subject: String,
      body: String,
      channel: String = "default",
      replyToId: Option[String] = None,
      metadata: Map[String, String] = Map.empty,
  ): CommsMessage =
    CommsMessage(
      id = id,
      timestamp = timestamp,
      senderId = senderId,
      recipientIds = List(recipientId),
      subject = subject,
      body = body,
      channel = channel,
      replyToId = replyToId,
      metadata = metadata,
    )

  def apply(
      id: String,
      timestamp: String,
      senderId: String,
      recipientId: String,
      subject: String,
      body: String,
  ): CommsMessage =
    single(
      id = id,
      timestamp = timestamp,
      senderId = senderId,
      recipientId = recipientId,
      subject = subject,
      body = body,
    )

case class CommsStats(
    totalMessages: Int,
    pendingInboxMessages: Int,
    activeInboxes: Int,
    auditLogSizeBytes: Long,
) derives CanEqual
