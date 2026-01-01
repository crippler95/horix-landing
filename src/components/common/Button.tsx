import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-horix-gold text-horix-black hover:bg-horix-gold-light',
  secondary: 'bg-transparent border border-horix-gold text-horix-gold hover:bg-horix-gold hover:text-horix-black',
  ghost: 'bg-transparent text-horix-cream hover:text-horix-gold',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`font-semibold rounded-lg transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
