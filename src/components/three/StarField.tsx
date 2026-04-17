'use client'

import { useEffect, useRef } from 'react'

interface StarData {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  twinkleOffset: number
  twinkleSpeed: number
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let stars: StarData[] = []

    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      generateStars()
    }

    const generateStars = () => {
      stars = Array.from({ length: 320 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.05,
        radius: Math.random() * 1.3 + 0.2,
        opacity: Math.random() * 0.65 + 0.2,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.025 + 0.004,
      }))
    }

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 1

      stars.forEach((s) => {
        s.x += s.vx
        s.y += s.vy
        if (s.x < -2) s.x = canvas.width + 2
        if (s.x > canvas.width + 2) s.x = -2
        if (s.y < -2) s.y = canvas.height + 2
        if (s.y > canvas.height + 2) s.y = -2

        const twinkle = Math.sin(t * s.twinkleSpeed + s.twinkleOffset) * 0.35 + 0.65
        const alpha = s.opacity * twinkle

        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 2.5)
        g.addColorStop(0, `rgba(180,70,90,${alpha * 0.35})`)
        g.addColorStop(0.4, `rgba(210,100,80,${alpha * 0.18})`)
        g.addColorStop(1, `rgba(245,119,153,0)`)

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    setSize()
    draw()
    window.addEventListener('resize', setSize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
