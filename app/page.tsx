import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import AI from "@/components/sections/AI";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <Marquee
        items={[
          "Next.js",
          "TypeScript",
          "React",
          "Tailwind CSS",
          "Three.js",
          "Supabase",
          "APIs",
          "IA aplicada",
          "Automatización",
        ]}
      />
      <Work />
      <Process />
      <AI />
      <CTA />
      <Contact />
    </>
  );
}
