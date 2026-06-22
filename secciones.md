# Secciones de la web — Mapa de edición

> Guía para saber **dónde** vive cada sección y **qué archivo** tocar para
> cambiar su contenido. La mayoría del texto está centralizado en
> `data/site.ts` (copy general) y `data/projects.ts` (proyectos).
>
> Orden real de la página: definido en `app/page.tsx`.

---

## 1. Header / Navegación
- **Nombre corto:** `nav`
- **Componente:** `components/ui/Navbar.tsx`
- **Datos:** `data/site.ts` → `SITE.nav` (links), `SITE.navCta` (botón), `SITE.shortName`, `SITE.name`
- **Qué contiene:** logo "RG", nombre, links a secciones y botón CTA "Hablemos".
- **Comportamiento:** fija arriba, se vuelve translúcida con blur al scrollear, menú hamburguesa en mobile, scroll suave a las anclas vía Lenis.
- **Para editar:** cambiar links → `SITE.nav`. Cambiar el botón → `SITE.navCta`.

## 2. Hero principal
- **Nombre corto:** `hero`
- **Componente:** `components/sections/Hero.tsx` + escena 3D `components/three/HeroScene.tsx`
- **Datos:** `data/site.ts` → `SITE.hero` (badge, `lines[3]`, `intro`, CTAs, `scrollHint`), `SITE.location`, `SITE.role`, `SITE.availabilityTag`
- **Qué contiene:** badge de disponibilidad, lettering grande en 3 líneas, párrafo de presentación, CTA primario (Ver proyectos) y secundario (Contactarme), HUD en las esquinas, hint de scroll. Detrás: artefacto 3D con shader propio.
- **Comportamiento:** **sin loader** — entra directo. El 3D reacciona al puntero; si no hay WebGL cae a un orbe de gradiente CSS.
- **Para editar el título grande:** `SITE.hero.lines` (array de 3 strings). El párrafo: `SITE.hero.intro`.

## 3. Banda / Marquee
- **Nombre corto:** `marquee`
- **Componente:** `components/ui/Marquee.tsx`
- **Datos:** definidos inline en `app/page.tsx` (prop `items`).
- **Qué contiene:** ticker horizontal infinito con tecnologías/keywords.
- **Para editar:** cambiar el array `items` en `app/page.tsx`.

## 4. Introducción / Overview
- **Nombre corto:** `intro`
- **Componente:** `components/sections/Intro.tsx`
- **Datos:** `data/site.ts` → `SITE.intro` (`eyebrow`, `statement`, `detail`)
- **Qué contiene:** declaración grande sobre la esencia del proyecto + párrafo de detalle.
- **Para editar:** `SITE.intro.statement` (frase grande), `SITE.intro.detail` (párrafo).

## 5. Trabajo seleccionado / Proyectos
- **Nombre corto:** `work`
- **Componente:** `components/sections/Work.tsx`
- **Datos:** `data/projects.ts` → array `PROJECTS`
- **Qué contiene:** filas alternadas con mockup de monitor/ventana (captura real), número, título, estado, tagline, descripción, tecnologías y botones repo/demo.
- **Estado actual:** las **capturas son reales** (`/public/projects/...`). Título = nombre de carpeta. Descripción, problema, tecnologías y enlaces están como **placeholder `[...]`** (se ven atenuados) hasta que se confirmen los datos reales.
- **Para editar:** en `data/projects.ts`, reemplazar los `[...]` de cada proyecto, cargar `technologies`, y pegar `repoUrl`/`demoUrl` (si quedan vacíos, el botón no aparece).

## 6. Sobre mí / Sobre el proyecto
- **Nombre corto:** `about`
- **Componente:** `components/sections/About.tsx`
- **Datos:** `data/site.ts` → `SITE.about` (`eyebrow`, `title`, `paragraph`, `bullets[4]`, `note`)
- **Qué contiene:** título, párrafo de perfil, lista de 4 puntos tipo "specs" y nota de disponibilidad.
- **Para editar:** `SITE.about.*`.

## 7. Proceso / Capacidades
- **Nombre corto:** `process`
- **Componente:** `components/sections/Process.tsx`
- **Datos:** `data/site.ts` → `SITE.process` (`steps[6]`)
- **Qué contiene:** los 6 pasos del proceso de trabajo en grilla, con línea de acento al hover.
- **Para editar:** `SITE.process.steps` (cada uno `{ t, d }`).

## 8. Sección visual interactiva (Stack + IA)
- **Nombre corto:** `interactive`
- **Componente:** `components/sections/Interactive.tsx`
- **Datos:** `data/site.ts` → `SITE.stack` (categorías) y `SITE.ai` (usos + nota)
- **Qué contiene:** grilla de capacidades/stack con glow al hover + una "terminal CRT" que lista los usos de IA con cursor parpadeante.
- **Para editar:** categorías → `SITE.stack.categories`. Usos de IA → `SITE.ai.uses`. Nota → `SITE.ai.note`.

## 9. CTA final
- **Nombre corto:** `cta`
- **Componente:** `components/sections/CTA.tsx`
- **Datos:** `data/site.ts` → `SITE.cta` (`title`, `subtitle`, `roles`, `primary`)
- **Qué contiene:** panel destacado con scanlines, título de cierre, chips de roles y botón principal.
- **Para editar:** `SITE.cta.*`.

## 10. Contacto
- **Nombre corto:** `contact`
- **Componente:** `components/sections/Contact.tsx`
- **Datos:** `data/site.ts` → `SITE.contactSection` (textos) y `SITE.contact` (email, whatsapp, github, linkedin)
- **Qué contiene:** bloque de canales de contacto + formulario (maqueta visual).
- **Estado actual:** email, WhatsApp, GitHub y LinkedIn son **placeholders** (`[...]`) → se muestran atenuados y sin enlace hasta completarlos. El formulario no envía todavía (falta conectar Formspree u otro).
- **Para editar:** `SITE.contact.*`. Para activar envío real, conectar el `onSubmit` de `Contact.tsx` a un endpoint (ver informe).

## 11. Footer
- **Nombre corto:** `footer`
- **Componente:** `components/ui/Footer.tsx`
- **Datos:** `data/site.ts` → `SITE.name`, `SITE.role`, `SITE.location`, `SITE.year`, `SITE.nav`
- **Qué contiene:** logo, nombre, rol, links de navegación, año y crédito de stack.
- **Para editar:** se actualiza solo desde `SITE.*`.

---

## Atajos rápidos de edición

| Quiero cambiar...                | Archivo            | Clave                         |
| -------------------------------- | ------------------ | ----------------------------- |
| Título grande del Hero           | `data/site.ts`     | `SITE.hero.lines`             |
| Texto de presentación del Hero   | `data/site.ts`     | `SITE.hero.intro`             |
| Proyectos (datos/imagenes)       | `data/projects.ts` | `PROJECTS`                    |
| Texto "Sobre mí"                 | `data/site.ts`     | `SITE.about`                  |
| Pasos del proceso                | `data/site.ts`     | `SITE.process.steps`          |
| Stack / capacidades              | `data/site.ts`     | `SITE.stack.categories`       |
| CTA final                        | `data/site.ts`     | `SITE.cta`                    |
| Email / WhatsApp / redes         | `data/site.ts`     | `SITE.contact`                |
| Links del navbar                 | `data/site.ts`     | `SITE.nav`                    |
| Paleta / fuentes / animaciones   | `tailwind.config.ts` + `app/globals.css` | tokens |
| Artefacto 3D / shader            | `components/three/ArtifactScene.tsx`      | shaders |
