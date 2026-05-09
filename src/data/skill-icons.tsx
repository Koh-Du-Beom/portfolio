import { type ReactNode } from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiMui,
  SiTailwindcss,
  SiReactquery,
  SiThreedotjs,
  SiChartdotjs,
  SiFramer,
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiMysql,
  SiJsonwebtokens,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiCloudflare,
  SiMinio,
  SiPortainer,
  SiLinux,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { HiMap, HiServer, HiLink } from "react-icons/hi";
import { HiCpuChip } from "react-icons/hi2";
import { FaJava, FaLayerGroup, FaSearch } from "react-icons/fa";

const S = 16;

export const skillIcons: Record<string, ReactNode> = {
  // Frontend
  React: <SiReact size={S} color="#61DAFB" />,
  TypeScript: <SiTypescript size={S} color="#3178C6" />,
  "Next.js": <SiNextdotjs size={S} color="#ffffff" />,
  Vite: <SiVite size={S} color="#646CFF" />,
  MUI: <SiMui size={S} color="#007FFF" />,
  "Tailwind CSS": <SiTailwindcss size={S} color="#06B6D4" />,
  Zustand: <GiBearFace size={S} color="#764ABC" />,
  "React Query": <SiReactquery size={S} color="#FF4154" />,
  "Three.js / Potree": <SiThreedotjs size={S} color="#ffffff" />,
  "Three.js": <SiThreedotjs size={S} color="#ffffff" />,
  "Chart.js": <SiChartdotjs size={S} color="#FF6384" />,
  "MapLibre GL": <HiMap size={S} color="#4264FB" />,
  "Framer Motion": <SiFramer size={S} color="#0055FF" />,

  // Backend
  Java: <FaJava size={S} color="#ED8B00" />,
  "Spring Boot": <SiSpringboot size={S} color="#6DB33F" />,
  "Spring Security": <SiSpringsecurity size={S} color="#6DB33F" />,
  JPA: <SiHibernate size={S} color="#59666C" />,
  QueryDSL: <FaSearch size={S} color="#4A90D9" />,
  MySQL: <SiMysql size={S} color="#4479A1" />,
  JWT: <SiJsonwebtokens size={S} color="#D63AFF" />,

  // Infra
  Docker: <SiDocker size={S} color="#2496ED" />,
  "GitHub Actions": <SiGithubactions size={S} color="#2088FF" />,
  nginx: <SiNginx size={S} color="#009639" />,
  Cloudflare: <SiCloudflare size={S} color="#F38020" />,
  NCP: <HiServer size={S} color="#03C75A" />,
  "Naver Cloud": <HiServer size={S} color="#03C75A" />,
  "MinIO S3": <SiMinio size={S} color="#C72E49" />,
  MinIO: <SiMinio size={S} color="#C72E49" />,
  Portainer: <SiPortainer size={S} color="#13BEF9" />,
  Linux: <SiLinux size={S} color="#FCC624" />,

  // Architecture
  FSD: <FaLayerGroup size={S} color="#A78BFA" />,
  "REST API \uC124\uACC4": <HiLink size={S} color="#60A5FA" />,
  "AI Agent Orchestration": <HiCpuChip size={S} color="#34D399" />,
};
