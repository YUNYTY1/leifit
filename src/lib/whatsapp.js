import { site } from '../data/site'

/**
 * Arma el link de WhatsApp con el número configurado en src/data/site.js.
 * TODO: aquí se conecta WhatsApp real (basta con cambiar el número en site.js).
 */
export function whatsappLink(message = site.defaultMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}
