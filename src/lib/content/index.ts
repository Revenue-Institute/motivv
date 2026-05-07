import { APPS, HOME_CONTENT, PARTNERS, STORE_LINKS } from "./data";
import type { AppRecord, HomeContent, PartnerRecord } from "./types";

export type { AppGenre, AppRecord, FaqItem, FeatureRow, HomeContent, PartnerRecord, StatCard, TrustBadge } from "./types";
export { APP_GENRES } from "./types";
export { STORE_LINKS };

export async function getApps(): Promise<AppRecord[]> {
  return [...APPS].sort((a, b) => a.order - b.order);
}

export async function getHomeContent(): Promise<HomeContent> {
  return HOME_CONTENT;
}

export async function getPartnerBySlug(slug: string): Promise<PartnerRecord | null> {
  return PARTNERS.find((p) => p.slug === slug.toLowerCase()) ?? null;
}
