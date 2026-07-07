import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import AI from "@/components/sections/AI";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/ui/Marquee";
import LiquidEther from "@/components/three/LiquidEther";

// Paleta retro del sitio (ámbar / fósforo / señal) para el fluido de fondo.
const LIQUID_COLORS = ["#ffc23d", "#7dffb0", "#6fd2ff"];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Resto de la página: fluido interactivo como fondo detrás del contenido */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-60" aria-hidden>
          <LiquidEther
            colors={LIQUID_COLORS}
            mouseForce={20}
            cursorSize={100}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            className="h-full w-full"
          />
        </div>

        <div className="relative z-10">
          <About />
          <Capabilities />
          <Marquee
            items={[
              "Next.js",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Supabase",
              "APIs",
              "IA aplicada",
              "Automatización",
            ]}
          />
          <Work />
          <Process />
          <AI />
          <Contact />
        </div>
      </div>
    </>
  );
}
