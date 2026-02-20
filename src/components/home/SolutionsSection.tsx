import { Section } from "@/components/common/Section";
import { SOLUTIONS } from "@/constants/home-data";
import { ShoppingBag, Clock, Users } from "lucide-react";

const ICONS = {
  ShoppingBag,
  Clock,
  Users,
};

export function SolutionsSection() {
  return (
    <Section
      id="solutions"
      className="bg-[var(--card)] py-16 md:py-24 lg:py-32"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-xs font-bold tracking-widest text-[var(--muted-foreground)]/50 uppercase">
              SOLUTIONS
            </span>
            <span className="block h-px flex-1 bg-[var(--foreground)]/20" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <h2 className="font-mono text-2xl leading-tight font-bold text-[var(--foreground)] md:text-3xl lg:text-4xl">
              Logical
              <br />
              <span className="text-[var(--muted-foreground)]/40">
                Solutions.
              </span>
            </h2>

            <div className="flex items-end">
              <p className="max-w-md text-lg leading-relaxed text-[var(--muted-foreground)]">
                We don&apos;t just build features; we engineer{" "}
                <span className="border-b-2 border-[var(--cta)]/40 font-semibold text-[var(--foreground)]">
                  systemic improvements
                </span>{" "}
                that solve core business logic bottlenecks.
              </p>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {SOLUTIONS.map((solution, index) => {
            const Icon = ICONS[solution.iconName as keyof typeof ICONS];
            return (
              <div
                key={index}
                className="group cursor-pointer border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-200 hover:border-[var(--cta)] md:p-8"
              >
                {/* Number */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-[var(--muted-foreground)]/50 uppercase">
                    0{index + 1}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center border border-[var(--border)] transition-all duration-200 group-hover:border-[var(--cta)] group-hover:bg-[var(--cta)]/5">
                    {Icon && (
                      <Icon className="h-5 w-5 text-[var(--muted-foreground)] transition-colors group-hover:text-[var(--cta)]" />
                    )}
                  </div>
                </div>

                <span className="mb-6 block h-px w-16 bg-[var(--foreground)]/20" />

                <h3 className="mb-3 font-mono text-lg font-bold text-[var(--foreground)] md:text-xl">
                  {solution.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {solution.description}
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
