'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const [isHovering, setIsHovering] = useState(false)
  
  useEffect(() => {
    let idCounter = 0
    let timeout: NodeJS.Timeout

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: idCounter++ }]
        if (newTrail.length > 20) {
          return newTrail.slice(newTrail.length - 20)
        }
        return newTrail
      })

      clearTimeout(timeout)
      // Fade out trail when mouse stops
      timeout = setTimeout(() => setTrail([]), 100)

      const target = e.target as HTMLElement
      setIsHovering(!!target.closest('a, button, input, textarea, [role="button"]'))
    }

    const clearTrail = () => setTrail([])

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseleave', clearTrail)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseleave', clearTrail)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        animate={{
          x: mousePosition.x - (isHovering ? 20 : 6),
          y: mousePosition.y - (isHovering ? 20 : 6),
          width: isHovering ? 40 : 12,
          height: isHovering ? 40 : 12,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
        style={{
          background: isHovering ? 'transparent' : '#F57799',
          border: isHovering ? '2px solid #F57799' : 'none',
          boxShadow: isHovering ? '0 0 15px rgba(245,119,153,0.3)' : '0 0 10px rgba(245,119,153,0.5)',
          mixBlendMode: isHovering ? 'normal' : 'multiply',
        }}
      >
        {isHovering && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-1.5 h-1.5 rounded-full bg-[#F57799]" 
          />
        )}
      </motion.div>

      {/* Trail particles */}
      {trail.map((point, index) => {
        // Calculate size and opacity based on position in trail
        const progress = index / trail.length
        const size = 6 * progress
        const opacity = 0.8 * progress

        return (
          <motion.div
            key={point.id}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
            initial={{ opacity, scale: 1, x: point.x - size/2, y: point.y - size/2 }}
            animate={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              width: size,
              height: size,
              background: '#FB9B8F',
              boxShadow: '0 0 8px rgba(251,155,143,0.4)',
              mixBlendMode: 'multiply',
            }}
          />
        )
      })}

    </>
  )
}
