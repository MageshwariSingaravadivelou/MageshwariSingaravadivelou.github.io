import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiClock, FiExternalLink } from "react-icons/fi";
import { blogPosts } from "@/lib/site";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((x) => x.slug === slug);
  return { title: post?.title ?? "Blog", description: post?.summary };
}

export default async function BlogPostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((x) => x.slug === slug);
  if (!post) notFound();

  return (
    <Section className="pt-28">
      <article className="mx-auto max-w-3xl">
        <Reveal>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            <FiArrowLeft className="h-4 w-4" /> All posts
          </Link>
          <div className="flex items-center gap-3 text-sm text-fg-faint">
            <span>{post.date}</span>
            <span className="inline-flex items-center gap-1">
              <FiClock className="h-3.5 w-3.5" /> {post.readingTime}
            </span>
          </div>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">
            {post.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 space-y-10">
          {post.sections.map((s, i) => (
            <Reveal key={i} as="section">
              {s.heading && (
                <h2 className="mb-4 text-2xl font-semibold tracking-tight">
                  {s.heading}
                </h2>
              )}
              <div className="space-y-4">
                {s.body.map((p, pi) => (
                  <p key={pi} className="leading-relaxed text-fg-muted">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {post.reference && (
          <Reveal className="mt-10 border-t border-border pt-6">
            <a
              href={post.reference.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover"
            >
              <FiExternalLink className="h-4 w-4" /> {post.reference.label}
            </a>
          </Reveal>
        )}
      </article>
    </Section>
  );
}
