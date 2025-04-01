import '../styles/globals.css'; // Global styles
import '../styles/certificates.css'; // Add any other global styles here
import '../styles/experience.css';  // Add any other global styles here
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
