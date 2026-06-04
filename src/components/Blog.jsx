// import { useState } from "react";
// import "../styles/Blog.css";

// function Blog() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <section id="blog" className="blog-section">
//       <div className="blog-container">

//         <h2 className="blog-title">Featured Blog</h2>

//         <div className="blog-card">

//           <span className="blog-tag">
//             Project Leadership • React.js • Government Project
//           </span>

//           <h3>
//             Lessons I Learned While Leading the GPDP Portal Project
//           </h3>

//           <p className="blog-date">
//             June 2026 • 5 min read
//           </p>

//           <p className="blog-preview">
//             Leading the GPDP Haryana Portal taught me much more than frontend
//             development. From coordinating with teams to solving API integration
//             challenges, this project helped me grow as both a developer and a leader.
//           </p>

//           <button
//             className="read-more-btn"
//             onClick={() => setShowModal(true)}
//           >
//             Read More
//           </button>

//         </div>

//         {showModal && (
//           <div
//             className="modal-overlay"
//             onClick={() => setShowModal(false)}
//           >
//             <div
//               className="modal-content"
//               onClick={(e) => e.stopPropagation()}
//             >

//               <button
//                 className="close-btn"
//                 onClick={() => setShowModal(false)}
//               >
//                 ✕
//               </button>

//               <h2>
//                 Lessons I Learned While Leading the GPDP Portal Project
//               </h2>

//               <p>
//                 Working on the GPDP (Gram Panchayat Development Plan) Portal
//                 has been one of the most valuable experiences in my software
//                 development journey.
//               </p>

//               <h4>Frontend Development Challenges</h4>

//               <ul>
//                 <li>Managing large datasets efficiently</li>
//                 <li>Building reusable React components</li>
//                 <li>Handling dynamic forms and validations</li>
//                 <li>Integrating multiple APIs seamlessly</li>
//                 <li>Creating responsive user experiences</li>
//               </ul>

//               <h4>Supporting Backend Development</h4>

//               <p>
//                 While my primary focus was frontend development, I actively
//                 collaborated with backend developers to solve API challenges,
//                 validate endpoints, and improve integration workflows.
//               </p>

//               <h4>Leadership & Team Collaboration</h4>

//               <p>
//                 Beyond development, I contributed to project planning,
//                 coordination, and timely delivery. Working closely with team
//                 members helped ensure successful implementation of features and reports.
//               </p>

//               <h4>Key Takeaways</h4>

//               <ul>
//                 <li>Scalable React application development</li>
//                 <li>API integration and troubleshooting</li>
//                 <li>Cross-functional collaboration</li>
//                 <li>Project coordination and leadership</li>
//                 <li>Writing maintainable and reusable code</li>
//               </ul>

//               <p>
//                 The GPDP Portal significantly enhanced my technical expertise,
//                 communication skills, and ability to contribute to enterprise-level projects.
//               </p>

//             </div>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }

// export default Blog;





import { useState } from "react";
import "../styles/Blog.css";

function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      tag: "Project Leadership • React.js • Government Project",
      title: "Lessons I Learned While Leading the GPDP Portal Project",
      date: "June 2026 • 5 min read",
      preview:
        "Leading the GPDP Haryana Portal taught me much more than frontend development. From coordinating with teams to solving API integration challenges, this project helped me grow as both a developer and a leader.",
      content: (
        <>
          <h4>Introduction</h4>
          <p>
            Working on the GPDP Portal was one of the most valuable experiences
            in my software development journey. I contributed to frontend
            development, project coordination, API integrations, and team
            collaboration.
          </p>

          <h4>Frontend Development Challenges</h4>
          <ul>
            <li>Managing large datasets efficiently</li>
            <li>Building reusable React components</li>
            <li>Handling dynamic forms and validations</li>
            <li>Integrating multiple APIs seamlessly</li>
            <li>Creating responsive user experiences</li>
          </ul>

          <h4>Leadership & Collaboration</h4>
          <p>
            Beyond development, I helped coordinate project activities, support
            backend integration discussions, and ensure timely delivery of
            features and reports.
          </p>

          <h4>Key Takeaways</h4>
          <ul>
            <li>Scalable React application development</li>
            <li>API integration and troubleshooting</li>
            <li>Cross-functional collaboration</li>
            <li>Project planning and delivery management</li>
          </ul>
        </>
      ),
    },

    {
      id: 2,
      tag: "FastAPI • AI Integration • Backend Development",
      title: "Using FastAPI for AI Backend Services",
      date: "June 2026 • 4 min read",
      preview:
        "While building AI-powered applications, I explored FastAPI as a backend service for document processing, video summarization, and AI model integration. It proved to be a powerful framework for developing high-performance APIs.",
      content: (
        <>
          <h4>Introduction</h4>

          <p>
            Modern AI applications require efficient backend services to process
            data and communicate with machine learning models. During an AI
            project, I used FastAPI to build backend services for content
            summarization and AI-powered processing.
          </p>

          <h4>Why FastAPI?</h4>

          <ul>
            <li>High performance and speed</li>
            <li>Automatic API documentation</li>
            <li>Easy AI/ML library integration</li>
            <li>Asynchronous request handling</li>
            <li>Clean and maintainable architecture</li>
          </ul>

          <h4>Project Architecture</h4>

          <p>
            The application consisted of a React frontend, Node.js backend, and
            FastAPI service for AI processing. FastAPI handled document
            extraction, summarization, and AI-related workflows.
          </p>

          <h4>Challenges Faced</h4>

          <ul>
            <li>Large file upload handling</li>
            <li>Node.js ↔ FastAPI communication</li>
            <li>AI response validation</li>
            <li>Performance optimization</li>
          </ul>

          <h4>Key Learnings</h4>

          <ul>
            <li>REST API development using FastAPI</li>
            <li>AI service integration</li>
            <li>Backend architecture design</li>
            <li>API security and validation</li>
          </ul>

          <p>
            FastAPI proved to be an excellent framework for building scalable AI
            backend services and strengthened my backend development skills.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">

        <h2 className="blog-title">Featured Blogs</h2>

        <div className="blogs-grid">

          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">

              <span className="blog-tag">
                {blog.tag}
              </span>

              <h3>{blog.title}</h3>

              <p className="blog-date">
                {blog.date}
              </p>

              <p className="blog-preview">
                {blog.preview}
              </p>

              <button
                className="read-more-btn"
                onClick={() => setSelectedBlog(blog)}
              >
                Read More
              </button>

            </div>
          ))}

        </div>

        {selectedBlog && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedBlog(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedBlog(null)}
              >
                ✕
              </button>

              <span className="blog-tag">
                {selectedBlog.tag}
              </span>

              <h2>{selectedBlog.title}</h2>

              <p className="blog-date">
                {selectedBlog.date}
              </p>

              {selectedBlog.content}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Blog;