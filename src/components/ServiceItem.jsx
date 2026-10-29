import { ArrowUpRight } from 'lucide-react'
import { whatsappLink } from '../lib/whatsapp'

// Fila de servicio. Abre WhatsApp con un mensaje sobre ese servicio.
// Fila de servicio (solo informativa, sin enlace).
export default function ServiceItem({ number, title, description }) {
  return (
    <li className="grid grid-cols-[2rem_1fr] gap-x-4 border-t border-line py-5 last:border-b sm:grid-cols-[4rem_1fr] lg:py-6">
      <span className="pt-1 font-sans text-sm font-bold tracking-wider text-muted">{number}</span>
      <div>
        <h3 className="font-display text-2xl font-extrabold uppercase leading-none text-cream sm:text-3xl lg:text-[2rem]">
          {title}
        </h3>
        <p className="mt-2 max-w-[36rem] font-sans text-sm text-muted sm:text-base sm:leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  )
}