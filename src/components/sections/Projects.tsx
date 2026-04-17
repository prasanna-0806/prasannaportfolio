'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import GlowButton from '@/components/ui/GlowButton'
import { Icon } from '@iconify/react'
import { projects } from '@/data/portfolio'

function ProjectCard({ p, index }: { p: typeof projects[0]; index: number }) {
  const ref   = useRef<HTMLDivElement>(null)
  const [mx, setMx] = useState(50)
  const [my, setMy] = useState(50)
  const [hov, setHov] = useState(false)
  const ctaHref = p.demo || p.github
  const ctaLabel = p.demo ? 'Live Demo' : 'View Repo'

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setMx(((e.clientX - r.left) / r.width) * 100)
    setMy(((e.clientY - r.top)  / r.height) * 100)
    if (ref.current) {
      const rx = ((e.clientY - r.top)  / r.height - 0.5) * -20
      const ry = ((e.clientX - r.left) / r.width  - 0.5) *  20
      ref.current.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02) translateY(-4px)`
      ref.current.style.boxShadow = `12px 12px 0px rgba(26, 13, 8, 0.15), inset 0 1px 0 rgba(255,255,255,1)`
    }
  }

  const onLeave = () => {
    setHov(false)
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1) translateY(0)'
      ref.current.style.boxShadow = '' // resets to CSS class
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div
        ref={ref}
        className="bento-card relative h-full flex flex-col overflow-hidden transition-all duration-[180ms] ease-out"
        style={{
          borderTop: `3px solid ${p.color}`,
          transformStyle: 'preserve-3d',
          borderColor: hov ? p.color : undefined,
        }}
        onMouseMove={onMove}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={onLeave}
      >
        {/* Dynamic gradient following mouse */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: hov ? 1 : 0,
            background: `radial-gradient(circle at ${mx}% ${my}%, ${p.color}25 0%, transparent 60%)`
          }}
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
             style={{ backgroundImage: 'linear-gradient(rgba(26,13,8,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(26,13,8,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        {/* Decorative corner icon */}
        <div className="absolute -top-4 -right-4 w-32 h-32 opacity-[0.03] pointer-events-none rotate-12 group-hover:rotate-45 transition-transform duration-700" style={{ color: '#1A0D08' }}>
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0L100 50L50 100L0 50Z" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>
        </div>

        {/* Laser scanner on hover */}
        {hov && (
          <motion.div
            className="absolute top-0 left-0 w-full h-[2px] pointer-events-none z-10"
            style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`, boxShadow: `0 0 12px ${p.color}` }}
            animate={{ y: [0, 400, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        )}

        {/* Project number watermark */}
        <div
          className="absolute top-4 right-4 font-display font-black text-7xl leading-none pointer-events-none select-none"
          style={{ color: `${p.color}22` }}
        >
          0{index + 1}
        </div>

        <div className="relative p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${p.color}18`, border: `1px solid ${p.color}40`, color: p.color }}
            >
              <Icon icon={p.icon} width={22} height={22} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-lg tracking-wide uppercase" style={{ color: '#1A0D08' }}>{p.title}</h3>
              <span className="text-xs font-mono tracking-widest" style={{ color: '#836353' }}>{p.period}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#7A5544' }}>{p.description}</p>

          {/* Impact */}
          <div
            className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl mb-4 text-xs leading-snug font-medium"
            style={{
              background: `${p.color}14`,
              border: `1px solid ${p.color}35`,
              color: p.color,
            }}
          >
            <span className="shrink-0 mt-0.5">⚡</span>
            <span>{p.impact}</span>
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.tech.map(t => (
              <span key={t}
                className="px-2.5 py-1 text-[11px] rounded-lg font-mono font-medium"
                style={{
                  background: `${p.color}12`,
                  border: `1px solid ${p.color}30`,
                  color: p.color,
                }}
              >{t}</span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto pt-2">
            {ctaHref && (
              <a href={ctaHref} target="_blank" rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-syne font-medium transition-all duration-200"
                style={{
                  background: `${p.color}14`,
                  border: `1.5px solid ${p.color}40`,
                  color: p.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${p.color}24`
                  e.currentTarget.style.borderColor = `${p.color}60`
                  e.currentTarget.style.boxShadow = `0 0 12px ${p.color}30`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${p.color}14`
                  e.currentTarget.style.borderColor = `${p.color}40`
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {ctaLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative z-10 overflow-hidden">
      {/* Decorative bg: cross grid + accent blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(212,96,74,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,96,74,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,119,153,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,96,74,0.07) 0%, transparent 70%)' }} />
        <div className="absolute bottom-8 right-8 w-20 h-20"
          style={{ borderTop: '2px solid rgba(245,119,153,0.15)', borderLeft: '2px solid rgba(245,119,153,0.15)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle
          label="// featured.work"
          title="Projects"
          description="Production-grade systems built to solve real problems — not just demos"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <GlowButton variant="ghost" href="https://github.com/prasanna-0806">
            More on GitHub →
          </GlowButton>
        </motion.div>
      </div>
    </section>
  )
}
