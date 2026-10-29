import { marqueeWords } from '../data/marquee'

// Banda amarilla con palabras en movimiento. Es decorativa (aria-hidden).
export default function Marquee() {
  const half = [...marqueeWords, ...marqueeWords]

  return (
    <div aria-hidden="true" className="overflow-hidden bg-brand py-6 text-ink sm:py-8">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {half.map((word, i) => (
              <li
                key={`${copy}-${i}`}
                className="flex items-center font-display text-[3.25rem] font-extrabold uppercase leading-none sm:text-7xl lg:text-[5.25rem]"
              >
                <span className="px-6 sm:px-9">{word}</span>
                <span className="size-3 rounded-full bg-ink sm:size-5" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
