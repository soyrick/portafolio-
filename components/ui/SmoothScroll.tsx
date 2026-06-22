"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Scroll suave global con Lenis. Se desactiva si el usuario pidió menos
 * movimiento. Expone la instancia en `window.__lenis` para que el navbar
 * pueda hacer scroll suave hacia las anclas.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // @ts-expect-error — exponemos para uso del navbar
    window.__lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      // @ts-expect-error — limpieza
      window.__lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
