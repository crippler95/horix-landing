import { useNavigate } from 'react-router-dom'
import { Container } from '../common'
import { Logo } from '../common/Logo'

interface LegalPageWrapperProps {
  title: string
  description?: string
  children: React.ReactNode
}

export function LegalPageWrapper({ title, description, children }: LegalPageWrapperProps) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-horix-black">
      <header className="sticky top-0 z-50 bg-horix-black/95 backdrop-blur-sm border-b border-horix-gray-dark/20">
        <Container>
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center">
              <Logo className="h-8" />
            </a>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-horix-gray hover:text-horix-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-sm">Cerrar</span>
            </button>
          </div>
        </Container>
      </header>

      <main className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-horix-cream mb-2">{title}</h1>
              {description && (
                <p className="text-horix-gray">{description}</p>
              )}
            </div>
            {children}
          </div>
        </Container>
      </main>

      <footer className="py-8 border-t border-horix-gray-dark/20">
        <Container>
          <p className="text-center text-horix-gray-dark text-sm">
            © {new Date().getFullYear()} Horix. Todos los derechos reservados.
          </p>
        </Container>
      </footer>
    </div>
  )
}
