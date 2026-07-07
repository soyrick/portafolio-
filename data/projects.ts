/* ===========================================================================
   PROYECTOS  (sección "Trabajo seleccionado")
   ---------------------------------------------------------------------------
   Las CAPTURAS son reales (viven en /public/projects/<carpeta>/). Los títulos
   usan el nombre de carpeta que definió Ricardo. La descripción, tecnologías,
   problema y enlaces quedan como PLACEHOLDER hasta que se confirmen los datos
   reales — no se inventa nada (ver manual del proyecto).

   Para completar un proyecto: reemplazá los textos entre corchetes, cargá las
   tecnologías reales y pegá las URLs (repo/demo). Si un enlace queda vacío,
   el botón no se muestra.
   =========================================================================== */

export type ProjectStatus = "Demo" | "MVP" | "En desarrollo" | "Terminado" | "Proyecto propio";

export interface Project {
  id: string;
  index: string; // número mostrado tipo "01"
  title: string;
  tagline: string; // línea corta junto al título
  description: string;
  problem: string;
  technologies: string[];
  screenshots: string[]; // rutas dentro de /public
  repoUrl: string; // "" => sin botón
  demoUrl: string; // "" => sin botón
  status: ProjectStatus;
}

export const PROJECTS: Project[] = [
  {
    id: "bahia",
    index: "01",
    title: "BahiaR",
    tagline: "Sistema de gestión de embarcaciones",
    description:
      "Solución B2B a medida para Bahía Redonda, una empresa de servicios a yates: un sistema de gestión interna tipo CRM que digitaliza el registro de las embarcaciones, los servicios que se les realizan y sus costos, reemplazando la gestión en papel por una plataforma centralizada con toda la información almacenada y accesible.",
    problem:
      "La encargada de gestionar las embarcaciones llevaba los datos de servicios y costos en papel, sin respaldo ni acceso rápido a la información.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Resend"],
    screenshots: ["/projects/Bahia/dashboard.png", "/projects/Bahia/planilla.png"],
    repoUrl: "",
    demoUrl: "",
    status: "En desarrollo",
  },
  {
    id: "landing",
    index: "02",
    title: "Nobrega Consultores",
    tagline: "Sitio web para un bufete de abogados",
    description:
      "Solución B2B a medida para Nobrega Consultores, un bufete de abogados: landing page con toda la información del estudio y un panel de administración desde el que el equipo edita el contenido del sitio, gestiona sus clientes y sube información y archivos PDF a la nube del hosting.",
    problem:
      "El bufete necesitaba presencia web con contenido que ellos mismos pudieran actualizar, sin depender de un desarrollador para cada cambio.",
    technologies: ["PHP", "MySQL", "Apache"],
    screenshots: ["/projects/landing/inicio.png", "/projects/landing/paneladmin.png"],
    repoUrl: "",
    demoUrl: "https://www.nobregaconsultores.com/",
    status: "Terminado",
  },
  {
    id: "ryplay",
    index: "03",
    title: "Ryplay",
    tagline: "Catálogo de cuentas de streaming",
    description:
      "Plataforma B2C tipo catálogo donde los clientes crean su cuenta y adquieren cuentas de plataformas de streaming. Incluye la interfaz de cliente para comprar las cuentas disponibles del catálogo, y un panel de administración para cargar cuentas, gestionar cuáles están disponibles o llenas, y saber qué cliente tiene cada una.",
    problem:
      "Vender cuentas de streaming implicaba llevar a mano el control de disponibilidad y de qué cliente tiene cada cuenta; Ryplay centraliza esa gestión.",
    technologies: ["Next.js", "React", "Supabase", "Resend"],
    screenshots: [
      "/projects/ryplay/inicio.png",
      "/projects/ryplay/login.png",
      "/projects/ryplay/paneladmin.png",
    ],
    repoUrl: "",
    demoUrl: "",
    status: "Proyecto propio",
  },
];
