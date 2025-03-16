import '../styles/socialbar.css';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const SocialBar = () => {
  return (
    <div className="social-bar">
      <a href="mailto:abhilashbadiger0000@gmail.com" className="social-item">
        <FaEnvelope /> abhilashbadiger0000@gmail.com
      </a>
      <a href="tel:+918951104063" className="social-item">
        <FaPhone /> +91 89511 04063
      </a>
      <a href="https://www.linkedin.com/in/abhilashbadiger/" target="_blank" rel="noopener noreferrer" className="social-item">
        <FaLinkedin /> LinkedIn
      </a>
    </div>
  );
};

export default SocialBar;
