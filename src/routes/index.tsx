import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import products from '@/data/products'
import { ProductCard } from '@/components/ProductCard'
import { CartDrawer } from '@/components/CartDrawer'
import { useCart } from '@/store/cart'
import { ShoppingCart, Search, Leaf } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: GroceryShop,
})

const ALL = 'All'

function GroceryShop() {
  const { totalItems, dispatch } = useCart()
  const [activeCategory, setActiveCategory] = useState(ALL)
  const [query, setQuery] = useState('')

  const categories = [ALL, ...Array.from(new Set(products.map(p => p.category)))]

  const filtered = products.filter(p => {
    const matchCat = activeCategory === ALL || p.category === activeCategory
    const matchQ = p.name.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  return (
    <div className="shop">
      {/* Header */}
      <header className="shop-header">
        <div className="shop-header__inner">
          <div className="shop-logo">
            <Leaf size={24} />
            <span className="shop-logo__text">Uniq Items</span>
          </div>

          <div className="shop-search">
            <Search size={16} className="shop-search__icon" />
            <input
              className="shop-search__input"
              placeholder="Search groceries…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>

          <button
            className="shop-cart-btn"
            onClick={() => dispatch({ type: 'OPEN_CART' })}
            aria-label="Open cart"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="shop-cart-btn__badge">{totalItems}</span>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="shop-hero">
        <div className="shop-hero__inner">
          <p className="shop-hero__eyebrow">Farm fresh · Delivered daily</p>
          <h1 className="shop-hero__title">
            Good food,<br />
            <em>straight from the source.</em>
          </h1>
          <p className="shop-hero__sub">
            Add items to your basket, then send your order directly via WhatsApp.
          </p>
        </div>
        <div className="shop-hero__blob shop-hero__blob--1" />
        <div className="shop-hero__blob shop-hero__blob--2" />
      </section>

      {/* Categories */}
      <div className="shop-categories">
        <div className="shop-categories__inner">
          {categories.map(cat => (
            <button
              key={cat}
              className={`shop-cat-btn ${activeCategory === cat ? 'shop-cat-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <main className="shop-grid-section">
        <div className="shop-grid-header">
          <p className="shop-grid-count">
            {filtered.length} item{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== ALL ? ` in ${activeCategory}` : ''}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="shop-empty">
            <p>No products found for "<strong>{query}</strong>"</p>
          </div>
        ) : (
          <div className="shop-grid">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <footer className="shop-footer">
        <p>© 2026 FreshBasket · Locally sourced, lovingly delivered</p>
      </footer>

      <CartDrawer />
    </div>
  )
}
