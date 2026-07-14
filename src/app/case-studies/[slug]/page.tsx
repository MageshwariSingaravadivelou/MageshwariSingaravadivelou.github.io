import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { caseStudies } from "@/lib/site";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  return { title: c?.title ?? "Case Study", description: c?.executiveSummary };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="border-t border-border py-8">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
        {title}
      </h2>
      <div className="leading-relaxed text-fg-muted">{children}</div>
    </Reveal>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 leading-relaxed">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
          {it}
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <Section className="pt-28">
      <Reveal>
        <Link
          href="/case-studies"
          className="mb-8 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <FiArrowLeft className="h-4 w-4" /> All case studies
        </Link>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          {c.title}
        </h1>
      </Reveal>

      <Reveal className="mt-6">
        <Card className="glow max-w-3xl border-accent/30 bg-accent/5">
          <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Executive Summary
          </h2>
          <p className="leading-relaxed text-fg">{c.executiveSummary}</p>
        </Card>
      </Reveal>

      <div className="mt-6 max-w-3xl">
        <Block title="Business Problem">{c.businessProblem}</Block>
        <Block title="Existing System">{c.existingSystem}</Block>
        <Block title="Pain Points">
          <List items={c.painPoints} />
        </Block>
        <Block title="Target Architecture">{c.targetArchitecture}</Block>
        <Block title="Design Decisions & Rationale">
          <div className="space-y-4">
            {c.designDecisions.map((d, i) => (
              <div key={i}>
                <p className="font-medium text-fg">{d.decision}</p>
                <p className="mt-1">{d.rationale}</p>
              </div>
            ))}
          </div>
        </Block>
        <Block title="Tradeoffs">
          <List items={c.tradeoffs} />
        </Block>
        <Block title="Implementation">{c.implementation}</Block>
        <Block title="Challenges">
          <List items={c.challenges} />
        </Block>
        <Block title="Scaling">{c.scaling}</Block>
        <Block title="Monitoring">{c.monitoring}</Block>
        <Block title="Security">{c.security}</Block>
        <Block title="Cost Optimization">{c.costOptimization}</Block>
        <Block title="Lessons Learned">
          <List items={c.lessons} />
        </Block>
        <Block title="Future Improvements">
          <List items={c.futureImprovements} />
        </Block>
      </div>
    </Section>
  );
}
