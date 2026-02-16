import { Section } from "@/components/common/Section";
import { MINDFUL_GUARD_DATA } from "@/constants/mindful-guard-data";

export function LogicSection() {
  return (
    <Section id="logic" className="border-y border-slate-200 bg-[#FBFBFA]">
      <div className="section-container">
        <div className="flex flex-col gap-24 lg:flex-row lg:items-center">
          <div className="flex-1 lg:max-w-xl">
            <span className="mb-6 block font-mono text-[10px] font-bold tracking-[0.3em] text-[#064E3B] uppercase">
              Technical Logic
            </span>
            <h2 className="mb-8 text-5xl leading-tight font-black tracking-tighter text-slate-950 md:text-6xl">
              {MINDFUL_GUARD_DATA.logic.title}
            </h2>
            <p className="mb-12 text-xl leading-relaxed font-medium text-slate-600">
              {MINDFUL_GUARD_DATA.logic.description}
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="border-l-2 border-[#064E3B] bg-emerald-50/30 p-6">
                <p className="font-mono text-[10px] font-bold tracking-widest text-[#064E3B] uppercase mb-2">
                  [ System Level ]
                </p>
                <p className="font-bold text-slate-900 leading-tight">
                  Intercepts Distractions via Protocol Level
                </p>
              </div>
              <div className="border-l-2 border-slate-900 bg-slate-50 p-6">
                <p className="font-mono text-[10px] font-bold tracking-widest text-slate-900 uppercase mb-2">
                  [ Cognitive Load ]
                </p>
                <p className="font-bold text-slate-900 leading-tight">
                  Zero Willpower Depletion Architecture
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:flex-1">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-slate-950 bg-white p-8 shadow-[12px_12px_0px_0px_rgba(6,78,59,0.1)]">
              {/* Technical Blueprint Grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative flex h-full w-full flex-col items-center justify-center border border-slate-100 bg-slate-50/50">
                {/* Abstract Data Flow Visual */}
                <div className="relative flex h-64 w-full max-w-md items-center justify-center">
                  <div className="absolute h-full w-[2px] bg-slate-200" />
                  <div className="absolute w-full h-[2px] bg-slate-200" />
                  
                  {/* Nodes */}
                  <div className="relative z-10 flex h-full w-full items-center justify-around">
                    <div className="flex h-16 w-16 items-center justify-center border-2 border-slate-950 bg-white font-mono text-xs font-bold">
                      INPUT
                    </div>
                    <div className="flex h-24 w-24 items-center justify-center border-2 border-[#064E3B] bg-[#064E3B] text-white font-mono text-xs font-bold shadow-[6px_6px_0px_0px_rgba(6,78,59,0.2)]">
                      FILTER
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center border-2 border-slate-950 bg-white font-mono text-xs font-bold">
                      FOCUS
                    </div>
                  </div>

                  {/* Flow Lines */}
                  <div className="absolute top-1/2 left-[20%] w-[15%] h-1 border-t-2 border-dashed border-slate-400" />
                  <div className="absolute top-1/2 left-[45%] w-[15%] h-1 border-t-2 border-dashed border-[#064E3B]" />
                </div>
                
                <div className="mt-8 font-mono text-[9px] font-bold tracking-[0.4em] text-slate-400 uppercase">
                  Logical Flow: Interception Pipeline v2.6
                </div>
              </div>
            </div>
            
            {/* Background Fragment */}
            <div className="absolute -top-6 -right-6 -bottom-6 -left-6 border border-slate-100 -z-10 bg-[#FAFBFD]" />
          </div>
        </div>
      </div>
    </Section>
  );
}
