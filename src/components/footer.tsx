import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="container-content py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-sm font-semibold text-accent ring-1 ring-accent/30">
              {site.initials}
            </span>
            <p className="text-sm text-fg-muted">{site.role}</p>
          </div>
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
