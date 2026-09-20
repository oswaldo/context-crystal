package ccrystal.core.store

private[core] object ProcessPlatform:
  def currentPid(): Long =
    try ProcessHandle.current().pid()
    catch case _: Throwable => 0L
