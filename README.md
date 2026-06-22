# Ricardo García — Portfolio interactivo

Portfolio one-page con estética retro-tecnológica, escena 3D con shader propio,
scroll suave y animaciones. Stack: **Next.js + TypeScript + Tailwind + Three.js
(React Three Fiber) + Framer Motion + Lenis**.

> Inspirado en la estructura/estética de sitios de estudio digital tipo shader.se,
> pero con contenido, diseño y código 100% propios. **Sin loader de entrada.**

## Requisitos
- Node.js 18.18+ (recomendado 20+)
- npm

## Correr en local
```bash
npm install        # solo la primera vez
npm run dev        # http://localhost:3000
```

## Producción
```bash
npm run build      # build optimizado
npm run start      # sirve el build en http://localhost:3000
```

## Estructura
```
app/            layout, page, estilos globales
components/
  sections/     las 8 secciones de la página
  three/        escena 3D + shader + fallback
  ui/           navbar, footer, smooth scroll, reveal, marquee
data/           site.ts (textos) · projects.ts (proyectos)
lib/            helpers y hooks
public/         capturas e imágenes estáticas
_legacy/        versión vanilla previa (referencia, no se usa)
```

## Editar contenido
Casi todo el texto vive en `data/site.ts` y `data/projects.ts`.
Ver **`secciones.md`** para el mapa completo de "qué archivo toco para cambiar X".

## Pendiente de completar
Datos de proyectos, email/WhatsApp/redes, CV en PDF, envío del formulario e imagen
Open Graph. Detalle en **`INFORME.md`** (punto 10).

## Deploy (Vercel)
Proyecto Next.js estándar: importar el repo en Vercel, build command `next build`,
deploy automático. No requiere variables de entorno para funcionar.
