import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-dark-950 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/90 via-dark-950/70 to-dark-950/90" />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-20">
        <div className="max-w-3xl text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/20 text-primary-400 text-sm font-medium mb-6">
            Now Open in San Francisco
          </span>

          <h1
            id="hero-heading"
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight mb-6 text-balance"
          >
            Authentic Italian{' '}
            <span className="text-primary-400">Cuisine</span>{' '}
            Crafted with Passion
          </h1>

          <p className="text-lg sm:text-xl text-dark-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the true flavors of Italy in our modern kitchen. Every dish tells a story of tradition,
            family recipes, and the finest locally-sourced ingredients.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">Reserve a Table</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="#menu">View Our Menu</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-display text-3xl sm:text-4xl font-semibold text-white">50+</p>
              <p className="text-dark-400 text-sm mt-1">Menu Items</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-semibold text-white">15</p>
              <p className="text-dark-400 text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-semibold text-white">200+</p>
              <p className="text-dark-400 text-sm mt-1">Wine Selections</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}