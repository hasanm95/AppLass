

import { Link2, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ShareArticleProps {
  title: string;
  slug: string;
}

export function ShareArticle({ title, slug }: ShareArticleProps) {
  const [copied, setCopied] = useState(false);
  const url = `https://applass.com/blog/${slug}`;

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-[2rem] border border-slate-100 bg-slate-50/50 p-8">
      <h4 className="mb-4 text-sm font-black tracking-widest text-slate-900 uppercase">
        Share Article
      </h4>
      <div className="flex gap-4">
        <button
          onClick={shareOnTwitter}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-blue-600 hover:text-blue-600"
          title="Share on Twitter"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-blue-600 hover:text-blue-600"
          title="Share on LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </button>
        <button
          onClick={copyToClipboard}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:border-blue-600 hover:text-blue-600",
            copied ? "border-green-500 text-green-500" : "text-slate-500"
          )}
          title="Copy Link"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Link2 className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
