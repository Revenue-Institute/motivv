import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { CtaLink } from "../_components/cta";

export const metadata: Metadata = {
  title: "For partners - Motivv Health Studios",
  description:
    "Bring ad-free, engaging games to your members. White-label launches in weeks, with care-gap missions and the reporting you've been missing.",
  alternates: { canonical: "/partner" },
};

const SUBJECT = encodeURIComponent("Motivv demo request");
const BODY = encodeURIComponent(
  `Hi Motivv team,

I'd like to learn more about how Motivv can engage our members.

About us:
- Organization:
- Role:
- Membership size:
- What you'd like to see in the demo:

Best,
`,
);
const MAILTO = `mailto:help@motivvhealthstudios.com?subject=${SUBJECT}&body=${BODY}`;

const PALETTE = {
  mint: "#48be9a",
  mintDeep: "#2c8268",
  mintSoft: "#adebcb",
  mintWash: "#d6f5e6",
  sky: "#6fa7c8",
  skyDeep: "#3a7297",
  skySoft: "#b9d4e7",
  skyWash: "#dceaf3",
  teal: "#103240",
  tealMid: "#1f5667",
  coral: "#f7a98a",
  coralDeep: "#e07a55",
  cream: "#fff7ec",
};

export default function PartnerPage() {
  return (
    <>
      <PartnerHero />
      <PartnerTrust />
      <PartnerValueProps />
      <PartnerStats />
      <PartnerLaunch />
      <PartnerFinalCta />
    </>
  );
}

function PartnerHero() {
  return (
    <section className="relative overflow-hidden bg-grayscale-50 pb-24 pt-16 md:pb-32 md:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-mint-200/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-40 h-[24rem] w-[24rem] rounded-full bg-brand-sky-200/70 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-7">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-mint-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-mint-500" />
            For health plans & employers
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-teal-700 sm:text-5xl md:text-6xl">
            A modern benefit your members will <span className="text-brand-mint-600">actually use</span>.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-grayscale-600">
            Motivv is a turnkey, white-label suite of mobile games and care-gap missions that drives
            benefit awareness, closes gaps, and keeps members engaged - all ad-free and free with
            their benefits.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <CtaLink href={MAILTO}>Get a demo</CtaLink>
            <CtaLink href="/#games" variant="secondary">
              See the games
            </CtaLink>
          </div>
          <dl className="grid max-w-md grid-cols-3 gap-4 pt-6">
            {[
              { value: "11", label: "Games in the catalog" },
              { value: "Weeks", label: "Not quarters, to launch" },
              { value: "1 login", label: "Across the whole library" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-display text-2xl font-extrabold text-brand-teal-700">{item.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-grayscale-500">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative aspect-[5/4] w-full">
      <svg
        viewBox="0 0 500 400"
        className="absolute inset-0 h-full w-full drop-shadow-[0_30px_60px_rgba(15,50,66,0.18)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="dashboardBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor={PALETTE.skyWash} />
          </linearGradient>
          <linearGradient id="chartArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={PALETTE.mint} stopOpacity="0.55" />
            <stop offset="100%" stopColor={PALETTE.mint} stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect x="30" y="40" width="370" height="280" rx="22" fill="url(#dashboardBg)" stroke={PALETTE.tealMid} strokeOpacity="0.15" strokeWidth="1.5" />
        <rect x="30" y="40" width="370" height="44" rx="22" fill={PALETTE.teal} />
        <rect x="30" y="62" width="370" height="22" fill={PALETTE.teal} />
        <circle cx="50" cy="62" r="5" fill={PALETTE.coral} />
        <circle cx="66" cy="62" r="5" fill="#f4d35e" />
        <circle cx="82" cy="62" r="5" fill={PALETTE.mint} />
        <text x="220" y="68" textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="2" fill="#fff" fontFamily="ui-sans-serif, system-ui">
          PARTNER DASHBOARD
        </text>

        <text x="55" y="115" fontSize="11" fontWeight="700" letterSpacing="2" fill={PALETTE.mintDeep} fontFamily="ui-sans-serif, system-ui">
          ENGAGEMENT - LAST 30 DAYS
        </text>
        <text x="55" y="148" fontSize="32" fontWeight="900" fill={PALETTE.teal} fontFamily="ui-sans-serif, system-ui">
          84,210
        </text>
        <text x="170" y="148" fontSize="13" fontWeight="700" fill={PALETTE.mintDeep} fontFamily="ui-sans-serif, system-ui">
          + 18%
        </text>

        <path
          d="M55 250 L95 220 L135 232 L175 200 L215 210 L255 178 L295 184 L335 154 L375 168"
          stroke={PALETTE.mint}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M55 250 L95 220 L135 232 L175 200 L215 210 L255 178 L295 184 L335 154 L375 168 L375 290 L55 290 Z"
          fill="url(#chartArea)"
        />
        {[
          [55, 250],
          [95, 220],
          [135, 232],
          [175, 200],
          [215, 210],
          [255, 178],
          [295, 184],
          [335, 154],
          [375, 168],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill="#fff" stroke={PALETTE.mintDeep} strokeWidth="2" />
        ))}

        {[
          { x: 55, label: "W1" },
          { x: 135, label: "W2" },
          { x: 215, label: "W3" },
          { x: 295, label: "W4" },
          { x: 375, label: "W5" },
        ].map((tick) => (
          <text key={tick.label} x={tick.x} y={308} textAnchor="middle" fontSize="10" fontWeight="600" fill={PALETTE.tealMid} opacity="0.6" fontFamily="ui-sans-serif, system-ui">
            {tick.label}
          </text>
        ))}

        <g transform="translate(360 260)">
          <rect x="-122" y="60" width="160" height="220" rx="26" fill={PALETTE.teal} />
          <rect x="-116" y="66" width="148" height="208" rx="21" fill={PALETTE.cream} />
          <rect x="-108" y="74" width="132" height="20" rx="6" fill={PALETTE.mintWash} />
          <circle cx="-98" cy="84" r="4" fill={PALETTE.mint} />
          <text x="-86" y="88" fontSize="9" fontWeight="800" fill={PALETTE.tealMid} fontFamily="ui-sans-serif, system-ui">
            MOTIVV
          </text>

          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((col) => {
              const colors = [PALETTE.mint, PALETTE.sky, PALETTE.coral];
              const color = colors[(row + col) % colors.length]!;
              return (
                <rect
                  key={`tile-${row}-${col}`}
                  x={-108 + col * 44}
                  y={104 + row * 44}
                  width="36"
                  height="36"
                  rx="9"
                  fill={color}
                />
              );
            }),
          )}

          <rect x="-108" y="240" width="132" height="28" rx="10" fill={PALETTE.mintWash} />
          <rect x="-100" y="246" width="48" height="16" rx="5" fill={PALETTE.mint} />
          <text x="-76" y="258" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff" fontFamily="ui-sans-serif, system-ui">
            PLAY
          </text>
          <rect x="-44" y="246" width="60" height="16" rx="5" fill={PALETTE.tealMid} opacity="0.18" />

          <g transform="translate(38 60)">
            <circle cx="0" cy="0" r="22" fill={PALETTE.mintDeep} />
            <circle cx="0" cy="-2" r="18" fill={PALETTE.mint} />
            <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff" fontFamily="ui-sans-serif, system-ui">
              +10
            </text>
          </g>
        </g>

        <g transform="translate(70 350)">
          <path
            d="M0,-14 L4,-4 L14,-3 L7,4 L9,14 L0,9 L-9,14 L-7,4 L-14,-3 L-4,-4 Z"
            fill={PALETTE.coralDeep}
          />
        </g>
        <g transform="translate(440 60)">
          <path
            d="M0,-12 L3,-3 L12,-2 L6,3 L8,12 L0,8 L-8,12 L-6,3 L-12,-2 L-3,-3 Z"
            fill={PALETTE.skyDeep}
          />
        </g>
      </svg>
    </div>
  );
}

function PartnerTrust() {
  const badges = [
    { label: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
    { label: "HITECH", description: "Health Information Technology for Economic and Clinical Health" },
    { label: "HiTRUST", description: "HITRUST CSF certified" },
    { label: "NIST", description: "Aligned with NIST cybersecurity framework" },
  ];
  return (
    <section className="border-y border-grayscale-100 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grayscale-500">
          Built for the trust your plan requires
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-3">
          {badges.map((badge) => (
            <li
              key={badge.label}
              title={badge.description}
              className="inline-flex items-center gap-2 rounded-full bg-grayscale-50 px-4 py-2 text-sm font-semibold text-brand-teal-700 ring-1 ring-grayscale-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-mint-500" />
              {badge.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type ValueCard = {
  title: string;
  body: string;
  icon: ReactNode;
  tint: "mint" | "sky" | "coral" | "mintDeep";
};

const TINTS: Record<ValueCard["tint"], { bg: string; ring: string; iconBg: string }> = {
  mint: {
    bg: "from-brand-mint-100 via-brand-mint-50 to-white",
    ring: "ring-brand-mint-200/70",
    iconBg: "bg-brand-mint-500",
  },
  mintDeep: {
    bg: "from-brand-teal-100 via-white to-brand-mint-50",
    ring: "ring-brand-teal-200/70",
    iconBg: "bg-brand-teal-600",
  },
  sky: {
    bg: "from-brand-sky-100 via-brand-sky-50 to-white",
    ring: "ring-brand-sky-200/70",
    iconBg: "bg-brand-sky-500",
  },
  coral: {
    bg: "from-[#fde2d5] via-[#fff4ec] to-white",
    ring: "ring-[#f7c5af]/70",
    iconBg: "bg-[#e07a55]",
  },
};

function PartnerValueProps() {
  const cards: ValueCard[] = [
    {
      tint: "mint",
      title: "White-label, launched in weeks",
      body: "A pre-built game library, onboarding, and mission engine - you brand it, we deploy it. No internal build cycle required.",
      icon: <PaletteIcon />,
    },
    {
      tint: "sky",
      title: "Engagement members opt into",
      body: "Members come for the games and stay for the rewards. Ad-free, available 24/7, one login across the whole catalog.",
      icon: <PhoneIcon />,
    },
    {
      tint: "coral",
      title: "Care-gap missions that move metrics",
      body: "Drive the actions you care about - PCP visits, screenings, app downloads, surveys - and reward them in-game.",
      icon: <TargetIcon />,
    },
    {
      tint: "mintDeep",
      title: "Reporting you've been missing",
      body: "See engagement by game, by cohort, by mission. The data partners almost never get from a traditional benefit app.",
      icon: <ChartIcon />,
    },
  ];

  return (
    <section className="bg-grayscale-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">
            What partners get
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-brand-teal-700 sm:text-5xl">
            Everything you need to launch a member engagement program that works.
          </h2>
        </header>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((card) => {
            const tint = TINTS[card.tint];
            return (
              <li
                key={card.title}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br p-8 ring-1 ${tint.bg} ${tint.ring}`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg shadow-grayscale-900/10 ${tint.iconBg}`}
                >
                  {card.icon}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-brand-teal-700">
                  {card.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-grayscale-600">{card.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function PartnerStats() {
  const stats = [
    { percent: "91%", label: "found it easy to learn about their benefits" },
    { percent: "90%", label: "found it easy to learn about their health" },
    { percent: "93%", label: "found it easy to use and interact with" },
  ];
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-extrabold tracking-tight text-brand-teal-700 sm:text-4xl">
          Members tell us this is the modern benefit they actually want.
        </h2>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <li
              key={stat.percent}
              className="rounded-3xl bg-gradient-to-br from-brand-mint-50 to-white p-8 text-center ring-1 ring-grayscale-200/60"
            >
              <p className="font-display text-6xl font-extrabold tracking-tight text-brand-mint-600">
                {stat.percent}
              </p>
              <p className="mt-3 text-base leading-relaxed text-grayscale-600">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PartnerLaunch() {
  const steps = [
    {
      title: "Discovery & scope",
      body: "30-minute walkthrough, member personas, and the care gaps you want to move.",
      icon: <CalendarIcon />,
    },
    {
      title: "Brand & missions",
      body: "We white-label the experience and configure mission flows to your priorities.",
      icon: <PaletteIcon />,
    },
    {
      title: "Member comms",
      body: "Email, SMS, and in-app templates ready to go. You approve, we send.",
      icon: <MegaphoneIcon />,
    },
    {
      title: "Go live & report",
      body: "Members start playing. You see engagement and mission completion in real time.",
      icon: <RocketIcon />,
    },
  ];

  return (
    <section className="bg-grayscale-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">
            How a launch works
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-brand-teal-700 sm:text-5xl">
            From kickoff to live members in 6 - 8 weeks.
          </h2>
        </header>

        <ol className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="pointer-events-none absolute left-12 right-12 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand-mint-300 to-transparent lg:block"
          />
          {steps.map((step, idx) => (
            <li
              key={step.title}
              className="relative flex flex-col gap-4 rounded-3xl bg-white p-7 ring-1 ring-grayscale-200/60"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mint-500 text-white shadow-lg shadow-brand-mint-500/20">
                {step.icon}
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-teal-700 font-display text-xs font-extrabold text-white ring-2 ring-grayscale-50">
                  {idx + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-brand-teal-700">{step.title}</h3>
              <p className="text-sm leading-relaxed text-grayscale-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PartnerFinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-teal-700 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-brand-mint-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -bottom-32 h-[26rem] w-[26rem] rounded-full bg-brand-sky-400/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-300">
          Talk to the team
        </p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Show me what a Motivv launch would look like.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
          30 minutes. We share screen, walk the member experience, show the reporting, and sketch what
          a 60-day pilot would look like for your members.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CtaLink href={MAILTO}>Get a demo</CtaLink>
          <Link
            href="mailto:help@motivvhealthstudios.com"
            className="text-sm font-semibold text-brand-mint-300 underline-offset-4 hover:underline"
          >
            or email help@motivvhealthstudios.com
          </Link>
        </div>
        <p className="mt-6 text-xs text-white/60">We reply within one business day.</p>
      </div>
    </section>
  );
}

function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M12 3a9 9 0 0 0 0 18c1.2 0 2-.9 2-2 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.2 0-.8.7-1.5 1.5-1.5H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="11" r="1.2" fill="currentColor" />
      <circle cx="9.5" cy="7.5" r="1.2" fill="currentColor" />
      <circle cx="14.5" cy="7.5" r="1.2" fill="currentColor" />
      <circle cx="17" cy="11" r="1.2" fill="currentColor" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="6" y="2.5" width="12" height="19" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <line x1="6" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1.6" />
      <line x1="6" y1="17.5" x2="18" y2="17.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="19.5" r="0.9" fill="currentColor" />
      <rect x="8.5" y="8" width="3" height="3" rx="0.7" fill="currentColor" />
      <rect x="12.5" y="8" width="3" height="3" rx="0.7" fill="currentColor" opacity="0.55" />
      <rect x="8.5" y="12" width="3" height="3" rx="0.7" fill="currentColor" opacity="0.55" />
      <rect x="12.5" y="12" width="3" height="3" rx="0.7" fill="currentColor" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <path d="M12 3.5V1.5M12 22.5V20.5M3.5 12H1.5M22.5 12H20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3.5 20.5h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="5" y="13" width="3.2" height="6" rx="1" fill="currentColor" />
      <rect x="10.4" y="9" width="3.2" height="10" rx="1" fill="currentColor" opacity="0.7" />
      <rect x="15.8" y="5" width="3.2" height="14" rx="1" fill="currentColor" />
      <path d="M4 9 L8 6 L13 7.5 L19 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" fill="none" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" stroke="currentColor" strokeWidth="1.8" />
      <line x1="8" y1="3" x2="8" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="16" y1="3" x2="16" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="7" y="12.5" width="3" height="3" rx="0.6" fill="currentColor" />
      <rect x="11" y="12.5" width="3" height="3" rx="0.6" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 10v4l11 5V5L4 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="currentColor" fillOpacity="0.18" />
      <path d="M15 7c2.5.8 4 2.6 4 5s-1.5 4.2-4 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 14.5v3.5a1.5 1.5 0 0 0 3 0v-2.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M14.5 3.5C18 4.5 19.5 6.5 20.5 10c-2 .2-3.6 1-5 2.5l-4-4c1.5-1.4 2.3-3 2.5-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path d="M11.5 12.5 7 17l-3-1 1-3 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="16" cy="8" r="1.4" fill="currentColor" />
      <path d="M5 19c0 1.2 1 2.2 2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
