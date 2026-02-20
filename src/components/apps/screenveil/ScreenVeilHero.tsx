

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";
import { SCREENVEIL_DATA } from "@/constants/screenveil-data";


export function ScreenVeilHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useParallax(containerRef, [
    { selector: ".parallax-sv-headline", factor: 20, rotateFactor: 5 },
    { selector: ".parallax-sv-subtext", factor: 10, rotateFactor: 3 },
    { selector: ".parallax-sv-cta", factor: 5, rotateFactor: 2 },
    { selector: ".parallax-sv-image", factor: 15, rotateFactor: -2 },
  ]);

  return (
    <section
      ref={containerRef}
      className="perspective-1000 relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-black pt-24 pb-16 md:min-h-[90vh] md:pt-32 md:pb-20"
    >
      {/* AMOLED-themed radial glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 opacity-20 blur-[120px] md:h-[800px] md:w-[1200px]"
        style={{
          background:
            "radial-gradient(circle, #00FF00 10%, #00AA00 30%, transparent 60%)",
        }}
      />

      <div className="section-container relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-in-up text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] font-black tracking-[0.2em] text-green-400 uppercase shadow-sm backdrop-blur-md md:mb-8">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
            ⚡ {SCREENVEIL_DATA.hero.tagline}
          </div>

          <h1 className="parallax-sv-headline mb-8 text-4xl leading-[0.95] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:mb-10 lg:text-[4.5rem]">
            {SCREENVEIL_DATA.hero.headline}
            <br />
            <span className="group relative text-green-400 italic">
              {SCREENVEIL_DATA.hero.headlineAccent}
              <div className="absolute -bottom-2 left-0 h-[4px] w-full rounded-full bg-green-500/40 blur-md transition-colors group-hover:bg-green-400/60 md:-bottom-4 md:h-[6px]" />
            </span>
          </h1>

          <p className="parallax-sv-subtext mx-auto mt-8 max-w-xl text-lg leading-tight font-medium tracking-tight text-balance text-slate-400 md:mt-12 md:max-w-2xl md:text-xl lg:mx-0 lg:max-w-xl">
            {SCREENVEIL_DATA.hero.subheadline}
          </p>

          <div className="parallax-sv-cta mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-16 md:gap-6 lg:justify-start">
            <Button
              size="lg"
              className="h-14 w-full rounded-xl bg-green-500 px-10 text-base font-bold text-black shadow-2xl shadow-green-500/30 transition-all duration-500 hover:scale-105 hover:bg-green-400 active:scale-95 sm:w-auto md:h-16 md:rounded-2xl md:px-12 md:text-lg"
              asChild
            >
              <a href={SCREENVEIL_DATA.hero.playStoreUrl}>
                {SCREENVEIL_DATA.hero.primaryCTA}
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="group h-14 w-full rounded-xl px-10 text-base font-bold text-white transition-all hover:bg-white/10 sm:w-auto md:h-16 md:rounded-2xl md:px-12 md:text-lg"
              asChild
            >
              <a href="#features">
                {SCREENVEIL_DATA.hero.secondaryCTA}
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">
                  →
                </span>
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm font-bold text-slate-500 lg:mt-10">
            {SCREENVEIL_DATA.hero.subtext}
          </p>
        </div>

        {/* Hero Mockup Image */}
        <div className="parallax-sv-image relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative aspect-9/16 overflow-hidden rounded-[2.5rem] border border-green-500/20 bg-slate-900 shadow-[0_40px_100px_-20px_rgba(0,255,0,0.2)] lg:rounded-[3rem]">
            <img
              src="/v1/apps/screenveil/hero-mockup.png"
              alt="ScreenVeil app showing black overlay over video playback"
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
            />
            {/* Overlay effect simulation */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-green-500/50 bg-green-500/20 backdrop-blur-xl">
                <div className="h-6 w-6 rounded-full bg-green-500" />
              </div>
            </div>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute -top-6 -right-6 h-20 w-20 animate-bounce rounded-2xl bg-green-500 p-4 shadow-xl shadow-green-500/30">
            <div className="h-full w-full rounded-lg bg-black/20" />
          </div>
          <div className="absolute -bottom-10 -left-10 h-32 w-32 animate-pulse rounded-full bg-green-500/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
