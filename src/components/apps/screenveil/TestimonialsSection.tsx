import { Section } from "@/components/common/Section";
import { SCREENVEIL_DATA } from "@/constants/screenveil-data";
import { Quote } from "lucide-react";

interface TestimonialsSectionProps {
  translations?: any[];
}

export function TestimonialsSection({ translations }: TestimonialsSectionProps) {
  const testimonials = translations && translations.length > 0 ? translations : SCREENVEIL_DATA.testimonials;

  return (
    <Section className="relative bg-linear-to-b from-black to-slate-950 py-24 md:py-32">
      <div className="section-container relative z-10">
        <div className="mb-16 text-center">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-green-500 uppercase">
            User Love
          </span>
          <h2 className="text-3xl leading-tight font-bold tracking-tight text-white md:text-5xl">
            What Users Are Saying
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial: any, idx: number) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-green-500/10 bg-slate-900/50 p-8 transition-all duration-300 hover:border-green-500/30 md:p-10"
            >
              {/* Quote icon */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                <Quote className="h-6 w-6" />
              </div>

              {/* Quote text */}
              <blockquote className="mb-8 text-lg leading-relaxed font-medium text-slate-300 md:text-xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-sm font-bold text-green-400">
                  {testimonial.author?.charAt?.(0) || "-"}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">
                    {testimonial.platform}
                  </p>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-green-500/5 blur-2xl transition-all duration-500 group-hover:bg-green-500/10" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
