import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import Container from './Container'
import { navLinks, navCta } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navLinks.map((link) => link.id)

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const ctaHref = whatsappLink(navCta.message) // TODO: conectar WhatsApp real (ver src/data/site.js)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:bg-brand focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Saltar al contenido
      </a>

      <Container className="flex h-[72px] items-center justify-between gap-6 lg:h-[92px]">
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative block py-2 font-sans text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
                      isActive ? 'text-cream' : 'text-muted hover:text-cream'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-brand transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href={ctaHref} className="hidden sm:inline-flex">
            {navCta.label}
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-11 place-items-center border border-line text-cream transition-colors hover:border-brand hover:text-brand lg:hidden"
          >
            {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ink lg:hidden">
          <Container className="py-4">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id} className="border-b border-line last:border-b-0">
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? 'location' : undefined}
                    className={`block py-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] ${
                      active === link.id ? 'text-brand' : 'text-cream'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href={ctaHref} className="mt-4 w-full sm:hidden">
              {navCta.label}
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
