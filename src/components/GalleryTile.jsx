import { Maximize2 } from 'lucide-react'

// Foto de la galería. Al tocarla se abre en grande (lightbox).
export default function GalleryTile({ src, alt, label, onOpen, className = '' }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ver en grande: ${label}`}
      className={`group relative block h-[260px] w-full overflow-hidden border border-line text-left transition-colors duration-200 hover:border-brand focus-visible:border-brand sm:h-[320px] lg:h-[373px] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      <span
        aria-hidden="true"
        className="absolute right-5 top-5 grid size-12 place-items-center border border-cream/40 bg-ink/60 text-cream opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        <Maximize2 className="size-5" />
      </span>
      <span className="absolute bottom-5 left-5 font-sans text-sm font-bold uppercase tracking-[0.15em] text-cream">
        {label}
      </span>
    </button>
  )
}
