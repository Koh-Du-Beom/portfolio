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
    period: "2026.01 ~ 현재",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "MUI",
      "Tailwind",
      "React Query",
      "jsPDF",
      "Chart.js",
    ],
    description:
      "급경사지안전협회 내부 업무 시스템. 전자결재, ERP, PMS 모듈 프론트엔드 단독 개발.",
    bullets: [
      "전자결재 시스템 전체 구현 — 기안/상신/승인/반려, 조직도 결재선, 서명, PDF 생성/다운로드",
      "프로젝트 관리(PMS) — 등록/검색/상세, 타임라인, 내부/외부 인원, 결재문서 연결",
      "React Query useQuery/useMutation 패턴 기반 서버 상태 관리",
      "고객 요구사항 → 기술 구현 변환, 사용자 매뉴얼 작성",
    ],
    metrics: [{ label: "기여도", value: "FE 100%" }],
  },
  {
    id: "dpre-front",
    order: 2,
    title: "[주식회사 디프리] 비탈면 유지관리 플랫폼",
    subtitle: "dpre.kr · 프론트엔드 단독 개발",
    period: "2024.12 ~ 현재",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "MUI",
      "Tailwind",
      "Zustand",
      "React Query",
      "Three.js",
    ],
    description:
      "3D 점군 데이터(LAS) 업로드/뷰어, GIS 지도 기반 시설물 관리, 관리자 시스템. dpre.kr 도메인 운영.",
    bullets: [
      "JavaScript → TypeScript 전면 마이그레이션",
      "Feature-Sliced Design(FSD) 아키텍처 전면 리팩토링 — feature간 cross-import 제거, 의존성 방향 단방향 강제",
      "React.lazy + Vite manualChunks 코드 스플리팅 — 초기 번들 2,293KB → 190KB (92% 감소)",
      "대용량 3D 점군 파일 업로드 안정화 및 분석완료 이메일 API 연동으로 장기 분석 결과 알림",
      "VWorld GIS 지도 위 시설물 마커/검색/좌표 시각화",
      "React Query 패턴 전환으로 서버/클라이언트 상태 분리",
      "JWT 인증 + 역할 기반 라우팅 + 시설물 단위 권한 관리",
    ],
    metrics: [
      { label: "번들 감소", value: "92%" },
      { label: "기여도", value: "98%" },
    ],
  },
  {
    id: "infra-cloud",
    order: 3,
    title: "[주식회사 디프리] 클라우드 인프라 / CI-CD",
    subtitle: "Docker + nginx + Cloudflare",
    period: "2024.12 ~ 현재",
    stack: ["GitHub Actions", "Docker", "nginx", "Cloudflare", "NCP"],
    description: "전체 서비스 인프라 설계, CI/CD, 서버리스 유틸리티.",
    bullets: [
      "GitHub Actions CI/CD — Git Flow, appleboy SCP 배포, 심볼릭 링크 무중단 교체",
      "nginx 리버스 프록시 기반 SPA 서비스 Docker 컨테이너 배포 및 라우팅 설정",
      "NCP → Cloudflare R2 마이그레이션 — 월 비용 60% 절감",
      "Cloudflare Workers 기반 Presigned URL 발급 + 이메일 전송 API 서버리스 배포",
      "3D 파이프라인 버킷 3분리 설계",
      "fail2ban 영구밴 정책으로 brute-force 공격 차단",
    ],
    metrics: [
      { label: "비용 절감", value: "60%" },
      { label: "기여도", value: "100%" },
    ],
  },
  {
    id: "onprem",
    order: 4,
    title: "[주식회사 디프리] 규제샌드박스",
    subtitle: "폐쇄망 인프라 설계/구축 전담",
    period: "2025.09 ~ 현재",
    stack: [
      "Docker",
      "nginx",
      "TLS",
      "MinIO S3",
      "VPN",
    ],
    description:
      "규제 샌드박스 보안구역 내 폐쇄망 인프라 설계/구축.",
    bullets: [
      "MinIO S3 L4 TCP Stream Proxy + 자체 CA TLS 종단 — Presigned URL 서명 무결성 보존",
      "VPN 기반 폐쇄망 원격 접속 환경 구성",
      "CC 인증 보안 솔루션(DB 암호화, OTP 2차인증) 도입 및 연동",
      "ISO 25023 품질 인증 취득",
      "아키텍처 문서, 포트맵, 방화벽 정책, 배포 가이드 수립",
    ],
    metrics: [{ label: "기여도", value: "설계/구축 전담" }],
  },
  {
    id: "potree",
    order: 5,
    title: "[주식회사 디프리] Potree 3D Pointcloud Viewer",
    subtitle: "오픈소스 대규모 커스터마이징",
    period: "2024.12 ~ 현재",
    stack: [
      "JavaScript",
      "Three.js",
      "WebGL",
      "Gulp",
      "Proj4",
      "GeoServer",
    ],
    description:
      "오픈소스 WebGL 점군 뷰어를 비탈면 도메인에 맞게 대규모 커스터마이징.",
    bullets: [
      "법정 보고서 양식 구현 — 3D 측정값 자동 반영, 점수 산정, PDF 변환",
      "이미지 어노테이션 — 좌표 기반 3D 배치, DEM 지표면/지형물 구분",
      "측정 도구 고도화 — Distance/Profile/Clipping 커스터마이징, CSV 오버레이, DXF 내보내기",
      "GeoServer WMS/WFS + Proj4 좌표 변환, DEM Z축 정합",
    ],
    metrics: [{ label: "기여도", value: "80%" }],
  },
  {
    id: "backend",
    order: 6,
    title: "[주식회사 디프리] 백엔드 API 서버",
    subtitle: "Spring Boot + Docker · 공동 개발 + 외주 관리",
    period: "2024.12 ~ 현재",
    stack: [
      "Java 21",
      "Spring Boot 3.2",
      "JPA",
      "QueryDSL",
      "MySQL",
      "Docker",
      "JWT",
    ],
    description:
      "백엔드 API 서버 공동 개발 및 외주 발주/관리.",
    bullets: [
      "JWT Access/Refresh Token 인증 — 다중 접속 처리, 토큰 재발급",
      "시설물 CRUD API — 좌표 기반 중복 판별, 소프트 삭제/복원",
      "14페이지 기술 과업지시서 작성 — DB 스키마(ERD), 13개 REST API 명세, 스토리지 구조, 인증/삭제 정책",
      "6주 마일스톤 수립 및 주차별 일정 관리, 외주 결과물 검수 및 프론트엔드 연동",
    ],
    metrics: [{ label: "기여도", value: "공동 개발" }],
  },
  {
    id: "homepage",
    order: 7,
    title: "[주식회사 디프리] 홈페이지 개선",
    subtitle: "dpre.co.kr",
    period: "2024.12 ~ 현재",
    stack: [
      "Next.js 15",
      "React 19",
      "MUI",
      "MapLibre GL",
      "Motion",
      "Nodemailer",
    ],
    description:
      "회사 공식 홈페이지 단독 설계/개발. 6개 페이지.",
    bullets: [
      "MapLibre GL + GeoJSON 전국 촬영현황 지도 시각화",
      "Zustand 기반 한/영 다국어 전환",
      "Nodemailer를 통한 문의사항 이메일 자동 전달",
      "SEO 최적화 → 구글 \"디프리\" 검색 최상단 노출",
    ],
    metrics: [{ label: "기여도", value: "100%" }],
  },
  {
    id: "capstone",
    order: 8,
    title: "산학실전캡스톤 — [Koscom]",
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
    metrics: [],
  },
  {
    id: "tilon-internship",
    order: 9,
    title: "하기 계절제 현장실습(인턴십)",
    subtitle: "[Tilon] VDI 인프라 운영 (8주)",
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
    order: 10,
    title: "산학실전캡스톤 — [Tilon]",
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
  { date: "2025.02", label: "DPRE 합류", projectId: "dpre-front" },
  { date: "2025.02", label: "유지관리 플랫폼 FE", projectId: "dpre-front" },
  { date: "2025.02", label: "Potree 3D 뷰어", projectId: "potree" },
  { date: "2025.02", label: "백엔드 API", projectId: "backend" },
  { date: "2025.02", label: "회사 홈페이지", projectId: "homepage" },
  { date: "2025.02", label: "클라우드 인프라", projectId: "infra-cloud" },
  { date: "2026.01", label: "보안구역 인프라", projectId: "onprem" },
  { date: "2026.02", label: "급경사지안전협회 시스템 (수주)", projectId: "korea-slope" },
];
