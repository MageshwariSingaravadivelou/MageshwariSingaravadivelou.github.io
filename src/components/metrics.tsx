"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { metrics } from "@/lib/site";

function Counter({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="card p-6 text-center">
          <div className="text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
          </div>
          <div className="mt-2 text-sm text-fg-muted">{m.label}</div>
        </div>
      ))}
    </div>
  );
}
