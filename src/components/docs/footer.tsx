

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <span className="font-semibold text-gray-900">FOMO Generator</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex flex-col gap-8 text-center text-sm text-gray-600 md:flex-row md:text-left">
            <a
              href="/privacy"
              className="transition-colors hover:text-gray-900"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="transition-colors hover:text-gray-900"
            >
              Terms of Service
            </a>
            <a
              href="/docs"
              className="transition-colors hover:text-gray-900"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
