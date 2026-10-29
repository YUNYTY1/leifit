import { useEffect, useState } from 'react'

/**
 * Carrusel horizontal de fotos que avanza solo cada `interval` ms.
 * Los puntos de abajo permiten ir a una foto concreta.
 * Si el usuario prefiere menos animación, no avanza solo.
 */
export default function ServiceSlider({ slides, interval = 3000 }) {
  const [current, setCurrent] = useState(0)
  const total = slides.length

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setTimeout(() => setCurrent((i) => (i + 1) % total), interval)
    return () => clearTimeout(timer)
  }, [current, total, interval])

  return (
    <figure className="relative min-h-[280px] overflow-hidden border border-line">
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} aria-hidden={i !== current} className="relative h-full w-full shrink-0">
            <img src={slide.src} alt={slide.alt} className="absolute inset-0 size-full object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <figcaption className="absolute bottom-5 left-5">
              <span className="block font-sans text-xs font-bold uppercase tracking-[0.15em] text-brand">
                {slide.label}
              </span>
              <span className="mt-1 block font-display text-2xl font-bold uppercase leading-none text-cream sm:text-3xl">
                {slide.title}
              </span>
            </figcaption>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 right-5 flex gap-1">
        {slides.map((slide, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Ver foto ${i + 1}: ${slide.title}`}
            aria-current={i === current}
            className="py-2"
          >
            <span
              className={`block h-1.5 w-8 transition-colors ${i === current ? 'bg-brand' : 'bg-cream/40'}`}
            />
          </button>
        ))}
      </div>
    </figure>
  )
}