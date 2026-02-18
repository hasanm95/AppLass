import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { Footer, Navbar } from "@/components/common";
import { Shield } from "lucide-react";

export default function MindfulGuardDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar
        customBranding={
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 fill-slate-900 text-slate-900" />
            <span className="text-lg font-black tracking-tighter text-slate-900 uppercase">
              Mindful<span className="text-slate-400">Guard</span>
            </span>
          </div>
        }
      />

      <div className="section-container flex flex-1 pt-32">
        <DocsSidebar />
        <main className="flex-1 pb-24 lg:pl-16">
          <div className="max-w-4xl pt-8">{children}</div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
