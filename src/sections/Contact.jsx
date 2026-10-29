import Container from '../components/Container'
import Button from '../components/Button'
import { contactContent as c } from '../data/contact'
import { whatsappLink } from '../lib/whatsapp'
import contactBg from '../assets/contact-bg.jpg'

export default function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="relative overflow-hidden border-t border-line py-24 text-center lg:py-40"
    >
      {/* Imagen de fondo suave (decorativa). Sube/baja `opacity-40` para que se note más o menos. */}
      <img
        src={contactBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />

      <Container className="relative">
        <h2
          id="contacto-title"
          className="font-display text-[clamp(2.75rem,6vw,5rem)] font-extrabold uppercase leading-[0.95] text-cream"
        >
          {c.title} <span className="text-brand">{c.accent}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[36rem] font-sans text-lg text-muted sm:text-[1.35rem] sm:leading-relaxed">
          {c.subtitle}
        </p>
        {/* TODO: conectar WhatsApp real (número en src/data/site.js) */}
        <Button href={whatsappLink(c.cta.message)} size="lg" className="mt-10">
          {c.cta.label}
        </Button>
      </Container>
    </section>
  )
}