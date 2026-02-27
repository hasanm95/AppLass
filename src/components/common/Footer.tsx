import { cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/utils";

function getFooterLinks(lang: string) {
  return {
    solutions: [
      { slug: "fomogen", label: "Fomogen", href: localePath(lang, '/apps/fomogen') },
      { slug: "mindfulGuard", label: "Mindful Guard", href: localePath(lang, '/apps/mindful-guard') },
      { slug: "screenveil", label: "ScreenVeil", href: localePath(lang, '/apps/screenveil') },
    ],
    resources: [
      { slug: "ourEcosystem", label: "Our Ecosystem", href: localePath(lang, '/apps') },
      { slug: "documentation", label: "Documentation", href: localePath(lang, '/docs') },
      { slug: "digitalWellness", label: "Digital Wellness 2026", href: localePath(lang, '/digital-wellness-2026-guide') },
      { slug: "ecommercePerformance", label: "Ecommerce Performance 2026", href: localePath(lang, '/ecommerce-performance-2026-benchmarks') },
      { slug: "theMethodology", label: "The Methodology", href: localePath(lang, '/about') },
      { slug: "theLogicLab", label: "The Logic Lab (Blog)", href: localePath(lang, '/blog') },
    ],
    legal: [
      { slug: "privacyPolicy", label: "Privacy Policy", href: localePath(lang, '/legal/fomogen/privacy') },
      { slug: "termsOfService", label: "Terms of Service", href: localePath(lang, '/legal/fomogen/terms') },
    ],
  };
}

interface FooterProps {
  variant?: "light" | "dark";
  translations?: Dictionary["footer"];
  currentLang?: string;
}

export function Footer({ variant = "light", translations, currentLang = "en" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const isDark = variant === "dark";
  const footerLinks = getFooterLinks(currentLang);

  return (
    <footer
      role="contentinfo"
      className={cn(
        "border-t",
        isDark ? "border-white/5 bg-[#020617]" : "border-slate-200 bg-white"
      )}
    >
      <div className="section-container py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a
              href={localePath(currentLang, '/')}
              className={cn(
                "inline-flex items-center gap-2 text-lg font-semibold",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              <img
                src="/logo.png"
                alt="AppLass"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span>AppLass</span>
            </a>
            <p
              className={cn(
                "mt-4 max-w-xs text-sm",
                isDark ? "text-slate-400" : "text-slate-600"
              )}
            >
              {translations?.tagline || "Logic-driven software where mathematical precision meets human-centric design."}
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3
              className={cn(
                "mb-4 text-sm font-semibold",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              {translations?.sections?.solutions || "Solutions"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => {
                const labelKey = link.slug as keyof NonNullable<typeof translations>["links"];
                return (
                  <li key={link.label}>
                    <FooterLink href={link.href} isDark={isDark}>
                      {labelKey && translations?.links && labelKey in translations.links ? translations.links[labelKey as keyof typeof translations.links] : link.label}
                    </FooterLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3
              className={cn(
                "mb-4 text-sm font-semibold",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              {translations?.sections?.resources || "Resources"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => {
                const labelKey = link.slug as keyof NonNullable<typeof translations>["links"];
                return (
                  <li key={link.label}>
                    <FooterLink href={link.href} isDark={isDark}>
                      {labelKey && translations?.links && labelKey in translations.links ? translations.links[labelKey as keyof typeof translations.links] : link.label}
                    </FooterLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              className={cn(
                "mb-4 text-sm font-semibold",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              {translations?.sections?.legal || "Legal"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => {
                const labelKey = link.slug as keyof NonNullable<typeof translations>["links"];
                return (
                  <li key={link.label}>
                    <FooterLink href={link.href} isDark={isDark}>
                      {labelKey && translations?.links && labelKey in translations.links ? translations.links[labelKey as keyof typeof translations.links] : link.label}
                    </FooterLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={cn(
            "mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row",
            isDark ? "border-white/5" : "border-slate-200"
          )}
        >
          <p
            className={cn(
              "text-sm",
              isDark ? "text-slate-500" : "text-slate-600"
            )}
          >
            © {currentYear} AppLass. All rights reserved.
          </p>
          <p
            className={cn(
              "text-xs",
              isDark ? "text-slate-600" : "text-slate-400"
            )}
          >
            Built with{" "}
            <span className="text-blue-600" aria-label="precision">
              ∞
            </span>{" "}
            logical precision
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  isDark,
}: {
  href: string;
  children: React.ReactNode;
  isDark: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "rounded-sm text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none",
        isDark
          ? "text-slate-400 hover:text-white focus:ring-blue-600 focus:ring-offset-[#020617]"
          : "text-slate-600 hover:text-slate-900 focus:ring-slate-400 focus:ring-offset-white"
      )}
    >
      {children}
    </a>
  );
}
