import { useState } from 'react'
import { Menu, X, Car, Phone, Star } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-red-600 to-rose-500 text-white shadow-[0_0_24px_rgba(244,63,94,0.5)]">
              <Car className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-tight">Insane Detail</p>
              <p className="text-xs text-white/60">Elite Auto Aesthetics</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollTo('services')} className="text-white/80 hover:text-white transition">Services</button>
            <button onClick={() => scrollTo('packages')} className="text-white/80 hover:text-white transition">Packages</button>
            <button onClick={() => scrollTo('gallery')} className="text-white/80 hover:text-white transition">Gallery</button>
            <button onClick={() => scrollTo('reviews')} className="text-white/80 hover:text-white transition">Reviews</button>
            <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-rose-500 px-4 py-2 text-white shadow-[0_0_24px_rgba(244,63,94,0.35)] hover:opacity-90 transition">
              <Phone className="h-4 w-4" /> Book Now
            </button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-6">
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-4">
            <div className="grid gap-2 text-sm">
              <button onClick={() => scrollTo('services')} className="text-left text-white/80 hover:text-white py-2">Services</button>
              <button onClick={() => scrollTo('packages')} className="text-left text-white/80 hover:text-white py-2">Packages</button>
              <button onClick={() => scrollTo('gallery')} className="text-left text-white/80 hover:text-white py-2">Gallery</button>
              <button onClick={() => scrollTo('reviews')} className="text-left text-white/80 hover:text-white py-2">Reviews</button>
              <button onClick={() => scrollTo('contact')} className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-rose-500 px-4 py-2 text-white shadow-[0_0_24px_rgba(244,63,94,0.35)]"> 
                <Star className="h-4 w-4"/> Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
