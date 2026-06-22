import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr]">
        {/* Texto */}
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
              [ {SITE.about.eyebrow} ]
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              {SITE.about.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {SITE.about.paragraph}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-phosphor/20 bg-phosphor/5 p-5">
              <span className="mt-0.5 text-phosphor">●</span>
              <p className="text-sm text-bone">{SITE.about.note}</p>
            </div>
          </Reveal>
        </div>

        {/* Bullets como "specs" */}
        <Reveal delay={0.1} className="flex flex-col justify-center">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {SITE.about.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-4 py-5">
                <span className="font-mono text-xs text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-bone">{b}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
