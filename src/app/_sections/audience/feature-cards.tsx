type FeatureCard = {
  icon: string;
  title: string;
  body: string;
};

type Props = {
  eyebrow?: string;
  heading: string;
  description?: string;
  cards: FeatureCard[];
};

export function FeatureCardsGrid({ eyebrow, heading, description, cards }: Props) {
  const columnsClass =
    cards.length === 4
      ? "lg:grid-cols-4"
      : cards.length === 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-2";

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-brand-teal-700 sm:text-5xl">
            {heading}
          </h2>
          {description ? (
            <p className="mt-4 text-lg leading-relaxed text-grayscale-600">{description}</p>
          ) : null}
        </header>

        <ul className={`mt-12 grid gap-5 sm:grid-cols-2 ${columnsClass}`}>
          {cards.map((card) => (
            <li
              key={card.title}
              className="rounded-3xl bg-grayscale-50 p-7 ring-1 ring-grayscale-200/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-mint-200 to-brand-mint-50 font-display text-2xl">
                {card.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-teal-700">
                {card.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-grayscale-600">{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
