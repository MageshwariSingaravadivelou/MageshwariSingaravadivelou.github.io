import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { projects } from "@/lib/site";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p?.title ?? "Project", description: p?.tagline };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="border-t border-border py-8">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
        {title}
      </h2>
      <div className="text-fg-muted">{children}</div>
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

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <Section className="pt-28">
      <Reveal>
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <FiArrowLeft className="h-4 w-4" /> All projects
        </Link>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          {p.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-fg-muted">{p.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </Reveal>

      {p.diagram && (
        <Reveal className="mt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.diagram}
            alt={`${p.title} architecture`}
            className="w-full rounded-2xl border border-border"
          />
        </Reveal>
      )}

      <div className="mt-10 max-w-3xl">
        <Block title="Problem">
          <p className="leading-relaxed">{p.problem}</p>
        </Block>
        <Block title="Business Context">
          <p className="leading-relaxed">{p.businessContext}</p>
        </Block>
        <Block title="Challenges">
          <List items={p.challenges} />
        </Block>
        <Block title="Architecture">
          <p className="leading-relaxed">{p.architecture}</p>
        </Block>
        <Block title="My Contributions">
          <List items={p.contributions} />
        </Block>
        <Block title="Technical Decisions">
          <List items={p.decisions} />
        </Block>
        <Block title="Performance Improvements">
          <List items={p.performance} />
        </Block>
        <Block title="Business Outcomes">
          <Card className="border-accent/30 bg-accent/5">
            <List items={p.outcomes} />
          </Card>
        </Block>
        <Block title="Lessons Learned">
          <List items={p.lessons} />
        </Block>
      </div>
    </Section>
  );
}
