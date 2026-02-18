import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | ScreenVeil Battery Architecture",
  description:
    "Technical references and battery optimization guides for ScreenVeil.",
};

export default function ScreenVeilDocsPage() {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
          Utility Guide
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Documentation<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          ScreenVeil is a hardware-level battery saver for AMOLED devices. Learn
          how to optimize background processes and reduce display-related power
          draw.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <DocsCard
          href="/docs/screenveil/amoled-efficiency"
          title="⚡ Amoled Efficiency"
          description="Deep dive into the physics of OLED power conservation."
        />
      </div>

      {/* Support CTA */}
      <div className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-12">
        <h3 className="mb-4 text-2xl font-black text-slate-900">Need help?</h3>
        <p className="mb-8 max-w-lg text-lg leading-relaxed font-medium text-slate-500">
          If you have questions about battery optimization or technical
          compatibility, our engineering team is here to assist.
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
    <Link
      href={href}
      className="group rounded-3xl border border-slate-100 bg-white p-8 transition-all duration-500 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    >
      <h3 className="mb-3 text-lg font-black text-slate-900 transition-colors group-hover:text-blue-600">
        {title}
      </h3>
      <p className="font-medium text-slate-500 transition-colors group-hover:text-slate-600">
        {description}
      </p>
    </Link>
  );
}
