package ccrystal.core.codec.extension.comms

import io.circe.*
import io.circe.syntax.*
import ccrystal.core.model.extension.comms.CommsMessage

given Encoder[CommsMessage] = Encoder.instance { m =>
  Json.obj(
    "id"           -> m.id.asJson,
    "timestamp"    -> m.timestamp.asJson,
    "senderId"     -> m.senderId.asJson,
    "recipientIds" -> m.recipientIds.asJson,
    "subject"      -> m.subject.asJson,
    "body"         -> m.body.asJson,
    "channel"      -> m.channel.asJson,
    "replyToId"    -> m.replyToId.asJson,
    "metadata"     -> m.metadata.asJson,
  )
}

given Decoder[CommsMessage] = Decoder.instance { c =>
  for
    id        <- c.downField("id").as[String]
    timestamp <- c.downField("timestamp").as[String]
    senderId  <- c.downField("senderId").as[String]
    recipientIds <- c.downField("recipientIds").as[Option[List[String]]].flatMap {
      case Some(list) => Right(list)
      case None =>
        c.downField("recipientId").as[Option[String]].map {
          case Some(single) => List(single)
          case None         => Nil
        }
    }
    subject   <- c.downField("subject").as[String]
    body      <- c.downField("body").as[String]
    channel   <- c.downField("channel").as[Option[String]].map(_.getOrElse("default"))
    replyToId <- c.downField("replyToId").as[Option[String]]
    metadata  <- c.downField("metadata").as[Option[Map[String, String]]].map(_.getOrElse(Map.empty))
  yield CommsMessage(
    id = id,
    timestamp = timestamp,
    senderId = senderId,
    recipientIds = recipientIds,
    subject = subject,
    body = body,
    channel = channel,
    replyToId = replyToId,
    metadata = metadata,
  )
}

given Encoder[ccrystal.core.model.extension.comms.CommsStats] = Encoder.instance { s =>
  Json.obj(
    "totalMessages"        -> s.totalMessages.asJson,
    "pendingInboxMessages" -> s.pendingInboxMessages.asJson,
    "activeInboxes"        -> s.activeInboxes.asJson,
    "auditLogSizeBytes"    -> s.auditLogSizeBytes.asJson,
  )
}

given Decoder[ccrystal.core.model.extension.comms.CommsStats] = Decoder.instance { c =>
  for
    totalMessages        <- c.downField("totalMessages").as[Int]
    pendingInboxMessages <- c.downField("pendingInboxMessages").as[Int]
    activeInboxes        <- c.downField("activeInboxes").as[Int]
    auditLogSizeBytes    <- c.downField("auditLogSizeBytes").as[Long]
  yield ccrystal.core.model.extension.comms.CommsStats(
    totalMessages = totalMessages,
    pendingInboxMessages = pendingInboxMessages,
    activeInboxes = activeInboxes,
    auditLogSizeBytes = auditLogSizeBytes,
  )
}
