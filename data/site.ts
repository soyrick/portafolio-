/* ===========================================================================
   CONTENIDO DEL SITIO  (fuente de verdad del copy)
   ---------------------------------------------------------------------------
   Toda la información visible de la web vive acá. Para cambiar un texto,
   editás este archivo (ver `secciones.md` para saber qué bloque alimenta cada
   sección). Lo que todavía no está definido queda como placeholder explícito
   entre corchetes — NO se inventa información real.
   =========================================================================== */

export const SITE = {
  name: "Ricardo García",
  shortName: "RG",
  role: "Full Stack JR Developer · AI Builder",
  location: "Anzoátegui, Venezuela",
  availabilityTag: "Disponibilidad inmediata · Remoto",
  year: new Date().getFullYear(),

  /* CONTACTO — completar cuando estén los datos definitivos */
  contact: {
    email: "ricardoenriquegr27@gmail.com",
    whatsapp: "+58 412 1097114",
    whatsappUrl: "https://wa.me/584121097114",
    github: "https://github.com/soyrick",
    linkedin: "https://www.linkedin.com/in/ricardo-garcia-62a257367",
    cv: "/Ricardo-Garcia-CV.pdf", // colocar el PDF en /public con ese nombre
  },

  /* NAVEGACIÓN */
  nav: [
    { label: "Trabajo", href: "#work" },
    { label: "Sobre mí", href: "#about" },
    { label: "Proceso", href: "#process" },
    { label: "Contacto", href: "#contact" },
  ],
  navCta: { label: "Hablemos", href: "#contact" },

  /* HERO */
  hero: {
    badge: "Disponible para proyectos · Remoto",
    // El lettering grande se arma con estas tres líneas
    lines: ["Desarrollo web", "y experiencias", "conectadas al futuro"],
    intro:
      " ",
    ctaPrimary: { label: "Ver proyectos", href: "#work" },
    ctaSecondary: { label: "Contactame", href: "#contact" },
    scrollHint: "Scrolleá para explorar",
  },

  /* INTRO / OVERVIEW */
  intro: {
    eyebrow: "El proyecto",
    statement:
      "Transformo ideas en experiencias web reales, eficientes y bien estructuradas. De la interfaz al deploy, con código limpio y criterio técnico.",
    detail:
      "Trabajo con Next.js, TypeScript, Tailwind, Supabase, APIs e inteligencia artificial. Me interesa crear productos digitales, automatizaciones, integraciones y experiencias web que se sientan vivas.",
  },

  /* MI STACK (intro breve, debajo de "Sobre mí") */
  miStack: {
    title: "Mi Stack",
    description:
      "Construyo con Next.js, TypeScript, React y Tailwind en el frontend; Supabase y APIs en el backend; y sumo herramientas de IA como Claude y OpenCode para acelerar el proceso. Deploy en Vercel.",
  },

  /* SOBRE MÍ */
  about: {
    eyebrow: "Sobre mí",
    title: "Un desarrollador que construye de punta a punta",
    paragraph:
      "Soy Ricardo García, desarrollador Full Stack JR enfocado en construir soluciones web modernas, interfaces atractivas y productos digitales funcionales — con la IA como aliado del proceso.",
    bullets: [
      "Creo soluciones web modernas.",
      "Uso IA como apoyo estratégico para acelerar y mejorar el trabajo.",
      "Desarrollo bajo una dinamica de trabajo en fases organizada y eficiente para entregar soluciones claras y mantenibles.",
      
    ],
    
  },

  /* COMO TRABAJO */
  process: {
    eyebrow: "Cómo trabajo",
    title: "De la idea al deploy, sin vueltas innecesarias",
    intro:
      "Un proceso simple y ordenado, pensado para entregar soluciones claras y mantenibles.",
    steps: [
      { t: "Entiendo el problema", d: "Escucho el objetivo real antes de escribir una línea de código." },
      { t: "Diseño la solución", d: "Propongo algo simple y escalable, sin complejidad innecesaria." },
      { t: "Desarrollo la interfaz", d: "Construyo interfaces limpias, responsive y funcionales." },
      { t: "Integro servicios", d: "Conecto APIs, bases de datos y servicios externos." },
      { t: "Uso IA como apoyo", d: "Acelero análisis, prototipado y revisión de código con criterio." },
      { t: "Itero y despliego", d: "Pruebo el producto, ajusto y publico, nada deploya sin estar 100% listo." },
    ],
  },

  /* STACK / CAPACIDADES */
  stack: {
    eyebrow: "Capacidades",
    title: "Stack tecnológico",
    intro:
      "Tecnologías que uso para construir productos web modernos e integrar servicios.",
    categories: [
      { name: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "React"] },
      { name: "Backend / Datos", items: ["Supabase", "SQL", "APIs REST"] },
      { name: "Integraciones", items: ["APIs externas", "Webhooks", ] },
      { name: "Deploy & Workflow", items: ["Vercel", "GitHub", "CI básico"] },
      { name: "IA aplicada", items: ["Claude", "OpenCode", "Prompting técnico"] },
      { name: "Automatización", items: ["Flujos", "Procesos digitales"] },
    ],
  },

  /* SECCIÓN INTERACTIVA / IA */
  ai: {
    eyebrow: "IA aplicada",
    title: "La IA acelera. El criterio es mío.",
    intro:
      "Uso herramientas como Claude y OpenCode como apoyo del proceso. Reviso, entiendo y decido qué entra al producto.",
    uses: [
      "Acelerar prototipos",
      "Analizar código",
      "Generar estructuras iniciales",
      "Mejorar productividad",
      "Documentar ideas",
      "Explorar soluciones técnicas",
      "Automatizar tareas repetitivas",
    ],
    note: "La IA es una herramienta de apoyo: el diseño, las decisiones y la calidad final son responsabilidad humana.",
  },

  /* CONTACTO */
  contactSection: {
    eyebrow: "Trabajemos juntos",
    title: "Me gustaria formar parte de tu equipo",
    subtitle:
      "Disponibilidad inmediata para roles remotos. Escribime directo por cualquiera de estos canales y te respondo a la brevedad.",
  },
};

export type Site = typeof SITE;
