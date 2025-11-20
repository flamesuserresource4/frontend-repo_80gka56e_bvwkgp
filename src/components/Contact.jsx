import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setStatus('Request received! We will reach out shortly.')
      else setStatus(data.detail || 'Something went wrong.')
    } catch (err) {
      setStatus('Network error. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-[#0b0b0c] text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Book your insane glow</h2>
          <p className="mt-4 text-white/70">Tell us about your vehicle and goals. We’ll craft the perfect plan.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4">
            <input name="name" required placeholder="Full name" className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-rose-500/50" />
            <input name="email" type="email" required placeholder="Email" className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-rose-500/50" />
            <input name="phone" required placeholder="Phone" className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-rose-500/50" />
            <input name="vehicle" required placeholder="Vehicle (Year Make Model)" className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-rose-500/50" />
          </div>
          <div className="grid gap-4">
            <select name="service" className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-rose-500/50">
              <option>Paint Correction</option>
              <option>Ceramic Coating</option>
              <option>Exterior Detail</option>
              <option>Interior Restoration</option>
            </select>
            <textarea name="message" rows="5" placeholder="What are you looking to achieve?" className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-rose-500/50" />
            <button className="rounded-xl bg-gradient-to-r from-red-600 to-rose-500 px-6 py-3 font-semibold shadow-[0_0_24px_rgba(244,63,94,0.35)] hover:opacity-90 transition">Request Quote</button>
            {status && <p className="text-sm text-white/80">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
