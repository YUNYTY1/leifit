// Tamaños del encabezado: "lg" (por defecto) y "md" (más compacto).
const sizes = {
  lg: {
    title: 'mt-8 text-[clamp(2.75rem,6vw,5rem)] sm:mt-10',
    subtitle: 'mt-6 text-lg sm:text-[1.35rem] sm:leading-relaxed',
    note: 'mt-6',
  },
  md: {
    title: 'mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)] sm:mt-8',
    subtitle: 'mt-4 text-base sm:text-lg sm:leading-relaxed',
    note: 'mt-4',
  },
}

/**
 * Cabecera estándar de sección: etiqueta con borde, título con acento amarillo,
 * subtítulo y nota de contenido editable.
 * `controls` (opcional) se coloca a la derecha, alineado abajo (ej. botón de pausa).
 */
export default function SectionHeader({
  id,
  tag,
  title,
  accent,
  subtitle,
  note,
  controls,
  align = 'left',
  size = 'lg',
}) {
  const centered = align === 'center'
  const s = sizes[size]

  const text = (
    <div className={centered ? 'text-center' : undefined}>
      {tag && (
        <p className="block border border-cream/30 px-4 py-2.5 text-left font-sans text-sm font-bold uppercase tracking-[0.15em] text-cream">
          {tag}
        </p>
      )}
      <h2
        id={id}
        className={`font-display font-extrabold uppercase leading-[0.95] text-cream ${s.title}`}
      >
        {title} <span className="text-brand">{accent}</span>
      </h2>
      {subtitle && (
        <p className={`max-w-[44rem] font-sans text-muted ${s.subtitle}`}>{subtitle}</p>
      )}
      {note && (
        <p
          className={`font-sans text-xs font-semibold uppercase tracking-[0.12em] text-faint sm:text-sm ${s.note}`}
        >
          {note}
        </p>
      )}
    </div>
  )

  if (!controls) return <header>{text}</header>

  return (
    <header className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
      <div className="w-fit max-w-full">{text}</div>
      {controls}
    </header>
  )
}