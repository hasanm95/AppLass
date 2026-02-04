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

export function SectionHeader({
  badge,
  title,
  description,
  className,
  centered = false,
}: {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium tracking-wider text-[var(--primary)] uppercase">
          {badge}
        </span>
      )}
      <h2 className="font-mono text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
          {description}
        </p>
      )}
    </div>
  );
}
