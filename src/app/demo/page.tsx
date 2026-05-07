import type { Metadata } from "next";
import Link from "next/link";

import { AudienceHero } from "../_sections/audience/hero";
import { FeatureCardsGrid } from "../_sections/audience/feature-cards";

export const metadata: Metadata = {
  title: "Get a demo",
  description:
    "Schedule a Motivv demo. We'll walk through how members engage, how partners launch, and what your campaign looks like.",
  alternates: { canonical: "/demo" },
};

const SUBJECT = encodeURIComponent("Motivv demo request");
const BODY = encodeURIComponent(
  `Hi Motivv team,

I'd like to learn more about how Motivv can engage our members.

About us:
- Organization:
- Role:
- Membership size:
- What you'd like to see in the demo:

Best,
`,
);
const MAILTO = `mailto:help@motivvhealthstudios.com?subject=${SUBJECT}&body=${BODY}`;

export default function DemoPage() {
  return (
    <>
      <AudienceHero
        eyebrow="Let's talk"
        headline="Let us show you the platform."
        subhead="A 30-minute walkthrough of how Motivv drops into your existing benefits experience — including the games library, onboarding, missions, and the reporting you've been missing."
        primary={{ label: "Email the team", href: MAILTO }}
        secondary={{ label: "Back to home", href: "/" }}
        artworkEmoji="📅"
        artworkLabel="A calendar representing scheduling a demo"
      />

      <FeatureCardsGrid
        eyebrow="What to expect"
        heading="Thirty minutes well spent."
        cards={[
          {
            icon: "🎬",
            title: "Live walkthrough",
            body: "We share screen and walk through the full member experience — onboarding, gameplay, missions, rewards.",
          },
          {
            icon: "📊",
            title: "Reporting tour",
            body: "See the engagement data you'd actually get back — by game, by cohort, by mission.",
          },
          {
            icon: "🚀",
            title: "Launch plan",
            body: "We talk through what a 60-day pilot looks like, including white-label timing and member comms.",
          },
        ]}
      />

      <section className="bg-brand-teal-700 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Prefer a different channel?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Email{" "}
            <Link
              href="mailto:help@motivvhealthstudios.com"
              className="font-semibold text-brand-mint-300 underline-offset-4 hover:underline"
            >
              help@motivvhealthstudios.com
            </Link>{" "}
            and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>
    </>
  );
}
