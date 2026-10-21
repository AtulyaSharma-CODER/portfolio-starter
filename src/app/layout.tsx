import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Savoria | Modern Italian Kitchen',
  description: 'Authentic Italian cuisine crafted with locally-sourced ingredients. Join us for an unforgettable dining experience.',
  keywords: ['restaurant', 'italian', 'fine dining', 'pasta', 'wine'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Savoria',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://savoria.vercel.app',
    siteName: 'Savoria',
    title: 'Savoria | Modern Italian Kitchen',
    description: 'Authentic Italian cuisine crafted with locally-sourced ingredients.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Savoria Restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savoria | Modern Italian Kitchen',
    description: 'Authentic Italian cuisine crafted with locally-sourced ingredients.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}