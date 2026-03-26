# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Commands

```bash
npm run dev      # desarrollo local (Turbopack, puerto 3000 o 3001)
npm run build    # build de producción
npm run lint     # ESLint
npm run start    # servidor de producción (requiere build previo)
```

## Architecture

Multi-page site con internacionalización (i18n) via next-intl. Rutas por locale:
- `/es` → español (default)
- `/en` → inglés
- `/zh` → chino simplificado
- `/` → redirige a `/es` automáticamente

**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS + next-intl

**Estructura de carpetas:**
```
src/
  app/
    layout.tsx              # root layout (requerido por Next.js)
    [locale]/
      layout.tsx            # layout por idioma: fuentes, NextIntlClientProvider, Navbar, Footer
      globals.css           # Tailwind base + variables CSS
      page.tsx              # Home: importa HeroSection con translations del servidor
      about/page.tsx
      services/page.tsx
      pricing/page.tsx
      contact/page.tsx
      blog/page.tsx
  components/
    layout/
      Navbar.tsx            # "use client" — sticky, selector idioma, menú hamburguesa
      Footer.tsx            # "use client" — 4 columnas, iconos Telegram/Email
    sections/
      HeroSection.tsx       # "use client" — badge pulsante, H1, subtitle, CTAs
  messages/
    es.json / en.json / zh.json   # traducciones: nav, hero, footer
  i18n/
    request.ts              # next-intl server config
  lib/
    utils.ts
  proxy.ts                  # next-intl routing middleware (Next.js 16 usa proxy.ts)
```

**Tipografía:** Variables CSS `--font-sora` (títulos, clase `font-sora`) y `--font-dm-sans` (cuerpo, clase `font-dm-sans`).

**Paleta Tailwind custom** (`tailwind.config.ts`):
- `bg-primary` — fondo oscuro `#1a1917`
- `text-accent` / `bg-accent` — azul `#185FA5`
- `accent-light` — `#E6F1FB` (fondos suaves)
- `accent-mid` — `#378ADD`, `accent-dark` — `#0C447C`
- `text-muted` — `#888780`
- `surface` — `#f8f7f4` (fondo claro)
- `border-light` — `#d0cec8`
- `teal`, `teal-light`, `amber`, `amber-light` — colores de estado

## Notas de compatibilidad

**next-intl + Next.js 16 + Turbopack:** next-intl v3.26.x usa `experimental.turbo` (API de Next.js 15) pero Next.js 16 movió esto a `turbopack` en la raíz. El `next.config.mjs` incluye el alias manual para Turbopack:
```js
turbopack: { resolveAlias: { "next-intl/config": "./src/i18n/request.ts" } }
```

**proxy.ts vs middleware.ts:** Next.js 16 renombró la convención de middleware a `proxy.ts`. El archivo está en `src/proxy.ts`.

## Pendiente

- Páginas completas: about, services, pricing, contact, blog (actualmente solo h1 placeholder)
- Integrar formulario de contacto (Resend o Tally)
- Integrar pagos (PayPal — @paypal/react-paypal-js ya instalado)
- SEO: metadata por página y por locale
