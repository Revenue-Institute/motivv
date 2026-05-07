import type { Metadata } from "next";

import { AudienceHero } from "../_sections/audience/hero";
import { FeatureCardsGrid } from "../_sections/audience/feature-cards";
import { AudienceFinalCta } from "../_sections/audience/final-cta";

export const metadata: Metadata = {
  title: "For game developers",
  description:
    "Put your games into the hands of a built-in audience on a health journey. Motivv removes ads, adds revenue, and handles distribution.",
  alternates: { canonical: "/developers" },
};

const FEATURES = [
  {
    icon: "🚫",
    title: "No more ads",
    body: "Your players never see a third-party ad. We replace ad revenue with a sustainable, member-driven model — and the game stays free.",
  },
  {
    icon: "💸",
    title: "A real revenue stream",
    body: "Get paid every time your game is played. Predictable, recurring revenue tied to engagement, not impressions.",
  },
  {
    icon: "👥",
    title: "Built-in audience",
    body: "We bring your game to a robust, engaged member base on day one — no UA spend, no app-store roulette.",
  },
  {
    icon: "🛠️",
    title: "Easy integration",
    body: "Implementing Motivv into your game is straightforward. Our team works alongside yours for any technical support.",
  },
];

export default function DevelopersPage() {
  return (
    <>
      <AudienceHero
        eyebrow="For game developers"
        headline="We'd love to talk about your games."
        subhead="Motivv is a platform that puts your games in front of an engaged, built-in audience on their health journey — with no ads, real revenue, and zero distribution headaches."
        primary={{ label: "Get a demo", href: "/demo" }}
        secondary={{ label: "Email us", href: "mailto:help@motivvhealthstudios.com?subject=Motivv%20developer%20partnership" }}
        artworkEmoji="🎮"
        artworkLabel="A game controller representing developer partnerships"
      />

      <FeatureCardsGrid
        eyebrow="Why partner with Motivv"
        heading="A better deal for developers."
        cards={FEATURES}
      />

      <AudienceFinalCta
        heading="Tell us about your games."
        subhead="We'll set up a call and walk through how the partnership works."
        primary={{ label: "Get a demo", href: "/demo" }}
        secondary={{
          label: "Email us",
          href: "mailto:help@motivvhealthstudios.com?subject=Motivv%20developer%20partnership",
        }}
      />
    </>
  );
}
