import { Section } from "@/components/common/Section";
import type { Dictionary } from "@/i18n/get-dictionary";

const defaultSocialProof = {
  trustedBy: "Trusted by {count} users",
  metrics: {
    downloads: { value: "10K+", label: "Downloads" },
    playStore: { value: "4.4★", label: "Play Store" },
    payload: { value: "<2.1KB", label: "Payload" },
    telemetry: { value: "Zero", label: "Telemetry" },
  },
  googlePlay: {
    getItOn: "Get it on",
    storeName: "Google Play",
  },
};

interface SocialProofProps {
  translations?: Dictionary["home"]["socialProof"];
}

export function SocialProof({ translations }: SocialProofProps) {
  const t = translations ?? defaultSocialProof;

  const METRICS = [
    { value: t.metrics.downloads.value, label: t.metrics.downloads.label },
    { value: t.metrics.playStore.value, label: t.metrics.playStore.label },
    { value: t.metrics.payload.value, label: t.metrics.payload.label },
    { value: t.metrics.telemetry.value, label: t.metrics.telemetry.label },
  ];

  return (
    <Section className="border-y border-[var(--border)] bg-[var(--muted)]/50 py-12 md:py-16">
      <div className="section-container">
        {/* Horizontal metrics strip */}
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          {/* Intro text */}
          <div className="flex items-center gap-4">
            <span className="block h-px w-16 bg-[var(--foreground)]/20" />
            <span className="text-sm font-medium text-[var(--muted-foreground)]">
              {t.trustedBy.replace("{count}", "10,000+").split("10,000+")[0]}
              <span className="font-bold text-[var(--foreground)]">
                10,000+
              </span>
              {t.trustedBy.replace("{count}", "10,000+").split("10,000+")[1]}
            </span>
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-mono text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                  {metric.value}
                </span>
                <span className="text-xs font-medium tracking-wide text-[var(--muted-foreground)] uppercase">
                  {metric.label}
                </span>
                <span className="mt-2 block h-px w-16 bg-[var(--foreground)]/20" />
              </div>
            ))}
          </div>

          {/* Google Play Badge */}
          <a
            href="https://play.google.com/store/apps/details?id=com.screenveil.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex cursor-pointer items-center gap-3 border-2 border-[var(--border)] bg-[var(--card)] px-5 py-3 transition-all duration-200 hover:border-[var(--foreground)]"
          >
            <svg
              className="h-6 w-6 text-[var(--foreground)]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            <div className="text-left">
              <span className="block text-[9px] font-bold tracking-wider text-[var(--muted-foreground)] uppercase">
                {t.googlePlay.getItOn}
              </span>
              <span className="block text-sm font-bold text-[var(--foreground)]">
                {t.googlePlay.storeName}
              </span>
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
}
