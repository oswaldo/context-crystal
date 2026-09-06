package ccrystal.core.audit

import ccrystal.core.model.*

object CrystalAuditor:

  def findUncleanedTransientLeases(crystal: ContextCrystal): List[TransientLease] =
    crystal.transientLeases.filter { lease =>
      lease.status match
        case TransientLeaseStatus.Active              => true
        case TransientLeaseStatus.Reverted            => false
        case TransientLeaseStatus.Cleaned             => false
        case TransientLeaseStatus.PromotedToPermanent => false
    }

  def findUnaddressedLessons(crystal: ContextCrystal): List[LessonLearned] =
    crystal.lessonsLearned.filter { lesson =>
      lesson.status match
        case LessonStatus.Open      => true
        case LessonStatus.Actioned  => false
        case LessonStatus.Dismissed => false
    }

  def isReadyForConclusion(crystal: ContextCrystal): Either[List[String], Unit] =
    val uncleanedLeases    = findUncleanedTransientLeases(crystal)
    val unaddressedLessons = findUnaddressedLessons(crystal)
    val errors             = List.newBuilder[String]

    if uncleanedLeases.nonEmpty then
      errors += s"Found ${uncleanedLeases.size} uncleaned transient lease(s): ${uncleanedLeases.map(_.id).mkString(", ")}"

    if unaddressedLessons.nonEmpty then
      errors += s"Found ${unaddressedLessons.size} open lesson(s) learned: ${unaddressedLessons.map(_.id).mkString(", ")}"

    val result = errors.result()
    if result.isEmpty then Right(()) else Left(result)
