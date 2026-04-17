'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { personalInfo } from '@/data/portfolio'

const SpacePlanet = dynamic(() => import('@/components/three/SpacePlanet'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
})

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#@$%&?!'

function ScrambleName({ text, startDelay = 0, lockedColor = '#ffffff' }: { text: string; startDelay?: number; lockedColor?: string }) {
  const [letters, setLetters] = useState<string[]>(
    () => text.split('').map(() => SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)])
  )
  const [locked, setLocked] = useState<boolean[]>(() => text.split('').map(() => false))

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    const intervals: ReturnType<typeof setInterval>[] = []

    text.split('').forEach((char, i) => {
      const iv = setInterval(() => {
        setLetters(prev => {
          const next = [...prev]
          next[i] = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          return next
        })
      }, 40)
      intervals.push(iv)

      const t = setTimeout(() => {
        clearInterval(iv)
        setLetters(prev => { const n = [...prev]; n[i] = char; return n })
        setLocked(prev => { const n = [...prev]; n[i] = true; return n })
      }, startDelay + i * 120 + 300)
      timers.push(t)
    })

    return () => {
      timers.forEach(clearTimeout)
      intervals.forEach(clearInterval)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <span className="inline-flex whitespace-nowrap leading-none align-baseline">
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 14, rotateX: -50 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: (startDelay + i * 100) / 1000, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ color: locked[i] ? lockedColor : 'rgba(245,119,153,0.45)' }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  )
}

function RoleCycle({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 2800)
    return () => clearInterval(t)
  }, [words.length])

  return (
    <div className="relative h-7 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="absolute font-syne text-lg"
          style={{ color: '#FB9B8F' }}
        >
          {words[idx]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 400])
  const emailAddress = personalInfo.email
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent('Portfolio inquiry')}&body=${encodeURIComponent('Hi Prasanna,')}`

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 hidden lg:block">
        <SpacePlanet />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,119,153,0.06) 0%, transparent 65%)', y: yBg }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <motion.div variants={stagger} initial="hidden" animate="show"
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

          {/* LEFT — name + bio */}
          <div className="space-y-5">
            <motion.p variants={item}
              className="font-serif text-3xl sm:text-4xl"
              style={{ fontStyle: 'italic', color: '#7A5544' }}>
              hello! i&apos;m
            </motion.p>

            <div className="leading-none space-y-1" style={{ perspective: '600px' }}>
              <div className="font-display tracking-tight text-[2rem] sm:text-7xl xl:text-8xl whitespace-nowrap leading-[0.88]">
                <ScrambleName text="PRASANNA" startDelay={200} lockedColor="#F57799" />
              </div>
              <div className="font-display text-[2rem] sm:text-7xl xl:text-8xl tracking-tight whitespace-nowrap leading-[0.88]">
                <ScrambleName text="RDL" startDelay={1400} lockedColor="#1A0D08" />
              </div>
            </div>

            <motion.div variants={item} className="flex items-center">
              <RoleCycle words={personalInfo.roles} />
            </motion.div>

            <motion.div variants={item}>
              <p className="font-serif text-base leading-relaxed max-w-md" style={{ fontStyle: 'italic', color: '#5C3D2A' }}>
                Third-year CS student and full-stack developer architecting{' '}
                <span className="not-italic font-syne font-semibold" style={{ color: '#1A0D08' }}>
                  robust web applications, secure APIs, and intelligent systems.
                </span>
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-3 sm:gap-5 pt-1">
              {[
                { label: 'GitHub',   href: personalInfo.github,           icon: 'ph:github-logo-fill',   color: '#1A0D08' },
                { label: 'LinkedIn', href: personalInfo.linkedin,          icon: 'ph:linkedin-logo-fill', color: '#60a5fa' },
                { label: 'Email',    href: gmailComposeUrl,                 icon: 'ph:envelope-fill',     color: '#F57799' },
              ].map(({ label, href, icon, color }) => (
                <a key={label} href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs text-[#836353] hover:text-[#1A0D08] transition-colors font-mono group"
                >
                  <span
                    className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 group-hover:scale-110"
                    style={{ border: '1px solid rgba(26,13,8,0.1)', background: 'rgba(26,13,8,0.04)', color }}
                  >
                    <Icon icon={icon} width={16} height={16} />
                  </span>
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — badge + picture */}
          <motion.div variants={item} className="flex flex-col gap-6 lg:items-end w-full max-w-[280px] justify-self-center lg:justify-self-end mt-10 lg:mt-0">
            {/* Picture Placeholder */}
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-[2rem] overflow-hidden bento-card rotate-3 hover:rotate-0 transition-transform duration-300 mx-auto lg:mx-0"
                 style={{ border: '4px solid #F57799', boxShadow: '12px 12px 0px rgba(26,13,8,0.1)' }}>
              <Image 
                src="/profile.jpg" 
                alt="Prasanna RDL" 
                fill 
                sizes="(max-width: 1024px) 256px, 288px"
                className="object-cover transition-all duration-500"
              />
            </div>

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-white/40 backdrop-blur-md"
              style={{ border: '1px solid rgba(245,119,153,0.3)', color: '#D4604A' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#D4604A' }} />
              Open to Internships
            </div>
          </motion.div>

        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <div
          className="w-6 h-10 rounded-full flex justify-center pt-2.5"
          style={{ border: '1.5px solid rgba(26,13,8,0.2)' }}
        >
          <motion.div
            className="w-1 h-2 rounded-full"
            style={{ background: 'rgba(245,119,153,0.8)' }}
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span className="text-[9px] text-[#836353] font-mono tracking-[0.25em] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
