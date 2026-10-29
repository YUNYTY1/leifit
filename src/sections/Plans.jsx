import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import PlanCard from '../components/PlanCard'
import { plansContent, plans } from '../data/plans'

export default function Plans() {
  return (
    <section id="planes" aria-labelledby="planes-title" className="py-20 lg:py-32">
      <Container>
        <SectionHeader
          id="planes-title"
          tag={plansContent.tag}
          title={plansContent.title}
          accent={plansContent.accent}
          subtitle={plansContent.subtitle}
          note={plansContent.note}
        />

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              {...plan}
              priceLabel={plansContent.priceLabel}
              cta={plansContent.cta}
              footnote={plansContent.footnote}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
