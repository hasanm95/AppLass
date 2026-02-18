"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { i18nConfig } from "@/i18n/config";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Basic locale detection
    const browserLang = navigator.language.split("-")[0];
    const targetLocale = i18nConfig.locales.includes(browserLang as any)
      ? browserLang
      : i18nConfig.defaultLocale;

    router.replace(`/${targetLocale}`);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020617] text-white">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
    </div>
  );
}
