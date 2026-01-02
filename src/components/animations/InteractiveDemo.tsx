import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarIcon, SunIcon, ChartBarIcon, CheckCircleIcon, PauseIcon, PlayIcon, ShieldCheckIcon, LockIcon } from '../common/Icons'

type DemoState = 'idle' | 'clicking' | 'working' | 'pause-menu' | 'paused' | 'clock-out' | 'summary' | 'features' | 'reset'

interface DemoStep {
  state: DemoState
  duration: number
}

const DEMO_STEPS: DemoStep[] = [
  { state: 'idle', duration: 2500 },
  { state: 'clicking', duration: 600 },
  { state: 'working', duration: 5000 },
  { state: 'pause-menu', duration: 1500 },
  { state: 'paused', duration: 2000 },
  { state: 'working', duration: 2500 },
  { state: 'clock-out', duration: 1200 },
  { state: 'summary', duration: 3000 },
  { state: 'features', duration: 4000 },
  { state: 'reset', duration: 500 },
]

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

function DeviceFrame({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="relative w-72 h-[480px] md:w-80 md:h-[520px]"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute -inset-3 bg-gradient-to-br from-horix-gold/20 via-horix-gold/5 to-transparent rounded-[36px] blur-xl" />

      <div className="relative w-full h-full glass rounded-[28px] border border-horix-gold/20 overflow-hidden shadow-2xl">
        <div className="h-7 bg-horix-black/60 flex items-center justify-between px-4 border-b border-white/5">
          <span className="text-[10px] text-horix-gray font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-horix-gold" />
            <span className="text-[10px] text-horix-gold font-semibold">Horix</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="w-1 h-2 bg-horix-gray rounded-sm" />
              <div className="w-1 h-2.5 bg-horix-gray rounded-sm" />
              <div className="w-1 h-3 bg-horix-gray rounded-sm" />
              <div className="w-1 h-3.5 bg-white rounded-sm" />
            </div>
          </div>
        </div>

        <div className="p-4 h-[calc(100%-28px)] overflow-hidden">
          {children}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-[28px] pointer-events-none" />
    </motion.div>
  )
}

function IdleScreen() {
  return (
    <motion.div
      className="h-full flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="text-center mb-8">
        <motion.div
          className="w-14 h-14 rounded-full bg-gradient-to-br from-horix-gold/30 to-horix-gold/10 mx-auto mb-3 flex items-center justify-center border border-horix-gold/20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", damping: 12 }}
        >
          <span className="text-lg font-bold text-horix-gold">AM</span>
        </motion.div>
        <motion.p
          className="text-horix-cream font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Buenos dias, Ana
        </motion.p>
        <motion.p
          className="text-xs text-horix-gray mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Martes, 14 de enero
        </motion.p>
      </motion.div>

      <motion.button
        className="px-7 py-3.5 bg-gradient-to-r from-horix-gold to-amber-500 text-horix-black rounded-xl font-semibold text-base shadow-lg shadow-horix-gold/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: [1, 1.02, 1],
          boxShadow: [
            '0 10px 25px -5px rgba(251, 191, 36, 0.2)',
            '0 10px 40px -5px rgba(251, 191, 36, 0.4)',
            '0 10px 25px -5px rgba(251, 191, 36, 0.2)'
          ]
        }}
        transition={{
          opacity: { delay: 0.4 },
          y: { delay: 0.4 },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        Fichar entrada
      </motion.button>

      <motion.p
        className="text-[10px] text-horix-gray mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Pulsa para iniciar tu jornada
      </motion.p>
    </motion.div>
  )
}

function ClickingScreen() {
  return (
    <motion.div
      className="h-full flex flex-col items-center justify-center relative"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-horix-gold/30 to-horix-gold/10 mx-auto mb-3 flex items-center justify-center border border-horix-gold/20">
          <span className="text-lg font-bold text-horix-gold">AM</span>
        </div>
        <p className="text-horix-cream font-medium">Buenos dias, Ana</p>
        <p className="text-xs text-horix-gray mt-1">Martes, 14 de enero</p>
      </div>

      <motion.button
        className="px-7 py-3.5 bg-gradient-to-r from-horix-gold to-amber-500 text-horix-black rounded-xl font-semibold text-base"
        animate={{ scale: [1, 0.95, 1] }}
        transition={{ duration: 0.3, times: [0, 0.5, 1] }}
      >
        Fichar entrada
      </motion.button>

      <motion.div
        className="absolute pointer-events-none"
        initial={{ x: 60, y: 40, opacity: 0 }}
        animate={{
          x: [60, 0, 0],
          y: [40, 15, 15],
          opacity: [0, 1, 1]
        }}
        transition={{ duration: 0.4, times: [0, 0.7, 1] }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="drop-shadow-lg">
          <path d="M5.5 3.21V20.8l6.28-6.29h5.72L5.5 3.21z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute w-8 h-8 rounded-full border-2 border-horix-gold"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ x: '-50%', y: '-50%' }}
      />
    </motion.div>
  )
}

function WorkingScreen({ time, isPaused = false }: { time: number; isPaused?: boolean }) {
  return (
    <motion.div
      className="h-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-4">
        <p className="text-xs text-horix-gray mb-1.5">Trabajando desde las 09:00</p>
        <div className="flex items-center justify-center gap-1.5">
          <motion.span
            className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-emerald-500'}`}
            animate={isPaused ? {} : { opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className={`text-[10px] font-medium ${isPaused ? 'text-amber-500' : 'text-emerald-500'}`}>
            {isPaused ? 'En pausa' : 'En curso'}
          </span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <motion.div
          className="text-4xl md:text-5xl font-mono font-bold text-horix-gold tabular-nums tracking-tight"
          key={time}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
        >
          {formatTime(time)}
        </motion.div>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <motion.button
            className="py-2.5 rounded-lg bg-horix-dark/80 border border-horix-gray-dark/50 text-horix-cream text-sm font-medium flex items-center justify-center gap-1.5"
            whileHover={{ scale: 1.02 }}
          >
            <PauseIcon className="w-4 h-4" />
            Pausa
          </motion.button>
          <motion.button
            className="py-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium"
            whileHover={{ scale: 1.02 }}
          >
            Desfichar
          </motion.button>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          <div className="p-2 rounded-lg bg-horix-dark/50 text-center">
            <p className="text-[9px] text-horix-gray mb-0.5">Hoy</p>
            <p className="text-xs text-horix-cream font-medium">{formatTime(time)}</p>
          </div>
          <div className="p-2 rounded-lg bg-horix-dark/50 text-center">
            <p className="text-[9px] text-horix-gray mb-0.5">Semana</p>
            <p className="text-xs text-horix-cream font-medium">24h 15m</p>
          </div>
          <div className="p-2 rounded-lg bg-horix-dark/50 text-center">
            <p className="text-[9px] text-horix-gray mb-0.5">Mes</p>
            <p className="text-xs text-horix-cream font-medium">142h</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function PauseMenuScreen({ time }: { time: number }) {
  return (
    <motion.div
      className="h-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center mb-4">
        <p className="text-xs text-horix-gray mb-1.5">Trabajando desde las 09:00</p>
        <div className="flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-medium text-emerald-500">En curso</span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="text-4xl md:text-5xl font-mono font-bold text-horix-gold tabular-nums tracking-tight">
          {formatTime(time)}
        </div>
      </div>

      <motion.div
        className="absolute inset-x-4 bottom-4 glass rounded-xl p-3 border border-horix-gold/20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <p className="text-xs text-horix-gray mb-2">Selecciona tipo de pausa:</p>
        <div className="space-y-1.5">
          {['Descanso', 'Comida', 'Personal'].map((type, i) => (
            <motion.button
              key={type}
              className={`w-full py-2 rounded-lg text-sm font-medium ${i === 0 ? 'bg-horix-gold/20 text-horix-gold border border-horix-gold/30' : 'bg-horix-dark/50 text-horix-cream'}`}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {type}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

function PausedScreen({ time }: { time: number }) {
  return (
    <motion.div
      className="h-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center mb-4">
        <p className="text-xs text-horix-gray mb-1.5">Pausa iniciada a las 11:30</p>
        <div className="flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="text-[10px] font-medium text-amber-500">Descanso</span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-mono font-bold text-horix-gray/50 tabular-nums tracking-tight">
            {formatTime(time)}
          </div>
          <motion.p
            className="text-xs text-amber-500 mt-2"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Contador pausado
          </motion.p>
        </div>
      </div>

      <motion.button
        className="py-3 rounded-xl bg-gradient-to-r from-horix-gold to-amber-500 text-horix-black font-semibold flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(251, 191, 36, 0.4)',
            '0 0 0 8px rgba(251, 191, 36, 0)',
          ]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <PlayIcon className="w-4 h-4" />
        Reanudar
      </motion.button>
    </motion.div>
  )
}

function ClockOutScreen() {
  return (
    <motion.div
      className="h-full flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-16 h-16 rounded-full bg-horix-gold/20 flex items-center justify-center mb-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 10 }}
        >
          <CheckCircleIcon className="w-10 h-10 text-horix-gold" />
        </motion.div>
      </motion.div>

      <motion.p
        className="text-lg font-semibold text-horix-cream"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Fichaje registrado
      </motion.p>
      <motion.p
        className="text-sm text-horix-gray"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Salida: 17:45
      </motion.p>
    </motion.div>
  )
}

function SummaryScreen() {
  return (
    <motion.div
      className="h-full flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 10 }}
        className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4"
      >
        <CheckCircleIcon className="w-10 h-10 text-emerald-500" />
      </motion.div>

      <motion.h3
        className="text-lg font-semibold text-horix-cream mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Jornada completada
      </motion.h3>

      <motion.div
        className="text-4xl font-bold text-horix-gold mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        8h 15m
      </motion.div>

      <motion.div
        className="w-full max-w-[200px] space-y-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {[
          { label: 'Entrada', value: '09:00' },
          { label: 'Salida', value: '17:45' },
          { label: 'Pausas', value: '30 min' },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            className="flex justify-between text-sm py-1.5 border-b border-horix-gray-dark/30"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <span className="text-horix-gray">{item.label}</span>
            <span className="text-horix-cream font-medium">{item.value}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

function FeaturesScreen() {
  const [activeIndex, setActiveIndex] = useState(0)

  const features = [
    { icon: CalendarIcon, title: 'Calendario', desc: 'Historial de fichajes' },
    { icon: SunIcon, title: 'Vacaciones', desc: 'Solicita dias libres' },
    { icon: ChartBarIcon, title: 'Informes', desc: 'Exporta datos' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="h-full flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className="text-xs text-horix-gray mb-6">Tambien puedes...</p>

      <div className="h-32 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-horix-gold/10 flex items-center justify-center mx-auto mb-3 border border-horix-gold/20">
              {(() => {
                const Icon = features[activeIndex].icon
                return <Icon className="w-7 h-7 text-horix-gold" />
              })()}
            </div>
            <h4 className="text-base font-semibold text-horix-cream">
              {features[activeIndex].title}
            </h4>
            <p className="text-xs text-horix-gray mt-1">
              {features[activeIndex].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-1.5 mt-4">
        {features.map((_, i) => (
          <motion.div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeIndex ? 'bg-horix-gold' : 'bg-horix-gray-dark'}`}
            animate={i === activeIndex ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

function FloatingIndicators({ state }: { state: DemoState }) {
  return (
    <>
      <AnimatePresence>
        {(state === 'working' || state === 'pause-menu') && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute -right-2 top-1/4 glass rounded-lg px-2.5 py-1.5 border border-horix-gold/20"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[10px] text-horix-cream font-medium">RDL 8/2019</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {state === 'summary' && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="absolute -left-2 top-1/3 glass rounded-lg px-2.5 py-1.5 border border-horix-gold/20"
          >
            <div className="flex items-center gap-1.5">
              <LockIcon className="w-3.5 h-3.5 text-horix-gold" />
              <span className="text-[10px] text-horix-cream font-medium">Inmutable</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function InteractiveDemo() {
  const [stepIndex, setStepIndex] = useState(0)
  const [workTime, setWorkTime] = useState(0)
  const [pausedTime, setPausedTime] = useState(0)

  const currentStep = DEMO_STEPS[stepIndex]

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = stepIndex >= DEMO_STEPS.length - 1 ? 0 : stepIndex + 1
      if (nextIndex === 0) {
        setWorkTime(0)
        setPausedTime(0)
      }
      setStepIndex(nextIndex)
    }, currentStep.duration)

    return () => clearTimeout(timer)
  }, [stepIndex, currentStep.duration])

  useEffect(() => {
    if (currentStep.state !== 'working') return

    const interval = setInterval(() => {
      setWorkTime((t) => {
        const newTime = t + 47
        return newTime > 29715 ? 29715 : newTime
      })
    }, 100)

    return () => clearInterval(interval)
  }, [currentStep.state, stepIndex])

  useEffect(() => {
    if (currentStep.state === 'paused' || currentStep.state === 'pause-menu') {
      setPausedTime(workTime)
    }
  }, [currentStep.state, workTime])

  const renderContent = () => {
    switch (currentStep.state) {
      case 'idle':
        return <IdleScreen />
      case 'clicking':
        return <ClickingScreen />
      case 'working':
        return <WorkingScreen time={workTime} />
      case 'pause-menu':
        return <PauseMenuScreen time={pausedTime} />
      case 'paused':
        return <PausedScreen time={pausedTime} />
      case 'clock-out':
        return <ClockOutScreen />
      case 'summary':
        return <SummaryScreen />
      case 'features':
        return <FeaturesScreen />
      case 'reset':
        return (
          <motion.div
            className="h-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FeaturesScreen />
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative">
      <DeviceFrame>
        <AnimatePresence mode="wait">
          <motion.div key={`${currentStep.state}-${stepIndex}`} className="h-full">
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </DeviceFrame>

      <FloatingIndicators state={currentStep.state} />
    </div>
  )
}
