# Define the updated content for brand-assets.md aligning with the clean, light Bigspring style,
# integrating core-guidelines and content-llamadaatendida, with optimized colors and prioritized WhatsApp conversion.

brand_assets_content = """# Brand Assets — LlamadaAtendida (v2)

> **Proyecto:** Landing Page — Astro v7
> **Cliente:** LlamadaAtendida (Contact Center / CRM / IA)
> **Arquitectura:** Frontend estático desacoplado del backend CodeIgniter (consumo vía API local)
> **Plantilla base:** Foxi Astro Theme (oxygenna-themes)
> **Referencia visual:** Bigspring-style (Estilo limpio, luminoso, predominio de blanco, espacios amplios y sombras suaves)

---

## 1. Identidad de Marca

| Campo | Valor |
|-------|-------|
| **Nombre** | LlamadaAtendida |
| **Eslogan** | "Delega tus llamadas, correos y chat, en un equipo profesional." |
| **Sector** | Contact Center / Atención al Cliente / CRM / Inteligencia Artificial |
| **Propuesta de valor** | IA + Humanos + Pago por uso. Sin costes fijos. |
| **Tono de voz** | Profesional, cercano, tecnológico, confiable, eficiente |
| **Idioma principal** | Español (es-ES) |
| **Moneda** | EUR (€) |
| **País objetivo** | España |

---

## 2. Logo y Favicon

- **Archivo Principal:** Logo original de LlamadaAtendida.
- **Colores Corporativos Obligatorios:** `--color-primary` (`#087f8e`) y `--color-accent` (`#ffb700`).
- **Formatos:** SVG (principal para máxima nitidez y rendimiento), PNG fallback.
- **Ubicación en Proyecto:**
  - `public/logo.svg` (Versión principal para fondos claros)
  - `public/logo-dark.svg` (Versión optimizada con texto claro para fondos oscuros/footer)
  - `public/favicon.svg` (Favicon principal vectorial)
- **Tamaño mínimo legible:** 32px de altura en desktop, 28px en mobile.
- **Espaciado de seguridad:** Mínimo 1x la altura del logo en todos los lados para evitar contaminación visual.

---

## 3. Paleta de Colores (Optimización Bigspring: Limpia y Luminosa)

*Nota: Se ha optimizado la escala de colores para asegurar una estética moderna, aireada y de alta conversión ("Bigspring style"), donde el color blanco y los tonos neutros muy suaves dominan el espacio visual, relegando los tonos oscuros al texto y elementos de contraste.*

### Colores Primarios y de Acento (Del Logo - Obligatorios)

| Token | Hex | Uso y Aplicación Visual |
|-------|-----|-------------------------|
| `--color-primary` | `#087f8e` | **Teal Corporativo.** Encabezados principales, enlaces, botones primarios, iconos y acentos estructurales. |
| `--color-primary-dark` | `#066b78` | Hover de botones primarios, estados activos y texto de alto énfasis en fondos claros. |
| `--color-primary-light` | `#0a9aaa` | Bordes activos, badges secundarios y sutiles degradados. |
| `--color-accent` | `#ffb700` | **Amarillo de Conversión.** CTAs críticos, botones destacados ("Calcula tu Ahorro"), badges de alerta o novedad, e iconos de valoración (estrellas). |
| `--color-accent-dark` | `#e6a500` | Hover del botón de acento y bordes de elementos destacados. |

### Colores de Soporte (Estilo Aireado / Premium)

| Token | Hex | Uso y Aplicación Visual |
|-------|-----|-------------------------|
| `--color-secondary` | `#1e293b` | Títulos principales (H1, H2), garantizando legibilidad óptima y contraste elegante. |
| `--color-secondary-light` | `#334155` | Subtítulos y descripciones de tarjetas que requieren menor peso jerárquico. |
| `--color-tertiary` | `#f0fdfa` | Fondo de secciones alternas (tinte teal extremadamente suave). Clave para separar secciones sin romper la estética blanca de Bigspring. |
| `--color-success` | `#10b981` | Checkmarks de la sección de Ley de Atención al Cliente, badges de validación y estados de éxito. |
| `--color-warning` | `#f59e0b` | Alertas, llamadas de atención moderadas. |
| `--color-danger` | `#ef4444` | Elementos de error, comparativas de costes desfavorables (barra de coste interno). |
| `--color-info` | `#3b82f6` | Notas técnicas, tooltips informativos. |

### Escala de Neutros (Estructuración Visual)

| Token | Hex | Uso y Aplicación Visual |
|-------|-----|-------------------------|
| `--color-white` | `#ffffff` | **Fondo dominante de la landing.** Espacio en blanco generoso que define el estilo de referencia. |
| `--color-gray-50` | `#f8fafc` | Fondos de tarjetas secundarias o áreas de testimonios. |
| `--color-gray-100` | `#f1f5f9` | Bordes ultra-suaves de tarjetas y separadores delicados. |
| `--color-gray-200` | `#e2e8f0` | Bordes estándar en elementos interactivos fuera de foco. |
| `--color-gray-300` | `#cbd5e1` | Bordes de inputs inactivos. |
| `--color-gray-400` | `#94a3b8` | Placeholders de formularios y captions discretos. |
| `--color-gray-600` | `#475569` | Texto de párrafos principales. Lectura relajada y moderna. |
| `--color-gray-800` | `#1e293b` | Títulos intermedios (H3, H4) para un contraste óptimo. |
| `--color-gray-900` | `#0f172a` | Texto de máximo contraste (títulos H1 y textos destacados). |

### Modo Oscuro (Uso Limitado)

*Para respetar la ligereza de la plantilla de referencia, el modo oscuro se mantiene como un toggle secundario. La experiencia por defecto debe ser excepcionalmente limpia y clara.*

| Token | Hex | Uso en Modo Oscuro |
|-------|-----|--------------------|
| `--color-dark-bg` | `#0f172a` | Fondo principal (Dark Mode). |
| `--color-dark-surface` | `#1e293b` | Tarjetas y contenedores elevados. |
| `--color-dark-border` | `#334155` | Bordes discretos. |
| `--color-dark-text` | `#f1f5f9` | Texto principal en modo oscuro. |

---

## 4. Tipografía

### Familia Principal: Inter

Se utilizará la tipografía **Inter** (cargada mediante `@fontsource/inter` o Google Fonts) para todo el proyecto, garantizando una carga rápida y una visualización óptima en pantallas de alta densidad.

| Elemento | Tamaño Desktop | Tamaño Mobile | Peso (Weight) | Altura de Línea (Leading) | Color Sugerido |
|----------|---------------|---------------|---------------|---------------------------|----------------|
| **H1 (Hero)** | 56px / 3.5rem | 36px / 2.25rem | 800 (ExtraBold) | 1.1 | `--color-gray-900` |
| **H2 (Sección)** | 40px / 2.5rem | 28px / 1.75rem | 700 (Bold) | 1.2 | `--color-gray-900` |
| **H3 (Subsección)** | 28px / 1.75rem | 22px / 1.375rem | 600 (SemiBold) | 1.3 | `--color-gray-800` |
| **H4 (Card Title)** | 20px / 1.25rem | 18px / 1.125rem | 600 (SemiBold) | 1.4 | `--color-gray-800` |
| **Body (Párrafo)** | 16px / 1rem | 16px / 1rem | 400 (Regular) | 1.7 | `--color-gray-600` |
| **Body Small** | 14px / 0.875rem | 14px / 0.875rem | 400 (Regular) | 1.6 | `--color-gray-500` |
| **Caption** | 12px / 0.75rem | 12px / 0.75rem | 500 (Medium) | 1.5 | `--color-gray-400` |

---

## 5. Espaciado y Maquetación (Layout)

### Sistema de Espaciado (Escala Estándar Tailwind)

| Token | Valor | Uso Típico |
|-------|-------|------------|
| `space-2` | 8px | Separación icono-texto. |
| `space-4` | 16px | Padding de elementos móviles, separación interna menor. |
| `space-6` | 24px | Padding estándar de tarjetas, brecha entre bloques comunes. |
| `space-8` | 32px | Espaciado entre elementos en un grid. |
| `space-12` | 48px | Padding vertical en secciones móviles. |
| `space-16` | 64px | Separación estándar entre secciones (Desktop). |
| `space-20` | 80px | Padding vertical para secciones amplias como el Hero. |

### Contenedor y Rejilla

- **Ancho Máximo (Desktop):** `1280px` (`max-w-7xl` con `mx-auto`).
- **Padding Lateral:** `px-4` (Mobile), `px-6` (Tablet), `px-8` (Desktop).
- **Alineación:** Dominio de simetría axial y asimetrías controladas estilo Bigspring (alternancia de columnas de texto e imagen).

---

## 6. Componentes de Interfaz (UI) Optimizados

### Botones (CTAs Claros y Eficientes)

1. **Botón Primario (Teal)**
   - Estilo: Fondo `--color-primary` (`#087f8e`), texto `--color-white`, esquinas redondeadas `rounded-lg` (8px).
   - Efecto: Hover sutil con escalado (`scale-102`), cambio a `--color-primary-dark` (`#066b78`) y sombra difusa (`shadow-md`).

2. **Botón de Conversión / Acento (Destacado Amarillo)**
   - *Este botón se reserva para acciones críticas de captación, como "Calcula tu Ahorro Ahora" o "Hablar con un asesor".*
   - Estilo: Fondo `--color-accent` (`#ffb700`), texto `--color-gray-900` (alto contraste), fuente en peso 700.
   - Sombra: `shadow-[0_4px_14px_rgba(255,183,0,0.3)]` para separarlo físicamente del plano de la página.

3. **Botón Secundario (Outline)**
   - Estilo: Fondo transparente, borde de 2px en `--color-primary`, texto `--color-primary`.
   - Hover: Fondo `--color-primary`, texto `--color-white`.

### Tarjetas (Cards Modernas)

- Estilo: Fondo `--color-white`, borde sutil de 1px en `--color-gray-100`, radio de curvatura `rounded-2xl` (16px), sombra ultra-suave (`shadow-sm`).
- Hover: Elevación visual (`translate-y-[-4px]`), incremento de sombra a `shadow-md` y transición fluida de `300ms` con curva `cubic-bezier(0.4, 0, 0.2, 1)`.

### Formulario de Contacto Rápido

- Inputs: Fondo `--color-white`, borde de 1px en `--color-gray-300`, radio `rounded-lg`. Focus activo con borde en `--color-primary` y un anillo sutil de `--color-primary-light/20` (`ring-2`).

---

## 7. Alta Prioridad: Conversión por WhatsApp

*Se eleva la prioridad de la integración de WhatsApp en la Fase 1 para el mercado español, donde el canal tiene un ratio de conversión inmediato sumamente alto.*

- **Botón Flotante de WhatsApp:** Ubicado de manera persistente en la esquina inferior derecha.
- **Acción:** Abre un canal directo con un mensaje preconfigurado (ej: *"Hola LlamadaAtendida, me gustaría recibir más información sobre el servicio de atención para mi empresa."*).
- **Diseño:** Icono de WhatsApp en verde oficial o adaptado con la paleta de marca, con efecto de pulso sutil para capturar la atención sin ser intrusivo.

---

## 8. Integraciones y Desacoplamiento de Backend (XAMPP / Local)

El proyecto está diseñado para funcionar de manera **100% estática (Astro SSG)**, optimizando los tiempos de respuesta. Las interacciones dinámicas se resuelven de forma directa:

- **Formularios de Captación:** En lugar de depender de servicios en la nube externos (como Netlify Forms o Formspree), el componente `<ContactForm />` realizará un envío `fetch` de tipo `POST` directamente a la API local de tu backend en CodeIgniter (ej. `http://localhost/llamadaatendida-backend/api/contacto`).
- **Configuración de CORS:** Asegúrate de habilitar en tu controlador de CodeIgniter el acceso desde el puerto de desarrollo local de Astro (habitualmente `http://localhost:4321`) mediante:

## 9. Mapeo y Optimización de Imágenes
Todas las imágenes se cargarán utilizando la biblioteca de optimización nativa de Astro** (astro:assets con el componente <Image />) para garantizar que las descargas se realicen en formato WebP con compresión optimizada al 85%.

src/assets/images/hero-contact-center.jpg -> Imagen descriptiva de alta calidad del contact center (carga prioritaria: loading="eager").

src/assets/images/service-*.jpg -> Imágenes individuales por tipo de servicio (carga perezosa: loading="lazy").

src/assets/images/testimonial-*.jpg -> Avatares circulares de 80x80px para la sección de confianza.
"""
