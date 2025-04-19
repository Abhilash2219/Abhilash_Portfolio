import '../styles/globals.css'; // Global styles
import "../styles/certificates.css";
import "../styles/experience.css";
import "../styles/footer.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/modal.css";
import "../styles/projects.css";
import "../styles/skills.css";
import '../styles/socialbar.css';
 // Add any other global styles here
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
