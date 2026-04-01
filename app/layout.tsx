import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Lazarus IDE — Open-Source RAD in Free Pascal',
  description:
    'Build native cross-platform applications in Object Pascal from a single codebase. Lazarus is a free, open-source IDE powered by Free Pascal, compatible with Delphi workflows.',
  keywords: ['Lazarus', 'Free Pascal', 'IDE', 'RAD', 'Object Pascal', 'cross-platform', 'open-source', 'Delphi'],
  openGraph: {
    title: 'Lazarus IDE — Open-Source RAD in Free Pascal',
    description:
      'Build native cross-platform applications in Object Pascal from a single codebase.',
    type: 'website',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1117' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
