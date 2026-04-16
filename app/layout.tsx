import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ayush Tiwari | Computer Vision & Full Stack Developer',
  description: 'Portfolio of Ayush Tiwari - Computer Vision specialist, Full Stack Developer, and Software Engineer. Explore my projects and expertise.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
    other: [
      { rel: 'icon', url: '/favicon-16.png' },
      { rel: 'icon', url: '/favicon-32.png' }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">

            {children}
            {process.env.NODE_ENV === 'production' && <Analytics />}
            <a
              href="#home"
              className="fixed left-4 top-4 z-50 rounded-full overflow-hidden ring-2 ring-primary/40 shadow-md hidden sm:inline-block transform transition-transform duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
              aria-label="Go to home"
            >
              <img src="/IMG_5812.jpg" alt="Ayush" className="w-12 h-12 object-cover block" />
            </a>
      </body>
    </html>
  )
}
