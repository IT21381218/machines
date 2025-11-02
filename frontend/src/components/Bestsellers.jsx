"use client"

import { useState } from "react"
import "../styles/bestsellers.css"

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null)

  const products = [
    {
      id: 1,
      name: "Silk Harmony",
      price: "$89",
      rating: 4.9,
      reviews: 324,
      image: "⚪",
      description: "Ultra-soft silicone with 8 vibration modes",
    },
    {
      id: 2,
      name: "Velvet Bliss",
      price: "$129",
      rating: 4.95,
      reviews: 412,
      image: "🔴",
      description: "Premium ergonomic design with whisper-quiet motor",
    },
    {
      id: 3,
      name: "Rose Luxury",
      price: "$159",
      rating: 5.0,
      reviews: 567,
      image: "🌹",
      description: "Dual motor technology with app connectivity",
    },
    {
      id: 4,
      name: "Midnight Desire",
      price: "$119",
      rating: 4.88,
      reviews: 289,
      image: "🖤",
      description: "Luxury collection with premium materials",
    },
  ]

  return (
    <section className="bestsellers-section">
      <div className="bestsellers-header">
        <h2 className="section-title">Our Bestsellers</h2>
        <p className="section-subtitle">Handpicked luxury products trusted by thousands</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product-card ${hoveredId === product.id ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="product-image-container">
              <div className="product-image">{product.image}</div>
              <div className="product-overlay">
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>

            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>

              <div className="product-rating">
                <span className="stars">{"⭐".repeat(Math.floor(product.rating))}</span>
                <span className="rating-text">({product.reviews})</span>
              </div>

              <div className="product-footer">
                <span className="price">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Bestsellers
