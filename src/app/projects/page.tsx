import TetrahedronPage from "@/components/TetrahedronPage";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata(
  "Projects",
  "3D·GIS 비탈면 유지관리 플랫폼, 인증·API 개선, 협회 업무 시스템과 클라우드·폐쇄망 인프라 등 고두범의 프로젝트와 문제 해결 경험을 소개합니다.",
  "/projects",
);

export default function ProjectsPage() {
  return <TetrahedronPage />;
}
