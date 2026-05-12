import type { Metadata } from "next";
import "@fontsource/pretendard/400.css";
import "@fontsource/pretendard/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "고두범 | 풀스택 개발자 포트폴리오",
  description:
    "프론트엔드 중심 풀스택 개발자 고두범의 포트폴리오. React, TypeScript, Next.js, Three.js, Spring Boot, Docker, CI/CD 경험을 보유하고 있습니다.",
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
  openGraph: {
    title: "고두범 | 풀스택 개발자 포트폴리오",
    description:
      "프론트엔드 중심 풀스택 개발자. React, Three.js, Spring Boot, 클라우드 인프라까지.",
    url: "https://portfolio-ten-mu-8he06n7glf.vercel.app",
    siteName: "고두범 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "고두범 | 풀스택 개발자 포트폴리오",
    description:
      "프론트엔드 중심 풀스택 개발자. React, Three.js, Spring Boot, 클라우드 인프라까지.",
  },
  metadataBase: new URL("https://portfolio-ten-mu-8he06n7glf.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="V5mTC3cECaoXyCX9jHYs6WprRHopIxRMasZ8Lh80dXQ" />
      </head>
      <body className="bg-zinc-950 text-zinc-100 overflow-x-hidden">{children}</body>
    </html>
  );
}
