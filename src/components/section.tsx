import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

/** Page-level section wrapper with consistent vertical rhythm. */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container-content">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-12", className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
