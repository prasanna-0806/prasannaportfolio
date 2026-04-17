'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { Icon } from '@iconify/react'
import { skillCategories } from '@/data/portfolio'

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="skills" className="section-padding relative z-10 overflow-hidden">
      {/* ── Decorative bg: diagonal lines + corner brackets ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(245,119,153,0.07) 0px, rgba(245,119,153,0.07) 1px, transparent 1px, transparent 24px)',
        }} />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,96,74,0.09) 0%, transparent 70%)' }} />
        <div className="absolute -top-16 right-1/3 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,119,153,0.07) 0%, transparent 70%)' }} />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle label="// tech.stack" title="Tech Arsenal" description="Full-stack, AI, and embedded — across the entire system" />

        {/* Masonry Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true, margin: '-50px' }}
              className="bento-card relative p-6 overflow-hidden group cursor-default"
              style={{
                borderTop: `3.5px solid ${cat.color}`,
                opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.5,
                transform: hoveredIndex === i ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {/* Radial gradient background */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${cat.color}18, transparent 60%)` }} />

              {/* Header: Icon + Title */}
              <div className="relative mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: `${cat.color}14`, border: `1px solid ${cat.color}28`, color: cat.color }}>
                    <Icon icon={cat.icon} width={22} height={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg tracking-wide" style={{ color: cat.color }}>
                      {cat.name}
                    </h3>
                    <p className="text-xs font-mono" style={{ color: '#8D6A59' }}>
                      {cat.skills.length} {cat.skills.length === 1 ? 'tech' : 'techs'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Pills with Keycap Effect */}
              <div className="relative flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8, y: 8 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: (i * 0.1) + (skillIdx * 0.05), duration: 0.3 }}
                    viewport={{ once: true }}
                    className="px-3 py-2 rounded-lg text-xs font-syne font-medium whitespace-nowrap transition-all duration-150"
                    style={{
                      background: `${cat.color}0d`,
                      border: `1.5px solid ${cat.color}28`,
                      color: cat.color,
                      borderBottom: `3px solid ${cat.color}40`,
                    }}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: `0 2px 8px ${cat.color}20, inset 0 -1px 0 ${cat.color}30`,
                      borderBottom: `1px solid ${cat.color}40`,
                      y: 2,
                    }}
                    whileTap={{ scale: 0.96, y: 4, borderBottom: `1px solid ${cat.color}40` }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>

              {/* Hover accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r"
                style={{ backgroundImage: `linear-gradient(90deg, ${cat.color}00, ${cat.color}60, ${cat.color}00)` }}
                animate={{ width: hoveredIndex === i ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
