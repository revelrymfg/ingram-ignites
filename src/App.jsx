import { useState } from 'react'
import Splash from './components/Splash'
import AppShell from './components/AppShell'
import Home from './components/Home'
import Schedule from './components/Schedule'
import Booths from './components/Booths'
import Leaderboard from './components/Leaderboard'

export default function App() {
  const [entered, setEntered] = useState(false)
  const [activeTab, setActiveTab] = useState('home')

  function handleTabChange(tab) {
    setActiveTab(tab)
    window.scrollTo(0, 0)
  }

  if (!entered) {
    return <Splash onEnter={() => setEntered(true)} />
  }

  return (
    <AppShell activeTab={activeTab} onTabChange={handleTabChange}>
      {activeTab === 'home' && <Home onNavigate={handleTabChange} />}
      {activeTab === 'schedule' && <Schedule />}
      {activeTab === 'booths' && <Booths />}
      {activeTab === 'leaderboard' && <Leaderboard />}
    </AppShell>
  )
}
