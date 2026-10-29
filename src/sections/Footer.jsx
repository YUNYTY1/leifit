import Container from '../components/Container'
import Logo from '../components/Logo'
import { footerContent as c } from '../data/footer'
import { navLinks } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'

const colTitle = 'font-sans text-sm font-bold uppercase tracking-[0.15em] text-cream'
const smallLabel = 'font-sans text-xs font-semibold uppercase tracking-[0.15em] text-muted'

export default function Footer() {
  return (
    <footer className="border-t border-line pt-16 lg:pt-24">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[3fr_2fr_1.3fr_1.1fr] lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="text-[2.75rem]" />
            <p className="mt-6 max-w-[34rem] font-sans text-lg leading-relaxed text-muted">{c.description}</p>
          </div>

          <nav aria-label="Pie de página">
            <h2 className={colTitle}>{c.navTitle}</h2>
            <ul className="mt-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="font-sans text-lg text-muted transition-colors hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={colTitle}>{c.socialTitle}</h2>
            <ul className="mt-6 flex flex-col items-start gap-3">
              {c.socials.map((s) => (
                <li key={s.label}>
                  {/* TODO: reemplazar href "#" por el link real de la red */}
                  <a
                    href={s.href}
                    className="block border border-line px-4 py-2.5 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-cream transition-colors hover:border-brand hover:text-brand"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-[14rem] font-sans text-sm text-faint">{c.socialNote}</p>
          </div>

          <div>
            <h2 className={colTitle}>{c.contactTitle}</h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className={smallLabel}>Teléfono</dt>
                <dd className="mt-1 font-sans text-lg text-muted">{c.phone}</dd>
              </div>
              <div>
                <dt className={smallLabel}>Correo</dt>
                <dd className="mt-1 font-sans text-lg text-muted">{c.email}</dd>
              </div>
            </dl>
            <a
              href={whatsappLink(c.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-sans text-lg text-brand underline-offset-4 hover:underline"
            >
              {c.whatsappLabel}
            </a>
            <p className="mt-3 font-sans text-sm text-faint">{c.whatsappNote}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <p className="font-sans text-sm text-muted">{c.copyright}</p>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-muted">{c.slogan}</p>
        </div>
      </Container>
    </footer>
  )
}
