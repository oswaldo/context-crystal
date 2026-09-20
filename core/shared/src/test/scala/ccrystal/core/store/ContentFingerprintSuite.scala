package ccrystal.core.store

import munit.FunSuite

class ContentFingerprintSuite extends FunSuite:

  test("ContentFingerprint generates deterministic hashes") {
    val input = """{"id": "test-1", "value": 42}"""
    val h1    = ContentFingerprint.compute(input)
    val h2    = ContentFingerprint.compute(input)
    assertEquals(h1, h2)
  }

  test("ContentFingerprint detects subtle differences") {
    val a = """{"id": "test-1", "value": 42}"""
    val b = """{"id": "test-1", "value": 43}"""
    val c = """{"id": "test-1", "value": 42 }""" // whitespace difference
    val ha = ContentFingerprint.compute(a)
    val hb = ContentFingerprint.compute(b)
    val hc = ContentFingerprint.compute(c)

    assert(ha != hb, "Different content must produce different hashes")
    assert(ha != hc, "Whitespace changes must produce different hashes")
  }

  test("ContentFingerprint handles empty strings") {
    val emptyHash = ContentFingerprint.compute("")
    assert(emptyHash.startsWith("len0-"), "Empty hash must start with len0-")
  }
