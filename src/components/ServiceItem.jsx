import { ArrowUpRight } from 'lucide-react'
import { whatsappLink } from '../lib/whatsapp'

// Fila de servicio. Abre WhatsApp con un mensaje sobre ese servicio.
export default function ServiceItem({ number, title, description }) {
  const href = whatsappLink(`Hola, quisiera recibir información sobre el servicio de ${title} en LEI FIT`)

  return (
    <li className="border-t border-line last:border-b">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid grid-cols-[2rem_1fr_auto] gap-x-4 py-5 sm:grid-cols-[4rem_1fr_auto] lg:py-6"
      >
        <span className="pt-1 font-sans text-sm font-bold tracking-wider text-muted transition-colors group-hover:text-brand">
          {number}
        </span>
        <div>
          <h3 className="font-display text-2xl font-extrabold uppercase leading-none text-cream transition-colors group-hover:text-brand sm:text-3xl lg:text-[2rem]">
            {title}
          </h3>
          <p className="mt-2 max-w-[36rem] font-sans text-sm text-muted sm:text-base sm:leading-relaxed">
            {description}
          </p>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="size-5 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
        />
        <span className="sr-only">Consultar por WhatsApp</span>
      </a>
    </li>
  )
}