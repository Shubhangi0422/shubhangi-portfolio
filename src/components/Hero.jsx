import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import resume from "../assets/Resume.pdf";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-glow-left"></div>
      <div className="hero-glow-right"></div>

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="hero-tag">
            👋 Hello, I'm
          </p>

          <h1 className="hero-title">
            Shubhangi
            <span> Jain</span>
          </h1>

          <h2 className="hero-subtitle">
            Software Developer
          </h2>
          <p className="hero-techline">
            React.js • Java • SQL • Modern Web Technologies
          </p>

          <p className="hero-description">
            Software Developer with 1+ year of experience creating
            responsive web applications, government portals and
            modern user interfaces using React.js and JavaScript.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a
              href={resume}
              download
              className="btn-secondary"
            >
              Download Resume
            </a>

          </div>

          <div className="tech-stack">

            <span>React.js</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>Tailwind</span>

          </div>

        </motion.div>

        <motion.div
          className="hero-image-section"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="image-glow"></div>

          <img
            src={profile}
            alt="profile"
            className="hero-image"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;