"use client";

import dynamic from "next/dynamic";
import { useHasWebGL, useIsSmallScreen, usePrefersReducedMotion } from "@/lib/hooks";

// El canvas 3D solo en cliente (WebGL no existe en SSR).
const SceneCanvas = dynamic(() => import("./SceneCanvas"), { ssr: false });

/**
 * Capa visual del hero:
 *  - Si hay WebGL: monta la escena 3D (artefacto con shader).
 *  - Si NO hay WebGL: cae a un orbe de gradiente puramente CSS, manteniendo la
 *    estética sin romper la página (requisito de fallback / performance).
 */
export default function HeroScene() {
  const hasWebGL = useHasWebGL();
  const small = useIsSmallScreen();
  const reduced = usePrefersReducedMotion();

  // Fallback CSS (también se ve durante la detección inicial).
  if (hasWebGL === false || hasWebGL === null) {
    return (
      <div className="relative h-full w-full" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[min(70vw,440px)] w-[min(70vw,440px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,194,61,0.45),rgba(111,210,255,0.12)_45%,transparent_70%)] blur-2xl" />
        <div className="absolute left-1/2 top-1/2 h-[min(48vw,300px)] w-[min(48vw,300px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-phosphor/20" />
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <SceneCanvas reduced={reduced} small={small} />
    </div>
  );
}
