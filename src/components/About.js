import styles from "../styles/about.module.css"; // Import scoped CSS
import aboutData from "../../public/data/about.json"; // Import the JSON file

const About = () => {
  const { heading, description } = aboutData.about;

  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContent}>
        <h2>{heading}</h2>
        {description.map((text, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
      </div>
    </section>
  );
};

export default About;
