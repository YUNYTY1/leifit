# LEI FIT — Landing page

Vite + React + Tailwind CSS v4. Íconos con `lucide-react`, fuentes locales (Barlow y Barlow Condensed vía `@fontsource`, sin peticiones externas).

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo
npm run build    # compila a /dist
npm run preview  # prueba el build
```

## Estructura

```
src/
├─ data/         Todos los textos, links y listas (site.js, hero.js, services.js, plans.js,
│                gallery.js, testimonials.js, schedule.js, contact.js, footer.js, marquee.js)
├─ components/   Piezas reutilizables (NavBar, Logo, Button, SectionHeader, PlanCard,
│                ServiceItem, GalleryTile, Lightbox, TestimonialCard, Marquee, etc.)
├─ sections/     Hero, Services, Plans, Gallery, Testimonials, Schedule, Contact, Footer
├─ hooks/        useActiveSection (resalta el link del menú según el scroll)
├─ lib/          whatsapp.js (arma los links de WhatsApp)
├─ assets/       Imágenes (placeholders: reemplázalos con el mismo nombre)
├─ App.jsx       Solo importa y ordena las secciones
└─ index.css     Tema de Tailwind (colores y fuentes)
public/          favicon.svg y og-image.jpg
```

## Reemplazar imágenes

Cambia cada archivo por tu foto real **con el mismo nombre** (formato .jpg):

| Archivo | Dónde se usa |
|---|---|
| `src/assets/hero.jpg` | Fondo del hero (se ve mejor con el sujeto a la derecha) |
| `src/assets/services.jpg` | Foto de "Sala de fuerza" en Servicios |
| `src/assets/gallery-1.jpg` … `gallery-5.jpg` | Galería (zona de fuerza, equipamiento, cardio, detalle, sala principal) |
| `public/og-image.jpg` | Imagen al compartir el link (1200×630) |

## Pendientes antes de publicar

- [ ] Número real de WhatsApp en `src/data/site.js` (hoy es `51900000000`; todos los botones lo usan)
- [ ] Fotos reales (ver tabla de arriba) y actualizar los `alt` en `src/data/gallery.js`
- [ ] Disciplinas reales (`src/data/services.js`)
- [ ] Membresías y beneficios reales (`src/data/plans.js`); precios por WhatsApp, como en el diseño
- [ ] Testimonios reales (`src/data/testimonials.js`)
- [ ] Dirección y horarios (`src/data/schedule.js`) y link de Google Maps en `mapsUrl`; luego cambiar el bloque "Mapa del gimnasio" por un `<iframe>` en `src/sections/Schedule.jsx`
- [ ] Teléfono, correo y links de Instagram, Facebook y TikTok (`src/data/footer.js`)
- [ ] Quitar los textos de aviso ("Contenido editable…", "Fotos demostrativas…", etc.) de cada archivo de `src/data/` y las etiquetas "Contenido de ejemplo"
- [ ] En `index.html`: poner la URL absoluta del dominio en `og:image` (y agregar `og:url`)
- [ ] Revisar que el eslogan "Elevate Your Limits" sea el definitivo

## Dónde conectar servicios reales

Hoy todos los botones de acción abren WhatsApp con un mensaje prellenado. Está comentado con `TODO` en:

- `src/lib/whatsapp.js` — arma el link (número en `src/data/site.js`)
- `src/components/NavBar.jsx`, `PlanCard.jsx`, `ServiceItem.jsx` y `src/sections/Hero.jsx`, `Contact.jsx`, `Schedule.jsx` — mensajes de cada botón
- No hay formularios en este diseño. Si más adelante agregas uno (reservas, contacto), conéctalo a un backend o servicio.
