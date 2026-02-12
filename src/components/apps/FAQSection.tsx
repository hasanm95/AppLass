import { Section } from "@/components/common/Section";
import { MINDFUL_GUARD_DATA } from "@/constants/mindful-guard-data";
import { cn } from "@/lib/utils";

export function FAQSection() {
  return (
    <Section id="faq" className="bg-[#FBFBFA] border-t border-slate-200">
      <div className="section-container">
        <div className="mb-24">
          <span className="mb-6 block font-mono text-[10px] font-bold tracking-[0.3em] text-[#064E3B] uppercase">
            // Technical Clarifications
          </span>
          <h2 className="text-5xl font-black tracking-tighter text-slate-950 md:text-6xl">
            Frequently Asked
            <br />
            <span className="text-slate-300">Questions.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {MINDFUL_GUARD_DATA.faqs.map((faq, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative border-2 border-slate-950 bg-white p-10 transition-all hover:bg-slate-50",
                idx % 2 === 1 && "lg:mt-16" // Fragmented vertical offset
              )}
            >
              {/* Technical Marker */}
              <div className="absolute top-4 right-4 font-mono text-[8px] text-slate-300 uppercase">
                [ Protocol.Entry_0{idx + 1} ]
              </div>
              
              <h3 className="mb-6 text-xl font-black tracking-tight text-slate-950 leading-tight">
                {faq.question}
              </h3>
              <p className="font-medium text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-slate-100" />
                <div className="h-2 w-2 bg-[#064E3B]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Schema for SEO - AI Snippet Bait */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: MINDFUL_GUARD_DATA.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </Section>
  );
}
