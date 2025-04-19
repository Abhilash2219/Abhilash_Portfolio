import Link from "next/link";
import { FaHome } from "react-icons/fa"; // Import React icons
import "../styles/header.css";
import navigationData from "../../public/data/navigation.json"; // Import JSON file

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul style={{ marginLeft: 0 }}>
          {navigationData.navigationLinks
            .filter(link => link.icon) // Only render links with icons in the first list
            .map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <FaHome
                    size={link.iconSize}
                    style={{ color: "black" }}
                  />
                </Link>
              </li>
          ))}
        </ul>
        <ul style={{ marginLeft: "auto" }}>
          {navigationData.navigationLinks
            .filter(link => link.label) // Render links with labels in the second list
            .map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
