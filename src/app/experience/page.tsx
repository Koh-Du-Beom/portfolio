import ExperienceSection from "@/components/sections/ExperienceSection";
import SeoPageShell from "@/components/seo/SeoPageShell";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata(
  "Experience",
  "Tilon과 Koscom 산학 프로젝트, DPRE 실무, SK AI Leader Academy로 이어지는 고두범의 경력을 소개합니다.",
  "/experience",
);

export default function ExperiencePage() {
  return (
    <SeoPageShell>
      <ExperienceSection />
    </SeoPageShell>
  );
}
