type Stat = { percent: string; label: string };

type Props = {
  heading?: string;
  stats: Stat[];
};

export function StatsStrip({ heading, stats }: Props) {
  return (
    <section className="bg-grayscale-50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {heading ? (
          <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-extrabold tracking-tight text-brand-teal-700 sm:text-4xl">
            {heading}
          </h2>
        ) : null}
        <ul
          className={[
            "grid gap-5",
            heading ? "mt-12" : "",
            stats.length === 4
              ? "md:grid-cols-2 lg:grid-cols-4"
              : "md:grid-cols-3",
          ].join(" ")}
        >
          {stats.map((stat) => (
            <li
              key={stat.percent + stat.label}
              className="rounded-3xl bg-white p-7 text-center ring-1 ring-grayscale-200/60"
            >
              <p className="font-display text-5xl font-extrabold tracking-tight text-brand-mint-600 sm:text-6xl">
                {stat.percent}
              </p>
              <p className="mt-3 text-base leading-relaxed text-grayscale-600">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
