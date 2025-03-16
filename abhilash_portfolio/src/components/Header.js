import Link from "next/link";
import { Home } from "lucide-react"; // Import Home icon from Lucide React
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <Home size={24} /> {/* Home icon instead of text */}
            </Link>
          </li>
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
