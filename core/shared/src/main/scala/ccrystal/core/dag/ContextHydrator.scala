package ccrystal.core.dag

import ccrystal.core.model.*
import scala.CanEqual

case class HydrationParams(
    slice: SliceParams = SliceParams(),
    summaryOnly: Boolean = false,
) derives CanEqual

object ContextHydrator:

  def hydrate(crystal: ContextCrystal, params: HydrationParams): Either[String, String] =
    Left("Not implemented")
