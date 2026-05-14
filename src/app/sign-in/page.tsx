import type { Metadata } from "next";

import { AudienceHero } from "../_sections/audience/hero";
import { FeatureCardsGrid } from "../_sections/audience/feature-cards";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Motivv account inside any of the games.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/sign-in" },
};

export default function SignInPage() {
  return (
    <>
      <AudienceHero
        eyebrow="Sign in"
        headline="Sign in inside the game."
        subhead="One Motivv account works across the entire game library. Download any game and sign in with your email, password, and member ID - your progress and rewards travel with you."
        primary={{ label: "Browse the games", href: "/#games" }}
        secondary={{ label: "Need help?", href: "/support" }}
      />

      <FeatureCardsGrid
        eyebrow="What you need"
        heading="Sign-in essentials."
        cards={[
          {
            icon: "📧",
            title: "Your email & password",
            body: "The same ones you used when you registered. Forgot them? The support team can reset both.",
          },
          {
            icon: "🪪",
            title: "Your member ID",
            body: "Found on your health plan member card. Required at sign-in to confirm you're an eligible member.",
          },
          {
            icon: "🎟️",
            title: "Your activation code",
            body: "Only needed the first time you register - you don't need it for every sign-in after that.",
          },
        ]}
      />
    </>
  );
}
