package ccrystal.cli

import munit.FunSuite
import java.nio.file.{Files, Path, Paths}

class StoreResolverSuite extends FunSuite:

  test("extractStoreArg extracts --store and leaves remaining args intact"):
    val args1          = List("--store", "/tmp/ext-store", "init", "demo", "--goal", "Test")
    val (store1, rem1) = StoreResolver.extractStoreArg(args1)
    assertEquals(store1, Some("/tmp/ext-store"))
    assertEquals(rem1, List("init", "demo", "--goal", "Test"))

    val args2 = List("task", "add", "demo", "--desc", "Do work", "--store", "/var/crystals")
    val (store2, rem2) = StoreResolver.extractStoreArg(args2)
    assertEquals(store2, Some("/var/crystals"))
    assertEquals(rem2, List("task", "add", "demo", "--desc", "Do work"))

    val args3          = List("list", "--status", "in_progress")
    val (store3, rem3) = StoreResolver.extractStoreArg(args3)
    assertEquals(store3, None)
    assertEquals(rem3, List("list", "--status", "in_progress"))

  test("resolveStorePath honors hierarchy: CLI opt > env var > pointer file > default"):
    val tempDir     = Files.createTempDirectory("ccrystal-test-store")
    val pointerFile = tempDir.resolve(".ccrystal-store")
    Files.write(pointerFile, "../from-pointer-repo\n".getBytes("UTF-8"))

    val defaultFallback = tempDir.resolve(".ccrystals")

    // 1. CLI flag takes highest priority
    val res1 = StoreResolver.resolveStorePath(
      cliStoreOpt = Some("/cli/override"),
      envMap = Map("CCRYSTAL_STORE" -> "/env/override"),
      workingDir = tempDir,
    )
    assertEquals(res1, Paths.get("/cli/override"))

    // 2. Env var takes priority over pointer file
    val res2 = StoreResolver.resolveStorePath(
      cliStoreOpt = None,
      envMap = Map("CCRYSTAL_STORE" -> "/env/override"),
      workingDir = tempDir,
    )
    assertEquals(res2, Paths.get("/env/override"))

    // 3. Pointer file takes priority over default
    val res3 = StoreResolver.resolveStorePath(
      cliStoreOpt = None,
      envMap = Map.empty,
      workingDir = tempDir,
    )
    assertEquals(res3, tempDir.resolve("../from-pointer-repo").normalize())

    // 4. Default fallback when no CLI, no env, no pointer file
    val emptyDir = Files.createTempDirectory("ccrystal-empty-dir")
    val res4 = StoreResolver.resolveStorePath(
      cliStoreOpt = None,
      envMap = Map.empty,
      workingDir = emptyDir,
    )
    assertEquals(res4, emptyDir.resolve(".ccrystals"))
