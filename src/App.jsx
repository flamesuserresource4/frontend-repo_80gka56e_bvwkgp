import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Packages from './components/Packages'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <Gallery />
      <Reviews />
      <Contact />
      <footer className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Insane Detail. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#packages" className="hover:text-white transition">Packages</a>
            <a href="#contact" className="hover:text-white transition">Book</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
