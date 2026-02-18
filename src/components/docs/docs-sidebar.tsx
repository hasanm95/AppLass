"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DOCS_CONFIG: Record<
  string,
  { category: string; items: { name: string; href: string }[] }[]
> = {
  fomogen: [
    {
      category: "Getting Started",
      items: [
        { name: "Introduction", href: "/docs/fomogen" },
        { name: "Quick Start", href: "/docs/fomogen/features/quick-start" },
        { name: "Configuration", href: "/docs/fomogen/configuration" },
        { name: "FAQ", href: "/docs/fomogen/faq" },
      ],
    },
    {
      category: "Features",
      items: [
        {
          name: "Purchase Notifications",
          href: "/docs/fomogen/features/purchase-notifications",
        },
        {
          name: "Countdown Timers",
          href: "/docs/fomogen/features/countdown-timers",
        },
        { name: "Stock Alerts", href: "/docs/fomogen/features/stock-alerts" },
        {
          name: "Social Proof Badges",
          href: "/docs/fomogen/features/social-proof-badges",
        },
        { name: "Exit Intent", href: "/docs/fomogen/features/exit-intent" },
        {
          name: "Progress Indicators",
          href: "/docs/fomogen/features/progress-indicators",
        },
        { name: "Sticky Cart", href: "/docs/fomogen/features/sticky-cart" },
        { name: "Trust Badges", href: "/docs/fomogen/trust-badges" },
      ],
    },
    {
      category: "Legal",
      items: [
        { name: "Privacy Policy", href: "/legal/fomogen/privacy" },
        { name: "Terms of Service", href: "/legal/fomogen/terms" },
      ],
    },
  ],
  "mindful-guard": [
    {
      category: "Getting Started",
      items: [
        { name: "Introduction", href: "/docs/mindful-guard" },
        { name: "Installation", href: "/docs/mindful-guard/installation" },
        { name: "Strict Logic Mode", href: "/docs/mindful-guard/strict-mode" },
      ],
    },
    {
      category: "Legal",
      items: [
        { name: "Privacy Policy", href: "/legal/mindful-guard/privacy" },
        { name: "Terms of Service", href: "/legal/mindful-guard/terms" },
      ],
    },
  ],
  screenveil: [
    {
      category: "Getting Started",
      items: [
        { name: "Introduction", href: "/docs/screenveil" },
        {
          name: "Amoled Efficiency",
          href: "/docs/screenveil/amoled-efficiency",
        },
      ],
    },
    {
      category: "Legal",
      items: [
        { name: "Privacy Policy", href: "/legal/screenveil/privacy" },
        { name: "Terms of Service", href: "/legal/screenveil/terms" },
      ],
    },
  ],
};

export function DocsSidebar() {
  const pathname = usePathname();

  // Determine which app we are looking at
  const appKey = pathname.split("/").find((key) => DOCS_CONFIG[key]);
  const links = appKey ? DOCS_CONFIG[appKey] : DOCS_CONFIG.fomogen;

  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-72 flex-shrink-0 overflow-y-auto border-r border-slate-100 bg-white/50 pb-20 lg:block">
      <div className="p-8">
        <nav className="space-y-12">
          {links.map((section) => (
            <div key={section.category}>
              <h3 className="mb-4 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                {section.category}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
