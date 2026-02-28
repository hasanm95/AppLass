import { Section } from "./Section";
import { cn } from "@/lib/utils";

interface SubpageHeroProps {
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  bgClassName?: string;
  headlineClassName?: string;
  children?: React.ReactNode;
}

export function SubpageHero({
  eyebrow,
  headline,
  headlineAccent,
  description,
  centered = false,
  className,
  bgClassName,
  headlineClassName,
  children,
}: SubpageHeroProps) {
  return (
    <Section
      className={cn(
        "border-b border-slate-100 py-20 lg:py-32",
        bgClassName || "bg-iridescent",
        className
      )}
    >
      <div
        className={cn(
          "section-container",
          centered ? "text-center" : "text-center lg:text-left"
        )}
      >
        {children && <div className="mb-12">{children}</div>}
        <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-blue-800 uppercase">
          {eyebrow}
        </span>
        <h1
          className={cn(
            "text-display mb-8 max-w-4xl text-slate-900",
            headlineClassName,
            centered ? "mx-auto" : "mx-auto lg:mx-0"
          )}
        >
          {headline} {headlineAccent && <span className="text-slate-500">{headlineAccent}</span>}
        </h1>
        {description && (
          <p
            className={cn(
              "max-w-2xl text-xl leading-relaxed font-medium text-slate-500",
              centered ? "mx-auto" : "mx-auto lg:mx-0"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </Section>
  );
}
