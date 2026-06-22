"use client";

import { useEffect, useState } from "react";

/**
 * Detecta soporte de WebGL. Devuelve `null` mientras evalúa (SSR / primer
 * frame) y luego `true`/`false`. Sirve para montar un fallback visual cuando
 * el 3D no está disponible o el dispositivo es muy limitado.
 */
export function useHasWebGL(): boolean | null {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      setSupported(!!gl);
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}

/** Respeta `prefers-reduced-motion`. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/** `true` si el viewport es chico (mobile/tablet) para simplificar el 3D. */
export function useIsSmallScreen(breakpoint = 768): boolean {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setSmall(mq.matches);
    const onChange = () => setSmall(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);

  return small;
}
