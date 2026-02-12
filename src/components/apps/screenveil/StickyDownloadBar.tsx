"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SCREENVEIL_DATA } from "@/constants/screenveil-data";
import { Download } from "lucide-react";

export function StickyDownloadBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (~600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-0 bottom-0 left-0 z-50 border-t border-green-500/20 bg-black/95 p-4 backdrop-blur-xl transition-all duration-500 lg:hidden ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-lg items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-bold text-white">ScreenVeil</p>
          <p className="text-xs text-slate-400">Free • 5.0 ★</p>
        </div>
        <Button
          size="lg"
          className="h-12 rounded-xl bg-green-500 px-6 font-bold text-black shadow-lg shadow-green-500/30 transition-all hover:bg-green-400"
          asChild
        >
          <a href={SCREENVEIL_DATA.hero.playStoreUrl}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </a>
        </Button>
      </div>
    </div>
  );
}
