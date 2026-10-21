import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import React, { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
    status: 'idle', // idle | submitting | success | error
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, status: 'submitting' }))

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production: send to your backend / Formspree / Netlify Forms / EmailJS
    console.log('Form submitted:', formState)

    setFormState((prev) => ({ ...prev, status: 'success' }))
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: '',
        status: 'idle',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-dark-950"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-sm font-medium mb-4">
              Visit Us
            </span>

            <h2
              id="contact-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark-900 dark:text-white mb-6 leading-tight"
            >
              Reserve Your Table
            </h2>

            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-8 max-w-lg">
              Join us for an unforgettable dining experience. Reservations recommended for dinner service.
              Walk-ins welcome at the bar.
            </p>

            <div className="space-y-6">
              {[
                { icon: '📍', title: 'Address', content: '123 Culinary Street, San Francisco, CA 94102' },
                { icon: '📞', title: 'Phone', content: '(415) 555-0123', link: 'tel:+14155550123' },
                { icon: '✉️', title: 'Email', content: 'hello@savoria.com', link: 'mailto:hello@savoria.com' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-medium text-dark-900 dark:text-white">{item.title}</p>
                    {item.link ? (
                      <a href={item.link} className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-dark-600 dark:text-dark-400">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div>
                <p className="font-medium text-dark-900 dark:text-white mb-2">Hours</p>
                <dl className="space-y-1 text-dark-600 dark:text-dark-400 text-sm">
                  <div className="flex justify-between"><dt>Mon – Thu</dt><dd className="ml-4">5:00 PM – 10:00 PM</dd></div>
                  <div className="flex justify-between"><dt>Fri – Sat</dt><dd className="ml-4">5:00 PM – 11:00 PM</dd></div>
                  <div className="flex justify-between"><dt>Sunday</dt><dd className="ml-4">4:00 PM – 9:00 PM</dd></div>
                  <div className="flex justify-between text-primary-600 dark:text-primary-400"><dt>Happy Hour</dt><dd className="ml-4">Daily 4–6 PM</dd></div>
                </dl>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card variant="elevated" padding="lg">
            <h3 className="font-display text-2xl font-semibold text-dark-900 dark:text-white mb-6">
              Book a Table
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="(415) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formState.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none bg-no-repeat bg-right"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7+ Guests (call us)</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formState.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formState.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none bg-no-repeat bg-right"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                  >
                    <option value="">Select a time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-y"
                  placeholder="Allergies, celebrations, seating preferences..."
                />
              </div>

              <Button type="submit" className="w-full" size="lg" loading={formState.status === 'submitting'}>
                {formState.status === 'success' ? 'Request Sent!' : formState.status === 'submitting' ? 'Sending...' : 'Request Reservation'}
              </Button>

              {formState.status === 'success' && (
                <p className="text-center text-green-600 dark:text-green-400 text-sm">
                  ✓ We've received your request. You'll receive a confirmation email within 15 minutes.
                </p>
              )}

              {formState.status === 'error' && (
                <p className="text-center text-red-600 dark:text-red-400 text-sm">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <p className="text-center text-xs text-dark-500 dark:text-dark-500">
                By submitting, you agree to our{' '}
                <a href="/privacy" className="underline hover:text-primary-600 dark:hover:text-primary-400">Privacy Policy</a>
                {' '}and{' '}
                <a href="/terms" className="underline hover:text-primary-600 dark:hover:text-primary-400">Terms of Service</a>
              </p>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  )
}