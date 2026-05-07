"use client";

import Image from "next/image";
import Link from "next/link";

import type { AppRecord } from "@/lib/content";

type Props = {
  app: AppRecord;
};

export function AppCard({ app }: Props) {
  return (
    <Link
      href={app.appsFlyerOneLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col gap-4 rounded-3xl bg-white p-5 ring-1 ring-grayscale-200/70 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-brand-mint-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mint-500"
    >
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-1 ring-grayscale-200/60 sm:h-20 sm:w-20">
          <Image
            src={app.iconUrl}
            alt=""
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-bold leading-tight text-brand-teal-700 sm:text-xl">
            {app.name}
          </h3>
          <p className="mt-1 inline-flex items-center rounded-full bg-brand-mint-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-mint-700">
            {app.genre}
          </p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-grayscale-600">{app.shortDescription}</p>

      <div className="mt-auto flex items-center justify-between pt-2 text-sm font-semibold text-brand-mint-600 transition group-hover:text-brand-mint-700">
        <span className="inline-flex items-center gap-1.5">
          Get the game
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="transition group-hover:translate-x-0.5"
          >
            <path
              d="M3 7h8m0 0L7 3m4 4l-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-xs font-medium text-grayscale-400">Free with benefits</span>
      </div>
    </Link>
  );
}
