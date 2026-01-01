import { useState, useEffect } from 'react'
import { Container, Button } from '../common'
import { Logo } from '../common/Logo'
import { MenuIcon, XIcon } from '../common/Icons'

const navLinks = [
  { href: '#caracteristicas', label: 'Características' },
  { href: '#precios', label: 'Precios' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <a href="#" className="relative z-10">
            <Logo className="h-8" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-horix-gray hover:text-horix-cream transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Iniciar sesión
            </Button>
            <Button variant="primary" size="sm">
              Solicitar demo
            </Button>
          </div>

          <button
            className="md:hidden relative z-10 text-horix-cream p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-horix-gold/10">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-horix-gray hover:text-horix-cream transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-horix-gray-dark/30 space-y-3">
                <Button variant="ghost" size="sm" className="w-full">
                  Iniciar sesión
                </Button>
                <Button variant="primary" size="sm" className="w-full">
                  Solicitar demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
