import { dummyLinks } from "@/data/links";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function LinksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#fafafa] px-6 py-20 text-center">
      <div className="w-full max-w-xl space-y-12">
        {/* Profile Header */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-100 shadow-sm border border-white" />
            <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
              @username
            </h1>
            <p className="mx-auto max-w-sm text-lg font-medium text-zinc-500 leading-relaxed">
              인플루언서 및 프리랜서를 위한<br />
              나만의 통합 링크 페이지입니다.
            </p>
          </div>
        </div>

        {/* Link List */}
        <div className="flex flex-col gap-4">
          {dummyLinks.map((link) => {
            // Extract domain for favicon
            const domain = new URL(link.url).hostname;
            const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
              >
                <Card className="overflow-hidden border-zinc-200 bg-white shadow-sm transition-all group-hover:border-zinc-300 group-hover:shadow-md">
                  <CardContent className="flex items-center p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 group-hover:bg-white transition-colors">
                      <img 
                        src={faviconUrl} 
                        alt={link.title}
                        className="h-6 w-6 object-contain grayscale-[0.2] group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <div className="flex-1 px-4 text-center">
                      <span className="text-lg font-bold text-zinc-800 group-hover:text-black">
                        {link.title}
                      </span>
                    </div>
                    <div className="w-12 flex justify-end">
                      <ExternalLink className="h-4 w-4 text-zinc-300 group-hover:text-zinc-500 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="pt-20">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="text-[11px] font-black tracking-[0.3em] text-zinc-300 uppercase">
              My-Link
            </span>
            <div className="h-1 w-8 rounded-full bg-zinc-100" />
          </div>
        </footer>
      </div>
    </main>
  );
}

