
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
        >
          <span className="text-2xl">⚡</span>
          <span>FOMO Gen</span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="https://apps.shopify.com/fomogen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
