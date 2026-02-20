"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
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
              Elite Software Studio
            </span>
          </div>

          {/* Massive Headline - Left Aligned */}
          <h1 className="mb-4 font-mono text-4xl leading-[1.1] font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="block">High-Performance</span>
            <span className="block text-[var(--primary)]">Apps.</span>
            <span className="block text-[var(--muted-foreground)]/30">
              Zero Bloat.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
            Stop letting bloated Shopify apps kill your conversions.{" "}
            <span className="font-semibold text-[var(--foreground)]">
              AppLass
            </span>{" "}
            builds elite-tier tools with{" "}
            <span className="inline-flex items-center gap-1 border-b-2 border-[var(--cta)]/40 font-mono text-[var(--foreground)]">
              &lt;2.1KB
            </span>{" "}
            payloads that keep your Core Web Vitals green.
          </p>

          {/* Stats Row */}
          <div className="mb-8 flex flex-wrap items-baseline gap-8 text-sm">
            <div>
              <span className="font-mono text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                10K+
              </span>
              <span className="ml-2 text-[var(--muted-foreground)]">
                Downloads
              </span>
            </div>
            <div className="h-6 w-px bg-[var(--border)]" />
            <div>
              <span className="font-mono text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                4.4★
              </span>
              <span className="ml-2 text-[var(--muted-foreground)]">
                Rating
              </span>
            </div>
            <div className="h-6 w-px bg-[var(--border)]" />
            <div>
              <span className="font-mono text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                &lt;2.1KB
              </span>
              <span className="ml-2 text-[var(--muted-foreground)]">
                Payload
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/apps"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 border-2 border-[var(--foreground)] bg-[var(--foreground)] px-8 py-4 font-semibold text-[var(--background)] transition-all duration-200 hover:bg-transparent hover:text-[var(--foreground)]"
            >
              See Our Apps
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/blog"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 border-2 border-[var(--foreground)]/20 bg-transparent px-8 py-4 font-semibold text-[var(--foreground)] transition-all duration-200 hover:border-[var(--foreground)]"
            >
              Read the Logic Lab
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="pointer-events-none absolute top-1/4 right-12 hidden h-48 w-px bg-gradient-to-b from-transparent via-[var(--cta)]/30 to-transparent lg:block" />
    </section>
  );
}
