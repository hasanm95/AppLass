"use client";

import { useEffect, useRef } from "react";
import { Portal } from "@/components/ui/portal";
import { X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { i18nConfig, type Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocale: Locale;
}

export function LanguageSwitcher({
  isOpen,
  onClose,
  currentLocale,
}: LanguageSwitcherProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Click outside to close (optional but recommended)
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: Locale) => {
    if (!pathname) return;

    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");
    
    router.push(newPath);
    onClose();
  };

  const languages = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "fr", name: "French", nativeName: "Français" },
  ];

  return (
    <Portal>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        role="dialog"
        aria-modal="true"
        aria-label="Language selection"
        className={cn(
          "fixed inset-y-0 right-0 z-[70] w-full max-w-sm border-l border-white/10 bg-[#020617]/95 shadow-2xl transition-transform duration-500 ease-out sm:w-80",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col p-8">
          <div className="mb-12 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-500">
                <Globe size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">
                  Languages
                </h2>
                <p className="text-xs font-medium tracking-widest text-slate-500 uppercase">
                  Select Locale
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 text-slate-400 transition-all hover:bg-white/5 hover:text-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 space-y-3">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code as Locale)}
                className={cn(
                  "group flex w-full items-center justify-between rounded-2xl border p-5 transition-all duration-300",
                  currentLocale === lang.code
                    ? "border-blue-600/50 bg-blue-600/10 shadow-[0_0_20px_rgba(37,99,235,0.15)]"
                    : "border-white/5 hover:border-white/20 hover:bg-white/5"
                )}
              >
                <div className="text-left">
                  <div className="text-sm font-bold text-white transition-colors group-hover:text-white">
                    {lang.name}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-slate-500">
                    {lang.nativeName}
                  </div>
                </div>
                {currentLocale === lang.code && (
                  <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <div className="rounded-2xl bg-white/5 p-6 border border-white/5">
              <p className="text-xs leading-relaxed text-slate-500">
                AppLass is expanding global coverage. If you&apos;d like to contribute a translation, visit our GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
