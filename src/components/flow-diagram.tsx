"use client";

import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

/**
 * A clean, self-authored horizontal flow diagram (event-driven pipeline etc.).
 * Deliberately generic — no client data or screenshots — so it's safe to publish.
 */
export function FlowDiagram({
  steps,
  caption,
}: {
  steps: string[];
  caption?: string;
}) {
  return (
    <figure className="my-2">
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-3 sm:flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex-1 rounded-xl border border-border bg-bg-elevated/60 px-4 py-3 text-center text-sm font-medium text-fg"
            >
              {step}
            </motion.div>
            {i < steps.length - 1 && (
              <FiChevronRight className="h-5 w-5 shrink-0 rotate-90 text-accent sm:rotate-0" />
            )}
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-fg-faint">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
