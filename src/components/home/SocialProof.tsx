"use client";

import { Section } from "@/components/common/Section";
import Link from "next/link";

const METRICS = [
  { value: "10K+", label: "Downloads" },
  { value: "4.4★", label: "Play Store" },
  { value: "<2.1KB", label: "Payload" },
  { value: "Zero", label: "Telemetry" },
];

export function SocialProof() {
  return (
    <Section className="border-border bg-muted/50 border-y py-12 md:py-16">
      <div className="section-container">
        {/* Horizontal metrics strip */}
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          {/* Intro text */}
          <div className="flex items-center gap-4">
            <span className="editorial-line" />
            <span className="text-muted-foreground text-sm font-medium">
              Trusted by{" "}
              <span className="text-foreground font-bold">10,000+</span> users
            </span>
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-foreground font-mono text-2xl font-bold md:text-3xl">
                  {metric.value}
                </span>
                <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                  {metric.label}
                </span>
                <span className="editorial-line mt-2" />
              </div>
            ))}
          </div>

          {/* App Store Badge */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.screenveil.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-border bg-card hover:border-foreground flex cursor-pointer items-center gap-3 border-2 px-5 py-3 transition-all duration-200"
          >
            <svg
              className="text-foreground h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            <div className="text-left">
              <span className="text-muted-foreground block text-[9px] font-bold tracking-wider uppercase">
                Get it on
              </span>
              <span className="text-foreground block text-sm font-bold">
                Google Play
              </span>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
}
