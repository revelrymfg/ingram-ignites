import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const questions = [
  {
    question: "What's your biggest Microsoft challenge right now?",
    options: [
      'Controlling Azure costs',
      'Security & compliance gaps',
      'Rolling out AI / Copilot',
      'M365 deployment & licensing',
    ],
  },
  {
    question: "What's your role?",
    options: [
      'IT Decision Maker',
      'Procurement / Purchasing',
      'Executive / Leadership',
      'Technical / Architect',
    ],
  },
  {
    question: 'Have you worked with Ingram before?',
    options: [
      'Yes, active customer',
      'Yes, in the past',
      'Not yet — evaluating',
      'No, first time hearing about them',
    ],
  },
]

const transitionCopy = {
  'Controlling Azure costs': 'We found 3 sessions and 2 booth stops focused on reducing your cloud spend.',
  'Security & compliance gaps': 'We found 3 sessions and 2 booth stops focused on your compliance gaps.',
  'Rolling out AI / Copilot': 'We found 3 sessions and 2 booth stops focused on Copilot adoption.',
  'M365 deployment & licensing': 'We found 3 sessions and 2 booth stops focused on your M365 rollout.',
}

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [transitioning, setTransitioning] = useState(false)
  const [showTransition, setShowTransition] = useState(false)
  const [slideDir, setSlideDir] = useState('in')

  function selectAnswer(answer) {
    const newAnswers = { ...answers, [step]: answer }
    setAnswers(newAnswers)

    if (step < questions.length - 1) {
      setSlideDir('out')
      setTransitioning(true)
      setTimeout(() => {
        setStep(step + 1)
        setSlideDir('in')
        setTransitioning(false)
      }, 250)
    } else {
      finishOnboarding(newAnswers)
    }
  }

  function skip() {
    const defaultAnswers = { 0: 'Controlling Azure costs', 1: 'IT Decision Maker', 2: 'Not yet — evaluating' }
    finishOnboarding({ ...defaultAnswers, ...answers })
  }

  function finishOnboarding(finalAnswers) {
    setShowTransition(true)
    setTimeout(() => {
      localStorage.setItem('ingramOnboarding', JSON.stringify(finalAnswers))
      onComplete(finalAnswers)
    }, 1500)
  }

  const challenge = answers[0] || 'Controlling Azure costs'

  if (showTransition) {
    return (
      <div className="h-dvh flex flex-col items-center justify-center px-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-text-primary mb-3 text-center">
          Your briefing is ready, Jordan.
        </h2>
        <p className="text-sm text-text-secondary text-center max-w-xs">
          {transitionCopy[challenge]}
        </p>
      </div>
    )
  }

  const q = questions[step]

  return (
    <div className="h-dvh flex flex-col px-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pt-6 mb-2">
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i <= step ? 'bg-accent w-8' : 'bg-surface-border w-8'
              }`}
            />
          ))}
        </div>
        <button
          onClick={skip}
          className="text-xs text-text-muted hover:text-text-secondary transition-colors min-h-[44px] flex items-center"
        >
          Skip
        </button>
      </div>

      <p className="text-xs text-text-muted mb-8">{step + 1} of 3</p>

      {/* Question */}
      <div
        className={`flex-1 flex flex-col transition-all duration-250 ${
          transitioning
            ? 'opacity-0 translate-x-8'
            : slideDir === 'in'
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-8'
        }`}
        style={{ transitionProperty: 'opacity, transform' }}
      >
        <h2 className="text-xl font-bold text-text-primary mb-8 leading-snug">
          {q.question}
        </h2>

        <div className="space-y-3">
          {q.options.map((option) => (
            <button
              key={option}
              onClick={() => selectAnswer(option)}
              className="w-full bg-bg-card border border-surface-border rounded-xl px-4 py-4 min-h-[52px] flex items-center justify-between text-left hover:bg-bg-card-hover hover:border-accent/30 transition-colors group"
            >
              <span className="text-sm text-text-primary group-hover:text-accent transition-colors">
                {option}
              </span>
              <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      <div className="pb-12" />
    </div>
  )
}
