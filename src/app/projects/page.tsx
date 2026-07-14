import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/lib/site";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <Section className="pt-28">
      <SectionHeading
        eyebrow="Projects"
        title="From business problem to production"
        description="Each project is written as an engineering narrative: the problem, the architecture, the decisions and tradeoffs, and the impact."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delayIndex={i} as="article">
            <Link href={`/projects/${p.slug}`}>
              <Card hover className="group h-full">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <FiArrowUpRight className="h-5 w-5 shrink-0 text-fg-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <p className="mt-3 leading-relaxed text-fg-muted">{p.tagline}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.slice(0, 6).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
