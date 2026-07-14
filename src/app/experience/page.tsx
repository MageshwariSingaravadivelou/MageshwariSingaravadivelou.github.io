import type { Metadata } from "next";
import { experience } from "@/lib/site";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <Section className="pt-28">
      <SectionHeading
        eyebrow="Experience"
        title="Problems Owned, Systems Shipped"
        description="Framed as the business problem, the system I built to solve it, and the impact — not a list of responsibilities."
      />

      <div className="relative">
        {/* timeline spine */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-border md:left-[9px]" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delayIndex={i} as="article">
              <div className="relative pl-8 md:pl-12">
                <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-accent ring-4 ring-accent/20 md:h-[18px] md:w-[18px]" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {job.role}{" "}
                    <span className="text-fg-muted">· {job.company}</span>
                  </h3>
                  <span className="text-sm text-fg-faint">{job.period}</span>
                </div>
                {job.location && (
                  <p className="mt-1 text-sm text-fg-faint">{job.location}</p>
                )}
                <p className="mt-3 max-w-3xl leading-relaxed text-fg-muted">
                  {job.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((h, hi) => (
                    <li
                      key={hi}
                      className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
