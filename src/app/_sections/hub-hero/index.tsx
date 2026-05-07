import Image from "next/image";

import type { AppRecord, HomeContent, PartnerRecord } from "@/lib/content";
import { ActivationCodePill } from "@/app/_components/activation-code-pill";
import { CtaLink } from "@/app/_components/cta";
import { StoreBadges } from "@/app/_components/store-badges";

type Props = {
  hero: HomeContent["hero"];
  apps: AppRecord[];
  partner: PartnerRecord | null;
};

export function HubHero({ hero, apps, partner }: Props) {
  const eyebrow = partner ? partner.heroEyebrow : hero.eyebrow;
  const headline = partner ? partner.heroHeadline : hero.headline;
  const subhead = partner ? partner.heroSubhead : hero.subhead;
  const collageApps = apps.filter((a) => a.featured).slice(0, 4);
  const fillerApps = apps.filter((a) => !a.featured).slice(0, 4 - collageApps.length);
  const showcase = [...collageApps, ...fillerApps].slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-grayscale-50 pb-24 pt-12 md:pb-32 md:pt-20">
      <BackgroundDecor />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-7">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-mint-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-mint-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-mint-500" />
            {eyebrow}
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-brand-teal-700 sm:text-6xl md:text-7xl">
            {headline}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-grayscale-600">{subhead}</p>

          {partner ? (
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <ActivationCodePill code={partner.activationCode} />
              <span className="text-sm text-grayscale-500">earns {partner.rewardCurrency}</span>
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <CtaLink href="#games">{hero.primaryCtaLabel}</CtaLink>
            <CtaLink href={hero.secondaryCtaHref} variant="secondary">
              {hero.secondaryCtaLabel}
            </CtaLink>
          </div>

          <div className="space-y-3 pt-3">
            <p className="text-sm font-medium text-grayscale-500">Or grab one straight from the store:</p>
            <StoreBadges variant="dark" />
          </div>
        </div>

        <HeroCollage apps={showcase} />
      </div>
    </section>
  );
}

function BackgroundDecor() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-brand-mint-200/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full bg-brand-sky-200/70 blur-3xl"
      />
    </>
  );
}

function HeroCollage({ apps }: { apps: AppRecord[] }) {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-mint-200/70 via-white to-brand-sky-200/60 blur-2xl" />
      <div className="relative grid grid-cols-2 gap-4 rounded-[2.5rem] bg-white p-5 shadow-2xl ring-1 ring-grayscale-200/70 sm:p-7">
        {apps.map((app, idx) => (
          <div
            key={app.slug}
            className={[
              "group relative overflow-hidden rounded-3xl shadow-md ring-1 ring-grayscale-200/60",
              idx % 2 === 0 ? "translate-y-0" : "translate-y-3",
            ].join(" ")}
          >
            <Image
              src={app.iconUrl}
              alt={`${app.name} app icon`}
              width={400}
              height={400}
              className="h-full w-full object-cover"
              priority={idx < 2}
            />
            <div className="absolute inset-x-2 bottom-2 rounded-xl bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand-teal-700 shadow-sm backdrop-blur">
              {app.name}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs font-medium uppercase tracking-wider text-grayscale-500">
        Eleven games. One login.
      </p>
    </div>
  );
}
