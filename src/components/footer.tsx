import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { site, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="container-content py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">{site.name}</p>
            <p className="mt-1 text-sm text-fg-muted">{site.role}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-fg-muted transition-colors hover:text-fg"
            >
              <FiGithub className="h-5 w-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-fg-muted transition-colors hover:text-fg"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="text-fg-muted transition-colors hover:text-fg"
            >
              <FiMail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-fg-faint">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind
          CSS &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
