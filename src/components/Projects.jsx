import "../styles/Projects.css";
import ideahubImg from "../assets/IDEAHUB1.png";
import zeitlosImg from "../assets/ZEITLOS1.png";
import gpdpImg from "../assets/GPDP.png";
import edcilImg from "../assets/EDCIL1.png";

const projects = [
  {
    title: "Ideahub 💡",
    role: "Full Stack Developer",
    featured: true,
    image: ideahubImg,
    description:
      "A full-stack social platform designed for innovators to share, discover, and collaborate on ideas.",
    tech: "React 19 • Node.js • PostgreSQL • Tailwind",
    link: "/projects/ideahub",
  },

  {
    title: "ZEITLOS | Premium E-Commerce",
    role: "Full Stack Developer",
    featured: true,
    image: zeitlosImg,
    description:
      "A full-stack luxury fashion storefront with a secure, high-performance architecture, modern UI, and advanced authentication.",
    tech: "React • Node.js • PostgreSQL • Tailwind",
    link: "/projects/zeitlos",
  },

  {
    title: "GPDP Haryana Portal",
    role: "Project Lead",
    featured: true,
    image: gpdpImg,
    description:
      "Led the development of GPDP Haryana Portal for Haryana Panchayat Department. Managed workflows, dashboards, maps and reporting modules.",
    tech: "React • Node.js • MySQL • AWS S3 • JWT",
    link: "/projects/gpdp",
  },

  {
    title: "EdCIL Recruiter Management Portal",
    role: "Full Stack Developer",
    featured: false,
    image: edcilImg,
    description:
      "Recruitment management platform for handling jobs, applications, candidate workflows and dashboards.",
    tech: "React • Python • PostgreSQL • JWT",
    link: "/projects/edcil",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        Featured Projects
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            className="project-card"
            style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}
          >
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ 
                  width: "100%", 
                  height: "200px", 
                  objectFit: "cover", 
                  borderRadius: "8px", 
                  marginBottom: "1rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                }} 
              />
            )}
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <span className="role-badge">
                {project.role}
              </span>
              {project.featured && (
                <div className="featured-badge" style={{ fontSize: "0.8rem" }}>
                  ⭐ Featured
                </div>
              )}
            </div>

            <h3 style={{ marginTop: "0.5rem" }}>{project.title}</h3>

            <p style={{ flexGrow: 1 }}>{project.description}</p>

            <div className="project-tech">
              {project.tech}
            </div>

            <button className="project-btn" style={{ marginTop: "auto" }}>
              View Details →
            </button>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;