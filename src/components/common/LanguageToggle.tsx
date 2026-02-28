import { useState } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcherSidebar } from "./LanguageSwitcherSidebar";

export function LanguageToggle({ isDark, currentLang }: { isDark: boolean; currentLang: string }) {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  return (
    <>
      <button
        aria-expanded={isLangMenuOpen}
        aria-label="Select Language"
        onClick={() => setIsLangMenuOpen(true)}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
          isDark
            ? "text-slate-400 hover:bg-white/10 hover:text-white"
            : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
        )}
      >
        <Globe size={20} />
      </button>

      <LanguageSwitcherSidebar 
        isOpen={isLangMenuOpen}
        onClose={() => setIsLangMenuOpen(false)}
        currentLang={currentLang}
        isDark={isDark}
      />
    </>
  );
}
