import { CtaLink } from "@/app/_components/cta";

type Props = {
  heading: string;
  subhead?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function AudienceFinalCta({ heading, subhead, primary, secondary }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-teal-700 py-20 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-brand-mint-500/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          {heading}
        </h2>
        {subhead ? <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{subhead}</p> : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CtaLink href={primary.href}>{primary.label}</CtaLink>
          {secondary ? (
            <CtaLink href={secondary.href} variant="inverted">
              {secondary.label}
            </CtaLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
