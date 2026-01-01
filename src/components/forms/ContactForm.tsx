import { useState } from 'react'
import type { FormEvent } from 'react'
import { Card, Button } from '../common'

type Step = 1 | 2 | 3 | 4

interface FormData {
  nombre: string
  email: string
  empresa: string
  empleados: string
}

export function ContactForm() {
  const [step, setStep] = useState<Step>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    empresa: '',
    empleados: '',
  })

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (step < 4) setStep((step + 1) as Step)
  }

  const prevStep = () => {
    if (step > 1) setStep((step - 1) as Step)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@erbet.com.es', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          empresa: formData.empresa,
          empleados: formData.empleados,
          _subject: `Nueva solicitud Horix - ${formData.empresa}`,
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
      }
    } catch {
      console.error('Error submitting form')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card highlighted className="text-center py-12">
        <div className="w-16 h-16 bg-horix-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-horix-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-horix-cream mb-2">¡Mensaje enviado!</h3>
        <p className="text-horix-gray">
          Te contactaremos en menos de 24 horas.
        </p>
      </Card>
    )
  }

  return (
    <Card highlighted>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-horix-gray">Paso {step} de 4</span>
          <span className="text-sm text-horix-gold">{Math.round((step / 4) * 100)}%</span>
        </div>
        <div className="h-1 bg-horix-dark rounded-full overflow-hidden">
          <div
            className="h-full bg-horix-gold transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-horix-cream">¿Cómo te llamas?</h3>
            <input
              type="text"
              value={formData.nombre}
              onChange={(e) => updateField('nombre', e.target.value)}
              placeholder="Tu nombre"
              required
              className="w-full bg-horix-dark border border-horix-gray-dark/30 rounded-lg px-4 py-3 text-horix-cream placeholder:text-horix-gray-dark focus:outline-none focus:border-horix-gold transition-colors"
            />
            <Button
              type="button"
              onClick={nextStep}
              disabled={!formData.nombre}
              className="w-full"
            >
              Continuar
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-horix-cream">¿Cuál es tu email?</h3>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="tu@empresa.com"
              required
              className="w-full bg-horix-dark border border-horix-gray-dark/30 rounded-lg px-4 py-3 text-horix-cream placeholder:text-horix-gray-dark focus:outline-none focus:border-horix-gold transition-colors"
            />
            <div className="flex gap-3">
              <Button type="button" variant="ghost" onClick={prevStep} className="flex-1">
                Atrás
              </Button>
              <Button
                type="button"
                onClick={nextStep}
                disabled={!formData.email}
                className="flex-1"
              >
                Continuar
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-horix-cream">¿Nombre de tu empresa?</h3>
            <input
              type="text"
              value={formData.empresa}
              onChange={(e) => updateField('empresa', e.target.value)}
              placeholder="Acme S.L."
              required
              className="w-full bg-horix-dark border border-horix-gray-dark/30 rounded-lg px-4 py-3 text-horix-cream placeholder:text-horix-gray-dark focus:outline-none focus:border-horix-gold transition-colors"
            />
            <div className="flex gap-3">
              <Button type="button" variant="ghost" onClick={prevStep} className="flex-1">
                Atrás
              </Button>
              <Button
                type="button"
                onClick={nextStep}
                disabled={!formData.empresa}
                className="flex-1"
              >
                Continuar
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-horix-cream">¿Cuántos empleados sois?</h3>
            <div className="grid grid-cols-2 gap-3">
              {['1-10', '11-50', '51-200', '200+'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => updateField('empleados', option)}
                  className={`px-4 py-3 rounded-lg border transition-all ${
                    formData.empleados === option
                      ? 'bg-horix-gold text-horix-black border-horix-gold'
                      : 'bg-horix-dark border-horix-gray-dark/30 text-horix-gray hover:border-horix-gold/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="ghost" onClick={prevStep} className="flex-1">
                Atrás
              </Button>
              <Button
                type="submit"
                disabled={!formData.empleados || isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar demo'}
              </Button>
            </div>
          </div>
        )}
      </form>
    </Card>
  )
}
