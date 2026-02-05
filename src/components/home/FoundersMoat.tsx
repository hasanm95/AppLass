import { Section } from "@/components/common/Section";
import { PILLARS } from "@/constants/home-data";
import { Zap, Calculator, Globe } from "lucide-react";

const ICONS = {
  Zap,
  Calculator,
  Globe,
};

export function FoundersMoat() {
  return (
    <Section
      id="about"
      className="relative bg-[var(--muted)] py-16 md:py-24 lg:py-32"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-xs font-bold tracking-widest text-[var(--muted-foreground)]/50 uppercase">
              PHILOSOPHY
            </span>
            <span className="block h-px flex-1 bg-[var(--foreground)]/20" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <h2 className="font-mono text-2xl leading-tight font-bold text-[var(--foreground)] md:text-3xl lg:text-4xl">
              Built Different
              <br />
              <span className="text-[var(--muted-foreground)]/40">
                by Logic.
              </span>
            </h2>

            <div className="flex items-end">
              <p className="max-w-md border-l-2 border-[var(--cta)]/30 pl-6 text-lg leading-relaxed text-[var(--muted-foreground)] italic">
                &quot;AppLass apps are developed using mathematical optimization
                techniques to minimize JavaScript execution time.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Pillars - Vertical Timeline Style */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-4 hidden w-px bg-[var(--border)] md:block" />

          <div className="space-y-8 md:space-y-12">
            {PILLARS.map((pillar, index) => {
              const Icon = ICONS[pillar.iconName as keyof typeof ICONS];
              return (
                <div
                  key={index}
                  className="group relative grid grid-cols-1 gap-6 md:grid-cols-[80px_1fr] md:gap-12"
                >
                  {/* Number & Icon */}
                  <div className="flex items-start gap-4 md:flex-col md:items-center">
                    <span className="font-mono text-xs font-bold tracking-widest text-[var(--muted-foreground)]/50 uppercase">
                      0{index + 1}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-[var(--card)] transition-all duration-200 group-hover:border-[var(--cta)] group-hover:bg-[var(--cta)]/5">
                      {Icon && (
                        <Icon className="h-5 w-5 text-[var(--muted-foreground)] transition-colors group-hover:text-[var(--cta)]" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative border-l-2 border-[var(--foreground)]/10 bg-[var(--card)] py-6 pl-6 transition-all duration-200 hover:border-l-[var(--cta)] md:pl-8">
                    <span className="mb-2 block font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--muted-foreground)] uppercase">
                      {pillar.label}
                    </span>
                    <h3 className="mb-3 font-mono text-lg font-bold text-[var(--foreground)] md:text-xl">
                      {pillar.title}
                    </h3>
                    <p className="max-w-lg text-[var(--muted-foreground)]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
