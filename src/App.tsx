import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components/layout'
import { Hero, Features, Benefits, Pricing, FAQ, CTA } from './components/sections'
import { CookieConsent } from './components/legal'
import { PrivacyPolicy, CookiePolicy, Terms, LegalNotice } from './pages/Legal'

function LandingPage() {
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

function App() {
  return (
    <BrowserRouter>
      <CookieConsent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/legal/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/legal/cookies" element={<CookiePolicy />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/legal/notice" element={<LegalNotice />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
