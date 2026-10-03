# Despliegue y pruebas

## Desarrollo y build

```bash
npm install
npm run dev
npm run check
npm run test:e2e
npm run build
npm run preview
```

`npm run build` ejecuta primero las comprobaciones de Astro/TypeScript y deja el sitio estático en `dist/`.

## Playwright de navegador

Las pruebas E2E de `tests/homepage.spec.ts` verifican las cuatro secciones, el enlace de reserva con tratamiento preseleccionado, el menú móvil y la ausencia de desbordamiento horizontal. Se ejecutan en Chromium de escritorio, Pixel 7 y un viewport compacto de 360 px.

Instala Chromium una vez en el entorno de desarrollo:

```bash
npx playwright install chromium
```

El proyecto también configura el servidor MCP de Playwright para OpenCode en `opencode.json`. Necesita Node.js 20 o superior; reinicia OpenCode para que cargue la configuración. Su uso es de desarrollo y no se incluye en la web publicada.

## Hostinger

La versión actual es estática: no necesita backend ni proceso Node.js permanente.

Para desarrollo y compilación usa Node.js 22.12 o superior. En Hostinger, selecciona Node 22 si eliges el flujo de despliegue de aplicaciones desde GitHub.

1. Ejecuta `npm run build`.
2. Sube **el contenido** de `dist/` a `public_html` desde hPanel File Manager o FTP.
3. Comprueba página, imágenes, enlaces y versión móvil en el dominio.

Para despliegue conectado a GitHub, Hostinger documenta dos vías: una app Astro con build desde repositorio en planes compatibles con Node.js, o publicación de los archivos estáticos ya generados. En un plan estático sin build automático, una GitHub Action puede compilar Astro y subir `dist/` por FTP/SFTP. Confirmar el plan de Hostinger antes de elegir la automatización.

## Dominio temporal de GitHub Pages

El flujo `.github/workflows/deploy.yml` publica cada actualización de `main` en `https://estebanloterohub.github.io/estetica-neira/`. Para el build de Pages, `GITHUB_PAGES=true` activa el `site` y el `base` del subdirectorio; las ejecuciones locales y las de Hostinger siguen usando la raíz.

## Datos a reemplazar antes de producción

- `src/data/site.ts`: número real de WhatsApp, horario, correo y redes.
- `src/data/treatments.ts`: catálogo, precios, duraciones, descripciones e imágenes finales.
- Dirección del centro, logo y dominio definitivo.
- Imágenes temporales de Unsplash.

Fuentes: [Astro en Hostinger](https://docs.astro.build/en/guides/deploy/hostinger/), [despliegue Git en Hostinger](https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository) y [servidores MCP de OpenCode](https://opencode.ai/en/docs/mcp-servers).
