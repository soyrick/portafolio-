/* ===========================================================================
   PROYECTOS  (sección "Proyectos Principales")
   ---------------------------------------------------------------------------
   Las capturas son reales (viven en /public/projects/<carpeta>/). Si un enlace
   (repo/demo) queda vacío, el botón no se muestra.
   =========================================================================== */

export type ProjectStatus = "Demo" | "MVP" | "En desarrollo" | "Terminado" | "Proyecto propio";

export interface Project {
  id: string;
  index: string; // número mostrado tipo "01"
  title: string;
  tagline: string; // línea corta junto al título
  description: string;
  technologies: string[];
  screenshots: string[]; // rutas dentro de /public
  repoUrl: string; // "" => sin botón
  demoUrl: string; // "" => sin botón
  status: ProjectStatus;
  privateCode?: boolean; // true => muestra la nota de código privado por confidencialidad
}

export const PROJECTS: Project[] = [
  {
    id: "bahia",
    index: "01",
    title: "BahiaR",
    tagline: "Sistema de gestión de embarcaciones",
    description:
      "Solución B2B a medida para Bahía Redonda, una empresa de servicios a yates: un sistema de gestión interna tipo CRM que digitaliza el registro de las embarcaciones, los servicios que se les realizan y sus costos, reemplazando la gestión en papel por una plataforma centralizada con toda la información almacenada y accesible.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Resend"],
    screenshots: ["/projects/Bahia/dashboard.png", "/projects/Bahia/planilla.png"],
    repoUrl: "",
    demoUrl: "",
    status: "En desarrollo",
    privateCode: true,
  },
  {
    id: "landing",
    index: "02",
    title: "Nobrega Consultores",
    tagline: "Sitio web para un bufete de abogados",
    description:
      "Solución B2B a medida para Nobrega Consultores, un bufete de abogados: landing page con toda la información del estudio y un panel de administración desde el que el equipo edita el contenido del sitio, gestiona sus clientes y sube información y archivos PDF a la nube del hosting.",
    technologies: ["PHP", "MySQL", "Apache"],
    screenshots: ["/projects/landing/inicio.png", "/projects/landing/paneladmin.png"],
    repoUrl: "",
    demoUrl: "https://www.nobregaconsultores.com/",
    status: "Terminado",
    privateCode: true,
  },
  {
    id: "ryplay",
    index: "03",
    title: "Ryplay",
    tagline: "Catálogo de cuentas de streaming",
    description:
      "Plataforma B2C tipo catálogo donde los clientes crean su cuenta y adquieren cuentas de plataformas de streaming. Incluye la interfaz de cliente para comprar las cuentas disponibles del catálogo, y un panel de administración para cargar cuentas, gestionar cuáles están disponibles o llenas, y saber qué cliente tiene cada una.",
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
