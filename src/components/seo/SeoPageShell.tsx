import type { ReactNode } from "react";
import Link from "next/link";
import ContactSection from "@/components/sections/ContactSection";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
];

export default function SeoPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="font-bold text-zinc-100 hover:text-blue-400">
            고두범 포트폴리오
          </Link>
          <nav aria-label="포트폴리오 주요 페이지" className="flex flex-wrap gap-4 text-sm">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-400 transition-colors hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <h1 className="sr-only">고두범 풀스택 개발자 포트폴리오</h1>
        {children}
      </main>
      <ContactSection />
    </div>
  );
}
