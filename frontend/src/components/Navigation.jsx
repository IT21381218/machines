"use client"

import { useState } from "react"
import "../styles/navigation.css"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">LUXE</span>
          <span className="logo-subtext">Wellness</span>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a onClick={() => scrollToSection("hero")}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("bestsellers")}>Shop</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("why-us")}>About</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("trust")}>Trust</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="search-btn">🔍</button>
          <button className="cart-btn">🛍️ 0</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
