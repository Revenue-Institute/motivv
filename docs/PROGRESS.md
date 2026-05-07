# Progress Log

Append-only running log. Most recent at top.

## 2026-05-07 — Phases 1–3 implementation landed

The new homepage hub builds clean and serves correctly in both public and partner modes. Production-grade scaffolding is in place; only the BaseHub schema migration and real AppsFlyer OneLink URLs remain before launch.

**Verified end-to-end:**
- `pnpm next build` — compiles in ~1.6s, zero TypeScript errors, zero lint warnings, generates `/`, `/_not-found`, `/sitemap.xml`
- `curl -I http://localhost:3137/acoh` → `HTTP/1.1 308 Permanent Redirect` with `Location: /?acoh=1`
- `curl http://localhost:3137/` → `HTTP 200`, rich JSON-LD (Organization + 11 SoftwareApplication entries), Plus Jakarta Sans wired, hero copy "Pick a game"
- `curl http://localhost:3137/?acoh=1` → `HTTP 200`, renders ACTIVATION CODE pill + `ACOH`, CARE Card rewards copy, Member Services phone `1-833-764-7700`, `noindex` meta

**What was built:**
- Brand palette baked into `src/app/globals.css` as static CSS variables — primary mint `#48be9a`, secondary deep teal `#174252`, sky blue `#6fa7c8`, slate body. Tailwind theme references the same vars so the template's existing `bg-surface-primary`/`text-text-primary` tokens automatically map to Motivv brand. Added explicit `brand-mint`, `brand-teal`, `brand-sky` color scales for new components.
- Plus Jakarta Sans wired via `next/font/google` (variable + display variants).
- `src/lib/content/{types,data,index}.ts` — typed content provider seeded with all 11 apps (icons from Apple's CDN) and the ACOH partner record. Async API (`getApps`, `getHomeContent`, `getPartnerBySlug`) so swapping in BaseHub later is a single-file change.
- `src/lib/partner.ts` — server-side resolver that reads `searchParams` and returns a `PartnerRecord | null`. Honors both `?acoh=1` (flag form) and `?partner=acoh` (canonical form).
- (removed) `src/lib/analytics.ts` and `_components/gtm.tsx` — GTM was added speculatively from the production site's scripts. User explicitly declined; AppsFlyer OneLink handles the conversion attribution that matters. No web analytics ships in v1.
- `next.config.ts` — 308 permanent redirect `/acoh → /?acoh=1`. Added App Store CDN hostnames (`is{1..5}-ssl.mzstatic.com`) for `next/image`.
- New homepage hub at `src/app/page.tsx` composes:
  - **HubHero** — partner-aware copy + activation code pill, dual store badges, app-icon collage of 4 featured games
  - **AppGrid** — filter chips (All · Puzzle · Word · Card · Action) with live counts; client island manages state, server-renders cards with `next/image` icons. Each card uses one **AppsFlyer OneLink CTA** (placeholder URLs pending real OneLinks)
  - **HowItWorks** — 3 numbered steps; Member Services phone block injected only in partner mode
  - **WhyMotivv** — 4 alternating image+text rows
  - **Stats** — 91 / 90 / 93 % cards
  - **TrustStrip** — HIPAA · HiTRUST · HITECH · NIST pills
  - **PartnersCallout** — B2B soft CTA → `/demo`
  - **HubFaq** — native `<details>`/`<summary>` accordion (zero JS, accessible by default), 4 cleaned-up Qs
  - **FinalCta** — deep-teal banner; partner-specific download links + activation code in partner mode
- New simplified Header (sticky, blurred translucent, anchors + Sign in + Register pill) and Footer (deep teal with sitemap columns, app store badges, compliance pills, Ohio bug, copyright).
- JSON-LD on the homepage: `Organization` + 11 `SoftwareApplication` entries (passes Google Rich Results expectations).
- `noindex` meta when partner mode is active.
- `not-found.tsx` and `sitemap.ts` rewritten — no longer depend on BaseHub plumbing.
- Unused `/blog` and `/changelog` template routes deleted.
- Repo `name` → `motivv-marketing-site`; README replaced with project-specific content.

**Brand spelling:** "Motivv" canonical everywhere except the legal entity in the footer copyright (`© Motivve Health Studios, LLC`) and the App Store seller name from iTunes Lookup.

**What did NOT change** (intentional — kept as reference for future BaseHub migration):
- Template `_sections/*` (hero, features/*, callouts, pricing, testimonials, faq, etc.)
- Template `_components/code-snippet`, `rich-text`, `theme-switcher`, `tracked_button`, `page-view`, `form-layout`, `labeled-input`, `select`
- `basehub-types.d.ts`, `basehub.config.ts`, `src/lib/basehub/*`, `src/context/basehub-theme-provider.tsx`
- `src/common/*` primitives

These are unreachable from the new homepage but stay in the tree as the migration target when the BaseHub schema work happens.

**Open items still blocking launch:**
1. Confirm legal entity name for footer copyright (current rendering: `Motivve Health Studios, LLC`)
2. Real AppsFlyer OneLink URLs for all 11 apps (placeholders currently route directly to App Store)
3. Confirm whether `delivr.com/27xg9` and `delivr.com/2s39p` short links survive in partner mode or get replaced by partner-specific OneLinks
4. Decide whether to migrate the typed content provider into BaseHub (Phase 1 schema work in `docs/TASKS.md`) before launch, or ship with the in-repo data file
5. Decide on Android coverage per app (currently both store badges render; OneLink handles device routing transparently)

**Next step**: hand the site off for design review (Headspace-tone copy + visual rhythm) and confirm the open items above. Once OneLinks land, swap into `src/lib/content/data.ts`.

---

## 2026-05-07 — Project kickoff

**State**: repo is the unmodified `basehub-marketing-website-template` (Next.js 16 + React 19 + Tailwind 4 + BaseHub). No code changes yet. Production site at motivvhealthstudios.com is SvelteKit.

**Decisions locked**:
- Single-page hub showcasing all 11 Motivv games
- Primary conversion: App Store / Google Play downloads
- BaseHub stays as the CMS
- `/acoh` becomes `/?acoh` (partner-mode query param), with a 308 redirect from the old URL preserving existing collateral
- Canonical brand spelling is **Motivv** (single `v`)
- App grid is filterable by genre
- Each app uses one **AppsFlyer OneLink** CTA (no separate Apple/Google badges per card)
- Typography upgrades from Roboto for more personality (default: Plus Jakarta Sans, revisit before launch)
- Android coverage uses placeholders pending verification

**Research completed**:
- Full content scrape of `motivvhealthstudios.com/acoh` (every section, image, link, form, styling cue, tech fingerprint)
- iTunes Lookup API for all 11 apps (icons, genres, bundle IDs, descriptions cached at `/tmp/motivv-apps.json`)
- Brand palette extracted from production CSS bundle: primary `#48BE9A`, secondary `#174252`, accent `#6fa7c8`, body `#4d6278`, surface `#F6F6F7`, neutral `#DEDEDE`

**Docs authored**:
- `docs/SPEC.md` — what we're building
- `docs/ARCHITECTURE.md` — how we're building it (routing, BaseHub model, theme, OneLink, analytics)
- `docs/TASKS.md` — phased build plan (Phases 0–4 + stretch)
- `docs/QA_CHECKLIST.md` — pre-launch verification
- `docs/PROGRESS.md` — this file
