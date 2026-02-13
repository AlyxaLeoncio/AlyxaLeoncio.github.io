import { Link } from 'react-router-dom'

function Products() {
  const addToCart = (productName, price) => {
    alert(`Added ${productName} to cart!`)
  }

  return (
    <main>
      <h2>Our Menu</h2>

      <div className="product-grid">
        <div className="product">
          <img src="/Latte.jpeg" alt="Latte" width="200" />
          <h3>Kitty Latte</h3>
          <p>₱195</p>
          <button type="button" onClick={() => addToCart('Kitty Latte', 195)}>
            Add to Cart
          </button>
        </div>

        <div className="product">
          <img src="/iced.jpeg" alt="Iced Coffee" width="200" />
          <h3>Iced Coffee</h3>
          <p>₱125</p>
          <button type="button" onClick={() => addToCart('Iced Coffee', 125)}>
            Add to Cart
          </button>
        </div>

        <div className="product">
          <img src="/matcha.jpeg" alt="Matcha" width="200" />
          <h3>Matcha Latte</h3>
          <p>₱160</p>
          <button type="button" onClick={() => addToCart('Matcha Latte', 160)}>
            Add to Cart
          </button>
        </div>

        <div className="product">
          <img src="/strawberry.jpeg" alt="Strawberry" width="200" />
          <h3>StrawBB & Match</h3>
          <p>₱180</p>
          <button type="button" onClick={() => addToCart('StrawBB & Match', 180)}>
            Add to Cart
          </button>
        </div>
      </div>

      <p className="cart-link">
        <Link to="/cart">Go to Cart</Link>
      </p>
    </main>
  )
}

export default Products
