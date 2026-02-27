import { cn } from "@/lib/utils";
import { localePath } from "@/i18n/utils";
import { Portal } from "../ui/portal";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  currentLang: string;
  isDark: boolean;
};

const LOCALES = [
  { code: "en", label: "EN", fullLabel: "English", flag: "🇺🇸" },
  { code: "fr", label: "FR", fullLabel: "Français", flag: "🇫🇷" },
] as const;

export function LanguageSwitcherSidebar({ isOpen, onClose, currentLang, isDark }: Props) {
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    if (isOpen) {
      setCurrentPath(window.location.pathname);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const pathWithoutLang = currentPath.startsWith(`/${currentLang}/`) || currentPath === `/${currentLang}` 
    ? currentPath.replace(new RegExp(`^/${currentLang}`), "")
    : currentPath;
  
  const targetPath = pathWithoutLang || "/";

  return (
    <Portal>
      <div className="fixed inset-0 z-100 flex justify-end">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        
        {/* Sidebar */}
        <div 
          className={cn(
            "relative w-full max-w-sm animate-in slide-in-from-right-full duration-300 shadow-2xl h-full flex flex-col",
            isDark ? "bg-[#020617] border-l border-white/10" : "bg-white border-l border-slate-200"
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-white/10">
            <h2 className={cn("text-lg font-black tracking-tight", isDark ? "text-white" : "text-slate-900")}>
              {currentLang === 'fr' ? 'Choisissez la langue' : 'Select Language'}
            </h2>
            <button 
              onClick={onClose}
              className={cn("p-2 rounded-xl transition-colors", isDark ? "hover:bg-white/10 text-slate-400" : "hover:bg-slate-100 text-slate-500")}
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 flex flex-col gap-3">
            {LOCALES.map(({ code, fullLabel, flag }) => {
              const isActive = currentLang === code;
              return (
                <a
                  key={code}
                  href={localePath(code, targetPath)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-5 py-4 font-medium transition-all group",
                    isActive
                      ? isDark 
                        ? "bg-white text-slate-900 shadow-md" 
                        : "bg-slate-900 text-white shadow-md"
                      : isDark
                        ? "text-slate-400 hover:bg-white/10 hover:text-white"
                        : "text-slate-600 bg-slate-50 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl grayscale transition-all group-hover:grayscale-0">{flag}</span>
                    <span className="font-bold">{fullLabel}</span>
                  </div>
                  {isActive && (
                    <div className={cn("h-2 w-2 rounded-full", isDark ? "bg-slate-900" : "bg-white")} />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Portal>
  );
}
