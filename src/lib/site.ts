import type { Metadata } from "next";

export const SITE_URL = "https://dubeom.com";

export const SITE_NAME = "고두범 포트폴리오";

export const SITE_DESCRIPTION =
  "React, TypeScript, Next.js, Three.js, Spring Boot, Docker 경험을 보유한 프론트엔드 중심 풀스택 개발자 고두범의 포트폴리오입니다.";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}
