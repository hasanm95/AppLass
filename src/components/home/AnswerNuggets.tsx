"use client";

import { Section } from "@/components/common/Section";
import { FAQSchema } from "@/components/common/FAQSchema";
import { FAQ_REGISTRY } from "@/constants/faq-registry";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/get-dictionary";

interface AnswerNuggetsProps {
  translations?: Dictionary["home"]["answerNuggets"];
}

export function AnswerNuggets({ translations }: AnswerNuggetsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const t: Dictionary["home"]["answerNuggets"] = translations ?? {
    sectionLabel: "FAQ",
    headline: "Frequently Asked",
    headlineAccent: "Questions",
    expandAnswer: "Expand answer",
    collapseAnswer: "Collapse answer",
    items: [...FAQ_REGISTRY.HOME],
  };

  return (
    <Section className="bg-muted py-16 md:py-24 lg:py-32">
      <FAQSchema items={t.items} />
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-xs font-bold tracking-widest text-(--muted-foreground)/50 uppercase">
              {t.sectionLabel}
            </span>
            <span className="block h-px flex-1 bg-(--foreground)/20" />
          </div>

          <h2 className="text-foreground mb-4 font-mono text-2xl leading-tight font-bold md:text-3xl lg:text-4xl">
            {t.headline}
            <br />
            <span className="text-(--muted-foreground)/40">{t.headlineAccent}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-12">
          {t.items.map((faq: { question: string; answer: string }, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={idx}
                className="group border-border cursor-pointer border-b py-6 first:border-t"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 font-mono text-xs font-bold tracking-widest text-(--muted-foreground)/50 uppercase">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="group-hover:text-cta text-base font-semibold transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <button
                    className="border-border group-hover:border-cta flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-200"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? t.collapseAnswer : t.expandAnswer}
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
