import { Container, Button } from '../common'
import { ContactForm } from '../forms/ContactForm'

export function CTA() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para{' '}
              <span className="text-gradient">cumplir la ley</span>?
            </h2>
            <p className="text-horix-gray text-lg mb-8 leading-relaxed">
              Empieza hoy con 14 días de prueba gratuita. Sin tarjeta de crédito.
              Sin compromiso. Configura tu empresa en minutos.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-horix-gold" />
                <span className="text-horix-gray">Soporte técnico incluido</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-horix-gold" />
                <span className="text-horix-gray">Migración de datos asistida</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-horix-gold" />
                <span className="text-horix-gray">Formación para tu equipo</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button size="lg">
                Empezar prueba gratis
              </Button>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
