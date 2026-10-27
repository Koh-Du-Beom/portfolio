"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    keyword: "비즈니스의 요구를 구체화하고, 제품으로 실현합니다.",
    desc: "비개발 구성원의 문의에 기술 용어보다 실제 화면과 업무 사례를 바탕으로 설명하며 소통해왔습니다. 협회 실무자와 사내 사업·운영 담당자가 요청한 내용은 가능한 동작과 필요한 조건으로 풀어 설명하고, 화면 기반 문서와 사용자 매뉴얼로 함께 확인했습니다. 개발 인력과는 이를 API 명세와 구현·검수 기준으로 구체화해, 업무를 요청하는 사람과 구현하는 사람의 이해를 맞췄습니다.",
  },
  {
    keyword: "Zero-base에서 시작해, 운영 가능한 플랫폼을 만들어왔습니다.",
    desc: "현장 조사자가 직접 비탈면에 올라 측정하고 기록하던 위험한 업무를 디지털 환경으로 옮기는 과정에 참여했습니다. 기존 조사에서 무엇을 측정하고 어떤 근거를 남겨야 하는지 이해하며, 3D 데이터 위에서 측정하고 사진·위치 정보를 연결하는 기능을 구현했습니다. 조사 결과를 저장·복원하고 7종 법정 조사 보고서로 출력하는 흐름까지 연결해, 현장의 조사 절차를 디지털 업무로 이어갈 수 있는 플랫폼을 만들었습니다.",
  },
  {
    keyword: "제품의 완성을 위해 역할의 경계를 넓혀왔습니다.",
    desc: "프론트엔드를 개발하면서 사용자에게 필요한 기능을 완성하려면 화면 밖의 처리 과정까지 이해해야 했습니다. 파일 업로드부터 분석 결과 전달까지 이어지는 과정의 문제를 해결하며 백엔드 API·스토리지·배포 영역으로 역량을 넓혔습니다. 맡은 화면을 구현하는 데서 출발해 사용자가 작업을 끝낼 수 있도록 필요한 기술을 익히고 책임 범위를 넓혀왔습니다.",
  },
];

const education = [
  {
    period: "2019.03 ~ 2025.02",
    institution: "전북대학교",
    detail: "컴퓨터공학과",
  },
];

const career = [
  {
    period: "2024.12 ~ 2026.07.01",
    company: "주식회사 디프리",
    role: "소프트웨어 엔지니어",
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
  { title: "TOEIC Speaking IH · 150점", period: "2026.09.11 취득" },
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
          className="mt-4 text-xl font-semibold leading-relaxed text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          비즈니스의 요구를 구체화하고,
          <br />
          제품으로 실현합니다.
        </motion.p>

        {/* Highlights */}
        <ul className="mt-10 grid gap-4">
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
            <h3 className="text-xl font-bold text-zinc-100">Certifications & Languages</h3>
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
