import "./Hero.css";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <span className="hero-tag">Rural Transformation Initiative</span>

          <h1>
            Transforming Rural Communities Through Education, Innovation &
            Collective Action
          </h1>

          <p>
            Dheebree Foundation works with communities, institutions and
            stakeholders to strengthen education, skilling, governance and
            sustainable development ecosystems.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Learn More</button>

            <button className="btn-secondary">View Gallery</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="Community Meeting" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
