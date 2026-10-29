export const scheduleContent = {
  tag: 'Horarios y ubicación',
  title: 'Tu próximo entrenamiento empieza',
  accent: 'aquí.',
  note: 'Horarios y dirección pendientes de confirmar.',
  businessName: 'LEI FIT',
  // TODO: dirección real
  address: '[Dirección pendiente de confirmar]',
  // TODO: horarios reales
  hours: [
    { day: 'Lunes a viernes', time: '[Horario pendiente de confirmar]' },
    { day: 'Sábados', time: '[Horario pendiente de confirmar]' },
    { day: 'Domingos y feriados', time: '[Horario pendiente de confirmar]' },
  ],
  // TODO: pegar aquí el link de Google Maps cuando se confirme la dirección.
  // Mientras esté vacío, "Cómo llegar" abre WhatsApp.
  mapsUrl: '',
  directionsCta: 'Cómo llegar',
  directionsMessage: 'Hola, ¿me indican cómo llegar a LEI FIT?',
  map: {
    title: 'Mapa del gimnasio',
    text: 'Espacio reservado para el mapa de Google Maps. Se activa cuando confirmemos la dirección de LEI FIT.',
  },
}
