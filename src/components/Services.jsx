import { Sparkles, Droplets, ShieldCheck, Brush } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Paint Correction',
    desc: 'Multi-stage machine polishing to remove swirls, scratches, and haze for mirror-level clarity.'
  },
  {
    icon: ShieldCheck,
    title: 'Ceramic Coatings',
    desc: '9H ceramic protection with extreme hydrophobicity and gloss that lasts years, not months.'
  },
  {
    icon: Droplets,
    title: 'Exterior Details',
    desc: 'Contact-safe washes, decon, iron removal, clay bar, wheel deep-clean, and tire dressing.'
  },
  {
    icon: Brush,
    title: 'Interior Restoration',
    desc: 'Deep steam extraction, leather reconditioning, stain removal, and odor neutralization.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#0b0b0c] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_0%_0%,rgba(244,63,94,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Services engineered for perfection</h2>
          <p className="mt-4 text-white/70">Every service is performed with meticulous care, professional tooling, and lighting that reveals everything.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-12 w-12 grid place-items-center rounded-lg bg-gradient-to-br from-red-600 to-rose-500 text-white shadow-[0_0_24px_rgba(244,63,94,0.35)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
