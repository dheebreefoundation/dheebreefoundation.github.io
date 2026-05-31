import "./Hero.css";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="hero-banner">
      <img src={heroImage} alt="Dheebree Foundation" />

      <div className="hero-overlay">
        <span className="hero-tag">Rural Transformation Initiative</span>

        <h1>
          Strengthening Regional Ecosystems Through Evidence-Based Development
        </h1>

        <p>
          Dheebree Foundation works with communities, institutions and
          stakeholders to strengthen education, skilling, infrastructure,
          governance and sustainable development ecosystems through validated
          and scalable development models.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Our Mission</button>

          <button className="btn-secondary">View Reports</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
