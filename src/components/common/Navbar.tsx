"use client";

import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

interface NavbarProps {
  variant?: "light" | "dark";
  customBranding?: React.ReactNode;
  customCTA?: React.ReactNode;
}

export function Navbar({
  variant = "light",
  customBranding,
  customCTA,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus trapping logic for mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
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

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const isDark = variant === "dark";

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-700",
        isScrolled || isMenuOpen
          ? cn(
              "py-4 shadow-2xl backdrop-blur-xl",
              isDark
                ? "border-white/10 bg-[#020617]/80"
                : "border-slate-200/20 bg-white/80"
            )
          : "bg-transparent py-8"
      )}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="section-container"
      >
        <div className="flex items-center justify-between">
          {/* Logo / Custom Branding */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="group flex items-center gap-2 px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <ExportedImage
                src="/logo.png"
                alt="AppLass Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg object-contain"
              />
              {!customBranding && (
                <span
                  className={cn(
                    "text-xl font-bold tracking-tight",
                    isDark ? "text-white" : "text-slate-900"
                  )}
                >
                  AppLass
                </span>
              )}
            </Link>

            {customBranding && (
              <div
                className={cn(
                  "hidden h-6 w-px md:block",
                  isDark ? "bg-white/10" : "bg-slate-200"
                )}
              />
            )}

            {customBranding && (
              <div className="flex items-center">{customBranding}</div>
            )}
          </div>

          {/* Navigation Links (Desktop) */}
          {!customBranding && (
            <div className="hidden items-center gap-10 md:flex">
              <NavLink href="/" isDark={isDark}>
                Home
              </NavLink>
              <NavLink href="/about" isDark={isDark}>
                About
              </NavLink>
              <NavLink href="/apps" isDark={isDark}>
                Ecosystem
              </NavLink>
              <NavLink href="/docs" isDark={isDark}>
                Docs
              </NavLink>
              <NavLink href="/blog" isDark={isDark}>
                Logic Lab
              </NavLink>
            </div>
          )}

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              {customCTA ? (
                customCTA
              ) : (
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    "h-10 rounded-xl px-6 font-semibold transition-all",
                    isDark
                      ? "bg-white text-slate-900 hover:bg-slate-100"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  )}
                >
                  <Link href="/about">Get in Touch</Link>
                </Button>
              )}
            </div>

            {/* Mobile Toggle Button */}
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
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <MobileMenu
            menuRef={menuRef}
            customBranding={customBranding}
            customCTA={customCTA}
            toggleMenu={toggleMenu}
            isDark={isDark}
          />
        )}
      </nav>
    </header>
  );
}

function NavLink({
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
        "py-1 text-sm font-bold transition-all",
        isDark
          ? "text-slate-400 hover:text-white"
          : "text-slate-600 hover:text-slate-900"
      )}
    >
      {children}
    </Link>
  );
}
