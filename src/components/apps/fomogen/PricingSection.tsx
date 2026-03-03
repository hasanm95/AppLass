import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { FOMOGEN_DATA } from "@/constants/fomogen-data";
import { Check } from "lucide-react";

type PricingTranslation = {
  subtitle: string;
  tiers: { name: string; price: string; period: string; description: string; features: string[]; cta: string; }[];
};

export function PricingSection({ translations, labels }: { translations?: PricingTranslation; labels?: any }) {
  return (
    <Section className="relative bg-white py-24 md:py-32">
      {/* Background Vignette */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[800px] w-full bg-linear-to-t from-green-50/80 to-transparent" />

      <div className="section-container relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 text-center md:mb-20">
          <span className="mb-6 inline-block rounded-full bg-green-50 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-green-600 uppercase ring-1 ring-green-500/20">
            {FOMOGEN_DATA.pricing.subtitle}
          </span>
          <h2 className="mb-6 text-4xl leading-[0.95] font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            {FOMOGEN_DATA.pricing.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
            {FOMOGEN_DATA.pricing.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-24">
          {FOMOGEN_DATA.pricing.tiers.map((baseTier, idx) => {
            const tier = translations?.tiers?.[idx] || baseTier;
            return (
            <div
              key={idx}
              className={`group relative flex flex-col rounded-4xl p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:rounded-[2.5rem] md:p-10 ${
                baseTier.highlighted
                  ? "border-green-400 bg-white shadow-[0_40px_100px_-20px_rgba(33,196,93,0.15)] ring-4 ring-green-50"
                  : "border-white/40 bg-white shadow-xl"
              }`}
            >
              {baseTier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-6 py-1.5 text-[10px] font-black tracking-widest text-white uppercase shadow-lg shadow-green-200">
                  {labels?.recommended || "Recommended"}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-500 min-h-[40px]">
                  {tier.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-black text-slate-900 md:text-5xl tracking-tight">
                  {tier.price}
                </span>
                <span className="ml-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  {tier.period}
                </span>
                {baseTier.subLabel && (
                  <p className="text-xs text-green-600 font-bold mt-3 tracking-wide bg-green-50 inline-block px-3 py-1 rounded-full">
                    {baseTier.subLabel}
                  </p>
                )}
              </div>

              <Button
                className={`mb-10 h-14 w-full rounded-xl text-base font-bold transition-all duration-300 active:scale-95 md:h-16 md:rounded-2xl md:text-lg ${
                  baseTier.highlighted
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-200 hover:bg-black"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
                asChild
              >
                <a href={FOMOGEN_DATA.cta.shopifyUrl}>{tier.cta}</a>
              </Button>

              <div className="grow space-y-5 border-t border-slate-100 pt-8">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">
                  {labels?.featuresIncluded || "Features Included"}
                </p>
                <ul className="space-y-4">
                  {baseTier.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span className="text-sm font-medium text-slate-600 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {baseTier.limitations?.map((limit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-300 text-[10px] font-bold text-slate-400 italic">
                        i
                      </span>
                      <span className="text-sm italic text-slate-400 flex-1 leading-snug">
                        {limit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
