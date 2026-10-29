import ScrollProgress from './components/ScrollProgress'
import NavBar from './components/NavBar'
import Marquee from './components/Marquee'
import WhatsAppFloat from './components/WhatsAppFloat'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Plans from './sections/Plans'
import Products from './sections/Products'
import Testimonials from './sections/Testimonials'
import Schedule from './sections/Schedule'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <NavBar />
      <main>
        <Hero />
        <Services />
        <Marquee />
        <Plans />
        <Products />
        <Testimonials />
        <Schedule />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}