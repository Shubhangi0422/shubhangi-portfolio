import "../styles/Blog.css";

function Blog() {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">

        <h2 className="blog-title">Featured Blog</h2>

        <div className="blog-card">

          <span className="blog-tag">
            Project Leadership • React.js • Government Project
          </span>

          <h3>
            Lessons I Learned While Leading the GPDP Portal Project
          </h3>

          <p className="blog-date">
            June 2026 • 5 min read
          </p>

          <div className="blog-content">

            <h4>Introduction</h4>

            <p>
              Working on the GPDP (Gram Panchayat Development Plan) Portal has
              been one of the most valuable experiences in my software
              development journey. As a Software Developer at Austere Systems
              Limited, I had the opportunity to contribute not only to frontend
              development but also to project coordination, API integration, and
              cross-team collaboration.
            </p>

            <h4>Frontend Development Challenges</h4>

            <p>
              My primary responsibility was frontend development using React.js.
              The project involved creating dashboards, reports, user workflows,
              and data-driven interfaces while ensuring performance and
              maintainability.
            </p>

            <ul>
              <li>Managing large datasets efficiently</li>
              <li>Building reusable React components</li>
              <li>Handling dynamic forms and validations</li>
              <li>Integrating multiple APIs seamlessly</li>
              <li>Creating responsive user experiences</li>
            </ul>

            <h4>Supporting Backend Development</h4>

            <p>
              While my primary focus was frontend development, I frequently
              collaborated with backend developers to solve API-related
              challenges and improve integration workflows.
            </p>

            <ul>
              <li>Understanding API structures</li>
              <li>Testing and validating endpoints</li>
              <li>Supporting database discussions</li>
              <li>Troubleshooting integration issues</li>
            </ul>

            <h4>Leadership and Collaboration</h4>

            <p>
              One of the most rewarding aspects of the project was contributing
              to team coordination and delivery planning. Effective communication
              and collaboration helped ensure timely project execution.
            </p>

            <h4>Key Takeaways</h4>

            <ul>
              <li>Scalable React application development</li>
              <li>API-driven architecture understanding</li>
              <li>Cross-functional team collaboration</li>
              <li>Project planning and delivery management</li>
              <li>Writing maintainable and reusable code</li>
            </ul>

            <h4>Conclusion</h4>

            <p>
              The GPDP Portal project significantly contributed to my growth as
              a software developer. It strengthened my technical expertise,
              improved my communication skills, and provided valuable experience
              in project leadership and enterprise application development.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Blog;