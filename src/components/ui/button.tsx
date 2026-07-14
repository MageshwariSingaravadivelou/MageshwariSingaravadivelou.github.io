import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] hover:-translate-y-0.5",
  secondary:
    "border border-border-strong bg-bg-elevated/60 text-fg hover:border-accent/50 hover:-translate-y-0.5",
  ghost: "text-fg-muted hover:text-fg",
};

export function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
} & Partial<ComponentProps<"a">>) {
  const classes = cn(base, variants[variant], className);
  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </Link>
    );
  }
  return <button className={classes}>{children}</button>;
}
