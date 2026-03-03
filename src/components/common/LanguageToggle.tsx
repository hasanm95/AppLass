import { useState } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcherSidebar } from "./LanguageSwitcherSidebar";
import type { Dictionary } from "@/i18n/get-dictionary";

export function LanguageToggle({ 
  isDark, 
  currentLang, 
  dictionary 
}: { 
  isDark: boolean; 
  currentLang: string;
  dictionary?: Dictionary["common"];
}) {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  return (
    <>
      <button
        aria-expanded={isLangMenuOpen}
        aria-label={dictionary?.selectLanguage || "Select Language"}
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
        dictionary={dictionary}
      />
    </>
  );
}
