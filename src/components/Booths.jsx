import { MapPin, Star, Eye } from 'lucide-react'
import { booths, floorIntel } from '../data/mockData'

export default function Booths() {
  return (
    <div className="animate-fade-in">
      <div className="mb-6 pt-2">
        <p className="text-text-muted text-sm">Prioritized</p>
        <h1 className="text-2xl font-bold text-text-primary">Booth Hit List</h1>
      </div>

      <div className="space-y-3 mb-8">
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

            {(booth.badge || booth.badge2) && (
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                {booth.badge && (
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-accent" fill="currentColor" />
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {booth.badge}
                    </span>
                  </div>
                )}
                {booth.badge2 && (
                  <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-md">
                    {booth.badge2}
                  </span>
                )}
              </div>
            )}

            <p className="text-sm text-text-secondary leading-relaxed">
              {booth.context}
            </p>
          </div>
        ))}
      </div>

      {/* Floor Intel */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Eye className="w-4 h-4 text-accent" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
            Floor Intel
          </h2>
        </div>

        <div className="space-y-2">
          {floorIntel.map((item) => (
            <div
              key={item.id}
              className="bg-bg-card border border-surface-border rounded-xl px-4 py-3.5"
            >
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
