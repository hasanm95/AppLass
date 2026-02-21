import { Section } from "@/components/common/Section";
import { PILLARS } from "@/constants/home-data";
import { Zap, Calculator, Globe } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

const ICONS = {
  Zap,
  Calculator,
  Globe,
};

interface FoundersMoatProps {
  translations?: Dictionary["home"]["foundersMoat"];
  pillars?: Dictionary["pillars"];
}

export function FoundersMoat({ translations, pillars }: FoundersMoatProps) {
  // Map our PILLARS array to the dictionary keys
  const PILLAR_KEYS = ["eliteExpertise", "logicalIntegrity", "radicalAccessibility"] as const;

  return (
    <Section
      id="about"
      className="relative bg-muted py-16 md:py-24 lg:py-32"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-xs font-bold tracking-widest text-(--muted-foreground)/50 uppercase">
              {translations?.sectionLabel || "PHILOSOPHY"}
            </span>
            <span className="block h-px flex-1 bg-(--foreground)/20" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <h2 className="font-mono text-2xl leading-tight font-bold text-foreground md:text-3xl lg:text-4xl">
              {translations?.headline || "Built Different"}
              <br />
              <span className="text-(--muted-foreground)/40">
                {translations?.headlineAccent || "by Logic."}
              </span>
            </h2>

            <div className="flex items-end">
              <p className="max-w-md border-l-2 border-(--cta)/30 pl-6 text-lg leading-relaxed text-muted-foreground italic">
                {translations?.quote || '"AppLass apps are developed using mathematical optimization techniques to minimize JavaScript execution time."'}
              </p>
            </div>
          </div>
        </div>

        {/* Pillars - Vertical Timeline Style */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-4 hidden w-px bg-border md:block" />

          <div className="space-y-8 md:space-y-12">
            {PILLARS.map((pillar, index) => {
              const Icon = ICONS[pillar.iconName as keyof typeof ICONS];
              
              // Get the translation for this specific pillar
              const dictKey = PILLAR_KEYS[index];
              const translation = pillars?.[dictKey];

              return (
                <div
                  key={index}
                  className="group relative grid grid-cols-1 gap-6 md:grid-cols-[80px_1fr] md:gap-12"
                >
                  {/* Number & Icon */}
                  <div className="flex items-start gap-4 md:flex-col md:items-center">
                    <span className="font-mono text-xs font-bold tracking-widest text-(--muted-foreground)/50 uppercase">
                      0{index + 1}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center border border-border bg-card transition-all duration-200 group-hover:border-cta group-hover:bg-(--cta)/5">
                      {Icon && (
                        <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-cta" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative border-l-2 border-(--foreground)/10 bg-card py-6 pl-6 transition-all duration-200 hover:border-l-cta md:pl-8">
                    <span className="mb-2 block font-mono text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                      {translation?.label || pillar.label}
                    </span>
                    <h3 className="mb-3 font-mono text-lg font-bold text-foreground md:text-xl">
                      {translation?.title || pillar.title}
                    </h3>
                    <p className="max-w-lg text-muted-foreground">
                      {translation?.description || pillar.description}
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

// aria-label
