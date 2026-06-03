import "../styles/Stats.css";

function Stats() {
  const stats = [
    {
      number: "1+",
      title: "Years Experience",
    },
    {
      number: "3+",
      title: "Major Projects",
    },
    {
      number: "10+",
      title: "Technologies",
    },
    {
      number: "100%",
      title: "Responsive Design",
    },
  ];

  return (
    <section className="stats-section">

      <div className="stats-container">

        {stats.map((item, index) => (
          <div key={index} className="stat-card">

            <h2>{item.number}</h2>

            <p>{item.title}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;