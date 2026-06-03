import { Link } from "react-router-dom";
import "../styles/GPDP.css";

function Panchayat() {
  return (
    <div className="gpdp-page">

      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <section className="gpdp-hero">

        <span className="gpdp-badge">
          Frontend Developer
        </span>

        <h1 className="gpdp-title">
          Haryana Panchayat Portal
        </h1>

        <p className="gpdp-subtitle">
          Government platform focused on panchayat
          administration, dashboards and citizen
          information management.
        </p>

      </section>

      <div className="gpdp-content">

        <div className="info-grid">

          <div className="info-card">
            <h3>Role</h3>
            <p>Frontend Developer</p>
          </div>

          <div className="info-card">
            <h3>Status</h3>
            <p>Production</p>
          </div>

          <div className="info-card">
            <h3>Type</h3>
            <p>Government Portal</p>
          </div>

        </div>

        <div className="project-section">

          <h2>Project Overview</h2>

          <p>
            Description will be updated.
          </p>

        </div>

        <div className="project-section">

          <h2>Tech Stack</h2>

          <div className="tech-stack">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Dashboard</span>
            <span>REST APIs</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Panchayat;