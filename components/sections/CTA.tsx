import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

export default function CTA() {
  return (
    <section className="relative px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="scanlines relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-ink-800 px-8 py-16 text-center ring-hairline sm:px-14 sm:py-24">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-amber/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-signal/10 blur-3xl" />

        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            [ {SITE.cta.eyebrow} ]
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-6xl">
            {SITE.cta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted">{SITE.cta.subtitle}</p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
            {SITE.cta.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-bone"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={SITE.cta.primary.href}
              className="cursor-target inline-flex items-center justify-center gap-2 rounded-full bg-amber px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.03]"
            >
              {SITE.cta.primary.label} →
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
