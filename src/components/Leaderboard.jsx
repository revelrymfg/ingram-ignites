import { Trophy } from 'lucide-react'
import { leaderboard } from '../data/mockData'

const rankColors = {
  1: 'text-gold',
  2: 'text-silver',
  3: 'text-bronze',
}

export default function Leaderboard() {
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
            key={player.rank}
            className={`flex items-center gap-4 bg-bg-card border rounded-xl px-4 py-3.5 animate-rank-slide ${
              player.isUser ? 'border-accent/30 bg-accent/5' : 'border-surface-border'
            }`}
            style={{ animationDelay: `${i * 80}ms` }}
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
    </div>
  )
}
