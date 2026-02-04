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
    <Section id="solutions" className="block-section bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="mb-8 flex items-center gap-4">
            <span className="product-number">SOLUTIONS</span>
            <span className="editorial-line flex-1" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <h2 className="text-display-sm">
              Logical
              <br />
              <span className="text-muted-foreground/40">Solutions.</span>
            </h2>

            <div className="flex items-end">
              <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
                We don&apos;t just build features; we engineer{" "}
                <span className="border-cta/40 text-foreground border-b-2 font-semibold">
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
                className="group border-border bg-background hover:border-cta cursor-pointer border p-6 transition-all duration-200 md:p-8"
              >
                {/* Number */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="product-number">0{index + 1}</span>
                  <div className="border-border group-hover:border-cta group-hover:bg-cta/5 flex h-10 w-10 items-center justify-center border transition-all duration-200">
                    {Icon && (
                      <Icon className="text-muted-foreground group-hover:text-cta h-5 w-5 transition-colors" />
                    )}
                  </div>
                </div>

                <span className="editorial-line mb-6" />

                <h3 className="text-headline mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
