export function TimeVisualization() {
  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96">
      <div className="absolute inset-0 rounded-full border border-horix-gold/10 animate-pulse-ring" />
      <div className="absolute inset-4 rounded-full border border-horix-gold/20 animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
      <div className="absolute inset-8 rounded-full border border-horix-gold/30 animate-pulse-ring" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-12 rounded-full border border-horix-gold/40 animate-pulse-ring" style={{ animationDelay: '1.5s' }} />
      <div className="absolute inset-16 rounded-full bg-gradient-to-br from-horix-gold/20 to-transparent" />

      <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="none" stroke="url(#goldGradient)" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="url(#goldGradient)" strokeWidth="1" strokeDasharray="2 6" opacity="0.3" />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#fcd34d" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl md:text-6xl font-bold text-horix-gold mb-2">09:00</div>
          <div className="text-horix-gray text-sm">Fichaje registrado</div>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 transform translate-x-1/2">
        <div className="glass rounded-lg px-3 py-2 text-xs">
          <span className="text-horix-gold">●</span> Entrada
        </div>
      </div>

      <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2">
        <div className="glass rounded-lg px-3 py-2 text-xs">
          <span className="text-horix-gray">●</span> Pausa
        </div>
      </div>
    </div>
  )
}
