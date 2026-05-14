import Link from "next/link";

import { CtaLink } from "../cta";

const NAV_LINKS = [
  { label: "Games", href: "/#games" },
  { label: "Why Motivv", href: "/#why-motivv" },
  { label: "For Partners", href: "/partner" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-grayscale-100 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-(--header-height) max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex items-center gap-2 text-brand-teal-700">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-grayscale-600 transition hover:text-brand-teal-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CtaLink href="/#games" size="md">
            Browse games
          </CtaLink>
        </div>
      </div>
    </header>
  );
}

function Wordmark() {
  return (
    <span className="font-display text-2xl font-extrabold tracking-tight text-brand-teal-700">
      motivv<span className="text-brand-mint-500">.</span>
    </span>
  );
}
