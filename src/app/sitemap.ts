import type { MetadataRoute } from "next";
import { site, nav, projects, caseStudies, blogPosts } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = nav.map((n) => ({
    url: `${site.url}${n.href === "/" ? "" : n.href}`,
    lastModified: new Date(),
  }));
  const projectRoutes = projects.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: new Date(),
  }));
  const caseRoutes = caseStudies.map((c) => ({
    url: `${site.url}/case-studies/${c.slug}`,
    lastModified: new Date(),
  }));
  const blogRoutes = blogPosts.map((b) => ({
    url: `${site.url}/blog/${b.slug}`,
    lastModified: new Date(),
  }));
  return [...staticRoutes, ...projectRoutes, ...caseRoutes, ...blogRoutes];
}
