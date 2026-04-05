import { Home, Calendar, MapPin, Trophy } from 'lucide-react'

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'schedule', label: 'Schedule', icon: Calendar },
  { id: 'booths', label: 'Booths', icon: MapPin },
  { id: 'leaderboard', label: 'Board', icon: Trophy },
]

export default function AppShell({ activeTab, onTabChange, children }) {
  return (
    <div className="min-h-dvh bg-bg-primary pb-24">
      <main className="max-w-lg mx-auto px-4 pt-4">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-bg-primary/95 backdrop-blur-md border-t border-surface-border" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        <div className="max-w-lg mx-auto flex">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const active = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex-1 flex flex-col items-center justify-center gap-1 min-h-[44px] py-2.5 transition-colors ${
                  active ? 'text-accent' : 'text-text-muted'
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 1.5} />
                <span className="text-[10px] font-medium uppercase tracking-wider">{tab.label}</span>
              </button>
            )
          })}
        </div>
        <div className="flex items-center justify-center gap-1.5 pb-1">
          <span className="text-text-muted/40 text-[9px]">Powered by</span>
          <img
            src="/ingram-ignites/starch-logo.png"
            alt="Starch"
            style={{ height: '10px', opacity: 0.25 }}
          />
        </div>
      </nav>
    </div>
  )
}
