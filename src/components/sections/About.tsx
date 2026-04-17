'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { personalInfo } from '@/data/portfolio'

const stats = [
  { value: '8.73', label: 'GPA',        color: '#F57799' },
  { value: '3+',   label: 'Projects',   color: '#D4604A' },
  { value: '10+',  label: 'Events Led', color: '#F59E0B' },
  { value: '1',    label: 'Internship', color: '#FB9B8F' },
]

const edu = [
  { degree: 'B.Tech CSE',             school: 'GITAM University',      period: '2023–2027', detail: 'GPA 8.73', dot: '#F57799' },
  { degree: 'Senior Secondary (XII)', school: 'Ascent Junior College', period: '2023',      detail: '86%',      dot: '#D4604A' },
  { degree: 'Secondary (X)',          school: 'Bethany School',        period: '2021',      detail: '85%',      dot: '#F59E0B' },
]

const tagColors = ['#F57799', '#D4604A', '#F59E0B', '#FB9B8F']

export default function About() {
  const { scrollYProgress } = useScroll()
  const yRings = useTransform(scrollYProgress, [0.1, 0.6], [0, -120])
  const yBlob = useTransform(scrollYProgress, [0.1, 0.6], [0, 150])

  return (
    <section id="about" className="section-padding relative z-10 w-full overflow-hidden">

      {/* ── Decorative bg: dot grid + rings ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(245,119,153,0.13) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }} />
        {/* Rings — left column */}
        <motion.div className="absolute top-16 left-6 w-72 h-72 rounded-full"
          style={{ border: '1.5px solid rgba(245,119,153,0.18)', y: yRings }} />
        <motion.div className="absolute top-24 left-14 w-48 h-48 rounded-full"
          style={{ border: '1px solid rgba(212,96,74,0.12)', y: yRings }} />
        {/* Rings — right column */}
        <motion.div className="absolute bottom-10 right-10 w-64 h-64 rounded-full"
          style={{ border: '1.5px solid rgba(251,155,143,0.15)', y: yRings }} />
        <motion.div className="absolute bottom-20 right-20 w-40 h-40 rounded-full"
          style={{ border: '1px solid rgba(245,119,153,0.1)', y: yRings }} />
        {/* Warm pink blob top-right */}
        <motion.div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,119,153,0.07) 0%, transparent 70%)', y: yBlob }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle label="// whoami" title="About Me" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <motion.div className="space-y-6"
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>

            <p className="leading-relaxed font-serif text-base" style={{ fontStyle: 'italic', color: '#5C3D2A' }}>
              Third-year CS student at{' '}
              <span className="font-syne not-italic font-semibold" style={{ color: '#1A0D08' }}>GITAM University</span>,
              focused on end-to-end web development. I am drawn to the challenge of building
              complete systems, from designing secure PostgreSQL databases to crafting highly
              interactive React frontends.
            </p>
            <p className="text-sm leading-relaxed font-syne" style={{ color: '#7A5544' }}>
              President of the{' '}
              <span className="font-medium" style={{ color: '#F57799' }}>GITAM Aero Astro Club</span>.
              I build for clarity: scalable architectures, clean REST APIs, and reliable code that
              works in production.
            </p>

            {/* Trait tags — each with its own accent color */}
            <div className="flex flex-wrap gap-2">
              {['Systems Thinker', 'Fast Learner', 'Detail-Oriented', 'Impact-Driven'].map((t, i) => (
                <motion.span key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-syne font-medium cursor-default"
                  style={{
                    background: `${tagColors[i]}12`,
                    border: `1px solid ${tagColors[i]}35`,
                    color: tagColors[i],
                  }}
                  whileHover={{ scale: 1.06, background: `${tagColors[i]}20` }}
                  initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  {t}
                </motion.span>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-mono tracking-widest uppercase" style={{ color: '#836353' }}>Education</h3>
              {edu.map((e, i) => (
                <div key={i} className="float-card" style={{ animationDelay: `${i * 0.5 + 0.2}s` }}>
                  <motion.div
                    className="bento-card flex items-center gap-3 p-4 cursor-default w-full"
                    style={{
                      borderLeft: `3.5px solid ${e.dot}`,
                    }}
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: e.dot, boxShadow: `0 0 8px ${e.dot}80` }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-display truncate" style={{ color: '#1A0D08' }}>{e.degree}</p>
                      <p className="text-xs font-syne" style={{ color: '#836353' }}>{e.school}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[11px] font-mono" style={{ color: '#836353' }}>{e.period}</p>
                      <p className="text-[11px] font-mono font-bold" style={{ color: e.dot }}>{e.detail}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div className="space-y-5"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>

            {/* Stat cards — each tinted by its own color */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label, color }, i) => (
                <div key={label} className="float-card" style={{ animationDelay: `${i * 0.4}s` }}>
                  <motion.div
                    className="bento-card relative p-6 overflow-hidden cursor-default group"
                    style={{
                      borderTop: `3.5px solid ${color}`,
                    }}
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 30% 30%, ${color}18, transparent 65%)` }} />
                    <div className="font-display text-4xl mb-1" style={{ color }}>{value}</div>
                    <div className="text-sm font-syne font-medium" style={{ color: `${color}CC` }}>{label}</div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Status card */}
            <div className="bento-card p-5 space-y-3"
              style={{ borderLeft: '3.5px solid #F57799' }}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: '#836353' }}>Status</span>
                <span className="flex items-center gap-1.5 text-xs font-mono font-semibold" style={{ color: '#D4604A' }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#F57799' }} />
                  Available
                </span>
              </div>
              {[
                { k: 'Location',   v: personalInfo.location      },
                { k: 'University', v: personalInfo.university     },
                { k: 'Grad Year',  v: personalInfo.graduationYear },
                { k: 'Focus',      v: 'SWE · AI · Full-Stack'    },
              ].map(({ k, v }) => (
                <div key={k} className="flex justify-between pt-3 border-t" style={{ borderColor: 'rgba(245,119,153,0.12)' }}>
                  <span className="text-xs font-syne" style={{ color: '#836353' }}>{k}</span>
                  <span className="text-xs font-mono font-medium" style={{ color: '#5C3D2A' }}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
