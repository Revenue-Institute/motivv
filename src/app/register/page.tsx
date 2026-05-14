import type { Metadata } from "next";

import { ActivationCodePill } from "../_components/activation-code-pill";
import { AudienceHero } from "../_sections/audience/hero";
import { FeatureCardsGrid } from "../_sections/audience/feature-cards";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Create a Motivv account inside any of the games. One login, every game, all of your rewards.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/register" },
};

type SearchParams = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function RegisterPage({ searchParams }: SearchParams) {
  const params = await searchParams;
  const codeParam = params?.activation_code;
  const code = typeof codeParam === "string" ? codeParam.toUpperCase() : null;

  return (
    <>
      <AudienceHero
        eyebrow="Get started"
        headline="Register inside the game."
        subhead="Pick any Motivv game from the catalog, download it, and tap Register. The first game you download walks you through creating your account - after that you're set across the whole library."
        primary={{ label: "Browse the games", href: "/#games" }}
        secondary={{ label: "How it works", href: "/players" }}
        artworkEmoji="✨"
        artworkLabel="A sparkle representing a new account"
      />

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {code ? (
            <div className="mb-10 flex flex-col items-center gap-3 rounded-3xl bg-brand-mint-50 p-6 text-center ring-1 ring-brand-mint-200">
              <p className="text-sm font-medium text-grayscale-600">
                We&apos;ll pre-fill your activation code:
              </p>
              <ActivationCodePill code={code} />
              <p className="text-xs text-grayscale-500">
                Just download a game and the code travels with you.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <FeatureCardsGrid
        eyebrow="What you'll need"
        heading="Three things to register."
        cards={[
          {
            icon: "🎟️",
            title: "Your activation code",
            body: "From the welcome materials your health plan sent you. Not sure where it is? Your plan's member services team can re-send it.",
          },
          {
            icon: "📧",
            title: "An email & password",
            body: "Pick anything - this becomes your login across every Motivv game.",
          },
          {
            icon: "🪪",
            title: "Your member ID",
            body: "Found on your health plan member card. Required so we can confirm eligibility.",
          },
        ]}
      />
    </>
  );
}
