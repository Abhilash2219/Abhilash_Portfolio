import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import styles from '../styles/footer.module.css'; // Import the scoped CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Contact Me</h2> {/* Optional: Adding a heading for clarity */}
      
      <div className={styles.footerLinks}>
        <a
          href="mailto:abhilashbadiger0000@gmail.com"
          className={styles.footerLink}
          aria-label="Email Abhilash"
        >
          <FaEnvelope /> abhilashbadiger0000@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/abhilashbadiger/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a href="tel:+918951104063" className={styles.footerLink} aria-label="Call Abhilash">
          <FaPhone /> +91 89511 04063
        </a>
      </div>
      <p className={styles.footerCopy}>
        © {new Date().getFullYear()} Abhilash Badiger | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
