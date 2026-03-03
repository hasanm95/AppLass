import { FAQRegistrySection } from "@/components/common";

export function FAQSection({ translations }: { translations?: any }) {
  return (
    <FAQRegistrySection
      registryKey="MINDFUL_GUARD"
      items={translations?.questions}
      title={translations?.headline}
      subtitle={translations?.sectionLabel}
      variant="fragmented"
      className="bg-[#FBFBFA]"
    />
  );
}
