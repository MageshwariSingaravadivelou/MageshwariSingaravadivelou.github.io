import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "card p-6 transition-all duration-300",
        hover &&
          "hover:border-accent/40 hover:-translate-y-1 hover:bg-bg-elevated/70",
        className,
      )}
    >
      {children}
    </div>
  );
}
