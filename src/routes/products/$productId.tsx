import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'
import { useCart } from '@/store/cart'
import { ShoppingCart } from 'lucide-react'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find(
      (product) => product.id === +params.productId,
    )
    if (!product) {
      throw new Error('Product not found')
    }
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()
  const { dispatch } = useCart()

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px', fontFamily: 'var(--font-body)' }}>
      <Link to="/" style={{ display: 'inline-block', marginBottom: 24, color: 'var(--green-700)', fontWeight: 500 }}>
        &larr; Back to shop
      </Link>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 18 }}
        />
        <div>
          <p style={{ fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--green-500)', marginBottom: 8 }}>
            {product.category}
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: 12 }}>
            {product.name}
          </h1>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 24 }}>{product.description}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--green-900)' }}>
                ${(product.price / 100).toFixed(2)}
              </span>
              <span style={{ color: 'var(--text-soft)', fontSize: '.85rem', marginLeft: 6 }}>/ {product.unit}</span>
            </div>
            <button
              className="product-card__add-btn"
              onClick={() => dispatch({ type: 'ADD_ITEM', product })}
            >
              <ShoppingCart size={18} />
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
