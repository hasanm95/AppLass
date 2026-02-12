"use client";

import { Section } from "@/components/common/Section";
import { FAQS } from "@/constants/home-data";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function AnswerNuggets() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-[var(--muted)] py-16 md:py-24 lg:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-xs font-bold tracking-widest text-[var(--muted-foreground)]/50 uppercase">
              FAQ
            </span>
            <span className="block h-px flex-1 bg-[var(--foreground)]/20" />
          </div>

          <h2 className="mb-4 font-mono text-2xl leading-tight font-bold text-[var(--foreground)] md:text-3xl lg:text-4xl">
            Frequently Asked
            <br />
            <span className="text-[var(--muted-foreground)]/40">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion - Minimal Style */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-12">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={idx}
                className="group cursor-pointer border-b border-[var(--border)] py-6 first:border-t"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 font-mono text-xs font-bold tracking-widest text-[var(--muted-foreground)]/50 uppercase">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-semibold transition-colors group-hover:text-[var(--cta)]">
                      {faq.question}
                    </h3>
                  </div>
                  <button
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-[var(--border)] transition-all duration-200 group-hover:border-[var(--cta)]"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-[var(--cta)]" />
                    ) : (
                      <Plus className="h-4 w-4 text-[var(--muted-foreground)]" />
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
                    <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
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
