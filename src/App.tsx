import { Header, Footer } from './components/layout'
import { Hero, Features, Benefits, Pricing, FAQ, CTA } from './components/sections'

function App() {
  return (
    <div className="min-h-screen bg-horix-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
