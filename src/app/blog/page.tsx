import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { blogPosts } from "@/lib/site";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <Section className="pt-28">
      <SectionHeading
        eyebrow="Writing"
        title="Notes on data platform engineering"
        description="Write-ups on architecture decisions, automation, and performance work from real projects."
      />
      <div className="grid gap-6">
        {blogPosts.map((post, i) => (
          <Reveal key={post.slug} delayIndex={i} as="article">
            <Link href={`/blog/${post.slug}`}>
              <Card hover className="group">
                <div className="flex items-center gap-3 text-xs text-fg-faint">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <FiClock className="h-3 w-3" /> {post.readingTime}
                  </span>
                </div>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <FiArrowUpRight className="h-5 w-5 shrink-0 text-fg-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <p className="mt-3 max-w-3xl leading-relaxed text-fg-muted">
                  {post.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
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
