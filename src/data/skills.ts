export interface Skill {
  name: string;
  category: "frontend" | "backend" | "infra" | "architecture";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Vite", category: "frontend" },
  { name: "MUI", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Zustand", category: "frontend" },
  { name: "TanStack Query", category: "frontend" },
  { name: "Three.js", category: "frontend" },
  { name: "Chart.js", category: "frontend" },
  { name: "MapLibre GL", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  // Backend
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "Spring Security", category: "backend" },
  { name: "JPA", category: "backend" },
  { name: "QueryDSL", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "JWT", category: "backend" },
  // Infra
  { name: "Docker", category: "infra" },
  { name: "GitHub Actions", category: "infra" },
  { name: "nginx", category: "infra" },
  { name: "Cloudflare R2", category: "infra" },
  { name: "Cloudflare Workers", category: "infra" },
  { name: "NAVER Cloud Platform", category: "infra" },
  { name: "NCP Cloud Functions", category: "infra" },
  { name: "MinIO", category: "infra" },
  { name: "Portainer", category: "infra" },
  { name: "Linux", category: "infra" },
  // Architecture
  { name: "Microservices Architecture (MSA)", category: "architecture" },
  { name: "Serverless Architecture", category: "architecture" },
  { name: "FSD", category: "architecture" },
  { name: "REST API 설계", category: "architecture" },
  { name: "Claude Code · Multi-Agent Workflow", category: "architecture" },
];

export const categoryColors: Record<Skill["category"], string> = {
  frontend: "bg-white/5 text-zinc-200 border-white/10",
  backend: "bg-white/5 text-zinc-200 border-white/10",
  infra: "bg-white/5 text-zinc-200 border-white/10",
  architecture: "bg-white/5 text-zinc-200 border-white/10",
};

export const categoryLabels: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  infra: "Infra / DevOps",
  architecture: "Architecture",
};
