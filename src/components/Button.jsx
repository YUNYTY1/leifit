import { ArrowRight } from 'lucide-react'

const variants = {
  primary: 'bg-brand text-ink hover:bg-cream',
  outline: 'border border-cream text-cream hover:border-brand hover:text-brand',
  dark: 'bg-ink text-cream hover:bg-cream hover:text-ink',
}

const sizes = {
  sm: 'h-12 px-5 text-lg',
  md: 'h-[60px] px-7 text-xl',
  lg: 'h-16 px-9 text-[1.4rem]',
}

/**
 * Botón / enlace con estilo del diseño.
 * - Con `href` renderiza <a> (los http se abren en pestaña nueva).
 * - Sin `href` renderiza <button> (usa `onClick`).
 */
export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  arrow = true,
  className = '',
  children,
  ...rest
}) {
  const classes = `group inline-flex items-center justify-center gap-3 font-display font-bold uppercase tracking-wide transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  )

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  )
}