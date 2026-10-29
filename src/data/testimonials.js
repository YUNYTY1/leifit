export const testimonialsContent = {
  tag: 'Testimonios',
  title: 'El progreso se construye cada',
  accent: 'día.',
  subtitle: 'Este espacio está reservado para las historias de nuestros socios.',
  note: 'Tarjetas de demostración — reemplazar por testimonios reales.',
  badge: 'Contenido de ejemplo',
}

// TODO: reemplazar por testimonios reales (quote, name, time).
export const testimonials = Array.from({ length: 5 }, (_, i) => ({
  id: `t${i + 1}`,
  quote: '[Comentario de ejemplo: reemplazar por el testimonio real del socio.]',
  name: '[Nombre del socio]',
  time: '[Tiempo entrenando]',
}))
