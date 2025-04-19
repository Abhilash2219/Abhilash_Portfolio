import "../styles/experience.css";
import experienceData from "../../public/data/experience.json"; // Import JSON file

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      
      <div className="experience-container">
        {experienceData.experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.title}</h3>
            <p><strong>Duration:</strong> {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
