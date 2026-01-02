import { useState, useEffect } from 'react'

export interface CookiePreferences {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieConsentData {
  timestamp: string
  preferences: CookiePreferences
  version: string
}

const COOKIE_CONSENT_KEY = 'horix-cookie-consent'
const CURRENT_POLICY_VERSION = '1.0'

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState<boolean>(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadCookiePreferences()
  }, [])

  const loadCookiePreferences = () => {
    setIsLoading(true)
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
      if (stored) {
        const data: CookieConsentData = JSON.parse(stored)
        if (data.version === CURRENT_POLICY_VERSION) {
          setPreferences(data.preferences)
          setHasConsent(true)
          applyCookiePreferences(data.preferences)
        }
      }
    } catch (error) {
      console.error('Error loading cookie preferences:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const saveToLocalStorage = (data: CookieConsentData) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(data))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }

  const savePreferences = (newPreferences: CookiePreferences) => {
    const consentData: CookieConsentData = {
      timestamp: new Date().toISOString(),
      preferences: newPreferences,
      version: CURRENT_POLICY_VERSION
    }

    setPreferences(newPreferences)
    setHasConsent(true)
    saveToLocalStorage(consentData)
    applyCookiePreferences(newPreferences)
  }

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
        ad_user_data: prefs.marketing ? 'granted' : 'denied',
        ad_personalization: prefs.marketing ? 'granted' : 'denied'
      })
    }
  }

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    })
  }

  const acceptNecessaryOnly = () => {
    savePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    })
  }

  const resetConsent = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY)
    setHasConsent(false)
    setPreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    })
  }

  return {
    hasConsent,
    preferences,
    isLoading,
    savePreferences,
    acceptAll,
    acceptNecessaryOnly,
    resetConsent
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
