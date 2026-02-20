// aria-label
import { Section } from "@/components/common/Section";
import { MINDFUL_GUARD_DATA } from "@/constants/mindful-guard-data";
import { Check, X, Minus } from "lucide-react";

export function ComparisonMatrix() {
  const { comparison } = MINDFUL_GUARD_DATA;

  const getIndicator = (value: string, isMindfulGuard: boolean) => {
    if (isMindfulGuard) {
      return (
        <span className="flex items-center gap-3 font-mono text-[11px] font-bold tracking-wider text-[#064E3B] uppercase">
          <Check className="h-4 w-4 stroke-[3px]" />
          {value}
        </span>
      );
    }
    if (value.includes("High") || value.includes("$99")) {
      return (
        <span className="flex items-center gap-3 font-mono text-[11px] tracking-wider text-red-900/40 uppercase">
          <X className="h-4 w-4" />
          {value}
        </span>
      );
    }
    return (
      <span className="flex items-center gap-3 font-mono text-[11px] tracking-wider text-slate-400 uppercase">
        <Minus className="h-4 w-4" />
        {value}
      </span>
    );
  };

  return (
    <Section id="comparison" className="border-b border-slate-200 bg-[#FBFBFA]">
      <div className="section-container">
        <div className="mb-20">
          <span className="mb-6 block font-mono text-[10px] font-bold tracking-[0.3em] text-[#064E3B] uppercase">
            Technical Validation Matrix
          </span>
          <h2 className="text-4xl font-black tracking-tighter text-slate-950 md:text-5xl lg:text-6xl">
            {comparison.title}
          </h2>
        </div>

        {/* Desktop Technical Table */}
        <div className="hidden border-2 border-slate-950 bg-white md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-950">
                <th className="p-8 text-left font-mono text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                  Technical Spec
                </th>
                <th className="bg-[#064E3B] p-8 text-left font-mono text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                  MindfulGuard (v2.6)
                </th>
                <th className="p-8 text-left font-mono text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                  Opal
                </th>
                <th className="p-8 text-left font-mono text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                  Freedom
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparison.specs.map((spec, idx) => (
                <tr key={idx} className="transition-colors hover:bg-slate-50">
                  <td className="p-8 font-black tracking-tight text-slate-950">
                    {spec.label}
                  </td>
                  <td className="border-x border-emerald-900/10 bg-emerald-50/30 p-8">
                    {getIndicator(spec.mindfulGuard, true)}
                  </td>
                  <td className="p-8">{getIndicator(spec.opal, false)}</td>
                  <td className="p-8">{getIndicator(spec.freedom, false)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-slate-950 p-4 text-center font-mono text-[8px] tracking-[0.5em] text-slate-600 uppercase">
            [ End of Specification Report - Protocol 88-Alpha ]
          </div>
        </div>

        {/* Mobile Specification Cards */}
        <div className="space-y-4 md:hidden">
          {comparison.specs.map((spec, idx) => (
            <div key={idx} className="border-2 border-slate-950 bg-white">
              <div className="bg-slate-950 p-4">
                <h3 className="font-mono text-[10px] font-bold tracking-widest text-white uppercase">
                  {spec.label}
                </h3>
              </div>
              <div className="space-y-6 p-6">
                <div className="flex items-center justify-between border-b border-emerald-900/10 pb-4">
                  <span className="font-mono text-[9px] font-bold text-[#064E3B] uppercase">
                    MindfulGuard
                  </span>
                  {getIndicator(spec.mindfulGuard, true)}
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="font-mono text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                    Opal
                  </span>
                  {getIndicator(spec.opal, false)}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                    Freedom
                  </span>
                  {getIndicator(spec.freedom, false)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
