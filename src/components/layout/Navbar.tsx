'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const NAV = [
  { label: 'Home',       id: 'hero'       },
  { label: 'About',      id: 'about'      },
  { label: 'Skills',     id: 'skills'     },
  { label: 'Projects',   id: 'projects'   },
  { label: 'Experience', id: 'experience' },
  { label: 'More',       id: 'leadership' },
  { label: 'Contact',    id: 'contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useScrollSpy(NAV.map(n => n.id), 90)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-[100] hidden lg:flex items-center justify-between px-10 py-5 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(240,224,204,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(245,119,153,0.12)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.10)' : 'none',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2.5 font-display text-sm tracking-tight text-[#1A0D08] hover:text-[#1A0D08]/80 transition-colors font-mono font-bold"
        >
          &lt;/prasanna&gt;
        </button>

        {/* Nav items */}
        <div className="flex items-center gap-1">
          {NAV.map(item => {
            const isActive = active === item.id
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`relative px-4 py-2 text-sm font-syne font-medium tracking-wide transition-all duration-200 rounded-lg ${
                  isActive ? 'text-[#1A0D08]' : 'text-[#836353] hover:text-[#1A0D08] hover:bg-black/5'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-bg"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(245,119,153,0.1)', border: '1px solid rgba(245,119,153,0.25)' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: '#F57799' }}
                    layoutId="nav-dot"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Resume */}
        <motion.a
          href="/PrasannaRDL-Resume.pdf"
          download
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-syne font-semibold tracking-wide transition-all duration-200"
          style={{
            background: 'rgba(245,119,153,0.1)',
            border: '1px solid rgba(245,119,153,0.35)',
            color: '#F57799',
          }}
          whileHover={{ background: 'rgba(245,119,153,0.18)', scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Resume
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v7M3 5l3 3 3-3M2 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      </motion.nav>

      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden flex items-center justify-between px-5 py-4 transition-all duration-300"
           style={{ background: 'rgba(240,224,204,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(245,119,153,0.1)' }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-xs text-[#1A0D08] font-bold">
          &lt;/prasanna&gt;
        </button>
        <button onClick={() => setMobileOpen(v => !v)} className="flex flex-col gap-[5px] p-1" aria-label="Toggle menu">
          {[0, 1, 2].map(i => (
            <motion.span key={i} className="block w-5 h-[2px] rounded-full"
              style={{ background: mobileOpen ? '#F57799' : '#836353' }}
              animate={{
                rotate: mobileOpen && i !== 1 ? (i === 0 ? 45 : -45) : 0,
                y: mobileOpen ? (i === 0 ? 7 : i === 2 ? -7 : 0) : 0,
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }}
              transition={{ duration: 0.25 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[61px] left-3 right-3 z-40 lg:hidden rounded-2xl overflow-hidden"
            style={{ background: 'rgba(240,224,204,0.98)', backdropFilter: 'blur(24px)', border: '1px solid rgba(245,119,153,0.15)' }}
          >
            {NAV.map(item => (
              <button key={item.id} onClick={() => go(item.id)}
                className={`w-full text-left px-6 py-4 text-sm font-syne font-medium transition-all duration-200 border-b border-black/5 ${
                  active === item.id ? 'text-[#F57799]' : 'text-[#836353]'
                }`}
                style={active === item.id ? { background: 'rgba(245,119,153,0.08)', color: '#F57799' } : {}}
              >
                {item.label}
              </button>
            ))}
            <a href="/PrasannaRDL-Resume.pdf" download
              className="block m-4 text-center py-3.5 text-sm font-syne font-semibold rounded-xl transition-all duration-200"
              style={{ background: 'rgba(245,119,153,0.1)', border: '1px solid rgba(245,119,153,0.3)', color: '#F57799' }}
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
