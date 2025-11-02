import "../styles/landing.css"

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing-hero">
        <div className="hero-content">
          <h1 className="hero-title">Indulge in Intimate Luxury</h1>
          <p className="hero-subtitle">Explore premium wellness toys designed for pleasure and confidence.</p>
          <button className="cta-button">Shop Now</button>
        </div>

        <div className="hero-image-container">
          <div className="gradient-blob"></div>
          <svg className="abstract-shape" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="silk-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#e8b4a8", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#8b4557", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              d="M 50,50 Q 100,30 150,50 Q 170,80 150,150 Q 100,170 50,150 Q 30,80 50,50 Z"
              fill="url(#silk-gradient)"
              opacity="0.9"
            />
            <path
              d="M 70,70 Q 100,60 130,80 Q 140,100 130,130 Q 100,140 70,120 Q 60,100 70,70 Z"
              fill="#d4a574"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Landing
