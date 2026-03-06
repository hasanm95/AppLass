
import { Button } from "@/components/ui/button";
import { localePath } from "@/i18n/utils";

interface AppCalloutProps {
  appName: "Mindful Guard" | "FOMOgen" | "AppLass";
  lang?: string;
  labels?: {
    learnMore: string;
    poweredByLogic: string;
    sub: string;
    desc: string;
  };
}

export function AppCallout({ appName, lang = "en", labels }: AppCalloutProps) {
  const data = {
    "Mindful Guard": {
      title: "Mindful Guard",
      sub: labels?.sub || "Built for Focus.",
      desc: labels?.desc || "Reclaim your digital focus with logical guardrails.",
      href: "/apps/mindful-guard",
      color: "bg-[#10B981]",
    },
    FOMOgen: {
      title: "FOMOgen",
      sub: labels?.sub || "Sales Simplified.",
      desc: labels?.desc || "The #1 Shopify app for social proof automation.",
      href: "/apps/fomogen",
      color: "bg-blue-600",
    },
    AppLass: {
      title: "The Logic Lab",
      sub: labels?.sub || "First Principles.",
      desc: labels?.desc || "Get engineering insights delivered to your inbox.",
      href: "#subscribe",
      color: "bg-slate-900",
    },
  }[appName];

  return (
    <div className="group relative overflow-hidden rounded-4xl border border-slate-900 bg-white p-8">
      <div
        className={`absolute top-0 right-0 h-24 w-24 ${data.color} translate-x-12 -translate-y-12 rounded-full opacity-[0.03] blur-2xl transition-opacity group-hover:opacity-[0.1]`}
      />

      <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
        {labels?.poweredByLogic || "Powered by Logic"}
      </span>

      <h4 className="mb-2 text-2xl font-black text-slate-900">{data.title}</h4>
      <p className="mb-6 text-sm font-bold text-slate-600">{data.sub}</p>

      <p className="mb-8 text-sm leading-relaxed font-medium text-slate-600">
        {data.desc}
      </p>

      <Button
        className={`w-full ${data.color} h-12 rounded-xl font-bold text-white`}
        asChild
      >
        <a href={localePath(lang, data.href)}>{labels?.learnMore || "Learn More"}</a>
      </Button>
    </div>
  );
}
