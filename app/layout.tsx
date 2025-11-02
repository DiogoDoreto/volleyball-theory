import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LocaleProvider } from './i18n'
import en from './i18n/locales/en.json'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: en.app.title,
  description: en.app.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
      <script
        data-goatcounter="https://diogodoreto.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
    </html>
  )
}
