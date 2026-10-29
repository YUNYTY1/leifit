import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { productsContent, products } from '../data/products'

const arrowBtn =
  'grid size-[60px] place-items-center border border-line text-cream transition-colors hover:border-brand hover:text-brand'

export default function Products() {
  const track = useRef(null)

  const scrollByCard = (direction) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector('article')
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    el.scrollBy({ left: direction * ((card?.offsetWidth ?? 380) + gap), behavior: 'smooth' })
  }

  const controls = (
    <div className="flex gap-3">
      <button type="button" onClick={() => scrollByCard(-1)} aria-label="Producto anterior" className={arrowBtn}>
        <ChevronLeft aria-hidden="true" className="size-6" />
      </button>
      <button type="button" onClick={() => scrollByCard(1)} aria-label="Producto siguiente" className={arrowBtn}>
        <ChevronRight aria-hidden="true" className="size-6" />
      </button>
    </div>
  )

  return (
    <section id="productos" aria-labelledby="productos-title" className="pb-12 pt-20 lg:pb-12 lg:pt-32">
      <Container>
        <SectionHeader
          id="productos-title"
          tag={productsContent.tag}
          title={productsContent.title}
          accent={productsContent.accent}
          subtitle={productsContent.subtitle}
          note={productsContent.note}
          controls={controls}
        />
      </Container>

      {/* Carrusel: sangra hasta los bordes de la pantalla pero arranca alineado al contenido */}
      <div
        ref={track}
        tabIndex={0}
        aria-label="Productos de LEI FIT"
        className="track-x no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 lg:mt-16 lg:gap-[30px]"
      >
        {products.map((product) => (
          <ProductCard key={product.id} cta={productsContent.cta} {...product} />
        ))}
      </div>
    </section>
  )
}