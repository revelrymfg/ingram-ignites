import { useState, useEffect } from 'react'
import { X, Sparkles, Check } from 'lucide-react'
import { secretDrop } from '../data/mockData'

export default function SecretDrop({ onDismiss }) {
  const [spots, setSpots] = useState(secretDrop.spotsRemaining)
  const [claimed, setClaimed] = useState(false)

  useEffect(() => {
    if (claimed) return
    const interval = setInterval(() => {
      setSpots((s) => (s > 1 ? s - 1 : s))
    }, 5000)
    return () => clearInterval(interval)
  }, [claimed])

  useEffect(() => {
    if (!claimed) return
    const timer = setTimeout(onDismiss, 2000)
    return () => clearTimeout(timer)
  }, [claimed, onDismiss])

  function handleClaim() {
    setSpots((s) => Math.max(s - 1, 0))
    setClaimed(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-overlay h-dvh">
      <div className="absolute inset-0 bg-black/90" onClick={onDismiss} />

      <div className="relative z-10 mx-4 w-full max-w-sm animate-slide-up">
        <div className="bg-bg-card border border-surface-border rounded-2xl px-5 py-6 text-center">
          <button
            onClick={onDismiss}
            className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center text-text-muted hover:text-text-primary"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">
            Secret Drop
          </p>

          <h2 className="text-2xl font-extrabold text-text-primary leading-tight mb-4">
            {secretDrop.headline}
          </h2>

          <p className="text-text-secondary text-sm mb-6">
            {secretDrop.subline}
          </p>

          <div className="mb-6">
            <span className={`text-3xl font-extrabold transition-all duration-300 ${spots <= 3 ? 'text-red-500 animate-count-pulse' : 'text-accent'}`}>
              {spots}
            </span>
            <p className="text-text-muted text-xs uppercase tracking-wider mt-1">spots remaining</p>
          </div>

          {!claimed ? (
            <button
              onClick={handleClaim}
              className="w-full bg-accent hover:bg-accent-light text-white font-bold py-3.5 min-h-[44px] rounded-xl transition-colors text-sm uppercase tracking-wider"
            >
              Claim Your Spot
            </button>
          ) : (
            <div className="bg-accent/10 border border-accent/30 rounded-xl py-3.5 min-h-[44px] flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-accent" strokeWidth={3} />
              <p className="text-accent font-bold text-sm tracking-wide">You're in — see you tonight ✓</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
