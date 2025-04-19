
import projectsData from "../../public/data/projects.json"; // Import the JSON file

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-stack">
              {project.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className="project-buttons">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github"
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
