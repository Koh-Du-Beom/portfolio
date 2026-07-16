import TetrahedronPage from "@/components/TetrahedronPage";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata(
  "About",
  "풀스택 개발자 고두범의 개발 관점, 학력, 경력, 수상 및 자격 정보를 소개합니다.",
  "/about",
);

export default function AboutPage() {
  return <TetrahedronPage />;
}
