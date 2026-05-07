import { CtaLink } from "@/app/_components/cta";

type CtaSpec = { label: string; href: string };

type Props = {
  eyebrow: string;
  headline: string;
  subhead: string;
  primary?: CtaSpec;
  secondary?: CtaSpec;
  artworkEmoji?: string;
  artworkLabel?: string;
};

export function AudienceHero({
  eyebrow,
  headline,
  subhead,
  primary,
  secondary,
  artworkEmoji,
  artworkLabel,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-grayscale-50 pb-20 pt-12 md:pb-28 md:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-mint-200/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full bg-brand-sky-200/70 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-mint-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-mint-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-mint-500" />
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-teal-700 sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-grayscale-600">{subhead}</p>
          {(primary || secondary) && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {primary ? <CtaLink href={primary.href}>{primary.label}</CtaLink> : null}
              {secondary ? (
                <CtaLink href={secondary.href} variant="secondary">
                  {secondary.label}
                </CtaLink>
              ) : null}
            </div>
          )}
        </div>
        {artworkEmoji ? (
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-mint-200/70 via-white to-brand-sky-200/60 blur-2xl" />
            <div
              role="img"
              aria-label={artworkLabel ?? ""}
              className="relative flex aspect-square items-center justify-center rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-grayscale-200/70"
            >
              <span className="font-display text-9xl">{artworkEmoji}</span>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
