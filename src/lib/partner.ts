import { getPartnerBySlug } from "@/lib/content";
import type { PartnerRecord } from "@/lib/content/types";

export type SearchParamsShape = Record<string, string | string[] | undefined>;

const KNOWN_PARTNER_FLAGS = ["acoh"] as const;

export function resolvePartnerSlug(searchParams: SearchParamsShape | undefined): string | null {
  if (!searchParams) return null;

  const partnerParam = searchParams.partner;
  if (typeof partnerParam === "string" && partnerParam.trim()) {
    return partnerParam.trim().toLowerCase();
  }

  for (const flag of KNOWN_PARTNER_FLAGS) {
    if (flag in searchParams) {
      return flag;
    }
  }

  return null;
}

export async function getPartnerFromSearchParams(
  searchParams: SearchParamsShape | undefined,
): Promise<PartnerRecord | null> {
  const slug = resolvePartnerSlug(searchParams);
  if (!slug) return null;
  return getPartnerBySlug(slug);
}
