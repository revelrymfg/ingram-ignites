import { Zap } from 'lucide-react'

export default function Splash({ onEnter }) {
  return (
    <div
      className="h-dvh flex flex-col items-center justify-center px-6 cursor-pointer overflow-hidden"
      onClick={onEnter}
    >
      <div className="animate-fade-in flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mb-8">
          <Zap className="w-10 h-10 text-accent" strokeWidth={2.5} />
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-text-primary mb-2">
          Ingram <span className="text-accent">Ignites</span>
        </h1>

        <p className="text-text-secondary text-base mb-10 max-w-xs">
          Your unfair advantage at Microsoft Ignite
        </p>

        <div className="border border-surface-border rounded-xl px-6 py-4 mb-8 w-full max-w-xs">
          <p className="text-text-muted text-xs uppercase tracking-widest mb-1">Entering as</p>
          <p className="text-text-primary font-semibold text-lg">Jordan Mercer</p>
          <p className="text-text-secondary text-sm">Director of IT, Pacific Mutual</p>
        </div>

        <p className="text-text-muted text-sm animate-pulse mb-10">Tap anywhere to enter</p>

        <div className="flex flex-col items-center gap-2">
          <div className="w-8 border-t border-surface-border" />
          <p className="text-text-muted/50 text-[11px] tracking-wide">Powered by Starch</p>
        </div>
      </div>
    </div>
  )
}
