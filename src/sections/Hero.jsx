import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../components/Container'
import Button from '../components/Button'
import { hero } from '../data/hero'
import { whatsappLink } from '../lib/whatsapp'

export default function Hero() {
  const [current, setCurrent] = useState(0)

  // Cambia de imagen cada `hero.slideInterval` ms (no se mueve si el usuario prefiere menos animación)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % hero.slides.length)
    }, hero.slideInterval)
    return () => clearInterval(timer)
  }, [])

  // TODO: conectar WhatsApp real (número en src/data/site.js)
  const startHref = whatsappLink(hero.primaryCta.message)

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-24 pt-[72px] lg:pt-[92px]"
    >
      {hero.slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={i !== current}
          className={`absolute inset-0 size-full object-cover object-[75%_center] transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10 lg:via-ink/60" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />

      <Container className="relative py-10">
        <h1
          id="hero-title"
          className="font-display text-[clamp(4rem,10vw,11.5rem)] font-extrabold uppercase leading-[0.97] text-cream"
        >
          {hero.titleLines.map((line, i) => (
            <span
              key={line}
              className="block animate-rise"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {line}
            </span>
          ))}
          <span
            className="block animate-rise text-brand"
            style={{ animationDelay: `${hero.titleLines.length * 120}ms` }}
          >
            {hero.titleAccent}
          </span>
        </h1>

        <p
          className="mt-8 max-w-[40rem] animate-rise whitespace-pre-line font-sans text-lg leading-relaxed text-cream sm:mt-10 sm:text-xl"
          style={{ animationDelay: '480ms' }}
        >
          {hero.description}
        </p>

        <div
          className="mt-8 flex animate-rise flex-col gap-4 sm:mt-10 sm:flex-row"
          style={{ animationDelay: '600ms' }}
        >
          <Button href={startHref} size="lg">
            {hero.primaryCta.label}
          </Button>
          <Button href={`#${hero.secondaryCta.target}`} variant="outline" size="lg" arrow={false}>
            {hero.secondaryCta.label}
          </Button>
        </div>
      </Container>

      <a
        href="#servicios"
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-cream md:flex"
      >
        {hero.scrollLabel}
        <span aria-hidden="true" className="h-12 w-px bg-line" />
        <ChevronDown aria-hidden="true" className="-mt-2 size-4 text-brand" />
      </a>
    </section>
  )
}