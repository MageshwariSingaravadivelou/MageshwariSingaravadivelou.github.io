import type { Metadata } from "next";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { site } from "@/lib/site";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = { title: "Contact" };

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: FiMail },
  { label: "GitHub", value: "@MageshwariSingaravadivelou", href: site.github, icon: FiGithub },
  { label: "LinkedIn", value: "Connect", href: site.linkedin, icon: FiLinkedin },
  { label: "Resume", value: "Download PDF", href: site.resumeUrl, icon: FiDownload },
];

export default function ContactPage() {
  return (
    <Section className="pt-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something that lasts"
        description="Open to Senior / Staff Data Engineering roles and platform consulting. The fastest way to reach me is email."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {channels.map((c, i) => {
          const Icon = c.icon;
          const external = c.href.startsWith("http");
          return (
            <Reveal key={c.label} delayIndex={i}>
              <a
                href={c.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Card hover className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm text-fg-faint">{c.label}</div>
                    <div className="font-medium text-fg">{c.value}</div>
                  </div>
                </Card>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
