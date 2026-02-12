import { Section } from "@/components/common/Section";
import { MINDFUL_GUARD_DATA } from "@/constants/mindful-guard-data";
import { Shield, Zap, Lock, HelpCircle, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  Shield,
  Zap,
  Lock,
};

export function DifferentiatorsSection() {
  return (
    <Section id="differentiators" className="bg-white">
      <div className="section-container">
        <div className="mb-24 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="mb-6 block font-mono text-[10px] font-bold tracking-[0.3em] text-[#064E3B] uppercase">
              // The Strategic Moat
            </span>
            <h2 className="text-6xl leading-[0.9] font-black tracking-tighter text-slate-950 md:text-7xl lg:text-8xl">
              Technical
              <br />
              <span className="text-slate-300">Advantages.</span>
            </h2>
          </div>
          <div className="font-mono text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            [ Deployment Specs v4.0 ]
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px bg-slate-200 md:grid-cols-3 border border-slate-200 shadow-2xl">
          {MINDFUL_GUARD_DATA.differentiators.map((feature, idx) => {
            const Icon = ICON_MAP[feature.iconName] || HelpCircle;
            return (
              <div
                key={idx}
                className={cn(
                  "group relative bg-white p-12 transition-all duration-500 hover:z-10 hover:bg-slate-50",
                  idx === 1 && "md:mt-12 md:-mb-12", // Asymmetric stagger
                  idx === 2 && "md:mt-24 md:-mb-24" // Asymmetric stagger
                )}
              >
                {/* Hover Accent Bar */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-[#064E3B] transition-all duration-500 group-hover:w-full" />
                
                <div className="mb-10 flex h-16 w-16 items-center justify-center border border-slate-200 bg-slate-50 transition-all duration-500 group-hover:border-[#064E3B] group-hover:bg-[#064E3B] group-hover:text-white">
                  {feature.icon ? (
                    <span className="text-3xl group-hover:hidden grayscale">{feature.icon}</span>
                  ) : null}
                  <Icon className="hidden h-8 w-8 group-hover:block" />
                  {!feature.icon && (
                    <Icon className="h-8 w-8 group-hover:hidden text-slate-400" />
                  )}
                </div>
                
                <h3 className="mb-6 font-mono text-xs font-black tracking-[0.2em] text-[#064E3B] uppercase">
                  {feature.title}
                </h3>
                
                <h4 className="mb-6 text-2xl font-black tracking-tight text-slate-900 leading-tight">
                  {feature.description}
                </h4>
                
                <div className="mt-8 flex items-center gap-2 text-[9px] font-bold tracking-widest text-slate-300 uppercase">
                  <div className="h-px w-8 bg-slate-100" />
                  Verified Feature
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
