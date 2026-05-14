import type { Metadata } from "next";

import { LegalPage } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "Rewards Program Terms & Conditions",
  alternates: { canonical: "/rewards-program-terms-and-conditions" },
};

export default function RewardsTermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Rewards Program Terms & Conditions"
      lastUpdated="May 2026"
      productionUrl="https://motivvhealthstudios.com/rewards-program-terms-and-conditions"
    >
      <p>
        These Rewards Program Terms govern how you earn, view, and redeem rewards through Motivv
        Health Studios games. The text below is a placeholder while legal review of the rebuilt
        site is in flight - the signed terms remain in effect at the production URL listed below
        until this page is republished.
      </p>
      <h2>Eligibility</h2>
      <p>
        The Rewards Program is available to eligible members of participating health plans, age 18
        and over, who have registered a Motivv account using a valid activation code.
      </p>
      <h2>Earning rewards</h2>
      <p>
        Members earn tickets by playing games, completing personalized missions, and answering
        health trivia. Tickets may be entered into prize drawings or redeemed for plan-specific
        rewards (for example, CARE Card credits) per your plan&apos;s configuration.
      </p>
      <h2>Drawings & odds</h2>
      <p>
        Prize drawings, where applicable, are conducted at intervals communicated within the games.
        Odds of winning depend on the number of entries received. No purchase necessary; void where
        prohibited.
      </p>
      <h2>Plan-specific terms</h2>
      <p>
        Specific reward currencies (such as CARE Card credits) and redemption rules are governed by
        your participating health plan and may vary by plan.
      </p>
      <h2>Changes & termination</h2>
      <p>
        We may modify or end the Rewards Program at any time, with notice provided through the
        games. Earned rewards remain redeemable for at least the period required by applicable law.
      </p>
    </LegalPage>
  );
}
