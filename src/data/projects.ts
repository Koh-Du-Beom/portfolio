export interface Project {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  period: string;
  stack: string[];
  description: string;
  bullets: string[];
  metrics?: { label: string; value: string }[];
  github?: string;
}

export const projects: Project[] = [
  {
    id: "korea-slope",
    order: 1,
    title: "[주식회사 디프리] B2B 업무 시스템 개발",
    subtitle: "전자결재 · ERP · PMS 프론트엔드 단독 개발",
    period: "2026.01 ~ 2026.06",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "MUI",
      "Tailwind CSS",
      "TanStack Query",
      "jsPDF",
      "Chart.js",
    ],
    description:
      "고객사의 전자결재·예산·사업관리 업무 시스템 프론트엔드 전담 개발.",
    bullets: [
      "전자결재 시스템 전체 구현 — 기안/상신/승인/반려, 조직도 결재선, 서명, PDF 생성/다운로드",
      "프로젝트 관리(PMS) — 등록/검색/상세, 타임라인, 내부/외부 인원, 결재문서 연결",
      "TanStack Query의 useQuery/useMutation 패턴 기반 서버 상태 관리",
      "고객 요구사항 → 기술 구현 변환, 사용자 매뉴얼 작성",
    ],
    metrics: [{ label: "역할", value: "프론트엔드 전담" }],
  },
  {
    id: "dpre-front",
    order: 2,
    title: "[주식회사 디프리] 비탈면 유지관리 플랫폼 · dpre.kr",
    subtitle: "3D·GIS 프론트엔드 전담 · 서버리스 아키텍처 협업·연동",
    period: "2024.12 ~ 2026.06",
    stack: [
      "React",
      "TypeScript",
      "Three.js",
      "Potree",
      "Serverless MSA",
      "Vite",
      "Zustand",
      "TanStack Query",
      "WebGL",
      "Proj4",
      "GeoServer",
    ],
    description:
      "3D 점군·GIS 기반 비탈면 유지관리 플랫폼의 프론트엔드를 전담하고, 기능별 분석 서비스로 구성된 서버리스 MSA의 설계 논의와 프론트엔드 연동에 참여.",
    bullets: [
      "JavaScript → TypeScript 전환으로 API 응답·도메인 모델의 타입 계약 명시",
      "feature-based 구조에 FSD의 책임 분리·단방향 의존성 원칙을 일부 적용해 기능별 변경 범위 정리",
      "분석 서비스 설계 논의에 참여하고 팀원이 구현한 분석 API와 비동기 결과 알림을 프론트엔드에 연동",
      "대용량 LAS 업로드 안정화와 VWorld GIS 기반 시설물 검색·좌표 시각화",
      "Potree 기반 거리·단면·영역 측정 도구를 비탈면 점검 흐름에 맞게 고도화하고 CSV 데이터를 3D 공간에 시각화",
      "좌표 기반 3D 이미지 어노테이션과 DEM 지표면·지형물 구분 기능 구현",
      "3D 측정값 자동 반영, 점수 산정 및 PDF 변환을 포함한 법정 보고서 양식 구현",
      "사용자 권한에 따른 화면 접근 및 업무 흐름 구현",
    ],
    metrics: [
      { label: "역할", value: "프론트엔드 전담" },
      { label: "아키텍처", value: "서버리스 협업·연동" },
    ],
  },
  {
    id: "infra-cloud",
    order: 3,
    title: "[주식회사 디프리] 클라우드 인프라 / CI-CD",
    subtitle: "Docker · nginx · NCP · Cloudflare",
    period: "2024.12 ~ 2026.06",
    stack: [
      "GitHub Actions",
      "Docker",
      "nginx",
      "Cloudflare R2",
      "Cloudflare Workers",
      "NCP Cloud Functions",
      "Cloud Outbound Mailer",
    ],
    description: "전체 서비스의 배포·스토리지 흐름과 서버리스 보조 API를 설계·운영.",
    bullets: [
      "GitHub Actions, Docker, nginx 기반 CI/CD 및 컨테이너 배포 환경 구축",
      "비용과 운영 요구를 비교해 클라우드 스토리지를 전환하고 데이터 무결성과 서비스 호환성 검증",
      "대용량 파일 업로드와 처리 결과 알림 기능 구현",
      "3D 분석 데이터의 저장·조회 기능을 개발하고 운영 흐름 개선",
    ],
    metrics: [
      { label: "주요 기여", value: "스토리지 전환" },
      { label: "역할", value: "설계·운영 전담" },
    ],
  },
  {
    id: "onprem",
    order: 4,
    title: "[주식회사 디프리] 보안 환경 구축 및 품질 대응",
    subtitle: "인프라 구축 · 소프트웨어 품질시험",
    period: "2025.09 ~ 2026.06",
    stack: ["Docker", "nginx"],
    description:
      "보안 요구사항에 맞는 운영 환경을 구축하고 소프트웨어 품질시험에 대응.",
    bullets: [
      "서비스 연동 문제를 진단하고 운영 환경 안정화",
      "보안 요구사항에 따른 접근 관리 및 운영 환경 구성",
      "소프트웨어 품질시험 준비 및 검증 대응",
      "배포·운영 가이드와 인계 문서 작성",
    ],
    metrics: [{ label: "역할", value: "설계·구축 전담" }],
  },
  {
    id: "backend",
    order: 5,
    title: "[주식회사 디프리] 백엔드 API 외주 관리",
    subtitle: "Spring Boot 공동 개발 및 외주 발주·관리",
    period: "2024.12 ~ 2026.06",
    stack: [
      "Java",
      "Spring Boot",
      "JPA",
      "QueryDSL",
      "MySQL",
      "JWT",
    ],
    description:
      "핵심 API를 공동 개발하고 기술 과업지시서 작성부터 일정·결과물 검수까지 외주 개발 전 과정을 관리.",
    bullets: [
      "인증 및 업무 데이터 관리 API 개발",
      "API 명세와 구현·검수 기준을 담은 기술 과업지시서 작성",
      "외주 개발 일정 관리, 결과물 검수 및 프론트엔드 연동",
    ],
    metrics: [{ label: "역할", value: "공동 개발·외주 관리" }],
  },
  {
    id: "homepage",
    order: 6,
    title: "[주식회사 디프리] 홈페이지 개선",
    subtitle: "dpre.co.kr",
    period: "2024.12 ~ 2026.06",
    stack: [
      "Next.js 15",
      "React 19",
      "MUI",
      "GeoJSON",
      "SVG",
      "Framer Motion",
      "Nodemailer",
    ],
    description:
      "회사 공식 홈페이지를 단독 설계·개발하고 배포·운영.",
    bullets: [
      "dpre.co.kr 커스텀 도메인 연결 및 Vercel 배포/운영",
      "GeoJSON 기반 전국 촬영현황 지도 시각화",
      "Zustand 기반 한/영 다국어 전환",
      "Nodemailer를 통한 문의사항 이메일 자동 전달",
      "검색 노출을 위한 메타데이터 및 페이지 구성 개선",
    ],
    metrics: [{ label: "역할", value: "설계·개발 전담" }],
  },
  {
    id: "capstone",
    order: 7,
    title: "[산학실전캡스톤] Koscom",
    subtitle: "데이터 기반 주식투자 포트폴리오 개발",
    period: "2024.09 ~ 2024.12",
    stack: [
      "Next.js 14",
      "React",
      "Zustand",
      "Chart.js",
      "Lightweight Charts",
      "react-window",
      "SQLite",
      "JWT",
    ],
    description:
      "코스콤 기업 연계 캡스톤. Next.js 기반 풀스택 개발.",
    bullets: [
      "프롬프트 기반 주식 분석 UI — 자연어 → AI 분석 → 그래프 시각화",
      "백테스팅 시뮬레이션 — 종목/비율 → 과거 수익률",
      "관심종목 시스템 — Zustand + SQLite, 실시간 동기화",
      "가상 스크롤을 적용해 대규모 종목 목록 렌더링 최적화",
      "Next.js API Route + JWT + bcrypt 풀스택 인증",
    ],
    metrics: [
      { label: "역할", value: "프론트엔드 전담" },
      { label: "백엔드 기여", value: "JWT 인증·API 구현" },
    ],
  },
  {
    id: "tilon-internship",
    order: 8,
    title: "[하계 계절제 현장실습] Tilon",
    subtitle: "VDI 인프라 운영 및 WebRTC 기술 연구",
    period: "2024.06 ~ 2024.08",
    stack: [
      "VDI",
      "Active Directory",
      "Windows Server",
      "WebRTC",
    ],
    description:
      "(주)틸론 하계 현장실습. VDI 플랫폼 구축/운영 및 WebRTC 기술 연구.",
    bullets: [
      "가상화 플랫폼 구축 및 운영 실습",
      "가상화 환경의 사용자 관리 기능 연동",
      "운영 환경의 연동 문제 진단 및 해결",
    ],
    metrics: [],
  },
  {
    id: "capstone-4k-video",
    order: 9,
    title: "[산학실전캡스톤] Tilon",
    subtitle: "WebRTC 기반 다자간 화상회의 플랫폼",
    period: "2024.03 ~ 2024.06",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "OpenVidu",
      "Redux Toolkit",
      "MUI",
      "Socket.io",
    ],
    description:
      "틸론 기업 연계 캡스톤. WebRTC(OpenVidu) 기반 다자간 화상회의 웹 플랫폼 프론트엔드 개발.",
    bullets: [
      "OpenVidu 기반 실시간 화상회의 — 다자간 영상/음성, 화면 공유, 실시간 채팅, Web Audio API 디바이스 사전 체크",
      "JWT 인증 연동 + Axios interceptor 토큰 자동 주입 및 만료 검증",
      "Redux Toolkit + Persist 연결 정보 영속화",
    ],
    metrics: [],
  },
];

export const timeline = [
  { date: "2024.03", label: "캡스톤 (틸론)", projectId: "capstone-4k-video" },
  { date: "2024.06", label: "틸론 현장실습", projectId: "tilon-internship" },
  { date: "2024.09", label: "캡스톤 (코스콤)", projectId: "capstone" },
  { date: "2024.12", label: "DPRE 합류", projectId: "dpre-front" },
  { date: "2025.02", label: "유지관리 플랫폼 FE", projectId: "dpre-front" },
  { date: "2025.02", label: "백엔드 외주 관리", projectId: "backend" },
  { date: "2025.02", label: "회사 홈페이지", projectId: "homepage" },
  { date: "2025.02", label: "서비스 인프라", projectId: "infra-cloud" },
  { date: "2025.09", label: "보안 환경 구축", projectId: "onprem" },
  { date: "2026.01", label: "B2B 업무 시스템", projectId: "korea-slope" },
];
