import { Clock, MapPin, User, AlertTriangle, ArrowUp, Minus } from 'lucide-react'
import { sessions } from '../data/mockData'

const priorityConfig = {
  critical: { label: 'Critical', color: 'text-red-400 bg-red-400/10 border-red-400/20', icon: AlertTriangle },
  high: { label: 'High', color: 'text-amber-400 bg-amber-400/10 border-amber-400/20', icon: ArrowUp },
  medium: { label: 'Medium', color: 'text-blue-400 bg-blue-400/10 border-blue-400/20', icon: Minus },
}

export default function Schedule() {
  return (
    <div className="animate-fade-in">
      <div className="mb-6 pt-2">
        <p className="text-text-muted text-sm">Day 1</p>
        <h1 className="text-2xl font-bold text-text-primary">Your Schedule</h1>
      </div>

      <div className="space-y-3">
        {sessions.map((session, i) => {
          const priority = priorityConfig[session.priority]
          const PriorityIcon = priority.icon
          return (
            <div
              key={session.id}
              className="bg-bg-card border border-surface-border rounded-xl p-4 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-base font-semibold text-text-primary leading-snug min-w-0">
                  {session.title}
                </h3>
                <span className={`flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md border whitespace-nowrap flex-shrink-0 ${priority.color}`}>
                  <PriorityIcon className="w-3 h-3" />
                  {priority.label}
                </span>
              </div>

              <div className="space-y-1.5 mb-3">
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <Clock className="w-3.5 h-3.5 text-text-muted flex-shrink-0" />
                  {session.time}
                </div>
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <MapPin className="w-3.5 h-3.5 text-text-muted flex-shrink-0" />
                  {session.location}
                </div>
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <User className="w-3.5 h-3.5 text-text-muted flex-shrink-0" />
                  {session.speaker}
                </div>
              </div>

              <div className="bg-accent-dim rounded-lg px-3 py-2.5">
                <p className="text-xs text-accent-light leading-relaxed">
                  <span className="font-semibold">Why this matters: </span>
                  {session.why}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
