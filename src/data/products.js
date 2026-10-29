import product1 from '../assets/product-1.jpeg'
import product2 from '../assets/product-2.jpeg'
import product3 from '../assets/product-3.jpeg'
import product4 from '../assets/product-4.jpeg'
import product5 from '../assets/product-5.jpeg'
import product6 from '../assets/product-6.jpeg'
import product7 from '../assets/product-7.jpeg'
import product8 from '../assets/product-8.jpeg'

export const productsContent = {
  tag: 'Productos',
  title: 'Lo que necesitas para',
  accent: 'entrenar.',
  subtitle:
    'Suplementos y accesorios disponibles en LEI FIT. Escríbenos y te confirmamos stock y precio.',
  note: 'Productos de ejemplo — reemplazar por el catálogo real de LEI FIT.',
  cta: 'Consultar por WhatsApp',
}

// TODO: reemplazar descripciones por las reales. Las fotos son src/assets/product-1.jpg ... product-8.jpg
export const products = [
  {
    id: 'iso-whey',
    name: 'Proteína Iso Whey',
    category: 'Suplementos',
    description: 'Proteína aislada de rápida absorción para acompañar tu recuperación después de entrenar.',
    image: product1,
    alt: 'Envase de proteína Iso Whey',
  },
  {
    id: 'whey',
    name: 'Proteína Whey',
    category: 'Suplementos',
    description: 'Proteína de suero para completar tu consumo diario. Práctica y fácil de preparar.',
    image: product2,
    alt: 'Envase de proteína Whey',
  },
  {
    id: 'creatina',
    name: 'Creatina',
    category: 'Suplementos',
    description: 'Suplemento clásico para sesiones de fuerza e intensidad.',
    image: product3,
    alt: 'Envase de creatina',
  },
  {
    id: 'bebidas-quemadoras',
    name: 'Bebidas quemadoras',
    category: 'Bebidas',
    description: 'Bebidas listas para tomar antes de entrenar. Pregunta por los sabores disponibles.',
    image: product4,
    alt: 'Botellas de bebidas quemadoras',
  },
  {
    id: 'munequeras',
    name: 'Muñequeras',
    category: 'Accesorios',
    description: 'Soporte para tus muñecas en press y levantamientos pesados.',
    image: product5,
    alt: 'Par de muñequeras de entrenamiento',
  },
  {
    id: 'rodilleras',
    name: 'Rodilleras',
    category: 'Accesorios',
    description: 'Soporte y abrigo para tus rodillas en sentadillas y trabajo de piernas.',
    image: product6,
    alt: 'Par de rodilleras de entrenamiento',
  },
  {
    id: 'toallas',
    name: 'Toallas',
    category: 'Accesorios',
    description: 'Toallas para entrenar disponibles en distintos colores. Consulta los colores en stock.',
    image: product7,
    alt: 'Toallas de entrenamiento de distintos colores',
  },
  {
    id: 'kekes',
    name: 'Kekes saludables',
    category: 'Snacks',
    description: 'Kekes saludables para un snack antes o después de entrenar.',
    image: product8,
    alt: 'Kekes saludables',
  },
]