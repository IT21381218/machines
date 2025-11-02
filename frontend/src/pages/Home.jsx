import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Bestsellers from "../components/Bestsellers"
import WhyChooseUs from "../components/WhyChooseUs"
import Trust from "../components/Trust"
import Footer from "../components/Footer"
import "../styles/home.css"

const Home = () => {
  return (
    <div className="home-container">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="bestsellers">
        <Bestsellers />
      </section>
      <section id="why-us">
        <WhyChooseUs />
      </section>
      <section id="trust">
        <Trust />
      </section>
      <Footer />
    </div>
  )
}

export default Home
