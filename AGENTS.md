# AGENTS.md

This document is the canonical reference for AI agents working on this codebase. Read it before making any changes.

## Project Overview

**FreshBasket** is a grocery e-commerce web app. The core user flow is:
1. Browse / filter / search products on the home page
2. Add items to a cart (slide-in drawer)
3. Send the cart as a WhatsApp message to place an order

There is no active payment gateway in the primary UI (Stripe code is retained but unused by default).

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR-capable React meta-framework) |
| Routing | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS design system |
| Icons | Lucide React |
| Fonts | Fraunces (display serif) + DM Sans (body) via Google Fonts |
| State | React Context + useReducer (no external store needed) |
| Deployment | Netlify |

## Directory Structure

```
src/
├── components/
│   ├── BuyButton.tsx        # Legacy Stripe buy button (kept but unused in main flow)
│   ├── CartDrawer.tsx       # Slide-in cart drawer with WhatsApp send button
│   └── ProductCard.tsx      # Product card with "Add to Basket" button
├── data/
│   └── products.ts          # Static product catalog — edit here to change products
├── lib/
│   └── stripe.ts            # Stripe server functions (retained, inactive by default)
├── routes/
│   ├── __root.tsx           # Root layout: CartProvider wrapper, Google Fonts link tags
│   ├── index.tsx            # Main shop page (header, hero, category tabs, product grid)
│   ├── products/
│   │   └── $productId.tsx   # Product detail page (uses useCart hook)
│   └── checkout/
│       ├── success.tsx      # Stripe success redirect page
│       └── cancel.tsx       # Stripe cancel redirect page
├── store/
│   └── cart.tsx             # CartProvider + useCart hook (React Context + useReducer)
├── router.tsx               # TanStack Router instance
└── styles.css               # Complete design system: tokens, layout, all component CSS
```

## Key Architectural Decisions

### Cart State (React Context, not Zustand)
`src/store/cart.tsx` exports `CartProvider` and `useCart`. The provider is mounted in `__root.tsx` so all routes share the same cart. No external library needed.

### Styling (CSS custom properties over Tailwind utilities)
All component styles are written as plain CSS classes in `styles.css` using a design token system (`--green-*`, `--terra`, etc.). Tailwind is imported but used minimally. This approach keeps tokens and component styles co-located.

### Product Data
`src/data/products.ts` is the single source of truth. The `Product` interface includes:
- `price` — in **cents** (e.g. 149 = $1.49). All display code divides by 100.
- `unit` — display string (e.g. "per kg", "per bunch")
- `category` — used for filter tabs; derived automatically from data

### WhatsApp Integration
No API keys or backend needed. The cart drawer formats a plain-text message and opens `https://wa.me/?text=...`. The user's WhatsApp app handles sending.

### Stripe (Retained, Inactive)
`src/lib/stripe.ts` and `BuyButton.tsx` are kept for optional future use. Set `STRIPE_SECRET_KEY` and render `<BuyButton productId={id} />` to activate.

## Development Commands

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build
```

## Coding Conventions

- **TypeScript strict mode** — all types explicit, no `any`
- **Path alias** — use `@/` for `src/` imports
- **Components** — PascalCase files, function components only
- **CSS** — BEM-style class names (`.cart-drawer__header`) in `styles.css`
- **Icons** — Lucide React only (already installed)

## Adding Products

Edit `src/data/products.ts`. Copy an existing product object and fill in all fields. Category filter tabs are generated automatically from the data.

## Design System

All design tokens are CSS custom properties at the top of `styles.css` under `:root`. The color palette uses forest green as the dominant hue with terracotta accents. Fonts are loaded from Google Fonts in `__root.tsx`.
