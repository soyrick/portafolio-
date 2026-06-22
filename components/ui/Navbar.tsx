"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;
    // @ts-expect-error — instancia de Lenis expuesta por SmoothScroll
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(target, { offset: -72 });
    else target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => go(e, "#hero")}
            className="cursor-target group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-amber/40 bg-amber/10 font-mono text-sm font-bold text-amber transition-colors group-hover:bg-amber group-hover:text-ink">
              {SITE.shortName}
            </span>
            <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-muted sm:block">
              {SITE.name}
            </span>
          </a>

          {/* Links desktop */}
          <ul className="hidden items-center gap-8 md:flex">
            {SITE.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className="cursor-target font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-bone"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={SITE.navCta.href}
              onClick={(e) => go(e, SITE.navCta.href)}
              className="cursor-target hidden rounded-full bg-amber px-5 py-2 font-mono text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.04] sm:inline-block"
            >
              {SITE.navCta.label}
            </a>

            {/* Hamburguesa */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-bone md:hidden"
            >
              <div className="flex flex-col gap-[5px]">
                <span
                  className={cn(
                    "h-[2px] w-5 bg-bone transition-transform",
                    open && "translate-y-[7px] rotate-45"
                  )}
                />
                <span className={cn("h-[2px] w-5 bg-bone transition-opacity", open && "opacity-0")} />
                <span
                  className={cn(
                    "h-[2px] w-5 bg-bone transition-transform",
                    open && "-translate-y-[7px] -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Menú mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[68px] z-40 mx-4 rounded-2xl border border-white/10 bg-ink-800/95 p-6 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {SITE.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => go(e, item.href)}
                    className="font-mono text-sm uppercase tracking-widest text-bone"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SITE.navCta.href}
                  onClick={(e) => go(e, SITE.navCta.href)}
                  className="mt-2 inline-block rounded-full bg-amber px-5 py-2 font-mono text-xs font-bold uppercase tracking-widest text-ink"
                >
                  {SITE.navCta.label}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
