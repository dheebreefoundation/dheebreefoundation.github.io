import "./FocusAreas.css";

function FocusAreas() {
  const areas = [
    {
      title: "Education",
      desc: "Strengthening learning ecosystems through schools, libraries and community participation.",
    },
    {
      title: "Skilling & Livelihood",
      desc: "Promoting employability, entrepreneurship and sustainable livelihood opportunities.",
    },
    {
      title: "Community Infrastructure",
      desc: "Supporting local institutions and infrastructure for inclusive development.",
    },
    {
      title: "Governance & Research",
      desc: "Evidence-based planning, policy engagement and institutional strengthening.",
    },
  ];

  return (
    <section className="focus">
      <div className="focus-container">
        <h2>Focus Areas</h2>

        <div className="focus-grid">
          {areas.map((item, index) => (
            <div className="focus-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;
