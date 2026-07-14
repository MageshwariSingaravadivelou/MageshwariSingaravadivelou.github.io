import Link from "next/link";
import { FiArrowRight, FiDownload, FiArrowUpRight } from "react-icons/fi";
import { site, specialties, projects } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Metrics } from "@/components/metrics";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center pt-16">
        <div className="container-content">
          <Reveal>
            <Badge className="mb-6">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent-emerald" />
              Available for Senior / Staff Data Engineering roles
            </Badge>
          </Reveal>

          <Reveal delayIndex={1}>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              I build scalable{" "}
              <span className="text-gradient animate-gradient-pan">
                cloud-native data platforms
              </span>{" "}
              that turn raw data into business value.
            </h1>
          </Reveal>

          <Reveal delayIndex={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted md:text-xl">
              {site.role} specializing in lakehouse architecture, high-throughput
              batch &amp; streaming pipelines, data quality, and performance and
              cost optimization at enterprise scale.
            </p>
          </Reveal>

          <Reveal delayIndex={3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/projects">
                View Projects <FiArrowRight className="h-4 w-4" />
              </Button>
              <Button href={site.resumeUrl} variant="secondary">
                <FiDownload className="h-4 w-4" /> Download Resume
              </Button>
            </div>
          </Reveal>

          <Reveal delayIndex={4}>
            <div className="mt-12 flex flex-wrap gap-2">
              {specialties.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* METRICS */}
      <Section className="py-8 md:py-12">
        <Metrics />
      </Section>

      {/* FEATURED WORK */}
      <Section>
        <SectionHeading
          eyebrow="Selected Work"
          title="Platforms and pipelines with measurable impact"
          description="A few engagements where I owned the architecture end-to-end — from the business problem to production and the numbers that moved."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delayIndex={i} as="article">
              <Link href={`/projects/${p.slug}`}>
                <Card hover className="group h-full">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <FiArrowUpRight className="h-5 w-5 shrink-0 text-fg-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {p.tagline}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Button href="/projects" variant="secondary">
            All projects <FiArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal>
          <div className="card glow relative overflow-hidden p-10 text-center md:p-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Looking for someone who can own your data platform?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-fg-muted">
              Let&apos;s talk about the problem you&apos;re trying to solve.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button href="/contact">
                Get in touch <FiArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
