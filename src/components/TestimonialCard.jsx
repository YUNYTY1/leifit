import { Quote } from 'lucide-react'

export default function TestimonialCard({ badge, quote, name, time }) {
  return (
    <figure className="flex w-[85vw] shrink-0 snap-start flex-col border border-line bg-surface p-8 sm:w-[420px] lg:w-[525px] lg:p-10">
      <span className="w-fit bg-brand px-4 py-2 font-sans text-sm font-bold uppercase tracking-[0.12em] text-ink">
        {badge}
      </span>

      <Quote aria-hidden="true" className="mt-8 size-8 fill-brand text-brand" />

      <blockquote className="mt-8 flex-1 font-sans text-lg leading-relaxed text-muted">{quote}</blockquote>

      <figcaption className="mt-8 flex items-center gap-5 border-t border-line pt-8">
        <span aria-hidden="true" className="grid size-[60px] shrink-0 place-items-center border border-line text-muted">
          —
        </span>
        <span>
          <span className="block font-display text-2xl font-bold uppercase leading-none text-cream">{name}</span>
          <span className="mt-2 block font-sans text-xs font-semibold uppercase tracking-[0.12em] text-faint">
            {time}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}
