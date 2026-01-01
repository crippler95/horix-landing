interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = 'h-8', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-full w-auto" fill="none">
        <rect x="4" y="8" width="4" height="24" rx="2" fill="#fbbf24" />
        <rect x="16" y="4" width="4" height="32" rx="2" fill="#fbbf24" />
        <rect x="28" y="12" width="4" height="20" rx="2" fill="#fbbf24" />
        <rect x="4" y="17" width="28" height="3" rx="1.5" fill="#fbbf24" opacity="0.6" />
        <circle cx="8" cy="8" r="2" fill="#fbbf24" />
        <circle cx="30" cy="32" r="2" fill="#fbbf24" />
      </svg>
      {showText && (
        <span className="text-xl font-bold text-horix-cream tracking-tight">
          Horix
        </span>
      )}
    </div>
  )
}
