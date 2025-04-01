import "../styles/projects.css";

const projectsData = [
  {
    title: "Car Rental System",
    description:
      "A web application for booking and managing rental cars with secure authentication and real-time availability.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express"],
    link: "https://your-car-rental-project-link.com",
  },
  {
    title: "Airline Reservation System",
    description:
      "An airline ticket booking system with user authentication, ticket management, and payment integration.",
    techStack: ["Java", "Spring Boot", "MySQL"],
    link: "https://your-airline-reservation-link.com",
  },
  {
    title: "Healthcare All-in-One Solution",
    description:
      "An integrated healthcare platform providing online appointments, medical records management, and more.",
    techStack: ["React.js", "MongoDB", "Express.js", "Node.js"],
    link: "https://your-healthcare-solution-link.com",
  },
  {
    title: "Todo List App",
    description:
      "A simple todo list application built using the MERN stack, allowing users to create, read, update, and delete tasks.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: "https://your-todo-list-app-link.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-stack">
              {project.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
