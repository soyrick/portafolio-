"use client";

/** Ticker horizontal infinito (banda de tecnologías / palabras clave). */
export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-white/10 py-5 select-none">
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-mono text-sm uppercase tracking-widest text-muted">
              {item}
            </span>
            <span className="text-amber/60">✳</span>
          </span>
        ))}
      </div>
      <div
        className="flex shrink-0 animate-marquee items-center gap-10 pr-10"
        aria-hidden
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-mono text-sm uppercase tracking-widest text-muted">
              {item}
            </span>
            <span className="text-amber/60">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
