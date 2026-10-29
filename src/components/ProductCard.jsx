import Button from './Button'
import { whatsappLink } from '../lib/whatsapp'

export default function ProductCard({ name, category, description, image, alt, cta }) {
  // TODO: conectar WhatsApp real (número en src/data/site.js)
  const href = whatsappLink(`Hola, quisiera consultar por ${name} en LEI FIT.`)

  return (
    <article className="flex w-[68vw] shrink-0 snap-start flex-col border border-line bg-surface sm:w-[260px] lg:w-[290px]">
      <div className="relative aspect-square overflow-hidden border-b border-line">
        <img src={image} alt={alt} loading="lazy" className="absolute inset-0 size-full object-cover" />
        <span className="absolute left-3 top-3 bg-brand px-2.5 py-1 font-sans text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl font-bold uppercase leading-none text-cream">{name}</h3>
        <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-muted">{description}</p>
        <Button href={href} size="sm" className="mt-5 w-full">
          {cta}
        </Button>
      </div>
    </article>
  )
}