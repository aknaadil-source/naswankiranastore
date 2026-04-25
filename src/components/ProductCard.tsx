import type { Product } from '@/data/products'
import { useCart } from '@/store/cart'
import { ShoppingCart, Check } from 'lucide-react'
import { useState } from 'react'

export function ProductCard({ product }: { product: Product }) {
  const { dispatch, state } = useCart()
  const [added, setAdded] = useState(false)
  const inCart = state.items.find(i => i.id === product.id)

  const handleAdd = () => {
    dispatch({ type: 'ADD_ITEM', product })
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <div className="product-card">
      <div className="product-card__img-wrap">
        <img src={product.image} alt={product.name} className="product-card__img" loading="lazy" />
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
        {inCart && (
          <span className="product-card__in-cart">In basket ×{inCart.quantity}</span>
        )}
      </div>
      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.shortDescription}</p>
        <div className="product-card__footer">
          <div>
            <span className="product-card__price">
              ${(product.price / 100).toFixed(2)}
            </span>
            <span className="product-card__unit"> / {product.unit}</span>
          </div>
          <button
            className={`product-card__add-btn ${added ? 'product-card__add-btn--added' : ''}`}
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? <Check size={16} /> : <ShoppingCart size={16} />}
            {added ? 'Added!' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  )
}
