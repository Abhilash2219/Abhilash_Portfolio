import SocialBar from '../components/SocialBar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from "../components/Education";
import Certificates from '../components/Certificates';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import "@/styles/certificates.css";
import "@/styles/experience.css";
import "@/styles/footer.css";
import "@/styles/header.css";
import "@/styles/hero.css";
import "@/styles/modal.css";
import "@/styles/projects.css";
import "@/styles/skills.css";
import '@/styles/socialbar.css';

export default function Home() {
  return (
    <>
      <SocialBar />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Experience />
      <Footer />
    </>
  );
}
