"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="bg-background relative flex h-screen items-center overflow-hidden pt-20"
      aria-label="Introduction"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient fade */}
      <div className="from-background to-background pointer-events-none absolute inset-0 bg-gradient-to-b via-transparent" />

      <div className="section-container relative z-10 py-12 md:py-16">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-4">
            <span className="editorial-line-accent" />
            <span className="text-eyebrow text-cta">Elite Software Studio</span>
          </div>

          {/* Massive Headline - Left Aligned */}
          <h1 className="mb-4 font-mono text-4xl leading-[0.95] font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="block">High-Performance</span>
            <span className="text-primary block">Apps.</span>
            <span className="text-muted-foreground/30 block">Zero Bloat.</span>
          </h1>

          {/* Subheading */}
          <p className="text-muted-foreground mb-8 max-w-2xl text-base leading-relaxed md:text-lg">
            Stop letting bloated Shopify apps kill your conversions.{" "}
            <span className="text-foreground font-semibold">AppLass</span>{" "}
            builds elite-tier tools with{" "}
            <span className="border-cta/40 text-foreground inline-flex items-center gap-1 border-b-2 font-mono">
              &lt;2.1KB
            </span>{" "}
            payloads that keep your Core Web Vitals green.
          </p>

          {/* Stats Row */}
          <div className="stats-row mb-8">
            <div>
              <span className="stat-value">10K+</span>
              <span className="stat-label ml-2">Downloads</span>
            </div>
            <div className="bg-border h-6 w-px" />
            <div>
              <span className="stat-value">4.4★</span>
              <span className="stat-label ml-2">Rating</span>
            </div>
            <div className="bg-border h-6 w-px" />
            <div>
              <span className="stat-value">&lt;2.1KB</span>
              <span className="stat-label ml-2">Payload</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/apps" className="btn-sharp group">
              See Our Apps
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/blog" className="btn-ghost-sharp group">
              Read the Logic Lab
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="via-cta/30 pointer-events-none absolute top-1/4 right-12 hidden h-48 w-px bg-gradient-to-b from-transparent to-transparent lg:block" />
    </section>
  );
}
