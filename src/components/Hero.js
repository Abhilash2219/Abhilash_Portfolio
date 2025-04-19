import React, { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import Modal from "./Modal";
import heroData from "../../public/data/hero.json"; // Import JSON file
import styles from "@/styles/hero.module.css"; // Import the scoped CSS module

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewResumeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { name, description, profileImage, resumeUrl } = heroData.heroContent;

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          I&apos;m <span className={styles.name}>{name}</span>
        </h1>
        <p>{description}</p>
        <div className={styles.heroButtons}>
          <button className="btn btn-primary" onClick={handleViewResumeClick}>
            📄 View Resume
          </button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image
          src={profileImage.src}
          alt={profileImage.alt}
          width={profileImage.width}
          height={profileImage.height}
          className="profile-image"
        />
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} resumeUrl={resumeUrl} />
    </section>
  );
};

export default Hero;
