import Link from "next/link";
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <span>FOMO Gen</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <a href="https://apps.shopify.com/fomogen" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm">Get Started</Button>
          </a>
        </div>
      </div>
    </nav>
  );
}