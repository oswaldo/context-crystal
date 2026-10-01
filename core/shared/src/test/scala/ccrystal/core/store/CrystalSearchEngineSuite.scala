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
    def deleteCrystal(id: String): Either[String, CrystalDeletionResult] = Right(
      CrystalDeletionResult(id),
    )
    def deregisterEntity(entityId: String): Either[String, EntityDeregistrationResult] = Right(
      EntityDeregistrationResult(entityId),
    )
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
  ): ContextCrystal =
    ContextCrystal(
      schemaVersion = "1.0.0",
      id = id,
      name = Some(id),
      createdAt = "2026-09-20T10:00:00Z",
      updatedAt = "2026-09-25T10:00:00Z",
      defaultAuthorId = Some("usr_1"),
      goal = Goal(title, "Test Intent", status, Nil),
      entities = List(Entity("usr_1", EntityKind.Human, "User")),
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, "2026-09-20T10:00:00Z", "usr_1", NodeKind.HumanPrompt, "Init")),
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
    val allActive = store.search(CrystalFilter()).getOrElse(Nil)
    assertEquals(allActive.map(_.crystal.id).toSet, Set("mcp-infra", "auth-guard"))

    // Search query matching only mcp
    val mcpResults = store.search(CrystalFilter(query = Some("mcp"))).getOrElse(Nil)
    assertEquals(mcpResults.map(_.crystal.id), List("mcp-infra"))

    // Search including archived crystals
    val withArchived = store.search(CrystalFilter(includeArchived = true)).getOrElse(Nil)
    assertEquals(
      withArchived.map(_.crystal.id).toSet,
      Set("mcp-infra", "auth-guard", "old-archive"),
    )
    val archivedItem = withArchived.find(_.crystal.id == "old-archive").get
    assert(archivedItem.isArchived, "old-archive should be flagged as archived")

    // Filter by status
    val successOnly = store
      .search(CrystalFilter(status = Some(GoalStatus.ConcludedSuccess), includeArchived = true))
      .getOrElse(Nil)
    assertEquals(successOnly.map(_.crystal.id), List("old-archive"))
