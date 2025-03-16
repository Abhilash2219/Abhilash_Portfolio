import "../styles/experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Associate Trainee at GSK (Appreciate Program)",
      duration: "Ongoing",
      description:
        "Gaining hands-on experience in software development, collaborating with teams, and learning advanced industry practices.",
    },
    {
      title: "Cashier at D-Mart (Part-time)",
      duration: "Ongoing",
      description:
        "Handling cash transactions, assisting customers, and managing billing operations efficiently.",
    },
    {
      title: "Full Stack Developer Intern - TAP Academy",
      duration: "Completed",
      description:
        "Developed web applications using React.js, Node.js, and MongoDB.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      
      <div className="experience-container">
        {experiences.map((exp, index) => (
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
