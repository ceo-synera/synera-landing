# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # desarrollo local en localhost:3000
npm run build    # build de producción (TypeScript check incluido)
npm run lint     # ESLint
npm run start    # servidor de producción (requiere build previo)
```

## Architecture

Single-page landing (no routing). Todo el contenido está en `app/page.tsx`, que importa los componentes en orden de aparición vertical.

**Flujo de datos:** No hay estado global ni fetching. Todos los componentes son presentacionales. Los botones CTA usan `document.getElementById("contacto")?.scrollIntoView()` para scroll suave al formulario.

**Secciones → IDs de anchor:**
- `#contacto` — sección ContactForm (target de todos los CTAs)
- `#proceso` — wrapper de HowItWorks en page.tsx
- `#servicios` — wrapper de Services en page.tsx
- `#problema` — wrapper de Problem en page.tsx

**Animaciones:** Framer Motion con `whileInView` + `viewport={{ once: true }}` en todos los componentes. El Hero usa `animate` directo (sin scroll trigger). Patrón de stagger: `delay: i * 0.1` en listas de tarjetas.

**Tipografía:** Variables CSS `--font-playfair` (títulos, clase `font-display`) y `--font-inter` (cuerpo, clase `font-body`), definidas en `app/layout.tsx` con `next/font/google`.

**Paleta Tailwind custom** (`tailwind.config.ts`):
- `bg-primary` / `bg-secondary` — fondos oscuros alternados entre secciones
- `text-accent` / `bg-accent` — dorado `#c9a96e`, usado para highlights y CTA principal
- `text-muted` — texto secundario gris
- `border-border` — separadores

## Pendiente

- Reemplazar la constante `TALLY_FORM_ID` en `components/ContactForm.tsx` con el ID real del formulario Tally para activar el embed iframe.
