import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span>Abhilash Badiger</span></h1>
        <p>A passionate <strong>Full-Stack Developer</strong> who loves building user-friendly applications.</p>
        <p>Experienced in <strong>React.js, Next.js, MongoDB, Express, Java</strong> & more.</p>
        <div className="hero-buttons">
          <a href="/resume.pdf" className="btn btn-primary" download>📄 View Resume</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/abhi.jpg" alt="Abhilash Badiger" />
      </div>
    </section>
  );
};

export default Hero;
