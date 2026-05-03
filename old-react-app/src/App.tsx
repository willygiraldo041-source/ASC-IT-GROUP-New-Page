import Navbar from "./features/navbar/Navbar"
import HeroSection from "./features/hero/HeroSection"
import QuienesSomos from "./features/about/QuienesSomos"
import Contacto from "./features/contact/Contacto"
import Footer from "./features/footer/Footer"

function App() {
  return (
    <div className="bg-hero-bg min-h-screen">
      <Navbar />
      <HeroSection />
      <QuienesSomos />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
