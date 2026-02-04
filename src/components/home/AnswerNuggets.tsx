"use client";

import { Section } from "@/components/common/Section";
import { FAQS } from "@/constants/home-data";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function AnswerNuggets() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="block-section bg-muted">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <span className="product-number">FAQ</span>
            <span className="editorial-line flex-1" />
          </div>

          <h2 className="text-display-sm mb-4">
            Frequently Asked
            <br />
            <span className="text-muted-foreground/40">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion - Minimal Style */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-12">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={idx}
                className="accordion-minimal group cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="product-number mt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="group-hover:text-cta text-base font-semibold transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <button
                    className="border-border group-hover:border-cta flex h-8 w-8 flex-shrink-0 items-center justify-center border transition-all duration-200"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                  >
                    {isOpen ? (
                      <Minus className="text-cta h-4 w-4" />
                    ) : (
                      <Plus className="text-muted-foreground h-4 w-4" />
                    )}
                  </button>
                </div>

                <div
                  className={`grid transition-all duration-200 ${
                    isOpen
                      ? "mt-4 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pl-12">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
