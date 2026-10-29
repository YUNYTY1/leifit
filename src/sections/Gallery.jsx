import { useCallback, useState } from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import GalleryTile from '../components/GalleryTile'
import Lightbox from '../components/Lightbox'
import { galleryContent, galleryItems } from '../data/gallery'

// Clases completas (Tailwind necesita verlas escritas) según las columnas de cada foto.
const spanClasses = {
  7: 'sm:col-span-2 lg:col-span-7',
  5: 'lg:col-span-5',
  4: 'lg:col-span-4',
}

export default function Gallery() {
  const [current, setCurrent] = useState(null) // índice abierto o null

  const close = useCallback(() => setCurrent(null), [])
  const prev = useCallback(
    () => setCurrent((i) => (i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length)),
    [],
  )
  const next = useCallback(
    () => setCurrent((i) => (i === null ? i : (i + 1) % galleryItems.length)),
    [],
  )

  return (
    <section id="galeria" aria-labelledby="galeria-title" className="py-20 lg:py-32">
      <Container>
        <SectionHeader
          id="galeria-title"
          tag={galleryContent.tag}
          title={galleryContent.title}
          accent={galleryContent.accent}
          subtitle={galleryContent.subtitle}
          note={galleryContent.note}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12">
          {galleryItems.map((item, index) => (
            <GalleryTile
              key={item.id}
              src={item.src}
              alt={item.alt}
              label={item.label}
              className={spanClasses[item.span]}
              onOpen={() => setCurrent(index)}
            />
          ))}
        </div>
      </Container>

      {current !== null && (
        <Lightbox items={galleryItems} index={current} onClose={close} onPrev={prev} onNext={next} />
      )}
    </section>
  )
}
