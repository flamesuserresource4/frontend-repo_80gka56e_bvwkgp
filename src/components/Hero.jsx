import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-white/70">
            Elite Auto Detailing
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Insane Gloss. Zero Swirls. Absolute Perfection.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            Premium paint correction, ceramic coatings, and interior restoration for those who demand more than clean — they demand flawless.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-rose-500 px-6 py-3 text-white font-semibold shadow-[0_0_40px_rgba(244,63,94,0.35)] hover:opacity-90 transition">Book a Detail</a>
            <a href="#packages" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition">View Packages</a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-white/60">
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-xs uppercase tracking-widest">5-star reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">10yr</p>
              <p className="text-xs uppercase tracking-widest">protection options</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-xs uppercase tracking-widest">satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
