import "../styles/hero.css"

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-gradient"></div>

      <div className="hero-content-wrapper">
        <div className="hero-text">
          <h1 className="hero-heading">Indulge in Intimate Luxury</h1>
          <p className="hero-description">Explore premium wellness toys designed for pleasure and confidence.</p>
          <button className="shop-button">
            <span>Shop Now</span>
            <span className="glow-accent">✨</span>
          </button>
        </div>

        <div className="hero-visual">
          <div className="abstract-visual">
            <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" className="silk-curves">
              <defs>
                <radialGradient id="luxury-gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: "#f5e6dd", stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: "#d4a574", stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: "#8b4557", stopOpacity: 0.6 }} />
                </radialGradient>
              </defs>
              {/* Abstract sensual curves */}
              <path
                d="M 50,100 Q 100,80 150,100 Q 180,120 200,170 Q 210,220 180,280 Q 150,310 100,320 Q 50,310 30,280 Q 10,220 20,170 Q 40,120 50,100 Z"
                fill="url(#luxury-gradient)"
                opacity="0.9"
              />
              <ellipse cx="150" cy="200" rx="80" ry="120" fill="none" stroke="#e8b4a8" strokeWidth="2" opacity="0.5" />
              <path
                d="M 100,150 Q 120,140 140,150"
                stroke="#c99d8a"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
