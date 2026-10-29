import { useState } from 'react'
import { Pause, Play } from 'lucide-react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import TestimonialCard from '../components/TestimonialCard'
import { testimonialsContent, testimonials } from '../data/testimonials'

const controlBtn =
  'grid size-[60px] place-items-center border border-line text-cream transition-colors hover:border-brand hover:text-brand'

export default function Testimonials() {
  const [paused, setPaused] = useState(false)
  const toggle = () => setPaused((p) => !p)

  const controls = (
    <button
      type="button"
      onClick={toggle}
      aria-label={paused ? 'Reanudar testimonios' : 'Pausar testimonios'}
      className={controlBtn}
    >
      {paused ? (
        <Play aria-hidden="true" className="size-6" />
      ) : (
        <Pause aria-hidden="true" className="size-6" />
      )}
    </button>
  )

  return (
    <section id="testimonios" aria-labelledby="testimonios-title" className="pb-20 pt-10 lg:pb-32 lg:pt-12">
      <Container>
        <SectionHeader
          id="testimonios-title"
          tag={testimonialsContent.tag}
          title={testimonialsContent.title}
          accent={testimonialsContent.accent}
          subtitle={testimonialsContent.subtitle}
          note={testimonialsContent.note}
          controls={controls}
        />
      </Container>

      {/* Carrusel infinito automático. Clic en cualquier parte = pausar / reanudar.
          La lista va duplicada para que el bucle no tenga saltos. */}
      <div
        onClick={toggle}
        className="mt-14 cursor-pointer overflow-hidden motion-reduce:overflow-x-auto lg:mt-16"
      >
        <div
          className="flex w-max motion-safe:animate-testimonials"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className={`flex shrink-0 gap-6 pr-6 lg:gap-[30px] lg:pr-[30px] ${copy === 1 ? 'motion-reduce:hidden' : ''}`}
            >
              {testimonials.map((t) => (
                <TestimonialCard key={`${copy}-${t.id}`} badge={testimonialsContent.badge} {...t} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}