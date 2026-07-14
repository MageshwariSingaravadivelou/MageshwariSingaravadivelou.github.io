import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Blog" };

const drafts = [
  "Designing a medallion lakehouse that survives schema drift",
  "Killing a 66-minute pipeline: profiling, not guessing",
  "When ANSI SQL breaks your migration — and why that's good",
]; // PLACEHOLDER titles

export default function BlogPage() {
  return (
    <Section className="pt-28">
      <SectionHeading
        eyebrow="Writing"
        title="Notes on data platform engineering"
        description="Long-form write-ups on architecture decisions, performance work, and lessons from production. Coming soon."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {drafts.map((t, i) => (
          <Reveal key={t} delayIndex={i}>
            <Card className="h-full">
              <Badge className="mb-4">Coming soon</Badge>
              <h3 className="text-lg font-semibold leading-snug">{t}</h3>
              <p className="mt-3 text-sm text-fg-muted">
                PLACEHOLDER — a one-line teaser for the post.
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
