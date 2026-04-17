'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

export default function ScrollConnector() {
  const { scrollYProgress } = useScroll()
  const dotTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])

  return (
    <div className="fixed left-5 xl:left-8 top-0 h-full w-5 pointer-events-none z-20 hidden lg:block">
      {/* Dotted track — always visible */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
        style={{
          background:
            'repeating-linear-gradient(to bottom, rgba(245,119,153,0.22) 0px, rgba(245,119,153,0.22) 3px, transparent 3px, transparent 11px)',
        }}
      />

      {/* Solid fill — scaleY driven by scroll, covers dotted track */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-px origin-top"
        style={{
          scaleY: scrollYProgress,
          height: '100%',
          background: 'linear-gradient(to bottom, #F57799, #FB9B8F, #FDC3A1)',
          boxShadow: '0 0 6px rgba(245,119,153,0.55)',
        }}
      />

      {/* Traveling dot at the connection front */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full -mt-[5px]"
        style={{
          top: dotTop,
          opacity: glowOpacity,
          background: '#F57799',
          boxShadow: '0 0 8px #F57799, 0 0 18px rgba(245,119,153,0.5)',
        }}
      />

    </div>
  )
}
