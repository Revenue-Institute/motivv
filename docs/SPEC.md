# Motivv Health Studios — Marketing Site Rebuild Spec

## 1. Overview

Rebuild `motivvhealthstudios.com` as a single-page marketing **hub** that showcases all 11 Motivv mobile games and lets users filter and download any of them. Health-plan partners (e.g. AmeriHealth Caritas Ohio / `acoh`) get the same hub with a partner-context overlay activated by a query parameter (e.g. `/?acoh`). The existing `/acoh` URL is preserved via a permanent redirect.

The site replaces the current SvelteKit multi-tenant build. Stack is the existing repo: Next.js 16 (App Router) + React 19 + Tailwind 4 + BaseHub.

## 2. Audience & goals

**Primary audience**: eligible health-plan members (18+) who have received an activation code from their plan and need to download the games.

**Secondary audience**: health-plan partners and prospective partners (B2B) — they get a soft callout to `/demo`, but are not the primary conversion target on the public hub.

**Primary conversion**: App Store / Google Play downloads (per user direction).

**Secondary signals**: lead capture for B2B and email signups are out of scope for v1.

## 3. Brand & tone

- **Canonical brand name**: **Motivv** (single `v`). The Apple developer-account name displays as "Motivve" — that's a fixed Apple record we cannot rename, but every piece of copy we author uses **Motivv**.
- **Tagline**: *"Where Health & Gaming Are One."*
- **Tone reference**: Headspace.com — calm, friendly, optimistic, conversational. Health is approachable, not clinical.
- **Voice rules**:
  - Write like a person, not a brochure ("Pick a game. We'll handle the rest." > "Download our suite of curated mobile applications.")
  - Verbs over nouns; short sentences; second person ("you")
  - Never use marketing jargon ("solutions", "synergies", "leveraging")

## 4. Brand palette (extracted from production CSS)

| Role | Hex | Notes |
|---|---|---|
| Primary | `#48BE9A` | Motivv mint — primary CTAs, highlights |
| Secondary | `#174252` | Deep teal — dark banners, headlines, footer |
| Accent | `#6fa7c8` | Sky blue — secondary highlights |
| Body text | `#4d6278` | Slate, paragraphs |
| Surface (light) | `#F6F6F7` | Page background variants |
| Surface (neutral) | `#DEDEDE` | Stat cards, dividers |
| Action blue | `#2563eb` | Activation-code text accent |
| Headings dark | `#1f2937` | Hard headings on white |

These get mapped into the Tailwind theme as `primary`, `secondary`, `accent`, `body`, `surface`, etc. — see `ARCHITECTURE.md`.

## 5. Typography

**Decision needed during Phase 1** — current site is Roboto (utilitarian). User wants more personality. Recommended pairings to evaluate:

1. **Plus Jakarta Sans** (display + body) — free via Google Fonts, geometric and friendly. Strong default.
2. **Cal Sans** (display) + **Inter** (body) — Vercel's free display sans for headlines, Inter for body. Clean and slightly playful.
3. **Sohne** or **GT Walsheim** (commercial) — closest to Headspace's actual typography. Requires license.

**Recommendation**: start with **Plus Jakarta Sans** to keep the build moving and unblocked; revisit before launch.

## 6. Information architecture

### Public homepage `/`

| # | Section | Purpose | Notes |
|---|---|---|---|
| 1 | Sticky header | Brand + nav | Logo · `Games` (anchor) · `For Partners` · `Sign in` · **Register** |
| 2 | Hero | Top-of-funnel pitch + dual store CTAs | Headline like "Pick a game. Earn rewards. All free with your benefits." · App Store + Google Play badges · App-icon collage on the right |
| 3 | **App grid** | Browse all 11 games with **filter chips** | Filters: All · Puzzle · Word · Card · Action. Each card: icon, name, genre tag, single AppsFlyer OneLink CTA (smart-routes to the correct store + tracks installs). |
| 4 | How it works | 3-step onboarding | "Find your game · Create your account · Start playing" — keep current copy |
| 5 | Why Motivv | 4 alternating image+text feature rows | Rewards · Anytime/ad-free · Trivia/learning · Maximize benefits |
| 6 | Stats | Social proof | 91 / 90 / 93 % stats from current site |
| 7 | Trust | Compliance marks | HIPAA · HITECH · HiTRUST · NIST badges in a strip |
| 8 | For Partners | B2B soft CTA | "Health plan? Let's talk." → `/demo` |
| 9 | FAQ | 4 accordion items | Reuse current Qs; fix "commercially availability" → "commercially available" |
| 10 | Final CTA | Conversion | "Ready to play?" + dual store badges |
| 11 | Footer | Logo, app store links, sitemap, compliance, Ohio bug, copyright | Mirror current footer structure |

### Partner mode (`/?acoh`, future `/?partner=<slug>`)

The same homepage with overrides driven by a `Partner` BaseHub record:
- Hero copy adapted to the partner ("ad-free games that earn CARE Card rewards")
- Activation code pill rendered in hero (`ACTIVATION CODE: ACOH`)
- Sign-up / download CTAs swapped for partner-specific links (`delivr.com/27xg9`, `delivr.com/2s39p`) and AppsFlyer OneLinks with partner attribution
- Member Services phone block injected near onboarding section (`1-833-764-7700` for ACOH)
- Partner enroll link in fine print (`https://www.amerihealthcaritasoh.com/member/enroll` for ACOH)
- Partner co-branding (logo + accent color) in hero only (subtle — Motivv stays primary brand)

Old URL `/acoh` returns a **308 permanent redirect to `/?acoh`** so existing print collateral, QR codes, and `delivr.com` short-links keep working.

## 7. App inventory (data captured)

11 apps, all Free on iOS, all by `Motivve Health Studios, LLC`. Source: iTunes Lookup API. Cached at `/tmp/motivv-apps.json` during research; will be ingested into BaseHub during Phase 1.

| # | Name | iOS ID | Primary genre | Filter chip |
|---|---|---|---|---|
| 1 | Picture Puzzle - by Motivv | 1597963239 | Puzzle | Puzzle |
| 2 | Candy Connect+ | 1588252574 | Puzzle | Puzzle |
| 3 | Critter Pop+ | 1582460004 | Puzzle | Puzzle |
| 4 | Blocks Mayhem | 1529146308 | Puzzle | Puzzle |
| 5 | Galaxy Defender+ | 1530055918 | Action | Action |
| 6 | Pipe Swipe+ | 1529145803 | Puzzle | Puzzle |
| 7 | Solitaire Island | 1552404925 | Card | Card |
| 8 | Sudoku 数独 | 1527453059 | Puzzle | Puzzle |
| 9 | Word Forest+ | 1529460931 | Word | Word |
| 10 | Word Search (Neon Edition) | 1552403447 | Word | Word |
| 11 | Hexa Temple | 1527262263 | Puzzle | Puzzle |

All apps share the eligibility note: *"This game is available only to eligible Motivv Health Studios members."* Icon URLs at 512×512 are available from Apple's CDN (`is1-ssl.mzstatic.com`) — we'll mirror these into BaseHub assets during seeding.

Android coverage per app: **placeholder for now** (per user). Footer links to the Google Play developer page for the studio, but we won't render Android-only links per app until coverage is verified. Each app card uses an AppsFlyer OneLink that handles device routing automatically, so this is invisible to end users.

## 8. Compliance & trust

Required on every page:
- HIPAA · HITECH · HiTRUST · NIST badges in a footer trust strip
- Privacy Policy and Terms of Service links in footer
- "Proudly made in Ohio." with Ohio-shaped icon in footer

Sensitive data: this is a marketing site. **No PHI, no member IDs, no health data** is collected on the marketing surface. Sign-in / registration / member-id capture happens on `/sign-in` and `/register` (out of scope for this rebuild — kept as separate routes/redirects).

## 9. Analytics

**No analytics tooling is installed in v1.** AppsFlyer OneLink handles install/conversion attribution per app at the click level — that covers the primary conversion goal. No GTM, no GA, no dataLayer scaffolding. If web analytics is needed later, the destination must be picked explicitly (GA4, Plausible, Fathom, Mixpanel, AppsFlyer Web SDK, etc.) — do not auto-install GTM "for parity" with the production site.

## 10. SEO

Current site has zero OG tags, zero canonical, zero JSON-LD. Must-haves for the rebuild:

- `<title>` and `<meta name="description">` per route
- Canonical URL on every page
- OpenGraph + Twitter card meta on every page
- JSON-LD: `Organization` (Motivv Health Studios) + `SoftwareApplication` per app on the homepage (lets app cards show rich results)
- Sitemap regeneration including the homepage and any active partner-mode landing slugs that we want indexed (initial list: `/` only — partner pages are uncrawlable since they're query params)
- `robots.txt` keeps existing rules

## 11. Accessibility (WCAG 2.1 AA target)

Current site has 7 images with empty `alt`, 3 with literal `alt="Alt"`, and reuses `id="join-heading"` four times. The rebuild fixes all of these:

- Real, descriptive `alt` on every image (or empty `alt=""` only when the image is purely decorative and accompanied by text)
- Unique `id`s
- Color contrast ≥ 4.5:1 for body, ≥ 3:1 for large text — verify against the brand palette during Phase 1
- Keyboard navigation through filter chips, accordion, and CTAs
- `aria-expanded` on FAQ accordion buttons
- Focus-visible styles on all interactive elements

## 12. Out of scope for v1

- Sign-in / registration flows (kept on `/sign-in`, `/register`)
- Member self-serve / account pages
- Live App Store data (ratings, version notes) — using cached metadata from research; can revisit
- Per-app detail pages (single-hub structure per user direction)
- Multiple partners (only `acoh` ships in v1; the `Partner` model is built to scale to more)
- Internationalization
- Dark mode (existing template has it; not required for v1 launch)
- Newsletter / B2B lead form (deferred)
