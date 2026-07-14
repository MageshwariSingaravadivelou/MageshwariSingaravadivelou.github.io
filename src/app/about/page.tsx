import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = { title: "About" };

const philosophy = [
  {
    title: "How I think",
    body: "I start from the decision the data has to support and work backwards to the architecture. Executive dashboards are only as valuable as they are timely and trustworthy — so latency and reliability are product features, not afterthoughts.",
  },
  {
    title: "How I solve problems",
    body: "Reproduce, measure, then change one variable at a time. My biggest wins came from removing hops rather than tuning them — and from validating row-level parity before any cutover, which turns risky migrations into routine ones.",
  },
  {
    title: "Engineering philosophy",
    body: "Correctness first, then performance, then cost. Automation is only worth adopting when every action is auditable and recoverable — that is the principle behind the governance tooling I build.",
  },
  {
    title: "Leadership approach",
    body: "I lead a 10+ member team through clear problem framing, durable documentation, and mentorship — guiding engineers to certifications and pushing decisions and their rationale into the open so the team can extend them.",
  },
  {
    title: "Continuous learning",
    body: "Four Databricks/Azure certifications and counting. I go deep on fundamentals — distributed execution, storage layout, governance — so new tools slot into a mental model I already trust.",
  },
];

export default function AboutPage() {
  return (
    <Section className="pt-28">
      <SectionHeading
        eyebrow="About"
        title="Engineer, Platform Owner, Problem Solver"
        description="Not a resume — how I think about building data systems that teams and businesses depend on."
      />

      <Reveal className="mb-14 max-w-3xl space-y-4 text-lg leading-relaxed text-fg-muted">
        <p>
          I&apos;m a Senior Data Engineer who has spent the last six years turning
          messy, high-volume marketing data into platforms that global teams trust
          to make decisions. I started on data extraction and ML for a
          social-listening product, moved into marketing analytics engineering for
          Microsoft, and now own the data engineering roadmap for Adobe&apos;s
          Digital Experience Marketing platform.
        </p>
        <p>
          The throughline is ownership: I take ambiguous business asks — &quot;the
          numbers are late&quot;, &quot;this costs too much&quot;, &quot;we
          can&apos;t trust this dashboard&quot; — and turn them into production
          systems with measurable outcomes. That has meant re-platforming off
          Snowflake and a legacy ETL toolchain onto a governed Databricks lakehouse
          (~87.5% faster), building a governance app that reclaimed terabytes of
          storage, and standing up validation frameworks that took data reliability
          to 99.5% — while leading and mentoring a 10+ member team.
        </p>
      </Reveal>

      <div className="flex max-w-3xl flex-col gap-6">
        {philosophy.map((p, i) => (
          <Reveal key={p.title} delayIndex={i}>
            <Card>
              <h3 className="text-lg font-semibold text-fg">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-fg-muted">{p.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
