import { Section } from "@/components/common/Section";
import { LinkButton } from "../ui/link-button";

interface CompareFooterProps {
  translations?: any;
}

export function CompareFooter({ translations }: CompareFooterProps) {
  return (
    <Section className="border-t border-slate-100 bg-white py-32 text-center">
      <div className="section-container">
        <h2 className="text-display mb-12 text-slate-900">
          {translations?.headline || "Experience Logical Superiority."}
        </h2>
        <LinkButton href="https://apps.shopify.com/fomogen" target="_blank" rel="noopener noreferrer" className="h-20 rounded-2xl bg-slate-900 px-12 text-2xl font-black text-white hover:bg-slate-800">
          {translations?.button || "Install Now — Free of Charge"}
        </LinkButton>
      </div>
    </Section>
  );
}
