import "../styles/trust.css"

const Trust = () => {
  return (
    <section className="trust-section">
      <div className="trust-container">
        <div className="trust-content">
          <h2 className="trust-title">Trusted by Thousands</h2>
          <p className="trust-subtitle">Join our community of confident individuals</p>

          <div className="trust-stats">
            <div className="stat">
              <h3>50K+</h3>
              <p>Satisfied Customers</p>
            </div>
            <div className="stat">
              <h3>4.9★</h3>
              <p>Average Rating</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Discreet Shipping</p>
            </div>
          </div>

          <div className="testimonials">
            <div className="testimonial">
              <p className="testimonial-text">"Premium quality and discreet shipping. Highly recommend!"</p>
              <p className="testimonial-author">— M. T.</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">"The attention to detail and luxury feel is unmatched."</p>
              <p className="testimonial-author">— J. L.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
