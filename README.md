# Estética Neira

Landing de bienestar y estética en Valladolid. La primera versión usa contenido e imágenes provisionales para validar la dirección visual; revisa la lista de sustituciones antes de publicar.

## Requisitos

- Node.js 22.12 o superior para esta versión de Astro.
- npm 9.6.5 o superior.

## Desarrollo

```bash
npm install
npm run dev
```

Abre la URL local que muestra Astro (por defecto `http://localhost:4321`).

## Comprobaciones y build

```bash
npm run check
npm run test:e2e
npm run build
npm run preview
```

La primera vez, instala el navegador de Playwright:

```bash
npx playwright install chromium
```

Los informes de pruebas quedan en `test-results/` y no forman parte del sitio publicado.

## Publicación

Astro genera el sitio estático en `dist/`. Consulta [docs/despliegue-y-pruebas.md](docs/despliegue-y-pruebas.md) para las opciones de Hostinger.

La vista previa temporal de GitHub Pages se publica en `https://estebanloterohub.github.io/estetica-neira/` al desplegar la rama `main`.

## Datos que se actualizarán

- Nombre y logotipo definitivos.
- Número real de WhatsApp y mensaje de reserva.
- Tratamientos, precios y duraciones confirmados.
- Dirección, horario y enlaces sociales.
- Fotografías propias del centro y las cabinas.

Los datos editables están centralizados en `src/data/site.ts` y `src/data/treatments.ts`.

## Documentación

- [Guía de estilo](docs/guia-de-estilo.md)
- [Arquitectura y rutas](docs/arquitectura-y-rutas.md)
- [Referencias y decisiones](docs/referencias-y-decisiones.md)
- [Despliegue y pruebas](docs/despliegue-y-pruebas.md)
