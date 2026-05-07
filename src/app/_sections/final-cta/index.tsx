import type { HomeContent, PartnerRecord } from "@/lib/content";
import { ActivationCodePill } from "@/app/_components/activation-code-pill";
import { StoreBadges } from "@/app/_components/store-badges";

type Props = {
  content: HomeContent["finalCta"];
  partner: PartnerRecord | null;
};

export function FinalCta({ content, partner }: Props) {
  const iosHref = partner?.downloadShortLink;
  const androidHref = partner?.downloadShortLink;

  return (
    <section className="relative overflow-hidden bg-brand-teal-700 py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-brand-mint-500/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-sky-500/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          {content.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">{content.body}</p>

        {partner ? (
          <div className="mt-8 flex justify-center">
            <ActivationCodePill code={partner.activationCode} variant="dark" />
          </div>
        ) : null}

        <div className="mt-10 flex justify-center">
          <StoreBadges variant="dark" iosHref={iosHref} androidHref={androidHref} />
        </div>

        {partner ? (
          <p className="mt-6 text-sm text-white/60">
            <a
              href={partner.enrollUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              {partner.enrollLabel}
            </a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
