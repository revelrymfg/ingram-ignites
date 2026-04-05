import { useState, useEffect, useRef } from 'react'

export default function AnimatedCounter({ value, className = '' }) {
  const [display, setDisplay] = useState(value)
  const prev = useRef(value)
  const raf = useRef(null)

  useEffect(() => {
    const from = prev.current
    const to = value
    if (from === to) return

    const duration = 280
    const start = performance.now()

    function tick(now) {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(from + (to - from) * eased))
      if (t < 1) {
        raf.current = requestAnimationFrame(tick)
      } else {
        prev.current = to
      }
    }

    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [value])

  return <span className={className}>{display.toLocaleString()}</span>
}
