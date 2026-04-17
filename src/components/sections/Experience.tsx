'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { experience } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative z-10 overflow-hidden">
      {/* Decorative bg: vertical stripe + circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(245,119,153,0.05) 0px, rgba(245,119,153,0.05) 1px, transparent 1px, transparent 60px)',
        }} />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ border: '1px solid rgba(245,119,153,0.08)' }} />
        <div className="absolute top-10 right-1/4 w-[380px] h-[380px] rounded-full"
          style={{ border: '1px solid rgba(212,96,74,0.06)', transform: 'translate(60px, 60px)' }} />
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,155,143,0.07) 0%, transparent 70%)' }} />
      </div>
      <div className="max-w-4xl mx-auto px-6 relative">
        <SectionTitle
          label="// work.history"
          title="Experience"
          description="Where I've built and shipped real systems"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(245,119,153,0.4), rgba(251,155,143,0.3), transparent)' }} />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-16 pb-10"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 -translate-x-1/2"
                style={{
                  borderColor: exp.color,
                  background: '#F0E0CC',
                  boxShadow: `0 0 12px ${exp.color}80`,
                }}
              />

              {/* Card */}
              <div className="float-card" style={{ animationDelay: `${i * 0.3}s` }}>
              <motion.div
                className="bento-card relative p-6 group cursor-default overflow-hidden"
                style={{
                  borderLeft: `3.5px solid ${exp.color}`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 0% 40%, ${exp.color}10, transparent 65%)` }}
                />

                {/* Header */}
                <div className="relative flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl" style={{ color: '#1A0D08' }}>{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-medium text-sm" style={{ color: '#FDC3A1' }}>{exp.company}</span>
                      <span style={{ color: '#8D6A59' }}>·</span>
                      <span className="text-xs font-mono" style={{ color: '#836353' }}>{exp.period}</span>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono shrink-0"
                    style={{
                      background: `${exp.color}12`,
                      color: exp.color,
                      border: `1px solid ${exp.color}30`,
                    }}
                  >
                    Internship
                  </span>
                </div>

                {/* Bullets */}
                <ul className="relative space-y-3 mb-5">
                  {exp.bullets.map((b, j) => (
                    <motion.li
                      key={j}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: '#7A5544' }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + j * 0.1 }}
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: exp.color, boxShadow: `0 0 6px ${exp.color}` }}
                      />
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="relative flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-xl font-mono"
                      style={{
                        background: `${exp.color}0d`,
                        color: exp.color,
                        border: `1px solid ${exp.color}25`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
