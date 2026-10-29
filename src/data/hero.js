import hero1 from '../assets/hero-1.jpg'
import hero2 from '../assets/hero-2.jpg'
import hero3 from '../assets/hero-3.jpg'

export const hero = {
  titleLines: ['Supera tus', 'propios'],
  titleAccent: 'límites.',
  description:
    'Cada entrenamiento es una oportunidad para ser más fuerte.\nDescubre una nueva forma de desafiarte en LEI FIT.',
  primaryCta: { label: 'Quiero empezar', message: 'Hola, quiero empezar a entrenar en LEI FIT.' },
  secondaryCta: { label: 'Explorar el gimnasio', target: 'servicios' },
  scrollLabel: 'Scroll',

  // Carrusel de fondo: milisegundos entre imagen e imagen
  slideInterval: 3000,
  // TODO: reemplazar las fotos src/assets/hero-1.jpg, hero-2.jpg y hero-3.jpg y ajustar cada alt
  slides: [
    { src: hero1, alt: 'Atleta en posición de peso muerto frente a una barra cargada en una sala de entrenamiento oscura' },
    { src: hero2, alt: 'Atleta entrenando en la sala de fuerza del gimnasio' },
    { src: hero3, alt: 'Barra cargada con discos lista para entrenar en el gimnasio' },
  ],
}