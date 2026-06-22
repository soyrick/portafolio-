import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

export default function Capabilities() {
  return (
    <section className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            [ {SITE.stack.eyebrow} ]
          </p>
          <h2 className="mt-4 text-balance text-4xl font-light tracking-tight sm:text-5xl">
            {SITE.stack.title}
          </h2>
          <p className="mt-6 text-base text-muted">{SITE.stack.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SITE.stack.categories.map((cat, i) => (
            <Reveal
              key={cat.name}
              delay={(i % 3) * 0.05}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-6 transition-colors hover:border-amber/40"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber/0 blur-2xl transition-colors duration-500 group-hover:bg-amber/20" />
              <h3 className="font-mono text-sm uppercase tracking-widest text-bone">
                {cat.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted transition-colors group-hover:text-bone"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
