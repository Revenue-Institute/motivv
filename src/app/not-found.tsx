import { CtaLink } from "./_components/cta";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-var(--header-height))] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">404</p>
      <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-brand-teal-700 sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-grayscale-600">
        That page doesn&apos;t exist — but plenty of games do. Head back home to browse the catalog.
      </p>
      <div className="mt-8">
        <CtaLink href="/">Back to home</CtaLink>
      </div>
    </section>
  );
}
