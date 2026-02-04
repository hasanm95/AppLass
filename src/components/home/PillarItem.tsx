import {
  Zap,
  Calculator,
  Globe,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Zap,
  Calculator,
  Globe,
};

export interface Pillar {
  title: string;
  label: string;
  description: string;
  iconName: string;
}

export function PillarItem({ pillar }: { pillar: Pillar }) {
  const Icon = ICON_MAP[pillar.iconName] || HelpCircle;

  return (
    <div className="block-card group cursor-pointer">
      {/* Colored top border accent */}
      <div className="from-primary to-cta absolute top-0 right-0 left-0 h-1 rounded-t-lg bg-gradient-to-r" />

      <div className="bg-primary/10 text-primary group-hover:bg-cta mb-8 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-250 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>

      <span className="text-eyebrow text-muted-foreground mb-3 block">
        {pillar.label}
      </span>

      <h3 className="text-headline mb-4">{pillar.title}</h3>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {pillar.description}
      </p>
    </div>
  );
}
