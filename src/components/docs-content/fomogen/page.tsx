import { Button } from "@/components/ui/button";
import { localePath } from "@/i18n/utils";

export default function FomogenDocsPage({ lang }: { lang: string }) {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
          User Guide
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Documentation<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          High-performance Shopify engineering meets social psychology. Set up,
          optimize, and scale your growth loops with mathematical precision.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <DocsCard
          href={localePath(lang, "/docs/fomogen/quick-start")}
          title="⚡ Quick Start"
          description="Go from zero to conversion-ready in under 5 minutes."
        />
        <DocsCard
          href={localePath(lang, "/docs/fomogen/configuration")}
          title="⚙️ Configuration"
          description="Global settings reference for advanced engine tuning."
        />
      </div>

      <section>
        <h2 className="mb-12 text-2xl font-black text-slate-900">
          Engine Components
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          <FeatureGroup
            title="Social Proof & Trust"
            items={[
              {
                label: "Purchase Notifications",
                href: localePath(lang, "/docs/fomogen/purchase-notifications"),
              },
              {
                label: "Social Proof Badges",
                href: localePath(lang, "/docs/fomogen/social-proof-badges"),
              },
              {
                label: "Trust Badges",
                href: localePath(lang, "/docs/fomogen/trust-badges"),
              },
            ]}
          />

          <FeatureGroup
            title="Urgency & Scarcity"
            items={[
              {
                label: "Exit Intent Popups",
                href: localePath(lang, "/docs/fomogen/exit-intent"),
              },
              {
                label: "Countdown Timers",
                href: localePath(lang, "/docs/fomogen/countdown-timers"),
              },
              {
                label: "Stock Alerts",
                href: localePath(lang, "/docs/fomogen/stock-alerts"),
              },
            ]}
          />

          <FeatureGroup
            title="Performance Loops"
            items={[
              {
                label: "Progress Indicators",
                href: localePath(lang, "/docs/fomogen/progress-indicators"),
              },
              {
                label: "Sticky Cart",
                href: localePath(lang, "/docs/fomogen/sticky-cart"),
              },
            ]}
          />
        </div>
      </section>

      {/* Support CTA */}
      <div className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-12">
        <h3 className="mb-4 text-2xl font-black text-slate-900">Need help?</h3>
        <p className="mb-8 max-w-lg text-lg leading-relaxed font-medium text-slate-500">
          Can&apos;t find what you&apos;re looking for? Our logic lab team is
          available for deep support.
        </p>
        <Button
          asChild
          className="rounded-xl bg-slate-900 font-bold hover:bg-slate-800"
        >
          <a href="mailto:hasanmobarak25@gmail.com">Contact Support</a>
        </Button>
      </div>
    </div>
  );
}

function DocsCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-3xl border border-slate-100 bg-white p-8 transition-all duration-500 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    >
      <h3 className="mb-3 text-lg font-black text-slate-900 transition-colors group-hover:text-blue-600">
        {title}
      </h3>
      <p className="font-medium text-slate-500 transition-colors group-hover:text-slate-600">
        {description}
      </p>
    </a>
  );
}

function FeatureGroup({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-6 text-xs font-black tracking-widest text-slate-400 uppercase">
        {title}
      </h4>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-lg font-bold text-slate-600 transition-all hover:pl-2 hover:text-blue-600"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
