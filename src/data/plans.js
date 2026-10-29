export const plansContent = {
  tag: 'Planes y membresías',
  title: 'Elige tu próximo',
  accent: 'nivel.',
  subtitle:
    'Tres formas de empezar. Escríbenos y te contamos la disponibilidad y el precio de cada una.',
  note: 'Planes de referencia — reemplazar por las membresías reales de LEI FIT.',
  priceLabel: 'Consultar disponibilidad y precio',
  cta: 'Consultar por WhatsApp',
  //footnote: 'Beneficios de ejemplo — editables.',
}

// TODO: reemplazar los beneficios por los reales de cada membresía.
export const plans = [
  {
    id: 'basico',
    name: 'Plan Mensual',
    featured: false,
    benefits: ['[Lunes a sabado]', '[Ayuda constante]', '[]'],
  },
  {
    id: 'plus',
    name: 'Plan 2 X 1',
    featured: true,
    benefits: [
      '[Beneficio editable]',
      '[Beneficio editable]',
      '[Beneficio editable]',
      '[Beneficio editable]',
    ],
  },
  {
    id: 'premium',
    name: 'Plan Interdiario',
    featured: false,
    benefits: [
      '[Beneficio editable]',
      '[Beneficio editable]',
      '[Beneficio editable]',
      '[Beneficio editable]',
    ],
  },
]
