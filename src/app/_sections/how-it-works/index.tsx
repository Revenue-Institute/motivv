import type { HomeContent, PartnerRecord } from "@/lib/content";

type Props = {
  content: HomeContent["howItWorks"];
  partner: PartnerRecord | null;
};

export function HowItWorks({ content, partner }: Props) {
  return (
    <section className="border-y border-grayscale-100 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-extrabold tracking-tight text-brand-teal-700 sm:text-5xl">
          {content.heading}
        </h2>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {content.steps.map((step, idx) => (
            <li
              key={step.title}
              className="relative flex flex-col gap-4 rounded-3xl bg-grayscale-50 p-7 ring-1 ring-grayscale-200/60"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-mint-500 font-display text-base font-extrabold text-white">
                {idx + 1}
              </div>
              <h3 className="font-display text-xl font-bold text-brand-teal-700">{step.title}</h3>
              <p className="text-grayscale-600">{step.body}</p>
            </li>
          ))}
        </ol>

        {partner ? <MemberServicesBlock partner={partner} /> : null}
      </div>
    </section>
  );
}

function MemberServicesBlock({ partner }: { partner: PartnerRecord }) {
  return (
    <div className="mt-10 flex flex-col gap-2 rounded-3xl bg-brand-mint-50 p-6 text-sm text-brand-teal-700 ring-1 ring-brand-mint-200 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="font-semibold">Need help getting started?</p>
        <p className="mt-1 text-grayscale-600">
          Call {partner.shortName} Member Services 24/7 - we&apos;ll walk you through it.
        </p>
      </div>
      <div className="flex flex-col text-right md:items-end">
        <a
          href={`tel:${partner.memberServicesPhone.replace(/[^0-9+]/g, "")}`}
          className="font-display text-2xl font-bold text-brand-teal-700 hover:text-brand-mint-600"
        >
          {partner.memberServicesPhone}
        </a>
        <span className="text-xs text-grayscale-500">TTY {partner.ttyPhone}</span>
      </div>
    </div>
  );
}
