"use client";

import { useMemo, useState } from "react";

import type { AppGenre, AppRecord } from "@/lib/content";
import { APP_GENRES } from "@/lib/content";

import { AppCard } from "./app-card";

type FilterValue = "All" | AppGenre;

type Props = {
  apps: AppRecord[];
};

export function AppGridClient({ apps }: Props) {
  const [active, setActive] = useState<FilterValue>("All");

  const counts = useMemo(() => {
    const map: Record<FilterValue, number> = {
      All: apps.length,
      Puzzle: 0,
      Word: 0,
      Card: 0,
      Action: 0,
    };
    for (const app of apps) map[app.genre] = (map[app.genre] ?? 0) + 1;
    return map;
  }, [apps]);

  const filtered = useMemo(
    () => (active === "All" ? apps : apps.filter((a) => a.genre === active)),
    [apps, active],
  );

  const filters: FilterValue[] = ["All", ...APP_GENRES];

  return (
    <div>
      <div role="radiogroup" aria-label="Filter games by genre" className="flex flex-wrap items-center gap-2">
        {filters.map((value) => {
          const isActive = active === value;
          const count = counts[value] ?? 0;
          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => setActive(value)}
              className={[
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mint-500",
                isActive
                  ? "bg-brand-teal-700 text-white shadow-sm"
                  : "bg-white text-grayscale-600 ring-1 ring-grayscale-200 hover:bg-grayscale-50 hover:text-brand-teal-700",
              ].join(" ")}
            >
              <span>{value}</span>
              <span
                className={[
                  "rounded-full px-1.5 py-0.5 text-[11px] font-semibold tabular-nums",
                  isActive ? "bg-white/15 text-white/90" : "bg-grayscale-100 text-grayscale-500",
                ].join(" ")}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <p className="rounded-3xl bg-white p-8 text-center text-grayscale-500 ring-1 ring-grayscale-200">
            No games in this category yet.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
