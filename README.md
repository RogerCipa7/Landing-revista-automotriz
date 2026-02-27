# 🚗 Revista Automotriz 2025

Landing page premium para una revista automotriz con catálogo interactivo, modal de detalles, animaciones fluidas y diseño dark/light editorial totalmente responsive.

![Astro](https://img.shields.io/badge/Astro-4.16-FF5D01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![MIT License](https://img.shields.io/badge/Licencia-MIT-green)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Componentes](#-componentes)
- [Personalización](#-personalización)
- [Responsive](#-responsive)
- [Autor](#-autor)

---

## ✨ Características

| Feature | Descripción | Estado |
|---|---|---|
| 🧭 Navegación Fixed | Header con logo SVG de auto, menú desktop justificado a la derecha y drawer móvil animado | ✅ |
| 🖼️ Hero Full Width | Imagen de fondo que ocupa toda la pantalla con overlay degradado y texto alineado a la izquierda | ✅ |
| 🔄 Carrusel de Modelos | 18 vehículos reales con scroll suave, dots indicadores, progress bar y navegación por teclado | ✅ |
| 🗂️ Catálogo Dark | Grid con card destacada full-width + 8 cards secundarias en layout editorial oscuro | ✅ |
| 🪟 Modal de Detalles | Overlay con imagen, specs técnicas, equipamiento, botón de review en YouTube y cierre por ESC/X/overlay | ✅ |
| 🎯 Acordeón de Características | 6 features en lista vertical — hover para abrir en desktop, click en mobile — con imagen y estadística por panel | ✅ |
| 📰 Noticias Editoriales | 3 artículos con layout alternado, jerarquía visual (artículo principal + secundarios) sobre fondo oscuro | ✅ |
| 📬 Footer con Formulario | Suscripción con validación en tiempo real, spinner de carga, mensaje de éxito y links reales a catálogo | ✅ |
| 🌙 Animaciones | Fade-up escalonado, líneas de hover, acordeón spring, drawer slide-in, zoom en imágenes | ✅ |
| ♿ Accesibilidad | ARIA labels, navegación con teclado, foco visible, roles semánticos en carrusel | ✅ |

---

## 🛠️ Tecnologías

```json
{
  "framework": "Astro 4.16",
  "styling": "Tailwind CSS 3.4",
  "language": "TypeScript",
  "animations": "CSS Keyframes + Transitions",
  "icons": "Heroicons (SVG inline)",
  "images": "Unsplash CDN + imágenes reales de cada vehículo",
  "fuentes": "Google Fonts — Playfair Display + Barlow"
}
```

**Dependencias principales:**

```bash
npm install astro@^4.16.0
npm install -D tailwindcss@^3.4.17 @astrojs/tailwind@^5.1.2
npm install -D @tailwindcss/forms@^0.5.9 @tailwindcss/typography@^0.5.15
```

---

## 📁 Estructura del Proyecto

```
revista-automotriz/
├── public/
│   └── images/                    # Imágenes estáticas (opcional)
├── src/
│   ├── components/
│   │   ├── Nav.astro               # Header fixed + drawer móvil animado
│   │   ├── Hero.astro              # Hero full-bleed con imagen de fondo
│   │   ├── Modelos.astro           # Carrusel horizontal con 18 modelos reales
│   │   ├── Catalogo.astro          # Grid dark con card destacada + modal trigger
│   │   ├── VehicleDetailModal.astro # Modal de detalles + botón YouTube
│   │   ├── Caracteristicas.astro   # Acordeón vertical hover/click con imágenes
│   │   ├── Noticias.astro          # Sección editorial con layout alternado
│   │   └── Footer.astro            # Footer blanco con formulario validado
│   ├── layouts/
│   │   └── BaseLayout.astro        # Layout base con Google Fonts
│   └── pages/
│       └── index.astro             # Página principal
├── tailwind.config.mjs
├── astro.config.mjs
└── tsconfig.json
```

---

## 🚀 Instalación

**Prerrequisitos:** Node.js 18+, npm o pnpm

```bash
# 1. Clonar el repositorio
git clone https://github.com/rogercipa7/revista-automotriz.git
cd revista-automotriz

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
# → http://localhost:4321
```

**Build para producción:**

```bash
npm run build     # Genera build estático en /dist
npm run preview   # Preview local del build
```

---

## 🧩 Componentes

### `Nav.astro`
- Logo SVG dibujado a mano de un auto de perfil
- Menú desktop con underline animado `origin-left`
- Drawer móvil: slide desde la derecha, overlay blur, animación escalonada de items
- Fix de navegación: `body.overflow` se restaura **antes** del scroll para que los anchor links funcionen correctamente en mobile

### `Hero.astro`
- Imagen de fondo `object-cover` full-screen con overlay degradado izquierda→derecha
- Texto alineado a la izquierda con animaciones `fadeInUp` escalonadas por CSS custom property `--i`
- Stats flotantes (modelos, marcas, lectores) en desktop esquina inferior derecha

### `Modelos.astro`
- 18 vehículos reales con imágenes de alta calidad
- Ancho de card con `clamp()` para adaptarse a cualquier pantalla sin breakpoints fijos
- `getCardWidth()` mide el DOM en tiempo real para un `goTo(index)` preciso — sin saltos impares
- Dots clickeables + progress bar degradado rojo→naranja

### `Catalogo.astro` + `VehicleDetailModal.astro`
- Primer vehículo como card featured full-width a 520px de alto
- 8 vehículos en grid 4 columnas (XL) con borde que se ilumina al hover
- Comunicación por `CustomEvent('openVehicleModal')` entre componentes
- Modal: `z-[200]` independiente del nav, cierre por botón X (addEventListener), overlay o ESC
- Botón YouTube rojo solo aparece si el vehículo tiene `youtubeUrl`

### `Caracteristicas.astro`
- Lista vertical con 6 features como acordeón
- **Desktop:** se abre al hacer hover, se cierra al salir — el primero abre por defecto
- **Mobile:** funciona como acordeón táctil con click
- Animación `max-height` con `cubic-bezier(0.16,1,0.3,1)` (efecto spring)
- Panel expandido: imagen + descripción + estadística clave por característica

### `Noticias.astro`
- Primera noticia como protagonista a `min-h-[440px]` con imagen al 55%
- Noticias 2 y 3 compactas a `h-52` alternando imagen izquierda/derecha
- Gradient lateral en imagen que se fusiona con la card
- Tags (`TENDENCIA`, `ANÁLISIS`, `EXCLUSIVO`), tiempo de lectura e iniciales de autor

### `Footer.astro`
- `id="contacto"` para que el link del nav navegue correctamente
- Formulario con validación en tiempo real (nombre + email), spinner de envío, mensaje de éxito auto-desaparecible a los 4s
- Columna "Catálogo" con los 6 principales modelos enlazados a `#catalogo`
- Links reales a LinkedIn y GitHub del autor

---

## 🎨 Personalización

**Cambiar colores principales** en `tailwind.config.mjs`:

```js
theme: {
  extend: {
    colors: {
      primary: '#ef4444',    // Rojo acento
      secondary: '#0a0a0a',  // Fondo dark
    }
  }
}
```

**Agregar vehículos al catálogo** — en `Catalogo.astro`:

```js
const cars = [
  {
    type: 'DEPORTIVO',
    year: '2025',
    name: 'Nuevo Modelo',
    specs: '3.0L V6 • 400 HP • RWD',
    price: '$80,000',
    image: 'https://url-imagen.jpg',
    description: 'Descripción del vehículo.',
    features: ['Feature 1', 'Feature 2'],
    youtubeUrl: 'https://youtube.com/watch?v=...',  // Opcional
    technical: {
      engine: '3.0L V6',
      power: '400 HP',
      // ...
    }
  }
];
```

---

## 📱 Responsive

| Breakpoint | Comportamiento |
|---|---|
| `< 640px` | Menú hamburguesa, cards apiladas, carrusel 1 card (~80vw), modal full-screen |
| `640–1023px` | 2 columnas en grids, carrusel cards 280px, acordeón con click |
| `≥ 1024px` | 3–4 columnas, carrusel cards 300px, acordeón hover, featured card full-width |

---

## 🔧 Scripts Disponibles

```json
{
  "dev":     "astro dev",
  "build":   "astro build",
  "preview": "astro preview",
  "check":   "astro check"
}
```

```bash
# Verificar tipos TypeScript
npx astro check

# Limpiar caché
rm -rf .astro && npm run dev
```

---

## 👨‍💻 Autor

**Roger Cipagauta** — Desarrollador Full Stack especializado en experiencias web modernas con Astro, React y Tailwind CSS.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Roger_Cipagauta-0077B5?logo=linkedin)](https://www.linkedin.com/in/roger-cipagauta-b1626b329/)
[![GitHub](https://img.shields.io/badge/GitHub-rogercipa7-181717?logo=github)](https://github.com/rogercipa7)
[![Email](https://img.shields.io/badge/Email-rogercipagauta@gmail.com-D14836?logo=gmail)](mailto:rogercipagauta@gmail.com)

---

## 📄 Licencia

Distribuido bajo la licencia **MIT**. Ver [`LICENSE`](./LICENSE) para más información.

```
MIT License — Copyright (c) 2025 Roger Cipagauta
```

---

> ⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub! 🚗✨
