import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

export default function AI() {
  return (
    <section className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
              [ {SITE.ai.eyebrow} ]
            </p>
            <h2 className="mt-4 text-balance text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              {SITE.ai.title}
            </h2>
            <p className="mt-6 max-w-md text-base text-muted">{SITE.ai.intro}</p>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5">
              <span className="mt-0.5 text-amber">!</span>
              <p className="text-sm text-bone">{SITE.ai.note}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="scanlines relative overflow-hidden rounded-xl border border-white/10 bg-ink-900 ring-hairline">
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-700 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 font-mono text-[11px] text-muted">ai — workflow.sh</span>
              </div>
              <div className="space-y-2 p-6 font-mono text-sm">
                {SITE.ai.uses.map((use, i) => (
                  <p key={i} className="flex items-start gap-3 text-phosphor">
                    <span className="text-muted">$</span>
                    <span className="text-bone">{use}</span>
                  </p>
                ))}
                <p className="flex items-center gap-3 text-phosphor">
                  <span className="text-muted">$</span>
                  <span className="inline-block h-4 w-2 animate-flicker bg-phosphor" />
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
