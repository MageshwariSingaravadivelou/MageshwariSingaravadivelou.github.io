import type { Metadata } from "next";
import { skillGroups } from "@/lib/site";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { SkillBar } from "@/components/skill-bar";

export const metadata: Metadata = { title: "Technical Skills" };

export default function SkillsPage() {
  return (
    <Section className="pt-28">
      <SectionHeading
        eyebrow="Technical Skills"
        title="The stack I design and build with"
        description="Depth across the modern data platform — cloud, processing engines, storage, orchestration, and the DevOps to run it in production."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delayIndex={i}>
            <Card className="h-full">
              <h3 className="mb-6 text-lg font-semibold text-fg">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
