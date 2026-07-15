import type { Metadata, Viewport } from "next";
import "@fontsource/pretendard/400.css";
import "@fontsource/pretendard/700.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

// Viewport 설정 (Next.js 14+ 권장 방식)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "고두범 | 풀스택 개발자 포트폴리오",
    template: "%s | 고두범 포트폴리오",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "고두범",
    "풀스택 개발자",
    "프론트엔드",
    "React",
    "TypeScript",
    "Next.js",
    "Three.js",
    "포트폴리오",
  ],
  authors: [{ name: "고두범" }],
  creator: "고두범",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "고두범 | 풀스택 개발자 포트폴리오",
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "고두범 | 풀스택 개발자 포트폴리오",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "V5mTC3cECaoXyCX9jHYs6WprRHopIxRMasZ8Lh80dXQ",
  },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: SITE_URL,
  mainEntity: {
    "@type": "Person",
    name: "고두범",
    url: SITE_URL,
    jobTitle: "풀스택 개발자",
    description: SITE_DESCRIPTION,
    sameAs: [
      "https://github.com/Koh-Du-Beom",
      "https://www.instagram.com/dubeom/",
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "Three.js",
      "Spring Boot",
      "Docker",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-zinc-950 text-zinc-100 overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
