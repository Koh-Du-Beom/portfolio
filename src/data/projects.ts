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
    title: "비탈면 사업관리 그룹웨어",
    subtitle: "외주 수주 · 납품 진행 중",
    period: "2026.02 ~ 현재",
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
      "급경사지안전협회 업무 시스템. 전자결재, PMS, 인사관리. 155커밋, 98% 기여.",
    bullets: [
      "전자결재 전체 구현 — 기안/상신/승인/반려, 조직도 결재선, 서명 이미지, PDF 생성/일괄 다운로드",
      "프로젝트 관리(PMS) — 등록/검색/상세, 타임라인, 내부/외부 인원, 결재문서 연결",
      "CSV 기반 외부참여자 일괄 등록",
      "공용 UI 훅 (notify/confirm) 설계",
      "고객 요구사항 → 기술 구현 변환, 사용자 매뉴얼 작성",
    ],
    metrics: [{ label: "커밋", value: "155" }],
  },
  {
    id: "dpre-front",
    order: 2,
    title: "비탈면 유지관리 플랫폼",
    subtitle: "프론트엔드 단독 개발",
    period: "2025.02 ~ 현재",
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
      "3D 점군 데이터(LAS) 업로드/뷰어, GIS 지도 기반 시설물 관리, 관리자 시스템. 653커밋, 98% 기여.",
    bullets: [
      "FSD 아키텍처 전면 리팩토링 — feature간 cross-import 제거, 의존성 방향 단방향 강제",
      "코드 스플리팅으로 초기 번들 2,293KB → 190KB (92% 감소)",
      "S3 Presigned URL 기반 3D 점군 업로드 파이프라인 — Reconstruction → ICP → Potree → Distance 비동기 체인",
      "VWorld GIS 지도 위 시설물 마커/검색/좌표 시각화",
      "JavaScript → TypeScript 전면 마이그레이션, any 55개 → 0개",
      "React Query 패턴 전환으로 서버/클라이언트 상태 분리",
      "JWT 인증 + 역할 기반 라우팅 + 시설물 단위 권한 관리",
    ],
    metrics: [
      { label: "번들 감소", value: "92%" },
      { label: "커밋", value: "653" },
      { label: "any 제거", value: "55→0" },
    ],
  },
  {
    id: "infra-cloud",
    order: 3,
    title: "클라우드 인프라 / CI-CD",
    subtitle: "Docker + nginx + Cloudflare",
    period: "2025.02 ~ 현재",
    stack: ["GitHub Actions", "Docker", "nginx", "Cloudflare", "NCP"],
    description: "전체 서비스 인프라 설계, CI/CD, 서버리스 유틸리티.",
    bullets: [
      "GitHub Actions CI/CD — Git Flow, appleboy SCP 배포, 심볼릭 링크 무중단 교체",
      "nginx 7개 서비스 통합 라우팅 — API 키 서버 사이드 주입, 프론트엔드 노출 제로",
      "NCP → Cloudflare R2 마이그레이션 — 월 비용 60% 절감",
      "Cloudflare Workers Presigned URL + 이메일 알림 서버리스",
      "3D 파이프라인 버킷 3분리 설계",
      "fail2ban 영구밴 정책, MySQL 키 기반 인증",
    ],
    metrics: [
      { label: "비용 절감", value: "60%" },
      { label: "서비스 통합", value: "7개" },
    ],
  },
  {
    id: "onprem",
    order: 4,
    title: "가산 보안구역 온프레미스",
    subtitle: "폐쇄망 인프라 단독 설계",
    period: "2026.01 ~ 2026.04",
    stack: [
      "Docker",
      "Nginx L4/L7",
      "OpenSSL",
      "TLS",
      "MinIO S3",
      "D'Amo",
      "OnePass 2FA",
      "GitLab CI/CD",
    ],
    description:
      "규제 샌드박스 보안구역 내 4대 서버 분산 아키텍처 단독 설계/구축.",
    bullets: [
      "4대 서버(DMZ/관리자/DB/분석) 분산 아키텍처 — 30+ 포트 매핑",
      "OpenSSL 자체 CA + SAN 기반 IP 인증서 — TLS 1.2/1.3",
      "MinIO S3 L4 TCP Stream Proxy TLS 종단 — Presigned URL 서명 무결성 보존",
      "D'Amo 컬럼 암호화 Docker 통합 — Flyway V23 PII 암호화",
      "OnePass OTP 2차인증, GitLab CI/CD + 폐쇄망 USB docker save/load",
      "아키텍처 문서, 포트맵, 방화벽 정책, 배포 가이드 수립",
    ],
    metrics: [
      { label: "서버", value: "4대" },
      { label: "포트 정책", value: "30+" },
    ],
  },
  {
    id: "potree",
    order: 5,
    title: "Potree 3D 점군 뷰어",
    subtitle: "오픈소스 대규모 커스터마이징",
    period: "2024.10 ~ 2026.04",
    stack: [
      "JavaScript",
      "Three.js",
      "WebGL",
      "Gulp",
      "html2canvas",
      "Proj4",
      "GeoServer",
    ],
    description:
      "오픈소스 WebGL 점군 뷰어를 비탈면 도메인에 맞게 대규모 커스터마이징. 615커밋, 80% 기여.",
    bullets: [
      "법정 보고서 7종 양식 구현 — 3D 측정값 자동 반영, 점수 산정, PDF 변환",
      "이미지 어노테이션 — 좌표 기반 3D 배치, DEM 지표면/지형물 구분, 배치 분할 병렬 업로드",
      "측정 도구 고도화 — Distance/Profile/Clipping CRUD, CSV 오버레이, DXF 내보내기",
      "Meta Quest + Galaxy XR VR 호환성, 모바일 OOM 방지",
      "GeoServer WMS/WFS + Proj4 좌표 변환, DEM Z축 정합",
    ],
    metrics: [
      { label: "커밋", value: "615" },
      { label: "보고서", value: "7종" },
    ],
  },
  {
    id: "backend",
    order: 6,
    title: "백엔드 API 서버",
    subtitle: "Spring Boot + Docker",
    period: "2025.01 ~ 2026.03",
    stack: [
      "Java 21",
      "Spring Boot 3.2",
      "JPA",
      "QueryDSL",
      "MySQL",
      "Flyway",
      "Docker",
      "JWT",
    ],
    description:
      "백엔드 API 서버 공동 개발. 인증, 인프라, 스토리지 연동 담당. 69커밋.",
    bullets: [
      "JWT Access/Refresh Token 인증 — 다중 접속 처리, 토큰 재발급",
      "Docker Compose 개발/배포 이원화, MySQL 하드닝",
      "Flyway DB 마이그레이션 13단계 이상",
      "NCP → Cloudflare R2 마이그레이션 — 월 비용 약 60% 절감",
      "시설물 CRUD API — 좌표 기반 중복 판별, 소프트 삭제/복원",
    ],
    metrics: [{ label: "비용 절감", value: "60%" }],
  },
  {
    id: "homepage",
    order: 7,
    title: "회사 홈페이지",
    subtitle: "dpre.co.kr",
    period: "2025.02 ~ 2026.01",
    stack: [
      "Next.js 15",
      "React 19",
      "MUI",
      "MapLibre GL",
      "Motion",
      "Nodemailer",
    ],
    description:
      "회사 공식 홈페이지 단독 설계/개발. 6개 페이지, 112커밋, 100% 기여.",
    bullets: [
      "MapLibre GL + GeoJSON 전국 촬영현황 지도 시각화",
      "Zustand 기반 한/영 다국어 전환",
      "Nodemailer + reCAPTCHA 문의 → 이메일 자동 전달",
      "SEO 최적화 → 구글 \"디프리\" 검색 최상단 노출",
    ],
    metrics: [],
  },
  {
    id: "capstone",
    order: 8,
    title: "코스콤 캡스톤",
    subtitle: "AI 주식 분석 플랫폼 (학부)",
    period: "2024.09 ~ 2024.12",
    stack: [
      "Next.js 14",
      "React",
      "Zustand",
      "Chart.js",
      "Lightweight Charts",
      "SQLite",
      "JWT",
    ],
    description:
      "코스콤 기업 연계 캡스톤. 2인 팀, 프론트엔드 94% 기여 (227/242 커밋).",
    bullets: [
      "프롬프트 기반 주식 분석 UI — 자연어 → AI 분석 → 그래프 시각화",
      "백테스팅 시뮬레이션 — 종목/비율 → 과거 수익률",
      "관심종목 시스템 — Zustand + SQLite, 실시간 동기화",
      "Next.js API Route + JWT + bcrypt 풀스택 인증",
    ],
    metrics: [{ label: "기여율", value: "94%" }],
  },
  {
    id: "tilon-internship",
    order: 9,
    title: "틸론 현장실습",
    subtitle: "VDI 인프라 운영 (8주)",
    period: "2024.06 ~ 2024.08",
    stack: [
      "Dstation 9.0",
      "MasterVD",
      "Active Directory",
      "Windows Server",
      "WebRTC",
    ],
    description:
      "(주)틸론 하계 현장실습. VDI 플랫폼 구축/운영 및 WebRTC 기술 연구. 8주간 실무 경험.",
    bullets: [
      "Dstation VDI 전체 라이프사이클 — 서버 설치 → 템플릿 생성 → 사용자 프로비저닝 → 운영",
      "Active Directory 연동 VDI 사용자 관리 — AD 인증 + 롤 매핑, CSV 일괄 생성",
      "VDI 환경 트러블슈팅 — 네트워크/라이선스/레지스트리 장애 진단 및 해결",
      "WebRTC 보안 분석 — 프로토콜 취약점 조사, 캡스톤 프론트엔드 구현에 활용",
    ],
    metrics: [],
  },
  {
    id: "capstone-4k-video",
    order: 10,
    title: "틸론 캡스톤 — 4K 화상회의",
    subtitle: "WebRTC(OpenVidu) 프론트엔드",
    period: "2024.03 ~ 2024.06",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "OpenVidu",
      "Redux Toolkit",
      "MUI",
      "Socket.io",
      "NGINX",
    ],
    description:
      "틸론 기업 연계 캡스톤. WebRTC 기반 다자간 화상회의 웹 플랫폼 프론트엔드 개발. JS → TS 마이그레이션.",
    bullets: [
      "OpenVidu 기반 실시간 화상회의 — 다자간 영상/음성, 화면 공유, 실시간 채팅 통합",
      "JavaScript → TypeScript 전체 마이그레이션 — strict mode + strictNullChecks",
      "Web Audio API 디바이스 사전 체크 — 카메라/마이크 열거, 프리뷰, 입장 전 선택",
      "JWT 인증 + Axios interceptor 토큰 자동 주입, 만료 검증 및 자동 로그아웃",
      "NGINX 리버스 프록시 — SSL/TLS, 3개 서비스 통합 엔드포인트",
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
  { date: "2026.02", label: "사업관리 그룹웨어 (수주)", projectId: "korea-slope" },
];
