import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Confirmation() {
  const [orderNumber, setOrderNumber] = useState('')
  const [orderDate, setOrderDate] = useState('')

  useEffect(() => {
    // Generate order number and set date
    const randomOrderNum = Math.floor(100000 + Math.random() * 900000)
    setOrderNumber(randomOrderNum.toString())
    
    const now = new Date()
    const formatted = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
    setOrderDate(formatted)
  }, [])

  const orderItems = [
    { name: 'Kitty Latte', price: 195.00, quantity: 1 },
    { name: 'Matcha Latte', price: 160.00, quantity: 2 }
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.12
  const deliveryFee = 50.00
  const total = subtotal + tax + deliveryFee

  return (
    <main>
      <div className="confirmation-container">
        <div className="confirmation-header">
          <div className="success-icon">✓</div>
          <h2>Order Confirmed!</h2>
          <p>Thank you for your order. Your order has been received and is being prepared.</p>
        </div>

        <div className="receipt">
          <div className="receipt-header">
            <h3>E-Receipt</h3>
            <p className="order-number">Order #<span id="order-number">{orderNumber}</span></p>
            <p className="order-date" id="order-date">{orderDate}</p>
          </div>

          <div className="receipt-section">
            <h4>Customer Information</h4>
            <div className="info-row">
              <span className="info-label">Name:</span>
              <span id="customer-name">John Doe</span>
            </div>
            <div className="info-row">
              <span className="info-label">Phone:</span>
              <span id="customer-phone">+63 912 345 6789</span>
            </div>
            <div className="info-row">
              <span className="info-label">Email:</span>
              <span id="customer-email">johndoe@example.com</span>
            </div>
            <div className="info-row">
              <span className="info-label">Address:</span>
              <span id="customer-address">123 Main Street, Quezon City</span>
            </div>
          </div>

          <div className="receipt-section">
            <h4>Order Items</h4>
            <div id="receipt-items">
              {orderItems.map((item, index) => (
                <div key={index} className="receipt-item">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-qty">× {item.quantity}</span>
                  </div>
                  <span className="item-price">₱{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="receipt-section">
            <h4>Delivery & Payment</h4>
            <div className="info-row">
              <span className="info-label">Delivery Option:</span>
              <span id="delivery-option">Standard Delivery (45-60 mins)</span>
            </div>
            <div className="info-row">
              <span className="info-label">Payment Method:</span>
              <span id="payment-method">Cash on Delivery</span>
            </div>
            <div className="info-row">
              <span className="info-label">Estimated Delivery:</span>
              <span id="estimated-delivery">Within 60 minutes</span>
            </div>
          </div>

          <div className="receipt-section">
            <div className="receipt-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>₱<span id="receipt-subtotal">{subtotal.toFixed(2)}</span></span>
              </div>
              <div className="total-row">
                <span>Tax (12%):</span>
                <span>₱<span id="receipt-tax">{tax.toFixed(2)}</span></span>
              </div>
              <div className="total-row">
                <span>Delivery Fee:</span>
                <span>₱<span id="receipt-delivery">{deliveryFee.toFixed(2)}</span></span>
              </div>
              <div className="total-row total-final">
                <strong>Total Paid:</strong>
                <strong>₱<span id="receipt-total">{total.toFixed(2)}</span></strong>
              </div>
            </div>
          </div>
        </div>

        <div className="confirmation-footer">
          <p>We'll send you updates about your order via email and SMS.</p>
          <p>Questions? Contact us at <strong>riverfolk@gmail.com</strong> or <strong>(02) 1234-5678</strong></p>
          <Link to="/products" className="btn btn-primary">Continue Shopping</Link>
        </div>
      </div>
    </main>
  )
}

export default Confirmation
