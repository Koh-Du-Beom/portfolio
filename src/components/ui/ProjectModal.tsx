"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ModalContent({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <motion.article
        className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-zinc-700 bg-zinc-900 p-6 md:p-8"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        role="dialog"
        aria-label={project.title}
      >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-100"
              aria-label="닫기"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <header>
              <h3 className="text-xl font-bold text-zinc-100">{project.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{project.period}</p>
            </header>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              {project.description}
            </p>

            {project.metrics && (
              <div className="mt-4 flex gap-4">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-center"
                  >
                    <div className="text-lg font-bold text-blue-400">{m.value}</div>
                    <div className="text-xs text-zinc-400">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            <ul className="mt-4 space-y-2">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2 text-sm text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.article>
        </motion.div>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {project && <ModalContent project={project} onClose={onClose} />}
    </AnimatePresence>,
    document.body,
  );
}
