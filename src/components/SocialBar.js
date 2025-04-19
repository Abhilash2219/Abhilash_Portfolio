import React from "react";
import { FaLinkedin, FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import socialLinksData from '../../public/data/socialbar.json'; // Import the JSON file
import styles from '@/styles/socialbar.module.css'; // <-- Import your CSS module

const SocialBar = () => {
  const iconMap = {
    FaLinkedin: FaLinkedin,
    FaEnvelope: FaEnvelope,
    FaMobileAlt: FaMobileAlt
  };

  return (
    <div className={styles.socialBar}>
      {socialLinksData.socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={styles.socialItem}
          target={link.target || "_self"}
          rel={link.rel || ""}
        >
          {iconMap[link.icon] && React.createElement(iconMap[link.icon])}
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
