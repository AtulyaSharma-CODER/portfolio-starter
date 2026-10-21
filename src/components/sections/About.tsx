import Container from '@/components/ui/Container'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-dark-950"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
              alt="Chef preparing pasta in kitchen"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-sm font-medium mb-4">
              Our Story
            </span>

            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark-900 dark:text-white mb-6 leading-tight"
            >
              A Legacy of Flavor,<br /> Reimagined for Today
            </h2>

            <div className="space-y-4 text-dark-600 dark:text-dark-300 leading-relaxed">
              <p>
                Founded in 2009 by Chef Marco Rossi, Savoria began as a small family trattoria in the heart of
                North Beach. What started with his nonna's handwritten recipes has blossomed into a celebration
                of Italian culinary heritage.
              </p>
              <p>
                Today, we honor that legacy by sourcing ingredients from local farms and Italian artisans alike.
                Our pasta is made fresh daily. Our tomatoes come from San Marzano. Our olive oil is cold-pressed
                from Tuscan groves. Every plate that leaves our kitchen carries generations of love and technique.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: '🍝', label: 'Fresh Pasta Daily', desc: 'Made in-house every morning' },
                { icon: '🍅', label: 'San Marzano Tomatoes', desc: 'DOP certified from Campania' },
                { icon: '🫒', label: 'Tuscan Olive Oil', desc: 'Cold-pressed, single estate' },
                { icon: '🍷', label: 'Curated Wine List', desc: '200+ Italian selections' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-dark-50 dark:bg-dark-900 rounded-xl">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-medium text-dark-900 dark:text-white">{item.label}</p>
                    <p className="text-sm text-dark-500 dark:text-dark-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}