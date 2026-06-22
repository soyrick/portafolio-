"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Carrusel de capturas dentro del "monitor" de cada proyecto.
 * - Crossfade entre imágenes (sin salto de layout).
 * - Flechas (desktop) + puntos + swipe táctil (mobile).
 * - `object-contain`: la captura se ve completa y centrada, sin recorte/zoom.
 */
export default function ProjectCarousel({
  id,
  title,
  screenshots,
}: {
  id: string;
  title: string;
  screenshots: string[];
}) {
  const [index, setIndex] = useState(0);
  const total = screenshots.length;
  const touchX = useRef<number | null>(null);

  const go = (dir: number) => setIndex((p) => (p + dir + total) % total);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <div className="group/car relative overflow-hidden rounded-xl border border-white/10 bg-ink-800 ring-hairline">
      {/* Barra de ventana */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-700 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-[11px] text-muted">{id}.app</span>
        {total > 1 && (
          <span className="ml-auto font-mono text-[11px] text-muted">
            {index + 1}/{total}
          </span>
        )}
      </div>

      {/* Lienzo de imágenes */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden bg-ink-900"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {screenshots.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={`Captura ${idx + 1} de ${title}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(
              "object-contain p-2 transition-opacity duration-500",
              idx === index ? "opacity-100" : "opacity-0"
            )}
            priority={idx === 0}
          />
        ))}

        {/* Flechas */}
        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Imagen anterior"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-ink/70 p-2 text-bone opacity-0 backdrop-blur transition-opacity hover:border-amber hover:text-amber group-hover/car:opacity-100"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button
              type="button"
              aria-label="Imagen siguiente"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-ink/70 p-2 text-bone opacity-0 backdrop-blur transition-opacity hover:border-amber hover:text-amber group-hover/car:opacity-100"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </>
        )}

        {/* Puntos */}
        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Ir a la imagen ${idx + 1}`}
                onClick={() => setIndex(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  idx === index ? "w-5 bg-amber" : "w-1.5 bg-white/30 hover:bg-white/60"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
