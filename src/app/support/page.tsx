import type { Metadata } from "next";
import Link from "next/link";

import { AudienceHero } from "../_sections/audience/hero";
import { FeatureCardsGrid } from "../_sections/audience/feature-cards";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Need help with a Motivv game, your account, or your activation code? Here's how to reach the team.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <>
      <AudienceHero
        eyebrow="Help center"
        headline="How can we help?"
        subhead="Most questions are answered in the FAQ on the homepage. For anything else, the team replies to email within one business day."
        primary={{ label: "Email support", href: "mailto:help@motivvhealthstudios.com" }}
        secondary={{ label: "Read the FAQ", href: "/#faq" }}
        artworkEmoji="🤝"
        artworkLabel="A handshake representing support"
      />

      <FeatureCardsGrid
        eyebrow="Common topics"
        heading="What people usually need."
        cards={[
          {
            icon: "🔑",
            title: "Activation codes",
            body: "Your activation code is in the welcome materials from your health plan. If you can't find it, your plan's member services team can re-send it.",
          },
          {
            icon: "🎮",
            title: "Game issues",
            body: "If a specific game crashes or won't load, email us with the game name, your device, and the OS version. We'll dig in.",
          },
          {
            icon: "👤",
            title: "Account & login",
            body: "Forgot your password? Need to update your email? Email support and we'll help reset or update your account.",
          },
          {
            icon: "🎁",
            title: "Rewards questions",
            body: "Questions about ticket balances, prize drawings, or reward redemption - we'll get them answered.",
          },
        ]}
      />

      <section className="bg-brand-teal-700 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Still need help?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Email{" "}
            <Link
              href="mailto:help@motivvhealthstudios.com"
              className="font-semibold text-brand-mint-300 underline-offset-4 hover:underline"
            >
              help@motivvhealthstudios.com
            </Link>{" "}
            with as much detail as you can - game name, device, what happened - and we&apos;ll take it from there.
          </p>
        </div>
      </section>
    </>
  );
}
