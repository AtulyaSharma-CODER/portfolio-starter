import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import React from 'react'

const menuCategories = [
  {
    id: 'antipasti',
    label: 'Antipasti',
    items: [
      { name: 'Bruschetta Classica', desc: 'Grilled ciabatta, San Marzano tomatoes, basil, garlic, EVOO', price: 14 },
      { name: 'Burrata & Prosciutto', desc: 'Creamy burrata, 24-month prosciutto di Parma, fig jam, grilled bread', price: 18 },
      { name: 'Calamari Fritti', desc: 'Crispy fried calamari, lemon aioli, marinara sauce', price: 16 },
      { name: 'Carpaccio di Manzo', desc: 'Paper-thin raw beef, arugula, capers, shaved Parmigiano, truffle oil', price: 19 },
    ],
  },
  {
    id: 'primi',
    label: 'Primi Piatti',
    items: [
      { name: 'Spaghetti Carbonara', desc: 'Guanciale, Pecorino Romano, egg yolk, black pepper', price: 24 },
      { name: 'Tagliatelle al Ragù', desc: 'Slow-cooked Bolognese ragù, fresh tagliatelle, Parmigiano', price: 26 },
      { name: 'Risotto ai Funghi', desc: 'Carnaroli rice, mixed wild mushrooms, white wine, aged Parmigiano', price: 28 },
      { name: 'Gnocchi alla Sorrentina', desc: 'Potato gnocchi, San Marzano tomato, fresh mozzarella, basil', price: 25 },
    ],
  },
  {
    id: 'secondi',
    label: 'Secondi Piatti',
    items: [
      { name: 'Branzino al Forno', desc: 'Whole roasted Mediterranean sea bass, herbs, lemon, cherry tomatoes', price: 36 },
      { name: 'Osso Buco alla Milanese', desc: 'Braised veal shanks, saffron risotto, gremolata', price: 38 },
      { name: 'Pollo al Mattone', desc: 'Brick-pressed chicken, rosemary garlic jus, roasted potatoes', price: 32 },
      { name: 'Filetto al Pepe Verde', desc: 'Prime filet mignon, green peppercorn cream sauce, seasonal vegetables', price: 42 },
    ],
  },
  {
    id: 'dolci',
    label: 'Dolci',
    items: [
      { name: 'Tiramisù Classico', desc: 'Espresso-soaked ladyfingers, mascarpone cream, cocoa', price: 12 },
      { name: 'Panna Cotta', desc: 'Vanilla bean panna cotta, mixed berry compote, mint', price: 11 },
      { name: 'Affogato', desc: 'Vanilla gelato drowned in hot espresso, amaretto cookie', price: 10 },
      { name: 'Cannoli Siciliani', desc: 'Crispy shells, sweet ricotta, chocolate chips, pistachios', price: 13 },
    ],
  },
]

export default function Menu() {
  return (
    <section
      id="menu"
      className="py-20 sm:py-28 lg:py-32 bg-dark-50 dark:bg-dark-900"
      aria-labelledby="menu-heading"
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-sm font-medium mb-4">
            Our Menu
          </span>
          <h2
            id="menu-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark-900 dark:text-white mb-4 leading-tight"
          >
            Crafted with the Finest Ingredients
          </h2>
          <p className="text-dark-600 dark:text-dark-300 text-lg">
            Each dish is prepared to order using traditional techniques and the best seasonal produce.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Menu categories">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={i === 0}
              aria-controls={`${cat.id}-panel`}
              id={`${cat.id}-tab`}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                i === 0
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Panels */}
        <div className="space-y-8">
          {menuCategories.map((cat, i) => (
            <div
              key={cat.id}
              id={`${cat.id}-panel`}
              role="tabpanel"
              aria-labelledby={`${cat.id}-tab`}
              hidden={i !== 0}
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
            >
              {cat.items.map((item, j) => (
                <Card key={j} variant="bordered" padding="lg" className="group">
                  <div className="flex gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-4 mb-2">
                        <h3 className="font-medium text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-display font-semibold text-primary-600 dark:text-primary-400 whitespace-nowrap">
                          ${item.price}
                        </span>
                      </div>
                      <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-dark-600 dark:text-dark-400 mb-4">
            Looking for our full wine list or seasonal specials?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            Contact us for the complete menu <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  )
}