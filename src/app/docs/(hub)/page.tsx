import { Metadata } from "next";
import Link from "next/link";
import { Zap, Shield, Smartphone, ArrowRight } from "lucide-react";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Documentation | AppLass Logic Systems",
  description:
    "Engineering references and deployment guides for the AppLass ecosystem.",
};

export default function DocsHubPage() {
  const systems = [
    {
      id: "fomogen",
      name: "FOMO Generator",
      tagline: "Conversion Engineering",
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      description:
        "High-performance Shopify growth loops and social psychology modules.",
      link: "/docs/fomogen",
      color: "blue",
    },
    {
      id: "mindful",
      name: "Mindful Guard",
      tagline: "Digital Discipline",
      icon: <Shield className="h-6 w-6 text-slate-400" />,
      description:
        "Advanced heuristic filters for focus and intentional device usage.",
      link: "#",
      status: "Coming Soon",
    },
    {
      id: "screenveil",
      name: "ScreenVeil",
      tagline: "Background Architecture",
      icon: <Smartphone className="h-6 w-6 text-slate-400" />,
      description:
        "Low-level background process management for Android environments.",
      link: "#",
      status: "In Development",
    },
  ];

  return (
    <div className="space-y-16">
      <header>
        <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
          Knowledge Base
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Logic Systems<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-500">
          The central repository for AppLass engineering. Choose a logic system
          to view its technical implementation and deployment protocols.
        </p>
      </header>

      <div className="grid gap-6">
        {systems.map((system) => (
          <Link
            key={system.id}
            href={system.link}
            className={`group relative flex flex-col gap-6 rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all duration-500 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 ${
              system.link === "#" ? "pointer-events-none opacity-60" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 transition-colors group-hover:bg-blue-50">
                  {system.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    {system.name}
                  </h3>
                  <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                    {system.tagline}
                  </p>
                </div>
              </div>
              {system.status ? (
                <span className="rounded-full bg-slate-100 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {system.status}
                </span>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}
            </div>

            <p className="max-w-xl text-lg font-medium leading-relaxed text-slate-500">
              {system.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
