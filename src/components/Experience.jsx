import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        <h2 className="experience-title">My Journey</h2>

        <p className="experience-subtitle">
          Building impactful government and enterprise applications through
          frontend development, project leadership, API integrations, and
          cross-functional collaboration.
        </p>

        <div className="experience-card">

          <div className="company-header">
            <h3>Software Developer</h3>

            <h4>Austere Systems Limited</h4>

            <span>April 2025 - Present</span>
          </div>

          <p className="company-description">
            Contributing to enterprise and government digital solutions with
            expertise in React.js, API integrations, dashboard development,
            reporting systems, database interactions, and project delivery.
          </p>

          {/* GPDP */}
          <div className="project-card">
            <h5>GPDP Haryana Portal</h5>

            <span className="project-role">
              Project Lead
            </span>

            <p>
              Led project execution and coordinated frontend and backend teams.
              Primarily responsible for frontend development, dashboards,
              reports, and user workflows while actively supporting backend API
              development, MySQL integrations, and technical problem-solving to
              ensure successful and timely project delivery.
            </p>

            <div className="tech-stack">
              <span>React.js</span>
              <span>MySQL</span>
              <span>Project Leadership</span>
              <span>API Support</span>
              <span>Dashboards</span>
              <span>Reports</span>
            </div>
          </div>

          {/* EdCIL */}
          <div className="project-card">
            <h5>EdCIL Recruiter Management Portal</h5>

            <span className="project-role">
              Full Stack Contributor
            </span>

            <p>
              Led frontend development using React.js and collaborated closely
              with Python backend teams. Supported API development,
              integrations, testing, and deployment while helping resolve
              technical challenges across the application lifecycle.
            </p>

            <div className="tech-stack">
              <span>React.js</span>
              <span>Python</span>
              <span>REST APIs</span>
              <span>PostgreSQL</span>
              <span>Frontend Development</span>
              <span>Enterprise Application</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;