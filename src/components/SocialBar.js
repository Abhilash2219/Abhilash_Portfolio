import React from "react"; 

import { FaLinkedin, FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import socialLinksData from '../../public/data/socialbar.json'; // Import the JSON file

const SocialBar = () => {
  const iconMap = {
    FaLinkedin: FaLinkedin,
    FaEnvelope: FaEnvelope,
    FaMobileAlt: FaMobileAlt
  };

  return (
    <div className="social-bar">
      {socialLinksData.socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="social-item"
          target={link.target || "_self"} // Default to "_self" if `target` is not provided
          rel={link.rel || ""} // Default to empty string if `rel` is not provided
        >
          {iconMap[link.icon] && React.createElement(iconMap[link.icon])} {/* Render the correct icon dynamically */}
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
