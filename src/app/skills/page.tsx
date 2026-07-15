import SkillsSection from "@/components/sections/SkillsSection";
import SeoPageShell from "@/components/seo/SeoPageShell";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata(
  "Skills",
  "React, TypeScript, Next.js, Three.js, Spring Boot, Docker 등 풀스택 개발자 고두범의 기술 스택을 소개합니다.",
  "/skills",
);

export default function SkillsPage() {
  return (
    <SeoPageShell>
      <SkillsSection />
    </SeoPageShell>
  );
}
