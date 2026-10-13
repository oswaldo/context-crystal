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

  test(
    "ackMessage removes message from specific recipient inbox but preserves outbox and audit log",
  ):
    withTempComms() { (engine, _) =>
      val msg = CommsMessage(
        id = "msg-ack-01",
        timestamp = "2026-10-13T21:20:00Z",
        senderId = "usr_oswaldo",
        recipientId = "agt_alice",
        subject = "Action Required",
        body = "Execute migration step 1",
      )

      engine.sendMessage(msg)
      assertEquals(engine.listInbox("agt_alice").toOption.get.map(_.id), List("msg-ack-01"))

      // Ack message
      val ackRes = engine.ackMessage("agt_alice", "msg-ack-01")
      assertEquals(ackRes, Right(()), "ackMessage should succeed")

      // Inbox is now drained
      assertEquals(
        engine.listInbox("agt_alice").toOption.get,
        Nil,
        "inbox should be empty after ack",
      )

      // Outbox and audit log remain intact
      assertEquals(
        engine.listOutbox("usr_oswaldo").toOption.get.map(_.id),
        List("msg-ack-01"),
        "outbox preserved",
      )
      assertEquals(
        engine.listAuditLog().toOption.get.map(_.id),
        List("msg-ack-01"),
        "audit log preserved",
      )

      // Second ack returns error (file no longer exists)
      val secondAck = engine.ackMessage("agt_alice", "msg-ack-01")
      assert(secondAck.isLeft, "second ack should report not found")
    }

  test("clearInbox purges all pending messages for recipient"):
    withTempComms() { (engine, _) =>
      val msg1 = CommsMessage(
        id = "m1",
        timestamp = "2026-10-13T21:21:00Z",
        senderId = "u1",
        recipientId = "agt_alice",
        subject = "1",
        body = "1",
      )
      val msg2 = CommsMessage(
        id = "m2",
        timestamp = "2026-10-13T21:22:00Z",
        senderId = "u1",
        recipientId = "agt_alice",
        subject = "2",
        body = "2",
      )
      engine.sendMessage(msg1)
      engine.sendMessage(msg2)

      assertEquals(engine.listInbox("agt_alice").toOption.get.size, 2)

      val clearRes = engine.clearInbox("agt_alice")
      assertEquals(clearRes, Right(2), "cleared 2 messages")
      assertEquals(engine.listInbox("agt_alice").toOption.get, Nil)
    }

  test("listInbox and listOutbox respect limit"):
    withTempComms() { (engine, _) =>
      for i <- 1 to 5 do
        val msg = CommsMessage(
          id = s"msg-00$i",
          timestamp = s"2026-10-13T21:2$i:00Z",
          senderId = "usr_oswaldo",
          recipientId = "agt_worker",
          subject = s"Job $i",
          body = s"Run $i",
        )
        engine.sendMessage(msg)

      val pagedInbox = engine.listInbox("agt_worker", limit = Some(2)).toOption.get
      assertEquals(
        pagedInbox.map(_.id),
        List("msg-001", "msg-002"),
        "FIFO: oldest 2 unread messages first",
      )

      val pagedOutbox = engine.listOutbox("usr_oswaldo", limit = Some(2)).toOption.get
      assertEquals(
        pagedOutbox.map(_.id),
        List("msg-004", "msg-005"),
        "LIFO: newest 2 sent messages",
      )
    }

  test("stats computes accurate comms metrics"):
    withTempComms() { (engine, _) =>
      val msg1 = CommsMessage(
        id = "m1",
        timestamp = "2026-10-13T21:30:00Z",
        senderId = "u1",
        recipientId = "agt_alice",
        subject = "A",
        body = "A",
      )
      val msg2 = CommsMessage(
        id = "m2",
        timestamp = "2026-10-13T21:31:00Z",
        senderId = "u1",
        recipientId = "agt_bob",
        subject = "B",
        body = "B",
      )
      engine.sendMessage(msg1)
      engine.sendMessage(msg2)

      val statsBefore = engine.stats().toOption.get
      assertEquals(statsBefore.totalMessages, 2)
      assertEquals(statsBefore.pendingInboxMessages, 2)
      assertEquals(statsBefore.activeInboxes, 2)
      assert(statsBefore.auditLogSizeBytes > 0, "audit log size > 0")

      // Drain alice's message
      engine.ackMessage("agt_alice", "m1")
      val statsAfter = engine.stats().toOption.get
      assertEquals(statsAfter.totalMessages, 2, "total messages preserved in audit log")
      assertEquals(statsAfter.pendingInboxMessages, 1, "only 1 pending message remaining")
      assertEquals(statsAfter.activeInboxes, 1, "only 1 active inbox remaining")
    }
