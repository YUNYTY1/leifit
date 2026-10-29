import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const iconBtn =
  'grid size-12 place-items-center border border-cream/30 bg-ink/70 text-cream transition-colors hover:border-brand hover:text-brand'

/**
 * Visor de fotos a pantalla completa.
 * Teclado: Esc cierra, ← → navegan, Tab queda dentro del visor.
 */
export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const root = useRef(null)
  const closeBtn = useRef(null)
  const item = items[index]

  useEffect(() => {
    const opener = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      opener?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'ArrowRight') onNext()
      else if (e.key === 'Tab') {
        const focusable = root.current.querySelectorAll('button')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  return (
    <div
      ref={root}
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotos"
      className="fixed inset-0 z-[80] flex flex-col bg-ink/95 p-4 sm:p-8"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex justify-end">
        <button ref={closeBtn} type="button" onClick={onClose} aria-label="Cerrar galería" className={iconBtn}>
          <X aria-hidden="true" className="size-6" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <button
          type="button"
          onClick={onPrev}
          aria-label="Foto anterior"
          className={`${iconBtn} absolute left-0 z-10 sm:left-2`}
        >
          <ChevronLeft aria-hidden="true" className="size-6" />
        </button>

        <img src={item.src} alt={item.alt} className="max-h-full max-w-full object-contain" />

        <button
          type="button"
          onClick={onNext}
          aria-label="Foto siguiente"
          className={`${iconBtn} absolute right-0 z-10 sm:right-2`}
        >
          <ChevronRight aria-hidden="true" className="size-6" />
        </button>
      </div>

      <p className="pt-4 text-center font-sans text-sm font-bold uppercase tracking-[0.15em] text-cream" aria-live="polite">
        {item.label} · {index + 1}/{items.length}
      </p>
    </div>
  )
}
