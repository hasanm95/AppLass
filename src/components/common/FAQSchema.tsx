"use client";

import React from "react";

interface FAQSchemaProps {
  items: readonly {
    question: string;
    answer: string;
  }[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  // We need to convert React nodes to strings for JSON-LD
  // This is a simple strip-tags approach if answer is a component
  const getSchemaAnswer = (answer: string | React.ReactNode): string => {
    if (typeof answer === "string") return answer;

    // Fallback for React elements - this is better than nothing
    // For specific docs like FomoGen, we might want to pass raw strings
    return "See page content for detailed answer.";
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: getSchemaAnswer(item.answer),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
