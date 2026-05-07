# Build Tasks

Phased plan. Check items off as they're completed; mirror status in `PROGRESS.md`.

Legend: `[ ]` open · `[~]` in progress · `[x]` done · `[?]` blocked / awaiting input

---

## Phase 0 — Foundations

- [x] Capture current `/acoh` content (full scrape archived in PR research)
- [x] Inventory all 11 apps via iTunes Lookup API
- [x] Extract brand hex palette from production CSS
- [x] Author `docs/SPEC.md`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/QA_CHECKLIST.md`, `docs/PROGRESS.md`
- [?] Confirm legal entity name for footer copyright (currently rendering `Motivve Health Studios, LLC`)
- [?] Confirm AppsFlyer OneLink delivery timeline (placeholders currently point to App Store URLs)
- [?] Confirm whether `delivr.com/27xg9` / `delivr.com/2s39p` short links survive in partner mode
- [x] Picked typography: Plus Jakarta Sans (revisit before launch)
- [x] Renamed `package.json` to `motivv-marketing-site`
- [x] Replaced root `README.md`

## Phase 1 — Content model + design tokens

- [?] Define BaseHub schema: `App`, `Partner`, `HomeContent`, `FaqItem`, `Stat`, `TrustBadge` (deferred — using typed in-repo provider for now)
- [?] Seed 11 `App` records in BaseHub (deferred — seeded in `src/lib/content/data.ts`)
- [?] Seed `Partner` record for `acoh` (deferred — seeded in `src/lib/content/data.ts`)
- [?] Seed `HomeContent` (deferred — in `src/lib/content/data.ts`)
- [x] Wired brand color tokens — baked into `src/app/globals.css` :root and exposed as Tailwind `brand-mint`, `brand-teal`, `brand-sky`
- [x] Plus Jakarta Sans via `next/font/google` (sans + display variants)
- [x] Added `src/lib/content/{types,data,index}.ts` (typed mock provider with async API mirroring future BaseHub fetchers)
- [x] Added `src/lib/partner.ts` (query-param → Partner resolver)

## Phase 2 — Homepage build

- [x] Removed `app/[[...slug]]/`; created `app/page.tsx` (server component)
- [x] Built sticky `header` (wordmark, anchors, sign-in, register pill)
- [x] Built `hero` with dual store badges, 4-icon app collage, partner overlay
- [x] Built `app-grid` section
  - [x] Filter chips (All / Puzzle / Word / Card / Action) — client island with live counts
  - [x] App card component (icon, name, genre tag, single OneLink CTA)
  - [x] Empty/no-match state
  - [x] `#games` anchor target
- [x] Built `how-it-works` (3 numbered steps; member-services phone block in partner mode)
- [x] Built `why-motivv` (4 alternating image+text rows)
- [x] Built `stats` (3 percent cards)
- [x] Built `trust-strip` (HIPAA / HITECH / HiTRUST / NIST pills)
- [x] Built `partners-callout` (B2B link to `/demo`)
- [x] Built `faq` (native `<details>` accordion, 4 items, typo fixed)
- [x] Built `final-cta` banner (deep teal; partner-specific download links + activation pill in partner mode)
- [x] Built `footer` (wordmark, app store badges, compliance pills, sitemap columns, Ohio bug, copyright)
- [x] Added JSON-LD: `Organization` + 11 `SoftwareApplication`

## Phase 3 — Partner mode (`/?acoh=1`)

- [x] Added `redirects()` in `next.config.ts` for `/acoh` → `/?acoh=1` (308 permanent)
- [x] Resolve partner from `searchParams` server-side
- [x] Conditional rendering in Hero, HowItWorks, FinalCta
- [x] Activation-code pill component (light + dark variants)
- [?] Partner-specific OneLink resolution (deferred — needs real OneLinks)
- [x] `noindex` meta when partner mode is active
- [?] Side-by-side QA against current `/acoh` (queued for design review)

## Phase 4 — Polish + launch

- [ ] OG image generation (single static OG image for v1 is fine)
- [ ] `app/sitemap.ts` regenerated; submit to Search Console
- [ ] Lighthouse pass: a11y ≥ 95, perf ≥ 90, SEO = 100
- [ ] Manual a11y QA: keyboard nav, screen reader pass on hero + app grid + FAQ
- [ ] Browser matrix smoke test: latest Chrome/Safari/Firefox + iOS Safari + Android Chrome
- [ ] Run `pnpm build` clean (no TS errors, no lint errors)
- [ ] QA checklist (`docs/QA_CHECKLIST.md`) sign-off
- [ ] Cut PR; deploy preview; client review; ship to production

## Stretch (post-launch)

- [ ] Live App Store ratings via iTunes Lookup at build time
- [ ] Per-app detail pages (if conversion data justifies them)
- [ ] Additional partners (model already supports it)
- [ ] B2B lead capture form (`/demo`)
- [ ] Newsletter signup
- [ ] Localization (es-US first if member demographics warrant it)
