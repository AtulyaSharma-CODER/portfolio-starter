# Portfolio Starter — Restaurant Template

Production-ready Next.js 14 + Tailwind + TypeScript starter for a restaurant website. Deploy to Vercel in 2 minutes.

## Quick Deploy

### Option 1: Vercel Dashboard (Recommended)
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Click **Deploy** — done!

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   ├── page.tsx           # Homepage (restaurant)
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── ui/                # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/          # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Menu.tsx
│       └── Contact.tsx
└── lib/
    └── utils.ts           # Utility functions (cn for classnames)
```

## Customization Checklist

- [ ] Update `src/app/layout.tsx` — site title, description, favicon
- [ ] Edit `src/components/sections/Hero.tsx` — headline, subtext, CTA
- [ ] Edit `src/components/sections/About.tsx` — your story
- [ ] Edit `src/components/sections/Menu.tsx` — menu items, prices
- [ ] Edit `src/components/sections/Contact.tsx` — address, phone, email, hours
- [ ] Edit `src/components/layout/Footer.tsx` — your name, social links
- [ ] Replace images in `public/` or update Unsplash URLs
- [ ] Update colors in `tailwind.config.ts` (primary brand color)

## Learning Targets (Week 1)

1. **Component Composition** — Read `Navbar.tsx` → see how it uses `Button`, `Link`, `Container`
2. **Props & TypeScript** — Each component defines its `Props` interface
3. **Tailwind Patterns** — `cn()` utility merges classes conditionally
4. **App Router** — `layout.tsx` wraps all pages, `page.tsx` is the homepage

## Next Steps

- **Week 2**: Build Service Business template (reuse components, new sections)
- **Week 3**: Build Consultant template
- **Week 4**: Polish all 3 → start outreach