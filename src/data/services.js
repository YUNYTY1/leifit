import services1 from '../assets/services-1.jpg'
import services2 from '../assets/services-2.jpg'
import services3 from '../assets/services-3.jpg'

export const servicesContent = {
  tag: 'Servicios y disciplinas',
  title: 'Entrena a',
  accent: 'tu manera.',
  subtitle: 'Encuentra el espacio para desafiarte y avanzar hacia tus objetivos.',
  note: 'Contenido editable — reemplazar por las disciplinas reales de LEI FIT.',
}

// Carrusel de fotos (cambia solo). Milisegundos entre foto y foto:
export const slideInterval = 3000

// TODO: reemplazar src/assets/services-1.jpg, services-2.jpg y services-3.jpg por fotos reales y ajustar alt/título
export const serviceSlides = [
  { src: services1, alt: 'Manos sujetando una barra cargada dentro de la sala de fuerza', label: 'Dentro del gimnasio', title: 'Sala de fuerza' },
  { src: services2, alt: 'Zona funcional con kettlebells y espacio libre para entrenar', label: 'Dentro del gimnasio', title: 'Zona funcional' },
  { src: services3, alt: 'Zona de cardio con cintas y bicicletas', label: 'Dentro del gimnasio', title: 'Zona de cardio' },
]

// El título se usa también en el mensaje de WhatsApp de cada servicio.
export const services = [
  {
    id: 'fuerza',
    number: '01',
    title: 'Entrenamiento de fuerza',
    description:
      'Trabajo con barra, mancuernas y máquinas. Cargas progresivas, técnica primero y control en cada serie.',
  },
  {
    id: 'funcional',
    number: '02',
    title: 'Entrenamiento funcional',
    description:
      'Movimientos completos con peso libre y kettlebells. Fuerza útil para lo que haces fuera del gimnasio.',
  },
  {
    id: 'cardio',
    number: '03',
    title: 'Cardio y resistencia',
    description:
      'Cinta, bicicleta y remo. Sesiones medidas para sostener el ritmo más tiempo y recuperar mejor.',
  },
  {
    id: 'acondicionamiento',
    number: '04',
    title: 'Acondicionamiento físico',
    description:
      'Circuitos y trabajo por intervalos. Volumen controlado para ganar fondo sin perder forma.',
  },
]