import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";

interface MindfulHeroProps {
  translations?: any;
}

export function MindfulHero({ translations }: MindfulHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Fallback to empty strings to avoid runtime errors if translations are missing
  const dict = translations || {
    headline: "",
    subheadline: "",
    primaryCTA: "",
    secondaryCTA: "",
    playStoreUrl: "",
  };

  useParallax(containerRef, [
    { selector: ".parallax-mindful-headline", factor: 15, rotateFactor: 2 },
    { selector: ".parallax-mindful-subtext", factor: 8, rotateFactor: 1 },
    { selector: ".parallax-mindful-cta", factor: 4, rotateFactor: 0 },
  ]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[95vh] items-center overflow-hidden bg-[#FBFBFA] pt-32 pb-20"
    >
      {/* Structural Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#064E3B 1px, transparent 1px), linear-gradient(90deg, #064E3B 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Stoic Accent Blur */}
      <div className="pointer-events-none absolute top-[-10%] right-[-5%] h-[800px] w-[800px] rounded-full bg-[#064E3B]/5 blur-[120px]" />

      <div className="section-container relative z-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="animate-fade-in-up max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-3 border border-emerald-900/10 bg-emerald-50/50 px-4 py-1.5 font-mono text-[11px] font-bold tracking-widest text-[#064E3B] uppercase">
              Neural Architecture Protection
            </div>

            <h1 className="parallax-mindful-headline font-black tracking-tighter text-slate-950 sm:text-7xl md:text-8xl lg:text-9xl">
              {dict.headline?.split(" ").slice(0, 2).join(" ")}{" "}
              <br />
              <span className="text-[#064E3B] underline decoration-emerald-900/10 underline-offset-8">
                {dict.headline?.split(" ").slice(2).join(" ")}
              </span>
            </h1>

            <p className="parallax-mindful-subtext mt-12 max-w-2xl text-xl leading-snug font-medium text-slate-600 md:text-2xl">
              {dict.subheadline}
            </p>
          </div>

          <div className="parallax-mindful-cta flex shrink-0 flex-col gap-4 self-start lg:mb-12">
            <Button
              size="lg"
              className="h-16 w-full rounded-none bg-[#1E293B] px-12 text-base font-bold text-white transition-all duration-300 hover:bg-[#064E3B] sm:w-auto"
              asChild
            >
              <a href={dict.playStoreUrl}>{dict.primaryCTA}</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 w-full rounded-none border-2 border-slate-200 bg-transparent px-12 text-base font-bold text-slate-900 transition-all hover:border-[#064E3B] hover:bg-transparent hover:text-[#064E3B] sm:w-auto"
              asChild
            >
              <a href="#logic">{dict.secondaryCTA}</a>
            </Button>
            <div className="mt-4 font-mono text-[10px] tracking-widest text-slate-400 uppercase">
              [ Offline Architecture Enabled ]
            </div>
          </div>
        </div>
      </div>

      {/* Geometric Decorative Divider */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-emerald-900/10 to-transparent" />
    </section>
  );
}
