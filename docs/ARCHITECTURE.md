# Architecture

## Stack (already in repo)

- Next.js 16.0.9 (App Router, Turbopack dev)
- React 19.2.3 + TypeScript ^5.4.5
- Tailwind CSS 4 with `@tailwindcss/postcss`
- BaseHub ^9.5.2 (CMS + typed client; `basehub-types.d.ts` regenerates on `basehub` build step)
- Radix UI primitives, `next-themes`, `embla-carousel`, `sass`

`pnpm dev` runs `basehub dev` and `next dev --turbopack` concurrently.

## Routing

The whole product is one route. Partner mode is a query-param overlay, not a separate page.

| URL | Behavior |
|---|---|
| `/` | Public hub. Reads no partner context. |
| `/?acoh` | Public hub with ACOH partner overlay (read from BaseHub `Partner` record matching slug `acoh`). |
| `/?partner=acoh` | Equivalent canonical form. Both shapes are honored. |
| `/acoh` | **308 redirect** to `/?acoh` via `next.config.ts` `redirects()`. Preserves all existing print/QR/short-link traffic. |
| `/sign-in`, `/register`, `/demo`, `/healthcare`, `/players`, `/developers`, `/contact`, `/support`, `/terms-of-service`, `/privacy-policy`, `/rewards-program-terms-and-conditions` | **Out of scope**. Either kept on the existing system or stubbed as separate routes later. |

Partner detection lives in a shared util (`src/lib/partner.ts`) that reads `searchParams` server-side and resolves to a `Partner` record from BaseHub or `null`. The homepage component receives `partner` as a prop and conditionally renders the partner overlays.

The catch-all template route `app/[[...slug]]/page.tsx` is removed (we don't need template's CMS-driven page mode).

## BaseHub content model

New types to model in BaseHub:

```
App
  name: string
  slug: string                       (e.g. "picture-puzzle")
  iconImage: image
  genre: enum(Puzzle | Word | Card | Action)
  shortDescription: string           (1 sentence for card)
  longDescription: rich text         (optional; not used in v1)
  appsFlyerOneLink: string           (per-app OneLink URL)
  iosAppStoreUrl: string             (canonical Apple URL — for sitemap/JSON-LD)
  googlePlayUrl: string?             (nullable; placeholder until verified)
  featured: boolean                  (for hero collage selection)
  order: number

Partner
  name: string                       ("AmeriHealth Caritas Ohio")
  slug: string                       ("acoh")
  shortName: string                  ("AmeriHealth")
  logoLight: image                   (for use on light bg)
  logoDark: image                    (for use on dark bg)
  activationCode: string             ("ACOH")
  downloadShortLink: string          ("https://delivr.com/27xg9")
  signupShortLink: string            ("https://delivr.com/2s39p")
  enrollUrl: string                  ("https://www.amerihealthcaritasoh.com/member/enroll")
  memberServicesPhone: string        ("1-833-764-7700")
  ttyPhone: string                   ("1-833-889-6446")
  rewardCurrency: string             ("CARE Card rewards")
  heroHeadlineOverride: string?
  heroSubheadOverride: string?
  accentColor: string?               (hex; tints partner co-branding subtly)

HomeContent (singleton)
  hero: { headline, subhead, primaryCta, secondaryCta? }
  appGridIntro: { eyebrow, heading, description }
  howItWorks: [{ icon, title, body } × 3]
  features: [{ image, eyebrow, heading, body, alignment } × 4]
  stats: [{ percent, label } × 3]
  trustBadges: [{ image, label, link? }]
  partnersCallout: { heading, body, ctaLabel, ctaHref }
  faq: [{ question, answer } × 4..n]
  finalCta: { heading, body }
  footer: { tagline, columns: [{ heading, links: [{ label, href }] }], appStoreLinks, complianceBadges, copyright }
```

App content lives in BaseHub repeaters; copy edits don't require a deploy.

## Tailwind theme

`tailwind.config.ts` extends with brand tokens — pulled from production CSS:

```ts
colors: {
  primary: { DEFAULT: '#48BE9A', 50:..., 500:'#48BE9A', 600:..., 700:... },
  secondary: { DEFAULT: '#174252', 500:'#174252', 600:..., 700:... },
  accent: { DEFAULT: '#6fa7c8', 500:'#6fa7c8' },
  body: { DEFAULT: '#4d6278' },
  surface: { DEFAULT: '#F6F6F7', muted: '#DEDEDE' },
}
```

Scale steps (50–900) get generated around the base hex during Phase 1.

Border radius scale: keep the existing template defaults but lean on `rounded-3xl` (24px) for cards and `rounded-full` for pill buttons — already established in the brand.

## AppsFlyer OneLink

Each `App` record stores a OneLink URL. The app card renders one CTA — *Get the game* — that points at the OneLink. OneLink:
- Detects iOS vs Android vs desktop
- Routes iOS to App Store, Android to Play Store, desktop to a fallback (App Store landing or a "scan QR" page)
- Tracks installs back to AppsFlyer dashboard

We do **not** render separate Apple / Google badges on individual cards. Store badges remain in the hero and final CTA banner, pointing to the developer pages on each store.

OneLink URLs are entered in BaseHub by Motivv's marketing team — we don't generate them.

## Partner-mode overlay rendering

```tsx
// app/page.tsx (server component)
import { getPartnerFromSearchParams } from '@/lib/partner'
import { fetchHomeContent, fetchApps } from '@/lib/basehub/queries'

export default async function HomePage({ searchParams }: { searchParams: Promise<Record<string,string|string[]|undefined>> }) {
  const params = await searchParams
  const partner = await getPartnerFromSearchParams(params)
  const [home, apps] = await Promise.all([fetchHomeContent(), fetchApps()])
  return <Hub home={home} apps={apps} partner={partner} />
}
```

`partner` flows down into Hero (for activation code + override copy), HowItWorks (for member services phone block), AppGrid (for OneLink partner attribution if applicable), and FinalCta (for partner-specific download link). Other sections render identically regardless of partner.


## Analytics

No web analytics tooling in v1. AppsFlyer OneLink handles app-install attribution from each app card click; no SDK is loaded on the web side. If a destination is added later (GA4, Plausible, etc.), it goes through `app/layout.tsx` and a thin `src/lib/analytics.ts` wrapper.

## SEO + meta

- `app/layout.tsx`: site-level OG defaults, font preconnect
- `app/page.tsx`: per-page `metadata` export with title, description, canonical, OG image
- `app/sitemap.ts`: regenerated to list `/` only (partner query-param URLs are not indexed; `noindex` is added when partner mode is active)
- `app/robots.txt`: keep existing rules

## Performance budgets

Initial budget (revisit after first Lighthouse run):
- LCP < 2.0s on 4G mobile
- CLS < 0.05
- Total JS shipped to homepage < 180 KB gzipped
- App icons served as Next `<Image>` from BaseHub (responsive, lazy below the fold)

## File layout (additions / changes)

```
docs/
  SPEC.md
  ARCHITECTURE.md
  TASKS.md
  QA_CHECKLIST.md
  PROGRESS.md

src/
  app/
    layout.tsx                      // updated: brand fonts
    page.tsx                        // NEW: hub (replaces [[...slug]])
    sitemap.ts                      // updated
    [[...slug]]/                    // REMOVED
  app/_sections/
    app-grid/                       // NEW: filterable grid
      index.tsx
      filter-chips.tsx              // client island
      app-card.tsx
    hero/                           // refactor for new copy + partner overlay
    how-it-works/                   // NEW (renamed from current "Getting started" pattern)
    why-motivv/                     // adapt from features/features-list
    stats/                          // NEW
    trust-strip/                    // NEW
    partners-callout/               // NEW or reuse callout-2
    faq/                            // adapt from accordion-faq
    final-cta/                      // adapt from callout-1
  app/_components/
    footer/                         // updated structure
    header/                         // simplified nav
    activation-code-pill/           // NEW (used in partner mode)
  lib/
    basehub/
      queries.ts                    // NEW: fetchApps, fetchHomeContent, fetchPartnerBySlug
      fragments.ts                  // updated for new types
    partner.ts                      // NEW: query-param resolver

next.config.ts                      // add redirects(): /acoh -> /?acoh
tailwind.config.ts                  // brand tokens, fonts
```

## Migration / launch sequence

1. Build new homepage + partner overlay behind a preview deployment
2. Verify against current `/acoh` content side-by-side (QA checklist)
3. Deploy to production root
4. `/acoh` 308 → `/?acoh` enabled in production
5. Old SvelteKit deployment decommissioned only after sitemap is reindexed (1–2 weeks of overlap recommended)

## Risks / open items

- Apple developer-account name is "Motivve" with two `v`s — irreversible. Site copy stays "Motivv". Footer copyright currently uses "Motivve, LLC" (legal entity name). **Confirm legal entity name in copyright** with Motivv legal/ops before launch.
- AppsFlyer OneLink URLs not yet provided. Phase 2 build uses placeholder URLs that resolve to the iOS App Store; Motivv supplies real OneLinks before launch.
- Brand CSS bundle on production has no font-family declarations beyond Roboto — typography upgrade is a Phase 1 design call.
- The `delivr.com/27xg9` and `delivr.com/2s39p` short links: confirm these are still in use, or whether new OneLinks supersede them in partner mode.
