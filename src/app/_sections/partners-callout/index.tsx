import type { HomeContent } from "@/lib/content";
import { CtaLink } from "@/app/_components/cta";

type Props = {
  content: HomeContent["partnersCallout"];
};

export function PartnersCallout({ content }: Props) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 rounded-[2.5rem] bg-gradient-to-br from-brand-sky-50 via-white to-brand-mint-50 p-10 ring-1 ring-grayscale-200/60 md:grid-cols-[1.4fr_1fr] md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky-500">
              {content.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-teal-700 sm:text-4xl">
              {content.heading}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-grayscale-600">{content.body}</p>
          </div>
          <div className="flex justify-start md:justify-end">
            <CtaLink href={content.ctaHref} variant="primary">
              {content.ctaLabel}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
