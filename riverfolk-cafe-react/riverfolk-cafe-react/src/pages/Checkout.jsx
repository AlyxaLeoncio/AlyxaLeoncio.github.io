import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Checkout() {
  const navigate = useNavigate()
  const [deliveryOption, setDeliveryOption] = useState('standard')
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  })

  const cartItems = [
    { name: 'Kitty Latte', price: 195.00, quantity: 1 },
    { name: 'Matcha Latte', price: 160.00, quantity: 2 }
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.12
  const deliveryFee = deliveryOption === 'standard' ? 50 : deliveryOption === 'express' ? 100 : 0
  const total = subtotal + tax + deliveryFee

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    navigate('/confirmation')
  }

  return (
    <main>
      <h2>Checkout</h2>

      <div className="checkout-container">
        <div className="checkout-section">
          <h3>Order Summary</h3>
          <div id="checkout-items" className="checkout-items">
            {cartItems.map((item, index) => (
              <div key={index} className="checkout-item">
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Qty: {item.quantity} × ₱{item.price.toFixed(2)}</p>
                </div>
                <div className="item-total">₱{(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>₱<span id="checkout-subtotal">{subtotal.toFixed(2)}</span></span>
            </div>
            <div className="total-row">
              <span>Tax (12%):</span>
              <span>₱<span id="checkout-tax">{tax.toFixed(2)}</span></span>
            </div>
            <div className="total-row">
              <span>Delivery Fee:</span>
              <span>₱<span id="delivery-fee">{deliveryFee.toFixed(2)}</span></span>
            </div>
            <div className="total-row total-final">
              <strong>Total:</strong>
              <strong>₱<span id="checkout-total">{total.toFixed(2)}</span></strong>
            </div>
          </div>
        </div>

        <div className="checkout-section">
          <h3>Delivery Information</h3>
          <form id="delivery-form" onSubmit={handlePlaceOrder}>
            <div className="form-group">
              <label htmlFor="full-name">Full Name *</label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Delivery Address *</label>
              <textarea
                id="address"
                rows="3"
                value={formData.address}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Delivery Notes (Optional)</label>
              <textarea
                id="notes"
                rows="2"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="e.g., Leave at door, Ring doorbell"
              ></textarea>
            </div>
          </form>
        </div>

        <div className="checkout-section">
          <h3>Delivery Options</h3>
          <div className="delivery-options">
            <label className="delivery-option">
              <input
                type="radio"
                name="delivery"
                value="standard"
                checked={deliveryOption === 'standard'}
                onChange={(e) => setDeliveryOption(e.target.value)}
              />
              <div className="option-content">
                <div className="option-info">
                  <strong>Standard Delivery</strong>
                  <p>Delivery in 45-60 minutes</p>
                </div>
                <span className="option-price">₱50.00</span>
              </div>
            </label>

            <label className="delivery-option">
              <input
                type="radio"
                name="delivery"
                value="express"
                checked={deliveryOption === 'express'}
                onChange={(e) => setDeliveryOption(e.target.value)}
              />
              <div className="option-content">
                <div className="option-info">
                  <strong>Express Delivery</strong>
                  <p>Delivery in 20-30 minutes</p>
                </div>
                <span className="option-price">₱100.00</span>
              </div>
            </label>

            <label className="delivery-option">
              <input
                type="radio"
                name="delivery"
                value="pickup"
                checked={deliveryOption === 'pickup'}
                onChange={(e) => setDeliveryOption(e.target.value)}
              />
              <div className="option-content">
                <div className="option-info">
                  <strong>Pickup</strong>
                  <p>Pick up at store in 15-20 minutes</p>
                </div>
                <span className="option-price">Free</span>
              </div>
            </label>
          </div>
        </div>

        <div className="checkout-section">
          <h3>Payment Method</h3>
          <div className="payment-methods">
            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <div className="option-content">
                <div className="option-info">
                  <strong>Cash on Delivery</strong>
                  <p>Pay when your order arrives</p>
                </div>
              </div>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="gcash"
                checked={paymentMethod === 'gcash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <div className="option-content">
                <div className="option-info">
                  <strong>GCash</strong>
                  <p>Pay securely with GCash</p>
                </div>
              </div>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <div className="option-content">
                <div className="option-info">
                  <strong>Credit/Debit Card</strong>
                  <p>Visa, Mastercard, JCB</p>
                </div>
              </div>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={paymentMethod === 'bank'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <div className="option-content">
                <div className="option-info">
                  <strong>Bank Transfer</strong>
                  <p>Direct bank transfer</p>
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="checkout-actions">
          <Link to="/cart" className="btn btn-secondary">Back to Cart</Link>
          <button onClick={handlePlaceOrder} className="btn btn-secondary">Place Order</button>
        </div>
      </div>
    </main>
  )
}

export default Checkout
