import HeroScene from "@/components/three/HeroScene";
import { SITE } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="scanlines relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-20 sm:px-8"
    >
      {/* Grilla técnica de fondo */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

      {/* HUD: esquinas tipo interfaz (solo desktop) */}
      <div className="pointer-events-none absolute left-5 top-24 z-10 hidden font-mono text-[11px] uppercase tracking-[0.25em] text-muted lg:block">
        <p>LAT // {SITE.location}</p>
        <p className="mt-1 text-phosphor">● {SITE.availabilityTag}</p>
      </div>
      <div className="pointer-events-none absolute right-5 top-24 z-10 hidden text-right font-mono text-[11px] uppercase tracking-[0.25em] text-muted lg:block">
        <p>{SITE.role}</p>
        <p className="mt-1">v1.0 / 2026</p>
      </div>

      {/* Contenido: texto a un lado, animación 3D del otro */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-10">
        {/* Columna de texto */}
        <div className="order-2 lg:order-1">
          <h1 className="text-balance text-[clamp(2.4rem,6.2vw,5rem)] font-light leading-[0.95] tracking-tightest">
            <span className="block font-semibold text-bone">{SITE.hero.lines[0]}</span>
            <span className="block text-outline">{SITE.hero.lines[1]}</span>
            <span className="block font-semibold text-bone">
              {SITE.hero.lines[2]}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {SITE.hero.intro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={SITE.hero.ctaPrimary.href}
              className="cursor-target group inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.03]"
            >
              {SITE.hero.ctaPrimary.label}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={SITE.hero.ctaSecondary.href}
              className="cursor-target inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-bone transition-colors hover:border-amber hover:text-amber"
            >
              {SITE.hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* Columna de la animación 3D: caja cuadrada, centrada, el aro entra completo */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-[460px] sm:max-w-[540px]">
            <HeroScene />
          </div>
        </div>
      </div>

      {/* Hint de scroll */}
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
        <span className="flex flex-col items-center gap-2">
          {SITE.hero.scrollHint}
          <span className="h-8 w-px animate-pulse bg-gradient-to-b from-amber to-transparent" />
        </span>
      </div>
    </section>
  );
}
