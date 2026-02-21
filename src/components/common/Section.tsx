import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "article" | "div";
  ariaLabel?: string;
}

export function Section({
  id,
  className,
  children,
  as: Component = "section",
  ariaLabel,
}: SectionProps) {
  return (
    <Component
      id={id}
      aria-label={ariaLabel}
      className={cn("overflow-hidden py-12 md:py-20 lg:py-28", className)}
    >
      {children}
    </Component>
  );
}