import { Section } from "@/components/common/Section";
import { SCREENVEIL_DATA } from "@/constants/screenveil-data";
import { Battery, Hand, HelpCircle, type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Battery,
  Hand,
};

interface PainPointsSectionProps {
  translations?: any[];
}

export function PainPointsSection({ translations }: PainPointsSectionProps) {
  const points = translations && translations.length > 0 ? translations : SCREENVEIL_DATA.painPoints;

  return (
    <Section className="relative bg-slate-950 py-20 md:py-28">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #00FF00 1px, transparent 1px), linear-gradient(to bottom, #00FF00 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="mb-16 text-center">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-green-500 uppercase">
            The Problem
          </span>
          <h2 className="mb-6 text-3xl leading-tight font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Stop Wasting Energy.
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-slate-400 md:text-xl">
            Modern screens are the #1 battery drainer. When you stream video
            just for the audio, you&apos;re burning through your charge for
            pixels you aren&apos;t even watching.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {points.map((point: any, idx: number) => {
            const originalPoint = SCREENVEIL_DATA.painPoints[idx] || {};
            const Icon = ICON_MAP[originalPoint.iconName || ""] || HelpCircle;

            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-green-500/20 bg-linear-to-br from-slate-900 to-slate-950 p-8 transition-all duration-500 hover:border-green-500/40 hover:shadow-2xl hover:shadow-green-500/10 md:p-12"
              >
                {/* Glow effect */}
                <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-green-500/10 blur-3xl transition-all duration-500 group-hover:bg-green-500/20" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/10 text-green-500">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                    {point.title}
                  </h3>

                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="text-5xl font-black text-green-400 md:text-6xl">
                      {point.stat}
                    </span>
                  </div>

                  <p className="text-lg font-medium text-slate-400">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
