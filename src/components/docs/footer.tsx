import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <span className="font-semibold text-gray-900">FOMO Generator</span>
            <span className="text-gray-400 mx-2">|</span>
            <span className="text-gray-500 text-sm">&copy; {new Date().getFullYear()}</span>
          </div>
          
          <div className="flex flex-col md:flex-row text-center md:text-left gap-8 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link href="/docs" className="hover:text-gray-900 transition-colors">Documentation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}