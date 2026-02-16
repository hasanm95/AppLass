"use client";

import { useState } from "react";
import { Section } from "@/components/common/Section";
import { FAQSchema } from "@/components/common/FAQSchema";
import { FAQ_REGISTRY } from "@/constants/faq-registry";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = FAQ_REGISTRY.SCREENVEIL;

  return (
    <Section className="relative bg-slate-950 py-24 md:py-32">
      <FAQSchema items={items} />
      <div className="section-container relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-green-500 uppercase">
              FAQ
            </span>
            <h2 className="text-3xl leading-tight font-bold tracking-tight text-white md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-green-500/10 bg-slate-900/50 transition-all duration-300 hover:border-green-500/20"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left md:p-8"
                >
                  <h3 className="pr-4 text-lg font-bold text-white md:text-xl">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`h-6 w-6 shrink-0 text-green-500 transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === idx ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-base leading-relaxed font-medium text-slate-400 md:px-8 md:pb-8 md:text-lg">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
