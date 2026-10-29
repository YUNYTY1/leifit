import gallery1 from '../assets/gallery-1.jpg'
import gallery2 from '../assets/gallery-2.jpg'
import gallery3 from '../assets/gallery-3.jpg'
import gallery4 from '../assets/gallery-4.jpg'
import gallery5 from '../assets/gallery-5.jpg'

export const galleryContent = {
  tag: 'Instalaciones',
  title: 'Conoce el espacio donde todo',
  accent: 'comienza.',
  subtitle:
    'Sala de fuerza, equipamiento y zona de cardio. Toca cualquier foto para verla en grande.',
  note: 'Fotos demostrativas — reemplazar por fotos reales de LEI FIT.',
}

// `span` = columnas de 12 que ocupa en escritorio.
export const galleryItems = [
  { id: 'g1', src: gallery1, label: 'Zona de fuerza', span: 7, alt: 'Zona de fuerza con racks, barras y discos bajo luces lineales' },
  { id: 'g2', src: gallery2, label: 'Equipamiento', span: 5, alt: 'Fila de mancuernas de hierro en su rack' },
  { id: 'g3', src: gallery3, label: 'Cardio', span: 4, alt: 'Zona de cardio con cintas y bicicletas frente a una ventana' },
  { id: 'g4', src: gallery4, label: 'Detalle', span: 4, alt: 'Barra olímpica con discos sobre el piso con polvo de magnesio en el aire' },
  { id: 'g5', src: gallery5, label: 'Sala principal', span: 4, alt: 'Sala principal con estructuras de entrenamiento y plataforma de levantamiento' },
]
