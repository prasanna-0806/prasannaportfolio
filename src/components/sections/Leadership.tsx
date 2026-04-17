'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { Icon } from '@iconify/react'
import { leadershipRoles, hackathons, certifications } from '@/data/portfolio'

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding relative z-10 overflow-hidden">
      {/* Decorative bg: hex dot pattern + corner arcs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(139,74,42,0.1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ border: '1.5px solid rgba(245,119,153,0.1)' }} />
        <div className="absolute -top-20 -left-20 w-[340px] h-[340px] rounded-full"
          style={{ border: '1px solid rgba(212,96,74,0.08)' }} />
        <div className="absolute -bottom-20 right-10 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,74,42,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle label="// beyond.code" title="Leadership & More"
          description="Building communities, shipping under pressure, growing continuously" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Roles — pink accent */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono tracking-widest uppercase mb-6" style={{ color: '#836353' }}>Roles</h3>
            {leadershipRoles.map((role, i) => (
              <div key={i} className="float-card" style={{ animationDelay: `${i * 0.45}s` }}>
              <motion.div className="relative p-4 rounded-3xl transition-all duration-200 group cursor-default"
                style={{ background: 'rgba(255,252,248,0.45)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(255,255,255,0.2)', border: '1px solid rgba(245,119,153,0.35)', borderLeft: '3px solid #F57799' }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ x: 3, boxShadow: '0 4px 20px rgba(245,119,153,0.15)' }}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0" style={{ color: '#F57799' }}>
                    <Icon icon={role.icon} width={20} height={20} />
                  </span>
                  <div>
                    <p className="text-sm font-display" style={{ color: '#1A0D08' }}>{role.role}</p>
                    <p className="text-xs font-mono font-medium" style={{ color: '#F57799' }}>{role.organization}</p>
                    <p className="text-xs" style={{ color: '#836353' }}>{role.period}</p>
                    {role.bullets.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {role.bullets.slice(0, 2).map((b, j) => (
                          <li key={j} className="text-xs leading-snug flex gap-1.5" style={{ color: '#7A5544' }}>
                            <span style={{ color: '#F57799' }} className="shrink-0 mt-0.5">›</span>{b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
              </div>
            ))}
          </div>

          {/* Hackathons — amber accent */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono tracking-widest uppercase mb-6" style={{ color: '#836353' }}>Hackathons</h3>
            {hackathons.map((h, i) => (
              <div key={i} className="float-card" style={{ animationDelay: `${i * 0.5 + 0.3}s` }}>
              <motion.div className="p-4 rounded-3xl transition-all duration-200 cursor-default"
                style={{ background: 'rgba(255,252,248,0.45)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(255,255,255,0.2)', border: '1px solid rgba(245,158,11,0.35)', borderLeft: '3px solid #F59E0B' }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(245,158,11,0.15)' }}>
                <div className="flex items-center gap-3">
                  <span style={{ color: '#F59E0B' }}><Icon icon={h.icon} width={20} height={20} /></span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-display" style={{ color: '#1A0D08' }}>{h.name}</p>
                    <p className="text-xs font-mono" style={{ color: '#836353' }}>{h.host}</p>
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold shrink-0"
                    style={{
                      background: h.result === 'Top 5th' ? 'rgba(245,119,153,0.16)' : 'rgba(245,158,11,0.14)',
                      border: h.result === 'Top 5th' ? '1px solid rgba(245,119,153,0.35)' : '1px solid rgba(245,158,11,0.35)',
                      color: h.result === 'Top 5th' ? '#D44070' : '#B87300',
                    }}
                  >
                    {h.result}
                  </span>
                </div>
              </motion.div>
              </div>
            ))}
            <div className="p-4 rounded-3xl" style={{ background: 'rgba(255,252,248,0.45)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(255,255,255,0.2)', border: '1px solid rgba(245,158,11,0.3)' }}>
              <p className="text-xs leading-relaxed font-syne" style={{ color: '#7A5544' }}>
                Participated in 4 competitive innovation events, with a Top 5th rank at InnovAIthon.
              </p>
            </div>
          </div>

          {/* Certifications — brown accent */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono tracking-widest uppercase mb-6" style={{ color: '#836353' }}>Certifications</h3>
            {certifications.map((cert, i) => (
              <div key={i} className="float-card" style={{ animationDelay: `${i * 0.4 + 0.15}s` }}>
              <motion.div className="p-4 rounded-3xl transition-all duration-200 group cursor-default"
                style={{ background: 'rgba(255,252,248,0.45)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(255,255,255,0.2)', border: '1px solid rgba(139,74,42,0.35)', borderLeft: '3px solid #8B4A2A' }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ x: 3, boxShadow: '0 4px 20px rgba(139,74,42,0.15)' }}>
                <div className="flex items-center gap-3">
                  <span style={{ color: '#8B4A2A' }} className="shrink-0">
                    <Icon icon={cert.icon} width={18} height={18} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-display leading-tight" style={{ color: '#1A0D08' }}>{cert.name}</p>
                    <p className="text-xs font-mono mt-0.5" style={{ color: '#836353' }}>{cert.issuer}</p>
                  </div>
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold shrink-0 transition-all duration-200"
                      style={{
                        color: '#8B4A2A',
                        border: '1px solid rgba(139,74,42,0.35)',
                        background: 'rgba(139,74,42,0.08)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(139,74,42,0.16)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(139,74,42,0.08)'
                      }}
                    >
                      View
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold shrink-0 opacity-60 cursor-not-allowed"
                      style={{
                        color: '#8B4A2A',
                        border: '1px solid rgba(139,74,42,0.25)',
                        background: 'rgba(139,74,42,0.06)',
                      }}
                      title="Add credentialUrl in data to enable"
                    >
                      View
                    </button>
                  )}
                </div>
              </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
