"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    keyword: "문제의 본질부터",
    desc: "무엇을 만들지 고민하기 이전에, 이것이 정말 해결해야 할 진짜 문제인지 먼저 묻습니다.",
  },
  {
    keyword: "수단의 제약 없이",
    desc: "프론트엔드라는 직함에 선을 긋지 않고, 인프라든 백엔드든 문제 해결에 필요한 무기라면 주저 없이 쥡니다.",
  },
  {
    keyword: "동작, 그 너머의 구조",
    desc: "오늘 당장 작동하는 코드에 만족하지 않고, 내일의 변화를 버텨낼 단단한 아키텍처를 설계합니다.",
  },
  {
    keyword: "코드 밖의 임팩트",
    desc: "단순한 기능 개발을 넘어, 치열한 최적화와 인프라 비용 절감으로 비즈니스에 실질적인 이득을 남깁니다.",
  },
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
    period: "2026.07.14 ~ 현재",
    company: "SK AI Leader Academy 4기",
    role: "AI 역량을 확장하고, 학술적이고 건전한 인적 네트워크를 넓혀가는 중",
  },
  {
    period: "2024.12 ~ 2026.06.30",
    company: "DPRE",
    role: "풀스택 개발자",
  },
];

const awards = [
  {
    period: "2024",
    title: "산학실전캡스톤 최우수상",
    detail: "주최: 전북대학교 SW중심대학",
    link: "https://swuniv.jbnu.ac.kr/festival/jbnusw?gc=893BAOF&do=view&festival_id=KJzARhxzLIL678da2f1&syear=2024&page=2&content_id=farvGV2-9K7678dddb6",
  },
];

const certifications = [
  { title: "정보처리기사", period: "2024.12 취득" },
  { title: "TOPCIT 495점", period: "2024.10 응시" },
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
          className="mt-4 text-xl font-semibold leading-relaxed text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          문제의 본질을 먼저 의심하고,
          <br />
          작동을 넘어 비즈니스에 실질적인 가치를 설계합니다.
        </motion.p>

        {/* Highlights */}
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.li
              key={i}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                <strong className="text-base font-semibold text-zinc-100">
                  {item.keyword}
                </strong>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.desc}
              </p>
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
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      수상 증빙 보기
                    </a>
                  )}
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
