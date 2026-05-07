import Link from "next/link";

import { getHomeContent } from "@/lib/content";

import { StoreBadges } from "../store-badges";

export async function Footer() {
  const home = await getHomeContent();
  const { footer } = home;

  return (
    <footer className="bg-brand-teal-700 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl font-extrabold tracking-tight">
              motivv<span className="text-brand-mint-400">.</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              {footer.tagline}
              <br />
              {footer.pitch}
            </p>
            <div className="mt-6">
              <StoreBadges
                iosHref={footer.appStoreLinks.ios}
                androidHref={footer.appStoreLinks.android}
                variant="dark"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ComplianceBadge label="HIPAA" />
              <ComplianceBadge label="HiTRUST" />
              <ComplianceBadge label="HITECH" />
              <ComplianceBadge label="NIST" />
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition hover:text-brand-mint-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>{footer.legal.copyright}</p>
          <p className="flex items-center gap-2">
            <OhioMark />
            {footer.legal.locality}
          </p>
        </div>
      </div>
    </footer>
  );
}

function ComplianceBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80 ring-1 ring-white/15">
      {label}
    </span>
  );
}

function OhioMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      role="img"
      aria-label="Ohio"
      fill="currentColor"
    >
      <path d="M5 4h6v3h7v4h-2v6h-4v3H5v-4H4v-5h1V4z" />
    </svg>
  );
}
