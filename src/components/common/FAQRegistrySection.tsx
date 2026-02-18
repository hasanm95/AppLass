import { Section } from "@/components/common/Section";
import { FAQSchema } from "@/components/common/FAQSchema";
import { FAQ_REGISTRY, FAQRegistryKey } from "@/constants/faq-registry";
import { cn } from "@/lib/utils";

interface FAQRegistrySectionProps {
  registryKey: FAQRegistryKey;
  className?: string;
  title?: string;
  subtitle?: string;
  variant?: "fragmented" | "centered" | "grid";
}

export function FAQRegistrySection({
  registryKey,
  className,
  title = "Frequently Asked Questions",
  subtitle = "Technical Clarifications",
  variant = "grid",
}: FAQRegistrySectionProps) {
  const items = FAQ_REGISTRY[registryKey];

  return (
    <Section
      id="faq"
      className={cn("border-t border-slate-200 bg-[#FBFBFA]", className)}
    >
      <div className="section-container">
        <div className="mb-24">
          <span className="mb-6 block font-mono text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase">
            {subtitle}
          </span>
          <h2 className="text-5xl font-black tracking-tighter text-slate-950 md:text-6xl">
            {title.split(" ").slice(0, -1).join(" ")}
            <br />
            <span className="text-slate-300">{title.split(" ").slice(-1)}</span>
          </h2>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 gap-8",
            variant === "grid" && "lg:grid-cols-2",
            variant === "centered" && "mx-auto max-w-4xl"
          )}
        >
          {items.map((faq, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative border-2 border-slate-950 bg-white p-10 transition-all hover:bg-slate-50",
                variant === "fragmented" && idx % 2 === 1 && "lg:mt-16"
              )}
            >
              {/* Technical Marker */}
              <div className="absolute top-4 right-4 font-mono text-[8px] text-slate-300 uppercase">
                [ Protocol.Entry_0{idx + 1} ]
              </div>

              <h3 className="mb-6 text-xl leading-tight font-black tracking-tight text-slate-950">
                {faq.question}
              </h3>
              <p className="leading-relaxed font-medium text-slate-600">
                {faq.answer}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-100" />
                <div className="h-2 w-2 bg-blue-600" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <FAQSchema items={items} />
    </Section>
  );
}
