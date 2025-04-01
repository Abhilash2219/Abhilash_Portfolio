import React, { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
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
          I&apos;m <span className="name">Abhilash Badiger</span>
        </h1>
        <p>
          I&apos;m a passionate developer specializing in creating user-friendly
          applications with modern technologies. I focus on providing solutions that
          make a real difference.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={handleViewResumeClick}>
            📄 View Resume
          </button>
        </div>
      </div>
      <div className="hero-image">
        <Image 
          src="/images/abhi.jpg" 
          alt="Abhilash Badiger"
          className="profile-image"
        />
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} resumeUrl="/resume.pdf" />
    </section>
  );
};

export default Hero;
