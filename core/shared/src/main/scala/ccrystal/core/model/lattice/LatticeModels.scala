package ccrystal.core.model.lattice

import scala.CanEqual

enum BondRelation derives CanEqual:
  case RelatesTo
  case DependsOn
  case Blocks
  case Supersedes
  case References

object BondRelation:
  def parse(s: String): Option[BondRelation] =
    s.trim.toLowerCase match
      case "relates_to" | "relatesto" | "relates-to" => Some(BondRelation.RelatesTo)
      case "depends_on" | "dependson" | "depends-on" => Some(BondRelation.DependsOn)
      case "blocks"                                  => Some(BondRelation.Blocks)
      case "supersedes"                              => Some(BondRelation.Supersedes)
      case "references"                              => Some(BondRelation.References)
      case _                                         => None

  def format(r: BondRelation): String = r match
    case BondRelation.RelatesTo  => "relates_to"
    case BondRelation.DependsOn  => "depends_on"
    case BondRelation.Blocks     => "blocks"
    case BondRelation.Supersedes => "supersedes"
    case BondRelation.References => "references"

final case class LatticeBond(
    targetCrystalId: String,
    relation: BondRelation,
    description: Option[String] = None,
    createdAt: String,
) derives CanEqual

final case class InboundBond(
    sourceCrystalId: String,
    bond: LatticeBond,
) derives CanEqual

final case class CrystalBondsSummary(
    crystalId: String,
    outbound: List[LatticeBond] = Nil,
    inbound: List[InboundBond] = Nil,
) derives CanEqual
