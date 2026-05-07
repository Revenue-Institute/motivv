import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  productionUrl: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, lastUpdated, productionUrl, children }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <header className="border-b border-grayscale-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-brand-teal-700 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-grayscale-500">Last updated {lastUpdated}</p>
      </header>
      <div className="prose prose-slate mt-8 max-w-none text-grayscale-600 prose-headings:font-display prose-headings:text-brand-teal-700 prose-a:text-brand-mint-600 prose-a:no-underline hover:prose-a:underline">
        {children}
      </div>
      <aside className="mt-12 rounded-3xl bg-brand-mint-50 p-6 text-sm text-grayscale-600 ring-1 ring-brand-mint-200">
        <p>
          The official, signed legal copy is published at{" "}
          <Link
            href={productionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-mint-700 hover:underline"
          >
            {productionUrl.replace(/^https?:\/\//, "")}
          </Link>
          . This rebuild will adopt the same text once legal sign-off is in place.
        </p>
      </aside>
    </article>
  );
}
