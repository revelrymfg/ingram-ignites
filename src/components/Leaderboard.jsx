import { useState } from 'react'
import { Trophy, ChevronDown } from 'lucide-react'

const rankColors = {
  1: 'text-gold',
  2: 'text-silver',
  3: 'text-bronze',
}

const pointValues = [
  { label: 'Mission complete', pts: 200 },
  { label: 'Booth check-in', pts: 150 },
  { label: 'Secret drop claimed', pts: 300 },
  { label: 'Rep meeting booked', pts: 500 },
  { label: 'Daily mission bonus (all 3)', pts: 500 },
]

export default function Leaderboard({ gameState }) {
  const { leaderboard } = gameState
  const [showHowToEarn, setShowHowToEarn] = useState(false)

  return (
    <div className="animate-fade-in">
      <div className="mb-6 pt-2 flex items-center justify-between">
        <div>
          <p className="text-text-muted text-sm">Live</p>
          <h1 className="text-2xl font-bold text-text-primary">Leaderboard</h1>
        </div>
        <Trophy className="w-6 h-6 text-accent" />
      </div>

      <div className="space-y-2">
        {leaderboard.map((player, i) => (
          <div
            key={player.name}
            className={`flex items-center gap-4 bg-bg-card border rounded-xl px-4 py-3.5 transition-all duration-300 ${
              player.isUser ? 'border-accent/30 bg-accent/5' : 'border-surface-border'
            }`}
            style={{ order: player.rank }}
          >
            <span className={`text-2xl font-extrabold w-8 text-center ${rankColors[player.rank] || 'text-text-muted'}`}>
              {player.rank}
            </span>

            <div className="flex-1 min-w-0">
              <p className={`font-semibold text-sm truncate ${player.isUser ? 'text-accent' : 'text-text-primary'}`}>
                {player.name}
                {player.isUser && <span className="text-text-muted font-normal"> (you)</span>}
              </p>
              <p className="text-xs text-text-muted truncate">{player.company}</p>
            </div>

            <div className="text-right flex-shrink-0">
              <p className="text-base font-bold text-text-primary">{player.points.toLocaleString()}</p>
              <p className="text-[10px] text-text-muted uppercase tracking-wider">pts</p>
            </div>
          </div>
        ))}
      </div>

      {/* How to earn */}
      <div className="mt-6">
        <button
          onClick={() => setShowHowToEarn(!showHowToEarn)}
          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors mx-auto"
        >
          How to earn
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showHowToEarn ? 'rotate-180' : ''}`} />
        </button>

        {showHowToEarn && (
          <div className="mt-3 bg-bg-card border border-surface-border rounded-xl p-4 animate-fade-in">
            <div className="space-y-2">
              {pointValues.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">{item.label}</span>
                  <span className="text-sm font-semibold text-accent">{item.pts} pts</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
