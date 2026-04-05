import { useState, useEffect } from 'react'
import { Target, TrendingUp, Hash, ChevronRight, Clock, Zap } from 'lucide-react'
import { user, missions as missionData, sessions, secretDrops, whyIngram } from '../data/mockData'
import SecretDrop from './SecretDrop'
import AnimatedCounter from './AnimatedCounter'

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

const challengeLabels = {
  'Controlling Azure costs': 'Azure cost optimization',
  'Security & compliance gaps': 'security & compliance',
  'Rolling out AI / Copilot': 'Copilot adoption',
  'M365 deployment & licensing': 'M365 deployment',
}

export default function Home({ onNavigate, challenge, gameState }) {
  const { points, rank, missions, completeMission, claimDrop, claimedDrops } = gameState
  const [activeDrop, setActiveDrop] = useState(null)
  const [dismissedDrops, setDismissedDrops] = useState([])
  const [checkedAnimId, setCheckedAnimId] = useState(null)

  useEffect(() => {
    const timers = secretDrops.map((drop) => {
      return setTimeout(() => {
        setActiveDrop((current) => {
          if (current) return current
          if (claimedDrops.includes(drop.id)) return current
          return drop
        })
      }, drop.delaySeconds * 1000)
    })
    return () => timers.forEach(clearTimeout)
  }, [claimedDrops])

  function handleDismissDrop() {
    if (activeDrop) {
      setDismissedDrops((prev) => [...prev, activeDrop.id])
    }
    setActiveDrop(null)
    const nextDrop = secretDrops.find(
      (d) => !dismissedDrops.includes(d.id) && !claimedDrops.includes(d.id) && d.id !== activeDrop?.id
    )
    if (nextDrop) {
      const elapsed = Date.now() - performance.timeOrigin
      const dropTime = nextDrop.delaySeconds * 1000
      if (elapsed >= dropTime) {
        setTimeout(() => setActiveDrop(nextDrop), 500)
      }
    }
  }

  function handleClaimDrop() {
    if (activeDrop) {
      claimDrop(activeDrop.id)
    }
  }

  function handleMissionTap(id) {
    if (missions[id]) return
    completeMission(id)
    setCheckedAnimId(id)
    setTimeout(() => setCheckedAnimId(null), 300)
  }

  const completed = Object.values(missions).filter(Boolean).length
  const nextSession = sessions[0]

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-6 pt-2">
        <p className="text-text-muted text-sm">{getGreeting()},</p>
        <h1 className="text-2xl font-bold text-text-primary">{user.name}</h1>
        {challenge && (
          <p className="text-xs text-text-muted mt-1">
            Briefing personalized for {challengeLabels[challenge] || challenge.toLowerCase()}
          </p>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-bg-card border border-surface-border rounded-xl px-4 py-3 flex items-center gap-3 min-w-0">
          <TrendingUp className="w-4 h-4 text-accent flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-lg font-bold text-text-primary">
              <AnimatedCounter value={points} />
            </p>
            <p className="text-[10px] text-text-muted uppercase tracking-wider">Points</p>
          </div>
        </div>
        <div className="bg-bg-card border border-surface-border rounded-xl px-4 py-3 flex items-center gap-3 min-w-0">
          <Hash className="w-4 h-4 text-accent flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-lg font-bold text-text-primary">#{rank}</p>
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
          <span className="ml-auto text-xs text-text-muted">{completed}/{missionData.length}</span>
        </div>

        <div className="space-y-2">
          {missionData.map((m) => {
            const done = missions[m.id]
            return (
              <button
                key={m.id}
                onClick={() => handleMissionTap(m.id)}
                className={`w-full bg-bg-card border border-surface-border rounded-xl px-4 py-3.5 flex items-center gap-3 text-left transition-colors ${done ? '' : 'hover:bg-bg-card-hover'}`}
              >
                <div
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    done ? 'bg-accent border-accent' : 'border-text-muted'
                  } ${checkedAnimId === m.id ? 'animate-check-pop' : ''}`}
                >
                  {done && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`text-sm ${done ? 'text-text-muted line-through' : 'text-text-primary'}`}>
                  {m.text}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Why Ingram */}
      <div className="bg-bg-card border border-surface-border rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-2.5">
          <Zap className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs text-text-muted uppercase tracking-wider font-semibold">Why Ingram at Ignite?</span>
        </div>
        <ul className="space-y-1.5">
          {whyIngram.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="text-accent mt-0.5">·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Progress bar */}
      <div className="bg-bg-card border border-surface-border rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-text-muted uppercase tracking-wider">Day 1 Progress</span>
          <span className="text-xs font-semibold text-accent">{Math.round((completed / missionData.length) * 100)}%</span>
        </div>
        <div className="h-1.5 bg-surface-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${(completed / missionData.length) * 100}%` }}
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

      {activeDrop && (
        <SecretDrop
          drop={activeDrop}
          onDismiss={handleDismissDrop}
          onClaim={handleClaimDrop}
        />
      )}
    </div>
  )
}
