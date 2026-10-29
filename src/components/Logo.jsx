export default function Logo({ className = 'text-[2rem]' }) {
  return (
    <a
      href="#inicio"
      aria-label="LEI FIT, ir al inicio"
      className={`font-display font-extrabold leading-none tracking-[-0.03em] ${className}`}
    >
      <span className="text-cream">LEI</span>
      <span className="text-brand">FIT</span>
    </a>
  )
}
