export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517940310602-75f38f7f39e8?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519882189396-c3c66c1b49ca?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1600&auto=format&fit=crop'
  ]

  return (
    <section id="gallery" className="relative py-24 bg-[#0b0b0c] text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Results that speak for themselves</h2>
          <p className="mt-4 text-white/70">A look at some recent corrections, coatings, and transformations.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src={src} alt="Detail work" className="h-64 w-full object-cover transition duration-300 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
