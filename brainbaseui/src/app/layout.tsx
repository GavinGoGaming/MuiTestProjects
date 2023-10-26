import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider, extendTheme } from '@mui/joy'
import Root from './root';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brainbase AI',
  description: 'your one stop for AI',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Root>{children}</Root></body>
    </html>
  )
}
