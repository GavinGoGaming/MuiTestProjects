import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#5ecffa"></meta>
        <meta name="title" content="Designing Empires"/>
        <meta name="description" content="A parody web series about the worst client ever.... coming February 25th to YouTube"/>
        <meta name="keywords" content="starwars,parody,fanfilm,comedy,theforce,yoda,grogu,mandolorian,skywalker,darthvader,firstorder,empire,designingempires,lucas,jedi"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta property="og:title" content="Designing Empires" />
        <meta property="og:url" content="https://designingempires.com/" />
        <meta property="og:image" content="/de_square.png" />
        <meta property="twitter:title" content="Designing Empires" />
        <meta property="twitter:image" content="/de_square.png" />
        <meta property="twitter:description" content="A parody web series about the worst client ever.... coming February 25th to YouTube"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
