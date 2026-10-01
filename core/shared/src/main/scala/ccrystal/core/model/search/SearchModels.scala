package ccrystal.core.model.search

import ccrystal.core.audit.CrystalTriage
import ccrystal.core.model.*
import scala.CanEqual
import scala.util.Try

enum AgingCategory derives CanEqual:
  case Active
  case Solid
  case Stale

object AgingCategory:
  def fromAgingState(state: AgingState): AgingCategory = state match
    case AgingState.Active => AgingCategory.Active
    case AgingState.Solid  => AgingCategory.Solid
    case AgingState.Stale  => AgingCategory.Stale

  def parse(s: String): Option[AgingCategory] =
    s.trim.toLowerCase match
      case "active" => Some(AgingCategory.Active)
      case "solid"  => Some(AgingCategory.Solid)
      case "stale"  => Some(AgingCategory.Stale)
      case _        => None

enum SearchSort derives CanEqual:
  case Recent
  case Oldest
  case Name

object SearchSort:
  def parse(s: String): Option[SearchSort] =
    s.trim.toLowerCase match
      case "recent" => Some(SearchSort.Recent)
      case "oldest" => Some(SearchSort.Oldest)
      case "name"   => Some(SearchSort.Name)
      case _        => None

case class CrystalFilter(
    query: Option[String] = None,
    since: Option[String] = None,
    until: Option[String] = None,
    status: Option[GoalStatus] = None,
    hasActiveLeases: Option[Boolean] = None,
    touchingPath: Option[String] = None,
    hasOpenTasks: Option[Boolean] = None,
    hasLessons: Option[Boolean] = None,
    author: Option[String] = None,
    aging: Option[AgingCategory] = None,
    includeArchived: Boolean = false,
    sort: Option[SearchSort] = None,
    limit: Option[Int] = None,
    offset: Option[Int] = None,
    uncapped: Boolean = false,
) derives CanEqual

case class SearchMatch(
    crystal: ContextCrystal,
    isArchived: Boolean,
    matchedReasons: List[String],
    agingCategory: AgingCategory,
) derives CanEqual

case class SearchResult(
    total: Int,
    offset: Int,
    limit: Option[Int],
    hasMore: Boolean,
    remaining: Int,
    matches: List[SearchMatch],
) derives CanEqual

object CivilDate:
  def daysSince1970(year: Int, month: Int, day: Int): Long =
    var y = year.toLong
    var m = month.toLong
    if m <= 2 then
      y -= 1
      m += 12
    val era = (if y >= 0 then y else y - 399) / 400
    val yoe = y - era * 400
    val doy = (153 * (m - 3) + 2) / 5 + day - 1
    val doe = yoe * 365 + yoe / 4 - yoe / 100 + doy
    era * 146097L + doe - 719468L

  def epochMillis(
      year: Int,
      month: Int,
      day: Int,
      hour: Int = 0,
      minute: Int = 0,
      second: Int = 0,
      millis: Int = 0,
  ): Long =
    val days    = daysSince1970(year, month, day)
    val seconds = days * 86400L + hour * 3600L + minute * 60L + second
    seconds * 1000L + millis

  def parseIsoToEpochMillis(iso: String): Option[Long] =
    val s = iso.trim
    try
      if s.length == 10 && s.charAt(4) == '-' && s.charAt(7) == '-' then
        val year  = s.substring(0, 4).toInt
        val month = s.substring(5, 7).toInt
        val day   = s.substring(8, 10).toInt
        Some(epochMillis(year, month, day))
      else if s.length >= 19 && s.charAt(4) == '-' && s
          .charAt(7) == '-' && (s.charAt(10) == 'T' || s.charAt(10) == 't' || s.charAt(10) == ' ')
      then
        val year   = s.substring(0, 4).toInt
        val month  = s.substring(5, 7).toInt
        val day    = s.substring(8, 10).toInt
        val hour   = s.substring(11, 13).toInt
        val minute = s.substring(14, 16).toInt
        val second = s.substring(17, 19).toInt
        val millis =
          if s.length > 20 && s.charAt(19) == '.' then
            val endIdx = {
              val zIdx = s.indexOf('Z', 20)
              if zIdx >= 0 then zIdx else s.length
            }
            val sub = s.substring(20, endIdx).take(3)
            sub.padTo(3, '0').toInt
          else 0
        Some(epochMillis(year, month, day, hour, minute, second, millis))
      else None
    catch case _: Throwable => None

object TemporalParser:
  private val RelativeRegex = """^(\d+)([dhm])$""".r

  def parse(input: String, nowEpochMillis: Long): Option[Long] =
    val trimmed = input.trim.toLowerCase
    trimmed match
      case "today" =>
        // Start of current UTC day
        val dayMillis = 86400000L
        Some((nowEpochMillis / dayMillis) * dayMillis)
      case "yesterday" =>
        val dayMillis = 86400000L
        Some(((nowEpochMillis / dayMillis) - 1L) * dayMillis)
      case RelativeRegex(amountStr, unit) =>
        Try(amountStr.toLong).toOption.map { amount =>
          unit match
            case "d" => nowEpochMillis - amount * 86400000L
            case "h" => nowEpochMillis - amount * 3600000L
            case "m" => nowEpochMillis - amount * 60000L
            case _   => nowEpochMillis
        }
      case iso =>
        CivilDate.parseIsoToEpochMillis(iso)

  def parse(input: String): Option[Long] =
    parse(input, System.currentTimeMillis())

object SearchEngine:

  def latestActivityMillis(crystal: ContextCrystal): Long =
    val nodeMillis = crystal.dag.nodes.flatMap(n => CivilDate.parseIsoToEpochMillis(n.timestamp))
    val updated    = CivilDate.parseIsoToEpochMillis(crystal.updatedAt)
    val created    = CivilDate.parseIsoToEpochMillis(crystal.createdAt)

    val all = nodeMillis ++ updated.toList ++ created.toList
    if all.isEmpty then 0L
    else all.max

  def matches(
      crystal: ContextCrystal,
      filter: CrystalFilter,
      nowEpochMillis: Long = System.currentTimeMillis(),
      isArchived: Boolean = false,
  ): Option[SearchMatch] =
    val reasons = List.newBuilder[String]

    // 1. Text Query Matching
    val queryMatches = filter.query match
      case None => true
      case Some(q) =>
        val tokens = q.toLowerCase.split("\\s+").filter(_.nonEmpty).toList
        if tokens.isEmpty then true
        else
          val idMatch     = tokens.forall(crystal.id.toLowerCase.contains)
          val titleMatch  = tokens.forall(crystal.goal.title.toLowerCase.contains)
          val intentMatch = tokens.forall(crystal.goal.intent.toLowerCase.contains)
          val nodeMatch = crystal.dag.nodes.exists { n =>
            val summaryLower = n.contentSummary.toLowerCase
            val anchorLower  = n.anchor.getOrElse("").toLowerCase
            tokens.forall(t => summaryLower.contains(t) || anchorLower.contains(t))
          }
          val lessonMatch = crystal.lessonsLearned.exists { l =>
            val text =
              (l.observedFriction + " " + l.rootCause.getOrElse("") + " " + l.recommendedAction
                .getOrElse("")).toLowerCase
            tokens.forall(text.contains)
          }
          val artifactMatch = crystal.artifacts.exists { a =>
            val text = (a.id + " " + a.name + " " + a.description.getOrElse("")).toLowerCase
            tokens.forall(text.contains)
          }

          if idMatch then reasons += s"Matched ID '${crystal.id}'"
          if titleMatch then reasons += s"Matched title '${crystal.goal.title}'"
          if intentMatch then reasons += "Matched intent"
          if nodeMatch then reasons += "Matched DAG transition"
          if lessonMatch then reasons += "Matched lesson learned"
          if artifactMatch then reasons += "Matched artifact"

          idMatch || titleMatch || intentMatch || nodeMatch || lessonMatch || artifactMatch

    if !queryMatches then return None

    // 2. Status Match
    val statusMatches = filter.status match
      case None    => true
      case Some(s) => crystal.goal.status == s

    if !statusMatches then return None

    // 3. Temporal Bounds
    val activity = latestActivityMillis(crystal)

    val sinceMatches = filter.since match
      case None => true
      case Some(sinceStr) =>
        TemporalParser.parse(sinceStr, nowEpochMillis) match
          case Some(sinceMillis) =>
            val ok = activity >= sinceMillis
            if ok && filter.query.isEmpty then reasons += s"Active since $sinceStr"
            ok
          case None => false

    if !sinceMatches then return None

    val untilMatches = filter.until match
      case None => true
      case Some(untilStr) =>
        TemporalParser.parse(untilStr, nowEpochMillis) match
          case Some(untilMillis) =>
            val ok = activity <= untilMillis
            if ok && filter.query.isEmpty then reasons += s"Active until $untilStr"
            ok
          case None => false

    if !untilMatches then return None

    // 4. Resource Leases & Touching Path
    val activeLeaseCount = crystal.transientLeases.count(_.status == TransientLeaseStatus.Active)
    val leasesMatch = filter.hasActiveLeases match
      case None        => true
      case Some(true)  => activeLeaseCount > 0
      case Some(false) => activeLeaseCount == 0

    if !leasesMatch then return None

    val pathMatch = filter.touchingPath match
      case None => true
      case Some(path) =>
        val pLower = path.toLowerCase
        val inLeases = crystal.transientLeases.exists(l =>
          l.resourcePath.exists(_.toLowerCase.contains(pLower)) || l.description.toLowerCase
            .contains(pLower),
        )
        val inArtifacts = crystal.artifacts.exists(a =>
          a.uri.exists(_.toLowerCase.contains(pLower)) || a.location
            .flatMap(_.civicAddress)
            .exists(_.toLowerCase.contains(pLower)),
        )
        val matched = inLeases || inArtifacts
        if matched then reasons += s"Touches path '$path'"
        matched

    if !pathMatch then return None

    // 5. Open Tasks
    val openTaskCount = crystal.goal.acceptanceCriteria.count(!_.completed)
    val tasksMatch = filter.hasOpenTasks match
      case None        => true
      case Some(true)  => openTaskCount > 0
      case Some(false) => openTaskCount == 0

    if !tasksMatch then return None

    // 6. Lessons
    val lessonsMatch = filter.hasLessons match
      case None        => true
      case Some(true)  => crystal.lessonsLearned.nonEmpty
      case Some(false) => crystal.lessonsLearned.isEmpty

    if !lessonsMatch then return None

    // 7. Author
    val authorMatch = filter.author match
      case None => true
      case Some(auth) =>
        val inDefault = crystal.defaultAuthorId.contains(auth)
        val inNodes   = crystal.dag.nodes.exists(_.actorId == auth)
        inDefault || inNodes

    if !authorMatch then return None

    // 8. Aging
    val agingState = CrystalTriage.classifyAging(crystal)
    val agingCat   = AgingCategory.fromAgingState(agingState)
    val agingMatch = filter.aging match
      case None      => true
      case Some(cat) => cat == agingCat

    if !agingMatch then return None

    val finalReasons = reasons.result()
    val matchReasons =
      if finalReasons.nonEmpty then finalReasons else List("Matched filter criteria")

    Some(SearchMatch(crystal, isArchived, matchReasons, agingCat))

  def search(
      crystals: List[(ContextCrystal, Boolean)],
      filter: CrystalFilter,
      nowEpochMillis: Long = System.currentTimeMillis(),
  ): SearchResult =
    val allMatches = crystals.flatMap { case (crystal, isArchived) =>
      matches(crystal, filter, nowEpochMillis, isArchived)
    }

    val sortedMatches = filter.sort.getOrElse(SearchSort.Recent) match
      case SearchSort.Recent =>
        allMatches.sortBy(m => -latestActivityMillis(m.crystal))
      case SearchSort.Oldest =>
        allMatches.sortBy(m => latestActivityMillis(m.crystal))
      case SearchSort.Name =>
        allMatches.sortBy(m => m.crystal.id.toLowerCase)

    val total           = sortedMatches.size
    val effectiveOffset = filter.offset.getOrElse(0).max(0)
    val dropped         = sortedMatches.drop(effectiveOffset)

    val effectiveLimitOpt =
      if filter.uncapped then None
      else filter.limit.filter(_ > 0).orElse(Some(20))

    val pagedMatches = effectiveLimitOpt match
      case Some(limit) => dropped.take(limit)
      case None        => dropped

    val remaining = math.max(0, total - effectiveOffset - pagedMatches.size)
    val hasMore   = remaining > 0

    SearchResult(
      total = total,
      offset = effectiveOffset,
      limit = effectiveLimitOpt,
      hasMore = hasMore,
      remaining = remaining,
      matches = pagedMatches,
    )
