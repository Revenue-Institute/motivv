import type { AppRecord, HomeContent } from "@/lib/content";

import { AppGridClient } from "./filter-chips";

type Props = {
  intro: HomeContent["appGridIntro"];
  apps: AppRecord[];
};

export function AppGrid({ intro, apps }: Props) {
  return (
    <section id="games" className="bg-grayscale-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">
            {intro.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-brand-teal-700 sm:text-5xl">
            {intro.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-grayscale-600">{intro.description}</p>
        </header>

        <AppGridClient apps={apps} />
      </div>
    </section>
  );
}
