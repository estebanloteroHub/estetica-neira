# Arquitectura y rutas

## Base técnica

Astro genera HTML estático con TypeScript en modo estricto. El sitio no necesita un servidor persistente para mostrar la landing; la interacción actual se limita al menú móvil y a enlaces de WhatsApp.

## Estructura actual

```text
src/
├── components/
│   ├── Booking.astro
│   ├── Hero.astro
│   ├── MobileBookingBar.astro
│   ├── Ritual.astro
│   ├── SiteFooter.astro
│   ├── SiteHeader.astro
│   └── Treatments.astro
├── data/
│   ├── site.ts
│   └── treatments.ts
├── layouts/
│   └── SiteLayout.astro
├── pages/
│   └── index.astro
├── styles/
│   └── global.css
└── utils/
    └── whatsapp.ts
```

## Responsabilidades

- `src/pages/index.astro`: orden de las cuatro secciones de portada.
- `src/layouts/SiteLayout.astro`: idioma, metadatos, icono y estilos globales.
- `src/components/`: secciones y navegación reutilizables.
- `src/data/treatments.ts`: tratamientos destacados, textos, precios de prueba, tiempos e imágenes.
- `src/data/site.ts`: nombre, ciudad, teléfono y horario de prueba.
- `src/utils/whatsapp.ts`: construcción de enlaces `wa.me` con mensaje codificado.
- `src/styles/global.css`: tokens visuales, responsive y estados de interacción.

## Evolución prevista

Cuando se amplíe la navegación, conservar las categorías y mover el contenido detallado a rutas estáticas como:

- `/tratamientos/masajes/`
- `/tratamientos/corporales/`
- `/tratamientos/faciales/`
- `/productos/utsukusy/`
- `/el-centro/`
- `/contacto/`

La portada seguirá mostrando una selección breve y derivará a esas páginas. No hace falta añadir React u otro runtime hasta que aparezca una interacción que lo justifique. Una agenda real podría integrarse con un proveedor externo conservando WhatsApp como opción directa.
