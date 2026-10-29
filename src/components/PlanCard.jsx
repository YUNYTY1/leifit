import { Check } from 'lucide-react'
import Button from './Button'
import { whatsappLink } from '../lib/whatsapp'

export default function PlanCard({ name, benefits, featured, priceLabel, cta, footnote }) {
  // TODO: conectar WhatsApp real (número en src/data/site.js)
  const href = whatsappLink(`Hola, quisiera consultar la disponibilidad y el precio del ${name} en LEI FIT.`)

  const theme = featured
    ? { card: 'bg-brand text-ink border-brand', line: 'border-ink/20', check: 'text-ink', note: 'text-ink/70', label: 'text-ink' }
    : { card: 'bg-surface text-cream border-line', line: 'border-line', check: 'text-brand', note: 'text-faint', label: 'text-muted' }

  return (
    <article className={`flex flex-col border p-8 lg:p-10 ${theme.card}`}>
      <h3 className={`border-b pb-6 font-display text-5xl font-extrabold uppercase leading-none ${theme.line}`}>
        {name}
      </h3>

      <p className={`border-b py-6 font-sans text-sm font-semibold uppercase tracking-[0.12em] ${theme.line} ${theme.label}`}>
        {priceLabel}
      </p>

      <ul>
        {benefits.map((benefit, i) => (
          <li key={i} className={`flex items-center gap-4 border-b py-5 font-sans text-lg ${theme.line}`}>
            <Check aria-hidden="true" className={`size-5 shrink-0 ${theme.check}`} />
            {benefit}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-10">
        <Button href={href} variant={featured ? 'dark' : 'primary'} className="w-full">
          {cta}
        </Button>
        <p className={`mt-5 font-sans text-sm ${theme.note}`}>{footnote}</p>
      </div>
    </article>
  )
}
