const tiers = [
  {
    name: 'Express',
    price: 149,
    features: [
      'Contact-safe wash',
      'Wheel + tire deep clean',
      'Paint decon + clay bar',
      'Gloss sealant (3 months)'
    ]
  },
  {
    name: 'Correction',
    price: 599,
    features: [
      'Full decon + clay bar',
      'Single-stage machine polish',
      'Trim + exhaust polish',
      '6–12 month sealant'
    ],
    highlight: true
  },
  {
    name: 'Ceramic Pro',
    price: 1299,
    features: [
      '2-stage paint correction',
      '9H ceramic coating (2 layers)',
      'Wheels + glass coated',
      '3–5 year protection'
    ]
  }
]

export default function Packages() {
  return (
    <section id="packages" className="relative py-24 bg-[#0a0a0b] text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Packages for every finish</h2>
          <p className="mt-4 text-white/70">Transparent pricing. No surprises. Pick the finish that fits your vibe and budget.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.highlight ? 'border-rose-500/40 bg-white/10 shadow-[0_0_50px_rgba(244,63,94,0.25)]' : 'border-white/10 bg-white/5'} p-6`}>
              {t.highlight && <div className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-red-600 to-rose-500 px-3 py-1 text-[10px] uppercase tracking-widest">Most Popular</div>}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-1 text-4xl font-extrabold">${t.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-rose-500 px-5 py-2.5 text-white font-semibold hover:opacity-90 transition">Book</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
