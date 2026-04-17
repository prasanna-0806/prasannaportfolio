'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Leadership from '@/components/sections/Leadership'
import Contact from '@/components/sections/Contact'
import IntroAnimation from '@/components/ui/IntroAnimation'
import SectionUnlock from '@/components/ui/SectionUnlock'
import ScrollConnector from '@/components/ui/ScrollConnector'

// StarField is client canvas — lazy load to avoid SSR
const StarField = dynamic(() => import('@/components/three/StarField'), { ssr: false })

export default function Home() {
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto'
      }
    }
  }, [])

  useEffect(() => {
    if (!introDone) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [introDone])

  return (
    <main className="relative min-h-screen bg-[#F0E0CC]">
      <IntroAnimation onComplete={() => setIntroDone(true)} />

      {/* Static ambient blobs — CSS only, no JS */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[130px]" style={{ background: 'rgba(245,119,153,0.07)' }} />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(251,155,143,0.05)' }} />
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[500px] rounded-full blur-[150px]" style={{ background: 'rgba(253,195,161,0.04)' }} />
      </div>

      {/* About-style ring motifs spread across the full page */}
      <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
        <div className="absolute top-[44%] left-[10%] w-[280px] h-[280px] rounded-full" style={{ border: '1.5px solid rgba(245,119,153,0.18)' }} />
        <div className="absolute top-[48%] left-[13%] w-[170px] h-[170px] rounded-full" style={{ border: '1px solid rgba(212,96,74,0.15)' }} />

        <div className="absolute top-[60%] right-[12%] w-[340px] h-[340px] rounded-full" style={{ border: '1.5px solid rgba(251,155,143,0.18)' }} />
        <div className="absolute top-[64%] right-[16%] w-[210px] h-[210px] rounded-full" style={{ border: '1px solid rgba(245,119,153,0.14)' }} />

        <div className="absolute top-[78%] left-[22%] w-[260px] h-[260px] rounded-full" style={{ border: '1.5px solid rgba(245,119,153,0.18)' }} />
        <div className="absolute top-[82%] left-[25%] w-[155px] h-[155px] rounded-full" style={{ border: '1px solid rgba(212,96,74,0.15)' }} />
      </div>

      <StarField />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <ScrollProgress />
        <ScrollConnector />
        <Navbar />

        <div className="relative z-10">
          <Hero />
          <SectionUnlock><About /></SectionUnlock>
          <SectionUnlock><Skills /></SectionUnlock>
          <SectionUnlock><Projects /></SectionUnlock>
          <SectionUnlock><Experience /></SectionUnlock>
          <SectionUnlock><Leadership /></SectionUnlock>
          <SectionUnlock><Contact /></SectionUnlock>
        </div>
      </motion.div>
    </main>
  )
}
