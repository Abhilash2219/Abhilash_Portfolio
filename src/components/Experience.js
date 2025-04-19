import experienceData from "../../public/data/experience.json"; // Import JSON file
import styles from "../styles/experience.module.css"; // Import scoped CSS module

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.experienceTitle}>Experience</h2>

      <div className={styles.experienceContainer}>
        {experienceData.experiences.map((exp, index) => (
          <div key={index} className={styles.experienceCard}>
            <div className={styles.experienceCardDot}></div>
            <div
              className={`${styles.experienceCardLine} ${
                index === 0 ? styles.experienceCardLineFirst : ""
              } ${index === experienceData.experiences.length - 1 ? styles.experienceCardLineLast : ""}`}
            ></div>
            <h3 className={styles.experienceCardTitle}>{exp.title}</h3>
            <p className={styles.experienceCardStrong}>
              <strong>Duration:</strong> {exp.duration}
            </p>
            <p className={styles.experienceCardDescription}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
