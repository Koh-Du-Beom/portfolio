import TetrahedronPage from "@/components/TetrahedronPage";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata(
  "Projects",
  "React, Three.js, Spring Boot, Docker를 활용한 고두범의 프론트엔드, 백엔드, 3D 포인트 클라우드 및 인프라 프로젝트를 소개합니다.",
  "/projects",
);

export default function ProjectsPage() {
  return <TetrahedronPage />;
}
