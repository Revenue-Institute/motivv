import type { HomeContent } from "@/lib/content";

type Props = {
  content: HomeContent["trust"];
};

export function TrustStrip({ content }: Props) {
  return (
    <section className="bg-grayscale-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-grayscale-500">
          {content.heading}
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {content.badges.map((badge) => (
            <li
              key={badge.label}
              title={badge.description}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-teal-700 ring-1 ring-grayscale-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-mint-500" />
              {badge.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
