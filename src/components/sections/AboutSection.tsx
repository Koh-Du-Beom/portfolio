"use client";

import { motion } from "framer-motion";

const highlights = [
  { keyword: "End-to-End 제품 책임", desc: "기획부터 운영까지" },
  { keyword: "B2G 플랫폼 단독 개발", desc: "사용자 N명 규모" },
  { keyword: "인프라·보안까지 1인 운영", desc: "온프레미스 포함" },
  { keyword: "양방향 외주 경험", desc: "발주자·수주자 모두" },
];

const education = [
  {
    period: "2019.02 ~ 2025.02",
    institution: "전북대학교",
    detail: "컴퓨터공학과",
  },
];

const career = [
  {
    period: "2025.02 ~ 현재",
    company: "DPRE",
    role: "풀스택 개발자",
  },
];

const awards = [
  {
    period: "2024",
    title: "산학실전캡스톤 최우수상",
    detail: "주최: 전북대학교 SW중심대학",
  },
];

const certifications = [
  { title: "정보처리기사", period: "2024.12 취득" },
  { title: "SQLD", period: "2024.09 취득" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          id="about-heading"
          className="text-3xl font-bold text-zinc-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>
        <motion.p
          className="mt-4 text-xl font-semibold text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          제품 하나를 처음부터 끝까지 책임지는 풀스택 개발자
        </motion.p>
        <motion.div
          className="mt-6 text-lg leading-relaxed text-zinc-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p>
            비탈면 유지관리 플랫폼을 프론트엔드부터 온프레미스 보안 인프라까지
            혼자 설계·구축·운영하고 있습니다. 기술 스택보다 문제 해결을 우선하며,
            작은 팀에서도 안정적으로 굴러가는 시스템을 만드는 데 집중합니다.
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            Spring Boot · Docker · CI/CD · nginx · Cloudflare Workers
            <span className="ml-1 text-zinc-500">
              — 필요한 도구는 직접 익혀서 씁니다.
            </span>
          </p>
        </motion.div>

        {/* Highlights */}
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
              <span className="text-sm text-zinc-300">
                <strong className="text-zinc-100">{item.keyword}</strong>
                <span className="ml-1 text-zinc-500">— {item.desc}</span>
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Info Grid 2x2 */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-zinc-100">Education</h3>
            <div className="mt-4 space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:border-zinc-700"
                >
                  <p className="text-xs font-mono text-zinc-500">
                    {edu.period}
                  </p>
                  <p className="mt-1 text-base font-semibold text-zinc-200">
                    {edu.institution}
                  </p>
                  <p className="mt-0.5 text-sm text-zinc-400">{edu.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Career */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-zinc-100">Career</h3>
            <div className="mt-4 space-y-4">
              {career.map((job, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:border-zinc-700"
                >
                  <p className="text-xs font-mono text-zinc-500">
                    {job.period}
                  </p>
                  <p className="mt-1 text-base font-semibold text-zinc-200">
                    {job.company}
                  </p>
                  <p className="mt-0.5 text-sm text-zinc-400">{job.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-zinc-100">Awards</h3>
            <div className="mt-4 space-y-4">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:border-zinc-700"
                >
                  <p className="text-xs font-mono text-zinc-500">
                    {award.period}
                  </p>
                  <p className="mt-1 text-base font-semibold text-zinc-200">
                    {award.title}
                  </p>
                  <p className="mt-0.5 text-sm text-zinc-400">
                    {award.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-zinc-100">Certifications</h3>
            <div className="mt-4 space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:border-zinc-700"
                >
                  <p className="mt-1 text-base font-semibold text-zinc-200">
                    {cert.title}
                  </p>
                  <p className="mt-0.5 text-xs font-mono text-zinc-500">
                    {cert.period}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
