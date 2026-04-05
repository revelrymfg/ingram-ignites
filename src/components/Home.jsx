import { useState, useEffect } from 'react'
import { Target, TrendingUp, Hash, ChevronRight, Clock } from 'lucide-react'
import { user, missions as initialMissions, sessions } from '../data/mockData'
import SecretDrop from './SecretDrop'

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

export default function Home({ onNavigate }) {
  const [missions, setMissions] = useState(initialMissions)
  const [showDrop, setShowDrop] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowDrop(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  function toggleMission(id) {
    setMissions((prev) =>
      prev.map((m) => (m.id === id ? { ...m, done: !m.done } : m))
    )
  }

  const completed = missions.filter((m) => m.done).length
  const nextSession = sessions[0]

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-6 pt-2">
        <p className="text-text-muted text-sm">{getGreeting()},</p>
        <h1 className="text-2xl font-bold text-text-primary">{user.name}</h1>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-bg-card border border-surface-border rounded-xl px-4 py-3 flex items-center gap-3 min-w-0">
          <TrendingUp className="w-4 h-4 text-accent flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-lg font-bold text-text-primary">{user.points.toLocaleString()}</p>
            <p className="text-[10px] text-text-muted uppercase tracking-wider">Points</p>
          </div>
        </div>
        <div className="bg-bg-card border border-surface-border rounded-xl px-4 py-3 flex items-center gap-3 min-w-0">
          <Hash className="w-4 h-4 text-accent flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-lg font-bold text-text-primary">#{user.rank}</p>
            <p className="text-[10px] text-text-muted uppercase tracking-wider">Rank</p>
          </div>
        </div>
      </div>

      {/* Daily Mission */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-4 h-4 text-accent" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
            Today's Mission
          </h2>
          <span className="ml-auto text-xs text-text-muted">{completed}/{missions.length}</span>
        </div>

        <div className="space-y-2">
          {missions.map((m) => (
            <button
              key={m.id}
              onClick={() => toggleMission(m.id)}
              className="w-full bg-bg-card border border-surface-border rounded-xl px-4 py-3.5 flex items-center gap-3 text-left transition-colors hover:bg-bg-card-hover"
            >
              <div
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  m.done
                    ? 'bg-accent border-accent'
                    : 'border-text-muted'
                }`}
              >
                {m.done && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span
                className={`text-sm ${
                  m.done ? 'text-text-muted line-through' : 'text-text-primary'
                }`}
              >
                {m.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-bg-card border border-surface-border rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-text-muted uppercase tracking-wider">Day 1 Progress</span>
          <span className="text-xs font-semibold text-accent">{Math.round((completed / missions.length) * 100)}%</span>
        </div>
        <div className="h-1.5 bg-surface-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${(completed / missions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Up Next */}
      <button
        onClick={() => onNavigate?.('schedule')}
        className="w-full bg-bg-card border border-surface-border rounded-xl p-4 text-left hover:bg-bg-card-hover transition-colors"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs text-text-muted uppercase tracking-wider font-semibold">Up Next</span>
          </div>
          <ChevronRight className="w-4 h-4 text-text-muted" />
        </div>
        <p className="text-sm font-semibold text-text-primary mb-1">{nextSession.title}</p>
        <p className="text-xs text-text-secondary">{nextSession.time} · {nextSession.location}</p>
      </button>

      {showDrop && <SecretDrop onDismiss={() => setShowDrop(false)} />}
    </div>
  )
}
