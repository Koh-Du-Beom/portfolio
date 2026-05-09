"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const PointCloudHero = dynamic(
  () => import("@/components/canvas/PointCloudHero"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center" aria-label="소개">
      <PointCloudHero />
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-zinc-100 md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          고두범
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-zinc-400 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          풀스택 개발자
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a
            href="#about"
            className="inline-block animate-bounce text-zinc-500"
            aria-label="아래로 스크롤"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
