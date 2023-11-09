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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
      </head>
      <body className={inter.className}><Root>{children}</Root></body>
    </html>
  )
}
