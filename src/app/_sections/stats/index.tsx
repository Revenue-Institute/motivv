import type { HomeContent } from "@/lib/content";

type Props = {
  content: HomeContent["stats"];
};

export function Stats({ content }: Props) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-extrabold tracking-tight text-brand-teal-700 sm:text-4xl">
          {content.heading}
        </h2>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {content.items.map((stat) => (
            <li
              key={stat.percent}
              className="rounded-3xl bg-gradient-to-br from-brand-mint-50 to-white p-8 text-center ring-1 ring-grayscale-200/60"
            >
              <p className="font-display text-6xl font-extrabold tracking-tight text-brand-mint-600">
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
