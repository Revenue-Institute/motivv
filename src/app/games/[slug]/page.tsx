import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaLink } from "@/app/_components/cta";
import { APP_DETAILS, getAppBySlug, getAppDetail, getApps } from "@/lib/content";
import type { AppDetail, AppRecord } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(APP_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = await getAppBySlug(slug);
  const detail = getAppDetail(slug);
  if (!app || !detail) {
    return { title: "Game not found - Motivv Health Studios" };
  }
  return {
    title: `${app.name} - Motivv Health Studios`,
    description: detail.tagline,
    alternates: { canonical: `/games/${slug}` },
    openGraph: {
      title: `${app.name} - Motivv Health Studios`,
      description: detail.tagline,
      images: detail.screenshots[0] ? [{ url: detail.screenshots[0] }] : undefined,
    },
  };
}

const THEME: Record<
  AppDetail["themeColor"],
  {
    gradient: string;
    chip: string;
    accent: string;
    phoneBezel: string;
    glowA: string;
    glowB: string;
  }
> = {
  mint: {
    gradient: "from-brand-mint-100 via-brand-mint-50 to-white",
    chip: "bg-brand-mint-100 text-brand-mint-700",
    accent: "text-brand-mint-600",
    phoneBezel: "bg-brand-mint-700",
    glowA: "bg-brand-mint-300/50",
    glowB: "bg-brand-sky-200/60",
  },
  sky: {
    gradient: "from-brand-sky-100 via-brand-sky-50 to-white",
    chip: "bg-brand-sky-100 text-brand-sky-700",
    accent: "text-brand-sky-600",
    phoneBezel: "bg-brand-sky-700",
    glowA: "bg-brand-sky-300/50",
    glowB: "bg-brand-mint-200/60",
  },
  coral: {
    gradient: "from-[#fde2d5] via-[#fff4ec] to-white",
    chip: "bg-[#fde2d5] text-[#b85a36]",
    accent: "text-[#b85a36]",
    phoneBezel: "bg-[#7a3320]",
    glowA: "bg-[#f7c5af]/60",
    glowB: "bg-brand-mint-200/50",
  },
  violet: {
    gradient: "from-[#e6e1ff] via-[#f3f0ff] to-white",
    chip: "bg-[#e6e1ff] text-[#4a3a8c]",
    accent: "text-[#5a45b5]",
    phoneBezel: "bg-[#2a1f55]",
    glowA: "bg-[#c4b8ff]/60",
    glowB: "bg-brand-sky-200/50",
  },
  amber: {
    gradient: "from-[#fdecc6] via-[#fff8e1] to-white",
    chip: "bg-[#fdecc6] text-[#8a5e16]",
    accent: "text-[#a06a14]",
    phoneBezel: "bg-[#5a3a08]",
    glowA: "bg-[#f3d472]/55",
    glowB: "bg-brand-mint-200/50",
  },
  teal: {
    gradient: "from-brand-teal-100 via-white to-brand-mint-50",
    chip: "bg-brand-teal-100 text-brand-teal-700",
    accent: "text-brand-teal-700",
    phoneBezel: "bg-brand-teal-700",
    glowA: "bg-brand-teal-200/60",
    glowB: "bg-brand-mint-200/55",
  },
};

export default async function GameDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const app = await getAppBySlug(slug);
  const detail = getAppDetail(slug);
  if (!app || !detail) {
    notFound();
  }

  const apps = await getApps();
  const moreGames = apps
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const sameGenreA = a.genre === app.genre ? 0 : 1;
      const sameGenreB = b.genre === app.genre ? 0 : 1;
      if (sameGenreA !== sameGenreB) return sameGenreA - sameGenreB;
      return a.order - b.order;
    })
    .slice(0, 4);

  const theme = THEME[detail.themeColor];

  return (
    <>
      <GameHero app={app} detail={detail} theme={theme} />
      <ScreenshotsStrip name={app.name} screenshots={detail.screenshots} />
      <HowToPlay features={detail.features} theme={theme} />
      <MotivvPlatformBlock />
      <MoreGames games={moreGames} />
      <FinalInstallCta app={app} />
    </>
  );
}

function GameHero({
  app,
  detail,
  theme,
}: {
  app: AppRecord;
  detail: AppDetail;
  theme: (typeof THEME)[AppDetail["themeColor"]];
}) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br pb-24 pt-16 md:pb-28 md:pt-20 ${theme.gradient}`}>
      <div aria-hidden className={`pointer-events-none absolute -left-40 -top-32 h-[26rem] w-[26rem] rounded-full blur-3xl ${theme.glowA}`} />
      <div aria-hidden className={`pointer-events-none absolute -right-32 top-40 h-[22rem] w-[22rem] rounded-full blur-3xl ${theme.glowB}`} />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="space-y-6">
          <Link href="/#games" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal-700/70 transition hover:text-brand-teal-700">
            <span aria-hidden>&larr;</span> Back to all games
          </Link>

          <div className="flex items-start gap-5">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[1.5rem] shadow-xl ring-1 ring-grayscale-200/60 sm:h-28 sm:w-28">
              <Image src={app.iconUrl} alt={`${app.name} app icon`} fill sizes="112px" className="object-cover" />
            </div>
            <div className="pt-1">
              <p className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${theme.chip}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {app.genre}
              </p>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-teal-700 sm:text-5xl">
                {app.name}
              </h1>
            </div>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-grayscale-700">{detail.tagline}</p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <CtaLink href={app.appsFlyerOneLink} target="_blank" rel="noopener noreferrer">
              Get the game
            </CtaLink>
            <CtaLink href="/#games" variant="secondary">
              Browse all games
            </CtaLink>
          </div>

          <dl className="grid max-w-md grid-cols-3 gap-5 pt-4">
            <FactCell label="Age rating" value={detail.rating} />
            <FactCell label="Size" value={detail.fileSize} />
            <FactCell label="Requires" value={detail.minimumOsVersion} />
          </dl>

          <p className="pt-2 text-xs text-grayscale-500">
            Free with your benefits. No ads. One Motivv login works across the catalog.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <HeroPhone screenshot={detail.screenshots[0]} alt={`${app.name} screenshot`} bezelClass={theme.phoneBezel} />
        </div>
      </div>
    </section>
  );
}

function FactCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-grayscale-500">{label}</dt>
      <dd className="mt-1 font-display text-base font-extrabold text-brand-teal-700">{value}</dd>
    </div>
  );
}

function HeroPhone({ screenshot, alt, bezelClass }: { screenshot?: string; alt: string; bezelClass: string }) {
  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[320px]">
      <div className={`absolute inset-0 rounded-[2.75rem] shadow-2xl ${bezelClass}`} />
      <div className="absolute inset-[6px] overflow-hidden rounded-[2.4rem] bg-black">
        {screenshot ? (
          <Image src={screenshot} alt={alt} fill sizes="320px" className="object-cover" priority />
        ) : null}
      </div>
      <div className="absolute left-1/2 top-3 h-1.5 w-20 -translate-x-1/2 rounded-full bg-black/30" aria-hidden />
    </div>
  );
}

function ScreenshotsStrip({ name, screenshots }: { name: string; screenshots: string[] }) {
  if (!screenshots.length) return null;
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">See it in action</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-teal-700 sm:text-4xl">
            A look inside {name}.
          </h2>
        </header>

        <div className="mt-10 -mx-6 overflow-x-auto px-6 [scrollbar-width:thin]">
          <ul className="flex gap-5 pb-4">
            {screenshots.map((src, idx) => (
              <li
                key={src}
                className="relative aspect-[9/16] w-[200px] shrink-0 overflow-hidden rounded-3xl bg-grayscale-100 shadow-lg ring-1 ring-grayscale-200/60 sm:w-[240px]"
              >
                <Image
                  src={src}
                  alt={`${name} screenshot ${idx + 1}`}
                  fill
                  sizes="(min-width: 640px) 240px, 200px"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HowToPlay({
  features,
  theme,
}: {
  features: string[];
  theme: (typeof THEME)[AppDetail["themeColor"]];
}) {
  return (
    <section className="bg-grayscale-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">How to play</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-teal-700 sm:text-4xl">
            Everything you need to jump in.
          </h2>
        </header>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-grayscale-200/60"
            >
              <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-grayscale-200 ${theme.accent}`}>
                <CheckIcon />
              </span>
              <p className="text-base leading-relaxed text-grayscale-700">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function MotivvPlatformBlock() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 rounded-[2.5rem] bg-gradient-to-br from-brand-mint-50 via-white to-brand-sky-50 p-10 ring-1 ring-grayscale-200/60 md:grid-cols-[1.1fr_1fr] md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">
              What playing earns you
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-teal-700 sm:text-4xl">
              Play it. Take care of you.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-grayscale-600">
              Every Motivv game is ad-free, free with your benefits, and connected to a rewards system
              that gives you tickets and prizes for completing health-based trivia and missions. One
              login works across the whole catalog.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {PLATFORM_FACTS.map((fact) => (
              <li key={fact.label} className="rounded-2xl bg-white p-5 ring-1 ring-grayscale-200/60">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-mint-500 text-white">
                  {fact.icon}
                </div>
                <p className="mt-3 font-display text-base font-extrabold text-brand-teal-700">
                  {fact.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-grayscale-600">{fact.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const PLATFORM_FACTS = [
  {
    icon: <NoAdsIcon />,
    label: "Always ad-free",
    body: "No interruptions. No third-party ads. Ever.",
  },
  {
    icon: <TicketIcon />,
    label: "Earn rewards",
    body: "Trivia and missions earn tickets for prize drawings.",
  },
  {
    icon: <BrainIcon />,
    label: "Health trivia",
    body: "Quick questions that build your knowledge as you play.",
  },
  {
    icon: <KeyIcon />,
    label: "One login",
    body: "Your account works across every Motivv game.",
  },
];

function MoreGames({ games }: { games: AppRecord[] }) {
  if (!games.length) return null;
  return (
    <section className="bg-grayscale-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">
              More to play
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-teal-700 sm:text-4xl">
              Other games you might love.
            </h2>
          </div>
          <Link href="/#games" className="text-sm font-semibold text-brand-mint-600 hover:text-brand-mint-700">
            View the full catalog &rarr;
          </Link>
        </header>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <li key={game.slug}>
              <Link
                href={`/games/${game.slug}`}
                className="group flex h-full flex-col gap-3 rounded-3xl bg-white p-5 ring-1 ring-grayscale-200/70 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-brand-mint-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mint-500"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl ring-1 ring-grayscale-200/60">
                    <Image src={game.iconUrl} alt="" fill sizes="56px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-mint-600">
                      {game.genre}
                    </p>
                    <h3 className="mt-0.5 truncate font-display text-base font-bold text-brand-teal-700">
                      {game.name}
                    </h3>
                  </div>
                </div>
                <p className="line-clamp-2 text-sm leading-relaxed text-grayscale-600">
                  {game.shortDescription}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-1 text-xs font-semibold text-brand-mint-600 transition group-hover:text-brand-mint-700">
                  Details
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden className="transition group-hover:translate-x-0.5">
                    <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalInstallCta({ app }: { app: AppRecord }) {
  return (
    <section className="relative overflow-hidden bg-brand-teal-700 py-20 md:py-24">
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-brand-mint-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 -bottom-32 h-[26rem] w-[26rem] rounded-full bg-brand-sky-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-300">
          Ready when you are
        </p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Install {app.name} and start playing.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
          You will need your activation code, email, and member ID the first time you sign in. After
          that, you are set across the whole library.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CtaLink href={app.appsFlyerOneLink} target="_blank" rel="noopener noreferrer" variant="inverted">
            Get the game
          </CtaLink>
          <CtaLink href="/#games" variant="ghost" className="text-white hover:bg-white/10">
            Browse more games
          </CtaLink>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3.5 8.5 6.5 11.5 12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NoAdsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="4" y="6" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 9V7h16v2a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M9 4.5a3 3 0 0 0-3 3v.6a3 3 0 0 0-1.5 2.6 3 3 0 0 0 1.5 2.6v.6a3 3 0 0 0 3 3h.5v-12H9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M15 4.5a3 3 0 0 1 3 3v.6a3 3 0 0 1 1.5 2.6 3 3 0 0 1-1.5 2.6v.6a3 3 0 0 1-3 3h-.5v-12H15Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="9" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12.5 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 12v3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 12v2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
