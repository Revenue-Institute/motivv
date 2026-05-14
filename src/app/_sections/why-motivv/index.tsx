import type { HomeContent } from "@/lib/content";

type Props = {
  content: HomeContent["whyMotivv"];
};

type Variant = "rewards" | "always-on" | "learn" | "benefits";

const ROW_STYLES: { gradient: string; variant: Variant }[] = [
  {
    gradient: "from-brand-mint-100 via-brand-mint-50 to-white",
    variant: "rewards",
  },
  {
    gradient: "from-brand-sky-100 via-brand-sky-50 to-white",
    variant: "always-on",
  },
  {
    gradient: "from-brand-mint-50 via-white to-brand-sky-50",
    variant: "learn",
  },
  {
    gradient: "from-brand-sky-100 via-brand-mint-50 to-white",
    variant: "benefits",
  },
];

export function WhyMotivv({ content }: Props) {
  return (
    <section id="why-motivv" className="bg-grayscale-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-brand-teal-700 sm:text-5xl">
            {content.heading}
          </h2>
        </header>

        <div className="mt-16 space-y-12 md:space-y-20">
          {content.rows.map((row, idx) => {
            const reversed = idx % 2 === 1;
            const style = ROW_STYLES[idx % ROW_STYLES.length]!;
            return (
              <div
                key={row.heading}
                className={[
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
                  reversed ? "lg:[direction:rtl]" : "",
                ].join(" ")}
              >
                <div className={reversed ? "lg:[direction:ltr]" : ""}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint-600">
                    {row.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-teal-700 sm:text-4xl">
                    {row.heading}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-grayscale-600">{row.body}</p>
                </div>
                <div
                  className={[
                    "relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-gradient-to-br shadow-xl ring-1 ring-grayscale-200/60",
                    style.gradient,
                    reversed ? "lg:[direction:ltr]" : "",
                  ].join(" ")}
                  role="img"
                  aria-label={row.imageAlt}
                >
                  <Illustration variant={style.variant} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Illustration({ variant }: { variant: Variant }) {
  switch (variant) {
    case "rewards":
      return <RewardsArt />;
    case "always-on":
      return <AlwaysOnArt />;
    case "learn":
      return <LearnArt />;
    case "benefits":
      return <BenefitsArt />;
  }
}

const COLOR = {
  mint: "#48be9a",
  mintDeep: "#2c8268",
  mintSoft: "#adebcb",
  mintWash: "#d6f5e6",
  sky: "#6fa7c8",
  skySoft: "#b9d4e7",
  skyWash: "#dceaf3",
  teal: "#103240",
  tealMid: "#1f5667",
  coral: "#f7a98a",
  coralDeep: "#e07a55",
  cream: "#fff7ec",
};

function Sparkle({ x, y, size = 12, fill = COLOR.mintDeep }: { x: number; y: number; size?: number; fill?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d={`M0,-${size} L${size * 0.28},-${size * 0.28} L${size},0 L${size * 0.28},${size * 0.28} L0,${size} L-${size * 0.28},${size * 0.28} L-${size},0 L-${size * 0.28},-${size * 0.28} Z`}
        fill={fill}
      />
    </g>
  );
}

function RewardsArt() {
  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="60" cy="60" r="58" fill={COLOR.mintSoft} opacity="0.55" />
      <circle cx="345" cy="245" r="52" fill={COLOR.skySoft} opacity="0.55" />

      <g transform="translate(290 70)">
        <circle cx="0" cy="0" r="36" fill={COLOR.mintDeep} />
        <circle cx="0" cy="-2" r="30" fill={COLOR.mint} />
        <text x="0" y="6" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" fontFamily="ui-sans-serif, system-ui">
          +10
        </text>
      </g>

      <g transform="translate(200 160) rotate(-8)">
        <g transform="translate(-130 -55)">
          <rect x="0" y="0" width="260" height="110" rx="20" fill={COLOR.mint} />
          <rect x="0" y="0" width="260" height="110" rx="20" stroke={COLOR.mintDeep} strokeWidth="3" fill="none" />
          <circle cx="0" cy="55" r="12" fill={COLOR.mintWash} />
          <circle cx="260" cy="55" r="12" fill={COLOR.mintWash} />
          <line x1="86" y1="14" x2="86" y2="96" stroke="#fff" strokeWidth="2.5" strokeDasharray="6 5" opacity="0.9" />
          <g transform="translate(43 55)">
            <path
              d="M0,-22 L6,-7 L22,-5 L10,5 L13,21 L0,12 L-13,21 L-10,5 L-22,-5 L-6,-7 Z"
              fill="#fff"
            />
          </g>
          <text x="110" y="48" fontSize="13" letterSpacing="3" fontWeight="800" fill="#fff" fontFamily="ui-sans-serif, system-ui">
            ADMIT ONE
          </text>
          <text x="110" y="78" fontSize="22" fontWeight="900" fill="#fff" fontFamily="ui-sans-serif, system-ui">
            REWARD
          </text>
        </g>
      </g>

      <Sparkle x={50} y={210} size={14} fill={COLOR.mintDeep} />
      <Sparkle x={350} y={120} size={10} fill={COLOR.sky} />
      <Sparkle x={150} y={50} size={8} fill={COLOR.mintDeep} />
    </svg>
  );
}

function AlwaysOnArt() {
  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="70" cy="240" r="62" fill={COLOR.skySoft} opacity="0.55" />
      <circle cx="340" cy="70" r="46" fill={COLOR.mintSoft} opacity="0.6" />

      <g transform="translate(330 70)">
        <circle cx="0" cy="0" r="22" fill={COLOR.mint} />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 8;
          const x1 = Math.cos(angle) * 30;
          const y1 = Math.sin(angle) * 30;
          const x2 = Math.cos(angle) * 40;
          const y2 = Math.sin(angle) * 40;
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={COLOR.mint} strokeWidth="3" strokeLinecap="round" />
          );
        })}
      </g>

      <g transform="translate(200 160)">
        <rect x="-72" y="-110" width="144" height="220" rx="22" fill={COLOR.teal} />
        <rect x="-66" y="-104" width="132" height="208" rx="17" fill={COLOR.cream} />
        <rect x="-58" y="-96" width="116" height="20" rx="6" fill={COLOR.mintWash} />
        <circle cx="-46" cy="-86" r="4" fill={COLOR.mint} />
        <text x="-34" y="-82" fontSize="9" fontWeight="700" fill={COLOR.tealMid} fontFamily="ui-sans-serif, system-ui">
          MOTIVV
        </text>

        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => {
            const palette = [COLOR.mint, COLOR.sky, COLOR.coral];
            const color = palette[(row + col) % palette.length]!;
            return (
              <rect
                key={`${row}-${col}`}
                x={-58 + col * 39}
                y={-66 + row * 39}
                width="32"
                height="32"
                rx="8"
                fill={color}
              />
            );
          }),
        )}

        <rect x="-56" y="56" width="112" height="38" rx="12" fill={COLOR.mintWash} />
        <rect x="-46" y="66" width="38" height="18" rx="5" fill={COLOR.mint} />
        <rect x="-2" y="66" width="22" height="18" rx="5" fill={COLOR.tealMid} opacity="0.25" />
        <rect x="24" y="66" width="22" height="18" rx="5" fill={COLOR.tealMid} opacity="0.25" />
      </g>

      <Sparkle x={60} y={70} size={11} fill={COLOR.mintDeep} />
      <Sparkle x={355} y={210} size={9} fill={COLOR.sky} />
    </svg>
  );
}

function LearnArt() {
  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="60" cy="240" r="54" fill={COLOR.mintSoft} opacity="0.55" />
      <circle cx="340" cy="80" r="48" fill={COLOR.skySoft} opacity="0.55" />

      <g transform="translate(310 90)">
        <path
          d="M0,-32 C16,-32 28,-20 28,-6 C28,4 22,12 14,18 L14,28 L-14,28 L-14,18 C-22,12 -28,4 -28,-6 C-28,-20 -16,-32 0,-32 Z"
          fill={COLOR.cream}
          stroke={COLOR.coralDeep}
          strokeWidth="3"
        />
        <rect x="-12" y="30" width="24" height="6" rx="2" fill={COLOR.coralDeep} />
        <path d="M-6,38 L6,38" stroke={COLOR.coralDeep} strokeWidth="3" strokeLinecap="round" />
        {[-1, 0, 1].map((i) => (
          <line
            key={i}
            x1={i * 14}
            y1={-44}
            x2={i * 14}
            y2={-52}
            stroke={COLOR.coralDeep}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}
        <line x1="-30" y1="-26" x2="-40" y2="-32" stroke={COLOR.coralDeep} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="30" y1="-26" x2="40" y2="-32" stroke={COLOR.coralDeep} strokeWidth="2.5" strokeLinecap="round" />
      </g>

      <g transform="translate(170 160) rotate(-5)">
        <rect x="-110" y="-80" width="220" height="160" rx="20" fill="#fff" stroke={COLOR.tealMid} strokeWidth="2" opacity="0.95" />
        <rect x="-110" y="-80" width="220" height="32" rx="20" fill={COLOR.mint} />
        <rect x="-110" y="-62" width="220" height="14" fill={COLOR.mint} />
        <circle cx="-92" cy="-64" r="6" fill="#fff" />
        <text x="-78" y="-58" fontSize="11" fontWeight="800" fill="#fff" fontFamily="ui-sans-serif, system-ui">
          DAILY TRIVIA
        </text>

        <text x="-92" y="-22" fontSize="13" fontWeight="700" fill={COLOR.teal} fontFamily="ui-sans-serif, system-ui">
          How much water?
        </text>

        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(-92 ${0 + i * 22})`}>
            <rect x="0" y="0" width="184" height="18" rx="9" fill={i === 1 ? COLOR.mintWash : COLOR.skyWash} />
            <circle cx="9" cy="9" r="5" fill={i === 1 ? COLOR.mint : "#fff"} stroke={i === 1 ? COLOR.mintDeep : COLOR.sky} strokeWidth="1.5" />
            {i === 1 && (
              <path d="M6,9 L8.5,11.5 L12,7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            )}
            <rect x="20" y="6" width={i === 0 ? 100 : i === 1 ? 80 : 120} height="6" rx="3" fill={i === 1 ? COLOR.mintDeep : COLOR.tealMid} opacity="0.4" />
          </g>
        ))}
      </g>

      <Sparkle x={80} y={60} size={10} fill={COLOR.mintDeep} />
      <Sparkle x={250} y={50} size={8} fill={COLOR.coralDeep} />
      <Sparkle x={350} y={230} size={11} fill={COLOR.sky} />
    </svg>
  );
}

function BenefitsArt() {
  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="55" cy="80" r="50" fill={COLOR.mintSoft} opacity="0.5" />
      <circle cx="345" cy="230" r="56" fill={COLOR.skySoft} opacity="0.55" />

      <g transform="translate(200 160)">
        <path
          d="M0,-78 L72,-78 C82,-78 90,-70 90,-60 L90,30 C90,40 82,48 72,48 L0,82 L-72,48 C-82,48 -90,40 -90,30 L-90,-60 C-90,-70 -82,-78 -72,-78 Z"
          fill={COLOR.sky}
          opacity="0.18"
        />
        <path
          d="M0,-72 L66,-72 C74,-72 80,-66 80,-58 L80,26 C80,34 74,40 66,40 L0,72 L-66,40 C-74,40 -80,34 -80,26 L-80,-58 C-80,-66 -74,-72 -66,-72 Z"
          fill="none"
          stroke={COLOR.sky}
          strokeWidth="2.5"
          strokeDasharray="6 6"
          opacity="0.7"
        />

        <path
          d="M0,40 C-50,10 -68,-16 -68,-38 C-68,-58 -54,-72 -36,-72 C-22,-72 -10,-62 0,-46 C10,-62 22,-72 36,-72 C54,-72 68,-58 68,-38 C68,-16 50,10 0,40 Z"
          fill={COLOR.mint}
        />
        <path
          d="M0,40 C-50,10 -68,-16 -68,-38 C-68,-58 -54,-72 -36,-72 C-22,-72 -10,-62 0,-46 C10,-62 22,-72 36,-72 C54,-72 68,-58 68,-38 C68,-16 50,10 0,40 Z"
          fill="none"
          stroke={COLOR.mintDeep}
          strokeWidth="3"
        />

        <rect x="-8" y="-46" width="16" height="44" rx="3" fill="#fff" />
        <rect x="-22" y="-32" width="44" height="16" rx="3" fill="#fff" />
      </g>

      <g transform="translate(82 220)">
        <circle cx="0" cy="0" r="22" fill="#fff" stroke={COLOR.mintDeep} strokeWidth="2.5" />
        <rect x="-2" y="-12" width="4" height="24" rx="1.5" fill={COLOR.mintDeep} />
        <rect x="-12" y="-2" width="24" height="4" rx="1.5" fill={COLOR.mintDeep} />
      </g>

      <g transform="translate(330 110)">
        <circle cx="0" cy="0" r="18" fill="#fff" stroke={COLOR.sky} strokeWidth="2.5" />
        <path d="M-7,0 L-1.5,5.5 L8,-5" stroke={COLOR.sky} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      <Sparkle x={70} y={60} size={9} fill={COLOR.mintDeep} />
      <Sparkle x={340} y={170} size={10} fill={COLOR.sky} />
    </svg>
  );
}
