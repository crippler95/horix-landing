import { Container, Card, Button } from '../common'
import { CheckIcon } from '../common/Icons'
import { plans } from '../../data/pricing'

export function Pricing() {
  return (
    <section id="precios" className="py-24 md:py-32">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precios{' '}
            <span className="text-gradient">transparentes</span>
          </h2>
          <p className="text-horix-gray text-lg">
            Sin sorpresas. Elige el plan que mejor se adapte a tu empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              highlighted={plan.highlighted}
              className={`relative ${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-horix-gold text-horix-black text-xs font-bold px-3 py-1 rounded-full">
                    Más popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-horix-cream mb-1">{plan.name}</h3>
                <p className="text-horix-gray text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                {plan.price !== null ? (
                  <>
                    <span className="text-4xl font-bold text-horix-cream">{plan.price}€</span>
                    <span className="text-horix-gray">/{plan.period}</span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-horix-cream">Contactar</span>
                )}
                <p className="text-horix-gray text-sm mt-1">{plan.employees}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-horix-gold shrink-0 mt-0.5" />
                    <span className="text-horix-gray text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'primary' : 'secondary'}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-horix-gray-dark text-sm mt-8">
          Todos los precios sin IVA. Facturación mensual o anual disponible.
        </p>
      </Container>
    </section>
  )
}
