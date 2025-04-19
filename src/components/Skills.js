import { useState } from "react";
import "../styles/skills.css";
import skillsJson from "../../public/data/skills.json"; // Import the JSON file

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState("frontend");

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Tech Stack</h2>

      {/* Main Skills as Buttons */}
      <div className="skills-buttons">
        {skillsJson.skillsData.map((skill) => (
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
        {skillsJson.skillsData
          .filter((skill) => skill.id === activeSkill)
          .map((skill) => (
            <div key={skill.id} className="sub-skills">
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
