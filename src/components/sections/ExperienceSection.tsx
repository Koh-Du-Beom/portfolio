"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "산학실전캡스톤 — [Tilon]",
    subtitle: "WebRTC 기반 원격 제어 기법 연구",
    period: "2024.03 ~ 2024.06",
  },
  {
    title: "하기 계절제 현장실습(인턴십)",
    subtitle: "[Tilon]",
    period: "2024.06.24 ~ 2024.08.19",
  },
  {
    title: "산학실전캡스톤 — [Koscom]",
    subtitle: "데이터 기반 주식투자 포트폴리오 개발",
    period: "2024.09 ~ 2024.12",
  },
  {
    title: "주식회사 디프리",
    period: "2024.12 ~ 현재",
    current: true,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          id="experience-heading"
          className="text-3xl font-bold text-zinc-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        {/* Horizontal timeline */}
        <div className="relative mt-12">
          {/* Horizontal line with gradient toward current */}
          <div className="absolute top-[1.125rem] left-0 right-0 h-px bg-gradient-to-r from-zinc-700 to-blue-400/60" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {experiences.map((item, i) => (
              <motion.div
                key={item.period}
                className="relative pt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Dot on the line */}
                <div className={`absolute top-[0.55rem] left-1/2 -translate-x-1/2 rounded-full border-2 border-blue-400 bg-zinc-950 ${item.current ? "h-4 w-4 shadow-[0_0_8px_rgba(96,165,250,0.6)]" : "h-3.5 w-3.5"}`} />

                <div className="text-center">
                  <h3 className={`text-sm md:text-base font-semibold leading-snug ${item.current ? "text-blue-400" : "text-zinc-200"}`}>
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="mt-1 text-xs md:text-sm text-zinc-400 leading-snug">
                      {item.subtitle}
                    </p>
                  )}
                  <time className="mt-2 block text-xs font-mono text-zinc-500">
                    {item.period}
                  </time>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
