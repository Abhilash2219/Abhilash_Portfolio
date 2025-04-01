import Link from "next/link";
import { FaHome } from "react-icons/fa"; // Import FaHome icon
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul style={{ marginLeft: 0 }}>
          <li>
            <Link href="/">
              <FaHome size={24} style={{ color: "white" }} /> 
            </Link>
          </li>
        </ul>
        <ul style={{ marginLeft: "auto" }}>
          <li><Link href="#about">About Me</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
