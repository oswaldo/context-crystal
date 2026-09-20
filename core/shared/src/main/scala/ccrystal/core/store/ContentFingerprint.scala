package ccrystal.core.store

import java.nio.charset.StandardCharsets

object ContentFingerprint:

  private val FnvOffsetBasis1: Long = 0xcbf29ce484222325L
  private val FnvPrime1: Long       = 0x100000001b3L

  private val FnvOffsetBasis2: Long = 0x84222325cbf29ce4L
  private val FnvPrime2: Long       = 0x100000001b3L

  /** Computes a collision-resistant 128-bit deterministic fingerprint with content length prefix.
    * Format: "len<bytes>-<h1-hex>-<h2-hex>"
    */
  def compute(content: String): String =
    val bytes = content.getBytes(StandardCharsets.UTF_8)
    var h1    = FnvOffsetBasis1
    var h2    = FnvOffsetBasis2
    var i     = 0
    val len   = bytes.length
    while i < len do
      val b = bytes(i).toLong & 0xffL
      h1 = (h1 ^ b) * FnvPrime1
      h2 = (h2 ^ (b + 1L)) * FnvPrime2
      i += 1
    s"len$len-${java.lang.Long.toHexString(h1)}-${java.lang.Long.toHexString(h2)}"
