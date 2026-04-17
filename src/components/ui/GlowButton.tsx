'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowButtonProps {
  children: ReactNode
  variant?: 'pink' | 'cyan' | 'ghost'
  onClick?: () => void
  href?: string
  download?: boolean
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const STYLES = {
  pink: {
    bg:     'rgba(245,119,153,0.12)',
    border: 'rgba(245,119,153,0.45)',
    color:  '#F57799',
    glow:   '0 0 22px rgba(245,119,153,0.4)',
  },
  cyan: {
    bg:     'rgba(212,96,74,0.08)',
    border: 'rgba(212,96,74,0.35)',
    color:  '#D4604A',
    glow:   '0 0 22px rgba(212,96,74,0.25)',
  },
  ghost: {
    bg:     'transparent',
    border: 'rgba(26,13,8,0.2)',
    color:  '#5C3D2A',
    glow:   '0 0 18px rgba(26,13,8,0.08)',
  },
}

export default function GlowButton({
  children,
  variant = 'pink',
  onClick,
  href,
  download,
  className = '',
  type = 'button',
  disabled = false,
}: GlowButtonProps) {
  const s = STYLES[variant]
  const base = `relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm overflow-hidden group transition-all duration-300 ${disabled ? 'opacity-40 pointer-events-none' : ''} ${className}`

  const shimmer = (
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#F57799]/8 to-transparent" />
  )

  const style = {
    background: s.bg,
    border: `1px solid ${s.border}`,
    color: s.color,
  }

  if (href) {
    return (
      <motion.a
        href={href} download={download}
        className={base} style={style}
        whileHover={{ boxShadow: s.glow, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {shimmer}{children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type} onClick={onClick} disabled={disabled}
      className={base} style={style}
      whileHover={{ boxShadow: s.glow, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {shimmer}{children}
    </motion.button>
  )
}
