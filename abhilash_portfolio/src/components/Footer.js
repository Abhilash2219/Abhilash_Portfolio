import "../styles/footer.css";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-links">
        <a href="mailto:abhilashbadiger0000@gmail.com" className="footer-link">
          <FaEnvelope /> abhilashbadiger0000@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/abhilashbadiger/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a href="tel:+918951104063" className="footer-link">
          <FaPhone /> +91 89511 04063
        </a>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} Abhilash Badiger | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
