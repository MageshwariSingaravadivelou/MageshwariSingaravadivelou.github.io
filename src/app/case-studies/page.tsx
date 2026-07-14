import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { caseStudies } from "@/lib/site";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = { title: "Architecture Case Studies" };

export default function CaseStudiesPage() {
  return (
    <Section className="pt-28">
      <SectionHeading
        eyebrow="Architecture Case Studies"
        title="Deep dives into systems I designed"
        description="The full engineering story — existing system, pain points, target architecture, tradeoffs, scaling, monitoring, security, and cost."
      />
      <div className="grid gap-6">
        {caseStudies.map((c, i) => (
          <Reveal key={c.slug} delayIndex={i} as="article">
            <Link href={`/case-studies/${c.slug}`}>
              <Card hover className="group">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{c.title}</h3>
                  <FiArrowUpRight className="h-5 w-5 shrink-0 text-fg-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <p className="mt-3 max-w-3xl leading-relaxed text-fg-muted">
                  {c.executiveSummary}
                </p>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
