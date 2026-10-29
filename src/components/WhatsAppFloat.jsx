import WhatsAppIcon from './WhatsAppIcon'
import { whatsappLink } from '../lib/whatsapp'

// Botón flotante de WhatsApp (TODO: número real en src/data/site.js).
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-ink shadow-lg shadow-black/40 transition-transform duration-200 hover:scale-105 sm:bottom-6 sm:right-6 sm:size-20"
    >
      <WhatsAppIcon className="size-7 sm:size-10" />
    </a>
  )
}
