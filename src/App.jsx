import { useState } from 'react'
import Splash from './components/Splash'
import Onboarding from './components/Onboarding'
import AppShell from './components/AppShell'
import Home from './components/Home'
import Schedule from './components/Schedule'
import Booths from './components/Booths'
import Leaderboard from './components/Leaderboard'

function loadOnboarding() {
  try {
    const stored = localStorage.getItem('ingramOnboarding')
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export default function App() {
  const [entered, setEntered] = useState(false)
  const [onboardingAnswers, setOnboardingAnswers] = useState(loadOnboarding)
  const [activeTab, setActiveTab] = useState('home')

  function handleTabChange(tab) {
    setActiveTab(tab)
    window.scrollTo(0, 0)
  }

  function handleOnboardingComplete(answers) {
    setOnboardingAnswers(answers)
  }

  if (!entered) {
    return <Splash onEnter={() => setEntered(true)} />
  }

  if (!onboardingAnswers) {
    return <Onboarding onComplete={handleOnboardingComplete} />
  }

  return (
    <AppShell activeTab={activeTab} onTabChange={handleTabChange}>
      {activeTab === 'home' && <Home onNavigate={handleTabChange} challenge={onboardingAnswers[0]} />}
      {activeTab === 'schedule' && <Schedule />}
      {activeTab === 'booths' && <Booths />}
      {activeTab === 'leaderboard' && <Leaderboard />}
    </AppShell>
  )
}
