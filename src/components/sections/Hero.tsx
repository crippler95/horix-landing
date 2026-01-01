import { Container, Button, Badge } from '../common'
import { TimeVisualization } from '../animations'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-horix-gold/5 via-transparent to-transparent opacity-50" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              <Badge>Cumple RDL 8/2019</Badge>
              <Badge variant="dark">RGPD Compliant</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              El fichaje que la{' '}
              <span className="text-gradient">Inspección</span>{' '}
              aprueba
            </h1>

            <p className="text-lg md:text-xl text-horix-gray mb-8 max-w-xl mx-auto lg:mx-0">
              Control horario legal para empresas españolas. Registro inmutable,
              API para Inspección de Trabajo y auditoría completa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg">
                Prueba gratis 14 días
              </Button>
              <Button variant="secondary" size="lg">
                Ver demostración
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-8 justify-center lg:justify-start text-sm text-horix-gray">
              <div className="flex items-center gap-2">
                <span className="text-horix-gold font-bold text-lg">500+</span>
                <span>empresas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-horix-gold font-bold text-lg">1M+</span>
                <span>fichajes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-horix-gold font-bold text-lg">99.9%</span>
                <span>uptime</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <TimeVisualization />
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#caracteristicas" className="text-horix-gray hover:text-horix-gold transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
