import { Section } from "@/components/common/Section";
import { SCREENVEIL_DATA } from "@/constants/screenveil-data";
import {
  WifiOff,
  ShieldCheck,
  Layers,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  WifiOff,
  ShieldCheck,
  Layers,
};

export function PrivacySection() {
  return (
    <Section className="relative bg-black py-24 md:py-32">
      <div className="section-container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-green-500 uppercase">
            Privacy First
          </span>

          <h2 className="mb-8 text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {SCREENVEIL_DATA.privacy.headline}
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-lg leading-relaxed font-medium text-slate-400 md:text-xl">
            {SCREENVEIL_DATA.privacy.description}
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {SCREENVEIL_DATA.privacy.features.map((feature, idx) => {
              const Icon = ICON_MAP[feature.iconName] || HelpCircle;

              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center rounded-2xl border border-green-500/10 bg-slate-900/50 p-8 transition-all duration-300 hover:border-green-500/30"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 text-green-500 transition-all duration-300 group-hover:bg-green-500/10">
                    <Icon className="h-8 w-8" />
                  </div>
                  <span className="text-lg font-bold text-white">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Trust badge */}
          <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/5 px-6 py-3">
            <ShieldCheck className="h-5 w-5 text-green-500" />
            <span className="text-sm font-bold text-green-400">
              Your data stays on your device — where it belongs.
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
