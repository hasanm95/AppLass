import { Section } from "@/components/common/Section";
import { FOMOGEN_DATA } from "@/constants/fomogen-data";
import {
  ShoppingCart,
  Timer,
  ShoppingBag,
  TrendingUp,
  ShieldCheck,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";


const ICON_MAP: Record<string, LucideIcon> = {
  ShoppingCart,
  Timer,
  ShoppingBag,
  TrendingUp,
  ShieldCheck,
};

type FeatureTranslation = { title: string; subtitle: string; description: string; highlight: string; imageSrc?: string; image?: string; };

export function CoreFeatures({ translations }: { translations?: FeatureTranslation[] }) {
  return (
    <Section id="features" className="relative bg-white py-24 md:py-32">
      <div className="section-container relative z-10">
        <div className="mb-20 text-center lg:text-left">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-green-600 uppercase">
            Platform Pillars
          </span>
          <h2 className="mb-10 text-4xl leading-[0.95] font-bold tracking-tight text-slate-900 md:text-5xl lg:text-8xl">
            Everything You Need.
            <br />
            <span className="text-slate-300">Nothing You Don&apos;t.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:gap-24">
          {FOMOGEN_DATA.features.map((baseFeature, idx) => {
            const feature = translations?.[idx] || baseFeature;
            const Icon = ICON_MAP[baseFeature.iconName] || HelpCircle;
            const isEven = idx % 2 === 0;

            const finalImageSrc = (feature as any).imageSrc || feature.image || baseFeature.image;

            return (
              <div
                key={idx}
                className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-24 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Section */}
                <div className="relative w-full flex-1">
                  {finalImageSrc ? (
                    <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 shadow-2xl md:rounded-[3rem]">
                      <img
                        src={finalImageSrc}
                        alt={feature.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-video items-center justify-center rounded-[2rem] border border-green-100 bg-green-50/30 md:rounded-[3rem]">
                      <Icon className="h-24 w-24 text-green-600 opacity-20" />
                    </div>
                  )}

                  {/* Decorative elements */}
                  <div
                    className={`absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-green-500/10 blur-2xl ${isEven ? "" : "right-auto -left-6"}`}
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-green-100 bg-green-50 text-green-600 shadow-sm">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                    {feature.title}
                  </h3>

                  <h4 className="mb-6 text-xl font-bold text-green-600 italic">
                    {feature.subtitle}
                  </h4>

                  <p className="text-lg leading-relaxed font-medium text-slate-500 md:text-xl">
                    {feature.description}
                  </p>

                  <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="text-xs font-black tracking-widest text-slate-400 uppercase">
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
