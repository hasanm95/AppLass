import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | Mindful Guard Logic Systems",
  description: "Engineering references and configuration guides for Mindful Guard.",
};

export default function MindfulGuardDocsPage() {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">
          Neural Architecture Guide
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Documentation<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-500">
          Mindful Guard is a cognitive firewall for Android. Deploy strict logic
          to prevent digital distractions with zero telemetry and total privacy.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <DocsCard
          href="/docs/mindful-guard/installation"
          title="⚡ Installation"
          description="Deploy the cognitive firewall to your Android device today."
        />
        <DocsCard
          href="/docs/mindful-guard/strict-mode"
          title="🔒 Strict Mode"
          description="Learn how to lock down your device for maximum focus."
        />
      </div>

      {/* Support CTA */}
      <div className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-12">
        <h3 className="mb-4 text-2xl font-black text-slate-900">Need help?</h3>
        <p className="mb-8 max-w-lg text-lg font-medium leading-relaxed text-slate-500">
          Mindful Guard is engineered for privacy absolutists. If you need 
          technical assistance, our logic lab is here to help.
        </p>
        <Button
          asChild
          className="rounded-xl bg-slate-900 font-bold hover:bg-slate-800"
        >
          <a href="mailto:support@applass.com">Contact Support</a>
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
      className="group rounded-3xl border border-slate-100 bg-white p-8 transition-all duration-500 hover:border-slate-500/20 hover:shadow-2xl hover:shadow-slate-500/5 focus:outline-none focus:ring-2 focus:ring-slate-500"
    >
      <h3 className="mb-3 text-lg font-black text-slate-900 transition-colors group-hover:text-slate-600">
        {title}
      </h3>
      <p className="font-medium text-slate-500 transition-colors group-hover:text-slate-600">
        {description}
      </p>
    </Link>
  );
}
