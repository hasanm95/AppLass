import { Section } from "@/components/common/Section";
import { SCREENVEIL_DATA } from "@/constants/screenveil-data";

interface TechnicalAdvantageProps {
  translations?: any;
}

export function TechnicalAdvantage({ translations }: TechnicalAdvantageProps) {
  const dict = translations || SCREENVEIL_DATA.technical;

  return (
    <Section className="relative overflow-hidden bg-linear-to-b from-black via-slate-950 to-black py-24 md:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/5 blur-[100px]" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-green-500 uppercase">
              The Science
            </span>

            <h2 className="mb-8 text-3xl leading-tight font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {dict.headline}
            </h2>

            <p className="mb-10 text-lg leading-relaxed font-medium text-slate-400 md:text-xl">
              {dict.description}
            </p>

            {/* Big stat */}
            <div className="inline-flex items-baseline gap-4 rounded-2xl border border-green-500/20 bg-green-500/5 px-8 py-6">
              <span className="text-6xl font-black text-green-400 md:text-7xl">
                {dict.stat}
              </span>
              <span className="text-lg font-bold text-slate-400">
                {dict.statLabel}
              </span>
            </div>
          </div>

          {/* Diagram */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-green-500/20 bg-slate-900/50 p-8 md:p-12">
              {/* LCD vs AMOLED comparison visual */}
              <div className="grid h-full grid-cols-2 gap-4">
                {/* LCD Side */}
                <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                  <div className="mb-4 h-24 w-24 rounded-xl bg-linear-to-br from-slate-600 to-slate-700 shadow-inner">
                    {/* Simulated backlight always on */}
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="h-16 w-16 rounded-lg bg-white/20" />
                    </div>
                  </div>
                  <span className="mb-2 text-lg font-bold text-slate-400">
                    LCD
                  </span>
                  <span className="text-center text-xs font-medium text-slate-500">
                    Backlight always on
                  </span>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="text-xs font-bold text-red-400">
                      High Power
                    </span>
                  </div>
                </div>

                {/* AMOLED Side */}
                <div className="flex flex-col items-center justify-center rounded-2xl border border-green-500/30 bg-black p-6">
                  <div className="mb-4 h-24 w-24 rounded-xl bg-black shadow-[0_0_30px_rgba(0,255,0,0.2)]">
                    {/* Simulated pixels off */}
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="h-16 w-16 rounded-lg border border-green-500/20" />
                    </div>
                  </div>
                  <span className="mb-2 text-lg font-bold text-green-400">
                    AMOLED
                  </span>
                  <span className="text-center text-xs font-medium text-slate-500">
                    Pixels turn off
                  </span>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-xs font-bold text-green-400">
                      Zero Power
                    </span>
                  </div>
                </div>
              </div>

              {/* Center divider label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-500">
                VS
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-xl bg-green-500/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-green-500/10 blur-3xl" />
          </div>
        </div>
      </div>
    </Section>
  );
}
