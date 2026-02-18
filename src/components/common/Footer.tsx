import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/get-dictionary";

const defaultFooter = {
  tagline:
    "Logic-driven software where mathematical precision meets human-centric design.",
  sections: {
    solutions: "Solutions",
    resources: "Resources",
    legal: "Legal",
  },
  links: {
    fomogen: "Fomogen",
    mindfulGuard: "Mindful Guard",
    screenveil: "ScreenVeil",
    ourEcosystem: "Our Ecosystem",
    documentation: "Documentation",
    theMethodology: "The Methodology",
    theLogicLab: "The Logic Lab (Blog)",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
  copyright: "© {year} AppLass. All rights reserved.",
  builtWith: "Built with ∞ logical precision",
};

interface FooterProps {
  variant?: "light" | "dark";
  translations?: Dictionary["footer"];
}

export function Footer({ variant = "light", translations }: FooterProps) {
  const t = translations ?? defaultFooter;
  const currentYear = new Date().getFullYear();
  const isDark = variant === "dark";

  const footerLinks = {
    solutions: [
      { label: t.links.fomogen, href: "/apps/fomogen" },
      { label: t.links.mindfulGuard, href: "/apps/mindful-guard" },
      { label: t.links.screenveil, href: "/apps/screenveil" },
    ],
    resources: [
      { label: t.links.ourEcosystem, href: "/apps" },
      { label: t.links.documentation, href: "/docs" },
      { label: t.links.theMethodology, href: "/about" },
      { label: t.links.theLogicLab, href: "/blog" },
    ],
    legal: [
      { label: t.links.privacyPolicy, href: "/legal/fomogen/privacy" },
      { label: t.links.termsOfService, href: "/legal/fomogen/terms" },
    ],
  };


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
            <Link
              href="/"
              className={cn(
                "inline-flex items-center gap-2 text-lg font-semibold",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              <ExportedImage
                src="/logo.png"
                alt="AppLass"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span>AppLass</span>
            </Link>
            <p
              className={cn(
                "mt-4 max-w-xs text-sm",
                isDark ? "text-slate-400" : "text-slate-600"
              )}
            >
              {t.tagline}
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
              {t.sections.solutions}
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} isDark={isDark}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
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
              {t.sections.resources}
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} isDark={isDark}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
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
              {t.sections.legal}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} isDark={isDark}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
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
            {t.copyright.replace("{year}", String(currentYear))}
          </p>
          <p
            className={cn(
              "text-xs",
              isDark ? "text-slate-600" : "text-slate-400"
            )}
          >
            {t.builtWith}
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
    <Link
      href={href}
      className={cn(
        "rounded-sm text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none",
        isDark
          ? "text-slate-400 hover:text-white focus:ring-blue-600 focus:ring-offset-[#020617]"
          : "text-slate-600 hover:text-slate-900 focus:ring-slate-400 focus:ring-offset-white"
      )}
    >
      {children}
    </Link>
  );
}
