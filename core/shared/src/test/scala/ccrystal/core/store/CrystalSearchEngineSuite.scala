package ccrystal.core.store

import ccrystal.core.model.*
import ccrystal.core.model.search.*
import munit.FunSuite

class CrystalSearchEngineSuite extends FunSuite:

  class InMemoryCrystalStore(
      var crystals: Map[String, ContextCrystal] = Map.empty,
      var archived: Set[String] = Set.empty,
  ) extends CrystalStore:
    def save(crystal: ContextCrystal): Either[String, Unit] =
      crystals = crystals.updated(crystal.id, crystal)
      Right(())
    def load(id: String): Either[String, ContextCrystal] =
      crystals.get(id).toRight(s"Not found: $id")
    def list(includeArchived: Boolean): Either[String, List[ContextCrystal]] =
      val active = crystals.values.filterNot(c => archived.contains(c.id)).toList
      if includeArchived then Right(crystals.values.toList)
      else Right(active)
    def archive(id: String): Either[String, Unit] =
      archived = archived + id
      Right(())
    def unarchive(id: String): Either[String, Unit] =
      archived = archived - id
      Right(())
    def isArchived(id: String): Boolean = archived.contains(id)
    def exists(id: String): Boolean     = crystals.contains(id)
    def melt(
        crystalId: String,
        fromSelector: String,
        toSelector: String,
        customSummary: Option[String] = None,
        anchor: Option[String] = None,
    ): Either[String, DAGNode] = Left("Not implemented")
    def getEntityRegistry(): Either[String, EntityRegistry]                = Right(EntityRegistry())
    def saveEntityRegistry(registry: EntityRegistry): Either[String, Unit] = Right(())
    def registerEntity(entity: Entity): Either[String, Entity]             = Right(entity)
    def resolveOrCreateEntity(
        name: String,
        kind: EntityKind,
        distinct: Boolean = false,
    ): Either[String, Entity] = Right(Entity(name, kind, name))
    def deleteCrystal(id: String): Either[String, CrystalDeletionResult] =
      Right(CrystalDeletionResult(id))
    def deregisterEntity(entityId: String): Either[String, EntityDeregistrationResult] =
      Right(EntityDeregistrationResult(entityId))
    def previewCrystalDeletion(id: String, limit: Int = 10): Either[String, CrystalImpactPreview] =
      Left("Not implemented")
    def previewEntityDeregistration(
        entityId: String,
        limit: Int = 10,
    ): Either[String, EntityImpactPreview] = Left("Not implemented")
    def getArtifactRegistry(): Either[String, CaveArtifactRegistry] = Right(CaveArtifactRegistry())
    def saveArtifactRegistry(registry: CaveArtifactRegistry): Either[String, Unit] = Right(())
    def registerArtifact(artifact: Artifact): Either[String, Artifact]             = Right(artifact)
    def listArtifacts(crystalId: Option[String] = None): Either[String, List[Artifact]] = Right(Nil)
    def getArtifact(
        id: String,
        crystalId: Option[String] = None,
    ): Either[String, Option[Artifact]] = Right(None)

  private def sampleCrystal(
      id: String,
      title: String,
      status: GoalStatus = GoalStatus.InProgress,
      updatedAt: String = "2026-09-25T10:00:00Z",
  ): ContextCrystal =
    ContextCrystal(
      schemaVersion = "1.0.0",
      id = id,
      name = Some(id),
      createdAt = updatedAt,
      updatedAt = updatedAt,
      defaultAuthorId = Some("usr_1"),
      goal = Goal(title, "Test Intent", status, Nil),
      entities = List(Entity("usr_1", EntityKind.Human, "User")),
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, updatedAt, "usr_1", NodeKind.HumanPrompt, "Init")),
      ),
    )

  test("CrystalStore.search filters across active and archived crystals"):
    val c1 = sampleCrystal("mcp-infra", "Infrastructure for MCP")
    val c2 = sampleCrystal("auth-guard", "Security and tokens")
    val c3 = sampleCrystal(
      "old-archive",
      "Archived exploratory spike",
      status = GoalStatus.ConcludedSuccess,
    )

    val store = InMemoryCrystalStore(
      crystals = Map("mcp-infra" -> c1, "auth-guard" -> c2, "old-archive" -> c3),
      archived = Set("old-archive"),
    )

    // Unfiltered search matches all active crystals
    val allActive = store.search(CrystalFilter()).toOption.get
    assertEquals(allActive.total, 2)
    assertEquals(allActive.matches.map(_.crystal.id).toSet, Set("mcp-infra", "auth-guard"))
    assertEquals(allActive.hasMore, false)
    assertEquals(allActive.remaining, 0)

    // Search query matching only mcp
    val mcpResults = store.search(CrystalFilter(query = Some("mcp"))).toOption.get
    assertEquals(mcpResults.matches.map(_.crystal.id), List("mcp-infra"))

    // Search including archived crystals
    val withArchived = store.search(CrystalFilter(includeArchived = true)).toOption.get
    assertEquals(
      withArchived.matches.map(_.crystal.id).toSet,
      Set("mcp-infra", "auth-guard", "old-archive"),
    )
    val archivedItem = withArchived.matches.find(_.crystal.id == "old-archive").get
    assert(archivedItem.isArchived, "old-archive should be flagged as archived")

    // Filter by status
    val successOnly = store
      .search(CrystalFilter(status = Some(GoalStatus.ConcludedSuccess), includeArchived = true))
      .toOption
      .get
    assertEquals(successOnly.matches.map(_.crystal.id), List("old-archive"))

  test("CrystalStore.search supports sorting and pagination with remaining count metadata"):
    val c1 = sampleCrystal("alpha", "Alpha goal", updatedAt = "2026-09-01T10:00:00Z")
    val c2 = sampleCrystal("beta", "Beta goal", updatedAt = "2026-09-05T10:00:00Z")
    val c3 = sampleCrystal("gamma", "Gamma goal", updatedAt = "2026-09-10T10:00:00Z")
    val c4 = sampleCrystal("delta", "Delta goal", updatedAt = "2026-09-15T10:00:00Z")
    val c5 = sampleCrystal("epsilon", "Epsilon goal", updatedAt = "2026-09-20T10:00:00Z")

    val store = InMemoryCrystalStore(
      crystals = Map("alpha" -> c1, "beta" -> c2, "gamma" -> c3, "delta" -> c4, "epsilon" -> c5),
    )

    // Page 1: limit 2, offset 0 (default recent sort: epsilon, delta)
    val page1 = store.search(CrystalFilter(limit = Some(2), offset = Some(0))).toOption.get
    assertEquals(page1.total, 5)
    assertEquals(page1.offset, 0)
    assertEquals(page1.limit, Some(2))
    assertEquals(page1.hasMore, true)
    assertEquals(page1.remaining, 3)
    assertEquals(page1.matches.map(_.crystal.id), List("epsilon", "delta"))

    // Page 2: limit 2, offset 2 (gamma, beta)
    val page2 = store.search(CrystalFilter(limit = Some(2), offset = Some(2))).toOption.get
    assertEquals(page2.total, 5)
    assertEquals(page2.offset, 2)
    assertEquals(page2.limit, Some(2))
    assertEquals(page2.hasMore, true)
    assertEquals(page2.remaining, 1)
    assertEquals(page2.matches.map(_.crystal.id), List("gamma", "beta"))

    // Page 3: limit 2, offset 4 (alpha)
    val page3 = store.search(CrystalFilter(limit = Some(2), offset = Some(4))).toOption.get
    assertEquals(page3.total, 5)
    assertEquals(page3.offset, 4)
    assertEquals(page3.limit, Some(2))
    assertEquals(page3.hasMore, false)
    assertEquals(page3.remaining, 0)
    assertEquals(page3.matches.map(_.crystal.id), List("alpha"))

    // Sort by name
    val byName =
      store.search(CrystalFilter(sort = Some(SearchSort.Name), uncapped = true)).toOption.get
    assertEquals(
      byName.matches.map(_.crystal.id),
      List("alpha", "beta", "delta", "epsilon", "gamma"),
    )

    // Sort by oldest
    val byOldest =
      store.search(CrystalFilter(sort = Some(SearchSort.Oldest), uncapped = true)).toOption.get
    assertEquals(
      byOldest.matches.map(_.crystal.id),
      List("alpha", "beta", "gamma", "delta", "epsilon"),
    )
