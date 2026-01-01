import { Container, Card } from '../common'
import { iconMap } from '../common/Icons'
import { features } from '../../data/features'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export function Features() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <section id="caracteristicas" className="py-24 md:py-32">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Todo lo que necesitas para{' '}
            <span className="text-gradient">cumplir la ley</span>
          </h2>
          <p className="text-horix-gray text-lg">
            Diseñado específicamente para el marco legal español.
            Cada funcionalidad pensada para proteger tu empresa.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <Card
                key={feature.title}
                className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="w-12 h-12 rounded-lg bg-horix-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-horix-gold" />
                </div>
                <h3 className="text-lg font-semibold text-horix-cream mb-2">
                  {feature.title}
                </h3>
                <p className="text-horix-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
