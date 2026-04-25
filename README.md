# FreshBasket — Online Grocery Shop

A modern, responsive grocery shopping web application built with TanStack Start and deployed on Netlify. Customers can browse products by category, search the catalog, add items to a basket, and send their complete order directly to a phone number via WhatsApp — no payment gateway required.

## Features

- **Browse by Category** — Fruits, Vegetables, Dairy & Eggs, Bakery, Pantry
- **Live Search** — Filter products by name in real time
- **Add to Cart** — Slide-in basket drawer with quantity controls
- **WhatsApp Order** — One-tap button formats the cart as a WhatsApp message and opens a pre-filled chat

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR-capable React meta-framework) |
| Routing | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS design system |
| Icons | Lucide React |
| Fonts | Fraunces (display serif) + DM Sans (body) |
| State | React Context + useReducer (no external store needed) |
| Deployment | Netlify |

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server (runs on port 3000, Netlify CLI emulation on 8888)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

No environment variables are required for the core grocery/WhatsApp functionality.

If you want to re-enable Stripe checkout (available on product detail pages):

```
STRIPE_SECRET_KEY=sk_...
SITE_URL=https://your-site.netlify.app
```
