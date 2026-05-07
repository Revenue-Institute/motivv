import type { Metadata } from "next";

import { AudienceHero } from "../_sections/audience/hero";
import { FeatureCardsGrid } from "../_sections/audience/feature-cards";
import { AudienceFinalCta } from "../_sections/audience/final-cta";

export const metadata: Metadata = {
  title: "For players",
  description:
    "Free mobile games that earn rewards. Pick anything from the catalog and play your way to better health.",
  alternates: { canonical: "/players" },
};

const FEATURES = [
  {
    icon: "🎯",
    title: "Find your game",
    body: "Pick anything from the catalog — puzzle, word, card, action. One login, every game.",
  },
  {
    icon: "🧠",
    title: "Fun trivia",
    body: "Earn tickets toward prize drawings by answering quick health trivia and learning along the way.",
  },
  {
    icon: "🎁",
    title: "Monthly prize drawings",
    body: "Play games, complete missions, answer trivia — and get entered into regular prize drawings.",
  },
  {
    icon: "🩺",
    title: "Helpful resources",
    body: "Quick access to the tools and resources you need on your health journey, when you need them.",
  },
];

export default function PlayersPage() {
  return (
    <>
      <AudienceHero
        eyebrow="For players"
        headline="Play your way to better health."
        subhead="Entirely free mobile games — never any ads — with chances to win prize drawings by answering trivia and completing personalized missions."
        primary={{ label: "Browse the games", href: "/#games" }}
        secondary={{ label: "How it works", href: "/healthcare" }}
        artworkEmoji="🕹️"
        artworkLabel="A game controller representing players"
      />

      <FeatureCardsGrid
        eyebrow="What's inside"
        heading="Eleven games. One login. Real rewards."
        cards={FEATURES}
      />

      <AudienceFinalCta
        heading="Think you're eligible?"
        subhead="Find a game and download it using the activation code in your Motivv communications."
        primary={{ label: "Browse the games", href: "/#games" }}
        secondary={{ label: "Read the FAQ", href: "/#faq" }}
      />
    </>
  );
}
