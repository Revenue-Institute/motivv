import type { Metadata } from "next";

import { LegalPage } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="May 2026"
      productionUrl="https://motivvhealthstudios.com/terms-of-service"
    >
      <p>
        These Terms of Service govern your use of Motivv Health Studios games and services. The
        text below is a placeholder while legal review of the rebuilt site is in flight - the
        signed terms remain in effect at the production URL listed below until this page is
        republished.
      </p>
      <h2>Eligibility</h2>
      <p>
        Motivv Health Studios games are available only to eligible members of participating health
        plans, age 18 and over. You must have an activation code provided by your health plan in
        order to register.
      </p>
      <h2>Account & login</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account credentials and for
        all activity that occurs under your account.
      </p>
      <h2>Acceptable use</h2>
      <p>
        You agree not to use Motivv games or services in any way that violates applicable law or
        infringes the rights of others, and not to attempt to circumvent any technical measures
        intended to limit or protect access.
      </p>
      <h2>Termination</h2>
      <p>
        We may suspend or terminate access to Motivv games and services if you violate these terms
        or if your eligibility under a participating health plan ends.
      </p>
      <h2>Disclaimer</h2>
      <p>
        Motivv Health Studios games and services are provided as a benefit of your health plan and
        are not a substitute for professional medical advice, diagnosis, or treatment.
      </p>
    </LegalPage>
  );
}
