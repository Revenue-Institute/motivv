import type { HomeContent } from "@/lib/content";

type Props = {
  content: HomeContent["faq"];
};

export function HubFaq({ content }: Props) {
  return (
    <section className="bg-grayscale-50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-display text-4xl font-extrabold tracking-tight text-brand-teal-700 sm:text-5xl">
          {content.heading}
        </h2>
        <ul className="mt-12 space-y-3">
          {content.items.map((item) => (
            <li key={item.question}>
              <details className="group rounded-3xl bg-white p-6 ring-1 ring-grayscale-200/70 transition open:ring-brand-mint-200">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <span className="font-display text-lg font-bold text-brand-teal-700 sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-mint-100 text-brand-mint-700 transition group-open:rotate-45"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 1.5v11M1.5 7h11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-grayscale-600">{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
