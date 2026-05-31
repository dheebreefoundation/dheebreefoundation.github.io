import "./Programs.css";

function Programs() {
  const programs = [
    {
      title: "Education Programs",
      desc: "Strengthening learning ecosystems through schools, libraries and community participation.",
    },
    {
      title: "Skill Development",
      desc: "Building employability, entrepreneurship and livelihood opportunities.",
    },
    {
      title: "Community Infrastructure",
      desc: "Supporting infrastructure and local institutions for sustainable growth.",
    },
    {
      title: "Governance & Research",
      desc: "Evidence-based planning, policy engagement and institutional strengthening.",
    },
  ];

  return (
    <section className="programs">
      <div className="programs-container">
        <h2>Programs</h2>

        <div className="programs-grid">
          {programs.map((item, index) => (
            <div className="program-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
