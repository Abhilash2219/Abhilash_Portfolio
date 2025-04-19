import { useState } from "react";
import styles from "@/styles/skills.module.css"; // Import the scoped CSS module
import skillsJson from "../../public/data/skills.json"; // Import the JSON file

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState("frontend");

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.skillsTitle}>Tech Stack</h2>

      {/* Main Skills as Buttons */}
      <div className={styles.skillsButtons}>
        {skillsJson.skillsData.map((skill) => (
          <button
            key={skill.id}
            className={`${styles.skillButton} ${activeSkill === skill.id ? styles.active : ""}`}
            onClick={() => setActiveSkill(skill.id)}
          >
            {skill.title}
          </button>
        ))}
      </div>

      {/* Display Sub-Skills of Selected Main Skill */}
      <div className={styles.subSkillsContainer}>
        {skillsJson.skillsData
          .filter((skill) => skill.id === activeSkill)
          .map((skill) => (
            <div key={skill.id} className={styles.subSkills}>
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
