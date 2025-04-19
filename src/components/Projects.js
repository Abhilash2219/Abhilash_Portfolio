import projectsData from "../../public/data/projects.json"; // Import the JSON file
import styles from "@/styles/projects.module.css"; // Import the scoped CSS module

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projectsContainer}>
        {projectsData.projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <h3 className={styles.projectCardTitle}>{project.title}</h3>
            <p className={styles.projectCardDescription}>{project.description}</p>
            <ul className={styles.techStack}>
              {project.techStack.map((tech, i) => (
                <li key={i} className={styles.techStackItem}>
                  {tech}
                </li>
              ))}
            </ul>
            <div className={styles.projectButtons}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
              >
                View Project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.btnGithub}`}
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
