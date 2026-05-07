# QA Checklist

Run before any production deploy. Everything below must pass.

## Functional

### Homepage `/`
- [ ] Hero renders with correct headline, subhead, both store badges
- [ ] App grid shows all 11 apps in correct order
- [ ] Filter chips: clicking each chip narrows the grid; "All" resets
- [ ] App-card OneLink CTA opens the correct URL in a new tab
- [ ] How-it-works shows 3 steps in correct order
- [ ] All 4 feature rows render with images on alternating sides
- [ ] Stats cards show 91 / 90 / 93 % with correct labels
- [ ] Trust strip shows HIPAA · HITECH · HiTRUST · NIST badges
- [ ] FAQ accordion: each item opens/closes; only one expanded at a time (or independent — match design intent)
- [ ] Final CTA banner renders with both store badges
- [ ] Footer: all sitemap links resolve (or 404 cleanly to expected destinations); store badges link to dev pages; "Proudly made in Ohio." present; copyright correct

### Partner mode `/?acoh`
- [ ] Hero shows ACOH activation-code pill (`ACTIVATION CODE: ACOH`)
- [ ] Hero copy uses partner override (mentions CARE Card rewards / AmeriHealth)
- [ ] Member-services phone block (`1-833-764-7700`) is visible near the onboarding section
- [ ] Partner enroll link present in fine print
- [ ] Final CTA banner uses partner-specific download link
- [ ] `noindex` meta tag is present in `<head>`

### Redirects
- [ ] `/acoh` returns 308 → `/?acoh`
- [ ] Old short links (`delivr.com/27xg9`, `delivr.com/2s39p`) still resolve as expected

### Forms / outbound
- [ ] Contact link `mailto:help@motivvhealthstudios.com` opens mail client
- [ ] All store badges open Apple/Google developer pages in new tab
- [ ] AppsFlyer OneLinks resolve correctly: iOS → App Store, Android → Play Store, desktop → fallback
- [ ] B2B "Health plan? Let's talk." links to `/demo`

## Visual / design

- [ ] Brand colors match SPEC palette (primary mint, secondary deep teal, accent sky blue)
- [ ] Pill buttons use `rounded-full`, cards use `rounded-3xl` consistently
- [ ] Typography: chosen display font on headings, body font on paragraphs
- [ ] Hover/focus states on all interactive elements
- [ ] No broken images, no placeholder `Alt` text
- [ ] No "lorem ipsum", no `TODO`, no hardcoded `Motivve` (with two v's) outside the legal copyright line

## Content

- [ ] Brand name spelled "Motivv" everywhere except Apple developer attribution and the legal copyright line
- [ ] Tagline reads "Where Health & Gaming Are One."
- [ ] FAQ Q4 typo fixed ("commercially available", not "commercially availability")
- [ ] No reused HTML `id`s
- [ ] Compliance language in FAQ Q4 is intact (HIPAA / HITECH / HiTRUST / NIST)
- [ ] Footer copyright year: 2026

## Accessibility (target: WCAG 2.1 AA)

- [ ] Every image has descriptive `alt` text or empty `alt=""` if decorative
- [ ] Heading hierarchy is logical (single `h1` per page, no skipped levels)
- [ ] All `id`s are unique
- [ ] Keyboard: tab order is logical; all CTAs reachable; no focus traps
- [ ] Focus-visible outlines on every interactive element
- [ ] Color contrast: body text ≥ 4.5:1; large text ≥ 3:1; verified with a contrast checker
- [ ] FAQ accordion uses `aria-expanded`, `aria-controls`, `<button>` (not div)
- [ ] Filter chips: roving tabindex or radio-group semantics; current state announced
- [ ] Skip-to-content link in header
- [ ] `prefers-reduced-motion` respected (no large parallax/animations beyond fade)

## Performance

- [ ] `pnpm build` clean: no errors, no warnings beyond expected
- [ ] Lighthouse mobile (4G simulation):
  - [ ] Performance ≥ 90
  - [ ] Accessibility ≥ 95
  - [ ] Best Practices ≥ 95
  - [ ] SEO = 100
- [ ] LCP < 2.0s on simulated 4G
- [ ] CLS < 0.05
- [ ] Total JS to homepage < 180 KB gzipped
- [ ] App icons served as Next `<Image>` with correct `sizes`
- [ ] Below-fold images lazy-loaded

## SEO

- [ ] `<title>` and `<meta name="description">` set on `/`
- [ ] `<link rel="canonical">` present on `/`
- [ ] OG tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- [ ] Twitter tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] JSON-LD Organization + 11 SoftwareApplication entries; passes Google Rich Results Test
- [ ] `app/sitemap.ts` lists `/`; not partner URLs
- [ ] `robots.txt` allows `/`, disallows partner URLs (or relies on `noindex` meta)
- [ ] Favicon present and correct

## Analytics

v1 ships with **no web analytics installed** (AppsFlyer OneLink covers install attribution from app-card clicks). If a destination is added before launch:

- [ ] No PII in any client-side event
- [ ] Tracker honors Do Not Track / cookie-consent gating if applicable

## Cross-browser / device

- [ ] macOS Safari (latest)
- [ ] iOS Safari on iPhone (latest)
- [ ] Chrome (latest, mac + Android)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] At least one mid-tier Android device (real or DevTools throttled)
- [ ] Mobile, tablet, desktop breakpoints all tested

## Side-by-side parity (`/?acoh` vs old `/acoh`)

Open both in adjacent tabs. Verify the new partner mode preserves:
- [ ] Activation code (`ACOH`)
- [ ] CARE Card rewards messaging
- [ ] Member services phone (`1-833-764-7700`) and TTY (`1-833-889-6446`)
- [ ] Compliance language in FAQ
- [ ] All 4 feature rows' content
- [ ] All 3 stat percentages
- [ ] All 4 FAQ Qs and As
- [ ] AmeriHealth Caritas Ohio enrollment link
- [ ] Both `delivr.com` short links (or their OneLink replacements)
