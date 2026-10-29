import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import ServiceItem from '../components/ServiceItem'
import ServiceSlider from '../components/ServiceSlider'
import { servicesContent, services, serviceSlides, slideInterval } from '../data/services'

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="py-14 lg:py-20">
      <Container>
        <SectionHeader
          id="servicios-title"
          size="md"
          tag={servicesContent.tag}
          title={servicesContent.title}
          accent={servicesContent.accent}
          subtitle={servicesContent.subtitle}
          note={servicesContent.note}
        />

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[4fr_6fr] lg:gap-12">
          <ServiceSlider slides={serviceSlides} interval={slideInterval} />

          <ul>
            {services.map((service) => (
              <ServiceItem key={service.id} {...service} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}