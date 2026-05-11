"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { skills, categoryColors, categoryLabels, type Skill } from "@/data/skills";
import { skillIcons } from "@/data/skill-icons";

const SkillBadge = memo(function SkillBadge({
  skill,
  colorClass,
}: {
  skill: Skill;
  colorClass: string;
}) {
  return (
    <span
      className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm backdrop-blur-sm ${colorClass}`}
    >
      {skillIcons[skill.name] && (
        <span className="flex shrink-0">{skillIcons[skill.name]}</span>
      )}
      {skill.name}
    </span>
  );
});

export default function SkillsSection() {
  const categories = Object.keys(categoryLabels) as Skill["category"][];

  return (
    <section id="skills" className="py-24 md:py-32" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          id="skills-heading"
          className="text-3xl font-bold text-zinc-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="mt-12 space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                {categoryLabels[category]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill}
                      colorClass={categoryColors[category]}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
