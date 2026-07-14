"use client";

import { motion } from "framer-motion";

export function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-fg">{name}</span>
        <span className="text-xs text-fg-faint">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-bg-elevated">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-cyan"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
