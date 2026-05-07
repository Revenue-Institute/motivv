import type { Metadata } from "next";

import { getApps, getHomeContent, type AppRecord } from "@/lib/content";
import { getPartnerFromSearchParams, type SearchParamsShape } from "@/lib/partner";

import { HubHero } from "./_sections/hub-hero";
import { AppGrid } from "./_sections/app-grid";
import { HowItWorks } from "./_sections/how-it-works";
import { WhyMotivv } from "./_sections/why-motivv";
import { Stats } from "./_sections/stats";
import { TrustStrip } from "./_sections/trust-strip";
import { PartnersCallout } from "./_sections/partners-callout";
import { HubFaq } from "./_sections/hub-faq";
import { FinalCta } from "./_sections/final-cta";

type PageProps = {
  searchParams: Promise<SearchParamsShape>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const partner = await getPartnerFromSearchParams(params);

  if (partner) {
    return {
      title: `${partner.shortName} — ${partner.heroHeadline}`,
      description: partner.heroSubhead,
      robots: { index: false, follow: true },
      alternates: { canonical: "/" },
    };
  }

  return {
    title: "Motivv Health Studios — Where Health & Gaming Are One",
    description:
      "Eleven mobile games designed to engage you with your health — ad-free, free with your benefits.",
  };
}

function buildJsonLd(apps: AppRecord[]) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Motivv Health Studios",
    legalName: "Motivve Health Studios, LLC",
    url: "https://motivvhealthstudios.com",
    logo: "https://motivvhealthstudios.com/page_images/acoh_logo.svg",
    sameAs: [
      "https://apps.apple.com/us/developer/motivve-health-studios-llc/id1523373102",
      "https://play.google.com/store/apps/developer?id=Motivve+Health+Studios,+LLC",
    ],
  };

  const softwareApps = apps.map((app) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    applicationCategory: "GameApplication",
    operatingSystem: "iOS",
    image: app.iconUrl,
    description: app.shortDescription,
    url: app.iosAppStoreUrl,
    genre: app.genre,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }));

  return [organization, ...softwareApps];
}

export default async function HomePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const [apps, home, partner] = await Promise.all([
    getApps(),
    getHomeContent(),
    getPartnerFromSearchParams(params),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(apps)) }}
      />

      <HubHero hero={home.hero} apps={apps} partner={partner} />
      <AppGrid intro={home.appGridIntro} apps={apps} />
      <HowItWorks content={home.howItWorks} partner={partner} />
      <WhyMotivv content={home.whyMotivv} />
      <Stats content={home.stats} />
      <TrustStrip content={home.trust} />
      <PartnersCallout content={home.partnersCallout} />
      <HubFaq content={home.faq} />
      <FinalCta content={home.finalCta} partner={partner} />
    </>
  );
}
