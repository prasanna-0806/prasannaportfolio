import type { Metadata } from 'next'
import { Archivo_Black, Syne, Instrument_Serif, Space_Mono } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/layout/CustomCursor'

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  variable: '--font-archivo-black',
  weight: '400',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument',
  weight: '400',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prasanna RDL — Developer Portfolio',
  description: 'B.Tech CSE student portfolio featuring projects, internship experience, technical skills, leadership, and contact information.',
  keywords: ['Prasanna RDL', 'Full-Stack', 'AI Engineer', 'React', 'Python', 'Portfolio'],
  authors: [{ name: 'Prasanna RDL' }],
  openGraph: {
    title: 'Prasanna RDL — Developer Portfolio',
    description: 'B.Tech CSE student portfolio featuring projects, internship experience, technical skills, leadership, and contact information.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${archivoBlack.variable} ${syne.variable} ${instrumentSerif.variable} ${spaceMono.variable} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}