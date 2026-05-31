import "./Mission.css";

function Mission() {
  return (
    <section className="mission">
      <h2>Mission & Vision</h2>

      <div className="mission-grid">
        <div className="mission-card">
          <h3>Mission</h3>

          <p>
            To strengthen regional ecosystems by collecting, adapting and
            scaling evidence-based development models that promote equitable
            growth and resilient communities.
          </p>
        </div>

        <div className="mission-card">
          <h3>Vision</h3>

          <p>
            To create a future where globally validated development practices
            are seamlessly integrated with education, skilling, infrastructure,
            governance and institutional capacity building.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
