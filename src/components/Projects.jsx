import "../styles/Projects.css";

const projects = [
  {
    title: "GPDP Haryana Portal",
    role: "Project Lead",
    featured: true,
    description:
      "Led the development of GPDP Haryana Portal for Haryana Panchayat Department. Managed workflows, dashboards, maps and reporting modules.",
    tech: "React • Node.js • MySQL • AWS S3 • JWT",
    link: "/projects/gpdp",
  },

  {
    title: "EdCIL Recruiter Management Portal",
    role: "Full Stack Developer",
    featured: false,
    description:
      "Recruitment management platform for handling jobs, applications, candidate workflows and dashboards.",
    tech: "React • Python • PostgreSQL • JWT",
    link: "/projects/edcil",
  },

  {
    title: "Haryana Panchayat Portal",
    role: "Frontend Developer",
    featured: false,
    description:
      "Government portal with responsive UI, dashboard analytics and real-time API integrations.",
    tech: "React • Dashboard • APIs",
    link: "/projects/panchayat",
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
          >
            <span className="role-badge">
              {project.role}
            </span>
            {project.featured && (
              <div className="featured-badge">
                ⭐ Featured Project
              </div>
            )}

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech}
            </div>

            <button className="project-btn">
              View Details →
            </button>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;