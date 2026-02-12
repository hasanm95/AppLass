import { Section } from "@/components/common/Section";
import { SCREENVEIL_DATA } from "@/constants/screenveil-data";
import {
  Pointer,
  Moon,
  Fingerprint,
  Clock,
  Play,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Pointer,
  Moon,
  Fingerprint,
  Clock,
  Play,
};

export function FeatureGrid() {
  return (
    <Section id="features" className="relative bg-black py-24 md:py-32">
      <div className="section-container relative z-10">
        <div className="mb-20 text-center">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-green-500 uppercase">
            Core Features
          </span>
          <h2 className="mb-6 text-4xl leading-[0.95] font-bold tracking-tight text-white md:text-5xl lg:text-7xl">
            Everything You Need.
            <br />
            <span className="text-slate-600">Nothing You Don&apos;t.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SCREENVEIL_DATA.features.map((feature, idx) => {
            const Icon = ICON_MAP[feature.iconName] || HelpCircle;

            return (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-3xl border border-green-500/10 bg-gradient-to-br from-slate-900/80 to-black p-8 transition-all duration-500 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/5 ${
                  idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Subtle glow on hover */}
                <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-green-500/5 blur-2xl transition-all duration-500 group-hover:bg-green-500/10" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 text-green-500 transition-all duration-300 group-hover:border-green-500/40 group-hover:bg-green-500/10">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mb-6 text-base leading-relaxed font-medium text-slate-400">
                    {feature.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                    <span className="text-xs font-black tracking-widest text-green-500/70 uppercase">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
