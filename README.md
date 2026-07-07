<div align="center">

# Ricardo García — Portfolio interactivo

**Full Stack Jr Developer · AI Builder**

Portfolio one-page con estética retro-tecnológica: escenas 3D propias, fondo de
fluido que reacciona al cursor y scroll cinematográfico.
Diseño y código 100% propios — sin plantillas.

![Next.js](https://img.shields.io/badge/Next.js_14-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React_18-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?logo=threedotjs&logoColor=white)

</div>

---

## ¿Qué es este proyecto?

Es mi carta de presentación como desarrollador: una single-page application que
muestra quién soy, cómo trabajo y los proyectos reales que he construido —
sistemas B2B a medida y plataformas B2C. Todo el contenido, el diseño y el
código son propios.

**Proyectos que presenta:**

| Proyecto | Tipo | Stack |
| --- | --- | --- |
| **BahiaR** | Sistema de gestión de embarcaciones (B2B, tipo CRM) | Next.js · Supabase · Tailwind · Resend |
| **Nobrega Consultores** | Sitio web + panel de administración para un bufete de abogados (B2B) | PHP · MySQL · Apache |
| **Ryplay** | Catálogo de cuentas de streaming con panel de administración (B2C) | Next.js · React · Supabase · Resend |

> 🔒 El código de **BahiaR** y **Nobrega Consultores** es privado por
> confidencialidad de los clientes. En el portfolio se muestran capturas,
> descripción y stack de cada uno; Nobrega Consultores cuenta con demo en vivo.

## Características

- **Hero 3D interactivo** — grilla de cubos que responde al cursor y artefacto
  con shader propio (fresnel + scanlines + desplazamiento de vértices).
- **Fondo de fluido animado** — simulación de fluidos en WebGL detrás del
  contenido, con colores de la paleta del sitio.
- **Scroll cinematográfico** — scroll suave con Lenis y animaciones de
  aparición por sección con Framer Motion.
- **Carrusel de capturas por proyecto** — crossfade, flechas, puntos y swipe
  táctil, dentro de un marco tipo ventana retro.
- **Estética retro-terminal** — scanlines, HUD, tipografía mono (JetBrains
  Mono) y titulares en Space Grotesk sobre paleta ámbar/fósforo/cyan.
- **Contenido centralizado** — todos los textos viven en `data/site.ts` y
  `data/projects.ts`; se edita el contenido sin tocar componentes.
- **Responsive y accesible** — mobile-first, respeta `prefers-reduced-motion`
  y tiene fallback CSS cuando no hay WebGL.

## Stack

| Capa | Tecnología |
| --- | --- |
| Framework | Next.js 14 (App Router) + React 18 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS 3 |
| 3D | Three.js + React Three Fiber + drei |
| Animación | Framer Motion · GSAP · Lenis (smooth scroll) |
| Deploy | Vercel |

## Correr en local

```bash
npm install
npm run dev     # http://localhost:3000
```

Build de producción:

```bash
npm run build
npm run start
```

Requiere Node.js 18.18+ (recomendado 20+). No necesita variables de entorno.

## Estructura

```
app/            layout, página principal y estilos globales
components/
  sections/     secciones de la página (Hero, About, Work, Process, AI, Contact)
  three/        escenas 3D: cubos del hero, artefacto con shader, fluido
  ui/           navbar, footer, carrusel, marquee, reveal, smooth scroll
data/           site.ts (textos del sitio) · projects.ts (proyectos)
lib/            helpers y hooks
public/         capturas de los proyectos
```

## Contacto

- **GitHub:** [github.com/soyrick](https://github.com/soyrick)
- **LinkedIn:** [Ricardo García](https://www.linkedin.com/in/ricardo-garcia-62a257367)
- **Email:** ricardoenriquegr27@gmail.com
