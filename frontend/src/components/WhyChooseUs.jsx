import "../styles/why-choose-us.css"

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: "🔒",
      title: "Discreet Shipping",
      description: "Plain packaging with no branding. Your privacy is our priority.",
    },
    {
      id: 2,
      icon: "✨",
      title: "Premium Quality",
      description: "Medical-grade silicone and luxury materials in every product.",
    },
    {
      id: 3,
      icon: "❤️",
      title: "Safe Materials",
      description: "Hypoallergenic, body-safe, and thoroughly tested products.",
    },
    {
      id: 4,
      icon: "🎁",
      title: "Luxury Packaging",
      description: "Premium unboxing experience with elegant presentation.",
    },
  ]

  return (
    <section className="why-choose-us-section">
      <div className="why-us-header">
        <h2 className="section-title">Why Choose Luxe Wellness</h2>
        <p className="section-subtitle">Experience the difference of premium intimate wellness</p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
