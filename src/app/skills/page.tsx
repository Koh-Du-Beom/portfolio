import TetrahedronPage from "@/components/TetrahedronPage";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata(
  "Skills",
  "React, TypeScript, Three.js, Spring Boot, Docker와 서버리스 MSA 등 풀스택 개발자 고두범의 기술 역량을 소개합니다.",
  "/skills",
);

export default function SkillsPage() {
  return <TetrahedronPage />;
}
