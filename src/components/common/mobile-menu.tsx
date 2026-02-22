import { Button } from "../ui/button";
import MobileNavLink from "./mobile-menu-nav-link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";
import type { RefObject } from "react";
import { Portal } from "../ui/portal";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/utils";

type MobileMenuProps = {
  customBranding: React.ReactNode;
  customCTA: React.ReactNode;
  toggleMenu: () => void;
  isDark: boolean;
  menuRef: RefObject<HTMLDivElement | null>;
  currentLang?: string;
  translations?: Dictionary["nav"];
};

export function MobileMenu({
  customBranding,
  customCTA,
  toggleMenu,
  isDark,
  menuRef,
  currentLang = "en",
  translations,
}: MobileMenuProps) {
  return (
    <Portal>
      <div
        id="mobile-menu"
        ref={menuRef}
        className={cn(
          "animate-in fade-in slide-in-from-top-4 fixed inset-0 top-[72px] z-40 overflow-y-auto p-8 shadow-inner duration-300 md:hidden",
          isDark ? "bg-[#020617]" : "bg-white"
        )}
      >
        <div className="flex flex-col gap-8">
          {!customBranding && (
            <>
              <MobileNavLink href={localePath(currentLang, '/')} isDark={isDark} onClick={toggleMenu}>
                {translations?.home ?? "Home"}
              </MobileNavLink>
              <MobileNavLink href={localePath(currentLang, '/about')} isDark={isDark} onClick={toggleMenu}>
                {translations?.about ?? "About"}
              </MobileNavLink>
              <MobileNavLink href={localePath(currentLang, '/apps')} isDark={isDark} onClick={toggleMenu}>
                {translations?.ecosystem ?? "Ecosystem"}
              </MobileNavLink>
              <MobileNavLink href={localePath(currentLang, '/docs')} isDark={isDark} onClick={toggleMenu}>
                {translations?.docs ?? "Docs"}
              </MobileNavLink>
              <MobileNavLink href={localePath(currentLang, '/blog')} isDark={isDark} onClick={toggleMenu}>
                {translations?.blog ?? "Logic Lab"}
              </MobileNavLink>
            </>
          )}

          {/* Language Switcher – Mobile */}
          <div className={cn("border-t pt-6", isDark ? "border-white/10" : "border-slate-100")}>
            <LanguageSwitcher
              currentLang={currentLang}
              isDark={isDark}
              variant="list"
            />
          </div>

          <div className={cn("border-t pt-6", isDark ? "border-white/10" : "border-slate-100")}>
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
                <a href={localePath(currentLang, '/about')}>
                  {translations?.getInTouch ?? "Get in Touch"}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Portal>
  );
}
