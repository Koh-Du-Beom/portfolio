import TetrahedronPage from "@/components/TetrahedronPage";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata(
  "Projects",
  "3D·GIS 비탈면 유지관리 플랫폼과 서버리스 MSA를 비롯한 고두범의 제품 개발 및 인프라 프로젝트를 소개합니다.",
  "/projects",
);

export default function ProjectsPage() {
  return <TetrahedronPage />;
}
