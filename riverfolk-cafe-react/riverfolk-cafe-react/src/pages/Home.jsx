function Home() {
  return (
    <main>
      <h2>Featured Products</h2>

      <div className="product">
        Kitty Latte
        <div className="product">
          <img src="/Latte.jpeg" alt="Latte" className="product-img" />
          <p>₱195</p>
        </div>
      </div>

      <div className="product">
        Matcha Latte
        <div className="product">
          <img src="/matcha.jpeg" alt="Matcha" className="product-img" />
          <p>₱160</p>
        </div>
      </div>

      <div className="product">
        StrawBB & Match
        <div className="product">
          <img src="/strawberry.jpeg" alt="Strawberry" className="product-img" />
          <p>₱180</p>
        </div>
      </div>
    </main>
  )
}

export default Home
