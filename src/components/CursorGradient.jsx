import { useEffect, useState } from 'react'

export const CursorGradient = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const checkShouldEnable = () => {
      const isLargeScreen = window.innerWidth >= 1024
      const isNotTouch = !('ontouchstart' in window || navigator.maxTouchPoints > 0)
      setEnabled(isLargeScreen && isNotTouch)
    }

    checkShouldEnable()
    window.addEventListener('resize', checkShouldEnable)
    return () => window.removeEventListener('resize', checkShouldEnable)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const handleMouseMove = e => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition duration-300"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0.005) 40%, transparent 100%)`,
      }}
    />
  )
}
