import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/GPDP.css";
import "../styles/ProjectGallery.css";
import gpdpImg from "../assets/GPDP.png";

function GPDP() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="gpdp-page">
      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <section className="gpdp-hero">
        <span className="gpdp-badge">Project Lead</span>
        <h1 className="gpdp-title">GPDP Haryana Portal</h1>
        <p className="gpdp-subtitle">
          A full-scale government platform developed for managing Gram Sabha workflows, reporting, dashboards and village planning.
        </p>
      </section>

      {/* Creative Image Gallery Section (Single Image Mode) */}
      <div className="creative-gallery-wrapper">
        <div className="featured-image-container" style={{ marginBottom: "0" }}>
          <div className="image-frame">
            <img
              src={gpdpImg}
              alt="GPDP Portal Dashboard"
              className={`featured-image ${imageLoaded ? 'loaded' : ''}`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      </div>

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
          <p style={{ marginBottom: "1rem", lineHeight: "1.8", color: "#f1f5f9" }}>
            GPDP Haryana Portal is a digital governance platform developed for the Department of Panchayat, Haryana. The application digitizes the complete Gram Panchayat Development Planning process by enabling meeting scheduling, agenda management, MOM generation, committee management, welfare scheme monitoring, document uploads and role-based governance workflows.
            <br/><br/>
            As Project Lead, I was involved in requirement understanding, planning, frontend implementation, dashboard development, workflow management and coordination across multiple modules to ensure successful project delivery.
          </p>
          <div style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
            <a href="https://dop-gpdp.austere.biz/" target="_blank" rel="noopener noreferrer" className="cta-button">
              🚀 View Live Project
            </a>
          </div>

          <h3 className="section-subtitle" style={{ marginTop: "3rem" }}>Major Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Meeting Scheduling System</h4>
                <p>Digital calendaring and scheduling of Gram Sabha meetings.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Minutes of Meeting (MOM)</h4>
                <p>Automated drafting and tracking of official meeting minutes.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Digital PDF Generation</h4>
                <p>Generation of official reports and documents with e-signatures.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Role Based Access Control</h4>
                <p>Secure multi-tiered access for different government officials and public members.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Welfare Scheme Monitoring</h4>
                <p>Tracking execution and disbursement of village welfare schemes.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Dashboard Analytics</h4>
                <p>Interactive data visualizations and reporting dashboards.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Geographic Visualization</h4>
                <p>Leaflet maps integration for village-level data mapping.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Document Uploads</h4>
                <p>Secure AWS S3 integration for storing and managing digital records.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section">
          <h2>Tech Stack</h2>
          <div className="tech-stack-enhanced">
            <div className="tech-item frontend">
              <h4>Frontend</h4>
              <span>React.js</span>
              <span>React Router DOM</span>
              <span>Material UI</span>
              <span>Ant Design</span>
              <span>Bootstrap</span>
            </div>
            <div className="tech-item backend">
              <h4>Tools & Libraries</h4>
              <span>Axios</span>
              <span>Highcharts</span>
              <span>Leaflet Maps</span>
              <span>jsPDF</span>
              <span>Excel Export</span>
            </div>
            <div className="tech-item database">
              <h4>Infrastructure</h4>
              <span>AWS S3</span>
              <span>JWT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GPDP;