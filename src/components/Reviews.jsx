import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Marcus T.',
    text: 'Unreal mirror finish. I thought my black paint was done for. Came out better than new.',
    rating: 5
  },
  {
    name: 'Alina R.',
    text: 'Ceramic package is worth every penny. Water just flies off and washing takes minutes now.',
    rating: 5
  },
  {
    name: 'Devon H.',
    text: 'Professional, on-time, and absolutely meticulous. No holograms, no nonsense.',
    rating: 5
  }
]

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 bg-[#0a0a0b] text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">5‑star experiences. Every time.</h2>
          <p className="mt-4 text-white/70">Our clients expect perfection. We deliver it.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-1 text-rose-400 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-white/90">“{r.text}”</p>
              <p className="mt-4 text-sm text-white/60">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
