import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/GPDP.css";
import "../styles/ProjectGallery.css";
import image1 from "../assets/IDEAHUB1.png";
import image2 from "../assets/IDEAHUB2.png";
import image3 from "../assets/IDEAHUB3.png";

function Ideahub() {
  const [activeImage, setActiveImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({
    img1: false,
    img2: false,
    img3: false,
  });

  const images = [
    { src: image1, alt: "Ideahub Home Page", title: "Home Feed" },
    { src: image2, alt: "Ideahub Ideas View", title: "Idea Details" },
    { src: image3, alt: "Ideahub User Profile", title: "User Profile" },
  ];

  return (
    <div className="gpdp-page">
      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <section className="gpdp-hero">
        <span className="gpdp-badge">Full Stack Developer</span>

        <h1 className="gpdp-title">
          Ideahub 💡
        </h1>

        <p className="gpdp-subtitle">
          A full-stack social platform designed for innovators to share, discover, and collaborate on ideas.
        </p>
      </section>

      {/* Creative Image Gallery Section */}
      <div className="creative-gallery-wrapper">
        {/* Main Featured Image */}
        <div className="featured-image-container">
          <div className="image-frame">
            <img
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              className={`featured-image ${imageLoaded[`img${activeImage + 1}`] ? 'loaded' : ''}`}
              onLoad={() => setImageLoaded(prev => ({
                ...prev,
                [`img${activeImage + 1}`]: true
              }))}
            />
          </div>
          <div className="image-title">
            <h3>{images[activeImage].title}</h3>
          </div>
        </div>

        {/* Thumbnail Navigation */}
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

        {/* Gallery Indicators */}
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
        {/* Info Cards */}
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
            <p>Social Platform</p>
          </div>
        </div>

        {/* Project Overview Section */}
        <div className="project-section">
          <h2>Project Overview</h2>

          <p style={{ marginBottom: "1rem", lineHeight: "1.8" }}>
            Ideahub is a dynamic web application that serves as a centralized hub for brainstorming and idea sharing. It allows users to publish their creative concepts, categorize them, and add relevant tags. Designed with community engagement in mind, the platform enables users to interact with ideas through likes, comments, and saving favorites for later. It also features a robust notification system to keep users updated on engagement with their posts.
          </p>

          <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
            <a
              href="https://ideashubb.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              🚀 View Live Project
            </a>
          </div>

          <h3 className="section-subtitle">Key Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>User Authentication & Profiles</h4>
                <p>Secure signup/login flows with personalized user profiles to track their posted and saved ideas.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Idea Management System</h4>
                <p>Users can create comprehensive idea posts including titles, detailed descriptions, categories, tags, and external references.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Social Engagement</h4>
                <p>Interactive features allowing users to like and comment on ideas, fostering community discussions.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Content Curation</h4>
                <p>Functionality for users to "Save" ideas they find interesting into a personal reading list.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Notification Engine</h4>
                <p>Real-time alerting system that notifies idea owners whenever someone likes or comments on their posts.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-indicator"></div>
              <div className="feature-text">
                <h4>Responsive UI</h4>
                <p>A modern, clean, and fast user interface built with the latest React and Tailwind CSS for a seamless experience across all devices.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="project-section">
          <h2>Tech Stack</h2>

          <div className="tech-stack-enhanced">
            <div className="tech-item frontend">
              <h4>Frontend</h4>
              <span>React 19</span>
              <span>Vite</span>
              <span>Tailwind CSS</span>
              <span>React Router</span>
            </div>
            <div className="tech-item backend">
              <h4>Backend</h4>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>JWT</span>
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

export default Ideahub;
