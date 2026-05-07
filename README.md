# Motivv Health Studios — Marketing Site

The new motivvhealthstudios.com — a single-page hub showcasing all 11 Motivv games, with partner-mode overlays (e.g. `/?acoh=1`) for health-plan landing experiences.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS 4
- BaseHub (CMS — schema migration pending; currently runs on a typed mock content provider)
- Plus Jakarta Sans (display + body) via `next/font/google`

## Getting started

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

### Partner mode

The new site collapses the old SvelteKit multi-tenant architecture into a query-param overlay.

- `/` — public hub
- `/?acoh=1` — AmeriHealth Caritas Ohio partner overlay (activation code, member-services phone, partner-specific download/sign-up links)
- `/acoh` → 308 redirects to `/?acoh=1` so existing print/QR/short-link traffic keeps working

Add another partner by adding a record in `src/lib/content/data.ts` (eventually BaseHub).

## Project docs

- `docs/SPEC.md` — what we're building and why
- `docs/ARCHITECTURE.md` — routing, content model, brand tokens
- `docs/TASKS.md` — phased build plan
- `docs/QA_CHECKLIST.md` — pre-launch verification
- `docs/PROGRESS.md` — running log

## Brand palette (baked into `src/app/globals.css`)

| Token | Hex | Use |
| --- | --- | --- |
| `brand-mint` | `#48BE9A` | Primary CTAs, highlights |
| `brand-teal` | `#174252` | Headlines, dark sections, footer |
| `brand-sky` | `#6fa7c8` | Secondary highlights |
| `--grayscale-600` | `#4d6278` | Body copy |

## Environment

`BASEHUB_TOKEN` (placed in `.env.local`) is required for the BaseHub plumbing in the original template. The current build does not depend on a working BaseHub schema — content is served from `src/lib/content/data.ts` until the schema migration in Phase 1 of `docs/TASKS.md` ships.

## Testing the redirect

```bash
curl -I http://localhost:3000/acoh
# → 308 Location: /?acoh=1
```
