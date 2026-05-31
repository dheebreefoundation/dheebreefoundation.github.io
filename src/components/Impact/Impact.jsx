import "./Impact.css";

function Impact() {
  const stats = [
    {
      number: "100+",
      title: "Villages Reached",
    },
    {
      number: "5000+",
      title: "Beneficiaries",
    },
    {
      number: "50+",
      title: "Programs Conducted",
    },
    {
      number: "20+",
      title: "Partner Institutions",
    },
  ];

  return (
    <section className="impact">
      <div className="impact-container">
        <h2>Our Impact</h2>

        <div className="impact-grid">
          {stats.map((item, index) => (
            <div className="impact-card" key={index}>
              <h3>{item.number}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
