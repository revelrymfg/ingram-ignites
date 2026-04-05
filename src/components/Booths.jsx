import { MapPin, Star } from 'lucide-react'
import { booths } from '../data/mockData'

export default function Booths() {
  return (
    <div className="animate-fade-in">
      <div className="mb-6 pt-2">
        <p className="text-text-muted text-sm">Prioritized</p>
        <h1 className="text-2xl font-bold text-text-primary">Booth Hit List</h1>
      </div>

      <div className="space-y-3">
        {booths.map((booth, i) => (
          <div
            key={booth.id}
            className={`bg-bg-card border rounded-xl p-4 animate-fade-in ${
              booth.badge ? 'border-accent/30' : 'border-surface-border'
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  booth.badge ? 'bg-accent/20' : 'bg-surface-border'
                }`}>
                  <MapPin className={`w-5 h-5 ${booth.badge ? 'text-accent' : 'text-text-muted'}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{booth.name}</h3>
                  <p className="text-xs text-text-muted">Booth {booth.number}</p>
                </div>
              </div>
              <span className="text-xs text-text-muted font-medium">#{i + 1}</span>
            </div>

            {booth.badge && (
              <div className="flex items-center gap-1.5 mb-3">
                <Star className="w-3 h-3 text-accent" fill="currentColor" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {booth.badge}
                </span>
              </div>
            )}

            <p className="text-sm text-text-secondary leading-relaxed">
              {booth.context}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
