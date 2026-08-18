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
    title: "[주식회사 디프리] 급경사지안전협회 업무 시스템 개발",
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
      "급경사지안전협회 내부 업무 시스템. 전자결재, ERP, PMS 모듈 프론트엔드 단독 개발.",
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
      "Feature-Sliced Design(FSD) 아키텍처 전면 리팩토링 — 기능 간 cross-import 제거, 의존성 방향 단방향 강제",
      "팀원과 이미지 복원·LAS 변환·정합·변위·암반 분석의 서버리스 분리 방향을 논의하고, 팀원이 구현한 단일 분석 API 호출과 비동기 완료 알림 흐름을 프론트엔드에 연동",
      "대용량 LAS 업로드 안정화와 VWorld GIS 기반 시설물 검색·좌표 시각화",
      "Potree 기반 거리·단면·영역 측정 도구를 비탈면 점검 흐름에 맞게 고도화하고 CSV 데이터를 3D 공간에 시각화",
      "좌표 기반 3D 이미지 어노테이션과 DEM 지표면·지형물 구분 기능 구현",
      "3D 측정값 자동 반영, 점수 산정 및 PDF 변환을 포함한 법정 보고서 양식 구현",
      "JWT 역할 기반 라우팅과 시설물 단위 접근 권한 UI 구현",
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
      "NCP → Cloudflare R2로 수천 개 객체를 이전하고 파일 수·해시·3D Viewer 로딩으로 무결성과 서비스 호환성 검증",
      "NCP Cloud Functions 기반 presigned URL 발급과 Cloud Outbound Mailer 연동 구현",
      "Cloudflare Workers로 R2 객체의 공개 URL 조회 로직을 구현하고, 원본·변환·서비스 데이터를 용도별 버킷으로 분리해 3D 분석 파이프라인의 저장·조회 흐름 설계",
    ],
    metrics: [
      { label: "객체 이전", value: "수천 개" },
      { label: "역할", value: "설계·운영 전담" },
    ],
  },
  {
    id: "onprem",
    order: 4,
    title: "[주식회사 디프리] 규제샌드박스 보안구역 인프라",
    subtitle: "폐쇄망 인프라 설계·구축 전담",
    period: "2025.09 ~ 2026.06",
    stack: ["Docker", "nginx", "TLS", "MinIO S3", "VPN"],
    description:
      "규제샌드박스 보안구역의 폐쇄망 인프라를 설계·구축하고 보안·품질 인증에 대응.",
    bullets: [
      "nginx 경유 후 403 SignatureDoesNotMatch가 발생한 MinIO presigned URL 문제를 내부 CA 인증서와 요청을 변경하지 않는 TCP 프록시 구성으로 해결",
      "VPN 기반 원격 접속과 CC 인증 DB 암호화·OTP 2차 인증 연동",
      "ISO/IEC 25023 기반 품질시험 대응 및 KOLAS 공인시험성적서 발급",
      "아키텍처 문서, 포트맵, 방화벽 정책 및 배포 가이드 수립",
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
      "Java 21",
      "Spring Boot 3.2",
      "JPA",
      "QueryDSL",
      "MySQL",
      "JWT",
    ],
    description:
      "핵심 API를 공동 개발하고 기술 과업지시서 작성부터 일정·결과물 검수까지 외주 개발 전 과정을 관리.",
    bullets: [
      "JWT Access·Refresh Token 인증과 시설물 CRUD·소프트 삭제·복원 API 개발",
      "ERD, 13개 REST API, 스토리지·인증·삭제 정책을 담은 14페이지 기술 과업지시서 작성",
      "6주 마일스톤과 주차별 일정을 관리하고 외주 결과물 검수 및 프론트엔드 연동",
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
      "MapLibre GL",
      "Framer Motion",
      "Nodemailer",
    ],
    description:
      "회사 공식 홈페이지 6개 페이지를 단독 설계·개발하고 dpre.co.kr 도메인으로 Vercel에 배포·운영.",
    bullets: [
      "dpre.co.kr 커스텀 도메인 연결 및 Vercel 배포/운영",
      "MapLibre GL + GeoJSON 전국 촬영현황 지도 시각화",
      "Zustand 기반 한/영 다국어 전환",
      "Nodemailer를 통한 문의사항 이메일 자동 전달",
      "SEO 최적화 → 구글 \"디프리\" 검색 최상단 노출",
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
      "react-window 가상 스크롤로 20,000+ 종목 렌더링 최적화",
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
    subtitle: "VDI 인프라 운영 및 WebRTC 기술 연구 (8주)",
    period: "2024.06 ~ 2024.08",
    stack: [
      "Dstation 9.0",
      "MasterVD",
      "Active Directory",
      "Windows Server",
      "WebRTC",
    ],
    description:
      "(주)틸론 하계 현장실습. VDI 플랫폼 구축/운영 및 WebRTC 기술 연구.",
    bullets: [
      "Dstation VDI 전체 라이프사이클 — 서버 설치 → 템플릿 생성 → 사용자 프로비저닝 → 운영",
      "Active Directory 연동 VDI 사용자 관리 — AD 인증 + 롤 매핑, CSV 일괄 생성",
      "VDI 환경 트러블슈팅 — 네트워크/라이선스/레지스트리 장애 진단 및 해결",
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
  { date: "2025.09", label: "보안구역 인프라", projectId: "onprem" },
  { date: "2026.01", label: "급경사지안전협회 시스템", projectId: "korea-slope" },
];
