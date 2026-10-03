# Guía de estilo — Estética Neira

## Concepto

**Un refugio de bienestar sereno y contemporáneo.** La identidad mezcla una composición editorial, fotografía sensorial y una interfaz cálida y directa. Debe sentirse cuidada y elegante, sin sacrificar la legibilidad ni la reserva sencilla.

## Paleta

Los tokens están definidos en `src/styles/global.css` como variables CSS.

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-paper` | `#FFFDF9` | Tarjetas y superficies claras |
| `--color-ivory` | `#F8F6F1` | Fondo general y navegación |
| `--color-sand` | `#E8DDCE` | Fondos y detalles suaves |
| `--color-sand-deep` | `#D6C5AF` | Acentos secundarios |
| `--color-lavender` | `#E9E4ED` | Sección de rituales y chips |
| `--color-lavender-deep` | `#6D6074` | Énfasis tipográfico en lavanda |
| `--color-ink` | `#292723` | Texto principal y botones |
| `--color-muted` | `#716B63` | Texto secundario |
| `--color-gold` | `#B69A62` | Filetes, sellos e iconos decorativos |
| `--color-gold-dark` | `#8F7445` | Acentos pequeños con más contraste |
| `--color-night` | `#2A2927` | Bloque de reserva y pie |

El dorado es un acento visual, no el color de párrafos pequeños. Los textos sobre fondos claros usan carbón; la sección oscura combina texto marfil con dorado claro.

## Tipografía

- **Cormorant Garamond:** titulares, nombre de marca y frases editoriales. Mantener pesos 400–600 y dar aire a los títulos.
- **DM Sans:** navegación, controles, precios y texto de lectura. El tamaño base es 16 px.
- Las fuentes se sirven desde el proyecto mediante Fontsource para evitar una petición adicional a un proveedor externo.

## Composición y espaciado

- Contenedor centrado de hasta 1320 px, con márgenes fluidos mediante `--page-gutter`.
- Secciones amplias; en móvil se reduce el espacio vertical manteniendo separación clara entre grupos.
- La composición combina columnas asimétricas en escritorio y una sola columna en móvil.
- Las fotografías pueden enmarcarse con arcos, filetes finos y pequeñas notas superpuestas; no añadir decoración que compita con el contenido.
- Las tarjetas usan bordes discretos y superficies claras. Evitar sombras pesadas y degradados saturados.

## Componentes e interacción

- CTA principal oscuro en superficies claras; CTA dorado sobre la sección oscura.
- Botones y enlaces táctiles con altura mínima de 44 px, foco visible y texto explícito.
- En pantallas pequeñas, el menú se abre con un botón accesible y la reserva queda disponible en una barra fija inferior.
- Movimiento limitado a transiciones suaves; se respeta `prefers-reduced-motion`.
- No ocultar información necesaria tras hover, carruseles automáticos o texto de bajo contraste.

## Fotografía y textura

- La primera maqueta usa imágenes remotas de Unsplash como referencias visuales temporales.
- Antes de producción, sustituirlas por fotos autorizadas del local, cabinas, tratamientos y productos.
- La textura de grano se genera con SVG/CSS de baja opacidad; no cargar un vídeo de fondo ni una imagen de textura pesada.
- Mantener recortes tranquilos, luz cálida y tonos naturales. Las imágenes llevan texto alternativo descriptivo.

## Contenido

- Voz cercana, tranquila y profesional; frases breves y concretas.
- Describir los faciales como cosméticos, superficiales y no invasivos.
- Evitar promesas médicas o resultados garantizados.
- Los precios, tiempos, teléfono y horario actuales son demostrativos y deben reemplazarse antes de publicar.
