# Core Guidelines — LlamadaAtendida Landing Page

> **Proyecto:** Landing Page Astro v7 para LlamadaAtendida  
> **Rol:** Desarrollador Fullstack Senior + Gestor de Proyecto  
> **Stack:** Astro v7 + Tailwind CSS v4 + TypeScript  
> **Template base:** Foxi Astro Theme (MIT License)  
> **Backend:** Desacoplado (CodeIgniter existente)  
> **Meta:** PageSpeed > 90, SEO impecable, accesible

---

## 1. Arquitectura del Proyecto

### Estructura de Carpetas (basada en Foxi)

```
llamadaatendida-landing/
├── public/
│   ├── favicon.svg
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── site.webmanifest
│   ├── robots.txt
│   ├── logo.svg
│   ├── logo-dark.svg
│   ├── og-image.jpg
│   └── images/
│       └── (imágenes descargadas de web original)
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero-contact-center.jpg
│   │   │   ├── service-phone.jpg
│   │   │   ├── service-email.jpg
│   │   │   ├── service-chat.jpg
│   │   │   ├── service-backoffice.jpg
│   │   │   ├── testimonial-carlos.jpg
│   │   │   ├── testimonial-laura.jpg
│   │   │   ├── testimonial-david.jpg
│   │   │   └── client-logos/
│   │   └── illustrations/
│   │       ├── hero-ia-humanos.svg
│   │       └── comparador-costes.svg
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Badge.astro
│   │   │   ├── Input.astro
│   │   │   ├── SectionHeader.astro
│   │   │   ├── TestimonialCard.astro
│   │   │   ├── FeatureCard.astro
│   │   │   ├── StepCard.astro
│   │   │   ├── LogoCloud.astro
│   │   │   ├── ScrollReveal.astro
│   │   │   └── MobileMenu.astro
│   │   │
│   │   ├── blocks/
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   ├── HeroSection.astro
│   │   │   ├── ThreePillarsSection.astro
│   │   │   ├── CostComparatorSection.astro
│   │   │   ├── ServicesSection.astro
│   │   │   ├── LegalComplianceSection.astro
│   │   │   ├── HowItWorksSection.astro
│   │   │   ├── TestimonialsSection.astro
│   │   │   ├── IntegrationsSection.astro
│   │   │   ├── CTASection.astro
│   │   │   └── ContactForm.astro
│   │   │
│   │   └── icons/
│   │       └── (iconos personalizados si es necesario)
│   │
│   ├── config/
│   │   ├── config.ts          # Config SEO, modo, animaciones
│   │   ├── navigationBar.ts  # Menú de navegación
│   │   ├── footerNavigation.ts # Menú del footer
│   │   ├── analytics.ts       # GA4, GTM, GSC
│   │   └── socialLinks.ts     # Redes sociales
│   │
│   ├── layouts/
│   │   ├── Layout.astro       # Layout principal (SEO, meta, scripts)
│   │   └── PageLayout.astro   # Layout para páginas internas
│   │
│   ├── pages/
│   │   ├── index.astro        # Página principal (landing)
│   │   ├── servicios.astro    # Página de servicios detallada
│   │   ├── como-funciona.astro # Página de cómo funciona
│   │   ├── nueva-ley.astro    # Página de cumplimiento legal
│   │   ├── contacto.astro     # Página de contacto
│   │   ├── aviso-legal.astro
│   │   ├── politica-privacidad.astro
│   │   ├── politica-cookies.astro
│   │   └── tecnologia.astro
│   │
│   ├── content/
│   │   └── (blog posts si se añade blog posteriormente)
│   │
│   ├── data/
│   │   ├── features.json      # Datos de los 3 pilares
│   │   ├── services.json      # Datos de servicios
│   │   ├── testimonials.json  # Testimonios de clientes
│   │   ├── steps.json         # Pasos de cómo funciona
│   │   ├── integrations.json  # Herramientas integradas
│   │   └── faq.json           # Preguntas frecuentes
│   │
│   ├── styles/
│   │   └── global.css         # Estilos globales y Tailwind imports
│   │
│   └── utils/
│       ├── seo.ts             # Helpers para meta tags
│       ├── schema.ts          # Generadores de Schema.org JSON-LD
│       └── animations.ts      # Utilidades de animación
│
├── .agents/
│   ├── brand-assets.md
│   └── core-guidelines.md
│
├── astro.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 2. Reglas de Desarrollo

### 2.1 Astro Best Practices

- **Zero JS by default:** Astro envía 0KB de JavaScript al cliente. Mantenerlo así salvo en componentes interactivos.
- **Islands Architecture:** Usar `client:*` directives SOLO cuando sea estrictamente necesario:
  - `client:load` — Para componentes visibles inmediatamente (ej: menú móvil, toggle dark mode)
  - `client:idle` — Para componentes que pueden esperar a que la página esté idle
  - `client:visible` — Para componentes bajo el fold (ej: comparador interactivo)
  - `client:media` — Para componentes condicionales a breakpoint
- **Content Collections:** Usar para blog, testimonios y FAQs si crecen en volumen.
- **Image Optimization:** Usar `<Image />` de `astro:assets` para TODAS las imágenes. Genera WebP automático.
- **View Transitions:** Implementar `ViewTransitions` de Astro para navegación fluida entre páginas.

### 2.2 Tailwind CSS v4

- Usar **CSS-first configuration** (no `tailwind.config.js` tradicional, sino `@theme` en CSS).
- Definir colores de marca en `src/styles/global.css` con `@theme`.
- Usar clases utilitarias. **NO escribir CSS custom** salvo para animaciones complejas.
- Mobile-first: empezar estilos sin prefijo, añadir `md:`, `lg:` para desktop.
- Agrupar clases largas con `@apply` solo en componentes reutilizables.

### 2.3 TypeScript

- **Strict mode activado** en `tsconfig.json`.
- Tipar TODOS los props de componentes Astro.
- Usar interfaces para datos de JSON (features, services, testimonials).
- No usar `any`. Usar `unknown` + type guards si es necesario.

### 2.4 Performance Budget

| Métrica | Objetivo | Máximo aceptable |
|---------|----------|----------------|
| First Contentful Paint (FCP) | < 1.0s | 1.5s |
| Largest Contentful Paint (LCP) | < 1.5s | 2.5s |
| Time to Interactive (TTI) | < 2.0s | 3.5s |
| Cumulative Layout Shift (CLS) | < 0.05 | 0.1 |
| Total Blocking Time (TBT) | < 100ms | 300ms |
| Speed Index | < 1.5s | 3.0s |
| PageSpeed Score | > 95 | 90 |
| Bundle JS (initial) | < 50KB | 100KB |
| Bundle CSS (initial) | < 30KB | 50KB |
| Imágenes totales (landing) | < 500KB | 1MB |

### 2.5 Accesibilidad (WCAG 2.1 AA)

- Todos los botones y enlaces deben tener texto accesible o `aria-label`.
- Formularios: etiquetas `<label>` explícitas, mensajes de error asociados con `aria-describedby`.
- Contraste mínimo 4.5:1 para texto normal, 3:1 para texto grande.
- Navegación por teclado funcional en todos los componentes interactivos.
- Skip link al contenido principal.
- Focus visible en todos los elementos interactivos.
- Animaciones respetan `prefers-reduced-motion`.
- Idioma de página: `lang="es-ES"`.

---

## 3. SEO Técnico

### 3.1 Meta Tags por Página

Cada página `.astro` DEBE incluir:

```astro
<head>
  <title>{pageTitle} | LlamadaAtendida</title>
  <meta name="description" content={pageDescription} />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={canonicalUrl} />

  <!-- Open Graph -->
  <meta property="og:title" content={ogTitle} />
  <meta property="og:description" content={ogDescription} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="es_ES" />
  <meta property="og:site_name" content="LlamadaAtendida" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={ogTitle} />
  <meta name="twitter:description" content={ogDescription} />
  <meta name="twitter:image" content={ogImage} />

  <!-- Schema.org -->
  <script type="application/ld+json" set:html={JSON.stringify(schema)} />
</head>
```

### 3.2 Sitemap y Robots

- Generar `sitemap-index.xml` y `sitemap-0.xml` con `@astrojs/sitemap`.
- `robots.txt` debe apuntar al sitemap:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://llamadaatendida.com/sitemap-index.xml
  ```

### 3.3 URLs Amigables

| Página | URL |
|--------|-----|
| Home | `/` |
| Servicios | `/servicios` |
| Cómo funciona | `/como-funciona` |
| Nueva Ley | `/nueva-ley` |
| Tecnología | `/tecnologia` |
| Contacto | `/contacto` |
| Aviso Legal | `/aviso-legal` |
| Política Privacidad | `/politica-privacidad` |
| Política Cookies | `/politica-cookies` |

### 3.4 Schema.org Estructuras

**Organization (en todas las páginas):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LlamadaAtendida",
  "url": "https://llamadaatendida.com",
  "logo": "https://llamadaatendida.com/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-910-971-537",
    "contactType": "customer service",
    "availableLanguage": "Spanish"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Concepción Arenal 1, 1ºA",
    "addressLocality": "Alcorcón",
    "postalCode": "28924",
    "addressRegion": "Madrid",
    "addressCountry": "ES"
  }
}
```

**LocalBusiness (en home):**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LlamadaAtendida",
  "description": "Contact Center con IA y equipo humano especializado. Pago por uso.",
  "url": "https://llamadaatendida.com",
  "telephone": "+34-910-971-537",
  "email": "hola@llamadaatendida.com",
  "address": { ... },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "€€",
  "image": "https://llamadaatendida.com/og-image.jpg"
}
```

---

## 4. Componentes Principales (Especificación)

### 4.1 Navbar

- **Fijo** en top, transparente → blur + sombra al hacer scroll (usar `position: fixed` + IntersectionObserver).
- **Logo** a la izquierda (SVG, 32px altura).
- **Links** centrados/derecha: Inicio, Servicios, Cómo Funciona, Nueva Ley, Contacto.
- **CTA** derecha: "Hablar con un asesor" (botón primario pequeño).
- **Toggle dark mode** (icono sol/luna).
- **Menú móvil:** Hamburger → slide-in desde derecha.
- **Scroll behavior:** Al hacer scroll > 50px, navbar obtiene fondo blanco/oscuro con backdrop-blur.

### 4.2 HeroSection

- **Layout:** Dos columnas (texto izquierda, imagen/ilustración derecha) en desktop. Stack vertical en mobile.
- **Badge** superior: "Contact Center del Futuro" o "Nuevo: Agentes IA".
- **H1:** "El Contact Center del futuro: Inteligencia Artificial y agentes humanos integrados a tu medida."
- **Subtítulo:** Texto de propuesta de valor (pago por uso, sin costes fijos).
- **CTAs:** "Calcula tu Ahorro Ahora" (primario) + "Ver Cómo Funciona" (secundario outline).
- **Imagen:** Ilustración de IA + humanos o foto del equipo/contact center.
- **Trust signals:** Logos de clientes debajo del hero ("Empresas que confían en nosotros").
- **Animación:** Texto fade-in + slide-up staggered. Imagen fade-in desde derecha.

### 4.3 ThreePillarsSection

- **Layout:** 3 cards en fila (grid 3 cols) en desktop. Stack en mobile.
- **Título H2:** "Omnicanalidad inteligente para que no pierdas ninguna venta"
- **Cards:**
  1. Agentes de IA (Voz y Chat) — Icono `CpuChipIcon`
  2. WhatsApp Chatbots — Icono `ChatBubbleLeftRightIcon`
  3. Equipo Humano Especializado — Icono `UsersIcon`
- **Cada card:** Icono grande (48px) en círculo con fondo primary/10, título H3, descripción, sin imagen.
- **Hover:** Card eleva ligeramente, icono cambia a color primary.

### 4.4 CostComparatorSection

- **Layout:** Full-width, fondo `--color-tertiary` o `--color-gray-50`.
- **Título H2:** "¿Cuánto te cuesta un recepcionista interno vs. LlamadaAtendida?"
- **Descripción:** Explicación de costes fijos vs. pago por uso.
- **Componente interactivo:** Slider o inputs para:
  - Número de llamadas/mes
  - Duración media de llamada
  - Coste de recepcionista interno (€/mes)
- **Resultado dinámico:** Comparación visual (barras) mostrando ahorro.
- **Frase de cierre:** "Reduce tus costes operativos hasta en un 60% manteniendo una disponibilidad total."
- **CTA:** "Quiero empezar a ahorrar" (botón acento).
- **Nota:** Este componente puede requerir una island de React/Vue con `client:visible`.

### 4.5 ServicesSection

- **Layout:** Grid 2x2 en desktop, 1 col en mobile.
- **Título H2:** "¿Qué podemos hacer por tu negocio?"
- **4 Cards numeradas:**
  1. Atención al Cliente Telefónica — `PhoneIcon`
  2. Gestión de Correos Electrónicos — `EnvelopeIcon`
  3. Gestión de Chat Web y WhatsApp — `ChatBubbleOvalLeftEllipsisIcon`
  4. Backoffice y Tareas Administrativas — `ClipboardDocumentListIcon`
- **Cada card:** Número grande (01, 02...), icono, título H3, descripción.
- **Imagen lateral opcional:** Mockup del servicio (descargada de web original).

### 4.6 LegalComplianceSection

- **Layout:** Dos columnas (texto izquierda, imagen/ilustración derecha).
- **Título H2:** "Te ayudamos a cumplir la nueva Ley de Atención al Cliente"
- **Texto:** Explicación de la normativa y cómo LA cumple.
- **Puntos clave:** Lista con iconos check (5 puntos de la ley).
- **Badge:** "Cumplimiento 100% legal" (color success).
- **CTA:** "Saber más" → enlace a `/nueva-ley`.

### 4.7 HowItWorksSection

- **Layout:** 4 pasos en horizontal (línea conectando) en desktop. Vertical en mobile.
- **Título H2:** "Tu Contact Center listo en 4 sencillos pasos"
- **Pasos:**
  1. Configura tus instrucciones — `Cog6ToothIcon`
  2. Activamos la tecnología — `CpuChipIcon`
  3. Formamos al equipo — `UsersIcon`
  4. Atendemos por ti — `PhoneIcon`
- **Cada paso:** Número en círculo, icono, título, descripción breve.
- **Conector:** Línea entre pasos (desktop).
- **CTA final:** "Empezar ahora" (botón primario).

### 4.8 TestimonialsSection

- **Layout:** Carrusel o grid de 3 tarjetas.
- **Título H2:** "Clientes felices, negocios que crecen"
- **Testimonios (de web original):**
  1. Carlos — Empresa de reformas
  2. Laura — Dueña de peluquería
  3. David — Agencia de viajes
- **Cada tarjeta:** Foto del cliente, nombre, empresa/sector, cita, estrellas (5).
- **Diseño:** Card con fondo blanco, borde sutil, comillas decorativas en primary.
- **Animación:** Fade-in staggered.

### 4.9 IntegrationsSection

- **Layout:** Grid de logos o iconos de herramientas.
- **Título H2:** "Integra con las herramientas que ya usas"
- **Herramientas:** WhatsApp Business, Google Calendar, CRMs, etc.
- **Diseño:** Logos en escala de grises, hover a color.

### 4.10 CTASection (Cierre)

- **Layout:** Full-width, fondo gradiente primary → primary-dark.
- **Título H2:** "No pierdas ni una llamada (ni una venta) más."
- **Subtítulo:** "Únete a las empresas que ya han optimizado su comunicación y reducido sus costes fijos."
- **Formulario:** Email + botón "Hablar con un asesor" (botón acento).
- **Trust:** "Sin compromiso. Cancela cuando quieras."

### 4.11 Footer

- **Layout:** 4 columnas en desktop.
  - Col 1: Logo + descripción breve + redes sociales.
  - Col 2: Producto (Servicios, Cómo funciona, Tecnología, Precios).
  - Col 3: Empresa (Sobre nosotros, Blog, Contacto, Trabaja con nosotros).
  - Col 4: Legal (Aviso legal, Privacidad, Cookies, Nueva Ley).
- **Bottom bar:** Copyright + "Diseñado con ❤️ en Madrid".
- **Contacto:** Email, teléfono, dirección.

---

## 5. Desacoplamiento del Backend

### 5.1 Principio

La landing page es **100% estática** (Astro SSG). No consume APIs del backend CodeIgniter en tiempo de ejecución.

### 5.2 Puntos de Integración Futuros

| Funcionalidad | Método | Fase |
|---------------|--------|------|
| Formulario de contacto | Formspree / Netlify Forms / HubSpot (iframe) | Fase 1 |
| Área privada | Redirección a `https://llamadaatendida.com/area-privada` | Fase 1 |
| Blog | Content Collections de Astro (MDX) | Fase 2 |
| Precios dinámicos | JSON estático actualizado manualmente | Fase 2 |
| Comparador de costes | JavaScript client-side (sin backend) | Fase 1 |
| Chat en vivo | Widget de terceros (Tidio, Intercom) | Fase 3 |

### 5.3 Formulario de Contacto

**Opción A (Recomendada - Fase 1):** Netlify Forms (si se deploya en Netlify)
```html
<form name="contacto" netlify>
  <input type="text" name="nombre" required />
  <input type="email" name="email" required />
  <input type="tel" name="telefono" />
  <textarea name="mensaje"></textarea>
  <button type="submit">Enviar</button>
</form>
```

**Opción B:** Formspree (funciona en cualquier hosting)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ...
</form>
```

**Opción C (Fase 2):** Endpoint del backend CodeIgniter vía `fetch` con CORS habilitado.

---

## 6. Despliegue

### 6.1 Build

```bash
npm run build
```

Genera carpeta `dist/` con HTML estático optimizado.

### 6.2 Hosting Recomendado

| Opción | Ventaja | Coste |
|--------|---------|-------|
| **Netlify** | Formularios integrados, CDN global, previews | Gratis / Pro $19/mes |
| **Vercel** | Edge network, analytics integrado | Gratis / Pro $20/mes |
| **Cloudflare Pages** | CDN más rápido, workers integrados | Gratis |
| **Servidor propio** | Control total, integración con CI existente | Coste servidor |

### 6.3 Configuración DNS

Si se usa hosting externo (Netlify/Vercel/Cloudflare):
1. Configurar CNAME `www` apuntando al dominio del hosting.
2. Configurar A record para apex domain.
3. Habilitar HTTPS automático (Let's Encrypt).
4. Configurar redirección `www` → apex o viceversa.

### 6.4 CI/CD (GitHub Actions)

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm run build
      - run: npm run test # si hay tests
      # Deploy step según hosting elegido
```

---

## 7. Testing y QA

### 7.1 PageSpeed Insights

Verificar en cada deploy:
- https://pagespeed.web.dev/
- Objetivo: > 90 en móvil y desktop.

### 7.2 Lighthouse CI

```bash
npm install -g @lhci/cli
lhci autorun
```

### 7.3 Validadores

- HTML: https://validator.w3.org/
- CSS: https://jigsaw.w3.org/css-validator/
- Accesibilidad: axe DevTools (Chrome extension)
- SEO: https://seositecheckup.com/
- Structured Data: https://search.google.com/test/rich-results

### 7.4 Cross-browser

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### 7.5 Responsive Testing

- 320px (iPhone SE)
- 375px (iPhone 12/13/14)
- 414px (iPhone 14 Pro Max)
- 768px (iPad)
- 1024px (iPad Pro / Laptop)
- 1440px (Desktop)
- 1920px (Wide)

---

## 8. Mantenimiento

### 8.1 Dependencias

Revisar mensualmente:
```bash
npm outdated
npm audit
```

### 8.2 Contenido

- Actualizar testimonios cada trimestre.
- Revisar precios y ofertas mensualmente.
- Añadir nuevos clientes al logo cloud.
- Mantener Schema.org actualizado con cambios de contacto.

### 8.3 Monitorización

- Google Search Console: revisar indexación y errores semanalmente.
- Google Analytics 4: revisar métricas de conversión mensualmente.
- Uptime monitor (UptimeRobot / Pingdom): alerta si cae la web.

---

## 9. Glosario de Decisiones de Diseño

| Decisión | Justificación |
|----------|---------------|
| **Astro v7 vs Next.js** | Astro genera 0KB JS por defecto. Ideal para landing estática con PageSpeed > 90. |
| **Foxi Theme como base** | Estructura probada, componentes modulares, SEO-friendly, MIT license. |
| **Tailwind v4 CSS-first** | Menos configuración, mejor performance, futuro-proof. |
| **Inter como tipografía** | Fuente del sistema de Tailwind, carga rápida, excelente legibilidad. |
| **Modo oscuro** | Expectativa de usuarios modernos, mejora accesibilidad, diferenciador. |
| **Desacoplado del backend** | Permite migrar/evolucionar la landing sin tocar el CRM existente. |
| **Comparador client-side** | Evita llamadas al backend, funciona offline, más rápido. |
| **Imágenes originales reutilizadas** | Consistencia de marca, ahorro de costes de producción. |

---

## 10. Checklist de Lanzamiento

- [ ] Todas las secciones implementadas según `content-llamadaatendida.md`
- [ ] Colores de marca aplicados en Tailwind config
- [ ] Logo SVG en navbar y footer
- [ ] Favicon completo generado
- [ ] OG Image 1200x630px creada y validada
- [ ] Meta tags completos en todas las páginas
- [ ] Schema.org JSON-LD en home y páginas clave
- [ ] Sitemap generado automáticamente
- [ ] robots.txt configurado
- [ ] Analytics (GA4 + GTM) integrados
- [ ] Formulario de contacto funcional
- [ ] Enlaces a área privada redirigen correctamente
- [ ] Testimonios reales de clientes incluidos
- [ ] Imágenes optimizadas (WebP, lazy loading)
- [ ] Modo oscuro funcional
- [ ] Menú móvil funcional
- [ ] Scroll animations implementadas
- [ ] PageSpeed > 90 en móvil y desktop
- [ ] Lighthouse accesibilidad > 95
- [ ] Validación W3C HTML sin errores
- [ ] Validación W3C CSS sin errores
- [ ] Cross-browser testeado
- [ ] Responsive testeado en todos los breakpoints
- [ ] DNS y SSL configurados
- [ ] Redirecciones 301 configuradas (si aplica)
- [ ] Backup del proyecto en repositorio Git
