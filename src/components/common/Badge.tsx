import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'gold' | 'dark'
}

export function Badge({ children, variant = 'gold' }: BadgeProps) {
  const styles = variant === 'gold'
    ? 'bg-horix-gold/10 text-horix-gold border-horix-gold/20'
    : 'bg-horix-dark text-horix-gray border-horix-gray-dark/30'

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${styles}`}>
      {children}
    </span>
  )
}
