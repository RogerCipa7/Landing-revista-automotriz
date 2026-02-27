```markdown
# 🚗 Revista Automotriz 2025

Landing page editorial de alto impacto para una revista automotriz digital.  
Catálogo interactivo, modal dinámico, animaciones fluidas y diseño dark/light totalmente responsive.

🔗 **Ver proyecto en producción:**  
👉 [https://landing-revista-automotriz-48mj3ttm2-rogercipagautas-projects.vercel.app](https://landing-revista-automotriz-48mj3ttm2-rogercipagautas-projects.vercel.app)

---

## ✨ Visión del Proyecto

Este proyecto simula la landing oficial de una revista automotriz moderna para 2025, enfocada en:

- Experiencia visual editorial
- Interacción fluida sin frameworks pesados en el cliente
- Accesibilidad real
- Arquitectura modular escalable
- Rendimiento optimizado con Astro

El objetivo es demostrar dominio en maquetación avanzada, UX interactiva y arquitectura limpia de componentes.

---

## 🚀 Características Principales

### 🧭 Navegación Inteligente
- Header fijo con efecto blur
- Drawer móvil animado
- Restauración correcta del scroll en navegación móvil
- Accesibilidad con navegación por teclado

### 🖼️ Hero Cinematográfico
- Imagen full-screen con overlay degradado
- Animaciones escalonadas con CSS custom properties
- Estadísticas flotantes en desktop

### 🔄 Carrusel Dinámico de Modelos
- 18 vehículos reales
- Scroll suave con cálculo dinámico de ancho
- Dots interactivos
- Progress bar animado
- Navegación por teclado

### 🗂️ Catálogo Editorial Dark
- Card principal destacada
- Grid adaptable 4 columnas (XL)
- Efectos hover con iluminación de borde
- Modal desacoplado mediante CustomEvent

### 🪟 Modal de Detalles
- Overlay independiente del z-index del nav
- Cierre por ESC, overlay o botón X
- Botón condicional para review en YouTube
- Especificaciones técnicas estructuradas

### 🎯 Acordeón Interactivo
- Desktop: hover dinámico
- Mobile: acordeón táctil
- Animación tipo spring con cubic-bezier
- Imagen + estadísticas por feature

### 📰 Sección Editorial
- Artículo principal protagonista
- Layout alternado
- Gradientes laterales integrados
- Tags y metadatos de lectura

### 📬 Footer Funcional
- Validación en tiempo real
- Spinner de carga
- Feedback visual automático
- Enlaces reales a redes del autor

---

## 🛠️ Stack Tecnológico

```json
{
  "framework": "Astro 4.16",
  "styling": "Tailwind CSS 3.4",
  "language": "TypeScript",
  "animations": "CSS + Transitions",
  "icons": "Heroicons (SVG inline)",
  "fonts": "Playfair Display + Barlow"
}
```

### Dependencias principales

```bash
npm install astro@^4.16.0
npm install -D tailwindcss@^3.4.17 @astrojs/tailwind@^5.1.2
npm install -D @tailwindcss/forms @tailwindcss/typography
```

---

## 📁 Arquitectura del Proyecto

```
revista-automotriz/
├── public/
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Modelos.astro
│   │   ├── Catalogo.astro
│   │   ├── VehicleDetailModal.astro
│   │   ├── Caracteristicas.astro
│   │   ├── Noticias.astro
│   │   └── Footer.astro
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

Arquitectura desacoplada, modular y escalable. Cada sección funciona como bloque independiente.

---

## ⚙️ Instalación

```bash
git clone https://github.com/rogercipa7/revista-automotriz.git
cd revista-automotriz
npm install
npm run dev
```

### Producción

```bash
npm run build
npm run preview
```

---

## 📱 Responsive Design

| Resolución  | Comportamiento |
|-------------|----------------|
| < 640px     | Drawer móvil, cards apiladas, modal full-screen |
| 640–1023px  | 2 columnas, carrusel optimizado |
| ≥ 1024px    | Layout editorial completo, hover interactivo |

---

## 🎨 Personalización

- Cambiar colores en `tailwind.config.mjs`
- Agregar nuevos vehículos en `Catalogo.astro`

La arquitectura está pensada para escalar sin romper estilos existentes.

---

## 👨‍💻 Autor

**Roger Cipagauta**  
Desarrollador Full Stack enfocado en experiencias web modernas, UI interactiva y performance.

- [LinkedIn](https://www.linkedin.com/in/roger-cipagauta/)  
- [GitHub](https://github.com/rogercipa7)  
- [Email](mailto:roger.cipagauta@example.com)

---

## 📄 Licencia

MIT License — 2025 Roger Cipagauta
```
