import { MapPin } from 'lucide-react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { scheduleContent as c } from '../data/schedule'
import { whatsappLink } from '../lib/whatsapp'

export default function Schedule() {
  // TODO: cuando haya link de Google Maps, pegarlo en `mapsUrl` (src/data/schedule.js).
  // Mientras tanto, "Cómo llegar" abre WhatsApp.
  const directionsHref = c.mapsUrl || whatsappLink(c.directionsMessage)

  return (
    <section id="horarios" aria-labelledby="horarios-title" className="py-20 lg:py-32">
      <Container>
        <SectionHeader id="horarios-title" tag={c.tag} title={c.title} accent={c.accent} note={c.note} />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-[clamp(4rem,8vw,6.5rem)] font-extrabold uppercase leading-none text-cream">
              {c.businessName}
            </h3>

            <p className="mt-8 flex items-center gap-4 border-y border-line py-5 font-sans text-lg text-muted">
              <MapPin aria-hidden="true" className="size-5 shrink-0 text-brand" />
              {c.address}
            </p>

            <dl>
              {c.hours.map((row) => (
                <div
                  key={row.day}
                  className="flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <dt className="font-display text-3xl font-bold uppercase leading-none text-cream">{row.day}</dt>
                  <dd className="font-sans text-lg text-muted">{row.time}</dd>
                </div>
              ))}
            </dl>

            <Button href={directionsHref} size="lg" className="mt-12 w-full">
              {c.directionsCta}
            </Button>
          </div>

          <div className="flex min-h-[360px] flex-col items-center justify-center border border-line bg-surface p-8 text-center lg:min-h-0">
            <span aria-hidden="true" className="grid size-[70px] place-items-center border border-brand text-brand">
              <MapPin className="size-6" />
            </span>
            <h3 className="mt-8 font-display text-4xl font-bold uppercase leading-none text-cream">{c.map.title}</h3>
            <p className="mt-5 max-w-[28rem] font-sans text-lg leading-relaxed text-muted">{c.map.text}</p>
            {/* TODO: cuando se confirme la dirección, reemplazar este bloque por un <iframe> de Google Maps. */}
          </div>
        </div>
      </Container>
    </section>
  )
}
