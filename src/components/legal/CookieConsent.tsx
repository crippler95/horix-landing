import { useState } from 'react'
import { useCookieConsent } from '../../hooks/useCookieConsent'
import type { CookiePreferences } from '../../hooks/useCookieConsent'

export function CookieConsent() {
  const {
    hasConsent,
    preferences,
    isLoading,
    savePreferences,
    acceptAll,
    acceptNecessaryOnly
  } = useCookieConsent()

  const [showCustomization, setShowCustomization] = useState(false)
  const [customPreferences, setCustomPreferences] = useState<CookiePreferences>(preferences)

  if (isLoading || hasConsent) return null

  const handleAcceptAll = () => {
    acceptAll()
  }

  const handleAcceptNecessary = () => {
    acceptNecessaryOnly()
  }

  const handleCustomSave = () => {
    savePreferences(customPreferences)
    setShowCustomization(false)
  }

  const handleCustomize = () => {
    setCustomPreferences(preferences)
    setShowCustomization(true)
  }

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    setCustomPreferences(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <>
      {showCustomization && (
        <div className="fixed inset-0 bg-black/60 z-[9998]" />
      )}

      <div className="fixed bottom-0 left-0 right-0 z-[9999]">
        <div className="bg-horix-darker border-t border-horix-gold/20 shadow-2xl">
          {!showCustomization ? (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-2xl">🍪</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-horix-cream mb-1">
                        Uso de Cookies
                      </h3>
                      <p className="text-xs sm:text-sm text-horix-gray leading-relaxed">
                        Utilizamos cookies propias y de terceros para mejorar nuestros servicios y analizar
                        sus habitos de navegacion.{' '}
                        <a
                          href="/legal/cookies"
                          className="text-horix-gold hover:underline"
                        >
                          Ver politica completa
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 lg:flex-shrink-0">
                  <button
                    onClick={handleCustomize}
                    className="px-4 py-2 text-sm text-horix-gray bg-horix-dark hover:bg-horix-dark/80 rounded-lg transition-colors border border-horix-gray-dark"
                  >
                    Personalizar
                  </button>
                  <button
                    onClick={handleAcceptNecessary}
                    className="px-4 py-2 text-sm text-horix-gray bg-horix-dark hover:bg-horix-dark/80 rounded-lg transition-colors border border-horix-gray-dark"
                  >
                    Solo necesarias
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 text-sm text-horix-black bg-horix-gold hover:bg-horix-gold/90 rounded-lg transition-colors font-medium"
                  >
                    Aceptar todas
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-horix-cream">
                  Configuracion de Cookies
                </h3>
                <button
                  onClick={() => setShowCustomization(false)}
                  className="text-horix-gray hover:text-horix-cream"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="border border-horix-gray-dark rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-horix-cream">Cookies Necesarias</h4>
                    <span className="text-xs text-horix-gray bg-horix-dark px-2 py-1 rounded">Siempre activas</span>
                  </div>
                  <p className="text-sm text-horix-gray">
                    Esenciales para el funcionamiento basico del sitio web. No se pueden desactivar.
                  </p>
                </div>

                <div className="border border-horix-gray-dark rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-horix-cream">Cookies Funcionales</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={customPreferences.functional}
                        onChange={(e) => handlePreferenceChange('functional', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-horix-dark rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-horix-gray after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-horix-gold peer-checked:after:bg-horix-black"></div>
                    </label>
                  </div>
                  <p className="text-sm text-horix-gray">
                    Permiten recordar sus preferencias para mejorar su experiencia.
                  </p>
                </div>

                <div className="border border-horix-gray-dark rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-horix-cream">Cookies de Analisis</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={customPreferences.analytics}
                        onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-horix-dark rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-horix-gray after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-horix-gold peer-checked:after:bg-horix-black"></div>
                    </label>
                  </div>
                  <p className="text-sm text-horix-gray">
                    Nos ayudan a entender como los visitantes interactuan con el sitio web.
                  </p>
                </div>

                <div className="border border-horix-gray-dark rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-horix-cream">Cookies de Marketing</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={customPreferences.marketing}
                        onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-horix-dark rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-horix-gray after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-horix-gold peer-checked:after:bg-horix-black"></div>
                    </label>
                  </div>
                  <p className="text-sm text-horix-gray">
                    Se utilizan para mostrar anuncios relevantes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-horix-gray-dark">
                <button
                  onClick={() => setShowCustomization(false)}
                  className="px-4 py-2 text-sm text-horix-gray bg-horix-dark hover:bg-horix-dark/80 rounded-lg transition-colors border border-horix-gray-dark"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleCustomSave}
                  className="px-6 py-2 text-sm text-horix-black bg-horix-gold hover:bg-horix-gold/90 rounded-lg transition-colors font-medium"
                >
                  Guardar Configuracion
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
