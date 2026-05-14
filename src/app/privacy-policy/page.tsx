import type { Metadata } from "next";

import { LegalPage } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="May 2026"
      productionUrl="https://motivvhealthstudios.com/privacy-policy"
    >
      <p>
        This Privacy Policy describes how Motivv Health Studios collects, uses, and protects
        information when you use our games and services. The text below is a placeholder while
        legal review of the rebuilt site is in flight - the signed policy remains in effect at the
        production URL listed below until this page is republished.
      </p>
      <h2>Information we collect</h2>
      <p>
        We collect information you provide directly (email, password, member ID, activation code),
        information about your gameplay and engagement with health content, and limited device and
        diagnostic information needed to deliver the service.
      </p>
      <h2>How we use information</h2>
      <p>
        We use this information to operate the games, personalize your experience, deliver rewards,
        confirm your eligibility through your health plan, and improve the service.
      </p>
      <h2>HIPAA & HITECH</h2>
      <p>
        Motivv Health Studios is assessed against the requirements of the Health Insurance
        Portability and Accountability Act (HIPAA) and HITECH, and is certified by HiTRUST and
        aligned with NIST. We treat member information at the highest standard commercially
        available.
      </p>
      <h2>Sharing</h2>
      <p>
        We share information with your health plan as required to confirm eligibility, deliver
        rewards, and report on engagement at the population level. We do not sell personal
        information.
      </p>
      <h2>Your choices</h2>
      <p>
        You may update or delete your account information at any time by contacting{" "}
        <a href="mailto:help@motivvhealthstudios.com">help@motivvhealthstudios.com</a>.
      </p>
    </LegalPage>
  );
}
