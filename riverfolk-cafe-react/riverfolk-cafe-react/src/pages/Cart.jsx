import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Kitty Latte',
      price: 195.00,
      quantity: 1,
      image: '/Latte.jpeg'
    },
    {
      id: 2,
      name: 'Matcha Latte',
      price: 160.00,
      quantity: 2,
      image: '/matcha.jpeg'
    }
  ])

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.12
  const total = subtotal + tax

  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <main>
      <div className="page-header">
        <h2>Shopping Cart</h2>
        <button type="button" id="clear-cart-btn" className="btn-secondary" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div id="empty-cart-message" className="empty-cart-message">
          <p>Your cart is empty.</p>
          <p><Link to="/products" className="btn">Continue Shopping</Link></p>
        </div>
      ) : (
        <>
          <div id="cart-items" className="cart-items-container">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="item-price">₱{item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-quantity">
                  <button
                    className="qty-btn"
                    aria-label="Decrease quantity"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    aria-label="Increase quantity"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-subtotal">
                  <p>₱{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  className="remove-item-btn"
                  title="Remove item"
                  aria-label="Remove item"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary" id="cart-summary">
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₱<span id="cart-subtotal">{subtotal.toFixed(2)}</span></span>
              </div>
              <div className="summary-row">
                <span>Tax (12%):</span>
                <span>₱<span id="cart-tax">{tax.toFixed(2)}</span></span>
              </div>
              <div className="summary-row summary-total">
                <strong>Total:</strong>
                <strong>₱<span id="cart-total">{total.toFixed(2)}</span></strong>
              </div>
            </div>
            <button
              type="button"
              id="checkout-btn"
              className="btn btn-primary"
              onClick={handleCheckout}
            >
              Check Out
            </button>
          </div>
        </>
      )}
    </main>
  )
}

export default Cart
