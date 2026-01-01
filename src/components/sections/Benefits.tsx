import { Container } from '../common'
import { benefits } from '../../data/features'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-horix-darker">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por qué elegir{' '}
            <span className="text-gradient">Horix</span>
          </h2>
          <p className="text-horix-gray text-lg">
            Más que un software de fichaje. Tu aliado en cumplimiento normativo.
          </p>
        </div>

        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <BenefitRow key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function BenefitRow({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()
  const isReverse = index % 2 !== 0

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className={`${isReverse ? 'lg:order-2' : ''}`}>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-horix-cream">
          {benefit.title}
        </h3>
        <p className="text-horix-gray text-lg leading-relaxed">
          {benefit.description}
        </p>
      </div>

      <div className={`${isReverse ? 'lg:order-1' : ''}`}>
        <div className="relative aspect-video rounded-2xl overflow-hidden glass">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-gradient mb-2">
                {benefit.highlight}
              </div>
              <div className="text-horix-gray text-sm">
                {index === 0 && 'multa máxima evitable'}
                {index === 1 && 'tiempo de configuración'}
                {index === 2 && 'tu defensa legal'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
