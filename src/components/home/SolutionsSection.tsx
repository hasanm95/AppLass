import { Section } from "@/components/common/Section";
import { SOLUTIONS } from "@/constants/home-data";
import { ShoppingBag, Clock, Users } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

const ICONS = {
  ShoppingBag,
  Clock,
  Users,
};

interface SolutionsSectionProps {
  translations?: Dictionary["home"]["solutions"];
  solutions?: Dictionary["solutionItems"];
}

export function SolutionsSection({ translations, solutions }: SolutionsSectionProps) {
  // Map our SOLUTIONS array to the dictionary keys
  const SOLUTION_KEYS = ["ecommerce", "digitalDiscipline", "accessibility"] as const;

  return (
    <Section
      id="solutions"
      className="bg-card py-16 md:py-24 lg:py-32"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-xs font-bold tracking-widest text-(--muted-foreground)/50 uppercase">
              {translations?.sectionLabel || "SOLUTIONS"}
            </span>
            <span className="block h-px flex-1 bg-(--foreground)/20" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <h2 className="font-mono text-2xl leading-tight font-bold text-foreground md:text-3xl lg:text-4xl">
              {translations?.headline || "Logical"}
              <br />
              <span className="text-(--muted-foreground)/40">
                {translations?.headlineAccent || "Solutions."}
              </span>
            </h2>

            <div className="flex items-end">
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                {translations?.description ? (
                  <>
                    {translations.description.split("{highlight}")[0]}
                    <span className="border-b-2 border-(--cta)/40 font-semibold text-foreground">
                      {translations.descriptionHighlight}
                    </span>
                    {translations.description.split("{highlight}")[1]}
                  </>
                ) : (
                  <>
                    We don&apos;t just build features; we engineer{" "}
                    <span className="border-b-2 border-(--cta)/40 font-semibold text-foreground">
                      systemic improvements
                    </span>{" "}
                    that solve core business logic bottlenecks.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {SOLUTIONS.map((solution, index) => {
            const Icon = ICONS[solution.iconName as keyof typeof ICONS];
            
            // Get the translation for this specific solution item
            const dictKey = SOLUTION_KEYS[index];
            const translation = solutions?.[dictKey];

            return (
              <div
                key={index}
                className="group cursor-pointer border border-border bg-background p-6 transition-all duration-200 hover:border-cta md:p-8"
              >
                {/* Number */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-(--muted-foreground)/50 uppercase">
                    0{index + 1}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center border border-border transition-all duration-200 group-hover:border-cta group-hover:bg-(--cta)/5">
                    {Icon && (
                      <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-cta" />
                    )}
                  </div>
                </div>

                <span className="mb-6 block h-px w-16 bg-(--foreground)/20" />

                <h3 className="mb-3 font-mono text-lg font-bold text-foreground md:text-xl">
                  {translation?.title || solution.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {translation?.description || solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
// aria-label
