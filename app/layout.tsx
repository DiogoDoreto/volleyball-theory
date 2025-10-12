import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Volleyball Theory',
  description: 'Quick volleyball information',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <script
        data-goatcounter="https://diogodoreto.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
    </html>
  )
}
