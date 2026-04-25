import { useCart } from '@/store/cart'
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react'

export function CartDrawer() {
  const { state, dispatch, totalItems, totalPrice } = useCart()

  const handleWhatsApp = () => {
    if (state.items.length === 0) return

    const lines = state.items.map(
      item =>
        `• ${item.name} × ${item.quantity} (${item.unit}) — $${((item.price * item.quantity) / 100).toFixed(2)}`
    )
    const total = `$${(totalPrice / 100).toFixed(2)}`
    const message = [
      '🛒 *My Grocery Order*',
      '',
      ...lines,
      '',
      `*Total: ${total}*`,
      '',
      'Please confirm availability and delivery time. Thank you!',
    ].join('\n')

    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop ${state.isOpen ? 'cart-backdrop--open' : ''}`}
        onClick={() => dispatch({ type: 'CLOSE_CART' })}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${state.isOpen ? 'cart-drawer--open' : ''}`}>
        {/* Header */}
        <div className="cart-drawer__header">
          <div className="cart-drawer__title">
            <ShoppingBag size={20} />
            <span>Your Basket</span>
            {totalItems > 0 && (
              <span className="cart-drawer__count">{totalItems}</span>
            )}
          </div>
          <button
            className="cart-drawer__close"
            onClick={() => dispatch({ type: 'CLOSE_CART' })}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="cart-drawer__body">
          {state.items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty__icon">
                <ShoppingBag size={48} strokeWidth={1} />
              </div>
              <p className="cart-empty__title">Your basket is empty</p>
              <p className="cart-empty__subtitle">
                Add some fresh groceries to get started
              </p>
            </div>
          ) : (
            <ul className="cart-items">
              {state.items.map(item => (
                <li key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item__img"
                  />
                  <div className="cart-item__info">
                    <p className="cart-item__name">{item.name}</p>
                    <p className="cart-item__unit">{item.unit}</p>
                    <p className="cart-item__price">
                      ${((item.price * item.quantity) / 100).toFixed(2)}
                    </p>
                  </div>
                  <div className="cart-item__controls">
                    <button
                      className="cart-item__qty-btn"
                      onClick={() =>
                        dispatch({
                          type: 'UPDATE_QTY',
                          id: item.id,
                          quantity: item.quantity - 1,
                        })
                      }
                      aria-label="Decrease"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="cart-item__qty">{item.quantity}</span>
                    <button
                      className="cart-item__qty-btn"
                      onClick={() =>
                        dispatch({
                          type: 'UPDATE_QTY',
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      }
                      aria-label="Increase"
                    >
                      <Plus size={12} />
                    </button>
                    <button
                      className="cart-item__remove"
                      onClick={() =>
                        dispatch({ type: 'REMOVE_ITEM', id: item.id })
                      }
                      aria-label="Remove"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-total">
              <span>Total</span>
              <span className="cart-total__amount">
                ${(totalPrice / 100).toFixed(2)}
              </span>
            </div>
            <button className="cart-whatsapp-btn" onClick={handleWhatsApp}>
              <MessageCircle size={20} />
              Send Order via WhatsApp
            </button>
            <button
              className="cart-clear-btn"
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
            >
              Clear basket
            </button>
          </div>
        )}
      </div>
    </>
  )
}
