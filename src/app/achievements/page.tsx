import type { Metadata } from "next";
import { FiAward } from "react-icons/fi";
import { achievements } from "@/lib/site";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return (
    <Section className="pt-28">
      <SectionHeading
        eyebrow="Achievements"
        title="Outcomes, not activities"
        description="Cost saved, latency cut, pipelines automated, engineers mentored — the results that made the work worth it."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.category} delayIndex={i}>
            <Card className="h-full">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent ring-1 ring-accent/30">
                  <FiAward className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-fg">{a.category}</h3>
              </div>
              <ul className="space-y-3">
                {a.items.map((item, ii) => (
                  <li
                    key={ii}
                    className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
