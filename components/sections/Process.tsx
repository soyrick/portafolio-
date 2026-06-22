import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

export default function Process() {
  return (
    <section id="process" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            [ {SITE.process.eyebrow} ]
          </p>
          <h2 className="mt-4 text-balance text-4xl font-light tracking-tight sm:text-5xl">
            {SITE.process.title}
          </h2>
          <p className="mt-6 text-base text-muted">{SITE.process.intro}</p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {SITE.process.steps.map((step, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 0.06}
              className="group relative bg-ink-900 p-8 transition-colors hover:bg-ink-800"
            >
              <span className="font-mono text-sm text-amber">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-bone">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.d}</p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-amber transition-all duration-500 group-hover:w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
