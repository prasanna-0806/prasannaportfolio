'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stage, setStage] = useState(0) // 0: star, 1: burst, 2: text, 3: fade

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    let animId: number
    let particles: any[] = []
    let targetPoints: { x: number; y: number }[] = []

    // ── STEP 1: Get text particle targets ──
    const getTextPoints = () => {
      const isMobileScreen = width < 768
      const tempCanvas = document.createElement('canvas')
      const tCtx = tempCanvas.getContext('2d')!

      if (isMobileScreen) {
        const fontSize = 64
        const lineH = Math.round(fontSize * 1.25)
        const lines = ['loading', 'cool', 'stuff...']
        const canvasW = Math.round(width * 0.9)
        const totalH = lineH * lines.length
        tempCanvas.width = canvasW
        tempCanvas.height = totalH
        tCtx.font = `900 ${fontSize}px Arial, sans-serif`
        tCtx.fillStyle = '#fff'
        tCtx.textAlign = 'center'
        tCtx.textBaseline = 'middle'
        lines.forEach((line, i) => {
          tCtx.fillText(line, canvasW / 2, lineH * i + lineH / 2)
        })
        const imgData = tCtx.getImageData(0, 0, canvasW, totalH).data
        const points = []
        const step = 3
        const offsetX = (width - canvasW) / 2
        const offsetY = height / 2 - totalH / 2
        for (let y = 0; y < totalH; y += step) {
          for (let x = 0; x < canvasW; x += step) {
            const i = (y * canvasW + x) * 4
            if (imgData[i + 3] > 128) {
              points.push({
                x: x + offsetX + (Math.random() * 2 - 1),
                y: y + offsetY + (Math.random() * 2 - 1),
              })
            }
          }
        }
        return points
      }

      const MAX_WIDTH = Math.min(width * 0.92, 1100)
      tempCanvas.width = MAX_WIDTH
      tempCanvas.height = 200
      tCtx.font = `900 58px Arial, sans-serif`
      tCtx.fillStyle = '#fff'
      tCtx.textAlign = 'center'
      tCtx.textBaseline = 'middle'
      tCtx.fillText('loading cool stuff...', MAX_WIDTH / 2, 100)
      const imgData = tCtx.getImageData(0, 0, MAX_WIDTH, 300).data
      const points = []
      const offsetX = (width - MAX_WIDTH) / 2
      const offsetY = height / 2 - 100
      for (let y = 0; y < 200; y += 3) {
        for (let x = 0; x < MAX_WIDTH; x += 3) {
          const i = (y * MAX_WIDTH + x) * 4
          if (imgData[i + 3] > 128) {
            points.push({
              x: x + offsetX,
              y: y + offsetY + (Math.random() * 2 - 1) * 2,
            })
          }
        }
      }
      return points
    }

    targetPoints = getTextPoints()

    // ── STEP 2: Initialize particles ──
    const cx = width / 2
    const cy = height / 2

    // Initial state (glowing star)
    for (let i = 0; i < targetPoints.length; i++) {
      const colors = ['#9D174D', '#000000']
      particles.push({
        x: cx,
        y: cy,
        tx: targetPoints[i].x,
        ty: targetPoints[i].y,
        vx: (Math.random() - 0.5) * 20,
        vy: (Math.random() - 0.5) * 20,
        size: Math.random() * (width < 768 ? 3 : 2) + (width < 768 ? 1.5 : 0.5),
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0
      })
    }

    let time = 0
    let currentStage = 0 // local sync
    const STAR_END = 45
    const BURST_TEXT_END = 170
    const FADE_END = 205
    const EXIT_DELAY_MS = 180

    const render = () => {
      ctx.fillStyle = 'rgba(240, 224, 204, 1)' // Warm beige background matching website
      ctx.fillRect(0, 0, width, height)
      time++

      // STAGE 0: Glowing star
      if (time < STAR_END) {
        currentStage = 0
        const scale = time / STAR_END
        ctx.save()
        ctx.translate(cx, cy)
        ctx.beginPath()
        ctx.arc(0, 0, 4 * scale, 0, Math.PI * 2)
        ctx.fillStyle = '#F57799'
        ctx.shadowColor = '#F57799'
        ctx.shadowBlur = 40 * scale
        ctx.fill()
        ctx.restore()
      }
      // STAGE 1 & 2: Burst and form text
      else if (time < BURST_TEXT_END) {
        if (currentStage === 0) setStage(1)
        currentStage = 1

        const progress = Math.min((time - STAR_END) / 70, 1) // ease in out
        const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
          
          if (progress < 1) {
            // Burst out further across screen then pull to target
            p.x += p.vx * (1 - ease) * 1.4
            p.y += p.vy * (1 - ease) * 1.4
            
            p.x += (p.tx - p.x) * ease * 0.1
            p.y += (p.ty - p.y) * ease * 0.1
            p.alpha = Math.min(p.alpha + 0.05, 1)
          } else {
            // Jitter in place
            p.x += (p.tx - p.x) * 0.2 + (Math.random() - 0.5) * 1.5
            p.y += (p.ty - p.y) * 0.2 + (Math.random() - 0.5) * 1.5
          }

          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.globalAlpha = p.alpha * (Math.random() * 0.5 + 0.5) // flicker
          ctx.fill()
        }
        ctx.globalAlpha = 1
      }
      // STAGE 3: Fade out elements smoothly
      else if (time < FADE_END) {
        if (currentStage === 1) {
          currentStage = 2
          setStage(2)
        }
        const fade = 1 - (time - BURST_TEXT_END) / (FADE_END - BURST_TEXT_END)
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
          p.x += (p.tx - p.x) * 0.2 + (Math.random() - 0.5) * 2
          p.y += (p.ty - p.y) * 0.2 + (Math.random() - 0.5) * 2
          
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.globalAlpha = p.alpha * fade
          ctx.fill()
        }
        ctx.globalAlpha = 1
      } else {
        if (currentStage === 2) {
          currentStage = 3
          setStage(3)
          setTimeout(() => onComplete(), EXIT_DELAY_MS)
        }
      }

      if (currentStage < 3) {
        animId = requestAnimationFrame(render)
      }
    }

    render()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      // Recalculating points midway is heavy, so we assume fixed size during intro
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          key="intro-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[10000] pointer-events-none"
        >
          <canvas
            ref={canvasRef}
            className="block w-full h-full"
          />

        </motion.div>
      )}
    </AnimatePresence>
  )
}
