import Link from "next/link";
import { Button } from "../ui/button";
import MobileNavLink from "./mobile-menu-nav-link";
import { cn } from "@/lib/utils";
import { RefObject } from "react";
import { Portal } from "../ui/portal";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Globe } from "lucide-react";

type MobileMenuProps = {
  customBranding: React.ReactNode;
  customCTA: React.ReactNode;
  toggleMenu: () => void;
  isDark: boolean;
  menuRef: RefObject<HTMLDivElement | null>;
  translations?: Dictionary["nav"];
};

export function MobileMenu({
  customBranding,
  customCTA,
  toggleMenu,
  isDark,
  menuRef,
  translations,
}: MobileMenuProps) {
  const t = translations ?? {
    home: "Home",
    about: "About",
    ecosystem: "Ecosystem",
    docs: "Docs",
    blog: "Logic Lab",
    getInTouch: "Get in Touch",
  };
  return (
    <Portal>
      <div
        id="mobile-menu"
        ref={menuRef}
        className={cn(
          "animate-in fade-in slide-in-from-top-4 fixed inset-0 top-[72px] z-40 p-8 shadow-inner duration-300 md:hidden",
          isDark ? "bg-[#020617]" : "bg-white"
        )}
      >
        <div className="flex flex-col gap-8">
          {!customBranding && (
            <>
              <MobileNavLink href="/" isDark={isDark} onClick={toggleMenu}>
                {t.home}
              </MobileNavLink>
              <MobileNavLink href="/about" isDark={isDark} onClick={toggleMenu}>
                {t.about}
              </MobileNavLink>
              <MobileNavLink href="/apps" isDark={isDark} onClick={toggleMenu}>
                {t.ecosystem}
              </MobileNavLink>
              <MobileNavLink href="/docs" isDark={isDark} onClick={toggleMenu}>
                {t.docs}
              </MobileNavLink>
              <MobileNavLink href="/blog" isDark={isDark} onClick={toggleMenu}>
                {t.blog}
              </MobileNavLink>
            </>
          )}

          <div className="space-y-4 border-t border-slate-100 pt-8">
            {customCTA ? (
              <div onClick={toggleMenu}>{customCTA}</div>
            ) : (
              <Button
                asChild
                size="lg"
                onClick={toggleMenu}
                className={cn(
                  "h-14 w-full rounded-2xl text-lg font-bold transition-all",
                  isDark
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                <Link href="/about">{t.getInTouch}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Portal>
  );
}
