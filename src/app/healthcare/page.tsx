import type { Metadata } from "next";

import { AudienceHero } from "../_sections/audience/hero";
import { FeatureCardsGrid } from "../_sections/audience/feature-cards";
import { StatsStrip } from "../_sections/audience/stats-strip";
import { AudienceFinalCta } from "../_sections/audience/final-cta";

export const metadata: Metadata = {
  title: "For health plans",
  description:
    "Engage members where they actually spend their time. Motivv folds health navigation, benefit awareness, and rewards into mobile games people already love.",
  alternates: { canonical: "/healthcare" },
};

const FEATURE_CARDS = [
  {
    icon: "📈",
    title: "Boost engagement",
    body: "Drive more efficient and effective interaction, health literacy, and communication with members.",
  },
  {
    icon: "🧭",
    title: "Simplify navigation",
    body: "Empower members to better navigate and manage their healthcare through a familiar and fun experience.",
  },
  {
    icon: "📊",
    title: "Capture insights",
    body: "Collect actionable, robust health data for improved organizational insight and risk management.",
  },
  {
    icon: "✨",
    title: "Enhance solutions",
    body: "Create more value and increase awareness of underutilized member benefits and programs.",
  },
];

const STATS = [
  { percent: "93%", label: "found it easy to use and interact with" },
  { percent: "91%", label: "found it easy to learn about their benefits" },
  { percent: "90%", label: "found it easy to learn about their health" },
  { percent: "88%", label: "are happy with the experience" },
];

export default function HealthcarePage() {
  return (
    <>
      <AudienceHero
        eyebrow="For health plans"
        headline="Engage people where they are, not where you want them to be."
        subhead="The healthcare industry has tried just about everything to crack the code on engagement. The honest answer: digital health isn't all that engaging. Motivv changes that — by meeting your members inside the games they already play."
        primary={{ label: "Get a demo", href: "/demo" }}
        secondary={{ label: "See the games", href: "/#games" }}
        artworkEmoji="💚"
        artworkLabel="A heart representing healthier engagement"
      />

      <FeatureCardsGrid
        eyebrow="What you get"
        heading="Health engagement requires interaction. We've made it inevitable."
        description="The needs of healthcare compete with how people actually spend time on their phones — and right now, healthcare is losing. The appeal of games maximizes your reach, increasing adoption and utilization to:"
        cards={FEATURE_CARDS}
      />

      <StatsStrip
        heading="Members tell us this is the modern benefit they actually want."
        stats={STATS}
      />

      <FeatureCardsGrid
        heading="Built around how your organization works."
        description="Motivv is a turnkey, white-label suite of games and content that drops into your existing benefits experience. We integrate with your member data, drive personalized missions, and report back the engagement you've never been able to measure."
        cards={[
          {
            icon: "🚀",
            title: "Launch in weeks",
            body: "A pre-built game library and onboarding flow means you don't need to build a thing — you brand it, we deploy it.",
          },
          {
            icon: "🎯",
            title: "Personalized missions",
            body: "Drive members toward the actions you care about: PCP visits, screenings, app downloads, surveys — all rewarded in-game.",
          },
          {
            icon: "🛡️",
            title: "HIPAA & HiTRUST aligned",
            body: "Assessed against HIPAA, HITECH, and aligned with NIST. Member data is handled with the highest standard commercially available.",
          },
        ]}
      />

      <AudienceFinalCta
        heading="Give your members an experience they'll actually use."
        subhead="Let's launch an engagement campaign customized to your organizational goals."
        primary={{ label: "Get a demo", href: "/demo" }}
        secondary={{ label: "Talk to sales", href: "mailto:help@motivvhealthstudios.com" }}
      />
    </>
  );
}
