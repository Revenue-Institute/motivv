import type { HomeContent } from "@/lib/content";

type Props = {
  content: HomeContent["whyMotivv"];
};

const ROW_ARTWORK = [
  { from: "from-brand-mint-200", to: "to-brand-mint-50", emoji: "🎟️" },
  { from: "from-brand-sky-200", to: "to-brand-sky-50", emoji: "📱" },
  { from: "from-brand-mint-100", to: "to-brand-sky-50", emoji: "🧠" },
  { from: "from-brand-sky-100", to: "to-brand-mint-100", emoji: "❤️" },
] as const;

type Artwork = (typeof ROW_ARTWORK)[number];

function pickArtwork(idx: number): Artwork {
  return ROW_ARTWORK[idx % ROW_ARTWORK.length] as Artwork;
}

export function WhyMotivv({ content }: Props) {
  return (
    <section id="why-motivv" className="bg-grayscale-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-brand-teal-700 sm:text-5xl">
            {content.heading}
          </h2>
        </header>

        <div className="mt-16 space-y-12 md:space-y-20">
          {content.rows.map((row, idx) => {
            const reversed = idx % 2 === 1;
            const art = pickArtwork(idx);
            return (
              <div
                key={row.heading}
                className={[
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
                  reversed ? "lg:[direction:rtl]" : "",
                ].join(" ")}
              >
                <div className={reversed ? "lg:[direction:ltr]" : ""}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">
                    {row.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-teal-700 sm:text-4xl">
                    {row.heading}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-grayscale-600">{row.body}</p>
                </div>
                <div
                  className={[
                    "relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br shadow-xl ring-1 ring-grayscale-200/60",
                    art.from,
                    art.to,
                    reversed ? "lg:[direction:ltr]" : "",
                  ].join(" ")}
                  role="img"
                  aria-label={row.imageAlt}
                >
                  <div className="absolute inset-6 rounded-3xl bg-white/70 ring-1 ring-white/80 backdrop-blur" />
                  <span className="relative font-display text-7xl">{art.emoji}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
