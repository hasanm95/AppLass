import { Footer, Navbar } from "@/components/common";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <div className="section-container pt-32 pb-24">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
