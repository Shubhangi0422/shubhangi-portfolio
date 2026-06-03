import "../styles/Skills.css";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiHtml5,
  SiPostgresql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

function Skills() {
  const skills = [
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiHtml5 />,
      name: "HTML5",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaJava />,
      name: "Java"
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="skills-header">

        <span>MY SKILLS</span>

        <h2>
          Technologies I Work With
        </h2>

        <p>
          Building modern web applications using
          frontend technologies, APIs and databases.
        </p>

      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;