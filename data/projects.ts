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

export type ProjectStatus = "Demo" | "MVP" | "En desarrollo" | "Proyecto propio";

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
    title: "Bahía",
    tagline: "[Servicio / tipo de producto]",
    description: "[Descripción principal del proyecto Bahía]",
    problem: "[Qué problema resuelve]",
    technologies: ["[Tecnología]", "[Tecnología]", "[Tecnología]"],
    screenshots: ["/projects/Bahia/dashboard.png", "/projects/Bahia/planilla.png"],
    repoUrl: "",
    demoUrl: "",
    status: "En desarrollo",
  },
  {
    id: "landing",
    index: "02",
    title: "Landing",
    tagline: "[Servicio / tipo de producto]",
    description: "[Descripción principal del proyecto Landing]",
    problem: "[Qué problema resuelve]",
    technologies: ["[Tecnología]", "[Tecnología]", "[Tecnología]"],
    screenshots: ["/projects/landing/inicio.png", "/projects/landing/paneladmin.png"],
    repoUrl: "",
    demoUrl: "",
    status: "MVP",
  },
  {
    id: "ryplay",
    index: "03",
    title: "RYPlay",
    tagline: "[Servicio / tipo de producto]",
    description: "[Descripción principal del proyecto RYPlay]",
    problem: "[Qué problema resuelve]",
    technologies: ["[Tecnología]", "[Tecnología]", "[Tecnología]"],
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
