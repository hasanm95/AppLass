import {
  ShoppingBag,
  Clock,
  Users,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  ShoppingBag,
  Clock,
  Users,
};

export type IconName = keyof typeof ICON_MAP;

export interface Solution {
  title: string;
  description: string;
  iconName: string;
}

export function SolutionItem({ solution }: { solution: Solution }) {
  const Icon = ICON_MAP[solution.iconName] || HelpCircle;

  return (
    <div className="block-card group cursor-pointer">
      <div className="bg-cta/10 text-cta group-hover:bg-cta mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-250 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="text-headline mb-4">{solution.title}</h3>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {solution.description}
      </p>

      {/* Progress bar animation on hover */}
      <div className="bg-border relative h-0.5 w-full overflow-hidden rounded-full">
        <div className="bg-cta absolute top-0 left-0 h-full w-full -translate-x-full rounded-full transition-transform duration-500 ease-out group-hover:translate-x-0" />
      </div>
    </div>
  );
}
