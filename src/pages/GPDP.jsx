import { Link } from "react-router-dom";
import "../styles/GPDP.css";

function GPDP() {
  return (
    <div className="gpdp-page">

      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <section className="gpdp-hero">

        <span className="gpdp-badge">
          Project Lead
        </span>

        <h1 className="gpdp-title">
          GPDP Haryana Portal
        </h1>

        <p className="gpdp-subtitle">
          A full-scale government platform developed
          for managing Gram Sabha workflows,
          reporting, dashboards and village planning.
        </p>

      </section>

      <div className="gpdp-content">

        <div className="info-grid">

          <div className="info-card">
            <h3>Role</h3>
            <p>Project Lead</p>
          </div>

          <div className="info-card">
            <h3>Duration</h3>
            <p>2025 - Present</p>
          </div>

          <div className="info-card">
            <h3>Team</h3>
            <p>Frontend + Backend + QA</p>
          </div>

        </div>

        <div className="project-section">

          <h2>Project Overview</h2>


          <p>
            GPDP Haryana Portal is a digital governance platform
            developed for the Department of Panchayat, Haryana.
            The application digitizes the complete Gram Panchayat
            Development Planning process by enabling meeting
            scheduling, agenda management, MOM generation,
            committee management, welfare scheme monitoring,
            document uploads and role-based governance workflows.

            As Project Lead, I was involved in requirement
            understanding, planning, frontend implementation,
            dashboard development, workflow management and
            coordination across multiple modules to ensure
            successful project delivery.
          </p>

        </div>

        <div className="project-section">

          <h2>Key Responsibilities</h2>

          <ul className="responsibility-list">

            <li>
              Led development activities and project execution.
            </li>

            <li>
              Designed and implemented React-based user interfaces.
            </li>

            <li>
              Integrated APIs and managed dynamic data workflows.
            </li>

            <li>
              Developed dashboard and reporting modules.
            </li>

            <li>
              Worked on role-based access workflows and user journeys.
            </li>

            <li>
              Collaborated with backend, QA and stakeholders.
            </li>

          </ul>

        </div>

        <div className="project-section">

          <h2>Tech Stack</h2>

          <div className="tech-stack">

            <span>React.js</span>

            <span>React Router DOM</span>

            <span>Material UI</span>

            <span>Ant Design</span>

            <span>Bootstrap</span>

            <span>Axios</span>

            <span>Highcharts</span>

            <span>Leaflet Maps</span>

            <span>AWS S3</span>

            <span>JWT</span>

            <span>jsPDF</span>

            <span>Excel Export</span>

          </div>

        </div>

        <div className="project-section">

          <h2>Major Features</h2>

          <ul className="responsibility-list">

            <li>Meeting Scheduling System</li>

            <li>Minutes of Meeting (MOM) Management</li>

            <li>Digital PDF Generation & Signatures</li>

            <li>Role Based Access Control (RBAC)</li>

            <li>Welfare Scheme Monitoring</li>

            <li>Dashboard Analytics & Reporting</li>

            <li>Maps & Geographic Visualization</li>

            <li>Document & Media Upload Management</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default GPDP;