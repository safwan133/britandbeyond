# Brit & Beyond Ltd — Landing Page

A mobile-first, accessible landing page for an authentic British souvenir and apparel
retailer, built with React, TypeScript, Tailwind CSS, and lucide-react.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser. Run `npm run build` to produce a production
build in `dist/`.

## Structure

```
src/
├── components/
│   ├── layout/       Navbar, Footer
│   └── ui/           ProductCard
├── pages/             Hero, AboutUs, FeaturedCollection, ContactUs
├── types/             Shared TypeScript interfaces
├── data/              Product dataset (Unsplash placeholder imagery)
├── assets/            hero-background.jpg — replace with your own photography
├── App.tsx
└── main.tsx
```

## Notes

- The hero background at `src/assets/hero-background.jpg` is the flat-lay photo supplied
  with this brief. Swap it for any image at least 1920px wide — the component at
  `src/pages/Hero.tsx` has a `// Replace with user background image` comment marking the
  import.
- Product imagery in `src/data/products.ts` is sourced from Unsplash as thematic
  placeholders. Replace `imageUrl` values with real product photography before launch.
- The contact form in `src/pages/ContactUs.tsx` simulates a network request. Wire
  `handleSubmit` up to a real endpoint (e.g. Formspree, a serverless function, or your own
  API) before going live.
- Colour tokens, fonts, and animation keyframes are defined in `tailwind.config.js`.
