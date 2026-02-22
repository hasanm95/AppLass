import { cn } from "@/lib/utils";
import { localePath } from "@/i18n/utils";

type LanguageSwitcherProps = {
  /** The current locale, e.g. "en" or "fr" */
  currentLang: string;
  /** Extra classes for the wrapper element */
  className?: string;
  /** Visual variant – "pill" for desktop pill toggle, "list" for mobile stacked list */
  variant?: "pill" | "list";
  isDark?: boolean;
};

const LOCALES = [
  { code: "en", label: "EN", fullLabel: "English" },
  { code: "fr", label: "FR", fullLabel: "Français" },
] as const;



export function LanguageSwitcher({
  currentLang,
  className,
  variant = "pill",
  isDark = false,
}: LanguageSwitcherProps) {
  if (variant === "list") {
    return (
      <div className={cn("flex flex-col gap-3", className)}>
        <span
          className={cn(
            "font-mono text-[10px] font-bold tracking-widest uppercase",
            isDark ? "text-slate-500" : "text-slate-400"
          )}
        >
          Language
        </span>
        <div className="flex gap-3">
          {LOCALES.map(({ code, fullLabel }) => {
            const isActive = currentLang === code;
            return (
              <a
                key={code}
                href={localePath(code, '/')}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all",
                  isActive
                    ? isDark
                      ? "bg-white text-slate-900"
                      : "bg-slate-900 text-white"
                    : isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-500 hover:text-slate-900"
                )}
              >
                <span className="font-mono text-xs font-black tracking-wider uppercase">
                  {code.toUpperCase()}
                </span>
                <span>{fullLabel}</span>
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  // Pill variant (desktop)
  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-xl p-1",
        isDark ? "bg-white/10" : "bg-slate-100",
        className
      )}
      role="group"
      aria-label="Language switcher"
    >
      {LOCALES.map(({ code, label }) => {
        const isActive = currentLang === code;
        return (
          <a
            key={code}
            href={`/${code}/`}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "rounded-lg px-3 py-1.5 font-mono text-xs font-black tracking-wider transition-all uppercase",
              isActive
                ? isDark
                  ? "bg-white text-slate-900 shadow-sm"
                  : "bg-white text-slate-900 shadow-sm"
                : isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-500 hover:text-slate-900"
            )}
          >
            {label}
          </a>
        );
      })}
    </div>
  );
}
