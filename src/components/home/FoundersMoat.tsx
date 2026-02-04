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
    <Section id="about" className="block-section bg-muted relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="mb-8 flex items-center gap-4">
            <span className="product-number">PHILOSOPHY</span>
            <span className="editorial-line flex-1" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <h2 className="text-display-sm">
              Built Different
              <br />
              <span className="text-muted-foreground/40">by Logic.</span>
            </h2>

            <div className="flex items-end">
              <p className="border-cta/30 text-muted-foreground max-w-md border-l-2 pl-6 text-lg leading-relaxed italic">
                &quot;AppLass apps are developed using mathematical optimization
                techniques to minimize JavaScript execution time.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Pillars - Vertical Timeline Style */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="bg-border absolute top-0 bottom-0 left-4 hidden w-px md:block" />

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
                    <span className="product-number">0{index + 1}</span>
                    <div className="border-border bg-card group-hover:border-cta group-hover:bg-cta/5 flex h-10 w-10 items-center justify-center border transition-all duration-200">
                      {Icon && (
                        <Icon className="text-muted-foreground group-hover:text-cta h-5 w-5 transition-colors" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="offset-card bg-card py-6">
                    <span className="text-eyebrow text-muted-foreground mb-2 block">
                      {pillar.label}
                    </span>
                    <h3 className="text-headline mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground max-w-lg">
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
