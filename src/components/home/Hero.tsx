"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

const defaultHero = {
  eyebrow: "Elite Software Studio",
  headline: "High-Performance",
  headlineAccent: "Apps.",
  headlineSubdued: "Zero Bloat.",
  subheading:
    "Stop letting bloated Shopify apps kill your conversions. {brand} builds elite-tier tools with {payload} payloads that keep your Core Web Vitals green.",
  stats: {
    downloads: { value: "10K+", label: "Downloads" },
    rating: { value: "4.4★", label: "Rating" },
    payload: { value: "<2.1KB", label: "Payload" },
  },
  cta: {
    primary: "See Our Apps",
    secondary: "Read the Logic Lab",
  },
};

interface HeroProps {
  translations?: Dictionary["home"]["hero"];
}

export function Hero({ translations }: HeroProps) {
  const t = translations ?? defaultHero;

  return (
    <section
      className="relative flex h-screen items-center overflow-hidden bg-[var(--background)] pt-20"
      aria-label="Introduction"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]" />

      <div className="section-container relative z-10 py-12 md:py-16">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-4">
            <span className="block h-px w-24 bg-[var(--cta)]" />
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--cta)] uppercase">
              {t.eyebrow}
            </span>
          </div>

          {/* Massive Headline - Left Aligned */}
          <h1 className="mb-4 font-mono text-4xl leading-[1.1] font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="block">{t.headline}</span>
            <span className="block text-[var(--primary)]">
              {t.headlineAccent}
            </span>
            <span className="block text-[var(--muted-foreground)]/30">
              {t.headlineSubdued}
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
            {t.subheading
              .replace("{brand}", "AppLass")
              .replace("{payload}", "<2.1KB")}
          </p>

          {/* Stats Row */}
          <div className="mb-8 flex flex-wrap items-baseline gap-8 text-sm">
            <div>
              <span className="font-mono text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                {t.stats.downloads.value}
              </span>
              <span className="ml-2 text-[var(--muted-foreground)]">
                {t.stats.downloads.label}
              </span>
            </div>
            <div className="h-6 w-px bg-[var(--border)]" />
            <div>
              <span className="font-mono text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                {t.stats.rating.value}
              </span>
              <span className="ml-2 text-[var(--muted-foreground)]">
                {t.stats.rating.label}
              </span>
            </div>
            <div className="h-6 w-px bg-[var(--border)]" />
            <div>
              <span className="font-mono text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                {t.stats.payload.value}
              </span>
              <span className="ml-2 text-[var(--muted-foreground)]">
                {t.stats.payload.label}
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/apps"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 border-2 border-[var(--foreground)] bg-[var(--foreground)] px-8 py-4 font-semibold text-[var(--background)] transition-all duration-200 hover:bg-transparent hover:text-[var(--foreground)]"
            >
              {t.cta.primary}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/blog"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 border-2 border-[var(--foreground)]/20 bg-transparent px-8 py-4 font-semibold text-[var(--foreground)] transition-all duration-200 hover:border-[var(--foreground)]"
            >
              {t.cta.secondary}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="pointer-events-none absolute top-1/4 right-12 hidden h-48 w-px bg-gradient-to-b from-transparent via-[var(--cta)]/30 to-transparent lg:block" />
    </section>
  );
}
