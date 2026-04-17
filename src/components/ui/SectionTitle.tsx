'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } 
  }
}

export default function SectionTitle({ label, title, description, align = 'center' }: SectionTitleProps) {
  const isCenter = align === 'center'
  return (
    <motion.div 
      className={`mb-16 space-y-4 ${isCenter ? 'text-center' : ''}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={`flex items-baseline gap-4 ${isCenter ? 'justify-center' : ''}`}>
        <div className="relative overflow-hidden">
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-display text-[#1A0D08] leading-tight"
          >
            {title}
          </motion.h2>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(245,119,153,0.3), transparent)' }}
            initial={{ x: '-100%' }}
            whileInView={{ x: '200%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          />
        </div>

        <motion.span
          variants={item}
          className="text-xs font-mono tracking-widest pb-1 hidden sm:block"
          style={{ color: '#836353' }}
        >
          {label}
        </motion.span>
      </div>

      {description && (
        <motion.p
          variants={item}
          className={`text-sm md:text-base leading-relaxed font-serif ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
          style={{ fontStyle: 'italic', color: '#7A5544' }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
