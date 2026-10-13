package ccrystal.core.extension.comms

import munit.FunSuite
import ccrystal.core.model.*
import ccrystal.core.model.extension.comms.CommsMessage
import ccrystal.core.codec.extension.comms.given

class CommsEngineSuite extends FunSuite:

  def withTempComms(
      registryProvider: () => Option[EntityRegistry] = () => None,
  )(test: (CommsEngine, os.Path) => Unit): Unit =
    val tempDir = os.temp.dir(prefix = "ccrystal-comms-test")
    try
      val engine = new CommsEngine(tempDir, registryProvider)
      test(engine, tempDir)
    finally
      try os.remove.all(tempDir)
      catch case _: Throwable => ()

  test("sendMessage delivers to inbox, outbox, and audit log"):
    withTempComms() { (engine, _) =>
      val msg = CommsMessage.single(
        id = "msg-001",
        timestamp = "2026-10-13T21:00:00Z",
        senderId = "usr_oswaldo",
        recipientId = "agt_architect",
        channel = "coordination",
        subject = "Track 24 Architecture",
        body = "Please review the 3-tier extension resolution hierarchy.",
        replyToId = None,
        metadata = Map("priority" -> "high"),
      )

      val sendRes = engine.sendMessage(msg)
      assertEquals(sendRes, Right(()))

      // Check inbox delivery
      val inboxRes = engine.listInbox("agt_architect")
      assertEquals(inboxRes, Right(List(msg)))

      // Check recipient isolation (another recipient sees empty inbox)
      val otherInboxRes = engine.listInbox("agt_tester")
      assertEquals(otherInboxRes, Right(Nil))

      // Check outbox
      val outboxRes = engine.listOutbox("usr_oswaldo")
      assertEquals(outboxRes, Right(List(msg)))

      // Check audit log
      val auditRes = engine.listAuditLog()
      assertEquals(auditRes, Right(List(msg)))
    }

  test("multiple messages append chronologically in audit log"):
    withTempComms() { (engine, _) =>
      val msg1 = CommsMessage(
        id = "msg-001",
        timestamp = "2026-10-13T21:00:00Z",
        senderId = "usr_oswaldo",
        recipientId = "agt_architect",
        subject = "Hello",
        body = "First message",
      )
      val msg2 = CommsMessage.single(
        id = "msg-002",
        timestamp = "2026-10-13T21:05:00Z",
        senderId = "agt_architect",
        recipientId = "usr_oswaldo",
        subject = "Re: Hello",
        body = "Acknowledged",
        replyToId = Some("msg-001"),
      )

      engine.sendMessage(msg1)
      engine.sendMessage(msg2)

      val audit = engine.listAuditLog().toOption.get
      assertEquals(audit.map(_.id), List("msg-001", "msg-002"), "audit log chronological order")

      // Test limit
      val limited = engine.listAuditLog(limit = Some(1)).toOption.get
      assertEquals(limited.map(_.id), List("msg-002"), "audit log limit 1")
    }

  test("multi-recipient message delivers to all recipients in list"):
    withTempComms() { (engine, _) =>
      val msg = CommsMessage(
        id = "msg-multi-01",
        timestamp = "2026-10-13T21:10:00Z",
        senderId = "usr_oswaldo",
        recipientIds = List("agt_coder", "agt_reviewer"),
        subject = "Review Request",
        body = "Please review PR 42.",
      )

      val sendRes = engine.sendMessage(msg)
      assertEquals(sendRes, Right(()))

      val coderInbox = engine.listInbox("agt_coder").toOption.get
      assertEquals(coderInbox.map(_.id), List("msg-multi-01"), "coder inbox")

      val reviewerInbox = engine.listInbox("agt_reviewer").toOption.get
      assertEquals(reviewerInbox.map(_.id), List("msg-multi-01"), "reviewer inbox")
    }

  test("group recipient expands to member inboxes via EntityRegistry"):
    val registry = EntityRegistry(
      caveId = Some("test-cave"),
      groups = Map(
        "grp_engineers" -> EntityGroup(
          id = "grp_engineers",
          name = "Engineers",
          memberIds = List("agt_alice", "agt_bob"),
        ),
      ),
    )

    withTempComms(registryProvider = () => Some(registry)) { (engine, _) =>
      val groupMsg = CommsMessage(
        id = "msg-grp-01",
        timestamp = "2026-10-13T21:15:00Z",
        senderId = "usr_oswaldo",
        recipientIds = List("grp_engineers"),
        subject = "Team Standup",
        body = "Standup starting in 5 minutes.",
      )

      engine.sendMessage(groupMsg)

      val aliceInbox = engine.listInbox("agt_alice").toOption.get
      assertEquals(aliceInbox.map(_.id), List("msg-grp-01"), "alice should receive group message")

      val bobInbox = engine.listInbox("agt_bob").toOption.get
      assertEquals(bobInbox.map(_.id), List("msg-grp-01"), "bob should receive group message")
    }
