import { cn } from "@/lib/utils";

type MobileNavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  isDark: boolean;
};

export default function MobileNavLink({
  href,
  children,
  onClick,
  isDark,
}: MobileNavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "text-4xl font-black tracking-tighter transition-all hover:translate-x-2",
        isDark ? "text-white" : "text-slate-900"
      )}
    >
      {children}
    </a>
  );
}
