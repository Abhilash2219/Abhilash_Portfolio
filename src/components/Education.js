import styles from "../styles/Education.module.css";
import educationData from "../../public/data/education.json";

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <h2>Education Journey</h2>
      <div className={styles.educationContainer}>
        {educationData.educationData.map((edu, index) => (
          <div
            key={index}
            className={styles.educationCard}
            style={{
              alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
            }}
          >
            <h3>{edu.title}</h3>
            <p>{edu.institution}</p>
            <p>
              <strong>Completion:</strong> {edu.completionDate} | {edu.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
