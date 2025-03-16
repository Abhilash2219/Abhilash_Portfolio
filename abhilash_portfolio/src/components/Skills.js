import { useState } from "react";
import "../styles/skills.css";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState("frontend");

  const skillsData = [
    {
      id: "frontend",
      title: "Frontend Development",
      subSkills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML & CSS"],
    },
    {
      id: "backend",
      title: "Backend Development",
      subSkills: ["Node.js", "Express.js", "PHP"],
    },
    {
      id: "database",
      title: "Database Management",
      subSkills: ["MongoDB", "SQL (MySQL, PostgreSQL)"],
    },
    {
      id: "other",
      title: "Other Skills",
      subSkills: ["Linux Commands", "Git & GitHub", "REST APIs", "JWT Authentication"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Tech Stack</h2>

      {/* Main Skills as Buttons */}
      <div className="skills-buttons">
        {skillsData.map((skill) => (
          <button
            key={skill.id}
            className={`skill-button ${activeSkill === skill.id ? "active" : ""}`}
            onClick={() => setActiveSkill(skill.id)}
          >
            {skill.title}
          </button>
        ))}
      </div>

      {/* Display Sub-Skills of Selected Main Skill */}
      <div className="sub-skills-container">
        {skillsData
          .filter((skill) => skill.id === activeSkill)
          .map((skill) => (
            <div key={skill.id} className="sub-skills">
              <h3>{skill.title}</h3>
              <ul>
                {skill.subSkills.map((sub, index) => (
                  <li key={index}>{sub}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
