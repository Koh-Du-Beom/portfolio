"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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

/* ── Theme ── */

function applyTheme(light: boolean) {
  const s = document.documentElement.style;

  if (light) {
    s.setProperty("--color-zinc-950", "#ffffff");
    s.setProperty("--color-zinc-900", "#f4f4f5");
    s.setProperty("--color-zinc-800", "#e4e4e7");
    s.setProperty("--color-zinc-700", "#d4d4d8");
    s.setProperty("--color-zinc-600", "#a1a1aa");
    s.setProperty("--color-zinc-500", "#71717a");
    s.setProperty("--color-zinc-400", "#52525b");
    s.setProperty("--color-zinc-300", "#3f3f46");
    s.setProperty("--color-zinc-200", "#27272a");
    s.setProperty("--color-zinc-100", "#18181b");
    s.setProperty("--cm-overlay", "rgba(255,255,255,0.95)");
    s.setProperty("--cm-nav", "rgba(255,255,255,0.85)");
    s.setProperty("--scrollbar-track", "#f4f4f5");
    s.setProperty("--scrollbar-thumb", "#d4d4d8");
  } else {
    // Remove overrides → fall back to Tailwind defaults
    [
      "--color-zinc-100", "--color-zinc-200", "--color-zinc-300",
      "--color-zinc-400", "--color-zinc-500", "--color-zinc-600",
      "--color-zinc-700", "--color-zinc-800", "--color-zinc-900",
      "--color-zinc-950", "--cm-overlay", "--cm-nav",
      "--scrollbar-track", "--scrollbar-thumb",
    ].forEach((p) => s.removeProperty(p));
  }
}

/* ── Component ── */

export default function TetrahedronPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [zoomingTo, setZoomingTo] = useState<string | null>(null);
  const [resizing, setResizing] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navigatingRef = useRef<string | null>(null);

  const handleSelect = useCallback((id: string) => {
    if (zoomingTo) return;
    setZoomingTo(id);
    setTimeout(() => {
      setActiveSection(id);
      setZoomingTo(null);
    }, 600);
  }, [zoomingTo]);

  const handleNavigate = useCallback((id: string) => {
    if (id === activeSection) return;
    setActiveSection(id);
  }, [activeSection]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveSection(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    applyTheme(isLight);
  }, [isLight]);

  useEffect(() => {
    if (activeSection && overlayRef.current) {
      overlayRef.current.scrollTo(0, 0);
    }
    if (!activeSection) {
      const navTarget = navigatingRef.current;
      navigatingRef.current = null;

      if (navTarget) {
        // Section-to-section: brief tetrahedron flash, then zoom into next
        window.dispatchEvent(new Event("resize"));
        const timer = setTimeout(() => {
          handleSelect(navTarget);
        }, 500);
        return () => clearTimeout(timer);
      }

      // Normal close: show loading overlay
      setResizing(true);
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
        requestAnimationFrame(() => setResizing(false));
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [activeSection, handleSelect]);

  const activeConfig = sectionConfig.find((s) => s.id === activeSection);

  return (
    <>
      {/* Tetrahedron Hero */}
      <div
        className={`fixed inset-0 z-0 flex items-center justify-center transition-all ${
          zoomingTo
            ? "scale-[3] md:blur-2xl opacity-0 duration-600 ease-in pointer-events-none"
            : activeSection
              ? "opacity-10 scale-75 md:blur-md duration-700 pointer-events-none"
              : "duration-700"
        }`}
      >
        <div className="absolute inset-0">
          <TetrahedronScene onSelect={handleSelect} isLight={isLight} />
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
              <p className="text-sm tracking-widest text-zinc-500 uppercase md:text-base font-light">
                <span className="text-zinc-300 font-medium">고두범의</span> — Portfolio
              </p>
              <div className="mt-3 h-0.5 w-48 overflow-hidden rounded-full bg-zinc-800">
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
            className="fixed inset-0 z-30 overflow-y-auto md:backdrop-blur-xl"
            style={{ backgroundColor: "var(--cm-overlay)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Overlay Navigation */}
            <div
              className="sticky top-0 z-40 border-b border-zinc-800/50 md:backdrop-blur-md"
              style={{ backgroundColor: "var(--cm-nav)" }}
            >
              <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
                <button
                  onClick={() => setActiveSection(null)}
                  className="flex shrink-0 cursor-pointer items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors group"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:scale-110 group-hover:rotate-[30deg]"
                  >
                    {/* outer triangle */}
                    <polygon points="50,10 10,80 90,80" />
                    {/* inner edges to center */}
                    <line x1="50" y1="10" x2="50" y2="55" />
                    <line x1="10" y1="80" x2="50" y2="55" />
                    <line x1="90" y1="80" x2="50" y2="55" />
                  </svg>
                </button>
                <nav className="flex gap-0.5 md:gap-1">
                  {sectionConfig.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleNavigate(s.id)}
                      className={`cursor-pointer rounded-md px-2 py-1.5 text-xs font-medium transition-colors md:px-3 ${
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

      {/* Dark / Light Toggle */}
      <button
        onClick={() => setIsLight((p) => !p)}
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-zinc-800 shadow-lg md:backdrop-blur-md transition-transform hover:scale-110"
        style={{ backgroundColor: "var(--cm-nav)" }}
        aria-label={isLight ? "다크 모드로 전환" : "라이트 모드로 전환"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isLight ? (
            <motion.svg
              key="sun"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-300"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </motion.svg>
          ) : (
            <motion.svg
              key="moon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-300"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>
    </>
  );
}
