import React, { useState } from "react";
import "../styles/hero.css";
import Modal from "./Modal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewResumeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          I'm <span className="name">Abhilash Badiger</span>
        </h1>
        <p>
        I'm a passionate developer specializing in creating user-friendly
        applications with modern technologies. I focus on providing solutions that
        make a real difference.
        </p>
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={handleViewResumeClick}
          >
            📄 View Resume
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/abhi.jpg" alt="Abhilash Badiger" />
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        resumeUrl="/resume.pdf"
      />
    </section>
  );
};

export default Hero;
