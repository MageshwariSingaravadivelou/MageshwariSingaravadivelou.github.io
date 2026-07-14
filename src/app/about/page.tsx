import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = { title: "About" };

const philosophy = [
  {
    title: "How I think",
    body: "PLACEHOLDER — start from the business outcome and work backwards to the architecture. I optimize for the decision the data has to support, not for the pipeline itself.",
  },
  {
    title: "How I solve problems",
    body: "PLACEHOLDER — reproduce, measure, then change one variable at a time. I trust profiling and row-count parity over intuition, and I leave the system more observable than I found it.",
  },
  {
    title: "Engineering philosophy",
    body: "PLACEHOLDER — correctness first, then performance, then cost — in that order. Boring, well-understood building blocks beat clever ones that only I can operate.",
  },
  {
    title: "Leadership approach",
    body: "PLACEHOLDER — I lead through clear problem framing and durable documentation, unblock others before myself, and make the reasoning behind decisions explicit so the team can extend them.",
  },
  {
    title: "Continuous learning",
    body: "PLACEHOLDER — I go deep on the fundamentals (distributed execution, storage layout, query planning) so new tools slot into a mental model I already trust.",
  },
];

export default function AboutPage() {
  return (
    <Section className="pt-28">
      <SectionHeading
        eyebrow="About"
        title="Engineer, platform owner, problem framer"
        description="Not a resume — how I think about building data systems that teams and businesses depend on."
      />

      <Reveal className="mb-14 max-w-3xl space-y-4 text-lg leading-relaxed text-fg-muted">
        <p>
          PLACEHOLDER — 2–3 paragraphs of your professional story. Where you
          started, the kinds of problems you gravitated toward, and the throughline
          that connects your work: turning messy, high-volume data into platforms
          people trust to make decisions.
        </p>
        <p>
          PLACEHOLDER — a paragraph on the scale you operate at and the kind of
          ownership you take: from ambiguous business asks to production systems,
          SLAs, and the numbers that prove it worked.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {philosophy.map((p, i) => (
          <Reveal key={p.title} delayIndex={i}>
            <Card className="h-full">
              <h3 className="text-lg font-semibold text-fg">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-fg-muted">{p.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
