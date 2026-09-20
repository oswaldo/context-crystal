package ccrystal.core.store

import scala.scalanative.posix.unistd

private[core] object ProcessPlatform:
  def currentPid(): Long =
    try unistd.getpid().toLong
    catch case _: Throwable => 0L
