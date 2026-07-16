"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { projects, type Project } from "@/data/projects";
import ProjectModal from "@/components/ui/ProjectModal";

function ProjectModalRouter() {
  const searchParams = useSearchParams();
  const selected = projects.find(
    (project) => project.id === searchParams.get("project"),
  ) ?? null;

  const closeProject = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("project");
    const query = params.toString();
    window.history.replaceState(null, "", query ? `/projects?${query}` : "/projects");
  };

  return <ProjectModal project={selected} onClose={closeProject} />;
}

export default function ProjectsSection() {
  const openProject = (project: Project) => {
    const params = new URLSearchParams(window.location.search);
    params.set("project", project.id);
    window.history.pushState(null, "", `/projects?${params.toString()}`);
  };

  return (
    <section id="projects" className="py-24 md:py-32" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          id="projects-heading"
          className="text-3xl font-bold text-zinc-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="group cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => openProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openProject(project)}
              aria-label={`${project.title} 상세 보기`}
            >
              <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">{project.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 line-clamp-2">
                {project.description}
              </p>

              {project.metrics && (
                <div className="mt-4 flex gap-3">
                  {project.metrics.map((m) => (
                    <span
                      key={m.label}
                      className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300"
                    >
                      <strong className="text-blue-400">{m.value}</strong>{" "}
                      {m.label}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700/50 bg-zinc-800 px-2 py-0.5 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 5 && (
                  <span className="rounded-full border border-zinc-700/50 bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
                    +{project.stack.length - 5}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Suspense fallback={null}>
        <ProjectModalRouter />
      </Suspense>
    </section>
  );
}
