import { useState, useCallback } from 'react'
import { leaderboard as initialLeaderboard } from '../data/mockData'

const STORAGE_KEY = 'ingramGameState'

const defaultState = {
  points: 2190,
  missions: { 1: false, 2: false, 3: false },
  boothCheckins: {},
  claimedDrops: [],
  dailyBonusClaimed: false,
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? { ...defaultState, ...JSON.parse(stored) } : defaultState
  } catch {
    return defaultState
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function computeRank(points) {
  const others = initialLeaderboard.filter((p) => !p.isUser)
  let rank = 1
  for (const p of others) {
    if (p.points >= points) rank++
  }
  return rank
}

function getSortedLeaderboard(points) {
  const board = initialLeaderboard.map((p) =>
    p.isUser ? { ...p, points } : p
  )
  board.sort((a, b) => b.points - a.points)
  return board.map((p, i) => ({ ...p, rank: i + 1 }))
}

export default function useGameState() {
  const [state, setState] = useState(loadState)
  const [toasts, setToasts] = useState([])

  const rank = computeRank(state.points)

  function pushToast(message) {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, message }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 1500)
  }

  function addPoints(amount, message) {
    setState((prev) => {
      const next = { ...prev, points: prev.points + amount }
      saveState(next)
      return next
    })
    if (message) pushToast(message)
  }

  const completeMission = useCallback((id) => {
    setState((prev) => {
      if (prev.missions[id]) return prev
      const newMissions = { ...prev.missions, [id]: true }
      let pointsToAdd = 200
      const completedCount = Object.values(newMissions).filter(Boolean).length
      const allDone = completedCount === 3 && !prev.dailyBonusClaimed

      const next = {
        ...prev,
        missions: newMissions,
        points: prev.points + pointsToAdd + (allDone ? 500 : 0),
        dailyBonusClaimed: allDone ? true : prev.dailyBonusClaimed,
      }
      saveState(next)
      return next
    })
    pushToast('+200 pts — Mission complete')

    // Check if all 3 done after this one
    setState((prev) => {
      const completedCount = Object.values(prev.missions).filter(Boolean).length
      if (completedCount === 3 && prev.dailyBonusClaimed) {
        setTimeout(() => pushToast('Daily missions complete — +500 bonus pts'), 400)
      }
      return prev
    })
  }, [])

  const checkInBooth = useCallback((boothId) => {
    setState((prev) => {
      if (prev.boothCheckins[boothId]) return prev
      const next = {
        ...prev,
        boothCheckins: { ...prev.boothCheckins, [boothId]: true },
        points: prev.points + 150,
      }
      saveState(next)
      return next
    })
    pushToast('+150 pts — Booth check-in')
  }, [])

  const claimDrop = useCallback((dropId) => {
    setState((prev) => {
      if (prev.claimedDrops.includes(dropId)) return prev
      const next = {
        ...prev,
        claimedDrops: [...prev.claimedDrops, dropId],
        points: prev.points + 300,
      }
      saveState(next)
      return next
    })
    pushToast('+300 pts — Drop claimed')
  }, [])

  // Check for rank change and fire toast
  const prevRankRef = { current: rank }
  if (rank < prevRankRef.current) {
    setTimeout(() => pushToast(`You moved up — now ranked #${rank}`), 600)
    prevRankRef.current = rank
  }

  return {
    points: state.points,
    rank,
    missions: state.missions,
    boothCheckins: state.boothCheckins,
    claimedDrops: state.claimedDrops,
    leaderboard: getSortedLeaderboard(state.points),
    toasts,
    completeMission,
    checkInBooth,
    claimDrop,
    addPoints,
  }
}
