import { useState, useCallback, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";
import type { Dictionary } from "@/i18n/get-dictionary";

export function MobileMenuToggle({
  isDark,
  currentLang,
  translations,
  hasCustomBranding,
  customCTAHtml
}: {
  isDark: boolean;
  currentLang: string;
  translations?: Dictionary["nav"];
  hasCustomBranding?: boolean;
  customCTAHtml?: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  // Focus trapping logic for mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Prevent scroll when menu is open

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <button
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
        className={cn(
          "focus-ring flex h-10 w-10 items-center justify-center rounded-xl md:hidden",
          isDark ? "text-white" : "text-slate-900"
        )}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <MobileMenu
          menuRef={menuRef}
          customBranding={hasCustomBranding ? <div /> : null}
          customCTA={customCTAHtml ? <div dangerouslySetInnerHTML={{ __html: customCTAHtml }} /> : null}
          toggleMenu={toggleMenu}
          isDark={isDark}
          currentLang={currentLang}
          translations={translations}
        />
      )}
    </>
  );
}
