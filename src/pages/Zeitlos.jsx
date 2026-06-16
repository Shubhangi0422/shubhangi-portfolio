import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/GPDP.css";
import "../styles/ProjectGallery.css";
import image1 from "../assets/ZEITLOS1.png";
import image2 from "../assets/ZEITLOS2.png";
import image3 from "../assets/ZEITLOS3.png";

function Zeitlos() {
  const [activeImage, setActiveImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({
    img1: false,
    img2: false,
    img3: false,
  });

  const images = [
    { src: image1, alt: "Zeitlos Home", title: "Storefront" },
    { src: image2, alt: "Zeitlos Product", title: "Product Detail" },
    { src: image3, alt: "Zeitlos Checkout", title: "Checkout Flow" },
  ];

  return (
    <div className="gpdp-page">
      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <section className="gpdp-hero">
        <span className="gpdp-badge">Full Stack Developer</span>
        <h1 className="gpdp-title">ZEITLOS | Premium E-Commerce</h1>
        <p className="gpdp-subtitle">
          A full-stack luxury fashion storefront with a secure, high-performance architecture.
        </p>
      </section>

      {/* Creative Image Gallery Section */}
      <div className="creative-gallery-wrapper">
        <div className="featured-image-container">
          <div className="image-frame">
            <img
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              className={`featured-image ${imageLoaded[`img${activeImage + 1}`] ? 'loaded' : ''}`}
              onLoad={() => setImageLoaded(prev => ({ ...prev, [`img${activeImage + 1}`]: true }))}
            />
          </div>
          <div className="image-title">
            <h3>{images[activeImage].title}</h3>
          </div>
        </div>

        <div className="thumbnail-gallery">
          {images.map((img, index) => (
            <div
              key={index}
              className={`thumbnail-item ${activeImage === index ? 'active' : ''}`}
              onClick={() => setActiveImage(index)}
            >
              <img src={img.src} alt={img.alt} />
              <div className="thumbnail-overlay">
                <span className="number">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${activeImage === index ? 'active' : ''}`}
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>
      </div>

      <div className="gpdp-content">
        <div className="info-grid">
          <div className="info-card">
            <h3>Role</h3>
            <p>Full Stack Developer</p>
          </div>
          <div className="info-card">
            <h3>Status</h3>
            <p>Production</p>
          </div>
          <div className="info-card">
            <h3>Type</h3>
            <p>E-Commerce Platform</p>
          </div>
        </div>

        <div className="project-section">
          <h2>Project Overview</h2>
          <p style={{ marginBottom: "1rem", lineHeight: "1.8", color: "#f1f5f9" }}>
            ZEITLOS is a custom-built, full-stack e-commerce platform designed for a premium streetwear brand. Built with a focus on delivering a high-end user experience, the application features a modern, glassmorphism-inspired UI with smooth animations and dynamic interactions. The backend is engineered for security and scalability, featuring a robust JWT-based authentication system, rate-limited API endpoints, and a secure email-based password recovery flow. The platform includes a dedicated admin dashboard for seamless management of product listings and user data.
          </p>
          <div style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
            <a href="https://zeitlos-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="cta-button">
              🚀 View Live Project
            </a>
          </div>

          <h3 className="section-subtitle" style={{ marginTop: "3rem" }}>Key Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Secure Authentication System</h4>
                <p>Implemented JWT-based login/registration with secure token handling and route protection.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Advanced Password Recovery</h4>
                <p>Engineered a secure, 3-step password reset flow using 6-digit email OTPs sent via Resend. Includes bcrypt hashing, 60-second cooldowns, and backend rate limiting.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Premium User Interface</h4>
                <p>Designed a highly responsive, luxury aesthetic using Tailwind CSS and Framer Motion, featuring custom animations and gold accents.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Admin Dashboard</h4>
                <p>Built a protected administrative interface to manage the platform's core data seamlessly.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Resilient API Architecture</h4>
                <p>Implemented graceful error handling and lazy initialization for third-party services to ensure zero server downtime during external API outages.</p>
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
              <span>Tailwind CSS</span>
              <span>Framer Motion</span>
            </div>
            <div className="tech-item backend">
              <h4>Backend</h4>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Resend</span>
            </div>
            <div className="tech-item database">
              <h4>Database</h4>
              <span>PostgreSQL</span>
              <span>Prisma ORM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zeitlos;
