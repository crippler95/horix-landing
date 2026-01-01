import { useState } from 'react'
import { Container } from '../common'
import { ChevronDownIcon } from '../common/Icons'
import { faqs } from '../../data/faq'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32 bg-horix-darker">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas{' '}
            <span className="text-gradient">frecuentes</span>
          </h2>
          <p className="text-horix-gray text-lg">
            Todo lo que necesitas saber sobre el control horario y Horix.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-horix-gray-dark/20 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-horix-dark/50 transition-colors"
              >
                <span className="font-medium text-horix-cream pr-4">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-horix-gold shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-horix-gray leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
