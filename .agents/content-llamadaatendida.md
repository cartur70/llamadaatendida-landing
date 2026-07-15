# Content — LlamadaAtendida Landing Page

> **Documento de contenido para Antigravity**  
> **Proyecto:** Landing Page Astro v7  
> **Idioma:** Español (es-ES)  
> **Moneda:** EUR (€)  
> **Actualizado:** Julio 2026

---

## Estructura de la Landing (Single Page)

La landing consta de **8 secciones principales** + Navbar + Footer. Todas las secciones están en la página de inicio (`index.astro`), excepto las páginas legales que son independientes.

---

## SECCIÓN 0: NAVBAR

### Posición
Fija en la parte superior de la página. Transparente al inicio, se vuelve sólida con blur al hacer scroll.

### Elementos

| Posición | Elemento | Texto / Contenido | Enlace |
|----------|----------|-------------------|--------|
| Izquierda | Logo | SVG de LlamadaAtendida (colores #087f8e y #ffb700) | `/` |
| Centro-Izq | Link nav | Inicio | `/` |
| Centro-Izq | Link nav | Servicios | `/servicios` |
| Centro | Link nav | Cómo Funciona | `/como-funciona` |
| Centro-Der | Link nav | Nueva Ley | `/nueva-ley` |
| Centro-Der | Link nav | Tecnología | `/tecnologia` |
| Derecha | CTA Button | "Hablar con un asesor" | `/contacto` o scroll a sección CTA |
| Derecha | Toggle | Icono sol/luna (dark mode) | — |

### Mobile
- Hamburger icon (3 líneas) a la derecha del CTA.
- Menú desliza desde la derecha con fondo blanco/oscuro + backdrop blur.
- Links en lista vertical con padding generoso.

---

## SECCIÓN 1: HERO

### Layout
- **Desktop:** Dos columnas (55% texto / 45% imagen).
- **Mobile:** Stack vertical (texto arriba, imagen abajo).
- **Padding vertical:** 120px arriba, 80px abajo (desktop). 80px arriba, 48px abajo (mobile).
- **Fondo:** Blanco (`--color-white`) o gradiente muy sutil de `--color-tertiary` a blanco.

### Badge Superior
```
Texto: "🚀 Nuevo: Agentes de IA integrados"
Estilo: Badge con fondo `--color-accent/15`, texto `--color-accent-dark`, bordes redondeados.
```

### Título Principal (H1)
```
Texto: El Contact Center del futuro: Inteligencia Artificial y agentes humanos integrados a tu medida.
Estilo: Font-weight 800, 56px desktop / 36px mobile, color --color-gray-900, line-height 1.1
```

### Subtítulo
```
Texto: Optimiza tu atención al cliente, automatiza con Agentes IA y chatbots de WhatsApp, y delega en un equipo profesional. Todo bajo un sistema flexible de pago por uso y sin costes fijos.
Estilo: Font-weight 400, 18px, color --color-gray-600, line-height 1.7, max-width 640px
```

### Botones de Acción (CTAs)

**Botón Primario (izquierda):**
```
Texto: "Calcula tu Ahorro Ahora"
Enlace: #comparador (scroll a sección 3)
Estilo: Botón primario (fondo #087f8e, texto blanco, padding 14px 28px, rounded-lg)
Icono opcional: Flecha hacia abajo (ArrowDownIcon)
```

**Botón Secundario (derecha):**
```
Texto: "Ver Cómo Funciona"
Enlace: #como-funciona (scroll a sección 6)
Estilo: Botón outline (borde 2px #087f8e, texto #087f8e, padding 12px 26px, rounded-lg)
Icono opcional: PlayCircleIcon
```

### Imagen / Ilustración (Columna Derecha)
```
Archivo: src/assets/illustrations/hero-ia-humanos.svg (o hero-contact-center.jpg de web original)
Descripción: Ilustración que representa la conexión entre IA (circuitos, nodos) y personas (agentes humanos).
Tamaño: ~500x400px
Alt text: "Agentes de IA y equipo humano trabajando juntos en el contact center de LlamadaAtendida"
Lazy: No (es hero, carga eager)
```

### Trust Signals (Debajo del hero)
```
Título pequeño: "Empresas que ya confían en nosotros"
Logos: Grid de logos de clientes actuales (escala de grises, opacidad 60%, hover 100%)
Estilo: 5-6 logos en fila, centrados, max-height 32px cada uno
```

### Animaciones
- Badge: fade-in + slide-down (delay 0ms)
- H1: fade-in + slide-up (delay 100ms)
- Subtítulo: fade-in + slide-up (delay 200ms)
- CTAs: fade-in + slide-up (delay 300ms)
- Imagen: fade-in + slide-left (delay 200ms)
- Trust signals: fade-in (delay 500ms)

---

## SECCIÓN 2: LOS TRES PILARES DE TU ATENCIÓN

### Layout
- **Fondo:** `--color-gray-50` (gris muy claro)
- **Padding:** 96px vertical (desktop), 64px (mobile)
- **Contenedor:** max-width 1280px, centrado

### Título de Sección (H2)
```
Texto: Omnicanalidad inteligente para que no pierdas ninguna venta
Estilo: Font-weight 700, 40px desktop / 28px mobile, color --color-gray-900, text-align center
```

### Subtítulo de Sección
```
Texto: Combina la potencia de la Inteligencia Artificial con el toque humano de nuestros agentes especializados. Un sistema único que cubre todos tus canales de comunicación.
Estilo: Font-weight 400, 18px, color --color-gray-500, text-align center, max-width 700px, margin auto
```

### Grid de 3 Cards

**Card 1: Agentes de IA (Voz y Chat)**
```
Icono: CpuChipIcon (48px, color --color-primary)
Círculo de fondo: 56px, bg --color-primary/10, rounded-full
Título (H3): Agentes de IA (Voz y Chat)
Descripción: Automatización 24/7. Respuestas inmediatas a dudas frecuentes, filtrado de llamadas y atención instantánea sin tiempos de espera.
Estilo card: bg white, border 1px --color-gray-100, rounded-2xl, p-6, shadow-sm, hover:shadow-md hover:-translate-y-1
```

**Card 2: WhatsApp Chatbots**
```
Icono: ChatBubbleLeftRightIcon (48px, color --color-primary)
Círculo de fondo: 56px, bg --color-primary/10, rounded-full
Título (H3): WhatsApp Chatbots
Descripción: El canal favorito de tus clientes, automatizado. Captación de leads, respuestas automáticas y agendamiento de citas en tiempo real.
Estilo card: Igual que Card 1
```

**Card 3: Equipo Humano Especializado**
```
Icono: UsersIcon (48px, color --color-primary)
Círculo de fondo: 56px, bg --color-primary/10, rounded-full
Título (H3): Equipo Humano Especializado
Descripción: Empatía y resolución. Profesionales formados con tus instrucciones que intervienen en los casos complejos, cierran ventas y atienden con tu saludo corporativo.
Estilo card: Igual que Card 1
```

### Animaciones
- Título: fade-in + slide-up (scroll trigger)
- Cards: fade-in + slide-up con stagger 150ms entre cada una

---

## SECCIÓN 3: EL COMPARADOR DE COSTES

### Layout
- **ID:** `#comparador`
- **Fondo:** `--color-tertiary` (#f0fdfa — blanco con tinte teal muy suave)
- **Padding:** 96px vertical
- **Contenedor:** max-width 1000px, centrado

### Título de Sección (H2)
```
Texto: ¿Cuánto te cuesta un recepcionista interno vs. LlamadaAtendida?
Estilo: Font-weight 700, 40px / 28px, color --color-gray-900, text-align center
```

### Texto Introductorio
```
Texto: Mantener un equipo interno implica nóminas, bajas, vacaciones, herramientas informáticas y espacio de oficina. Con nuestro sistema de pago por uso, pasas de un coste fijo rígido a un coste variable optimizado. Solo pagas por los minutos reales que consumes.
Estilo: Font-weight 400, 18px, color --color-gray-600, text-align center, max-width 800px, margin auto
```

### Componente Comparador Interactivo

**Inputs del usuario:**
```
1. Número de llamadas al mes:
   - Tipo: range slider + number input
   - Min: 100, Max: 5000, Step: 100
   - Default: 500

2. Duración media por llamada (minutos):
   - Tipo: range slider + number input
   - Min: 1, Max: 10, Step: 0.5
   - Default: 3

3. Coste mensual recepcionista (€):
   - Tipo: number input
   - Min: 800, Max: 3000
   - Default: 1500
```

**Resultado visual:**
```
Gráfico de barras comparativo:
- Barra izquierda: "Recepcionista Interno" — color --color-danger (rojo)
  - Valor: €{coste_interno} / mes
  - Incluye: nómina + SS + vacaciones + baja + espacio + herramientas

- Barra derecha: "LlamadaAtendida" — color --color-success (verde)
  - Valor: €{coste_la} / mes
  - Incluye: solo minutos consumidos, sin costes fijos

- Diferencia: "Ahorras €{ahorro} / mes" — color --color-accent (amarillo)
- Porcentaje: "{porcentaje}% más económico"
```

**Fórmula (client-side JS):**
```javascript
// Coste interno = input directo del usuario (default 1500€)
// Coste LA = (llamadas × duración × tarifa_por_minuto)
// Tarifa estimada: 0.45€/minuto (ajustable)
// Ahorro = coste_interno - coste_LA
// Porcentaje = (ahorro / coste_interno) × 100
```

### Frase de Cierre
```
Texto: Reduce tus costes operativos hasta en un 60% manteniendo una disponibilidad total.
Estilo: Font-weight 600, 20px, color --color-primary, text-align center
Icono: ChartBarIcon (24px) al inicio del texto
```

### CTA
```
Texto: Quiero empezar a ahorrar
Enlace: /contacto
Estilo: Botón acento (fondo #ffb700, texto #1e293b, font-weight 700)
```

### Animaciones
- Sección completa: fade-in al entrar en viewport
- Barras del comparador: animación de crecimiento desde 0 al ancho final (800ms, ease-out)
- Números: contador animado (count-up) al entrar en viewport

---

## SECCIÓN 4: NUESTROS SERVICIOS (DETALLE)

### Layout
- **Fondo:** Blanco
- **Padding:** 96px vertical
- **Contenedor:** max-width 1280px

### Título de Sección (H2)
```
Texto: ¿Qué podemos hacer por tu negocio?
Estilo: Font-weight 700, 40px / 28px, color --color-gray-900, text-align center
```

### Subtítulo
```
Texto: Delega la gestión de tus canales de comunicación en expertos y concéntrate en hacer crecer tu negocio.
Estilo: Font-weight 400, 18px, color --color-gray-500, text-align center
```

### Grid de 4 Cards (2x2 desktop, 1 col mobile)

**Card 01: Atención al Cliente Telefónica**
```
Número: "01" (font-weight 800, 48px, color --color-primary/20)
Icono: PhoneIcon (32px, color --color-primary)
Título (H3): Atención al Cliente Telefónica
Descripción: Gestionamos tus llamadas entrantes con asesores especializados siguiendo tus rigurosos procedimientos establecidos. Tu saludo corporativo, tu protocolo, nuestra experiencia.
Imagen: service-phone.jpg (de web original, ubicada en src/assets/images/)
Alt text: "Agente de LlamadaAtendida atendiendo una llamada telefónica"
```

**Card 02: Gestión de Correos Electrónicos**
```
Número: "02"
Icono: EnvelopeIcon (32px, color --color-primary)
Título (H3): Gestión de Correos Electrónicos
Descripción: Mantén tu bandeja de entrada a cero. Clasificamos y respondemos tus emails corporativos en tiempo récord, con el tono y los procedimientos que tú definas.
Imagen: service-email.jpg (de web original)
Alt text: "Gestión profesional de correos electrónicos empresariales"
```

**Card 03: Gestión de Chat Web y WhatsApp**
```
Número: "03"
Icono: ChatBubbleOvalLeftEllipsisIcon (32px, color --color-primary)
Título (H3): Gestión de Chat Web y WhatsApp
Descripción: Convertimos las visitas de tu web en clientes reales atendiendo sus dudas en directo. Y con nuestros chatbots de WhatsApp, automatizas lo repetitivo sin perder el toque personal.
Imagen: service-chat.jpg (de web original)
Alt text: "Chat web y WhatsApp gestionados por agentes profesionales"
```

**Card 04: Backoffice y Tareas Administrativas**
```
Número: "04"
Icono: ClipboardDocumentListIcon (32px, color --color-primary)
Título (H3): Backoffice y Tareas Administrativas
Descripción: Delega la gestión de agendas, introducción de datos y labores administrativas en nuestro equipo para que tú te enfoques en vender. Eficiencia garantizada.
Imagen: service-backoffice.jpg (de web original)
Alt text: "Equipo de backoffice gestionando tareas administrativas"
```

### Estilo de Cards
```
Background: white
Border: 1px solid --color-gray-100
Border-radius: 16px
Padding: 32px
Layout interno: Número arriba a la izquierda, icono + título + descripción, imagen opcional abajo
Hover: shadow-lg, border-color --color-gray-200, translateY(-4px)
Transition: all 0.3s ease
```

### Animaciones
- Título: fade-in
- Cards: fade-in + slide-up con stagger 100ms

---

## SECCIÓN 5: CUMPLIMIENTO LEGAL

### Layout
- **Fondo:** `--color-gray-900` (fondo oscuro) o gradiente `--color-primary` → `--color-primary-dark`
- **Padding:** 96px vertical
- **Contenedor:** max-width 1280px
- **Texto:** Blanco / `--color-gray-100`

### Layout interno
- **Desktop:** Dos columnas (texto 55%, imagen/ilustración 45%)
- **Mobile:** Stack vertical

### Badge
```
Texto: "✓ Cumplimiento 100% legal"
Estilo: Badge con bg --color-success/20, texto --color-success, border 1px --color-success/30
```

### Título de Sección (H2)
```
Texto: Te ayudamos a cumplir la nueva Ley de Atención al Cliente
Estilo: Font-weight 700, 40px / 28px, color white
```

### Texto Principal
```
Texto: La normativa exige que las llamadas de información o postventa sean atendidas en menos de 3 minutos y que el usuario siempre tenga la opción de solicitar una interacción humana.

Con LlamadaAtendida garantizas el cumplimiento estricto de la ley: combinamos el triaje rápido de la IA con la transferencia inmediata a nuestros agentes humanos. Tranquilidad 100% legal para tu empresa.
Estilo: Font-weight 400, 18px, color --color-gray-200, line-height 1.7
```

### Lista de Puntos Clave (5 puntos de la ley)

```
1. ✓ Atención general, información, reclamaciones y llamadas postventa: atendidas en 3 minutos o menos.
2. ✓ Las reclamaciones se resuelven en un plazo máximo de 15 días.
3. ✓ En interrupción de suministros esenciales: informe de causa + tiempo límite de 2 horas.
4. ✓ Empresas con servicio continuo: atención 24 horas, 7 días a la semana.
5. ✓ Llamadas gratuitas: prohibida la transferencia a números de pago.
```

**Estilo de cada punto:**
```
Icono: CheckCircleIcon (24px, color --color-success)
Texto: Font-weight 400, 16px, color --color-gray-200
Layout: Flex row, gap-3, items-start
```

### CTA
```
Texto: Saber más sobre la nueva ley
Enlace: /nueva-ley
Estilo: Botón outline blanco (border 2px white, texto white, hover: bg white, texto --color-primary)
```

### Imagen / Ilustración (Columna Derecha)
```
Archivo: Ilustración de escudo/legal/seguridad (o imagen de web original si aplica)
Descripción: Ilustración que representa seguridad legal y cumplimiento normativo.
Alt text: "Cumplimiento de la Ley de Atención al Cliente con LlamadaAtendida"
```

### Animaciones
- Sección: fade-in
- Puntos de la lista: fade-in + slide-right con stagger 100ms
- Imagen: fade-in + slide-left

---

## SECCIÓN 6: CÓMO FUNCIONA

### Layout
- **ID:** `#como-funciona`
- **Fondo:** `--color-gray-50`
- **Padding:** 96px vertical
- **Contenedor:** max-width 1000px, centrado

### Título de Sección (H2)
```
Texto: Tu Contact Center listo en 4 sencillos pasos
Estilo: Font-weight 700, 40px / 28px, color --color-gray-900, text-align center
```

### Subtítulo
```
Texto: En menos de 48 horas, tu negocio estará atendido por profesionales. Sin complicaciones, sin costes ocultos.
Estilo: Font-weight 400, 18px, color --color-gray-500, text-align center
```

### 4 Pasos en Horizontal (con línea conectora)

**Paso 1: Configura tus instrucciones**
```
Número: "1" en círculo (48px, bg --color-primary, texto blanco, font-weight 700)
Icono: Cog6ToothIcon (32px, color --color-primary)
Título (H4): Configura tus instrucciones
Descripción: Desde tu área privada nos indicas cómo quieres que respondamos, tus protocolos y tus objetivos. Tú mandas, nosotros ejecutamos.
```

**Paso 2: Activamos la tecnología**
```
Número: "2"
Icono: CpuChipIcon (32px, color --color-primary)
Título (H4): Activamos la tecnología
Descripción: Configuramos tus agentes de IA, tus flujos de WhatsApp y te asignamos un número fijo de desvío. Todo listo para empezar.
```

**Paso 3: Formamos al equipo**
```
Número: "3"
Icono: UsersIcon (32px, color --color-primary)
Título (H4): Formamos al equipo
Descripción: Sincronizamos tus instrucciones con nuestro equipo humano para garantizar la máxima calidad. Tu voz, nuestros agentes.
```

**Paso 4: Atendemos por ti**
```
Número: "4"
Icono: PhoneIcon (32px, color --color-primary)
Título (H4): Atendemos por ti
Descripción: Empezamos a gestionar tus canales. Recibe reportes en tiempo real y relájate sabiendo que tu negocio está atendido las 24 horas.
```

### Línea Conectora (Desktop)
```
Línea horizontal entre los 4 círculos de número
Color: --color-primary/30
Grosor: 2px
Posición: Centrada verticalmente respecto a los círculos
```

### CTA Final
```
Texto: Empezar ahora
Enlace: /contacto
Estilo: Botón primario grande (padding 16px 32px)
```

### Animaciones
- Pasos: fade-in + slide-up con stagger 200ms
- Línea conectora: animación de "dibujo" (width 0 → 100%) al entrar en viewport

---

## SECCIÓN 7: TESTIMONIOS Y CONFIANZA

### Layout
- **Fondo:** Blanco
- **Padding:** 96px vertical
- **Contenedor:** max-width 1280px

### Título de Sección (H2)
```
Texto: Clientes felices, negocios que crecen
Estilo: Font-weight 700, 40px / 28px, color --color-gray-900, text-align center
```

### Subtítulo
```
Texto: Empresas de sectores muy diferentes ya confían en nosotros para cuidar a sus clientes.
Estilo: Font-weight 400, 18px, color --color-gray-500, text-align center
```

### Grid de 3 Testimonios

**Testimonio 1: Carlos**
```
Foto: testimonial-carlos.jpg (descargada de web original)
Alt text: "Carlos, cliente de LlamadaAtendida - Empresa de reformas"
Cita: "Su atención al cliente es de lo mejor. Mis clientes están contentos y siempre me solucionan cualquier duda o problema que tenga."
Nombre: Carlos
Empresa/Sector: Empresa de reformas
Estrellas: 5 estrellas (color --color-accent)
```

**Testimonio 2: Laura**
```
Foto: testimonial-laura.jpg (descargada de web original)
Alt text: "Laura, cliente de LlamadaAtendida - Dueña de peluquería"
Cita: "Siempre están dispuestos a ayudar. Me han facilitado mucho el trabajo con las llamadas y puedo dedicarme a otras cosas del negocio."
Nombre: Laura
Empresa/Sector: Dueña de peluquería
Estrellas: 5 estrellas
```

**Testimonio 3: David**
```
Foto: testimonial-david.jpg (descargada de web original)
Alt text: "David, cliente de LlamadaAtendida - Agencia de viajes"
Cita: "Mis clientes me han manifestado que los que les atendieron fueron muy profesionales y ayudaron con todo lo que necesitaban."
Nombre: David
Empresa/Sector: Agencia de viajes
Estrellas: 5 estrellas
```

### Estilo de Tarjeta de Testimonio
```
Background: white
Border: 1px solid --color-gray-100
Border-radius: 16px
Padding: 32px
Text-align: center

Foto: 80x80px, rounded-full, object-cover, border 3px --color-primary/20, margin auto
Comillas decorativas: Icono Quote icon (24px, color --color-primary/30) arriba a la izquierda
Cita: Font-style italic, font-weight 400, 16px, color --color-gray-700, line-height 1.6
Nombre: Font-weight 600, 16px, color --color-gray-900
Sector: Font-weight 400, 14px, color --color-gray-500
Estrellas: Flex row, gap-1, justify-center, color --color-accent

Hover: shadow-md, border-color --color-gray-200
```

### Animaciones
- Cards: fade-in + slide-up con stagger 150ms

---

## SECCIÓN 8: CIERRE / CTA FINAL

### Layout
- **Fondo:** Gradiente de `--color-primary` a `--color-primary-dark` (de izquierda a derecha o de arriba a abajo)
- **Padding:** 120px vertical (desktop), 80px (mobile)
- **Contenedor:** max-width 800px, centrado
- **Texto:** Blanco

### Título (H2)
```
Texto: No pierdas ni una llamada (ni una venta) más.
Estilo: Font-weight 800, 48px / 32px, color white, text-align center, line-height 1.1
```

### Subtítulo
```
Texto: Únete a las empresas que ya han optimizado su comunicación y reducido sus costes fijos.
Estilo: Font-weight 400, 18px, color white/80, text-align center, max-width 600px, margin auto
```

### Formulario de Contacto Rápido
```
Layout: Flex row (desktop), stack (mobile), gap-3, justify-center

Campo Email:
- Type: email
- Placeholder: "Tu email corporativo"
- Estilo: bg white/10, border 1px white/30, rounded-lg, px-4 py-3, color white, placeholder white/50
- Focus: border white, bg white/20

Botón:
- Texto: "Hablar con un asesor"
- Estilo: Botón acento (bg #ffb700, color #1e293b, font-weight 700, px-6 py-3, rounded-lg)
- Hover: bg #e6a500
```

### Trust Text
```
Texto: "Sin compromiso. Cancela cuando quieras. Atención 24/7."
Estilo: Font-weight 400, 14px, color white/60, text-align center, margin-top 16px
```

### Decoración
```
- Círculos decorativos difuminados en fondo (absolute, opacity 10%)
- Patrón de puntos sutil (opcional)
```

### Animaciones
- Título: fade-in + scale (0.95 → 1)
- Formulario: fade-in + slide-up (delay 200ms)

---

## SECCIÓN 9: FOOTER

### Layout
- **Fondo:** `--color-gray-900`
- **Padding:** 64px vertical arriba, 32px abajo
- **Contenedor:** max-width 1280px

### Grid de 4 Columnas (desktop), stack (mobile)

**Columna 1: Brand**
```
Logo: logo-dark.svg (versión blanca para fondo oscuro)
Altura: 40px
Descripción: "Contact Center profesional con IA y equipo humano especializado. Pago por uso, sin costes fijos."
Estilo: Font-weight 400, 14px, color --color-gray-400, max-width 280px

Redes Sociales (iconos 24px, color --color-gray-400, hover white):
- LinkedIn
- Facebook
- Instagram
```

**Columna 2: Producto**
```
Título: "Producto"
Estilo: Font-weight 600, 14px, color white, uppercase, tracking-wide, margin-bottom 16px

Links:
- Servicios → /servicios
- Cómo funciona → /como-funciona
- Tecnología → /tecnologia
- Precios → /contacto (o página de precios futura)
- Área Privada → https://llamadaatendida.com/area-privada (abre en nueva pestaña)

Estilo links: Font-weight 400, 14px, color --color-gray-400, hover white
```

**Columna 3: Empresa**
```
Título: "Empresa"
Links:
- Sobre nosotros → /sobre-nosotros (o #)
- Blog → /blog (futuro)
- Contacto → /contacto
- Trabaja con nosotros → /contacto (o email)
```

**Columna 4: Legal**
```
Título: "Legal"
Links:
- Aviso legal → /aviso-legal
- Política de privacidad → /politica-privacidad
- Política de cookies → /politica-cookies
- Nueva Ley de Atención → /nueva-ley
```

### Contacto Rápido (debajo del grid o en columna 1)
```
Email: hola@llamadaatendida.com
Teléfono: +34 910 971 537
Dirección: Calle Concepción Arenal 1, 1ºA, 28924 Alcorcón, Madrid

Estilo: Font-weight 400, 14px, color --color-gray-400
Iconos: EnvelopeIcon, PhoneIcon, MapPinIcon (16px, color --color-primary)
```

### Bottom Bar
```
Separador: 1px solid --color-gray-800, margin 32px 0

Izquierda: "© 2026 LlamadaAtendida. Todos los derechos reservados."
Derecha: "Diseñado con ❤️ en Madrid"

Estilo: Font-weight 400, 13px, color --color-gray-500
```

---

## PÁGINAS ADICIONALES (Contenido resumido)

### /servicios
- Hero con título "Nuestros Servicios" y descripción.
- Detalle ampliado de los 4 servicios (con más texto que en la home).
- CTA de contacto.

### /como-funciona
- Hero con título "Cómo Funciona LlamadaAtendida".
- Detalle ampliado de los 4 pasos.
- FAQ acordeón (preguntas frecuentes).
- CTA de contacto.

### /nueva-ley
- Hero con título "Nueva Ley de Atención al Cliente".
- Explicación detallada de la normativa.
- 5 puntos clave de la ley (detallados).
- Cómo LlamadaAtendida cumple cada punto.
- CTA de contacto.

### /contacto
- Hero con título "Habla con un asesor".
- Formulario completo: Nombre, Email, Teléfono, Empresa, Mensaje.
- Datos de contacto (email, teléfono, dirección).
- Mapa de ubicación (Alcorcón, Madrid).

### /tecnologia
- Hero con título "Nuestra Tecnología".
- Explicación de la plataforma.
- Agentes IA.
- Chatbots de WhatsApp.
- Dashboard y reportes.
- Seguridad y cumplimiento.

### Páginas legales (/aviso-legal, /politica-privacidad, /politica-cookies)
- Layout simple con texto legal.
- Sin CTAs intrusivos.
- Enlaces de navegación mínimos.

---

## DATOS ESTRUCTURADOS (JSON-LD) — Resumen

### Organization (todas las páginas)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LlamadaAtendida",
  "alternateName": "Llamada Atendida",
  "url": "https://llamadaatendida.com",
  "logo": "https://llamadaatendida.com/logo.svg",
  "description": "Contact Center profesional con Agentes IA, chatbots de WhatsApp y equipo humano especializado. Pago por uso, sin costes fijos.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-910-971-537",
    "contactType": "customer service",
    "availableLanguage": ["Spanish"],
    "areaServed": "ES"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Concepción Arenal 1, 1ºA",
    "addressLocality": "Alcorcón",
    "postalCode": "28924",
    "addressRegion": "Madrid",
    "addressCountry": "ES"
  },
  "sameAs": [
    "https://www.linkedin.com/company/llamadaatendida",
    "https://www.facebook.com/llamadaatendida",
    "https://www.instagram.com/llamadaatendida"
  ]
}
```

### LocalBusiness (Home)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LlamadaAtendida",
  "description": "Contact Center con IA y equipo humano especializado en Alcorcón, Madrid. Servicio de pago por uso.",
  "url": "https://llamadaatendida.com",
  "telephone": "+34-910-971-537",
  "email": "hola@llamadaatendida.com",
  "address": { ... },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.3461",
    "longitude": "-3.8286"
  },
  "openingHours": ["Mo-Fr 09:00-18:00"],
  "priceRange": "€€",
  "image": "https://llamadaatendida.com/og-image.jpg"
}
```

### WebSite (Home)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "LlamadaAtendida",
  "url": "https://llamadaatendida.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://llamadaatendida.com/buscar?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## PALABRAS CLAVE SEO (Meta keywords implícitas en contenido)

**Primarias:**
- contact center España
- atención al cliente outsourcing
- pago por uso contact center
- agentes IA atención cliente
- chatbot WhatsApp empresa
- recepcionista virtual
- gestión llamadas empresa
- cumplimiento ley atención cliente

**Secundarias:**
- contact center Madrid
- atención telefónica profesional
- gestión correos electrónicos empresa
- chat web comercial
- backoffice outsourcing
- reducir costes atención cliente
- contact center Alcorcón
- servicio atención 24 horas

---

## IMÁGENES: MAPEO DE ORIGEN → DESTINO

| Imagen en web original | URL origen (aprox) | Destino en proyecto | Sección |
|------------------------|-------------------|---------------------|---------|
| Logo LlamadaAtendida | https://llamadaatendida.com/.../logo.png | `public/logo.svg` | Navbar, Footer |
| Favicon | — | `public/favicon.svg` | Head |
| Hero / Equipo | https://llamadaatendida.com/.../hero.jpg | `src/assets/images/hero-contact-center.jpg` | Hero |
| Servicio Teléfono | https://llamadaatendida.com/.../telefono.jpg | `src/assets/images/service-phone.jpg` | Servicios |
| Servicio Email | https://llamadaatendida.com/.../email.jpg | `src/assets/images/service-email.jpg` | Servicios |
| Servicio Chat | https://llamadaatendida.com/.../chat.jpg | `src/assets/images/service-chat.jpg` | Servicios |
| Servicio Backoffice | https://llamadaatendida.com/.../backoffice.jpg | `src/assets/images/service-backoffice.jpg` | Servicios |
| Testimonial Carlos | https://llamadaatendida.com/.../carlos.jpg | `src/assets/images/testimonial-carlos.jpg` | Testimonios |
| Testimonial Laura | https://llamadaatendida.com/.../laura.jpg | `src/assets/images/testimonial-laura.jpg` | Testimonios |
| Testimonial David | https://llamadaatendida.com/.../david.jpg | `src/assets/images/testimonial-david.jpg` | Testimonios |
| Logos clientes | https://llamadaatendida.com/.../clientes/ | `src/assets/images/client-logos/` | Trust signals |

> **Nota:** Las imágenes deben descargarse manualmente de la web actual y optimizarse a WebP con calidad 85%. Las ilustraciones SVG (hero-ia-humanos, comparador-costes) deben crearse o buscarse en bibliotecas de ilustraciones (unDraw, Storyset, etc.).
