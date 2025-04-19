import React from 'react';
import Link from "next/link";
import { FaHome, FaInfoCircle, FaEnvelope, FaUser } from "react-icons/fa"; // Import all needed icons
import navigationData from "../../public/data/navigation.json"; // Your navigation links
import styles from '@/styles/header.module.css'; // Assuming you create a Header.module.css file

const iconMap = {
  FaHome: FaHome,
  FaInfoCircle: FaInfoCircle,
  FaEnvelope: FaEnvelope,
  FaUser: FaUser
};

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul style={{ marginLeft: 0 }}>
          {navigationData.navigationLinks
            .filter(link => link.icon)
            .map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  {iconMap[link.icon] && (
                    <span>
                      {React.createElement(iconMap[link.icon], { size: link.iconSize || 24, style: { color: "black" } })}
                    </span>
                  )}
                </Link>
              </li>
          ))}
        </ul>
        <ul style={{ marginLeft: "auto" }}>
          {navigationData.navigationLinks
            .filter(link => link.label)
            .map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  {link.label}
                </Link>
              </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
