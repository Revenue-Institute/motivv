import Link from "next/link";

import { STORE_LINKS } from "@/lib/content";

type Props = {
  iosHref?: string;
  androidHref?: string;
  className?: string;
  variant?: "light" | "dark";
};

export function StoreBadges({
  iosHref = STORE_LINKS.ios,
  androidHref = STORE_LINKS.android,
  className,
  variant = "dark",
}: Props) {
  return (
    <div className={["flex flex-wrap items-center gap-3", className].filter(Boolean).join(" ")}>
      <Link
        href={iosHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="block"
      >
        <AppStoreBadge variant={variant} />
      </Link>
      <Link
        href={androidHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className="block"
      >
        <GooglePlayBadge variant={variant} />
      </Link>
    </div>
  );
}

function AppStoreBadge({ variant }: { variant: "light" | "dark" }) {
  const bg = variant === "dark" ? "#000" : "#fff";
  const fg = variant === "dark" ? "#fff" : "#0a232e";
  const stroke = variant === "dark" ? "transparent" : "#cbd5e1";
  return (
    <svg
      viewBox="0 0 160 52"
      width="160"
      height="52"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      className="h-12 w-auto"
    >
      <rect width="160" height="52" rx="10" fill={bg} stroke={stroke} />
      <g transform="translate(14, 12)" fill={fg}>
        <path d="M14.5 6.4c.7-.9 1.2-2.1 1-3.4-1.1.1-2.5.8-3.2 1.7-.7.8-1.3 2-1.1 3.2 1.3.1 2.6-.6 3.3-1.5zm2.4 7.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-2.9-1.9-3.6-2-1.5-.2-3 .9-3.7.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.3 2.6 1.3-.1 1.8-.9 3.4-.9s2.1.9 3.5.9c1.5 0 2.4-1.3 3.3-2.5 1-1.4 1.5-2.8 1.5-2.9-.1-.1-2.7-1.1-2.7-4.1z" />
      </g>
      <g transform="translate(50, 16)" fill={fg} fontFamily="-apple-system, BlinkMacSystemFont, sans-serif">
        <text fontSize="8" fontWeight="400">
          Download on the
        </text>
        <text y="14" fontSize="14" fontWeight="700">
          App Store
        </text>
      </g>
    </svg>
  );
}

function GooglePlayBadge({ variant }: { variant: "light" | "dark" }) {
  const bg = variant === "dark" ? "#000" : "#fff";
  const fg = variant === "dark" ? "#fff" : "#0a232e";
  const stroke = variant === "dark" ? "transparent" : "#cbd5e1";
  return (
    <svg
      viewBox="0 0 170 52"
      width="170"
      height="52"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      className="h-12 w-auto"
    >
      <rect width="170" height="52" rx="10" fill={bg} stroke={stroke} />
      <g transform="translate(14, 12)">
        <path d="M0 1.5v25c0 .8.4 1.4 1 1.7l13.5-14.2L1 0c-.6.3-1 .9-1 1.5z" fill="#48be9a" />
        <path d="M19.6 19.5l-3.3-3.4-3.6 3.8 4 4.1c.4.2.9.2 1.3-.1l4.6-2.6c1.3-.7 1.3-2.6 0-3.3l-3 1.5z" fill="#3aa384" />
        <path d="M14.5 14L1 0c.4-.2.9-.2 1.3 0l16.6 9.4c1.3.7 1.3 2.6 0 3.3l-4.4 1.3z" fill="#7fdcae" />
        <path d="M14.5 14l-13.5 14.1c.4.2.9.2 1.3-.1l16.6-9.4-4.4-4.6z" fill="#5fcca0" />
      </g>
      <g transform="translate(50, 16)" fill={fg} fontFamily="-apple-system, BlinkMacSystemFont, sans-serif">
        <text fontSize="8" fontWeight="400">
          GET IT ON
        </text>
        <text y="14" fontSize="14" fontWeight="700">
          Google Play
        </text>
      </g>
    </svg>
  );
}
