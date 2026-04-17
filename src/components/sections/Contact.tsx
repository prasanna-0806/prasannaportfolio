'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import GlowButton from '@/components/ui/GlowButton'
import { Icon } from '@iconify/react'
import { personalInfo } from '@/data/portfolio'

type Status = 'idle' | 'loading' | 'success' | 'error'

const links = [
  { icon: 'ph:envelope-fill',      label: 'Email',    value: 'eduprasanna0013@gmail.com',   href: 'mailto:eduprasanna0013@gmail.com', color: '#F57799'  },
  { icon: 'ph:linkedin-logo-fill', label: 'LinkedIn', value: 'linkedin.com/in/prasanna-rdl', href: 'https://linkedin.com/in/prasanna-rdl', color: '#60a5fa' },
  { icon: 'ph:github-logo-fill',   label: 'GitHub',   value: 'github.com/prasanna-0806',    href: 'https://github.com/prasanna-0806',    color: '#1A0D08' },
  { icon: 'ph:map-pin-fill',       label: 'Location', value: 'Visakhapatnam, India',         href: 'https://www.google.com/maps/search/?api=1&query=Visakhapatnam%2C%20India', color: '#F59E0B' },
]

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [step, setStep] = useState(0)
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const messageInputRef = useRef<HTMLTextAreaElement>(null)

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleKeyDown = (e: React.KeyboardEvent, nextStep: number) => {
    if (e.key === 'Enter' && !e.shiftKey && nextStep < 3) {
      e.preventDefault()
      setStep(nextStep)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isValidEmail(form.email)) {
      setStatus('error')
      emailInputRef.current?.focus()
      emailInputRef.current?.setCustomValidity('Please enter a valid email address.')
      emailInputRef.current?.reportValidity()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    emailInputRef.current?.setCustomValidity('')
    setStatus('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current)
      }
      successTimerRef.current = setTimeout(() => {
        setForm({ name: '', email: '', message: '' })
        setStep(0)
        setStatus('idle')
      }, 3000)
    } catch { 
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="section-padding relative z-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(245,119,153,0.1) 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
        <motion.div 
          className="absolute top-[5%] left-[2%] w-[600px] h-[600px] rounded-full mix-blend-multiply"
          style={{ background: 'radial-gradient(circle, rgba(251,155,143,0.12) 0%, transparent 65%)' }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-[5%] right-[2%] w-[700px] h-[700px] rounded-full mix-blend-multiply"
          style={{ background: 'radial-gradient(circle, rgba(245,119,153,0.1) 0%, transparent 65%)' }}
          animate={{ x: [0, -30, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div 
          className="absolute -right-8 -bottom-12 font-display font-black leading-none"
          style={{ color: 'rgba(245,119,153,0.06)', fontSize: '20rem', textShadow: '0 0 40px rgba(245,119,153,0.1)' }}
          initial={{ opacity: 0, x: 100, rotate: 6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          TALK
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionTitle label="// let's.connect" title="Get In Touch" description="Have an opportunity or just want to talk tech? I'm always open." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* LEFT — contact info */}
          <motion.div
            className="bento-card relative flex flex-col justify-between gap-8 min-h-[480px] p-8"
            style={{ borderLeft: '3.5px solid #F57799' }}
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: '#F57799' }}>Get in touch</p>
              <p className="font-display text-4xl text-[#1A0D08] leading-tight">
                Let&apos;s build<br />something great.
              </p>
              <p className="font-serif text-sm leading-relaxed" style={{ fontStyle: 'italic', color: '#7A5544' }}>
                Open to internships in SWE, AI/ML, or full-stack. Remote or on-site.
              </p>
            </div>

            <div className="relative space-y-4">
              {links.map(({ icon, label, value, href, color }) => (
                <motion.div key={label} className="flex items-center gap-4 group"
                  whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-200"
                    style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}>
                    <Icon icon={icon} width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: '#836353' }}>{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                        className="text-sm font-syne transition-colors duration-200 hover:text-[#1A0D08]"
                        style={{ color: '#5C3D2A' }}>{value}</a>
                    ) : (
                      <p className="text-sm font-syne" style={{ color: '#5C3D2A' }}>{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative flex items-center gap-2 px-4 py-3 rounded-2xl"
              style={{ background: 'rgba(245,119,153,0.07)', border: '1px solid rgba(245,119,153,0.2)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse shrink-0" style={{ background: '#F57799' }} />
              <span className="text-xs font-syne" style={{ color: '#D44070' }}>Available · Immediate start</span>
            </div>
          </motion.div>

          {/* RIGHT — terminal form */}
          <motion.div
            className="bento-card p-8 flex flex-col"
            style={{ background: 'rgba(255,252,248,0.3)', border: '1px solid rgba(26,13,8,0.08)' }}
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
              {/* Terminal output */}
              <div className="space-y-6 font-mono text-sm">
                {/* Greeting */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  <p style={{ color: '#00d4ff' }}>$ <span className="inline-block animate-pulse">▌</span></p>
                  <p style={{ color: '#5C3D2A' }} className="ml-4">connecting to Prasanna...</p>
                </motion.div>

                {/* Step 1: Name */}
                {step >= 0 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <p style={{ color: '#F57799' }}>$ what's your name?</p>
                    <div className="ml-4 mt-3">
                      <div className="relative flex items-center gap-3">
                        <span style={{ color: '#00d4ff' }}>&gt; </span>
                        <input
                          ref={nameInputRef}
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          onKeyDown={(e) => handleKeyDown(e, 1)}
                          className="bg-transparent border-b-2 outline-none text-sm flex-1 min-w-0"
                          style={{ borderColor: '#F57799', color: '#1A0D08' }}
                          placeholder="John"
                        />
                      </div>
                      <p style={{ color: '#C0A090', fontSize: '11px' }} className="mt-1 ml-4">↵ enter</p>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Email */}
                {step >= 1 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    {form.name && <p style={{ color: '#5C3D2A' }} className="ml-4 mb-2">Thanks, <span style={{ color: '#F57799' }}>{form.name}</span>!</p>}
                    <p style={{ color: '#F57799' }}>$ what's your email?</p>
                    <div className="ml-4 mt-3">
                      <div className="relative flex items-center gap-3">
                        <span style={{ color: '#00d4ff' }}>&gt; </span>
                        <input
                          ref={emailInputRef}
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          onKeyDown={(e) => handleKeyDown(e, 2)}
                          required
                          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                          autoFocus={step === 1}
                          className="bg-transparent border-b-2 outline-none text-sm flex-1 min-w-0"
                          style={{ borderColor: '#F57799', color: '#1A0D08' }}
                          placeholder="you@example.com"
                        />
                      </div>
                      <p style={{ color: '#C0A090', fontSize: '11px' }} className="mt-1 ml-4">↵ enter</p>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Message */}
                {step >= 2 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                    <p style={{ color: '#F57799' }}>$ tell me more...</p>
                    <div className="ml-4 mt-3">
                      <div className="relative flex gap-3">
                        <p style={{ color: '#00d4ff' }}>&gt;</p>
                        <div className="flex-1 relative">
                          <textarea
                            ref={messageInputRef}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && e.ctrlKey) handleSubmit(e as any)
                            }}
                            autoFocus={step === 2}
                            className="w-full bg-transparent border-b-2 outline-none text-sm resize-none"
                            style={{ borderColor: '#F57799', color: '#1A0D08' }}
                            placeholder="I'm interested in..."
                            rows={3}
                          />
                          <span style={{ color: '#C0A090', fontSize: '11px' }} className="text-xs mt-1 block">
                            ↵ ctrl+enter to send
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Status messages */}
                {status === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#4ade80' }}>
                    ✓ message sent successfully
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#f87171' }}>
                    ✗ error sending message. email me directly.
                  </motion.p>
                )}
              </div>

              {/* Action button */}
              {step >= 2 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full py-3 rounded-xl font-mono text-sm font-medium transition-all duration-200 disabled:opacity-50"
                    style={{
                      background: '#F57799',
                      color: '#fff',
                      border: '1px solid #F57799',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(245,119,153,0.9)'
                      e.currentTarget.style.boxShadow = '0 0 16px rgba(245,119,153,0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#F57799'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {status === 'loading' ? '$ sending...' : '$ send_message'}
                  </button>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div className="mt-20 pt-8 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-xs font-mono mt-1" style={{ color: '#C0A090' }}>
            © 2026 Prasanna RDL. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
