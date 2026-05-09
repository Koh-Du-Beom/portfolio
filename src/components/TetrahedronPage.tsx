"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

const TetrahedronScene = dynamic(
  () => import("@/components/canvas/TetrahedronScene"),
  { ssr: false }
);

const sectionConfig = [
  { id: "about", label: "About", Component: AboutSection },
  { id: "experience", label: "Experience", Component: ExperienceSection },
  { id: "projects", label: "Projects", Component: ProjectsSection },
  { id: "skills", label: "Skills", Component: SkillsSection },
] as const;

export default function TetrahedronPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [resizing, setResizing] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveSection(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (activeSection && overlayRef.current) {
      overlayRef.current.scrollTo(0, 0);
    }
    if (!activeSection) {
      setResizing(true);
      // Force R3F canvas to recalculate size after scale transition ends
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
        // Give canvas a frame to re-render at correct size
        requestAnimationFrame(() => setResizing(false));
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [activeSection]);

  const activeConfig = sectionConfig.find((s) => s.id === activeSection);

  return (
    <>
      {/* Tetrahedron Hero */}
      <div
        className={`fixed inset-0 z-0 flex items-center justify-center transition-all duration-700 ${
          activeSection
            ? "opacity-10 scale-75 blur-md pointer-events-none"
            : ""
        }`}
      >
        <div className="absolute inset-0">
          <TetrahedronScene onSelect={setActiveSection} />
        </div>

        {/* Resize loading overlay */}
        <AnimatePresence>
          {resizing && (
            <motion.div
              className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-zinc-950"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-0.5 w-48 overflow-hidden rounded-full bg-zinc-800">
                <motion.div
                  className="h-full bg-zinc-400"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Section Overlay */}
      <AnimatePresence>
        {activeSection && activeConfig && (
          <motion.div
            ref={overlayRef}
            className="fixed inset-0 z-30 overflow-y-auto bg-zinc-950/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Overlay Navigation */}
            <div className="sticky top-0 z-40 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
              <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
                <button
                  onClick={() => setActiveSection(null)}
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  돌아가기
                </button>
                <nav className="flex gap-1">
                  {sectionConfig.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveSection(s.id)}
                      className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                        s.id === activeSection
                          ? "bg-zinc-800 text-zinc-100"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Section Content */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <activeConfig.Component />
            </motion.div>

            {/* Contact Footer */}
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
