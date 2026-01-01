import type { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  highlighted?: boolean
  style?: CSSProperties
}

export function Card({ children, className = '', highlighted = false, style }: CardProps) {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300'
  const highlightedStyles = highlighted
    ? 'glass border-horix-gold/30 shadow-lg shadow-horix-gold/5'
    : 'bg-horix-dark/50 border border-horix-gray-dark/20 hover:border-horix-gold/20'

  return (
    <div className={`${baseStyles} ${highlightedStyles} ${className}`} style={style}>
      {children}
    </div>
  )
}
