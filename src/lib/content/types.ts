export type AppGenre = "Puzzle" | "Word" | "Card" | "Action";

export const APP_GENRES: AppGenre[] = ["Puzzle", "Word", "Card", "Action"];

export type AppRecord = {
  slug: string;
  name: string;
  shortDescription: string;
  genre: AppGenre;
  iconUrl: string;
  iosAppStoreUrl: string;
  googlePlayUrl?: string;
  appsFlyerOneLink: string;
  featured?: boolean;
  order: number;
};

export type PartnerRecord = {
  slug: string;
  name: string;
  shortName: string;
  activationCode: string;
  rewardCurrency: string;
  downloadShortLink: string;
  signupShortLink: string;
  enrollUrl: string;
  enrollLabel: string;
  memberServicesPhone: string;
  ttyPhone: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubhead: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FeatureRow = {
  eyebrow: string;
  heading: string;
  body: string;
  imageAlt: string;
};

export type StatCard = {
  percent: string;
  label: string;
};

export type TrustBadge = {
  label: string;
  description: string;
};

export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };

export type HomeContent = {
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  appGridIntro: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  howItWorks: {
    heading: string;
    steps: { title: string; body: string }[];
  };
  whyMotivv: {
    eyebrow: string;
    heading: string;
    rows: FeatureRow[];
  };
  stats: {
    heading: string;
    items: StatCard[];
  };
  trust: {
    heading: string;
    badges: TrustBadge[];
  };
  partnersCallout: {
    eyebrow: string;
    heading: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  faq: {
    heading: string;
    items: FaqItem[];
  };
  finalCta: {
    heading: string;
    body: string;
  };
  footer: {
    tagline: string;
    pitch: string;
    columns: FooterColumn[];
    appStoreLinks: { ios: string; android: string };
    legal: { copyright: string; locality: string };
  };
};
